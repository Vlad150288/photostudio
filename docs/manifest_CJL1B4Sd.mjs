import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_DVPgo3a5.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ASUS/Desktop/studio/photostudio/","cacheDir":"file:///C:/Users/ASUS/Desktop/studio/photostudio/node_modules/.astro/","outDir":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/","srcDir":"file:///C:/Users/ASUS/Desktop/studio/photostudio/src/","publicDir":"file:///C:/Users/ASUS/Desktop/studio/photostudio/public/","buildClientDir":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/client/","buildServerDir":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/server/","adapterName":"","routes":[{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/contacts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ru/contacts","isIndex":true,"type":"page","pattern":"^\\/ru\\/contacts\\/?$","segments":[[{"content":"ru","dynamic":false,"spread":false}],[{"content":"contacts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ru/contacts/index.astro","pathname":"/ru/contacts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/copy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ru/copy","isIndex":true,"type":"page","pattern":"^\\/ru\\/copy\\/?$","segments":[[{"content":"ru","dynamic":false,"spread":false}],[{"content":"copy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ru/copy/index.astro","pathname":"/ru/copy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/doc-photo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ru/doc-photo","isIndex":true,"type":"page","pattern":"^\\/ru\\/doc-photo\\/?$","segments":[[{"content":"ru","dynamic":false,"spread":false}],[{"content":"doc-photo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ru/doc-photo/index.astro","pathname":"/ru/doc-photo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/photo-print/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ru/photo-print","isIndex":true,"type":"page","pattern":"^\\/ru\\/photo-print\\/?$","segments":[[{"content":"ru","dynamic":false,"spread":false}],[{"content":"photo-print","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ru/photo-print/index.astro","pathname":"/ru/photo-print","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/restore/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ru/restore","isIndex":true,"type":"page","pattern":"^\\/ru\\/restore\\/?$","segments":[[{"content":"ru","dynamic":false,"spread":false}],[{"content":"restore","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ru/restore/index.astro","pathname":"/ru/restore","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ru","isIndex":true,"type":"page","pattern":"^\\/ru\\/?$","segments":[[{"content":"ru","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ru/index.astro","pathname":"/ru","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/contacts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ua/contacts","isIndex":true,"type":"page","pattern":"^\\/ua\\/contacts\\/?$","segments":[[{"content":"ua","dynamic":false,"spread":false}],[{"content":"contacts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ua/contacts/index.astro","pathname":"/ua/contacts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/doc-photo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ua/doc-photo","isIndex":true,"type":"page","pattern":"^\\/ua\\/doc-photo\\/?$","segments":[[{"content":"ua","dynamic":false,"spread":false}],[{"content":"doc-photo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ua/doc-photo/index.astro","pathname":"/ua/doc-photo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/photo-print/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ua/photo-print","isIndex":true,"type":"page","pattern":"^\\/ua\\/photo-print\\/?$","segments":[[{"content":"ua","dynamic":false,"spread":false}],[{"content":"photo-print","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ua/photo-print/index.astro","pathname":"/ua/photo-print","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/restore/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ua/restore","isIndex":true,"type":"page","pattern":"^\\/ua\\/restore\\/?$","segments":[[{"content":"ua","dynamic":false,"spread":false}],[{"content":"restore","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ua/restore/index.astro","pathname":"/ua/restore","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ua","isIndex":true,"type":"page","pattern":"^\\/ua\\/?$","segments":[[{"content":"ua","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ua/index.astro","pathname":"/ua","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://vlad150288.github.io","base":"/photostudio","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/contacts/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/copy/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/doc-photo/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/photo-print/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ru/restore/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ua/contacts/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ua/doc-photo/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ua/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ua/photo-print/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/studio/photostudio/src/pages/ua/restore/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/ru/contacts/index@_@astro":"pages/ru/contacts.astro.mjs","\u0000@astro-page:src/pages/ru/copy/index@_@astro":"pages/ru/copy.astro.mjs","\u0000@astro-page:src/pages/ru/doc-photo/index@_@astro":"pages/ru/doc-photo.astro.mjs","\u0000@astro-page:src/pages/ru/photo-print/index@_@astro":"pages/ru/photo-print.astro.mjs","\u0000@astro-page:src/pages/ru/restore/index@_@astro":"pages/ru/restore.astro.mjs","\u0000@astro-page:src/pages/ru/index@_@astro":"pages/ru.astro.mjs","\u0000@astro-page:src/pages/ua/contacts/index@_@astro":"pages/ua/contacts.astro.mjs","\u0000@astro-page:src/pages/ua/doc-photo/index@_@astro":"pages/ua/doc-photo.astro.mjs","\u0000@astro-page:src/pages/ua/photo-print/index@_@astro":"pages/ua/photo-print.astro.mjs","\u0000@astro-page:src/pages/ua/restore/index@_@astro":"pages/ua/restore.astro.mjs","\u0000@astro-page:src/pages/ua/index@_@astro":"pages/ua.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CJL1B4Sd.mjs","C:/Users/ASUS/Desktop/studio/photostudio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.QW52Ox2j.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/contacts/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/copy/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/doc-photo/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/photo-print/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/restore/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ru/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/contacts/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/doc-photo/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/photo-print/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/restore/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/ua/index.html","/photostudio/file:///C:/Users/ASUS/Desktop/studio/photostudio/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"Ud+Tugrx1ErCk05hWFcHGCv+5LwlotEOtYu9PNjeTfs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
