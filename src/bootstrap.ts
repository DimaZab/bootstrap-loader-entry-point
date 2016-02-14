
/*
 * Providers provided by Angular
 */
import {bootstrap} from "angular2/platform/browser";
import {ELEMENT_PROBE_PROVIDERS} from "angular2/platform/common_dom";
import {ROUTER_PROVIDERS, APP_BASE_HREF} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";

/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent} from "./app/app.component";

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
  return bootstrap(AppComponent, [
    // These are dependencies of our App
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS,
    provide(APP_BASE_HREF, {useValue : "/index" })
  ])
  .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", main);