import { days_T, event_T } from "../../../../../Shared/types";

export type TimeLineProps_T = { days: days_T, events: Array<event_T>, addEvent: (event: event_T) => void, deleteEvent: (id: string) => void }