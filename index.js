function reducer(batteries) {
  return batteries.reduce((total, battery) => {
    return total + battery;
  }, 0);
}

const batteries = [5, 6, 7, 8, 5];
const totalBatteries = reducer(batteries);

console.log(totalBatteries); // Output: 31
