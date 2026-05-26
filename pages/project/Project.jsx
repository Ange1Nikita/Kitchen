// Подключи:
// import "../../shared/styles/base.css";
// import "../../shared/styles/header.css";
// import "../../shared/styles/footer.css";
// import "./styles.css";

import SiteHeader from "../_shared/SiteHeader.jsx";
import SiteFooter from "../_shared/SiteFooter.jsx";

const PROJECT = {
  name: "ЖК Knight Bridge — Glamour",
  date: "22 февраля 2026",
  brand: "Old Line",
  description:
    "Кухня Calliope — это настоящее произведение искусства, сочетающее в себе роскошь и функциональность. Его фасад из непреходящего мрамора Nero Antico придает острову элегантный шарм, в то время как столешница из стали Vintage придает ему характерную износостойкость. Черные глянцевые лакированные базовые блоки и стальные базовые блоки Vintage обрамляют остров, придавая ему современный стиль и прочность.",
  characteristics: [
    ["Кухня", "Glamour 3"],
    ["Фабрика", "Old Line"],
    ["Стиль", "Классический"],
    ["Площадь", "24 м²"],
    ["Адрес", "Москва, ЖК Knight Bridge"],
  ],
  appliances: [
    { name: "Smeg", logo: "../../assets/logos/bertazzoni.png" },
    { name: "Miele", logo: "../../assets/logos/gaggenau.png" },
    { name: "Bosch", logo: "../../assets/logos/de-dietrich.png" },
  ],
  photos: [
    "../../assets/photos/project/1.jpg",
    "../../assets/photos/project/2.jpg",
    "../../assets/photos/project/3.jpg",
  ],
};

const NEWS = [
  { date: "8 декабря 2025", title: "Cloud Dancer — цвет Pantone 2026", image: "../../assets/photos/catalog/06.jpg" },
  { date: "11 ноября 2025", title: "Wine Collection от Riva1920", image: "../../assets/photos/catalog/07.jpg" },
  { date: "2 октября 2025", title: "Neolith на SICAM 2025", image: "../../assets/photos/catalog/08.jpg" },
];

const OTHER_PROJECTS = [
  { name: "Квартира на Тверской", info: "82 м², 2024", image: "../../assets/photos/project/4.jpg" },
  { name: "Загородный дом", info: "160 м², 2023", image: "../../assets/photos/project/5.jpg" },
  { name: "Пентхаус Москва-Сити", info: "140 м², 2024", image: "../../assets/photos/project/6.jpg" },
];

const ArrowLeft = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);

export default function Project() {
  return (
    <>
      <SiteHeader activeMain="raboty" />

      <main>
        <div className="container">

          <div className="project-top">
            <a href="/raboty" className="project-top__back" aria-label="Назад"><ArrowLeft /></a>
            <nav className="project-top__crumbs" aria-label="Хлебные крошки">
              <a href="/">LeCucine</a><span className="sep">–</span>
              <a href="/raboty">Все работы</a><span className="sep">–</span>
              <span className="current">{PROJECT.name}</span>
            </nav>
          </div>

          <section className="project-main">

            <div className="project-info">

              <div className="project-title">
                <div>
                  <h1 className="project-title__name">{PROJECT.name}</h1>
                  <div className="project-title__date">{PROJECT.date}</div>
                </div>
                <div className="project-title__brand-logo" aria-label={PROJECT.brand}>
                  {PROJECT.brand.split(" ").map(w => w[0]).join("")}
                </div>
              </div>

              <section className="project-description">
                <h2 className="project-description__title">Информация о проекте</h2>
                <p className="project-description__text">{PROJECT.description}</p>
              </section>

              <section className="project-characteristics">
                <h2 className="project-characteristics__title">Характеристики</h2>
                <div className="project-characteristics__rows">
                  {PROJECT.characteristics.map(([label, value]) => (
                    <div key={label} className="project-characteristics__row">
                      <span className="project-characteristics__label">{label}</span>
                      <span className="project-characteristics__value">{value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="project-appliances">
                <h2 className="project-appliances__title">Техника</h2>
                <div className="project-appliances__grid">
                  {PROJECT.appliances.map((a) => (
                    <div key={a.name} className="appliance-card">
                      <div className="appliance-card__logo"><img src={a.logo} alt={a.name} /></div>
                      <span className="appliance-card__name">{a.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="project-gallery">
              {PROJECT.photos.map((src, i) => (
                <div key={i} className="project-gallery__item">
                  <img className="project-gallery__img" src={src} alt={`Фото ${i + 1}`} loading="lazy" />
                </div>
              ))}
              <button className="btn btn--outline project-gallery__more">Показать ещё</button>
            </div>

          </section>

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
                  <div>
                    <div className="related-card__date">{n.date}</div>
                    <div className="related-card__name">{n.title}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="related">
            <div className="related__header">
              <h2 className="related__title">Другие проекты</h2>
              <a href="/raboty" className="related__link">Все проекты</a>
            </div>
            <div className="related__grid">
              {OTHER_PROJECTS.map((p) => (
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

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
