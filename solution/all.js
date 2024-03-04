const listResumes = document.getElementById('list_resumes');
const sectionList = document.getElementById('section_list');
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith('dict_')) {
    console.log(JSON.parse(localStorage.getItem(key)))
    const deleteCheckboxButton = document.createElement('button');
    deleteCheckboxButton.innerText = 'Удалить выбранные'
    deleteCheckboxButton.setAttribute('test-id', "delete-resumes")
    deleteCheckboxButton.id = 'deleteCheckboxes';
    deleteCheckboxButton.classList.add('deleteCheckboxes');
    deleteCheckboxButton.addEventListener('click', function () {
      const checkedCheckboxList = document.querySelectorAll('input[type="checkbox"]:checked');
      checkedCheckboxList.forEach(checkbox => {
        localStorage.removeItem(`dict_${checkbox.id}`)
      })
    });
    const li = document.createElement('li');
    li.classList.add('list_resumes_card');
    li.setAttribute('test-id', "resume-item");
    const checkbox = document.createElement("input")
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('test-id', "resume-checkbox");
    checkbox.id = `checkbox${i}`;
    checkbox.addEventListener('change', function () {
      const deleteCheckboxes = document.getElementById('deleteCheckboxes');
      const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkedCheckboxes.length > 0) {
        deleteCheckboxes.style.display = 'block';
      } else {
        deleteCheckboxes.style.display = 'none';
      }
    })
    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id)
    const h3 = document.createElement('h3');
    h3.classList.add('card_name');
    h3.setAttribute('test-id', "resume-title")
    if (JSON.parse(localStorage.getItem(key)).nameResume !== '') {
      h3.innerText = JSON.parse(localStorage.getItem(key)).nameResume;
    } else {
      console.log(JSON.parse(localStorage.getItem(key)).nameResume);
      h3.innerText = `${JSON.parse(localStorage.getItem(key)).name}`;
    }

    const cardButton = document.createElement('button');
    cardButton.id = `dropdownButton${i}`;
    cardButton.innerText = 'Действия';
    cardButton.setAttribute('title', 'Действия');
    cardButton.setAttribute('test-id', "resume-actions");
    const div = document.createElement('div');
    div.classList.add('dropdownMenu');
    div.id = `dropdownMenu${i}`
    cardButton.addEventListener('click', function () {
      if (div.classList.contains('visible')) {
        div.classList.remove('visible');
      } else {
        div.classList.add('visible');
      }
    })
    const del = document.createElement('button');
    del.innerText = 'Удалить';
    del.addEventListener('click', function () {
      localStorage.removeItem(`${key}`)
      location.reload();
    })
    del.setAttribute('test-id', "resume-actions__delete")
    const open = document.createElement('button');
    open.innerText = 'Открыть';
    open.addEventListener('click', function () {
      const urlParam = `value=${encodeURIComponent(`${JSON.stringify(JSON.parse(localStorage.getItem(key)))}`)}`;
      window.location.href = 'index.html?' + urlParam;
    });
    open.setAttribute('test-id', "resume-actions__open")

    const copy = document.createElement('button');
    copy.id = 'copy_resume';
    copy.setAttribute('test-id', 'resume-actions__copy');
    copy.innerText = 'Копировать'
    let resumeData = JSON.parse(localStorage.getItem(key));
    document.getElementById('copy').addEventListener('click', function () {
        const formDataToCopy = {};
        const submitCopyCheckboxes = document.querySelectorAll('#copyDiv input[type="checkbox"]:checked');
        submitCopyCheckboxes.forEach(checkbox => {
          if (checkbox.id === 'personalData') {
            formDataToCopy.nameResume = resumeData.nameResume;
            formDataToCopy.name = resumeData.name;
            formDataToCopy.birth = resumeData.birth;
            formDataToCopy.town = resumeData.town;
            formDataToCopy.email = resumeData.email;
            formDataToCopy.telephone = resumeData.telephone;
          } else if (checkbox.id === 'about') {
            formDataToCopy.about = resumeData.about;
          } else if (checkbox.id === 'interests') {
            formDataToCopy.summary = resumeData.summary;
          } else if (checkbox.id === 'languages') {
            formDataToCopy.languages = resumeData.languages;
          } else if (checkbox.id === 'workExperience') {
            formDataToCopy.workExperience = resumeData.workExperience;
          } else if (checkbox.id === 'education') {
            formDataToCopy.education = resumeData.education;
          } else if (checkbox.id === 'courses') {
            formDataToCopy.courses = resumeData.courses;
          }
        });
        if (Object.keys(formDataToCopy).length > 0) {
          localStorage.setItem('copiedResumeData', JSON.stringify(formDataToCopy));
          window.location.href = 'index.html';
        }
      }
    )
    div.appendChild(del);
    div.appendChild(open);
    div.appendChild(copy);
    label.appendChild(h3);
    label.appendChild(cardButton);
    label.appendChild(div);
    li.appendChild(checkbox);
    li.appendChild(label)
    listResumes.appendChild(li);
    sectionList.appendChild(deleteCheckboxButton);
  }
}

const addResume = document.getElementById('add_resume');
addResume.addEventListener('click', function () {
  listResumes.innerHTML = '';
  window.location.href = 'index.html';
})

const copyPartButton = document.getElementById('copy_resume');
copyPartButton.addEventListener('click', function () {
  const copyDiv = document.getElementById('copyDiv');
  copyDiv.style.display = 'block';
})

const canselButton = document.getElementById('cansel');
canselButton.addEventListener('click', function () {
  const copyDiv = document.getElementById('copyDiv');
  copyDiv.style.display = 'none';
});

function Copy(data) {
  localStorage.setItem('copiedResumeData', JSON.stringify(data));
  window.location.href = 'index.html';
}
