const receivesAFunction = (hello) => {
  return hello();
};
const returnsANamedFunction = () => {
  return myFunction();
};
const returnsAnAnonymousFunction = () => {
  return function () {
    return "hello";
  };
};
const myFunction = function () {
  return hello();
};
const hello = () => {
  return returnsAnAnonymousFunction();
};
