// Подключи:
// import "../../shared/styles/base.css";
// import "../../shared/styles/header.css";
// import "../../shared/styles/footer.css";
// import "./styles.css";

import SiteHeader from "../_shared/SiteHeader.jsx";
import SiteFooter from "../_shared/SiteFooter.jsx";

const NEWS = [
  {
    slug: "cloud-dancer-2026",
    date: "8 декабря 2025",
    title: "Шёпот спокойствия: Cloud Dancer — цвет Pantone 2026 года",
    desc: "PANTONE 11-4201 Cloud Dancer — это невесомый, воздушный белый, символ чистоты, гармонии и нового начала.", image: "../../assets/photos/catalog/01.jpg" },
  {
    slug: "riva1920-wine",
    date: "11 ноября 2025",
    title: "Подарочная идея к Рождеству: Коллекция Wine Collection от Riva1920",
    desc: "Откройте для себя утонченную эстетику итальянского дизайна с коллекцией Wine Collection от Riva1920 — идеальным подарком для ценителей вина и красоты натурального дерева.", image: "../../assets/photos/catalog/02.jpg" },
  {
    slug: "neolith-sicam",
    date: "2 октября 2025",
    title: "Neolith на выставке SICAM 2025",
    desc: "Компания Neolith примет участие в выставке SICAM, которая пройдёт с 14 по 17 октября 2025 года в Порденоне.", image: "../../assets/photos/catalog/03.jpg" },
  {
    slug: "arrital-akwinery",
    date: "7 октября 2025",
    title: "Ak_Winery от Arrital: удобная и стильная винная стойка",
    desc: "Ak_Winery от Arrital — это вертикальная стойка для бутылок, которая делает хранение вина не только функциональным, но и эстетичным.", image: "../../assets/photos/catalog/04.jpg" },
  {
    slug: "stoleshnitsy-2026",
    date: "15 сентября 2025",
    title: "Новые материалы для кухонных столешниц 2026",
    desc: "Тенденции года: натуральный камень, тонкие керамические плиты и переработанные композиты.", image: "../../assets/photos/catalog/05.jpg" },
  {
    slug: "derbenevskaya-showroom",
    date: "3 сентября 2025",
    title: "Открытие шоурума LeCucine на Дербеневской",
    desc: "Наш новый шоурум площадью 600 м² представляет 12 уникальных композиций.", image: "../../assets/photos/catalog/06.jpg" },
  {
    slug: "salone-del-mobile",
    date: "22 августа 2025",
    title: "Гид по итальянской мебельной выставке Salone del Mobile",
    desc: "Главные тренды и открытия этого года — что нужно знать о новинках топовых фабрик.", image: "../../assets/photos/catalog/07.jpg" },
  {
    slug: "lighting-guide",
    date: "10 августа 2025",
    title: "Как выбрать освещение для современной кухни",
    desc: "Слоистое освещение, скрытые LED-полосы, дизайнерские подвесные светильники.", image: "../../assets/photos/catalog/08.jpg" },
];

const ArrowLeft = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);
const ArrowRight = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

function NewsCard({ item }) {
  return (
    <article className="news-card">
      <a className="news-card__media" href={`/novosti/${item.slug}`}>
        <img
          className="news-card__img"
          src={item.image}
          alt=""
          loading="lazy"
        />
      </a>
      <div className="news-card__date">{item.date}</div>
      <h3 className="news-card__title">
        <a href={`/novosti/${item.slug}`}>{item.title}</a>
      </h3>
      <p className="news-card__desc">{item.desc}</p>
    </article>
  );
}

export default function News() {
  return (
    <>
      <SiteHeader activeTop="novosti" />

      <main>
        <div className="container">
          <section className="news-head">
            <h1 className="news-head__title">Новости<br />от Le Cucine</h1>
            <nav className="news-head__breadcrumbs" aria-label="Хлебные крошки">
              <a href="/">LeCucine</a><span className="sep">–</span>
              <a href="/kuhni">Все кухни</a><span className="sep">–</span>
              <span className="current">Новости</span>
            </nav>
            <div className="news-head__intro">
              <p>
                Мы следим за трендами и новинками в мире кухонь и с удовольствием
                рассказываем обо всём этом вам! Кроме того, она отлично оптимизирует
                пространство, превращая любую комнату в кухню.
              </p>
              <a href="#more" className="news-head__expand">Открыть описание</a>
            </div>
          </section>

          <div className="news-divider" />

          <section className="news-grid">
            {NEWS.map((n) => <NewsCard key={n.slug} item={n} />)}
          </section>

          <div className="news-bottom">
            <nav className="news-pagination" aria-label="Пагинация">
              <a href="#" className="news-pagination__btn" aria-label="Назад"><ArrowLeft /></a>
              <a href="#" className="news-pagination__page active">1</a>
              <a href="#" className="news-pagination__page">2</a>
              <a href="#" className="news-pagination__page">3</a>
              <span className="news-pagination__dots">..</span>
              <a href="#" className="news-pagination__page">8</a>
              <a href="#" className="news-pagination__btn" aria-label="Вперёд"><ArrowRight /></a>
            </nav>
            <button className="btn btn--outline news-show-more">Показать ещё</button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
