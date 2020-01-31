const root = document.getElementById('root');
let objArray = [];
let id = 1;

const createForm = (id, word, definition,chbox) => {

  const UIContainer = document.createElement('div');
  const formHeader = document.createElement('div');
  const formHeaderItems = document.createElement('div');
  const formCounter = document.createElement('div');
  const counter = document.createElement('span');
  const removeButton = document.createElement('div');
  const removeButtonA = document.createElement('a');
  const changeButton = document.createElement('div');
  const changeButtonA = document.createElement('a');
  const formCheckBox = document.createElement('div');
  const checkBox = document.createElement('input');
  const formContext = document.createElement('div');
  const formContextItems = document.createElement('div');
  const wordField = document.createElement('div');
  const wordInput = document.createElement('input');
  const wordLabel = document.createElement('label');
  const definitionField = document.createElement('div');
  const definitionInput = document.createElement('input');
  const definitionLabel = document.createElement('label');

  UIContainer.classList.toggle('UIContainer');
  formHeader.classList.toggle('formHeader');
  formHeaderItems.classList.toggle('formHeaderItems');
  formCounter.classList.toggle('formCounter');
  counter.classList.toggle('counter');
  removeButton.classList.toggle('removeButton');
  removeButtonA.classList.toggle('myButton');
  changeButton.classList.toggle('changeButton');
  changeButtonA.classList.toggle('myButton');
  formCheckBox.classList.toggle('formCheckBox');
  checkBox.classList.toggle('checkbox');
  formContext.classList.toggle('formContext');
  formContextItems.classList.toggle('formContextItems');
  wordField.classList.toggle('wordField');
  wordInput.classList.toggle('wordInput');
  wordLabel.classList.toggle('wordLabel');
  definitionField.classList.toggle('definitionField');
  definitionInput.classList.toggle('definitionInput');
  definitionLabel.classList.toggle('definitionLabel');

  root.appendChild(UIContainer);
  UIContainer.appendChild(formHeader);
  formHeader.appendChild(formHeaderItems);
  formHeaderItems.appendChild(formCounter);
  formCounter.appendChild(counter);
  formHeaderItems.appendChild(removeButton);
  removeButton.appendChild(removeButtonA)
  formHeaderItems.appendChild(changeButton);
  changeButton.appendChild(changeButtonA);
  formHeaderItems.appendChild(formCheckBox);
  formCheckBox.appendChild(checkBox);

  UIContainer.appendChild(formContext);
  formContext.appendChild(formContextItems);
  formContextItems.appendChild(wordField);
  wordField.appendChild(wordInput);
  wordField.appendChild(wordLabel);
  formContextItems.appendChild(definitionField);
  definitionField.appendChild(definitionInput);
  definitionField.appendChild(definitionLabel);

  counter.innerText = id;
  removeButtonA.innerText = 'Удалить';
  changeButtonA.innerText = 'Изменить';
  checkBox.setAttribute('type','checkbox');
  wordInput.setAttribute('type','text');
  wordInput.id = 'wordArea';
  wordInput.setAttribute('name', 'word');
  wordLabel.setAttribute('for', 'word');
  wordLabel.innerText= 'термин';
  definitionInput.setAttribute('type','text');
  definitionInput.setAttribute('name', 'definition');
  definitionInput.id = 'definitionArea';
  definitionLabel.setAttribute('for', 'definition');
  definitionLabel.innerText = 'определение';
  checkBox.checked = chbox;
  removeButtonA.setAttribute('onclick' , 'removeForm(event)');

  return UIContainer;
}

const createObj = (id, word, def, chbox) => {
  return {
    id, word, def, chbox
  }
}

const create = document.getElementById('createButton');

create.addEventListener('click' , () => {
  //createObj(id,'','',false);
  //console.log(createObj(id,'','',false));
  createForm(id,'','',false);
  id++;
  readInput;
  console.log(readInput());
});

const removeForm = (event) => {
  event.target.closest('.UIContainer').remove();
}

const readInput = () => {
  const allforms = document.querySelectorAll('.UIContainer');
  
    return allforms.map(oneForm => ({
      word: oneForm.querySelector('.wordInput').value,
      def: oneForm.querySelector('.definitionInput').value      
    }))
}




