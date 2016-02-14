/*
 * Angular 2 decorators and services
 */
import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import EventsComponent from "./events/events.component";
import HomeComponent from "./home/home.component";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div>
    <nav>
      <h1>Hello {{ name }}</h1>
      <ul>
        <li router-active>
          <a [routerLink]="['Home']">Index</a>
        </li>
        <li router-active>
          <a [routerLink]="['Events']">Event</a>
        </li>
      </ul>
    </nav>
  </div>
  <div>
    <router-outlet></router-outlet>
  </div>
  `
})

@RouteConfig([
  { path: "/",
    component: HomeComponent,
    name: "Home",
    useAsDefault: true },

  { path: "/events/...",
    component: EventsComponent,
    name: "Events" }
])

export class AppComponent {}
