// Функция для сохранения данных формы в local storage
function saveFormData() {
  // Получаем элементы формы по их id
  let name = document.getElementById("name");
  let birth = document.getElementById('birth')
  let town = document.getElementById('town');
  let email = document.getElementById("email");
  let telephone = document.getElementById("telephone");
  let summaryDiv = document.getElementById('summary_div');
  let inputs_summary = summaryDiv.querySelectorAll('input');
  let summary = '';
  inputs_summary.forEach(function (input) {
    summary += (input).value + ' ';
  });

  let language_div = document.getElementById("skills_div");
  let divs_language = language_div.querySelectorAll('.set_divs');
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

  let workExperience = [];

  let experienceDivs = document.querySelectorAll('#experience_div .set_divs');

  Array.from(experienceDivs).forEach(div => {
    let companyName = div.querySelector('#experience').value;
    let jobPosition = div.querySelector('#post').value;
    let startDate = div.querySelector('#start_work').value;
    let endDate = div.querySelector('#end_work').value;
    let jobDescription = div.querySelector('#about_work').value;

    let experienceData = {
      "companyName": companyName,
      "jobPosition": jobPosition,
      "startDate": startDate,
      "endDate": endDate,
      "jobDescription": jobDescription
    };

    workExperience.push(experienceData);
  });

  let education = document.getElementById("education");
  let about = document.getElementById('about');
  let course = document.getElementById('name_course')

  // Сохраняем значения элементов формы в local storage с ключами, соответствующими их id
  localStorage.setItem("name", name.value);
  localStorage.setItem("birth", birth.value);
  localStorage.setItem("town", town.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("telephone", telephone.value);
  localStorage.setItem("summary", summary.trim().split(' ').join(', '));
  localStorage.setItem("languages", languages);
  localStorage.setItem("levels", levels);
  localStorage.setItem('about', about.value);
  localStorage.setItem("education", education.value);
  localStorage.setItem('workExperience', JSON.stringify(workExperience));

}

// Функция для загрузки данных формы из local storage
// function loadFormData() {
//   // Получаем элементы формы по их id
let name = document.getElementById("name");
let birth = document.getElementById('birth');
let town = document.getElementById('town');
let email = document.getElementById("email");
let telephone = document.getElementById("telephone");
let about = document.getElementById('about');

//   let summary = document.getElemenById("summary");
//   let skills = document.getElementById("skills");
//   let education = document.getElementById("education");
//   let experience = document.getElementById("experience");

//   // Загружаем значения элементов формы из local storage с ключами, соответствующими их id
name.value = localStorage.getItem("name");
birth.value = localStorage.getItem('birth');
town.value = localStorage.getItem('town');
email.value = localStorage.getItem("email");
telephone.value = localStorage.getItem("telephone");
about.value = localStorage.getItem('about')
console.log(telephone.value);


//   summary.value = localStorage.getItem("summary");
//   skills.value = localStorage.getItem("skills");
//   education.value = localStorage.getItem("education");
//   experience.value = localStorage.getItem("experience");
// }

// Функция для отображения данных резюме на странице просмотра
function displayResumeData() {
  // Получаем элементы резюме по их id
  let nameDisplay = document.getElementById("name-display");
  let titleDisplay = document.getElementById('title');
  let birthDisplay = document.getElementById("birth-display");
  let townDisplay = document.getElementById("town-display");
  let emailDisplay = document.getElementById("email-display");
  let telephoneDisplay = document.getElementById("telephone-display");
  let summaryDisplay = document.getElementById("summary-display");
  let languageDisplay = document.getElementById("languages-display");
  let levelDisplay = document.getElementById('levels-display');
  let aboutDisplay = document.getElementById('about-display');
  // let experienceDisplay = document.getElementById("experience-display");
  // let experienceDiv = document.getElementById('experience-div');
  // let experienceDivDisplay = document.getElementById('experience-div-display');
  let ulDisplay = document.getElementById('experience-display');
  let educationDisplay = document.getElementById("education-display");
  let courseDisplay = document.getElementById("course-display");

  // Отображаем значения элементов резюме из local storage с ключами, соответствующими их id
  nameDisplay.textContent = localStorage.getItem("name");
  titleDisplay.textContent = localStorage.getItem('name');
  let birthDate = localStorage.getItem('birth');
  birthDisplay.textContent = birthDate.replace(/_/g, '.');
  if (birthDisplay.textContent === ''){
    document.getElementById('date_birth').style.display = 'None';
    document.getElementById('birth-display').style.display = 'None';
  }
  townDisplay.textContent = localStorage.getItem("town")
  if (townDisplay.textContent === ''){
    document.getElementById('town_title').style.display = 'None';
    document.getElementById('town-display').style.display = 'None';
  }
  emailDisplay.textContent = localStorage.getItem("email");
  if (emailDisplay.textContent === ''){
    document.getElementById('email_title').style.display = 'None';
    document.getElementById('email-display').style.display = 'None';
  }
  telephoneDisplay.textContent = formatPhoneNumber(localStorage.getItem("telephone"));
  if (telephoneDisplay.textContent === ''){
    document.getElementById('telephone_title').style.display = 'None';
    document.getElementById('telephone-display').style.display = 'None';
  }
  summaryDisplay.textContent = localStorage.getItem("summary");
  if (summaryDisplay.textContent === ''){
    document.getElementById('interests').style.display = 'None';
  }
  languageDisplay.textContent = localStorage.getItem("languages");
  if (languageDisplay.textContent === ' '){
    document.getElementById('languages').style.display = 'None';
  }
  levelDisplay.textContent = localStorage.getItem("levels");
  aboutDisplay.textContent = localStorage.getItem('about');
  if (aboutDisplay.textContent === ''){
    document.getElementById('about-display').style.display = 'None';
  }

  let workExperienceData = JSON.parse(localStorage.getItem("workExperience")) || [];

  ulDisplay.innerHTML = "";
  workExperienceData.forEach(experience => {
    let li = document.createElement('li');
    li.classList.add('right__group-big__item');
    let div = document.createElement('div');
    div.classList.add('right__group__title');
    let positionItem = document.createElement("h3");
    positionItem.classList.add('right__group__title');
    let dateItem = document.createElement("span");
    dateItem.classList.add('right__group__title__date');
    let experienceItem = document.createElement("span");
    experienceItem.classList.add('right__group__subtitle');
    let aboutItem = document.createElement("p");
    aboutItem.classList.add('right__group-big__about');

    positionItem.textContent = `${experience.jobPosition}`;
    if (experience.startDate !== '') {
      if (experience.endDate !== '') {
        dateItem.textContent = `${getMonthYearRussian(experience.startDate)} - ${getMonthYearRussian(experience.endDate)}`;
      } else {
        dateItem.textContent = `${getMonthYearRussian(experience.startDate)} - наст. время`;
      }
    }
    experienceItem.textContent = `${experience.companyName}`;
    aboutItem.textContent = `${experience.jobDescription}`;
    div.appendChild(positionItem);
    div.appendChild(dateItem);
    ulDisplay.appendChild(div);
    ulDisplay.appendChild(experienceItem);
    ulDisplay.appendChild(aboutItem);
  });
  if (workExperienceData.length === 1){
    document.getElementById('experience_section').style.display = 'None';
  }
  educationDisplay.textContent = localStorage.getItem("education") || "";
  if (educationDisplay.textContent === ''){
    document.getElementById('education_section').style.display = 'None';
  }
  courseDisplay.textContent = localStorage.getItem("course") || "";
  if (courseDisplay.textContent === ''){
    document.getElementById('course_section').style.display = 'None';
  }
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveFormData();
  if (document.getElementById('name').value.split(' ').length === 3) {
    document.getElementById('name').style.border = '1px solid black'
    let del_div = document.getElementById('resume');
    let add_div = document.getElementById('build');
    let div_resume = document.getElementById('div_resume');
    div_resume.style.display = 'block';
    div_resume.style.visibility = 'visible';
    del_div.style.display = 'flex';
    del_div.style.justifyContent = 'center';
    del_div.style.visibility = 'visible';
    add_div.style.display = 'None';
    add_div.style.visibility = 'hidden';
    displayResumeData();
  } else {
    document.getElementById('name').style.border = '2px solid red';
  }
});

