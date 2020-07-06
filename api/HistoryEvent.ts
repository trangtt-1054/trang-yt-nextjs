export interface HistoryEvent {
  id: number;
  title: string;
  event_date_utc: string;
  event_date_unix: number;
  flight_number: number;
  details: string;
  links: {
    reddit: string | null;
    article: string;
    wikipedia: string;
  };
}
