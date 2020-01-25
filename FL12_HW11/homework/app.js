const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createTree(structure, node) {
  const ul = document.createElement('ul');

  for (let i = 0; i < structure.length; i++) {
      const li = document.createElement('li');
      const div = document.createElement('div');
      const img = document.createElement('i');
      const span = document.createElement('span');
      img.className = 'material-icons';
      div.appendChild(img);
      div.appendChild(span);
      span.innerHTML = structure[i].title;
      li.appendChild(div);
      ul.appendChild(li);

      if (structure[i].folder) {
        div.classList.toggle('folder');
        img.innerHTML = 'folder';
          div.addEventListener('click', () => {
            if(img.innerHTML === 'folder'){
              img.innerHTML = 'folder_open';
            } else {
              img.innerHTML = 'folder';
            }
            li.querySelector('.closed').classList.toggle('open');
          });

          if (structure[i].children) {
              createTree(structure[i].children, li);
          } else {
              let empty = document.createElement('div');
              empty.classList.add('empty', 'closed');
              empty.innerText = 'Folder is empty';
              li.appendChild(empty);
          }
      } else {
        div.classList.toggle('file');
        img.innerHTML = 'insert_drive_file';
        img.classList.add('file_image');
      }
  }
  node.appendChild(ul);
  if (ul.parentNode !== rootNode) {
    ul.classList.toggle('closed');
  }
}

createTree(structure, rootNode);