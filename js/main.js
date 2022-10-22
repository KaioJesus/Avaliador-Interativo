const tela1 = document.querySelector('.card');
const tela2 = document.querySelector('.card-2');
const radioButton = document.querySelectorAll('.rating__radio');

function onSubmit() {
    tela1.style.display = 'none';
    tela2.style.display = 'block';
  };
 
// atrela uma função ao evento de "click" do botão