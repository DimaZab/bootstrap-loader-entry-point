import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import IndexComponent from "./components/index/index.component";
import ShowComponent from "./components/show/show.component";

/*
 * Event Component
 */
@Component({
  selector: "events-component",
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div>
      <nav>
        <h1>Events</h1>
        <ul>
          <li router-active>
            <a [routerLink]="['Index']">Index</a>
          </li>
          <li router-active>
            <a [routerLink]="['Show']">Show</a>
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
    component: IndexComponent,
    name: "Index",
    useAsDefault: true },

  { path: "/show",
    component: ShowComponent,
    name: "Show" }
])

export default class EventsComponent {
  a: Event;

  constructor() {}
}