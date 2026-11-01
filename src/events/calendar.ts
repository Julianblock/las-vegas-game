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
