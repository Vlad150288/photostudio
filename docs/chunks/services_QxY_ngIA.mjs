import { d as createAstro, c as createComponent, b as addAttribute, e as renderScript, a as renderTemplate, f as renderSlot, g as renderHead, r as renderComponent } from './astro/server_DVPgo3a5.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro("https://vlad150288.github.io");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/ASUS/Desktop/studio/photostudio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ASUS/Desktop/studio/photostudio/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://vlad150288.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "\u0424\u043E\u0442\u043E\u0441\u0442\u0443\u0434\u0456\u044F Focus" } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const isRu = pathname === "/ru/" || pathname.startsWith("/ru/");
  const langPrefix = isRu ? "/ru" : "/ua";
  const tail = isRu ? pathname.replace(/^\/ru/, "") || "/" : pathname === "/" ? "/" : pathname.replace(/^\/ua/, "") || "/";
  const uaHref = "/ua" + tail;
  const ruHref = "/ru" + tail;
  const htmlLang = isRu ? "ru" : "ua";
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', "</title>", '<script src="/app.js" defer><\/script>', '</head> <body class="site-wrap"> <header class="site-header"> <section class="site-info"> <div class="site-brand"> <a', '> <img src="/images/logo.png" alt="Logo" height="25"> </a> </div> <div class="site-info__item site-info__item--phone"> <a href="tel:+380XXXXXXXXX" class="site-info__value">+38 (0XX) XXX-XX-XX</a> </div> <div class="site-info__item site-info__item--address"> <span class="site-info__value"> ', ' </span> </div> <div class="site-info__item site-info__item--time"> <span class="site-info__label">', '</span> <span class="site-info__value">', '</span> </div> <div class="site-lang"> <a', "", " data-astro-prefetch>\nUA\n</a> <a", "", ' data-astro-prefetch>\nRU\n</a> </div> <!-- \u043A\u043D\u043E\u043F\u043A\u0430 \u0431\u0443\u0440\u0433\u0435\u0440\u0430, \u043D\u0430 \u0434\u0435\u0441\u043A\u0442\u043E\u043F\u0435 \u0441\u043A\u0440\u044B\u0442\u0430 --> <button class="site-burger" id="siteBurger" type="button"', ' aria-expanded="false" aria-controls="mobileMenu"> <span class="site-burger__line"></span> <span class="site-burger__line"></span> <span class="site-burger__line"></span> </button> </section> <!-- \u043E\u0431\u044B\u0447\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0434\u043B\u044F \u0434\u0435\u0441\u043A\u0442\u043E\u043F\u0430 --> <nav class="site-nav site-nav--desktop"> <a', "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", ' </a> </nav> <!-- \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0435 \u043C\u0435\u043D\u044E --> <div class="site-mobile-menu" id="mobileMenu"> <nav class="site-mobile-menu__nav"> <a', "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", " </a> <a", "", " data-astro-prefetch> ", ' </a> </nav> </div> </header> <main class="site-main"> ', ' </main> <footer class="site-footer"> <div class="site-footer__main"> <div class="site-footer__contacts"> <div class="site-footer__item"> <span class="site-ico" aria-hidden="true"> <svg class="site-ico__svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C11 22 2 13 2 2c0-.6.4-1 1-1h4.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"></path> </svg> </span> <span class="site-info__label"> ', ' </span> <span class="site-info__value footer-number__value">+38 (0XX) XXX-XX-XX</span> </div> <div class="site-footer__item"> <span class="site-ico" aria-hidden="true"> <svg class="site-ico__svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm1 11H7V7h2v4h4v2z"></path> </svg> </span> <span class="site-info__label">', '</span> <span class="site-info__value">', '</span> </div> </div> <div class="site-footer__contacts"> <div class="site-footer__item"> <span class="site-ico" aria-hidden="true"> <svg class="site-ico__svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"></path> </svg> </span> <span class="site-info__value">', '</span> </div> <div class="site-footer__item"> <span class="site-ico" aria-hidden="true"> <svg class="site-ico__svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M14 3h7v7h-2V6.4l-9.3 9.3l-1.4-1.4L17.6 5H14V3z"></path> <path d="M5 5h7v2H7v10h10v-5h2v7H5V5z"></path> </svg> </span> <span class="site-info__label">', '</span> <a class="site-footer__map" href="https://maps.app.goo.gl/hbcX6rQR7ZqYAYve7" target="_blank" rel="noopener noreferrer"> ', ' </a> </div> </div> </div> <div class="site-footer__bottom"> <span class="site-footer__copy">\xA9 Focus \u0424\u043E\u0442\u043E\u0441\u0442\u0443\u0434\u0456\u044F ', "</span> </div> </footer> </body></html>"])), addAttribute(htmlLang, "lang"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), addAttribute(`${langPrefix}/`, "href"), isRu ? "\u041A\u0440\u0438\u0432\u043E\u0439 \u0420\u043E\u0433, \u0421\u043E\u0431\u043E\u0440\u043D\u043E\u0441\u0442\u0438 39" : "\u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433, \u0421\u043E\u0431\u043E\u0440\u043D\u043E\u0441\u0442\u0456 39", isRu ? "\u0413\u0440\u0430\u0444\u0438\u043A:" : "\u0413\u0440\u0430\u0444\u0456\u043A:", isRu ? "\u041F\u043D\u2013\u0421\u0431 9:00\u201318:00" : "\u041F\u043D\u2013\u0421\u0431 9:00\u201318:00", addAttribute(uaHref, "href"), addAttribute(`site-lang__btn ${!isRu ? "site-lang__btn--active" : ""}`, "class"), addAttribute(ruHref, "href"), addAttribute(`site-lang__btn ${isRu ? "site-lang__btn--active" : ""}`, "class"), addAttribute(isRu ? "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" : "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E", "aria-label"), addAttribute(`${langPrefix}/`, "href"), addAttribute(`site-nav__link ${pathname === langPrefix + "/" ? "site-nav__link--active" : ""}`, "class"), isRu ? "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" : "\u0413\u043E\u043B\u043E\u0432\u043D\u0430", addAttribute(`${langPrefix}/doc-photo/`, "href"), addAttribute(`site-nav__link ${pathname === langPrefix + "/doc-photo/" ? "site-nav__link--active" : ""}`, "class"), isRu ? "\u0424\u043E\u0442\u043E \u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B" : "\u0424\u043E\u0442\u043E \u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438", addAttribute(`${langPrefix}/restore/`, "href"), addAttribute(`site-nav__link ${pathname === langPrefix + "/restore/" ? "site-nav__link--active" : ""}`, "class"), isRu ? "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439" : "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439", addAttribute(`${langPrefix}/photo-print/`, "href"), addAttribute(`site-nav__link ${pathname === langPrefix + "/photo-print/" ? "site-nav__link--active" : ""}`, "class"), isRu ? "\u041F\u0435\u0447\u0430\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439" : "\u0414\u0440\u0443\u043A \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439", addAttribute(`${langPrefix}/contacts/`, "href"), addAttribute(`site-nav__link ${pathname === langPrefix + "/contacts/" ? "site-nav__link--active" : ""}`, "class"), isRu ? "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" : "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438", addAttribute(`${langPrefix}/`, "href"), addAttribute(`site-mobile-menu__link ${pathname === langPrefix + "/" ? "site-mobile-menu__link--active" : ""}`, "class"), isRu ? "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" : "\u0413\u043E\u043B\u043E\u0432\u043D\u0430", addAttribute(`${langPrefix}/doc-photo/`, "href"), addAttribute(`site-mobile-menu__link ${pathname === langPrefix + "/doc-photo/" ? "site-mobile-menu__link--active" : ""}`, "class"), isRu ? "\u0424\u043E\u0442\u043E \u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B" : "\u0424\u043E\u0442\u043E \u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438", addAttribute(`${langPrefix}/restore/`, "href"), addAttribute(`site-mobile-menu__link ${pathname === langPrefix + "/restore/" ? "site-mobile-menu__link--active" : ""}`, "class"), isRu ? "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439" : "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439", addAttribute(`${langPrefix}/photo-print/`, "href"), addAttribute(`site-mobile-menu__link ${pathname === langPrefix + "/photo-print/" ? "site-mobile-menu__link--active" : ""}`, "class"), isRu ? "\u041F\u0435\u0447\u0430\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439" : "\u0414\u0440\u0443\u043A \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439", addAttribute(`${langPrefix}/contacts/`, "href"), addAttribute(`site-mobile-menu__link ${pathname === langPrefix + "/contacts/" ? "site-mobile-menu__link--active" : ""}`, "class"), isRu ? "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" : "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438", renderSlot($$result, $$slots["default"]), isRu ? "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:" : "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:", isRu ? "\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B:" : "\u0413\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438:", isRu ? "\u041F\u043D\u2013\u0421\u0431 9:00\u201318:00" : "\u041F\u043D\u2013\u0421\u0431 9:00\u201318:00", isRu ? "\u041A\u0440\u0438\u0432\u043E\u0439 \u0420\u043E\u0433, \u0421\u043E\u0431\u043E\u0440\u043D\u043E\u0441\u0442\u0438 39" : "\u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433, \u0421\u043E\u0431\u043E\u0440\u043D\u043E\u0441\u0442\u0456 39", isRu ? "\u041D\u0430 \u043A\u0430\u0440\u0442\u0435:" : "\u041D\u0430 \u043C\u0430\u043F\u0456:", isRu ? "\u041E\u0442\u043A\u0440\u044B\u0442\u044C Google Maps" : "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 Google Maps", (/* @__PURE__ */ new Date()).getFullYear());
}, "C:/Users/ASUS/Desktop/studio/photostudio/src/layouts/BaseLayout.astro", void 0);

