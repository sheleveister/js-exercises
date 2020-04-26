function onlyCharacters(str) {
  return str.toLowerCase().replace(/[^а-яА-Яa-zA-Z]+/g, '');
}

function buildCharObj(str) {
  return [...str].reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});
}

function isAnagram(str1, str2) {
  str1 = onlyCharacters(str1);
  str2 = onlyCharacters(str2);

  if (str1.length !== str2.length) {
    return false;
  }

  const [charObj1, charObj2] = [buildCharObj(str1), buildCharObj(str2)];

  return Object.keys(charObj1).every(char => charObj1[char] === charObj2[char]);
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
  8: ['колбааa', 'бooокал'],
};

console.log(isAnagram(...examples[8]));
