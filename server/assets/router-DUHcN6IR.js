import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const appCss = "/aqua-form/assets/styles-Dqhh14gD.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GWT — Ihr Partner für wassertechnische Anlagen" },
      { name: "description", content: "Wassertechnik, Heizung, Schwimmbad und Therme — Planung, Errichtung und Service in Österreich und der Schweiz." },
      { name: "author", content: "GWT Group" },
      { property: "og:title", content: "GWT — Ihr Partner für wassertechnische Anlagen" },
      { property: "og:description", content: "Wassertechnik, Heizung, Schwimmbad und Therme — Planung, Errichtung und Service in Österreich und der Schweiz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "GWT — Ihr Partner für wassertechnische Anlagen" },
      { name: "twitter:description", content: "Wassertechnik, Heizung, Schwimmbad und Therme — Planung, Errichtung und Service in Österreich und der Schweiz." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab27a1ea-fea0-46e8-9d58-9518323addd8/id-preview-cffea5f9--aa9c0354-ef8f-446d-a624-ffe048fea44d.lovable.app-1778251224954.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab27a1ea-fea0-46e8-9d58-9518323addd8/id-preview-cffea5f9--aa9c0354-ef8f-446d-a624-ffe048fea44d.lovable.app-1778251224954.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$4 = () => import("./ueber-uns-BjLm8EAb.js");
const Route$4 = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [{
      title: "Haltung — GWT"
    }, {
      name: "description",
      content: "GWT Group: Familienbetrieb in zweiter Generation, spezialisiert auf wassertechnische Anlagen in Österreich und der Schweiz."
    }, {
      property: "og:title",
      content: "Haltung — GWT"
    }, {
      property: "og:description",
      content: "Wer wir sind und warum wir es so tun, wie wir es tun."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projekte-NXY-rD9p.js");
const Route$3 = createFileRoute("/projekte")({
  head: () => ({
    meta: [{
      title: "Projekte — GWT"
    }, {
      name: "description",
      content: "Ausgewählte Referenzprojekte aus Wassertechnik, Heizung und Schwimmbad."
    }, {
      property: "og:title",
      content: "Projekte — GWT"
    }, {
      property: "og:description",
      content: "Ausgewählte Referenzen aus Österreich und der Schweiz."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./leistungen-5wR1Ztwi.js");
const Route$2 = createFileRoute("/leistungen")({
  head: () => ({
    meta: [{
      title: "Leistungen — GWT"
    }, {
      name: "description",
      content: "Wassertechnik, Heizung, Schwimmbad und Service: Ein Überblick über die Leistungen der GWT Group."
    }, {
      property: "og:title",
      content: "Leistungen — GWT"
    }, {
      property: "og:description",
      content: "Vier Disziplinen, ein Verständnis. Ein Überblick."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./kontakt-BPhoapC0.js");
const Route$1 = createFileRoute("/kontakt")({
  head: () => ({
    meta: [{
      title: "Kontakt — GWT"
    }, {
      name: "description",
      content: "Kontaktieren Sie GWT Group für wassertechnische Anlagen, Heizung, Schwimmbad und Service."
    }, {
      property: "og:title",
      content: "Kontakt — GWT"
    }, {
      property: "og:description",
      content: "Schreiben Sie uns. Wir antworten innerhalb eines Werktags."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DH4jjJxM.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "GWT — Wassertechnik, Heizung, Therme"
    }, {
      name: "description",
      content: "GWT Group: Komplettlösungen für Wasser- und Wärmetechnik. Planung, Errichtung, Service in Österreich und der Schweiz."
    }, {
      property: "og:title",
      content: "GWT — Wassertechnik & Heizung"
    }, {
      property: "og:description",
      content: "Ihr Partner für wassertechnische Anlagen seit Jahrzehnten."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const UeberUnsRoute = Route$4.update({
  id: "/ueber-uns",
  path: "/ueber-uns",
  getParentRoute: () => Route$5
});
const ProjekteRoute = Route$3.update({
  id: "/projekte",
  path: "/projekte",
  getParentRoute: () => Route$5
});
const LeistungenRoute = Route$2.update({
  id: "/leistungen",
  path: "/leistungen",
  getParentRoute: () => Route$5
});
const KontaktRoute = Route$1.update({
  id: "/kontakt",
  path: "/kontakt",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  KontaktRoute,
  LeistungenRoute,
  ProjekteRoute,
  UeberUnsRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
