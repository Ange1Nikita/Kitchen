import { useState } from "react";

// Подключи:
// import "../../shared/styles/base.css";
// import "../../shared/styles/header.css";
// import "../../shared/styles/footer.css";
// import "./styles.css";

import SiteHeader from "../_shared/SiteHeader.jsx";
import SiteFooter from "../_shared/SiteFooter.jsx";

const PRODUCT = {
  name: "Кухня Calliope",
  brand: "Antonio Baston",
  pricePrefix: "от",
  priceValue: "475 000 ₽",
  priceSuffix: "за м.п.",
  isDealer: true,
  description:
    "Кухня Calliope — это настоящее произведение искусства, сочетающее в себе роскошь и функциональность. Его фасад из непреходящего мрамора Nero Antico придает острову элегантный шарм, в то время как столешница из стали Vintage придает ему характерную износостойкость.",
  characteristics: [
    ["Стиль", ["Современный", "Классический"]],
    ["Отделка", ["С ручками", "Без ручек", "Со стеклом"]],
    ["Материал", ["Шпон", "Матовая покраска", "Глянец", "Камень"]],
    ["Цвет", ["Белый", "Чёрный", "Коричневый", "Серый"]],
    ["Форма", ["Прямая", "Угловая", "П-образная", "Островная"]],
  ],
  benefits: [
    {
      title: "Огромный опыт проектирования кухонь любой сложности",
      body: "Не тратьте время на поиск фабрики. С нашим 15-летним опытом мы подберём оптимального производителя, который реализует вашу кухню мечты без переплат.",
      icon: "../../assets/icons/icon-design.png",
    },
    {
      title: "Суперкомпетентные менеджеры",
      body: "Каждый менеджер прошёл обучение на итальянских фабриках и знает продукт досконально.",
      icon: "../../assets/icons/icon-team.png",
    },
    {
      title: "Всегда актуальная информация о продукции",
      body: "Мы ежемесячно обновляем каталоги и цены — никаких неприятных сюрпризов на стадии заказа.",
      icon: "../../assets/icons/icon-products.png",
    },
    {
      title: "Огромный выбор современной бытовой техники и аксессуаров",
      body: "Smeg, Miele, Bosch, Gaggenau, Asko — подберём технику под любой бюджет и стиль.",
      icon: "../../assets/icons/icon-appliance.png",
    },
  ],
  photos: [
    "../../assets/photos/product/1.jpg",
    "../../assets/photos/product/2.jpg",
    "../../assets/photos/product/3.jpg",
  ],
};

const ArrowLeft = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);
const ChevronDown = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="18 15 12 9 6 15" /></svg>
);

function Advantage({ title, body, defaultOpen = false, icon }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <article className={`advantage${open ? " advantage--open" : ""}`}>
      <div className="advantage__icon"><img src={icon} alt="" /></div>
      <div>
        <div className="advantage__head" onClick={() => setOpen((v) => !v)}>
          <h3 className="advantage__title">{title}</h3>
          <span className="advantage__toggle"><ChevronDown /></span>
        </div>
        <div className="advantage__body">{body}</div>
      </div>
    </article>
  );
}

