const input = document.getElementById('texto');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('tarefas');

function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === '') return;

  // cria o li
  const li = document.createElement('li');

  // cria o span para o texto
  const span = document.createElement('span');
  span.textContent = texto;

  // clicar no texto para marcar como concluída
  span.addEventListener('click', function () {
    span.classList.toggle('concluida');
  });

  // cria botão remover
  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';

  botaoRemover.addEventListener('click', function () {
    lista.removeChild(li);
  });

  // monta o li
  li.appendChild(span);
  li.appendChild(botaoRemover);

  // adiciona na lista
  lista.appendChild(li);

  // limpa o input
  input.value = '';
  input.focus();
}

botao.addEventListener('click', adicionarTarefa);