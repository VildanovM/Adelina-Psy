# 🎨 Дизайн-система | Liquid Glass

## Философия дизайна

Стиль **Liquid Glass** — это визуальный язык, создающий ощущение глубины, легкости и современности. Дизайн должен вызывать чувство спокойствия и доверия — идеально для сайта психолога.

---

## 🎨 Цветовая палитра

### Основные цвета

```css
:root {
  /* Фоновые слои */
  --bg-primary: #F8F9FE;           /* Светло-лавандовый фон */
  --bg-secondary: #EEF1FA;         /* Вторичный фон */
  
  /* Стеклянные поверхности */
  --glass-white: rgba(255, 255, 255, 0.65);
  --glass-light: rgba(255, 255, 255, 0.45);
  --glass-border: rgba(255, 255, 255, 0.8);
  --glass-shadow: rgba(174, 174, 192, 0.25);
  
  /* Акцентные цвета */
  --accent-primary: #7C6AEF;       /* Мягкий фиолетовый */
  --accent-secondary: #A594F9;     /* Светлый лавандовый */
  --accent-soft: #CDC1FF;          /* Очень светлый акцент */
  
  /* Тёплые акценты */
  --warm-rose: #F5A9B8;            /* Нежный розовый */
  --warm-peach: #FFD6BA;           /* Персиковый */
  
  /* Текст */
  --text-primary: #1A1A2E;         /* Тёмный, почти чёрный */
  --text-secondary: #4A4A68;       /* Серо-фиолетовый */
  --text-muted: #8888A4;           /* Приглушённый */
  --text-inverse: #FFFFFF;         /* Белый текст */
  
  /* Градиенты */
  --gradient-hero: linear-gradient(135deg, #E8E3F8 0%, #F5F2FF 50%, #FFF5F8 100%);
  --gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
  --gradient-accent: linear-gradient(135deg, #7C6AEF 0%, #A594F9 50%, #F5A9B8 100%);
}
```

### Цветовые роли

| Роль | Цвет | Применение |
|------|------|------------|
| Background | `--bg-primary` | Основной фон страницы |
| Surface | `--glass-white` | Карточки, панели |
| Primary | `--accent-primary` | Кнопки, ссылки, акценты |
| Text | `--text-primary` | Заголовки, основной текст |

---

## 🔤 Типографика

### Шрифты

```css
/* Основной шрифт — элегантный и читаемый */
--font-primary: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;

/* Акцентный шрифт для заголовков */
--font-display: 'Cormorant Garamond', Georgia, serif;
```

### Иерархия текста

```css
/* Hero заголовок */
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Секционный заголовок */
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 500;
  line-height: 1.2;
}

/* Подзаголовок */
.subtitle {
  font-family: var(--font-primary);
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Основной текст */
.body-text {
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
}

/* Мелкий текст */
.small-text {
  font-family: var(--font-primary);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
}
```

---

## 🃏 Компоненты

### Glass Card (Стеклянная карточка)

```css
.glass-card {
  background: var(--glass-white);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  box-shadow: 
    0 4px 24px var(--glass-shadow),
    inset 0 1px 1px rgba(255, 255, 255, 0.8);
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 40px var(--glass-shadow),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
}
```

### Primary Button

```css
.btn-primary {
  background: var(--gradient-accent);
  color: var(--text-inverse);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  padding: 16px 32px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 16px rgba(124, 106, 239, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 24px rgba(124, 106, 239, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

### Secondary Button (Ghost)

```css
.btn-secondary {
  background: var(--glass-light);
  backdrop-filter: blur(10px);
  color: var(--accent-primary);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  padding: 16px 32px;
  border: 1px solid var(--glass-border);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--glass-white);
  border-color: var(--accent-soft);
}
```

### Статистика (Числа)

```css
.stat-number {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-family: var(--font-primary);
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

---

## 🌊 Эффекты Liquid Glass

### Градиентные орбы (фоновые элементы)

```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  pointer-events: none;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  top: -200px;
  right: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--warm-rose) 0%, transparent 70%);
  bottom: 10%;
  left: -100px;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--warm-peach) 0%, transparent 70%);
  top: 40%;
  right: 10%;
}
```

### Световой рефлекс на карточках

```css
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 100%
  );
  border-radius: 24px 24px 0 0;
  pointer-events: none;
}
```

### Эффект "морозного стекла" для навигации

```css
.navbar {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}
```

---

## 📐 Отступы и сетка

### Spacing Scale

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
}
```

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-2xl);
  }
}
```

### Section Spacing

```css
.section {
  padding: var(--space-4xl) 0;
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-3xl) 0;
  }
}
```

---

## ✨ Анимации

### Появление при скролле

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger Animation (каскадное появление)

```css
.stagger-item:nth-child(1) { transition-delay: 0.1s; }
.stagger-item:nth-child(2) { transition-delay: 0.2s; }
.stagger-item:nth-child(3) { transition-delay: 0.3s; }
.stagger-item:nth-child(4) { transition-delay: 0.4s; }
/* и так далее */
```

### Плавное движение орбов

```css
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -20px) rotate(5deg);
  }
  50% {
    transform: translate(-10px, 10px) rotate(-3deg);
  }
  75% {
    transform: translate(15px, 5px) rotate(2deg);
  }
}

.orb {
  animation: float 20s ease-in-out infinite;
}
```

---

## 📱 Адаптивность

### Breakpoints

```css
/* Mobile first approach */
/* Base: 0 - 767px (mobile) */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

### Адаптивные карточки

```css
.cards-grid {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }
}
```

---

## 🎯 Иконки

Используем минималистичные иконки в стиле линий (outline):
- Lucide Icons (рекомендуется)
- Или Phosphor Icons

```html
<!-- Пример подключения Lucide -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

```html
<!-- Использование -->
<i data-lucide="heart" class="icon"></i>
```

```css
.icon {
  width: 24px;
  height: 24px;
  stroke: var(--accent-primary);
  stroke-width: 1.5;
}
```

---

## 🖼 Изображения

### Стиль для фото

```css
.profile-image {
  border-radius: 32px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  overflow: hidden;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.profile-image:hover img {
  transform: scale(1.05);
}
```

---

## ✅ Чеклист дизайна

- [ ] Все карточки имеют эффект стекла
- [ ] Фоновые орбы добавляют глубину
- [ ] Типографика читаема на всех устройствах
- [ ] Hover-эффекты на интерактивных элементах
- [ ] Scroll-анимации плавные
- [ ] Цветовой контраст достаточен для доступности
- [ ] Адаптивность на мобильных устройствах
