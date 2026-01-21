# ⚙️ Техническая спецификация

## Технологический стек

### Frontend
| Технология | Версия | Назначение |
|------------|--------|------------|
| HTML5 | — | Семантическая разметка |
| CSS3 | — | Стилизация, анимации, эффекты |
| JavaScript | ES6+ | Интерактивность |

### Внешние ресурсы
| Ресурс | Назначение |
|--------|------------|
| Google Fonts | Типографика |
| Lucide Icons | Иконки |

---

## Структура файлов

```
Psychologist/
├── index.html                 # Главная страница
├── css/
│   ├── styles.css             # Основные стили
│   ├── components.css         # Стили компонентов (опционально)
│   └── animations.css         # Анимации (опционально)
├── js/
│   └── main.js                # Основной скрипт
├── assets/
│   ├── images/
│   │   ├── photo.jpg          # Фото психолога
│   │   └── og-image.jpg       # Изображение для соцсетей
│   └── documents/
│       ├── oferta.pdf         # Публичная оферта
│       ├── privacy.pdf        # Политика конфиденциальности
│       └── consent.pdf        # Согласие на обработку данных
├── docs/
│   ├── DESIGN.md              # Дизайн-система
│   ├── STRUCTURE.md           # Структура страницы
│   ├── CONTENT.md             # Контент
│   └── TECHNICAL.md           # Этот файл
└── README.md                  # Описание проекта
```

---

## HTML-шаблон

### Базовая структура

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Психолог Аделина Вильданова. Онлайн консультации.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Психолог Вильданова Аделина">
  <meta property="og:description" content="Безвыходных ситуаций не бывает.">
  <meta property="og:image" content="assets/images/og-image.jpg">
  <meta property="og:type" content="website">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <link rel="stylesheet" href="css/styles.css">
  
  <title>Психолог Вильданова Аделина — Онлайн консультации</title>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar" id="navbar">...</nav>
  
  <!-- Hero -->
  <section class="hero" id="hero">...</section>
  
  <!-- About Psychology -->
  <section class="section about" id="about">...</section>
  
  <!-- Services -->
  <section class="section services" id="services">...</section>
  
  <!-- Statistics -->
  <section class="section stats" id="stats">...</section>
  
  <!-- Education -->
  <section class="section education" id="education">...</section>
  
  <!-- Principles -->
  <section class="section principles" id="principles">...</section>
  
  <!-- Pricing -->
  <section class="section pricing" id="pricing">...</section>
  
  <!-- How I Work -->
  <section class="section process" id="process">...</section>
  
  <!-- CTA -->
  <section class="section cta" id="cta">...</section>
  
  <!-- Footer -->
  <footer class="footer" id="footer">...</footer>
  
  <!-- Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <!-- Scripts -->
  <script src="js/main.js"></script>
</body>
</html>
```

---

## CSS-архитектура

### Организация стилей

```css
/* =============================================
   1. CSS Variables (Custom Properties)
   ============================================= */
:root {
  /* Colors */
  /* Typography */
  /* Spacing */
  /* Shadows */
  /* Transitions */
}

/* =============================================
   2. Reset & Base Styles
   ============================================= */
*, *::before, *::after { }
html { }
body { }

/* =============================================
   3. Typography
   ============================================= */
h1, h2, h3, h4, h5, h6 { }
p { }
a { }

/* =============================================
   4. Layout Components
   ============================================= */
.container { }
.section { }
.grid { }

/* =============================================
   5. UI Components
   ============================================= */
.btn { }
.glass-card { }
.icon { }

/* =============================================
   6. Section-specific Styles
   ============================================= */
.navbar { }
.hero { }
.about { }
/* ... */

/* =============================================
   7. Utilities
   ============================================= */
.reveal { }
.text-center { }
.sr-only { }

/* =============================================
   8. Media Queries
   ============================================= */
@media (min-width: 768px) { }
@media (min-width: 1024px) { }
@media (min-width: 1440px) { }
```

---

## JavaScript-функционал

### Основные модули

```javascript
// main.js

// 1. Navbar scroll behavior
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// 2. Smooth scroll for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// 3. Scroll reveal animations
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// 4. Mobile menu toggle
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
    toggle.classList.toggle('active');
  });
}

