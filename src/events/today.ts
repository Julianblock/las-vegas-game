/** The game's calendar date and clock, shared with shows that keep to it. */
export const today = { month: 4, day: 28, hours: 18 };

export function setToday(month: number, day: number, hours: number) {
  today.month = month;
  today.day = day;
  today.hours = hours;
}
