

let listeElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector ("#app button");


              //JSON.parse; converter novamente
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function rendertarefas(){
  listeElement.innerHTML = ""; //deixando a ul vazia se tiver algo dentro dela

  tarefas.map((todo)=>{
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);
    
    let linkElement =document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)


    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement);
    listeElement.appendChild(liElement);

  })
}

rendertarefas();

function adicionartarefas(){
  if(inputElement.value ===''){
    alert("Digite alguma tarefa");
    return false;//para parar a ação
  }else{
   let novatarefa = inputElement.value;

   tarefas.push(novatarefa);
   inputElement.value = '';

   rendertarefas();
   salvardados();
  }
}

buttonElement.onclick = adicionartarefas

function deletarTarefa(posicao){
 tarefas.splice(posicao, 1);
 rendertarefas();
 salvardados();
   
}

function salvardados(){
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas) )
}
