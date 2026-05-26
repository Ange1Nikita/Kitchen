import { useState } from "react";

// Подключи в проекте:
// import "../../shared/styles/base.css";
// import "../../shared/styles/header.css";
// import "../../shared/styles/footer.css";
// import "./styles.css";

// =====================================
// Мок-данные. Замени на реальный API.
// =====================================
const PRODUCTS = [
  { id: 1, name: "Кухня Bellagio", brand: "Scic", price: "2 600 €", oldPrice: "8 175 €", badge: "Новинка" , image: "../../assets/photos/catalog/01.jpg" },
  { id: 2, name: "Кухня Palatina", brand: "Scic", price: "2 500 €", badge: "Новинка" , image: "../../assets/photos/catalog/02.jpg" },
  { id: 3, name: "Кухня Glamour 3", brand: "Old Line", price: "2 500 €" , image: "../../assets/photos/catalog/03.jpg" },
  { id: 4, name: "Кухня Dama Quadri", brand: "Prestige", price: "4 300 €" , image: "../../assets/photos/catalog/04.jpg" },
  {
    id: 5,
    name: "Кухня Tes Laccato Opaco Carruba + Bilaminato Legno Noce Adige",
    brand: "Miton",
    price: "12 400 €",
    dealer: true,
    image: "../../assets/photos/catalog/05.jpg",
  },
  { id: 6, name: "Кухня Tes Laccato Opaco Grigio Box", brand: "Miton", price: "26 800 €", dealer: true , image: "../../assets/photos/catalog/06.jpg" },
  { id: 7, name: "Кухня Giorgetti", brand: "Giorgetti", price: "14 250 €" , image: "../../assets/photos/catalog/07.jpg" },
  { id: 8, name: "Кухня Old Line", brand: "Old Line", price: "28 900 €" , image: "../../assets/photos/catalog/08.jpg" },
];

const ALPHABET = ["0 — 9", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

const FILTERS = [
  { label: "Стиль кухни", options: ["Современные кухни", "Классические", "Лофт"] },
  { label: "Отделка", options: ["Выбрано 2 параметра", "Дерево", "Лак"] },
  { label: "Ценовой сегмент", options: ["Средние · 10 000 € — 30 000 €", "Премиум · 30 000 € — 80 000 €"] },
  { label: "Материал", options: ["Все стили"] },
  { label: "Цвет", options: ["Все стили"] },
  { label: "Форма", options: ["Все стили"] },
];

// =====================================
// SVG-иконки (плейсхолдеры)
// =====================================
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="20" y1="20" x2="16.65" y2="16.65" />
  </svg>
);

