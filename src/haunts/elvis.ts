import { rect, type Haunt } from './haunt';

/** The King outside the old International, where he played 837 shows in a row. */
export const elvis: Haunt = {
  id: 'ghost-elvis',
  kind: 'secret',
  kicker: 'Westgate \u00b7 after dark',
  title: 'The King never left',
  text: 'Stagehands at the old International have told of a figure in the wings and a voice humming in the empty showroom. Out front tonight a shape in a high collar drifts toward the stage door, and fades.',
  ground: rect(3300, -2275, 3365, -2205),
  count: 1,
  hint: 'Fly over the forecourt of the Westgate, east of the Strip, after dark.',
  r: 70,
  h: 20,
};
