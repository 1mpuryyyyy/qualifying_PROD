// Функция для сохранения данных формы в local storage
function saveFormData() {
  // Получаем элементы формы по их id
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("telephone");

  let summaryDiv = document.getElementById('summary_div');
  let inputs_summary = summaryDiv.querySelectorAll('input');
  let summary = '';
  inputs_summary.forEach(function (input) {
    summary += (input).value + ' ';
  });

  let language_div = document.getElementById("skills_div");
  let divs_language = language_div.querySelectorAll('.languages_add');
  let languages = '';
  let levels = '';

  divs_language.forEach(function (div) {
    let languageInput = div.querySelector('input[name="skills"]');
    let levelInput = div.querySelector('input[name="level"]');
    if (languageInput && levelInput) {
      let language = languageInput.value;
      let level = levelInput.value;
      languages += `${language} `;
      levels += `${level} `;
    }
  });

  console.log(languages);


  let education = document.getElementById("education");
  let experience = document.getElementById("experience");

  // Сохраняем значения элементов формы в local storage с ключами, соответствующими их id
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("telephone", phone.value);
  localStorage.setItem("summary", summary.trim().split(' ').join(', '));
  localStorage.setItem("languages", languages);
  localStorage.setItem("levels", levels);
  localStorage.setItem("education", education.value);
  localStorage.setItem("experience", experience.value);
}

// Функция для загрузки данных формы из local storage
// function loadFormData() {
//   // Получаем элементы формы по их id
let name = document.getElementById("name");
//   let email = document.getElementById("email");
//   let phone = document.getElementById("phone");
//   let summary = document.getElementById("summary");
//   let skills = document.getElementById("skills");
//   let education = document.getElementById("education");
//   let experience = document.getElementById("experience");
//
//   // Загружаем значения элементов формы из local storage с ключами, соответствующими их id
name.value = localStorage.getItem("name");
//   email.value = localStorage.getItem("email");
//   phone.value = localStorage.getItem("phone");
//   summary.value = localStorage.getItem("summary");
//   skills.value = localStorage.getItem("skills");
//   education.value = localStorage.getItem("education");
//   experience.value = localStorage.getItem("experience");
// }

// Функция для отображения данных резюме на странице просмотра
function displayResumeData() {
  // Получаем элементы резюме по их id
  let nameDisplay = document.getElementById("name-display");
  let emailDisplay = document.getElementById("email-display");
  let telephoneDisplay = document.getElementById("telephone-display");
  let summaryDisplay = document.getElementById("summary-display");
  let languageDisplay = document.getElementById("languages-display");
  let levelDisplay = document.getElementById('levels-display');
  let educationDisplay = document.getElementById("education-display");
  let experienceDisplay = document.getElementById("experience-display");

  // Отображаем значения элементов резюме из local storage с ключами, соответствующими их id
  nameDisplay.textContent = localStorage.getItem("name");
  emailDisplay.textContent = localStorage.getItem("email");
  telephoneDisplay.textContent = localStorage.getItem("telephone");
  summaryDisplay.textContent = localStorage.getItem("summary");
  languageDisplay.textContent = localStorage.getItem("languages");
  levelDisplay.textContent = localStorage.getItem("levels");
  educationDisplay.textContent = localStorage.getItem("education");
  experienceDisplay.textContent = localStorage.getItem("experience");
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveFormData();
  if (document.getElementById('name').value.split(' ').length === 3) {
    document.getElementById('name').style.border = '1px solid black'
    let del_div = document.getElementById('resume');
    let add_div = document.getElementById('build');
    del_div.style.display = 'Block';
    add_div.style.display = 'None';
    displayResumeData();
  } else {
    document.getElementById('name').style.border = '2px solid red'
  }
});

let editButton = document.getElementById("edit");
editButton.addEventListener("click", function (event) {
  event.preventDefault();
  let del_div = document.getElementById('resume');
  let add_div = document.getElementById('build');
  del_div.style.display = 'None';
  add_div.style.display = 'flex';
  // loadFormData();
});

let addButton = document.getElementsByClassName('create');

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', function (e) {
    e.preventDefault()
    let parentElement = this.closest('.inputs');
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.style.margin = '4px';
    parentElement.insertBefore(newInput, this);
  });
}

