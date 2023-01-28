import { platforms } from "../data/platforms";

export const elevyTax = 0.01; //1/100

export function exemption(previousAmount) {
  let finalExemptionAmount = 0;
  let initialExemptAmount = 100;
  if (previousAmount >= initialExemptAmount) {
    finalExemptionAmount = 0; //  user has used up all exemption value for the day and therefore has no exemptions left
  } else if (previousAmount < initialExemptAmount) {
    finalExemptionAmount = initialExemptAmount - previousAmount;
  } else {
    finalExemptionAmount = initialExemptAmount;
  }
  return finalExemptionAmount;
}

export function getTaxableAmount(amount, exempt) {
  let taxableAmount = amount - exempt;
  if (taxableAmount < 0) {
    return 0;
  }

  return taxableAmount;
}

export function getElevyCharge(taxableAmount, elevyTax) {
  let elevyCharge = taxableAmount * elevyTax;
  return elevyCharge;
}

export function calculateCharge({ previousAmount, amount }) {
  // pick calculation from react component
  let exempt = exemption(previousAmount);
  let taxableAmount = getTaxableAmount(amount, exempt);
  let elevyCharge = getElevyCharge(taxableAmount, elevyTax);
  return elevyCharge;
}

export function getPlatformCharge({ source, destination, amount }) {
  // get platform charge
  const platformFunction = platforms.get(source).getCharge;
  const platformCharge = platformFunction({
    source,
    destination,
    amount,
  });
  return platformCharge;
}

export const calculatePlatformCharge = (sendingFrom, sendingTo, amount) => {
  let source = "";
  let destination = "";

  if (sendingFrom === "" && sendingTo === "") {
    return 0;
  } else if (sendingFrom !== "" && sendingTo !== "") {
    source = platforms.get(sendingFrom).key;
    destination = platforms.get(sendingTo).key;
  } else if (sendingFrom !== "") {
    source = platforms.get(sendingFrom).key;
    destination = platforms.get(sendingFrom).key;
  }

  const { charge } = getPlatformCharge({
    source,
    destination,
    amount,
  });
  return charge;
};