const Chevron = () => (
  <svg className="filter__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IgIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// =====================================
// Под-компоненты
// =====================================
function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <div className="site-header__brand">
            <a href="/" className="site-header__logo">LECUCINE<sup>®</sup></a>
            <nav className="site-header__nav" aria-label="Главная навигация">
              <div className="site-header__top">
                <a href="/about">О компании</a>
                <a href="/delivery">Заказ и доставка</a>
                <a href="/partners">Партнерство</a>
                <a href="/novosti">Новости</a>
                <a href="/sovety">Советы</a>
              </div>
              <div className="site-header__main">
                <a href="/kuhni">Кухни</a>
                <a href="/v-nalichii" className="active">В наличии</a>
                <a href="/raboty">Работы</a>
                <a href="/fabriki">Фабрики</a>
                <a href="/mebel">Мебель</a>
                <a href="/kontakty">Контакты</a>
              </div>
            </nav>
          </div>

          <div className="site-header__aside">
            <div className="site-header__address">Москва, Дербеневская наб. 7 с 3</div>
            <div className="site-header__phone-row">
              <a href="tel:+74955324212" className="site-header__phone">+7 495 532 42 12</a>
              <button className="site-header__search" aria-label="Поиск">
                <SearchIcon />
              </button>
            </div>
          </div>

          <button className="site-header__burger" aria-label="Открыть меню">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__logo">LeCucine<sup>®</sup>2021</div>
            <div className="site-footer__socials">
              <a href="#" className="site-footer__social" aria-label="Instagram"><IgIcon /></a>
              <a href="#" className="site-footer__social" aria-label="ВКонтакте"><IgIcon /></a>
              <a href="#" className="site-footer__social" aria-label="Facebook"><IgIcon /></a>
            </div>
          </div>

          <div className="site-footer__contacts">
            <a href="tel:+74955324212">+7 495 532 42 12</a>
            <a href="mailto:hello@lecucine.ru">hello@lecucine.ru</a>
            <div className="site-footer__address">Москва, Дербеневская наб. 7 с 3</div>
          </div>

          <nav className="site-footer__nav" aria-label="Подвал — навигация">
            <a href="/kuhni">Кухни</a>
            <a href="/about">О компании</a>
            <a href="/novosti">Новости</a>
            <a href="/v-nalichii">В наличии</a>
            <a href="/delivery">Заказ и доставка</a>
            <a href="/sovety">Советы</a>
            <a href="/raboty">Работы</a>
            <a href="/partners">Партнерство</a>
            <a href="/mebel">Мебель</a>
            <a href="/fabriki">Фабрики</a>
            <a href="/kontakty">Контакты</a>
            <a href="/tehnika">Техника</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product">
      <div className="product__media">
        {product.badge && <span className="product__badge">{product.badge}</span>}
        <img
          className="product__img"
          src={product.image || `https://placehold.co/660x495/1f1f1f/444444?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          loading="lazy"
        />
        {product.dealer && <span className="product__ribbon">Официальный дилер</span>}
      </div>
      <div className="product__body">
        <h3 className="product__name">{product.name}</h3>
        <span className="product__brand">{product.brand}</span>
        <div className="product__price-row">
          <span className="product__price">{product.price}</span>
          {product.oldPrice && (
            <span className="product__price product__price--old">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Pagination({ current = 2, total = 38 }) {
  // Сокращённый список: 1, current-1, current, current+1, ..., total-1, total
  return (
    <nav className="pagination" aria-label="Пагинация">
      <a href="#" className="pagination__btn" aria-label="Назад"><ArrowLeft /></a>
      <a href="#" className={`pagination__page${current === 1 ? " active" : ""}`}>1</a>
      <a href="#" className={`pagination__page${current === 2 ? " active" : ""}`}>2</a>
      <a href="#" className="pagination__page">3</a>
      <a href="#" className="pagination__page">4</a>
      <span className="pagination__dots">..</span>
      <a href="#" className="pagination__page">{total - 1}</a>
      <a href="#" className="pagination__page">{total}</a>
      <a href="#" className="pagination__btn" aria-label="Вперёд"><ArrowRight /></a>
    </nav>
  );
}

// =====================================
// Главный компонент
// =====================================
export default function InStock() {
  const [showEuro, setShowEuro] = useState(true);

  return (
    <>
      <SiteHeader />

      <main>
        <div className="container">

          {/* Title / breadcrumbs / intro */}
          <section className="page-head">
            <h1 className="page-head__title">
              Итальянские кухни<br />в наличии
            </h1>

            <nav className="page-head__breadcrumbs" aria-label="Хлебные крошки">
              <a href="/">LECUCINE</a> — <a href="/kuhni">Все кухни</a> —{" "}
              <span className="current">В наличии</span>
            </nav>

            <div className="page-head__intro">
              <p>
                Современные итальянские кухни — идеальное сочетание функциональности,
                передовых технологий, продуманной эргономики, изящного стиля исполнения
                практичности…
              </p>
              <a href="#description" className="page-head__expand">Открыть описание</a>
            </div>
          </section>

          {/* Alphabet */}
          <nav className="alphabet" aria-label="Фильтр по букве">
            {ALPHABET.map((ch) => (
              <a key={ch} href="#">{ch}</a>
            ))}
          </nav>

          {/* Filters */}
          <section className="filters">
            <div className="filters__grid">
              {FILTERS.map((f) => (
                <label key={f.label} className="filter">
                  <span className="filter__label">{f.label}</span>
                  <div className="filter__control">
                    <select className="filter__select" defaultValue={f.options[0]}>
                      {f.options.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                    <Chevron />
                  </div>
                </label>
              ))}
            </div>

            <div className="filters__actions">
              <a href="#" className="filters__reset">Сбросить фильтры</a>
              <button type="submit" className="btn btn--primary filters__submit">
                Показать 2 315 моделей
              </button>
            </div>
          </section>

          {/* Toolbar */}
          <div className="toolbar">
            <label className="toolbar__toggle">
              <span>Показать цену в евро</span>
              <input
                type="checkbox"
                checked={showEuro}
                onChange={(e) => setShowEuro(e.target.checked)}
              />
              <span className="toolbar__switch"></span>
            </label>
          </div>

          {/* Products */}
          <section className="products">
            {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
          </section>

          {/* Pagination + show more */}
          <div className="pagination-row">
            <Pagination current={2} total={38} />
            <button className="btn btn--outline show-more">Показать ещё</button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );}