// 5. Initialize Lucide icons
function initIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScroll();
  initScrollReveal();
  initMobileMenu();
  initIcons();
});
```

---

## Производительность

### Оптимизации

1. **Шрифты**
   - `font-display: swap` для предотвращения FOIT
   - Preconnect к Google Fonts
   - Загрузка только нужных начертаний

2. **Изображения**
   - WebP формат с fallback на JPEG/PNG
   - Lazy loading для изображений ниже fold
   - Оптимизированные размеры

3. **CSS**
   - Минификация в продакшене
   - Critical CSS inline для above-the-fold
   - Использование CSS-переменных

4. **JavaScript**
   - Минификация
   - defer/async для скриптов
   - Минимальное количество зависимостей

### Рекомендуемые метрики

| Метрика | Цель |
|---------|------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## Браузерная поддержка

### Целевые браузеры

```
> 1%
last 2 versions
not dead
not IE 11
```

### Поддержка backdrop-filter

`backdrop-filter` поддерживается в:
- Chrome 76+
- Firefox 103+
- Safari 9+
- Edge 79+

**Fallback для неподдерживаемых браузеров:**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.9); /* Fallback */
  background: var(--glass-white);
}

@supports (backdrop-filter: blur(20px)) {
  .glass-card {
    background: var(--glass-white);
    backdrop-filter: blur(20px);
  }
}
```

---

## SEO-чеклист

- [ ] Уникальный title (50-60 символов)
- [ ] Meta description (150-160 символов)
- [ ] Семантическая разметка (header, main, section, footer)
- [ ] Один h1 на странице
- [ ] Alt-тексты для изображений
- [ ] Структурированные данные (Schema.org)
- [ ] Канонический URL
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Мобильная адаптивность

### Структурированные данные (Schema.org)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Психолог Вильданова Аделина",
  "description": "Онлайн консультации психолога",
  "priceRange": "₽₽",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU"
  },
  "areaServed": "Онлайн",
  "openingHours": "Mo-Fr 10:00-18:00"
}
</script>
```

---

## Доступность (a11y)

### Чеклист

- [ ] Достаточный цветовой контраст (WCAG AA)
- [ ] Фокус-индикаторы для интерактивных элементов
- [ ] Клавиатурная навигация
- [ ] ARIA-метки где необходимо
- [ ] Скрытие декоративных элементов от screen readers
- [ ] Читаемый размер шрифта (min 16px)

### Примеры

```html
<!-- Скрытый текст для screen readers -->
<span class="sr-only">Записаться на консультацию</span>

<!-- ARIA для мобильного меню -->
<button 
  class="menu-toggle" 
  aria-label="Открыть меню" 
  aria-expanded="false"
>
  <span class="hamburger"></span>
</button>

<!-- Skip link -->
<a href="#main" class="skip-link">Перейти к содержимому</a>
```

---

## Деплой

### Варианты хостинга

1. **Статический хостинг**
   - GitHub Pages
   - Netlify
   - Vercel
   - Cloudflare Pages

2. **Конструктор от Т-Банк** (согласно ТЗ)

### Pre-deploy чеклист

- [ ] Все ссылки работают
- [ ] Изображения оптимизированы
- [ ] CSS/JS минифицированы
- [ ] Favicon установлен
- [ ] Open Graph изображение готово
- [ ] Формы работают корректно
- [ ] Протестировано на мобильных устройствах
- [ ] Lighthouse audit пройден

---

## Контакты и интеграции

### Форма записи

Варианты реализации:
1. **Telegram-бот** — отправка заявок в Telegram
2. **Email** — через сервис Formspree или аналог
3. **CRM** — интеграция с AmoCRM, Bitrix24 и др.

### Пример формы

```html
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  class="contact-form"
>
  <input type="text" name="name" placeholder="Ваше имя" required>
  <input type="tel" name="phone" placeholder="Телефон или Telegram" required>
  <textarea name="message" placeholder="Кратко опишите запрос"></textarea>
  <button type="submit" class="btn-primary">Записаться</button>
</form>
```

---

## Аналитика

### Рекомендуемые сервисы

1. **Яндекс.Метрика** — основная аналитика для RU
2. **Google Analytics 4** — дополнительно

### Цели для отслеживания

- Клик по кнопке "Записаться"
- Отправка формы
- Скролл до секции "Стоимость"
- Время на странице > 2 минут
