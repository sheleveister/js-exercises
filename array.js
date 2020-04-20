// написать метод перебора с помощью асинхронного обработчика всех элементов массива
// при этом когда элемент обработан, на его место должен вставать новый псевдо concurrency
// использовать можно современные стандарты ecmascript

/**
 * @param {Array} array массив, который нужно обработать
 * @param {number} count число элементов, которые будут обрабатываться одновременно
 * @param {() => Promise} handler обработчик, который возвращает промис
 * @return {Promise}
 */
function map(array, count, handler) {
  // return Promise.all([...])
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

map(
  Array(random(80, 100))
    .fill()
    .map(() => random(0, 100)),
  4,
  (item) =>
    new Promise((resolve) => {
      const duration = item % 2 === 0 ? 200 : 100;
      setTimeout(resolve, duration);
    })
);
