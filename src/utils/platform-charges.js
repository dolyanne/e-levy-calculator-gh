const MTN_TO_MTN_EXEMPT = 100;
const MTN_TO_MTN_CHARGE = 0.75;
const MTN_TO_OTHERS_EXEMPT = 50;
const MTN_TO_OTHERS_CHARGE = 0.75;

export function mtnMomoTariffs({ source, destination, amount }) {
  if (destination === source) {
    let charge = 0;
    if (amount > MTN_TO_MTN_EXEMPT) {
      charge = (amount * MTN_TO_MTN_CHARGE) / 100;
    }
    return {
      charge,
      exempt: MTN_TO_MTN_EXEMPT,
      rate: MTN_TO_MTN_CHARGE,
    };
  } else {
    let charge = 0;
    if (amount > MTN_TO_OTHERS_EXEMPT) {
      charge = (amount * MTN_TO_OTHERS_CHARGE) / 100;
    }
    return {
      charge,
      exempt: MTN_TO_OTHERS_EXEMPT,
      rate: MTN_TO_OTHERS_CHARGE,
    };
  }
  return {
    charge: 0,
    exempt: 0,
    rate: 0,
  };
}

export function vodafoneCashTariffs(source, destination, amount) {
  return {
    charge: 0,
    exempt: 0,
    rate: 0,
  }; // Haha transfer charge de3 entua bi da! lol
}

export function airtelTigoCashTariffs(source, destination, amount) {
  return 0;
}

export function bankTariffs(source, destination, amount) {
  return 0;
}
