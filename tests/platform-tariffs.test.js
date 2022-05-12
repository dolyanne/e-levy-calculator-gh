import { platformsMap } from "../src/data/platform-map";
import { mtnMomoTariffs } from "../src/utils/platform-charges";

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
      destination: "others",
      correctCharge: 0.9,
    },
    {
      source: "voda",
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
      source: "voda",
      amount: 500,
      destination: "",
      correctCharge: 0,
    },
   
    
  ].forEach(({ source, destination, amount, correctCharge }) => {
    test(`Testing sending GHS ${amount} from ${source} to ${destination}`, () => {
      // get platform charge for momo
      const platformFunction = platformsMap[source];
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
