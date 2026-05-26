(function () {
  'use strict';

  const NAV_MAIN = [
    { href: '/kuhni', label: 'Кухни', key: 'kuhni' },
    { href: '/v-nalichii', label: 'В наличии', key: 'v-nalichii' },
    { href: '/raboty', label: 'Работы', key: 'raboty' },
    { href: '/fabriki', label: 'Фабрики', key: 'fabriki' },
    { href: '/mebel', label: 'Мебель', key: 'mebel' },
    { href: '/kontakty', label: 'Контакты', key: 'kontakty' },
  ];
  const NAV_TOP = [
    { href: '/about', label: 'О компании' },
    { href: '/delivery', label: 'Заказ и доставка' },
    { href: '/partners', label: 'Партнерство' },
    { href: '/novosti', label: 'Новости' },
    { href: '/sovety', label: 'Советы' },
  ];

  function el(tag, props, children) {
    const node = document.createElement(tag);
    if (props) {
      for (const k in props) {
        if (k === 'class') node.className = props[k];
        else if (k === 'text') node.textContent = props[k];
        else node.setAttribute(k, props[k]);
      }
    }
    if (children) {
      for (const c of children) {
        if (c) node.appendChild(c);
      }
    }
    return node;
  }

  function getActiveKey() {
    const a = document.querySelector('.site-header__main a.active');
    if (!a) return '';
    const href = a.getAttribute('href') || '';
    return href.replace(/^\//, '').replace(/\/$/, '');
  }

  function buildLogo() {
    const a = el('a', { href: '/', class: 'mobile-menu__logo' });
    a.appendChild(document.createTextNode('LECUCINE'));
    const sup = el('sup');
    sup.textContent = '®';
    a.appendChild(sup);
    return a;
  }

  function buildCloseBtn() {
    const btn = el('button', { type: 'button', class: 'mobile-menu__close', 'aria-label': 'Закрыть меню' });
    const SVG = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(SVG, 'svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    [['18','6','6','18'], ['6','6','18','18']].forEach(([x1,y1,x2,y2]) => {
      const line = document.createElementNS(SVG, 'line');
      line.setAttribute('x1', x1); line.setAttribute('y1', y1);
      line.setAttribute('x2', x2); line.setAttribute('y2', y2);
      svg.appendChild(line);
    });
    btn.appendChild(svg);
    return btn;
  }

  function buildMenu() {
    const active = getActiveKey();

    const head = el('div', { class: 'mobile-menu__head' }, [buildLogo(), buildCloseBtn()]);

    const mainNav = el('nav', { class: 'mobile-menu__main', 'aria-label': 'Главное меню' });
    NAV_MAIN.forEach(i => {
      const a = el('a', { href: i.href, text: i.label });
      if (i.key === active) a.className = 'active';
      mainNav.appendChild(a);
    });

    const topNav = el('nav', { class: 'mobile-menu__top', 'aria-label': 'Дополнительное меню' });
    NAV_TOP.forEach(i => topNav.appendChild(el('a', { href: i.href, text: i.label })));

    const contacts = el('div', { class: 'mobile-menu__contacts' }, [
      el('a', { href: 'tel:+74955324212', text: '+7 495 532 42 12' }),
      el('a', { href: 'mailto:hello@lecucine.ru', text: 'hello@lecucine.ru' }),
      el('div', { class: 'mobile-menu__address', text: 'Москва, Дербеневская наб. 7 с 3' }),
    ]);
    const socials = el('div', { class: 'mobile-menu__socials', style: 'margin-top:12px;' });
    [['Instagram','IG'],['ВКонтакте','VK'],['Facebook','F']].forEach(([label,txt]) => {
      socials.appendChild(el('a', { class: 'mobile-menu__social', href: '#', 'aria-label': label, text: txt }));
    });
    contacts.appendChild(socials);

    const body = el('div', { class: 'mobile-menu__body' }, [mainNav, topNav, contacts]);

    const menu = el('aside', {
      class: 'mobile-menu',
      'aria-hidden': 'true',
      'aria-label': 'Мобильное меню',
    }, [head, body]);

    document.body.appendChild(menu);
    return menu;
  }

  function init() {
    const burger = document.querySelector('.site-header__burger');
    if (!burger) return;
    const menu = buildMenu();
    const closeBtn = menu.querySelector('.mobile-menu__close');

    function open() {
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      document.body.classList.add('mobile-menu-open');
    }
    function shut() {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('mobile-menu-open');
    }

    burger.addEventListener('click', open);
    closeBtn.addEventListener('click', shut);
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') shut();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) shut();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
