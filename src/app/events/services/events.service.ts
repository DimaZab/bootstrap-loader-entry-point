import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import Event from "../models/event.model";
import {EVENTS} from "../mocks/events.mock";

@Injectable()

export default class EventsService {
  items: Event[];

  constructor(http: Http) {
    this.items = EVENTS;
  }

  getEvents(): Event[] {
    return this.items;
  }
}