export default function Product() {
  return (
    <>
      <SiteHeader activeMain="kuhni" />

      <main>
        <div className="container">

          <div className="fkitchen-top">
            <a href="/kuhni" className="fkitchen-top__back" aria-label="Назад"><ArrowLeft /></a>
            <nav className="fkitchen-top__crumbs">
              <a href="/">LeCucine</a><span className="sep">–</span>
              <a href="/kuhni">Все кухни</a><span className="sep">–</span>
              <span className="current">Современные кухни</span>
            </nav>
          </div>

          <section className="fkitchen-main">

            <div className="fkitchen-info">

              <div className="fkitchen-title">
                <div>
                  {PRODUCT.isDealer && <span className="fkitchen-title__dealer">Официальный дилер</span>}
                  <h1 className="fkitchen-title__name">{PRODUCT.name}</h1>
                  <div className="fkitchen-title__price">
                    <span className="fkitchen-title__price-prefix">{PRODUCT.pricePrefix}</span>
                    <span className="fkitchen-title__price-value">{PRODUCT.priceValue}</span>
                    <span className="fkitchen-title__price-suffix">{PRODUCT.priceSuffix}</span>
                  </div>
                </div>
                <div className="fkitchen-title__brand-logo" aria-label={PRODUCT.brand}>
                  {PRODUCT.brand.split(" ").map(w => w[0]).join("")}
                </div>
              </div>

              <section className="fkitchen-description">
                <h2 className="fkitchen-description__title">Описание</h2>
                <p className="fkitchen-description__text">{PRODUCT.description}</p>
              </section>

              <button className="btn btn--primary fkitchen-cta">Заказать расчёт</button>

              <section className="fkitchen-characteristics">
                <h2 className="fkitchen-characteristics__title">Характеристики</h2>
                {PRODUCT.characteristics.map(([label, opts]) => (
                  <div key={label} className="fkitchen-characteristics__row">
                    <span className="fkitchen-characteristics__label">{label}</span>
                    <div className="fkitchen-characteristics__tags">
                      {opts.map((o) => <span key={o} className="fkitchen-tag">{o}</span>)}
                    </div>
                  </div>
                ))}
              </section>

              <section className="fkitchen-benefits">
                <h2 className="fkitchen-benefits__title">Преимущества работы с нами</h2>
                <div className="fkitchen-benefits__list">
                  {PRODUCT.benefits.map((b, i) => (
                    <Advantage key={b.title} title={b.title} body={b.body} icon={b.icon} defaultOpen={i === 0} />
                  ))}
                </div>
                <button className="btn btn--outline" style={{ width: "100%", padding: "18px", marginTop: "24px" }}>
                  Бесплатная консультация
                </button>
              </section>
            </div>

            <div className="fkitchen-gallery">
              {PRODUCT.photos.map((src, i) => (
                <div key={i} className="fkitchen-gallery__item">
                  <img className="fkitchen-gallery__img" src={src} alt={`${PRODUCT.name} — фото ${i + 1}`} loading="lazy" />
                  {i === 0 && (
                    <a href="/raboty/1" className="fkitchen-gallery__widget">
                      <img className="fkitchen-gallery__widget-preview" src="../../assets/photos/catalog/05.jpg" alt="" />
                      <span className="fkitchen-gallery__widget-text">
                        Выполненный проект с кухней {PRODUCT.name.replace(/^Кухня\s+/, "")}
                      </span>
                    </a>
                  )}
                </div>
              ))}
              <button className="btn btn--outline fkitchen-gallery__more">Показать ещё</button>
            </div>

          </section>

          <section className="related">
            <div className="related__header">
              <h2 className="related__title">Другие кухни фабрики {PRODUCT.brand}</h2>
              <a href={`/fabriki/${PRODUCT.brand.toLowerCase().replace(/\s+/g, "-")}`} className="related__link">Каталог похожих кухонь</a>
            </div>
            <div className="related__grid">
              {[
                { name: "Кухня Sinfonia", price: "от 380 000 ₽ / м.п.", image: "../../assets/photos/product-available/2.jpg" },
                { name: "Кухня Athena", price: "от 420 000 ₽ / м.п.", image: "../../assets/photos/product-available/3.jpg" },
                { name: "Кухня Apollo", price: "от 510 000 ₽ / м.п.", image: "../../assets/photos/product-available/4.jpg" },
              ].map((k) => (
                <article key={k.name} className="related-card">
                  <div className="related-card__img-wrap">
                    <img className="related-card__img" src={k.image} alt={k.name} loading="lazy" />
                  </div>
                  <div>
                    <div className="related-card__name">{k.name}</div>
                    <div className="related-card__brand">{PRODUCT.brand}</div>
                    <div className="related-card__price">{k.price}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="related">
            <div className="related__header">
              <h2 className="related__title">Выполненные проекты</h2>
              <a href="/raboty" className="related__link">Все проекты</a>
            </div>
            <div className="related__grid">
              {[
                { name: "Квартира на Тверской", info: "82 м², 2024", image: "../../assets/photos/project/4.jpg" },
                { name: "Загородный дом", info: "160 м², 2023", image: "../../assets/photos/project/5.jpg" },
                { name: "Пентхаус Москва-Сити", info: "140 м², 2024", image: "../../assets/photos/project/6.jpg" },
              ].map((p) => (
                <article key={p.name} className="related-card">
                  <div className="related-card__img-wrap">
                    <img className="related-card__img" src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div>
                    <div className="related-card__name">{p.name}</div>
                    <div className="related-card__brand">{p.info}</div>
                  </div>
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
