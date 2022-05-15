const MTN_TO_MTN_EXEMPT = 100;
const MTN_TO_MTN_CHARGE = 0.75;
const MTN_TO_OTHERS_EXEMPT = 50; // change to 100 cedis as per sara's screen shot and run test again
const MTN_TO_OTHERS_CHARGE = 0.75;
const MTN_ABOVE_1000_CAP = 1000; // above 1000 has a flat fee of 7.5gh
const ATMONEY_CHARGE = 0.75; // Same airtelTigo charge for all networks
const ATMONEY_ABOVE_1000_CAP = 1000; // above 1000 has a flat fee of 10gh

export function mtnMomoTariffs({ source, destination, amount }) {
  let charge = 0;
  let exempt = MTN_TO_OTHERS_EXEMPT;
  let rate = MTN_TO_MTN_CHARGE;

  if (destination === source) {
    // mtn to mtn
    if (amount >= MTN_ABOVE_1000_CAP) {
      charge = 7.5;
    } else if (amount > MTN_TO_MTN_EXEMPT) {
      charge = (amount * MTN_TO_MTN_CHARGE) / 100;
    }
    exempt = MTN_TO_OTHERS_EXEMPT;
    rate = MTN_TO_MTN_CHARGE;
  } else {
    //mtn to others
    if (amount >= MTN_ABOVE_1000_CAP) {
      charge = 7.5;
    } else if (amount > MTN_TO_OTHERS_EXEMPT) {
      charge = (amount * MTN_TO_OTHERS_CHARGE) / 100;
    }
    exempt = MTN_TO_OTHERS_EXEMPT;
    rate = MTN_TO_OTHERS_CHARGE;
  }

  return {
    charge,
    exempt,
    rate,
  };
}

export function vodafoneCashTariffs({}) {
  return {
    charge: 0,
    exempt: 0,
    rate: 0,
  }; // Haha transfer charge de3 entua bi da! lol
}

export function airtelTigoMoneyTariffs({ amount }) {
  let charge = 0;
  charge = (amount * ATMONEY_CHARGE) / 100;
  if (amount >= ATMONEY_ABOVE_1000_CAP) {
    charge = 10;
  }

  return {
    charge,
    exempt: 0,
    rate: ATMONEY_CHARGE,
  };
}
