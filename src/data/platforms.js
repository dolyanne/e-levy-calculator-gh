import {
  airtelTigoMoneyTariffs,
  mtnMomoTariffs,
  vodafoneCashTariffs,
} from "../utils/platformCharges";

export const platforms = new Map([
  [
    "mtn",
    {
      name: "MTN",
      company: "MTN",
      img: "./assets/white-waves.png",
      key: "mtn",
      theme: "mtn",
      getCharge: mtnMomoTariffs,
    },
  ],
  [
    "vodafone",
    {
      name: "Vodafone",
      company: "Vodafone",
      img: "./assets/white-waves.png",
      key: "vodafone",
      theme: "vodafone",
      getCharge: vodafoneCashTariffs,
    },
  ],
  [
    "airtel",
    {
      name: "AirtelTigo",
      company: "AirtelTigo",
      img: "./assets/white-waves.png",
      key: "airtel",
      theme: "airtel",
      getCharge: airtelTigoMoneyTariffs,
    },
  ],
]);
