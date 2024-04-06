import pt from '../lang/pt.json' with {type:'json'};
import en from '../lang/en.json' with {type:'json'};

let actualLang = localStorage.getItem("lang")?localStorage.getItem("lang").toLowerCase():localStorage.setItem("lang", "PT");

function changeText(lang) {
    for(const item in lang) {
        if(item === "projects_link") {
            const projectLink = document.querySelectorAll('.projects-link');
            for(let i = 0; i < projectLink.length; i++) {
                projectLink[i].innerText = lang["projects_link"];
            }
        } else {
            if(item === "projects") {
                for(const project in lang.projects) {
                    document.getElementById(project.replace('_', '-')).innerText = lang.projects[project];
                }
            }   else {
                document.getElementById(item.replace('_', '-')).innerText = lang[item];
            }
        }
    }
}

function changeResume(lang) {
    const ptButton = document.querySelector("#pt-resume");
    const enButton = document.querySelector("#en-resume");

    switch (lang) {
        case 'pt':
            ptButton.classList.toggle('blank');
            enButton.classList.toggle('blank');
            break;
        case 'en':
            enButton.classList.toggle('blank');
            ptButton.classList.toggle('blank');
            break;
    }
}

function handleText(lang) {
    switch (lang) {
        case 'pt':
            changeText(pt);
            break;
        case 'en':
            changeText(en);
            break;
    }
}

function translate (e) {
    const inputLang = e.target.innerText;
    localStorage.setItem("lang", inputLang);
    actualLang = localStorage.getItem("lang").toLowerCase();
    handleText(actualLang);
    changeResume(actualLang);
}

document.addEventListener("DOMContentLoaded", handleText);

export default translate;