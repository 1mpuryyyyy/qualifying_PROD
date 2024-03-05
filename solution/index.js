const formData = {}
if (JSON.parse(localStorage.getItem('copiedResumeData'))) {
  let dataToLoad = JSON.parse(localStorage.getItem('copiedResumeData'))
  loadFormData(dataToLoad);
  localStorage.removeItem('copiedResumeData');
}

function saveFormData() {
  formData.nameResume = document.getElementById('name_resume').value;
  formData.name = document.getElementById("name").value;
  formData.birth = document.getElementById('birth').value;
  formData.town = document.getElementById('town').value;
  formData.email = document.getElementById("email").value;
  formData.telephone = document.getElementById("telephone").value;

  let summaryDiv = document.getElementById('summary_div');
  let inputs_summary = summaryDiv.querySelectorAll('input');
  let summaries = [];
  inputs_summary.forEach(function (input) {
    if (input.value) {
      summaries.push(input.value);
    }
  });
  formData.summary = summaries;

  formData.about = document.getElementById('about').value;

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
  formData.languages = languages

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
    if (experienceData.jobPosition !== '') {
      workExperience.push(experienceData);
    }
  });
  formData.workExperience = workExperience;

  let education = [];

  let educationDivs = document.querySelectorAll('#education_div .set_divs');

  Array.from(educationDivs).forEach(div => {
    let educationName = div.querySelector('#education').value;
    let startDate = div.querySelector('#start_education').value;
    let endDate = div.querySelector('#end_education').value;
    let placeEducation = div.querySelector('#place_education').value;
    let educationDescription = div.querySelector('#about_education').value;

    let educationData = {
      "educationName": educationName,
      "startDate": startDate,
      "endDate": endDate,
      "placeEducation": placeEducation,
      "educationDescription": educationDescription
    };
    if (educationData.educationName !== '') {
      education.push(educationData);
    }
  });
  formData.education = education

  let courses = [];

  let courseDivs = document.querySelectorAll('#course_div .set_divs');

  Array.from(courseDivs).forEach(div => {
    let courseName = div.querySelector('#name_course').value;
    let startDate = div.querySelector('#start_course').value;
    let endDate = div.querySelector('#end_course').value;
    let authorCourse = div.querySelector('#name_author').value;

    let courseData = {
      "courseName": courseName,
      "startDate": startDate,
      "endDate": endDate,
      "authorCourse": authorCourse
    };
    if (courseData.courseName !== '') {
      courses.push(courseData);
    }
  });

  formData.courses = courses;
  // Сохраняем значения элементов формы в local storage с ключами, соответствующими их id
  localStorage.setItem("name", formData.name);
  localStorage.setItem("birth", formData.birth);
  localStorage.setItem("town", formData.town);
  localStorage.setItem("email", formData.email);
  localStorage.setItem("telephone", formData.telephone);
  localStorage.setItem("summary", JSON.stringify(formData.summary));
  localStorage.setItem('about', formData.about);
  localStorage.setItem("languages", JSON.stringify(formData.languages));
  localStorage.setItem("education", JSON.stringify(formData.education));
  localStorage.setItem('workExperience', JSON.stringify(formData.workExperience));
  localStorage.setItem('courses', JSON.stringify(formData.courses));

}

