export interface LinkDetail {
  reddit: string | null;
  article: string;
  wikipedia: string;
}

export interface HistoryEvent {
  id: number;
  title: string;
  event_date_utc: string;
  event_date_unix: string;
  flight_number: 4;
  details: string;
  links: LinkDetail;
}
