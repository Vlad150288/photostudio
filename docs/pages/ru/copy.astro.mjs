import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DVPgo3a5.mjs';
import 'piccolore';
import { $ as $$BaseLayout, s as services } from '../../chunks/services_QxY_ngIA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0424\u043E\u0442\u043E\u0441\u0442\u0443\u0434\u0456\u044F Focus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Копия RU</h1> ${services.map((service) => renderTemplate`<a${addAttribute(`/ua/services/${service.id}/`, "href")}>${service.title.ru}</a><br>`)}` })}`;
}, "C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/copy/index.astro", void 0);

const $$file = "C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/copy/index.astro";
const $$url = "/photostudio/ru/copy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
