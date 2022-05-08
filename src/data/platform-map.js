import {
  airtelTigoCashTariffs,
  bankTariffs,
  mtnMomoTariffs,
  vodafoneCashTariffs,
} from "../utils/platform-charges";

export const platformsMap = {
  mtn: mtnMomoTariffs,
  airtel: airtelTigoCashTariffs,
  voda: vodafoneCashTariffs,
  bank: bankTariffs,
};
