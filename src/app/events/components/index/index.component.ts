import {Component} from 'angular2/core';

import Event from "../../models/event.model";
import EventsService from "../../services/events.service";

/*
 * Events Component
 */
@Component({
  selector: "index",
  providers: [EventsService],
  template: `
  <div>I'm index component</div>
  <ul>
    <li *ngFor="#event of events">
      {{event.name}}
    </li>
  </ul>
  `
})

export default class IndexComponent {
  events: Event[];

  constructor(private _eventsService: EventsService) {
    this.events = _eventsService.getEvents();
  }
}