/**
 * The Strip's calendar: which nights are special, and how much so.
 * Month 1-12, day of month, local hours (fractional, 0-24).
 */

/** True on the nights the costumes come out: Halloween, and the small hours after. */
export function isHalloween(month: number, day: number, hours: number) {
  return (month === 10 && day === 31) || (month === 11 && day === 1 && hours < 4);
}

/** Share of people in costume: a few the weekend before, a third on the night itself. */
export function costumeShare(month: number, day: number, hours: number) {
  if (isHalloween(month, day, hours)) {
    const evening = hours >= 17 || hours < 4;
    return evening ? 0.38 : 0.12;
  }
  if (month === 10 && day >= 24) return hours >= 19 ? 0.06 : 0.01;
  return 0;
}

/** Race weekend: Saturday night, November 21, 2026, lights out at 8 pm. */
export const RACE = { month: 11, day: 21, hours: 20 };

/** The circuit's walls and fences stand for the month before and the days after. */
export function circuitBuilt(month: number, day: number) {
  return (month === 10 && day >= 20) || (month === 11 && day <= 26);
}

/** Cars on track: practice and qualifying Thursday and Friday nights, the race on Saturday. */
export function onTrack(month: number, day: number, hours: number) {
  if (month !== RACE.month) return false;
  const night = day - RACE.day;
  return night >= -2 && night <= 0 && hours >= RACE.hours && hours < RACE.hours + 2;
}
