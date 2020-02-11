const app = {
  pages: [],
  init: function() {
    app.pages = document.querySelectorAll('.page');
    
    document.querySelectorAll('.nav-link').forEach((link)=>{
      link.addEventListener('click', app.nav);
    });
    history.replaceState({},'Home', '#home');
    window.addEventListener('popstate', app.popin);
  },
  nav: function(event) {
    event.preventDefault();
    let currentPage = event.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
    history.pushState({}, currentPage, `#${currentPage}`);
  },
  popin: function(event) {
    let hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
  }
  
}

let saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', () => {
  let word = document.getElementById('word').value;
  let def = document.getElementById('defenition').value;
  createTask(word,def);
});

function createTask(wordInp,defInp) {
  let mainTask = document.createElement('div');
  let taskContent = document.createElement('div');
  let taskBtns = document.createElement('div');
  let word = document.createElement('span');
  let defenition = document.createElement('span');
  let changeButton = document.createElement('input');
  let deleteButton = document.createElement('input');

  word.innerText = wordInp;
  defenition.innerText = defInp;

  mainTask.classList.add('task');
  taskContent.classList.add('task-content');
  taskBtns.classList.add('task-buttons');
  word.classList.add('word');
  defenition.classList.add('defenition');
  changeButton.setAttribute('type','button');
  changeButton.setAttribute('href','#');
  changeButton.setAttribute('value','Изменить');
  changeButton.classList.add('button');
  changeButton.classList.add('nav-link');
  deleteButton.setAttribute('type','button');
  deleteButton.setAttribute('href','#');
  deleteButton.setAttribute('value','Удалить');
  deleteButton.classList.add('button');
  deleteButton.id = 'delete';
  deleteButton.setAttribute('onclick','remove(event)');
  changeButton.setAttribute('data-target', 'list');
  
  document.getElementById('root').appendChild(mainTask);
  mainTask.appendChild(taskContent);
  taskContent.appendChild(word);
  taskContent.appendChild(defenition);
  mainTask.appendChild(taskBtns);
  taskBtns.appendChild(changeButton);
  taskBtns.appendChild(deleteButton);
  app.init();
}

const remove = (event) => {
  event.target.closest('.task').remove()
}

function Task(word,def) {
  this.word = word;
  this.def = def;
}

document.addEventListener('DOMContentLoaded', app.init);
