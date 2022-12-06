// Code your solution in this file!
const distanceFromHqInBlocks = (distance) => {
  if (distance > 42) return distance - 42;
  else {
    return 42 - distance;
  }
};
const distanceFromHqInFeet = (distance) => {
  return distanceFromHqInBlocks(distance) * 264;
};

const distanceTravelledInFeet = (a, b) => {
  return a > b ? (a - b) * 264 : (b - a) * 264;
};

const calculatesFarePrice = (start, destination) => {
  if ((destination - start) * 400 === 400) {
    return 0;
  } else if (
    (start - destination) * 264 > 400 &&
    (start - destination) * 264 < 2000
  ) {
    return 2.56;
  } else if ((destination - start) * 264 > 2000) {
    return 25;
  } else if ((start - destination) * 264 > 2500) {
    return "cannot travel that far";
  }
};
