// Общая шапка для всех страниц. activeMain и activeTop — какой пункт меню подсветить.
export default function SiteHeader({ activeMain = "", activeTop = "" }) {
  const isMain = (k) => (activeMain === k ? "active" : undefined);
  const isTop = (k) => (activeTop === k ? "active" : undefined);
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <div className="site-header__brand">
            <a href="/" className="site-header__logo">LECUCINE<sup>®</sup></a>
            <nav className="site-header__nav" aria-label="Главная навигация">
              <div className="site-header__top">
                <a href="/about" className={isTop("about")}>О компании</a>
                <a href="/delivery" className={isTop("delivery")}>Заказ и доставка</a>
                <a href="/partners" className={isTop("partners")}>Партнерство</a>
                <a href="/novosti" className={isTop("novosti")}>Новости</a>
                <a href="/sovety" className={isTop("sovety")}>Советы</a>
              </div>
              <div className="site-header__main">
                <a href="/kuhni" className={isMain("kuhni")}>Кухни</a>
                <a href="/v-nalichii" className={isMain("v-nalichii")}>В наличии</a>
                <a href="/raboty" className={isMain("raboty")}>Работы</a>
                <a href="/fabriki" className={isMain("fabriki")}>Фабрики</a>
                <a href="/mebel" className={isMain("mebel")}>Мебель</a>
                <a href="/kontakty" className={isMain("kontakty")}>Контакты</a>
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
