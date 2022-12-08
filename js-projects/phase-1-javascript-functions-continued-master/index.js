// code your solution here
const saturdayFun = (item = 'roller-skate') => {
  return `This Saturday, I want to ${item}!`;
};
const mondayWork = (item = 'go to the office') => {
  return `This Monday, I will ${item}.`;
};
const wrapAdjective = (item = '*') => {
  const result = (elem = 'special') => {
    return `You are ${item}${elem}${item}!`;
  };
  return result;
};
