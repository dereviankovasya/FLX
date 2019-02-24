
let iconAdd = document.getElementById('icon');
const maxItems = 10;
const clickOnButton = 1;
const start = 0;
document.getElementById('addButton').disabled = true;

function buttonUse() {
  if(document.getElementById('textInput').value.trim().length === start) {
    document.getElementById('addButton').disabled = true;
  }else{
    document.getElementById('addButton').disabled = false;
  }
}

document.getElementById('textInput').onkeyup = function(){
  buttonUse();
}

function addNewItem() {
  const li = document.createElement('li');
  li.setAttribute('class', 'newElement');
  li.setAttribute('draggable', true);
  let text = document.getElementById('textInput').value;
  let buttonCheck = document.createElement('button');
  buttonCheck.setAttribute('class', 'buttonCheck');
  buttonCheck.innerHTML = '<i class="material-icons">check_box_outline_blank</i>'
  let button_delete = document.createElement('button');
  button_delete.setAttribute('class', 'button_delete');
  button_delete.innerHTML = '<i class="material-icons">delete</i>';
  let txt = document.createTextNode(text);
  iconAdd.appendChild(li);
  li.appendChild(buttonCheck);
  li.appendChild(txt);
  li.appendChild(button_delete);

  buttonCheck.onclick = function(event){
  buttonCheck.innerHTML = '<i class="material-icons">check_box</i>'
};
button_delete.onclick = function(event){
 iconAdd.removeChild(li);
  document.getElementById('textInput').disabled = false;
   document.getElementById('addLimit').style.display = 'none';
    }
  if(text.length > start && iconAdd.getElementsByTagName('li').length <= maxItems - clickOnButton) {
    document.getElementById('textInput').value = '';
    document.getElementById('addButton').disabled = true;
   
  }else{
    document.getElementById('addLimit').value = '';
    document.getElementById('addButton').disabled = true;
    document.getElementById('addLimit').style.display = 'block';
    document.getElementById('textInput').disabled = true;
    document.getElementById('textInput').value = '';
    
  }
}
