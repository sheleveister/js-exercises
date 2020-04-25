let timeout = null;

document.getElementById('input').addEventListener('input', (e) => {
  const { value } = e.target;

  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    console.log('send value', value);
  }, 500);
});