// Функция для загрузки данных формы из local storage
function loadFormData(formdata) {
  document.getElementById("name_resume").value = formdata.nameResume || formdata.name;
  document.getElementById("name").value = formdata.name;
  if (!name || name.value !== '') {
    document.getElementById('submit').removeAttribute('disabled');
  } else {
    document.getElementById('submit').setAttribute('disabled', true);
  }
  if (formdata.birth !== '' && formdata.birth) {
    document.getElementById("birth").value = formdata.birth;
  }
  if (formdata.town) {
    document.getElementById("town").value = formdata.town;
  }
  if (formdata.email) {
    document.getElementById("email").value = formdata.email;
  }
  if (formdata.telephone) {
    document.getElementById("telephone").value = formdata.telephone;
  }
  if (formdata.summary) {
    document.getElementById("summary").value = formdata.summary.join(", ");
  }
  if (formdata.about) {
    document.getElementById("about").value = formdata.about;
  }

  if (formdata.languages) {
    const languages = formdata.languages;
    for (let i = 0; i < languages.length; i++) {
      document.getElementById(`language_${i + 1}`).value = languages[i][0];
      document.getElementById(`level_${i + 1}`).value = languages[i][1];
    }
  }

  if (formdata.workExperience) {
    const workExperience = formdata.workExperience;
    for (let i = 0; i < workExperience.length; i++) {
      document.getElementById(`company_${i + 1}`).value = workExperience[i].companyName;
      document.getElementById(`position_${i + 1}`).value = workExperience[i].jobPosition;
      document.getElementById(`start_work_${i + 1}`).value = workExperience[i].startDate;
      document.getElementById(`end_work_${i + 1}`).value = workExperience[i].endDate || "";
      document.getElementById(`work_description_${i + 1}`).value = workExperience[i].jobDescription;
    }
  }

  if (formdata.education) {
    const education = formdata.education;
    for (let i = 0; i < education.length; i++) {
      document.getElementById(`education_name_${i + 1}`).value = education[i].educationName;
      document.getElementById(`start_education_${i + 1}`).value = education[i].startDate;
      document.getElementById(`end_education_${i + 1}`).value = education[i].endDate || "";
      document.getElementById(`education_place_${i + 1}`).value = education[i].placeEducation;
      document.getElementById(`education_description_${i + 1}`).value = education[i].educationDescription;
    }
  }

  if (formdata.courses) {
    const courses = formdata.courses;
    for (let i = 0; i < courses.length; i++) {
      document.getElementById(`course_name_${i + 1}`).value = courses[i].courseName;
      document.getElementById(`course_start_date_${i + 1}`).value = courses[i].startDate;
      document.getElementById(`course_end_date_${i + 1}`).value = courses[i].endDate || "";
      document.getElementById(`course_author_${i + 1}`).value = courses[i].authorCourse;
    }
  }
}

