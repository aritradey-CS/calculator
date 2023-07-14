(function() {
  let screen = document.querySelector('.input-row');
  let buttons = document.querySelectorAll('.button');
  let clear = document.querySelector('.button.gray');
  let equal = document.querySelector('.button.orange');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      let value = e.target.textContent;
      if (value === '=') {
        try {
          let answer = eval(screen.value);
          screen.value = answer;
        } catch (error) {
          screen.value = 'Error';
        }
      } else if (value === 'AC') {
        screen.value = '';
      } else {
        screen.value += value;
      }
    });
  });

  clear.addEventListener('click', function(e) {
    screen.value = '';
  });
})();
