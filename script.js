window.onload = () => {
  const tg = window.Telegram.WebApp;
  tg.ready();

  console.log("tg:", tg);
  console.log("initData:", tg.initData);
  console.log("initDataUnsafe:", tg.initDataUnsafe);
  console.log("initDataUnsafe.user:", tg.initDataUnsafe?.user);

  const userEl = document.getElementById('user');
  const sendBtn = document.getElementById('sendBtn');

  if (!userEl || !sendBtn) {
    console.error("Элементы не найдены");
    return;
  };

  userEl.textContent = tg.initDataUnsafe.user?.first_name || 'Гость';

  sendBtn.addEventListener('click', () => {
    console.log("Кнопка нажата");
    tg.sendData("Привет от мини-аппы!");
  });
};