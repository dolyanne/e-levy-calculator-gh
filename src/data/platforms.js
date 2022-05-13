import {
  airtelTigoMoneyTariffs,
  mtnMomoTariffs,
  vodafoneCashTariffs,
} from "../utils/platformCharges";

export const platforms = new Map([
  [
    "mtn",
    {
      name: "MTN MoMo",
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
      name: "Vodafone Cash",
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
      name: "AirtelTigo Money",
      company: "AirtelTigo",
      img: "./assets/white-waves.png",
      key: "airtel",
      theme: "airtel",
      getCharge: airtelTigoMoneyTariffs,
    },
  ],
]);
