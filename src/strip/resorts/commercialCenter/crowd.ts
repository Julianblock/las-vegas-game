import type { Crowd } from '../../../life/people';

/**
 * Shoppers and diners under Commercial Center's canopies: up and down both
 * sides of the central arcade, across the lot from Sahara, and knots at the
 * barbecue doors. The bars keep it busy well after dark.
 */
export function commercialCenterCrowd(): Crowd {
  return {
    walks: [
      [4314, -2975, 4314, -2935, 4314, -2895, 4314, -2858],
      [4264, -2975, 4264, -2935, 4264, -2895, 4264, -2858],
      [4497, -3080, 4450, -3010, 4380, -2960, 4320, -2930],
      [4190, -3034, 4218, -3034, 4246, -3034],
    ],
    spots: [
      { x: 4316, z: -2958, r: 6, n: 10 },
      { x: 4262, z: -2888, r: 6, n: 8 },
      { x: 4316, z: -2890, r: 5, n: 6 },
      { x: 4640, z: -2970, r: 10, n: 12 },
    ],
    day: 0.8,
    night: 0.6,
    cx: 4400,
    cz: -2940,
    radius: 450,
  };
}
