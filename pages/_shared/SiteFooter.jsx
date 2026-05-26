export default function SiteFooter() {
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
