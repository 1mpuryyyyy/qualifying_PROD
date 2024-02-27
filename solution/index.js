// Функция для сохранения данных формы в local storage
function saveFormData() {
    // Получаем элементы формы по их id
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let summary = document.getElementById("summary");
    let skills = document.getElementById("skills");
    let education = document.getElementById("education");
    let experience = document.getElementById("experience");

    // Сохраняем значения элементов формы в local storage с ключами, соответствующими их id
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("summary", summary.value);
    localStorage.setItem("skills", skills.value);
    localStorage.setItem("education", education.value);
    localStorage.setItem("experience", experience.value);
}

// Функция для загрузки данных формы из local storage
function loadFormData() {
    // Получаем элементы формы по их id
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let summary = document.getElementById("summary");
    let skills = document.getElementById("skills");
    let education = document.getElementById("education");
    let experience = document.getElementById("experience");

    // Загружаем значения элементов формы из local storage с ключами, соответствующими их id
    name.value = localStorage.getItem("name");
    email.value = localStorage.getItem("email");
    phone.value = localStorage.getItem("phone");
    summary.value = localStorage.getItem("summary");
    skills.value = localStorage.getItem("skills");
    education.value = localStorage.getItem("education");
    experience.value = localStorage.getItem("experience");
}

// Функция для отображения данных резюме на странице просмотра
function displayResumeData() {
    // Получаем элементы резюме по их id
    let nameDisplay = document.getElementById("name-display");
    let emailDisplay = document.getElementById("email-display");
    let phoneDisplay = document.getElementById("phone-display");
    let summaryDisplay = document.getElementById("summary-display");
    let skillsDisplay = document.getElementById("skills-display");
    let educationDisplay = document.getElementById("education-display");
    let experienceDisplay = document.getElementById("experience-display");

    // Отображаем значения элементов резюме из local storage с ключами, соответствующими их id
    nameDisplay.textContent = localStorage.getItem("name");
    emailDisplay.textContent = localStorage.getItem("email");
    phoneDisplay.textContent = localStorage.getItem("phone");
    summaryDisplay.textContent = localStorage.getItem("summary");
    skillsDisplay.textContent = localStorage.getItem("skills");
    educationDisplay.textContent = localStorage.getItem("education");
    experienceDisplay.textContent = localStorage.getItem("experience");
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveFormData();
    if (document.getElementById('name').value) {
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
editButton.addEventListener("click", function(event) {
    event.preventDefault();
    let del_div = document.getElementById('resume');
    let add_div = document.getElementById('build');
    del_div.style.display = 'None';
    add_div.style.display = 'Block';
    loadFormData();
});

// Проверяем, на какой странице мы находимся
// let currentUrl = window.location.href;
//
// if (currentUrl.endsWith("building.html")) {
//     loadFormData();
// }
//
// if (currentUrl.endsWith("resume.html")) {
//     displayResumeData();
// }
