document.getElementById('button').addEventListener('click', function() {
    // criar um elemento para a mensagem
    let mensagem = document.createElement('p');
    mensagem.textContent = 'Seja muito bem vindo a minha página!';
    mensagem.style.color = "red";
    mensagem.style.fontFamily = "sans-serif";

    // pegar o elemento que é pai do botão
    let parent = this.parentNode;
  
    // colocar a mensagem antes do próximo elemento irmão do botão BUTTON (será parágrafo)
    parent.insertBefore(mensagem, this.nextSibling);
  });