let deleteButton = document.getElementsByClassName('delete');

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener('click', function (e) {
    e.preventDefault()
    let parentElement = this.closest('.inputs');
    let inputs = parentElement.querySelectorAll('input[type="text"]');

    if (inputs.length > 1) {
      let lastInput = inputs[inputs.length - 1];
      parentElement.removeChild(lastInput);
    }
  });
}

let create_language = document.getElementById('create_language');
create_language.addEventListener('click', function (e) {
  e.preventDefault()
  let Div = document.createElement('div');
  Div.classList.add('set_divs');
  Div.innerHTML = `
      <input type="text" name="skills" placeholder="Язык">
      <input type="text" name="level" placeholder="B2" >
    `;
  document.getElementById('skills_div').insertBefore(Div, this);
});


// let delete_experience = document.getElementById('delete_experience');
// delete_experience.addEventListener('click', function () {
//   let parentElement = this.closest('.multiply_form');
//   let experienceDivs = parentElement.querySelectorAll('.experience');
//   if (experienceDivs.length > 1) {
//     let lasExperienceDiv = experienceDivs[experienceDivs.length - 1];
//     parentElement.removeChild(lasExperienceDiv);
//
//   }
// })
let create_experience = document.getElementById('create_experience');
create_experience.addEventListener('click', function (e) {
  e.preventDefault()
  let Div = document.createElement('div');
  Div.classList.add('set_divs');
  Div.innerHTML = `
      <input type="text" id="experience" name="experience" placeholder="Имя компании">
          <input type="text" id="post" name="post" placeholder="Должность">
          <label for="start_work">
            Дата начала:
            <input type="date" id="start_work" name="start_work" placeholder="Дата начала">
          </label>

          <label for="end_work">
            Дата окончания:
            <input type="date" id="end_work" name="end_work" placeholder="Дата окончания">
          </label>
          <textarea id="about_work" placeholder="Расскажите о том, чем занимались на должности"></textarea>
    `;
  document.getElementById('experience_div').insertBefore(Div, this);
});

let create_education = document.getElementById('create_education');
create_education.addEventListener('click', function (e) {
  e.preventDefault()
  let Div = document.createElement('div');
  Div.classList.add('set_divs');
  Div.innerHTML = `
      <input type="text" id="education" name="education" placeholder="Образование">
          <input type="text" id="place_education" name="place_education" placeholder="Организация">
          <label for="start_work">
            Дата начала:
            <input type="date" id="start_education" name="start_education" placeholder="Дата начала обучения">
          </label>

          <label for="end_work">
            Дата окончания:
            <input type="date" id="end_education" name="end_education" placeholder="Дата окончания обучения">
          </label>
          <textarea id="about_education" placeholder="Расскажите о своем обучении"></textarea>
    `;
  document.getElementById('education_div').insertBefore(Div, this);
});

let create_course = document.getElementById('create_course');
create_course.addEventListener('click', function (e) {
  e.preventDefault()
  let Div = document.createElement('div');
  Div.classList.add('set_divs');
  Div.innerHTML = `
      <input type="text" id="name_course" name="name_course" placeholder="Название курса">
          <input type="text" id="name_author" name="name_author" placeholder="Автор курса">
          <label for="start_work">
            Дата начала:
            <input type="date" id="start_course" name="start_course" placeholder="Дата начала обучения">
          </label>

          <label for="end_work">
            Дата окончания:
            <input type="date" id="end_course" name="end_course" placeholder="Дата окончания обучения">
          </label>
    `;
  document.getElementById('course_div').insertBefore(Div, this);
});


let deleteDiv = document.getElementsByClassName('delete_set_divs');

for (let i = 0; i < deleteDiv.length; i++) {
  deleteDiv[i].addEventListener('click', function (e) {
    e.preventDefault()
    let parentElement = this.closest('.multiply_form');
    let Divs = parentElement.querySelectorAll('.set_divs');
    if (Divs.length > 1) {
      let lastDiv = Divs[Divs.length - 1];
      parentElement.removeChild(lastDiv);
    }
  });
}

