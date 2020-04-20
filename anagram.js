const charactersOnly = str => str.trim().replace(/[^а-яА-Яa-zA-Z]+/g, '').toLowerCase();

const getObjectWithCharacters = string => {
  return [...string].reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});
};

const getUniqueKeys = valueAsObject => Object.keys(valueAsObject);


function isAnagram(str1, str2) {
  const [arrOfUniqueCharacters1, arrOfUniqueCharacters2] = [
    getUniqueKeys(getObjectWithCharacters(charactersOnly(str1))),
    getUniqueKeys(getObjectWithCharacters(charactersOnly(str2))),
  ];

  if (arrOfUniqueCharacters1.length !== arrOfUniqueCharacters2.length) {
    return false;
  }

  return arrOfUniqueCharacters1.every(character => arrOfUniqueCharacters2.includes(character));
}

const examples = {
  0: ['стационар', 'сора, тни ца'],
  1: ['foo', 'bar'],
  2: ['окно, и ветер', 'Откровение'],
  3: ['Older and Wiser', 'I like words'],
  4: ['Statue of Liberty', 'Built to stay free'],
  5: ['колба', 'бокал'],
  6: ['колбо', 'бокал'],
  7: ['колбб', 'бокал'],
};

console.log('isAnagram', isAnagram(...examples[2]));
