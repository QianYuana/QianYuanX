const useStateHand = <T>(initValue: T): T | any[] => {
  console.log(initValue, 'initValue');
  let state = initValue;
  const setState = (value: T) => {
    console.log(value, 'value');
    state = value;
  };

  return [state, setState];
};

export { useStateHand };