// Функция для отображения данных резюме
function displayResumeData() {
  let leftAside = document.getElementById('left-aside');
  let rightAside = document.getElementById('right');

  // создаем элементы резюме из local storage
  let img = document.createElement('img');
  img.classList.add('avatar');
  img.id = 'avatar';
  img.setAttribute('src', '/solution/images/photo.jpg');

  let sectionPersonalData = document.createElement('section');
  sectionPersonalData.class = 'left__section left__section--personal-data';
  sectionPersonalData.id = 'section-personal-data';
  sectionPersonalData.setAttribute('test-id', "resume-main-section");

  let personalGroups = document.createElement('ul');
  personalGroups.id = 'personal_groups';
  personalGroups.classList.add('personal-groups');

  let sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('left__section__title');
  sectionTitle.innerText = 'Личные данные'

  sectionPersonalData.appendChild(sectionTitle);
  sectionPersonalData.appendChild(personalGroups);

  let nameDisplay = localStorage.getItem("name");
  let personalGroup = document.createElement('li');
  personalGroup.classList.add('personal-group');
  personalGroup.id = 'name-display';
  let h3 = document.createElement('h3');
  h3.classList.add('left__section__fem');
  h3.innerText = 'ФИО'
  let span = document.createElement('span');
  span.id = 'name_display';
  span.innerText = nameDisplay
  personalGroup.appendChild(h3)
  personalGroup.appendChild(span);
  personalGroups.appendChild((personalGroup));


  let birthDate = localStorage.getItem('birth').split('-').reverse().join('.');
  if (birthDate) {
    let personalGroup = document.createElement('li');
    personalGroup.classList.add('personal-group');
    personalGroup.id = 'birth-display';
    let h3 = document.createElement('h3');
    h3.classList.add('left__section__fem');
    h3.id = 'date_birth';
    h3.innerText = 'Дата рождения'
    let span = document.createElement('span');
    span.id = 'birth_display';
    span.innerText = birthDate;
    personalGroup.appendChild(h3)
    personalGroup.appendChild(span);
    personalGroups.appendChild((personalGroup));
  }

  let townDisplay = localStorage.getItem("town")
  if (townDisplay) {
    let townGroup = document.createElement('li');
    townGroup.classList.add('personal-group');
    townGroup.id = 'town-display';

    let h3 = document.createElement('h3');
    h3.classList.add('left__section__fem');
    h3.id = 'town_title';
    h3.innerText = 'Город'

    let span = document.createElement('span');
    span.id = 'town_display';
    span.innerText = townDisplay;
    townGroup.appendChild(h3)
    townGroup.appendChild(span);
    personalGroups.appendChild((townGroup));
  }

  let telephoneDisplay = localStorage.getItem("telephone");
  if (telephoneDisplay) {
    let phoneGroup = document.createElement('li');
    phoneGroup.classList.add('personal-group');
    phoneGroup.id = 'telephone-display';

    let h3 = document.createElement('h3');
    h3.classList.add('left__section__fem');
    h3.id = 'telephone_title';
    h3.innerText = 'Номер телефона'

    let span = document.createElement('span');
    span.id = 'telephone_display';
    span.innerText = telephoneDisplay;
    phoneGroup.appendChild(h3)
    phoneGroup.appendChild(span);
    personalGroups.appendChild((phoneGroup));
  }

  let emailDisplay = localStorage.getItem("email");
  if (emailDisplay) {
    let emailGroup = document.createElement('li');
    emailGroup.classList.add('personal-group');
    emailGroup.id = 'email-display';

    let h3 = document.createElement('h3');
    h3.classList.add('left__section__fem');
    h3.id = 'email_title';
    h3.innerText = 'Email'

    let span = document.createElement('span');
    span.id = 'email_display';
    span.innerText = emailDisplay;
    emailGroup.appendChild(h3)
    emailGroup.appendChild(span);
    personalGroups.appendChild((emailGroup));
  }
  leftAside.appendChild(img);
  leftAside.appendChild(sectionPersonalData);


  if (JSON.parse(localStorage.getItem("summary"))[0]) {
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

  let sectionAbout = document.createElement('section');
  sectionAbout.setAttribute('test-id', "resume-main-section");
  sectionAbout.class = 'right__section__title';

  let titleDisplay = localStorage.getItem('name')
  if (titleDisplay) {
    let title = document.createElement('h1');
    title.classList.add('title');
    title.id = 'title';
    title.innerText = titleDisplay;
    sectionAbout.appendChild(title);
  }


  if (localStorage.getItem('about')) {
    let about = document.createElement("p");
    about.classList.add("about");
    about.id = "about-display";
    about.innerText = localStorage.getItem('about');
    sectionAbout.appendChild(about)
  }

  rightAside.appendChild(sectionAbout);


  let workExperienceData = JSON.parse(localStorage.getItem("workExperience")) || [];
  if (workExperienceData[0]) {
    let sectionExperience = document.createElement('section');
    sectionExperience.class = 'right__section right__section--experience';
    sectionExperience.id = 'experience_section';
    sectionExperience.setAttribute('test-id', "resume-main-section");

    let h2 = document.createElement('h2');
    h2.classList.add('right__section__title');
    h2.id = 'experience_title';
    h2.innerText = 'Опыт работы';

    let ulExperience = document.createElement('ul');
    ulExperience.classList.add('right__group-big');
    ulExperience.id = 'experience-display';

    workExperienceData.forEach(experience => {
      if (experience.jobPosition !== '') {
        let div = document.createElement('div');
        div.classList.add('right__group__title');
        let positionItem = document.createElement("h3");
        positionItem.classList.add('right__group__title__text');
        let dateItem = document.createElement("span");
        dateItem.classList.add('right__group__title__date');
        let experienceItem = document.createElement("span");
        experienceItem.classList.add('right__group__subtitle');
        let aboutItem = document.createElement("p");
        aboutItem.classList.add('right__group-big__about');

        positionItem.textContent = `${experience.jobPosition}`;
        if (experience.startDate !== '') {
          if (experience.endDate !== '') {
            dateItem.textContent = `${getMonthYearRussian(experience.startDate)} — ${getMonthYearRussian(experience.endDate)}`;
          } else {
            dateItem.textContent = `${getMonthYearRussian(experience.startDate)} — наст. время`;
          }
        }
        experienceItem.textContent = `${experience.companyName}`;
        aboutItem.textContent = `${experience.jobDescription}`;
        div.appendChild(positionItem);
        div.appendChild(dateItem);
        ulExperience.appendChild(div);
        ulExperience.appendChild(experienceItem);
        ulExperience.appendChild(aboutItem);
      }
    });
    sectionExperience.appendChild(h2);
    sectionExperience.appendChild(ulExperience);
    rightAside.appendChild(sectionExperience);
  }

  let educationData = JSON.parse(localStorage.getItem("education")) || [];
  if (educationData[0]) {
    let sectionEducation = document.createElement('section');
    sectionEducation.class = 'right__section right__section--education';
    sectionEducation.id = 'education_section';
    sectionEducation.setAttribute('test-id', "resume-main-section");

    let h2 = document.createElement('h2');
    h2.classList.add('right__section__title');
    h2.id = 'education_title';
    h2.innerText = 'Образование и квалификация';

    let ulEducation = document.createElement('ul');
    ulEducation.classList.add('right__group-big');
    ulEducation.id = 'education-display';

    educationData.forEach(education => {
      if (education.jobPosition !== '') {
        let div = document.createElement('div');
        div.classList.add('right__group__title');
        let educationTitle = document.createElement("h3");
        educationTitle.classList.add('right__group__title__text');
        educationTitle.id = 'right__group__title__text';
        let dateItem = document.createElement("span");
        dateItem.classList.add('right__group__title__date');
        let educationPlace = document.createElement("span");
        educationPlace.classList.add('right__group__subtitle');
        let aboutItem = document.createElement("p");
        aboutItem.classList.add('right__group-big__about');

        educationTitle.textContent = `${education.educationName}`;
        if (education.startDate !== '') {
          if (education.endDate !== '') {
            dateItem.textContent = `${getMonthYearRussian(education.startDate)} — ${getMonthYearRussian(education.endDate)}`;
          } else {
            dateItem.textContent = `${getMonthYearRussian(education.startDate)} — наст. время`;
          }
        }
        educationPlace.textContent = `${education.placeEducation}`;
        aboutItem.textContent = `${education.educationDescription}`;
        div.appendChild(educationTitle);
        div.appendChild(dateItem);
        ulEducation.appendChild(div);
        ulEducation.appendChild(educationPlace);
        ulEducation.appendChild(aboutItem);
      }
    });
    sectionEducation.appendChild(h2);
    sectionEducation.appendChild(ulEducation);
    rightAside.appendChild(sectionEducation);
  }

  let coursesData = JSON.parse(localStorage.getItem("courses")) || [];
  if (coursesData[0]) {
    let sectionCourses = document.createElement('section');
    sectionCourses.class = 'right__section right__section--education';
    sectionCourses.id = 'courses_section';
    sectionCourses.setAttribute('test-id', "resume-main-section");

    let h2 = document.createElement('h2');
    h2.classList.add('right__section__title');
    h2.id = 'courses_title';
    h2.innerText = 'Курсы';

    let ulCourses = document.createElement('ul');
    ulCourses.classList.add('right__group-big');
    ulCourses.id = 'course-display';

    coursesData.forEach(course => {
      if (course.courseName !== '') {
        let div = document.createElement('div');
        div.classList.add('right__group__title');
        let courseTitle = document.createElement("h3");
        courseTitle.classList.add('right__group__title__text');
        courseTitle.id = 'right__group__title__text';
        let dateItem = document.createElement("span");
        dateItem.classList.add('right__group__title__date');
        let courseAuthor = document.createElement("span");
        courseAuthor.classList.add('right__group__subtitle');

        courseTitle.textContent = `${course.courseName}`;
        if (course.startDate !== '') {
          if (course.endDate !== '') {
            dateItem.textContent = `${getMonthYearRussian(course.startDate)} — ${getMonthYearRussian(course.endDate)}`;
          } else {
            dateItem.textContent = `${getMonthYearRussian(course.startDate)} — наст. время`;
          }
        }
        courseAuthor.textContent = `${course.authorCourse}`;
        div.appendChild(courseTitle);
        div.appendChild(dateItem);
        ulCourses.appendChild(div);
        ulCourses.appendChild(courseAuthor);
      }
    });
    sectionCourses.appendChild(h2);
    sectionCourses.appendChild(ulCourses);
    rightAside.appendChild(sectionCourses);
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
  document.querySelector("#left-aside").innerHTML = "";
  document.querySelector("#right").innerHTML = "";

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
          <input type="text" id="post" test-id="job-title" name="post" placeholder="Должность">
          <label for="start_work">
            Дата начала:
            <input type="date" id="start_work" test-id="job-date-start" name="start_work" placeholder="Дата начала">
          </label>

          <label for="end_work">
            Дата окончания:
            <input type="date" id="end_work" test-id="job-date-end" name="end_work" placeholder="Дата окончания">
          </label>
          <input type="text" id="experience" test-id="job-place" name="experience" placeholder="Место Работы">
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
      <input type="text" id="education" test-id="education-title" name="education" placeholder="Высшее образование">
          <label for="start_education">
            Дата начала:
            <input type="date" id="start_education" test-id="education-date-start" name="start_education" placeholder="Дата начала обучения">
          </label>

          <label for="end_education">
            Дата окончания:
            <input type="date" id="end_education" test-id="education-date-end" name="end_education" placeholder="Дата окончания обучения">
          </label>
          <input type="text" id="place_education" test-id="education-place"name="place_education" placeholder="Организация">
          <textarea id="about_education" test-id="education-description" placeholder="Расскажите о своем обучении"></textarea>
    `;
  document.getElementById('education_div').insertBefore(Div, this);
});

let create_course = document.getElementById('create_course');
create_course.addEventListener('click', function (e) {
  e.preventDefault()
  let Div = document.createElement('div');
  Div.classList.add('set_divs');
  Div.innerHTML = `
      <input type="text" id="name_course" test-id="course-title" name="name_course" placeholder="Название курса">
      <label for="start_course">
        Дата начала:
        <input type="date" id="start_course" test-id="course-date-start" name="start_course" placeholder="Дата начала обучения">
      </label>

      <label for="end_course">
        Дата окончания:
        <input type="date" id="end_course" test-id="course-date-end" name="end_course" placeholder="Дата окончания обучения">
      </label>
      <input type="text" id="name_author" test-id="course-place" name="name_author" placeholder="Автор курса">
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

  return `${month} ${year} г.`;
}

function getAllFormValues() {
  const allFormValues = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('dict_')) {
      let valueString = localStorage.getItem(key);
      allFormValues[key] = JSON.parse(valueString);
    }
  }
  return allFormValues;
}

