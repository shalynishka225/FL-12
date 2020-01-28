const root = document.getElementById('root');

const createForm = () => {
  const counter = 1;
  const container = document.createElement('div');
  container.classList.toggle('UIContainer');
  const createSetPage = document.createElement('div');
  createSetPage.classList.toggle('createSetPage');
  const items = document.createElement('div');
  items.classList.toggle('items');

  const itemToolBar = document.createElement('div');
  itemToolBar.classList.toggle('itemToolBar');
  const itemToolBarCounter = document.createElement('span');
  itemToolBarCounter.classList.toggle('itemToolBarCounter');
  itemToolBarCounter.innerText = counter;
  const itemToolBarDone = document.createElement('input');
  itemToolBarDone.classList.toggle('itemToolBarDone');
  itemToolBarDone.setAttribute('type', 'checkbox');
  const itemToolBarRemove = document.createElement('div');
  itemToolBarRemove.classList.toggle('itemToolBarRemove');
  const contextToggle = document.createElement('span');
  contextToggle.classList.toggle('contextToggle');
  contextToggle.innerText = 'Удалить';

  const contentPadding = document.createElement('div');
  contentPadding.classList.toggle('content-padding');
  const contentSides = document.createElement('div');
  contentSides.classList.toggle('content-sides');

  const contentSideWord = document.createElement('div');
  contentSideWord.classList.toggle('wordSide');
  const wordSpecialTextArea = document.createElement('div');
  wordSpecialTextArea.classList.toggle('wordSpecialTextArea');
  const wordTextArea = document.createElement('label');
  wordTextArea.classList.toggle('wordTextArea');
  const wordTextAreaContent = document.createElement('div');
  wordTextAreaContent.classList.toggle('wordTextAreaContent');
  const wordTextAreaBorder = document.createElement('span');
  wordTextAreaBorder.classList.toggle('wordTextAreaBorder');
  const wordTextAreaLabel = document.createElement('span');
  wordTextAreaLabel.classList.toggle('wordTextAreaLabel');

  const contentSideDefinition = document.createElement('div');
  contentSideDefinition.classList.toggle('definitionSide');
  const definitionSpecialTextArea = document.createElement('div');
  definitionSpecialTextArea.classList.toggle('definitionSpecialTextArea');
  const definitionTextArea = document.createElement('label');
  definitionTextArea.classList.toggle('definitionTextArea');
  const definitionTextAreaContent = document.createElement('div');
  definitionTextAreaContent.classList.toggle('definitionTextAreaContent');
  const definitionTextAreaBorder = document.createElement('span');
  definitionTextAreaBorder.classList.toggle('definitionTextAreaBorder');
  const definitionTextAreaLabel = document.createElement('span');
  definitionTextAreaLabel.classList.toggle('definitionTextAreaLabel');

  root.appendChild(container);
  container.appendChild(createSetPage);
  createSetPage.appendChild(items);
  items.appendChild(itemToolBar);
  itemToolBar.appendChild(itemToolBarCounter);
  itemToolBar.appendChild(itemToolBarDone);
  itemToolBar.appendChild(itemToolBarRemove);
  itemToolBarRemove.appendChild(contextToggle);
  items.appendChild(contentPadding);
  contentPadding.appendChild(contentSides);
  contentSides.appendChild(contentSideWord);
  contentSideWord.appendChild(wordSpecialTextArea);
  wordSpecialTextArea.appendChild(wordTextArea);
  wordTextArea.appendChild(wordTextAreaContent);
  wordTextAreaContent.appendChild(wordTextAreaBorder);
  wordTextAreaContent.appendChild(wordTextAreaLabel);

  contentSides.appendChild(contentSideDefinition);
  contentSideDefinition.appendChild(definitionSpecialTextArea);
  definitionSpecialTextArea.appendChild(definitionTextArea);
  definitionTextArea.appendChild(definitionTextAreaContent);
  definitionTextAreaContent.appendChild(definitionTextAreaBorder);
  definitionTextAreaContent.appendChild(definitionTextAreaLabel);



  




}

createForm();

