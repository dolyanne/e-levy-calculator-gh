import { platforms } from "../src/data/platforms";

describe("Testing platform tariffs", () => {
  [
    {
      source: "mtn",
      amount: 100,
      destination: "mtn",
      correctCharge: 0,
    },
    {
      source: "mtn",
      amount: 500,
      destination: "mtn",
      correctCharge: 3.75,
    },
    {
      source: "mtn",
      amount: 120,
      destination: "voda",
      correctCharge: 0.9,
    },
    {
      source: "mtn",
      amount: 75,
      destination: "voda",
      correctCharge: 0,
    },
    {
      source: "vodafone",
      amount: 500,
      destination: "mtn",
      correctCharge: 0,
    },
    {
      source: "mtn",
      amount: 2000,
      destination: "mtn",
      correctCharge: 7.5,
    },
    {
      source: "vodafone",
      amount: 500,
      destination: "mtn",
      correctCharge: 0,
    },
    {
      source: "airtel",
      amount: 2000,
      destination: "mtn",
      correctCharge: 7.5,
    },
    {
      source: "airtel",
      amount: 100,
      destination: "mtn",
      correctCharge: 0,
    },
    {
      source: "airtel",
      amount: 40,
      destination: "mtn",
      correctCharge: 0,
    },
    {
      source: "airtel",
      amount: 500,
      destination: "airtel",
      correctCharge: 3.75,
    },
    {
      source: "airtel",
      amount: 500,
      destination: "mtn",
      correctCharge: 3.75,
    },
  ].forEach(({ source, destination, amount, correctCharge }) => {
    test(`Testing sending GHS ${amount} from ${source} to ${destination}`, () => {
      // get platform charge for momo
      const platformFunction = platforms.get(source).getCharge;
      const { charge } = platformFunction({
        source,
        destination,
        amount,
      });

      // actual test
      expect(charge).toBe(correctCharge);
    });
  });
});
