document.getElementById('clickBtn').addEventListener('click', () =>{
  const messages = [
   'Отлично! Сайт работает!',
    'JavaScript тоже работает!',
    'Вы вообще имба!',
    'Это работает в инете йоу!'
  ];
  const randomMessage = messages[Math.floor(Math.random()*
                                            messages.length)];
  document.getElementById('message').textContent = randomMessage;
});
