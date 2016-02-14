export default class Event {
  id: number;
  name: string;
  description: string;

  /*
    нужно возвращать в utc и преобразовывать по времени юзера
    с помощью moment.js
  */
  event_time: number;
  city_id: number;
  status_id: number;
  user_ids: number[];
}