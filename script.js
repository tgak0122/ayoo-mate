const btn = document.getElementById('themeBtn');
btn.addEventListener('click', () => {
  document.body.style.background = `linear-gradient(${Math.random()*360}deg, 
    #${Math.floor(Math.random()*16777215).toString(16)}, 
    #${Math.floor(Math.random()*16777215).toString(16)})`;
});
