# 🖼 Ресурсы и ассеты

## Шрифты

### Google Fonts

**Подключение:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Cormorant Garamond (Display font)
- **Стиль:** Элегантный serif
- **Использование:** Заголовки, hero-текст, цитаты
- **Начертания:** 400, 500, 600
- **URL:** https://fonts.google.com/specimen/Cormorant+Garamond

### Outfit (Body font)
- **Стиль:** Современный геометрический sans-serif
- **Использование:** Основной текст, кнопки, навигация
- **Начертания:** 300, 400, 500, 600
- **URL:** https://fonts.google.com/specimen/Outfit

---

## Иконки

### Lucide Icons
- **Стиль:** Минималистичные линейные иконки
- **URL:** https://lucide.dev
- **CDN:** `https://unpkg.com/lucide@latest`

**Подключение:**
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

**Использование:**
```html
<i data-lucide="heart"></i>
<i data-lucide="brain"></i>
<i data-lucide="users"></i>
```

### Рекомендуемые иконки по секциям

| Секция | Иконка | Lucide name |
|--------|--------|-------------|
| Тревога | Мозг / Облако | `brain` / `cloud` |
| Неуверенность | Щит / Пользователь | `shield` / `user` |
| Отношения | Сердце / Люди | `heart` / `users` |
| Потеря себя | Компас | `compass` |
| Выгорание | Батарейка | `battery-low` |
| Страхи | Предупреждение | `alert-triangle` |
| Сепарация | Семья | `users` / `home` |
| Эмоции | Волны | `waves` / `activity` |
| Время | Часы | `clock` |
| Чекмарк | Галочка | `check` / `check-circle` |
| Диплом | Свиток | `scroll` / `award` |
| Безопасность | Замок | `lock` / `shield-check` |

---

## Изображения

### Необходимые изображения

| Файл | Размер | Назначение |
|------|--------|------------|
| `photo.jpg` | 800x1000px | Фото психолога для hero/about |
| `og-image.jpg` | 1200x630px | Open Graph для соцсетей |
| `favicon.svg` | 32x32 | Иконка сайта |
| `apple-touch-icon.png` | 180x180 | Иконка для iOS |

### Рекомендации по фото

**Для hero-секции:**
- Профессиональный портрет
- Нейтральный или светлый фон
- Мягкое освещение
- Располагающий, доверительный взгляд
- Формат: 3:4 или 2:3

**Стиль обработки:**
- Лёгкая цветокоррекция в тёплых тонах
- Соответствие цветовой палитре сайта
- Мягкий контраст

### Оптимизация

```bash
# Конвертация в WebP
cwebp photo.jpg -o photo.webp -q 85

# Оптимизация JPEG
jpegoptim --max=85 photo.jpg
```

**HTML с fallback:**
```html
<picture>
  <source srcset="assets/images/photo.webp" type="image/webp">
  <img src="assets/images/photo.jpg" alt="Психолог Вильданова Аделина">
</picture>
```

---

## Документы

### PDF-файлы

| Документ | Файл |
|----------|------|
| Публичная оферта | `oferta.pdf` |
| Политика конфиденциальности | `privacy.pdf` |
| Согласие на обработку ПД | `consent.pdf` |

**Размещение:** `/assets/documents/`

---

## Цветовые палитры

### Экспорт для дизайнеров

**Figma / Sketch:**
```
Primary:         #7C6AEF
Secondary:       #A594F9
Accent Soft:     #CDC1FF
Warm Rose:       #F5A9B8
Warm Peach:      #FFD6BA
Background:      #F8F9FE
Text Primary:    #1A1A2E
Text Secondary:  #4A4A68
```

### Градиенты

**Hero gradient:**
```css
linear-gradient(135deg, #E8E3F8 0%, #F5F2FF 50%, #FFF5F8 100%)
```

**Accent gradient:**
```css
linear-gradient(135deg, #7C6AEF 0%, #A594F9 50%, #F5A9B8 100%)
```

---

## Анимации

### Lottie (опционально)

Если нужны сложные анимации:
- **URL:** https://lottiefiles.com
- **Библиотека:** lottie-web

**Рекомендуемые анимации:**
- Плавающие пузыри / орбы
- Волновые линии
- Иконка загрузки

---

## Внешние сервисы

### Формы
- **Formspree:** https://formspree.io
- **Netlify Forms:** встроено в Netlify
- **Telegram Bot API:** для отправки в Telegram

### Аналитика
- **Яндекс.Метрика:** https://metrika.yandex.ru
- **Google Analytics:** https://analytics.google.com

### Хостинг изображений (если нужно)
- **Cloudinary:** https://cloudinary.com
- **imgbb:** https://imgbb.com

---

## Чеклист ассетов

### Перед запуском

- [ ] Фото психолога загружено и оптимизировано
- [ ] OG-изображение создано (1200x630)
- [ ] Favicon готов (SVG + PNG fallback)
- [ ] Шрифты подключены
- [ ] Иконки работают
- [ ] PDF-документы загружены
- [ ] Все изображения имеют alt-тексты

### Заглушки (для разработки)

Если фото ещё нет, можно использовать:
- **Placeholder:** https://placeholder.com
- **UI Faces:** https://uifaces.co (для тестовых фото)

```html
<!-- Временная заглушка -->
<img 
  src="https://via.placeholder.com/400x500/E8E3F8/7C6AEF?text=Photo" 
  alt="Placeholder"
>
```

---

## Brand Assets

### Логотип (если нужен)

Рекомендуемый подход для данного проекта — использовать стилизованное имя вместо логотипа:

```html
<a href="/" class="logo">
  <span class="logo-name">Аделина</span>
  <span class="logo-title">Психолог</span>
</a>
```

```css
.logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.logo-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.logo-title {
  font-family: var(--font-primary);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-primary);
}
```

---

## Социальные сети (если нужно)

### Иконки соцсетей

```html
<div class="social-links">
  <a href="#" aria-label="Telegram">
    <i data-lucide="send"></i>
  </a>
  <a href="#" aria-label="WhatsApp">
    <i data-lucide="message-circle"></i>
  </a>
</div>
```

### Ссылки (заполнить)
- Telegram: `https://t.me/USERNAME`
- WhatsApp: `https://wa.me/79XXXXXXXXX`
- Instagram: `https://instagram.com/USERNAME`
