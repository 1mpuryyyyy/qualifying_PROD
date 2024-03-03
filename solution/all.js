const listResumes = document.getElementById('list_resumes');
for (let i = 1; i < localStorage.length; i++){
  const li = document.createElement('li');
  li.classList.add('list_resumes_card');
  const h3 = document.createElement('h3');
  h3.classList.add('card_name');
  h3.innerText = localStorage.key(i).name;
  const cardButton = document.createElement('button');
  cardButton.classList.add('card_button');
  cardButton.innerText = 'Действия'
  li.appendChild(h3);
  li.appendChild(cardButton)
  listResumes.appendChild(li)
}
