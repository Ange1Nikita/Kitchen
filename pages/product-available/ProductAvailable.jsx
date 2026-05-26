import { useState } from "react";

// Подключи:
// import "../../shared/styles/base.css";
// import "../../shared/styles/header.css";
// import "../../shared/styles/footer.css";
// import "./styles.css";

// =====================================
// Мок-данные. Замени на реальный API.
// =====================================
const PRODUCT = {
  name: "Кухня Calliope",
  brand: "Antonio Baston",
  price: "400 000 ₽",
  oldPrice: "550 000 ₽",
  isDealer: true,
  description:
    "Кухня Calliope — это настоящее произведение искусства, сочетающее в себе роскошь и функциональность. Его фасад из непреходящего мрамора Nero Antico придает острову элегантный шарм, в то время как столешница из стали Vintage придает ему характерную износостойкость. Черные глянцевые лакированные базовые блоки и стальные базовые блоки Vintage обрамляют остров, придавая ему современный стиль и прочность. Двери с колоннами из жидкой стали Aluminium 03 по бокам создают впечатление архитектурной строгости.",
  characteristics: [
    ["Стиль", "Классический"],
    ["Отделка", "С ручками"],
    ["Материал", "Матовая покраска"],
    ["Цвет", "Коричневый"],
    ["Форма", "Прямая"],
  ],
  appliances: [
    { name: "Smeg", logo: "../../assets/logos/bertazzoni.png" },
    { name: "Miele", logo: "../../assets/logos/gaggenau.png" },
    { name: "Bosch", logo: "../../assets/logos/de-dietrich.png" },
  ],
  photos: [
    "../../assets/photos/product-available/1.jpg",
    "../../assets/photos/product-available/2.jpg",
    "../../assets/photos/product-available/3.jpg",
  ],
};

const RELATED = [
  { name: "Кухня Sinfonia", brand: "Antonio Baston", price: "380 000 ₽", image: "../../assets/photos/product-available/2.jpg" },
  { name: "Кухня Athena", brand: "Antonio Baston", price: "420 000 ₽", image: "../../assets/photos/product-available/3.jpg" },
  { name: "Кухня Apollo", brand: "Antonio Baston", price: "510 000 ₽", image: "../../assets/photos/product-available/4.jpg" },
];

const PROJECTS = [
  { name: "Квартира на Тверской", info: "82 м², 2024", image: "../../assets/photos/project/1.jpg" },
  { name: "Загородный дом в Подмосковье", info: "160 м², 2023", image: "../../assets/photos/project/2.jpg" },
  { name: "Пентхаус Москва-Сити", info: "140 м², 2024", image: "../../assets/photos/project/3.jpg" },
];

// =====================================
// SVG-иконки
// =====================================
const ArrowLeft = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);
const ChevronLeft = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="15 18 9 12 15 6" /></svg>
);
const ChevronRight = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="9 18 15 12 9 6" /></svg>
);

// =====================================
// Под-компоненты (header/footer — те же, что в InStock.jsx)
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
                <a href="/kuhni" className="active">Кухни</a>
                <a href="/v-nalichii">В наличии</a>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="20" y1="20" x2="16.65" y2="16.65" />
                </svg>
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
              <a href="#" className="site-footer__social" aria-label="Instagram">IG</a>
              <a href="#" className="site-footer__social" aria-label="ВКонтакте">VK</a>
              <a href="#" className="site-footer__social" aria-label="Facebook">F</a>
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

