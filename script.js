(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn-grey');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        let value = e.target.textContent;
        screen.value += value;
      });
    });
  
    equal.addEventListener('click', function(e) {
      if (screen.value === '') {
        screen.value = 'Please enter a valid expression';
      } else {
        try {
          let answer = eval(screen.value);
          screen.value = answer;
        } catch (error) {
          screen.value = 'Error';
        }
      }
    });
  
    clear.addEventListener('click', function(e) {
      screen.value = '';
    });
  })();
  