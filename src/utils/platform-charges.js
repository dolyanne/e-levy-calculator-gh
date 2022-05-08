const MTN_TO_MTN_EXEMPT = 100;
const MTN_TO_MTN_CHARGE = 0.75;
const MTN_TO_OTHERS_EXEMPT = 50;
const MTN_TO_OTHERS_CHARGE = 0.75;

export function mtnMomoTariffs({ source, destination, amount }) {
  if (destination === source) {
    if (amount > MTN_TO_MTN_EXEMPT) {
      return (amount * MTN_TO_MTN_CHARGE)/100;
    }
  } else {
    if (amount > MTN_TO_OTHERS_EXEMPT) {
      return (amount * MTN_TO_OTHERS_CHARGE)/100;
    }
  }
  return 0;
}

export function vodafoneCashTariffs(source, destination, amount) {
  return 0; // Haha transfer charge de3 entua bi da! lol
}

export function airtelTigoCashTariffs(source, destination, amount) {
  return 0;
}

export function bankTariffs(source, destination, amount) {
  return 0;
}
