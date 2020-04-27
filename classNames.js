/**
 *
 * оставить уникальные classNames
 * и отсортировать по количеству в dom-дереве от большего к меньшему
 *
 * const expectedResult = ['link', 'menu-item', 'menu', 'header', 'footer'];
 *
 */

const classNames = [
  'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
];

function getUniqueSortedClassNames(classNames) {
  const classNamesObj = classNames.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});

  return Object.keys(classNamesObj).sort((a, b) => classNamesObj[b] - classNamesObj[a]);
}

console.log(getUniqueSortedClassNames(classNames));
