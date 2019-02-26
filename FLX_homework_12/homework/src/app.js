const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

let iconAdd = document.getElementById('icon');
const clickOnButton = 1;
const start = 0;
document.getElementById('add-button').disabled = true;

function buttonUse() {
  if(document.getElementById('text-input').value.trim().length === start) {
    document.getElementById('add-button').disabled = true;
  }else{
    document.getElementById('add-button').disabled = false;
  }
}

document.getElementById('text-input').onkeyup = function(){
  buttonUse();
}

function addNewItem() {
  const li = document.createElement('li');
  li.setAttribute('class', 'newElement');
  let text = document.getElementById('text-input').value;
  let button_check = document.createElement('button');
  button_check.setAttribute('class', 'button_check');
  button_check.innerHTML = '<img src="assets/img/todo-s.png"/>'
  let button_delete = document.createElement('button');
  button_delete.setAttribute('class', 'button_delete');
  button_delete.innerHTML = '<img src="assets/img/remove-s.jpg"/>';
  let txt = document.createTextNode(text);
  iconAdd.appendChild(li);
  li.appendChild(button_check);
  li.appendChild(txt);
  li.appendChild(button_delete);

  button_check.onclick = function(event){
  button_check.innerHTML = '<img src="assets/img/done-s.png"/>';
};
button_delete.onclick = function(event){
 iconAdd.removeChild(li);
  document.getElementById('text-input').disabled = false;
    };
  if(text.length === start) {
    document.getElementById('text-input').value = '';
    document.getElementById('add-button').disabled = true;
  }else if(iconAdd.getElementsByTagName('li').length >= clickOnButton){
    document.getElementById('add-limit').value = '';
    document.getElementById('add-button').disabled = true;
    document.getElementById('add-limit').style.display = 'none';
    document.getElementById('text-input').value = '';
  }
}


rootNode.appendChild(/* Append your list item node*/);