function createFormId() {
  const formKeys = Object.keys(getAllFormValues());
  if (formKeys.length === 0) {
    return 'dict_1';
  }

  const latestFormKey = formKeys[formKeys.length - 1];
  const latestFormIndex = parseInt(latestFormKey.split('_')[1]);
  return `dict_${latestFormIndex + 1}`;
}

function saveFormDataToLocalStorage(formData) {
  const formId = createFormId();
  const dataToSave = formData;
  dataToSave.id = formId.split('dict_').join('');
  console.log((dataToSave.id - 1), JSON.parse(localStorage.getItem(`dict_${dataToSave.id - 1}`)).id + 1)
  if ((dataToSave.id - 1).toString() !== JSON.parse(localStorage.getItem(`dict_${dataToSave.id - 1}`)).id + 1) {

    localStorage.setItem(formId, JSON.stringify(dataToSave));
  }

}

const saveResume = document.getElementById('save');
saveResume.addEventListener('click', function () {
  saveFormDataToLocalStorage(formData);
  // window.location.href = 'all.html'
})

const urlParams = new URLSearchParams(window.location.search);
const openData = JSON.parse(urlParams.get('value'));
if (openData) {
  loadFormData(openData);
  const submitButton = document.getElementById('submit');
  submitButton.click();
}

