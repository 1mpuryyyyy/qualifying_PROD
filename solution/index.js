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
  let summary = [];
  inputs_summary.forEach(function (input) {
    if (input.value) {
      summary.push(input.value);
    }
  });

  let language_div = document.getElementById("skills_div");
  let divs_language = language_div.querySelectorAll('.set_divs');
  let languages = [];

  divs_language.forEach(function (div) {
    let languageInput = div.querySelector('input[name="skills"]');
    let levelInput = div.querySelector('input[name="level"]');
    if (languageInput.value && levelInput.value) {
      let language = languageInput.value;
      let level = levelInput.value;
      languages.push([language, level]);
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
  // let course = document.getElementById('name_course')

  // Сохраняем значения элементов формы в local storage с ключами, соответствующими их id
  localStorage.setItem("name", name.value);
  localStorage.setItem("birth", birth.value);
  localStorage.setItem("town", town.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("telephone", telephone.value);
  localStorage.setItem("summary", JSON.stringify(summary));
  localStorage.setItem("languages", JSON.stringify(languages));
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

//   // Загружаем значения элементов формы из local storage с ключами, соответствующими их id
name.value = localStorage.getItem("name");
if (!name || name.value !== '') {
  document.getElementById('submit').removeAttribute('disabled');
} else {
  document.getElementById('submit').setAttribute('disabled', true);
}
birth.value = localStorage.getItem('birth');
town.value = localStorage.getItem('town');
email.value = localStorage.getItem("email");
telephone.value = localStorage.getItem("telephone");
about.value = localStorage.getItem('about')

// }

// Функция для отображения данных резюме на странице просмотра
function displayResumeData() {
  let leftAside = document.getElementById('left-aside');
  let rightAside = document.getElementById('right');


// Creating languages section


  //
  // const sectionExperience = document.createElement("section");
  // sectionExperience.classList.add("right__section");
  // sectionExperience.classList.add("right__section--experience");
  // sectionExperience.id = "experience_section";
  //
  // const experienceTitle = document.createElement("h2");
  // experienceTitle.classList.add("right__section__title");
  // experienceTitle.id = "experience_title";
  // experienceTitle.innerText = "Опыт работы";
  //
  // const ulExperience = document.createElement("ul");
  // ulExperience.classList.add("right__group-big");
  // ulExperience.id = "experience-display";
  //
  // sectionExperience.appendChild(experienceTitle);
  // sectionExperience.appendChild(ulExperience);
  //
  // const sectionEducation = document.createElement("section");
  // sectionEducation.classList.add("right__section");
  // sectionEducation.classList.add("right__section--education");
  // sectionEducation.setAttribute("test-id", "resume-main-section");
  // sectionEducation.id = "education_section";
  //
  // const educationTitle = document.createElement("h2");
  // educationTitle.classList.add("right__section__title");
  // educationTitle.id = "education_title";
  // educationTitle.innerText = "Образование и квалификация";
  //
  // const ulEducation = document.createElement("ul");
  // ulEducation.classList.add("right__group-big");
  // ulEducation.id = "education-display";
  //
  // sectionEducation.appendChild(educationTitle);
  // sectionEducation.appendChild(ulEducation);
  //
  // const sectionCourses = document.createElement("section");
  // sectionCourses.classList.add("right__section");
  // sectionCourses.classList.add("right__section--courses");
  // sectionCourses.setAttribute("test-id", "resume-main-section");
  // sectionCourses.id = "course_section";
  //
  // const courseTitle = document.createElement("h2");
  // courseTitle.classList.add("right__section__title");
  // courseTitle.id = "course_title";
  // courseTitle.innerText = "Курсы";
  //
  // const ulCourses = document.createElement("ul");
  // ulCourses.classList.add("right__group-small");
  // ulCourses.id = "course-display";
  //
  // sectionCourses.appendChild(courseTitle);
  // sectionCourses.appendChild(ulCourses);
  //
  // asideRight.appendChild(about);
  // asideRight.appendChild(sectionExperience);
  // asideRight.appendChild(sectionEducation);
  // asideRight.appendChild(sectionCourses);

  // mainContent.appendChild(asideRight);


  // Отображаем значения элементов резюме из local storage с ключами, соответствующими их id
  let img = document.createElement('img');
  img.classList.add('avatar');
  img.id = 'avatar';
  img.setAttribute('src', '/solution/images/photo.jpg');

  let sectionPersonalData = document.createElement('section');
  sectionPersonalData.class = 'left__section left__section--personal-data';
  sectionPersonalData.id = 'section-personal-data';
  sectionPersonalData.setAttribute('test-id',"resume-main-section");

  let personalGroups =  document.createElement('ul');
  personalGroups.id = 'personal_groups';
  personalGroups.classList.add('personal-groups');

  let sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('left__section__title');
  sectionTitle.innerText = 'Личные данные'

  sectionPersonalData.appendChild(sectionTitle);
  sectionPersonalData.appendChild(personalGroups);

  let nameDisplay = localStorage.getItem("name");
  if (nameDisplay) {
    console.log(nameDisplay)
    let personalGroup = document.createElement('li');
    personalGroup.classList.add('personal-group');
    personalGroup.id = 'name-display';
    let h2 = document.createElement('h2');
    h2.classList.add('left__section__fem');
    h2.innerText = 'ФИО'
    let span = document.createElement('span');
    span.id = 'name_display';
    span.innerText = nameDisplay
    personalGroup.appendChild(h2)
    personalGroup.appendChild(span);
    personalGroups.appendChild((personalGroup));
  }

  let titleDisplay = localStorage.getItem('name')
  if (titleDisplay) {
    let title = document.createElement('h1');
    title.classList.add('title');
    title.id = 'title';
    title.innerText = titleDisplay;
    rightAside.appendChild(title);
  }

  let birthDate = localStorage.getItem('birth').split('-').reverse().join('.');
  if (birthDate) {
    let personalGroup = document.createElement('li');
    personalGroup.classList.add('personal-group');
    personalGroup.id = 'birth-display';
    let h2 = document.createElement('h2');
    h2.classList.add('left__section__fem');
    h2.id = 'date_birth';
    h2.innerText = 'Дата рождения'
    let span = document.createElement('span');
    span.id = 'birth_display';
    span.innerText = birthDate;
    personalGroup.appendChild(h2)
    personalGroup.appendChild(span);
    personalGroups.appendChild((personalGroup));
  }

  let townDisplay = localStorage.getItem("town")
  if (townDisplay) {
    let townGroup = document.createElement('li');
    townGroup.classList.add('personal-group');
    townGroup.id = 'town-display';

    let h2 = document.createElement('h2');
    h2.classList.add('left__section__fem');
    h2.id = 'town_title';
    h2.innerText = 'Город'

    let span = document.createElement('span');
    span.id = 'town_display';
    span.innerText = townDisplay;
    townGroup.appendChild(h2)
    townGroup.appendChild(span);
    personalGroups.appendChild((townGroup));
  }

  let telephoneDisplay = localStorage.getItem("telephone");
  if (telephoneDisplay) {
    let phoneGroup = document.createElement('li');
    phoneGroup.classList.add('personal-group');
    phoneGroup.id = 'telephone-display';

    let h2 = document.createElement('h2');
    h2.classList.add('left__section__fem');
    h2.id = 'telephone_title';
    h2.innerText = 'Номер телефона'

    let span = document.createElement('span');
    span.id = 'telephone_display';
    span.innerText = telephoneDisplay;
    phoneGroup.appendChild(h2)
    phoneGroup.appendChild(span);
    personalGroups.appendChild((phoneGroup));
  }

  let emailDisplay = localStorage.getItem("email");
  if (emailDisplay) {
    let emailGroup = document.createElement('li');
    emailGroup.classList.add('personal-group');
    emailGroup.id = 'email-display';

    let h2 = document.createElement('h2');
    h2.classList.add('left__section__fem');
    h2.id = 'email_title';
    h2.innerText = 'Email'

    let span = document.createElement('span');
    span.id = 'email_display';
    span.innerText = emailDisplay;
    emailGroup.appendChild(h2)
    emailGroup.appendChild(span);
    personalGroups.appendChild((emailGroup));
  }
  leftAside.appendChild(img);
  leftAside.appendChild(sectionPersonalData);
  console.log(sectionPersonalData);


  if (JSON.parse(localStorage.getItem("summary"))[0]) {
    console.log(JSON.parse(localStorage.getItem("summary")))
    let interestsSection = document.createElement('section');
    interestsSection.className = 'left__section left__section--interests';
    interestsSection.setAttribute('test-id', 'resume-main-section');
    interestsSection.id = 'interests';
    let h2 = document.createElement('h2');
    h2.classList.add('left__section__title');
    h2.setAttribute('id', "summary_title");
    h2.innerText = 'Интересы';
    let ul = document.createElement('ul');
    ul.setAttribute('id', "summary-display");
    ul.classList.add('interests')
    JSON.parse(localStorage.getItem("summary")).forEach(summary => {
      let li = document.createElement('li');
      li.classList.add('interest');
      li.textContent = `${summary}`;
      ul.appendChild(li);
    })
    interestsSection.appendChild(h2);
    interestsSection.appendChild(ul);
    leftAside.appendChild(interestsSection);
  }


  if (JSON.parse(localStorage.getItem("languages"))[0]) {
    let languagesSection = document.createElement('section');
    languagesSection.className = 'left__section left__section--languages';
    languagesSection.setAttribute('test-id', 'resume-main-section');
    languagesSection.id = 'languages';

    let languagesTitle = document.createElement('h2');
    languagesTitle.className = 'left__section__title';
    languagesTitle.id = 'languages_title';
    languagesTitle.innerText = 'Языки';

    let languagesList = document.createElement('ul');
    languagesList.className = 'languages';
    languagesList.id = 'languages-display';

    JSON.parse(localStorage.getItem("languages")).forEach(language => {
      if (language[0] !== '' && language[1] !== '') {
        let li = document.createElement('li');
        li.classList.add('language');
        let span = document.createElement('span');
        span.setAttribute('id', 'lvl');
        let h3 = document.createElement('h3');
        h3.setAttribute('id', 'lang')
        h3.textContent = `${language[0]}`
        span.textContent = `${language[1]}`
        li.appendChild(h3);
        li.appendChild(span);
        languagesList.appendChild(li);
      }
    })
    languagesSection.appendChild(languagesTitle);
    languagesSection.appendChild(languagesList);
    leftAside.appendChild(languagesSection);
  }

  if (localStorage.getItem('about')) {
    console.log(localStorage.getItem('about'))
    let about = document.createElement("p");
    about.classList.add("about");
    about.id = "about-display";
    about.setAttribute('test-id', "personal-description");
    about.innerText = localStorage.getItem('about');
    rightAside.appendChild(about)
  }


  let workExperienceData = JSON.parse(localStorage.getItem("workExperience")) || [];

  // ulDisplay.innerHTML = "";
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
  if (workExperienceData.length === 1) {
    document.getElementById('experience_section').style.display = 'None';
  }
  educationDisplay.textContent = localStorage.getItem("education") || "";
  if (educationDisplay.textContent === '') {
    document.getElementById('education_section').style.display = 'None';
  }
  courseDisplay.textContent = localStorage.getItem("course") || "";
  if (courseDisplay.textContent === '') {
    document.getElementById('course_section').style.display = 'None';
  }
}

const submitButton = document.getElementById("submit");
let input = document.getElementById('name');
input.addEventListener('input', function () {
  if (document.getElementById('name').value.length > 0) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
});


submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveFormData();
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
});

const editButton = document.getElementById("edit");
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
  if (document.getElementById('interests')) {
    let interestSection = document.getElementById('interests') || '';
    interestSection.parentNode.removeChild(interestSection);
  }
  if (document.getElementById('languages')) {
    let languagesSection = document.getElementById('languages') || '';
    languagesSection.parentNode.removeChild(languagesSection);
  }
  if (document.getElementById('about')) {
    let about = document.getElementById('about-display') || '';
    about.parentNode.removeChild(about);
  }
  let img = document.getElementById('avatar');
  img.parentNode.removeChild(img);

  let sectionPersonalData = document.getElementById('section-personal-data');
  sectionPersonalData.parentNode.removeChild(sectionPersonalData);

  let title = document.getElementById('title');
  title.parentNode.removeChild(title);
  // loadFormData();
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
