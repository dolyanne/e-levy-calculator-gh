import { calculateCharge } from "../src/utils/calculations";

describe("Testing cases with previous amounts", () => {
  [
    {
      previousAmount: -1,
      amount: -1,
      correctELevy: 0,
    },
    {
      previousAmount: 0,
      amount: -1,
      correctELevy: 0,
    },
    {
      previousAmount: 0,
      amount: 1,
      correctELevy: 0,
    },
    {
      previousAmount: 50,
      amount: 40,
      correctELevy: 0,
    },
    {
      previousAmount: 50,
      amount: 50,
      correctELevy: 0,
    },
    {
      previousAmount: 50,
      amount: 100,
      correctELevy: 0.75,
    },
    {
      previousAmount: 50,
      amount: 51,
      correctELevy: 0.015,
    },
  ].forEach(({ previousAmount, amount, correctELevy }) => {
    test(`Testing previously sent amount of GHS ${previousAmount} and  new amount of GHS ${amount}`, () => {
      // get elevy based on functions
      const elevyCharge = calculateCharge({
        previousAmount,
        amount,
      });

      // actual test
      expect(elevyCharge).toBe(correctELevy);
    });
  });
});
