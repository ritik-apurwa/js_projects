document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');
  const body = document.querySelector('#show-box');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      if (e.target.id === 'white') {
        body.style.background = 'white';
      }
      if (e.target.id === 'grey') {
        body.style.background = 'grey';
      }
      if (e.target.id === 'blue') {
        body.style.background = 'blue';
      }
      if (e.target.id === 'yellow') {
        body.style.background = 'yellow';
      }
      if (e.target.id === 'purple') {
        body.style.background = 'purple';
      }
      if (e.target.id === 'orange') {
        body.style.background = 'orange';
      }
    });
  });
});
