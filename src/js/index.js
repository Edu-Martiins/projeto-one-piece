/*
O que precisa ser feito ? Quando clicar no botão do personagem do menu
 temos que marcar como selecionado e mostrar o personagem correspondente. 

 OBJETIVO 1 - Quando clicar no botão do personagem na lista, 
 marcar como selecionado
  
 Passo 1 -> pegar os botões no JS para poder verificar quando o usuário
 clicar em cima de um deles.
 Passo 2 -> adicionar a classe "selecionado" no botão que o ususário clicou
 Passo 3 -> verificar se já existe um botão selecionado, se sim, devemos remover a seleção.

 
 OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem 

 Passo 1 -> Pegar os personagens no JS para mostrar ou esconder ele
 Paaso 2 -> Adicionar a classe "selecionado" no personagem que o usuário selecionou
 Passo 3 -> verificar se já existia um personagem com a classe "selecionado", se sim, devemos remover
*/

/*OBJETIVO 1 - Quando clicar no botão do personagem na lista, 
 marcar como selecionado */
//OBJ1 Passo 1 -> pegar os botões no JS para poder verificar quando o usuário
//clicar em cima de um deles.
const botoes = document.querySelectorAll('.button')

/* OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem
 */

const personagens = document.querySelectorAll('.character')
/*OBJ 2 Passo 1 -> Pegar os personagens no JS para mostrar ou esconder ele */

botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    desselecionarBotao()
    DesselecionarPersonagem()

    botao.classList.add('selecionado')
    personagens[indice].classList.add('selecionado')
  })
})

function DesselecionarPersonagem() {
  const personagemSelecionado = document.querySelector('.character.selecionado')
  personagemSelecionado.classList.remove('selecionado')
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector('.button.selecionado')
  botaoSelecionado.classList.remove('selecionado')
}
