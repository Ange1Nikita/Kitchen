# LeCucine — Редизайн (полная вёрстка)

Вёрстка редизайна сайта [lecucine.ru](https://lecucine.ru/) по макетам из Figma. Все 6 страниц макета — HTML + CSS + React.

## Структура

```
shared/
  styles/
    base.css       # сброс, CSS-переменные, типографика
    header.css     # шапка
    footer.css     # подвал
pages/
  _shared/                       # общие React-компоненты
    SiteHeader.jsx
    SiteFooter.jsx
  in-stock/                      # 1. «В наличии» (Catalog Available)
    index.html
    styles.css
    InStock.jsx
    assets/                      # фотки кухонь (можно положить сюда)
  product-available/             # 2. Карточка кухни «в наличии» (Product Available v3)
    index.html
    styles.css
    ProductAvailable.jsx
  product/                       # 3. Карточка фабричной кухни (Product)
    index.html
    styles.css
    Product.jsx
  project/                       # 4. Карточка выполненного проекта (Project Page)
    index.html
    styles.css
    Project.jsx
  factory/                       # 5. Страница фабрики (Factory)
    index.html
    styles.css
    Factory.jsx
  news/                          # 6. Новости (News)
    index.html
    styles.css
    News.jsx
```

## Дизайн-токены

Цвета и размеры вынесены в CSS-переменные в `shared/styles/base.css`.

| Токен | Значение |
|---|---|
| `--bg` | `#171717` |
| `--bg-elev` | `#1f1f1f` |
| `--text` | `#ffffff` |
| `--text-muted` | `rgba(255,255,255,0.6)` |
| `--accent` | `#e8462e` |
| `--border` | `rgba(255,255,255,0.1)` |
| `--container` | `1340px` |

## Адаптивность

Брейкпоинты:
- `≥1280px` — десктоп (как в макете)
- `≥768px <1280px` — планшет (сетка карточек 2 кол., шапка с бургером)
- `<768px` — мобилка (1 кол., вертикальные фильтры)

## Карточки и иконки

Везде плейсхолдеры. Картинки заменены на `placehold.co`, иконки — inline SVG.

## Как смотреть

Открыть `pages/in-stock/index.html` в браузере. Никакой сборки не нужно.

Для React-версии нужен любой Vite/CRA-проект — `InStock.jsx` подключает `./styles.css`.

## Страницы

| # | Страница | Папка | Открыть |
|---|---|---|---|
| 1 | В наличии (каталог) | `pages/in-stock/` | `index.html` |
| 2 | Карточка кухни «в наличии» | `pages/product-available/` | `index.html` |
| 3 | Карточка фабричной кухни | `pages/product/` | `index.html` |
| 4 | Карточка выполненного проекта | `pages/project/` | `index.html` |
| 5 | Страница фабрики | `pages/factory/` | `index.html` |
| 6 | Новости | `pages/news/` | `index.html` |

## Что нужно подцепить

- **Фотки кухонь** — везде плейсхолдеры `placehold.co`. Замени на реальные ассеты.
- **Логотипы фабрик** — текстовые заглушки (`OldLine`, `ABaston`). Замени на SVG/PNG.
- **Иконки в блоке «Преимущества»** — generic SVG, можно заменить на свои.
- **Реальные данные** — в JSX компонентах сверху есть мок-объекты (`PRODUCT`, `NEWS`, `FACTORY`, и т.д.) — замени на API.
