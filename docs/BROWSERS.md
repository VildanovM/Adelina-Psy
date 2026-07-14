# 🌐 Кроссбраузерная вёрстка

Правила для Safari, Firefox и Chrome. Цель — чтобы страница выглядела и работала **одинаково сразу**, без «починим потом под Firefox».

---

## Главный принцип

Перед деплоем проверяем **все три браузера**:

| Браузер | Зачем |
|---------|-------|
| **Chrome** | Базовая проверка, DevTools |
| **Firefox** | Строгая модель `<button>`, grid/flex |
| **Safari** | iOS/macOS, `-webkit-`, viewport, touch |

Не считаем задачу готовой, если проверка была только в одном браузере.

---

## Чеклист перед деплоем

- [ ] Сетка и карточки выровнены одинаково (без «ступенек» и наложений)
- [ ] `max-height` / `max-width` у изображений реально ограничивают размер
- [ ] Кликабельные блоки открывают lightbox / модалки
- [ ] Hover-состояния не ломают layout (нет конфликта `transform`)
- [ ] Модальное окно закрывается: крестик, клик по фону, `Esc`
- [ ] На мобильном Safari нет горизонтального скролла
- [ ] Жёсткое обновление (`Cmd+Shift+R`) — CSS/JS не из старого кэша

---

## Firefox

### Не вкладывать сложную вёрстку в `<button>`

В Firefox содержимое кнопки рендерится в особом контексте. Внутри `<button>` **ненадёжно** работают:

- `position: absolute` у дочерних элементов (подсказки «уезжают» в поток документа)
- `max-height` у `<img>` (картинка может игнорировать ограничение)
- сложные flex/grid-обёртки

**Плохо:**

```html
<button class="card">
  <span class="card__media">
    <img src="review.png" alt="">
    <span class="card__hint">Открыть</span>
  </span>
</button>
```

**Хорошо:**

```html
<div class="card" role="button" tabindex="0" aria-label="Открыть отзыв">
  <span class="card__media">
    <img src="review.png" alt="">
    <span class="card__hint" aria-hidden="true">Открыть</span>
  </span>
</div>
```

Обработку клика и клавиатуры (`Enter`, `Space`) добавляем в JS.

### Ограничение высоты изображений

Задаём `max-height` **и на контейнер, и на картинку**:

```css
.card__media {
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 300px;
  overflow: hidden;
}

.card__media img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 300px;
  height: auto;
  object-fit: contain;
}
```

### Grid

Явно фиксируем выравнивание, если карточки разной высоты:

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
}

.cards-grid .card {
  align-self: start;
  min-width: 0;
}
```

---

## Safari (macOS и iOS)

### `backdrop-filter`

Для стеклянных карточек нужен префикс:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
```

### Viewport и высота модалок

`100vh` на iOS может включать панель браузера. Для lightbox предпочтительнее:

```css
.lightbox__dialog {
  max-height: calc(100vh - 2rem);
  max-height: calc(100dvh - 2rem); /* динамический viewport */
}
```

### Touch и zoom

Для жестов pinch-zoom в lightbox:

```css
.lightbox__viewport {
  touch-action: none; /* только там, где свой zoom */
}
```

Не вешаем `touch-action: none` на всю страницу.

### `-webkit-` для текста и клиппинга

При градиентном тексте:

```css
.title {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Chrome

Chrome чаще всего совпадает с эталоном, но **не заменяет** проверку в Firefox и Safari.

На что смотреть:

- конфликты `transform` между анимациями (`.reveal`) и hover-состояниями (`.glass-card:hover`)
- корректность `hidden` у модалок
- lazy-loading изображений (`loading="lazy"`) — не должен ломать lightbox при первом открытии

---

## Общие правила CSS

### Один `transform` — один владелец

Не вешаем `transform` одновременно на:

- scroll-reveal (`.reveal`)
- hover карточки (`.glass-card:hover`)
- кастомный компонент (`.review-card:hover`)

Иначе в одном браузере карточки смещаются, в другом — нет.

**Решение:** для интерактивных карточек не смешивать `.reveal` + `.glass-card` + hover-transform. Анимацию делать через `opacity` или выносить в отдельный wrapper.

### Специфичность для компонентов

Стили компонента задаём через родителя, чтобы не перебивались глобальными классами:

```css
.reviews-grid .review-card { /* ... */ }
.reviews-grid .review-card img { /* ... */ }
```

### Скрытие подсказок при hover

Используем пару `opacity` + `visibility`, чтобы элемент не занимал место в потоке:

```css
.hint {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.media:hover .hint {
  opacity: 1;
  visibility: visible;
}
```

---

## JavaScript

### Lightbox / модалки

- открытие: `element.removeAttribute('hidden')`
- закрытие: `element.setAttribute('hidden', '')`
- проверка состояния: `element.hasAttribute('hidden')` (не полагаться только на `.hidden`)

### Делегирование кликов

Для списка карточек надёжнее один обработчик на контейнер:

```javascript
reviewsGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.review-card[data-review-src]');
  if (!card) return;
  openLightbox(card.dataset.reviewSrc);
});
```

### Клавиатура для `role="button"`

```javascript
card.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openLightbox(card.dataset.reviewSrc);
  }
});
```

---

## Пример из проекта: блок отзывов

На странице `6-shagov-k-svobode/` уже учтено:

| Проблема | Решение |
|----------|---------|
| Firefox ломает layout внутри `<button>` | `<div role="button" tabindex="0">` |
| Картинки не ограничиваются по высоте | `max-height: 300px` на `.review-card__media` и `img` |
| Карточки «ступенькой» в grid | `align-items: start`, `align-self: start` |
| Конфликт анимаций | без `.reveal` / `.glass-card` на карточках отзывов |
| Подсказка видна всегда | `visibility: hidden` + hover на `.review-card__media` |
| Lightbox не открывается | делегирование клика + `hidden` через атрибут |

Файлы: `6-shagov-k-svobode/index.html`, `course-styles.css`, `course-main.js`.

---

## Минимальный набор для локальной проверки

```bash
cd /path/to/Psychologist
python3 -m http.server 3456
```

Открыть:

- http://localhost:3456/6-shagov-k-svobode/
- http://localhost:3456/6-shagov-k-svobode/#reviews

Проверить в Chrome, Firefox и Safari (или Responsive Mode + реальное устройство).

---

## Связанные документы

- [TECHNICAL.md](./TECHNICAL.md) — стек, деплой, a11y
- [DESIGN.md](./DESIGN.md) — дизайн-система, glass-карточки