const services = [
  {
    id: 'doc-photo',
    title: { ua: 'Фото на документи', ru: 'Фото на документы' },
    desc:  { ua: 'Термінове фото…',     ru: 'Срочное фото…' },
    price: { ua: '150 грн',            ru: '150 грн' }, // если вдруг разные формулировки
  },
  {
    id: 'photo-print',
    title: { ua: 'Друк фото', ru: 'Печать фото' },
    desc:  { ua: 'Друк різних форматів', ru: 'Печать разных форматов' },
    price: { ua: 'від 5 грн', ru: 'от 5 грн' },
  },
];

const servicess = {
  // documents: [
  //   {
  //     id: 'ua-passport',
  //     image: '/images/1.jpg',
  //     title: { ua: 'Паспорт України', ru: 'Паспорт Украины' },
  //     size: { top: '3,5 см', left: '4,5 см' },
  //     desc: {
  //       ua: 'Вимоги до фото на паспорт включають розмір 35×45 мм, нейтральний вираз обличчя, погляд прямо в камеру, відсутність усмішки.',
  //       ru: 'Требования к фото на паспорт включают размер 35×45 мм, нейтральное выражение лица, взгляд прямо в камеру, отсутствие улыбки.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'personal-file',
  //     image: '/images/2.jpg',
  //     title: { ua: 'Особова справа', ru: 'Личное дело' },
  //     size: { top: '9 см', left: '12 см' },
  //     desc: {
  //       ua: 'Фото для особової справи формату 9×12 см. Світлий однотонний фон, чітке зображення, нейтральний вираз обличчя, без головних уборів.',
  //       ru: 'Фото для личного дела формата 9×12 см. Светлый однотонный фон, чёткое изображение, нейтральное выражение лица, без головных уборов.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'ubd',
  //     image: '/images/3.jpg',
  //     title: { ua: 'Посвідчення УБД', ru: 'Удостоверение УБД' },
  //     size: { top: '3 см', left: '4 см' },
  //     desc: {
  //       ua: 'Фото для посвідчення УБД розміром 3×4 см. Нейтральний вираз обличчя, світлий фон, без окулярів з тонованими лінзами.',
  //       ru: 'Фото для удостоверения УБД размером 3×4 см. Нейтральное выражение лица, светлый фон, без очков с тонированными линзами.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'pass',
  //     image: '/images/3.jpg',
  //     title: { ua: 'Перепустка', ru: 'Пропуск' },
  //     size: { top: '3 см', left: '4 см' },
  //     desc: {
  //       ua: 'Фото для перепустки формату 3×4 см. Світлий фон, чітке зображення, нейтральний вираз обличчя.',
  //       ru: 'Фото для пропуска формата 3×4 см. Светлый фон, чёткое изображение, нейтральное выражение лица.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'pension',
  //     image: '/images/2.jpg',
  //     title: { ua: 'Пенсійне посвідчення', ru: 'Пенсионное удост' },
  //     size: { top: '4 см', left: '6 см' },
  //     desc: {
  //       ua: 'Фото для пенсійного посвідчення розміром 4×6 см. Світлий однотонний фон, нейтральний вираз обличчя.',
  //       ru: 'Фото для пенсионного удостоверения размером 4×6 см. Светлый однотонный фон, нейтральное выражение лица.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'foreign-passport',
  //     image: '/images/2.jpg',
  //     title: { ua: 'Дитячий паспорт', ru: 'Детский паспорт' },
  //     size: { top: '10 см', left: '15 см' },
  //     desc: {
  //       ua: 'Фото для закордонного паспорта формату 10×15 см. Світлий фон, чітке зображення, нейтральний вираз обличчя.',
  //       ru: 'Фото для заграничного паспорта формата 10×15 см. Светлый фон, чёткое изображение, нейтральное выражение лица.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'schengen-visa',
  //     image: '/images/3.jpg',
  //     title: { ua: 'Шенгенська віза', ru: 'Шенгенская виза' },
  //     size: { top: '3,5 см', left: '4,5 см' },
  //     desc: {
  //       ua: 'Фото для шенгенської візи розміром 35×45 мм. Світлий фон, обличчя займає близько 80% кадру, нейтральний вираз.',
  //       ru: 'Фото для шенгенской визы размером 35×45 мм. Светлый фон, лицо занимает около 80% кадра, нейтральное выражение.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'student-card',
  //     image: '/images/3.jpg',
  //     title: { ua: 'Студентський квиток', ru: 'Студенческий билет' },
  //     size: { top: '3 см', left: '4 см' },
  //     desc: {
  //       ua: 'Фото для студентського квитка формату 3×4 см. Світлий фон, нейтральний вираз обличчя.',
  //       ru: 'Фото для студенческого билета формата 3×4 см. Светлый фон, нейтральное выражение лица.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   },

  //   {
  //     id: 'green-card',
  //     image: '/images/3.jpg',
  //     title: { ua: 'Green Card USA', ru: 'Green Card USA' },
  //     size: { top: '600 px', left: '600 px' },
  //     desc: {
  //       ua: 'Фото для Green Card США розміром 600×600 пікселів. Світлий фон, прямий погляд у камеру, нейтральний вираз обличчя.',
  //       ru: 'Фото для Green Card США размером 600×600 пикселей. Светлый фон, прямой взгляд в камеру, нейтральное выражение лица.'
  //     },
  //     prices: {
  //       standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
  //       express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
  //     }
  //   }
  // ],

  documents: {
  'ua-passport': {
    id: 'ua-passport',
    image: '/images/55.png',
    title: { ua: 'Паспорт України', ru: 'Паспорт Украины' },
    size: { top: '3,5 см', left: '4,5 см' },
    desc: {
      ua: 'Вимоги до фото на паспорт включають розмір 35×45 мм, нейтральний вираз обличчя, погляд прямо в камеру, відсутність усмішки.',
      ru: 'Требования к фото на паспорт включают размер 35×45 мм, нейтральное выражение лица, взгляд прямо в камеру, отсутствие улыбки.'
    },
    cartDesc: {
      desc1: '',
      desc2: ''
    },
    position: 'none',
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'personal-file': {
    id: 'personal-file',
    image: '/images/2.jpg',
    title: { ua: 'Особова справа', ru: 'Личное дело' },
    size: { top: '9 см', left: '12 см' },
    desc: {
      ua: 'Фото для особової справи формату 9×12 см. Світлий однотонний фон, чітке зображення, нейтральний вираз обличчя, без головних уборів.',
      ru: 'Фото для личного дела формата 9×12 см. Светлый однотонный фон, чёткое изображение, нейтральное выражение лица, без головных уборов.'
    },
    cartDesc: {
      desc1: '',
      desc2: 'Друк: 6 штук - 3,5×4,5 см'
    },
    position: '20rem',
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'ubd': {
    id: 'ubd',
    image: '/images/3x4.jpg',
    title: { ua: 'Посвідчення УБД', ru: 'Удостоверение УБД' },
    size: { top: '3 см', left: '4 см' },
    desc: {
      ua: 'Фото для посвідчення УБД розміром 3×4 см. Нейтральний вираз обличчя, світлий фон, без окулярів з тонованими лінзами.',
      ru: 'Фото для удостоверения УБД размером 3×4 см. Нейтральное выражение лица, светлый фон, без очков с тонированными линзами.'
    },
    cartDesc: {
      desc1: '',
      desc2: 'Друк: 6 штук - 3,5×4,5 см'
    },
    position: '20.5rem',
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'pass': {
    id: 'pass',
    image: '/images/3.jpg',
    title: { ua: 'Перепустка', ru: 'Пропуск' },
    size: { top: '3 см', left: '4 см' },
    desc: {
      ua: 'Фото для перепустки формату 3×4 см. Світлий фон, чітке зображення, нейтральний вираз обличчя.',
      ru: 'Фото для пропуска формата 3×4 см. Светлый фон, чёткое изображение, нейтральное выражение лица.'
    },
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'pension': {
    id: 'pension',
    image: '/images/2.jpg',
    title: { ua: 'Пенсійне посвідчення', ru: 'Пенсионное удост' },
    size: { top: '4 см', left: '6 см' },
    desc: {
      ua: 'Фото для пенсійного посвідчення розміром 4×6 см. Світлий однотонний фон, нейтральний вираз обличчя.',
      ru: 'Фото для пенсионного удостоверения размером 4×6 см. Светлый однотонный фон, нейтральное выражение лица.'
    },
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'foreign-passport': {
    id: 'foreign-passport',
    image: '/images/2.jpg',
    title: { ua: 'Дитячий паспорт', ru: 'Детский паспорт' },
    size: { top: '10 см', left: '15 см' },
    desc: {
      ua: 'Фото для закордонного паспорта формату 10×15 см. Світлий фон, чітке зображення, нейтральний вираз обличчя.',
      ru: 'Фото для заграничного паспорта формата 10×15 см. Светлый фон, чёткое изображение, нейтральное выражение лица.'
    },
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'schengen-visa': {
    id: 'schengen-visa',
    image: '/images/3.jpg',
    title: { ua: 'Шенгенська віза', ru: 'Шенгенская виза' },
    size: { top: '3,5 см', left: '4,5 см' },
    desc: {
      ua: 'Фото для шенгенської візи розміром 35×45 мм. Світлий фон, обличчя займає близько 80% кадру, нейтральний вираз.',
      ru: 'Фото для шенгенской визы размером 35×45 мм. Светлый фон, лицо занимает около 80% кадра, нейтральное выражение.'
    },
    cartDesc: {
      desc1: '',
      desc2: 'Друк: 6 штук - 3,5×4,5 см'
    },
    position: '20rem',
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'student-card': {
    id: 'student-card',
    image: '/images/3.jpg',
    title: { ua: 'Студентський квиток', ru: 'Студенческий билет' },
    size: { top: '3 см', left: '4 см' },
    desc: {
      ua: 'Фото для студентського квитка формату 3×4 см. Світлий фон, нейтральний вираз обличчя.',
      ru: 'Фото для студенческого билета формата 3×4 см. Светлый фон, нейтральное выражение лица.'
    },
    cartDesc: {
      desc1: '',
      desc2: 'Друк: 6 штук - 3,5×4,5 см'
    },
    position: '20rem',
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  },

  'green-card': {
    id: 'green-card',
    image: '/images/5x5.jpg',
    title: { ua: 'Green Card USA', ru: 'Green Card USA' },
    size: { top: '600 px', left: '600 px' },
    desc: {
      ua: 'Фото для Green Card США розміром 600×600 пікселів. Світлий фон, прямий погляд у камеру, нейтральний вираз обличчя.',
      ru: 'Фото для Green Card США размером 600×600 пикселей. Светлый фон, прямой взгляд в камеру, нейтральное выражение лица.'
    },
    cartDesc: {
      desc1: 'Цифровий файл: 600×600 px',
      desc2: 'Друк: 4 штуки - 5×5 см'
    },
    position: '18rem',
    prices: {
      standard: { ua: 'Комплект 6 штук', ru: 'Комплект 6 штук', value: 200 },
      express: { ua: 'Терміново (15 хв)', ru: 'Срочно (15 мин)', value: 240 }
    }
  }
}
};

export { $$BaseLayout as $, servicess as a, services as s };