let editButton = document.getElementById("edit");
editButton.addEventListener("click", function (event) {
  event.preventDefault();
  let del_div = document.getElementById('resume');
  let add_div = document.getElementById('build');
  let div_resume = document.getElementById('div_resume');
  div_resume.style.display = 'None';
  div_resume.style.visibility = 'hidden'
  del_div.style.display = 'None';
  del_div.style.visibility = 'hidden';
  add_div.style.display = 'flex';
  add_div.style.visibility = 'visible';
});

let addButton = document.getElementsByClassName('create');

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', function (e) {
    e.preventDefault()
    let parentElement = this.closest('.inputs');
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute('test-id', 'interest');
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
      <input type="text" id="language" name="skills" test-id="language-name" placeholder="Язык">
      <input type="text" id="level" name="level"  test-id="language-level" placeholder='B2'>
    `;
  document.getElementById('skills_div').insertBefore(Div, this);
});

let create_experience = document.getElementById('create_experience');
create_experience.addEventListener('click', function (e) {
  e.preventDefault()
  let Div = document.createElement('div');
  Div.classList.add('set_divs');
  Div.innerHTML = `
      <input type="text" id="experience" test-id="job-place" name="experience" placeholder="Место Работы">
          <input type="text" id="post" test-id="job-title" name="post" placeholder="Должность">
          <label for="start_work">
            Дата начала:
            <input type="date" id="start_work" test-id="job-date-start" name="start_work" placeholder="Дата начала">
          </label>

          <label for="end_work">
            Дата окончания:
            <input type="date" id="end_work" test-id="job-date-end" name="end_work" placeholder="Дата окончания">
          </label>
          <textarea id="about_work" test-id="job-description" placeholder="Расскажите о том, чем занимались на должности"></textarea>
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

function getMonthYearRussian(dateString) {
  const months = [
    "январь", "февраль", "март", "апрель", "май", "июнь",
    "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

function formatPhoneNumber(phoneNumber) {
    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return '+' + match[1] + ' (' + match[2] + ') ' + match[3] + ' ' + match[4] + '-' + match[5];
    }
    return phoneNumber;
}