// =====================================
// Главный компонент
// =====================================
export default function ProductAvailable() {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = PRODUCT.photos;

  const prev = () => setPhotoIdx((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setPhotoIdx((i) => (i + 1) % photos.length);

  return (
    <>
      <SiteHeader />

      <main>
        <div className="container">

          <div className="product-top">
            <a href="/kuhni" className="product-top__back" aria-label="Назад">
              <ArrowLeft />
            </a>
            <nav className="product-top__crumbs" aria-label="Хлебные крошки">
              <a href="/">LeCucine</a><span className="sep">–</span>
              <a href="/kuhni">Все кухни</a><span className="sep">–</span>
              <span className="current">Современные кухни</span>
            </nav>
          </div>

          <section className="product-main">

            <div className="product-info">

              <div className="product-title">
                <div>
                  {PRODUCT.isDealer && (
                    <span className="product-title__dealer">Официальный дилер</span>
                  )}
                  <h1 className="product-title__name">{PRODUCT.name}</h1>
                  <div className="product-title__prices">
                    <span className="product-title__price">{PRODUCT.price}</span>
                    {PRODUCT.oldPrice && (
                      <span className="product-title__price product-title__price--old">
                        {PRODUCT.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="product-title__brand-logo" aria-label={PRODUCT.brand}>
                  ABaston
                </div>
              </div>

              <section className="product-description">
                <h2 className="product-description__title">Описание</h2>
                <p className="product-description__text">{PRODUCT.description}</p>
              </section>

              <button type="button" className="btn btn--primary product-cta">Заказать</button>

              <section className="product-characteristics">
                <h2 className="product-characteristics__title">Характеристики</h2>
                <div className="product-characteristics__rows">
                  {PRODUCT.characteristics.map(([label, value]) => (
                    <div key={label} className="product-characteristics__row">
                      <span className="product-characteristics__label">{label}</span>
                      <span className="product-characteristics__value">{value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="product-appliances">
                <h2 className="product-appliances__title">Техника</h2>
                <div className="product-appliances__grid">
                  {PRODUCT.appliances.map((a) => (
                    <div key={a.name} className="appliance-card">
                      <div className="appliance-card__logo">
                        {a.logo ? <img src={a.logo} alt={a.name} /> : a.name}
                      </div>
                      <span className="appliance-card__name">{a.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="product-gallery">
              <div className="product-gallery__main">
                <img
                  className="product-gallery__img"
                  src={photos[photoIdx]}
                  alt={`${PRODUCT.name} — фото ${photoIdx + 1}`}
                />
                <button onClick={prev} className="product-gallery__nav product-gallery__nav--prev" aria-label="Предыдущее фото">
                  <ChevronLeft />
                </button>
                <button onClick={next} className="product-gallery__nav product-gallery__nav--next" aria-label="Следующее фото">
                  <ChevronRight />
                </button>

                <a href="/raboty/1" className="product-gallery__widget">
                  <img className="product-gallery__widget-preview" src="../../assets/photos/catalog/03.jpg" alt="" />
                  <span className="product-gallery__widget-text">
                    Выполненный проект с кухней {PRODUCT.name.replace(/^Кухня\s+/, "")}
                  </span>
                </a>
              </div>
            </div>

          </section>

          <section className="related">
            <div className="related__header">
              <h2 className="related__title">Другие кухни фабрики {PRODUCT.brand}</h2>
              <a href={`/fabriki/${PRODUCT.brand.toLowerCase().replace(/\s+/g, "-")}`} className="related__link">
                Каталог похожих кухонь
              </a>
            </div>
            <div className="related__grid">
              {RELATED.map((k) => (
                <article key={k.name} className="related-card">
                  <div className="related-card__img-wrap">
                    <img
                      className="related-card__img"
                      src={k.image}
                      alt={k.name}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="related-card__name">{k.name}</div>
                    <div className="related-card__brand">{k.brand}</div>
                    <div className="related-card__price">{k.price}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="related">
            <div className="related__header">
              <h2 className="related__title">Выполненные проекты</h2>
              <a href="/vypolnennye-proekty" className="related__link">Все проекты</a>
            </div>
            <div className="related__grid">
              {PROJECTS.map((p) => (
                <article key={p.name} className="related-card">
                  <div className="related-card__img-wrap">
                    <img
                      className="related-card__img"
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="related-card__name">{p.name}</div>
                  <div className="related-card__brand">{p.info}</div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
