// Подключи:
// import "../../shared/styles/base.css";
// import "../../shared/styles/header.css";
// import "../../shared/styles/footer.css";
// import "../product-available/styles.css"; // — переиспользуем .related
// import "./styles.css";

import SiteHeader from "../_shared/SiteHeader.jsx";
import SiteFooter from "../_shared/SiteFooter.jsx";

const FACTORY = {
  name: "Кухни Old Line",
  brand: "Old Line",
  isDealer: true,
  meta: [
    { label: "Официальный сайт", value: "oldline.it", href: "https://www.oldline.it" },
    { label: "Год основания", value: "1977" },
    { label: "Ценовой сегмент", value: "Средний" },
  ],
  description: [
    {
      type: "p",
      text: "Фабрика Old Line изготавливает кухни и мебель исключительно из массива натурального дерева. Абсолютно все внутренние и внешние детали, фасад и каркас выполнены из цельной древесины.",
    },
    { type: "h3", text: "Кухни Old Line — истинная роскошь для ценителей комфорта" },
    {
      type: "p",
      text: "Разработкой всех коллекций занимается коллектив профессиональных конструкторов, дизайнеров и художников, воплощающих в мебели самые смелые идеи.",
    },
    { type: "h3", text: "Спецификации" },
    {
      type: "p",
      text: "Фабрика открылась в далёком 1977 году. Изначально её основным профилем было производство мебели в стиле кантри. Однако со временем спрос рос, увеличивались требования клиентуры, и фирма существенно расширила свою производственную линию.",
    },
  ],
};

const PROJECTS = [
  { name: "Квартира на Тверской", info: "82 м², 2024", image: "../../assets/photos/project/1.jpg" },
  { name: "Загородный дом", info: "160 м², 2023", image: "../../assets/photos/project/2.jpg" },
  { name: "Пентхаус Москва-Сити", info: "140 м², 2024", image: "../../assets/photos/project/3.jpg" },
];

const NEWS = [
  { title: "Cloud Dancer — цвет Pantone 2026", date: "8 декабря 2025", image: "../../assets/photos/catalog/06.jpg" },
  { title: "Wine Collection от Riva1920", date: "11 ноября 2025", image: "../../assets/photos/catalog/07.jpg" },
  { title: "Neolith на SICAM 2025", date: "2 октября 2025", image: "../../assets/photos/catalog/08.jpg" },
];

const CATALOG = [
  { name: "Кухня Glamour 3", price: "от 380 000 ₽ / м.п.", image: "../../assets/photos/catalog/01.jpg" },
  { name: "Кухня Dolce Vita White Wood", price: "от 410 000 ₽ / м.п.", image: "../../assets/photos/catalog/02.jpg" },
  { name: "Кухня Imperia", price: "от 520 000 ₽ / м.п.", image: "../../assets/photos/catalog/03.jpg" },
  { name: "Кухня Atelier", price: "от 460 000 ₽ / м.п.", image: "../../assets/photos/catalog/04.jpg" },
  { name: "Кухня Villa", price: "от 590 000 ₽ / м.п.", image: "../../assets/photos/catalog/05.jpg" },
  { name: "Кухня Aurelia", price: "от 480 000 ₽ / м.п.", image: "../../assets/photos/catalog/06.jpg" },
];

const TOTAL_KITCHENS = 32;

const ArrowLeft = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);

export default function Factory() {
  return (
    <>
      <SiteHeader activeMain="fabriki" />

      <main>
        <div className="container">

          <div className="factory-top">
            <a href="/fabriki" className="factory-top__back" aria-label="Назад"><ArrowLeft /></a>
            <nav className="factory-top__crumbs">
              <a href="/">LeCucine</a><span className="sep">–</span>
              <a href="/fabriki">Все фабрики Италии</a><span className="sep">–</span>
              <span className="current">{FACTORY.name}</span>
            </nav>
          </div>

          {/* Hero */}
          <section className="factory-hero">
            <div className="factory-hero__left">
              {FACTORY.isDealer && <span className="factory-hero__dealer">Официальный дилер</span>}
              <div className="factory-hero__name-row">
                <h1 className="factory-hero__name">
                  {FACTORY.name.split(" ").map((w, i, arr) => (
                    <span key={i}>{w}{i < arr.length - 1 ? <br /> : null}</span>
                  ))}
                </h1>
                <div className="factory-hero__brand-logo">{FACTORY.brand.split(" ").map(w => w[0]).join("")}</div>
              </div>
              <div className="factory-meta">
                {FACTORY.meta.map((m) => (
                  <div key={m.label} className="factory-meta__row">
                    <span className="factory-meta__label">{m.label}</span>
                    <span className="factory-meta__value">
                      {m.href ? (
                        <a href={m.href} rel="nofollow noopener" target="_blank">{m.value}</a>
                      ) : m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="factory-hero__right">
              <div className="factory-description">
                {FACTORY.description.map((block, i) =>
                  block.type === "h3"
                    ? <h3 key={i}>{block.text}</h3>
                    : <p key={i}>{block.text}</p>
                )}
                <a href="#more" className="factory-description__expand">Открыть описание</a>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="related">
            <div className="related__header">
              <h2 className="related__title">Выполненные проекты</h2>
              <a href={`/raboty?factory=${FACTORY.brand.toLowerCase().replace(/\s+/g, "-")}`} className="related__link">Все проекты</a>
            </div>
            <div className="related__grid">
              {PROJECTS.map((p) => (
                <article key={p.name} className="related-card">
                  <div className="related-card__img-wrap">
                    <img className="related-card__img" src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="related-card__name">{p.name}</div>
                  <div className="related-card__brand">{p.info}</div>
                </article>
              ))}
            </div>
          </section>

          {/* News */}
          <section className="related">
            <div className="related__header">
              <h2 className="related__title">Новости</h2>
              <a href="/novosti" className="related__link">Все новости</a>
            </div>
            <div className="related__grid">
              {NEWS.map((n) => (
                <article key={n.title} className="related-card">
                  <div className="related-card__img-wrap">
                    <img className="related-card__img" src={n.image} alt="" loading="lazy" />
                  </div>
                  <div className="related-card__name">{n.title}</div>
                  <div className="related-card__brand">{n.date}</div>
                </article>
              ))}
            </div>
          </section>

          {/* Catalog */}
          <div className="factory-catalog__title-row">
            <h2 className="factory-catalog__title">Каталог кухонь {FACTORY.brand}</h2>
            <div className="factory-catalog__count">Всего <strong>{TOTAL_KITCHENS}</strong></div>
          </div>

          <section className="factory-products">
            {CATALOG.map((k) => (
              <article key={k.name} className="factory-product">
                <div className="factory-product__media">
                  <img className="factory-product__img" src={k.image} alt={k.name} loading="lazy" />
                </div>
                <div className="factory-product__body">
                  <div className="factory-product__name">{k.name}</div>
                  <div className="factory-product__brand">{FACTORY.brand}</div>
                  <div className="factory-product__price">{k.price}</div>
                </div>
              </article>
            ))}
          </section>

          <div className="factory-catalog__more-row">
            <button className="btn btn--outline factory-catalog__more">Показать ещё</button>
          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
