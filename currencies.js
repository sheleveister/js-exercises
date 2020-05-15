const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
];

const output = {
  usd: [10000, 30000],
  gbp: [9000, 0],
  eur: [0, 7000],
  uah: [10000, 0],
};

const outputRes = input.reduce((acc, item) => {
  const [currency, type, value] = item;

  const isCurrencyKeyExists = index => acc[currency] ? acc[currency][index] : 0;

  acc[currency] = [
    isCurrencyKeyExists(0),
    isCurrencyKeyExists(1),
  ];

  acc[currency][type === 'buy' ? 0 : 1] += value;
  return acc;

}, {});

console.log(outputRes);
