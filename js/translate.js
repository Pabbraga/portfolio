import pt from '../lang/pt.json' assert {type:'json'};
import en from '../lang/en.json' assert {type:'json'};

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
                return;
            }   else {
                document.getElementById(item.replace('_', '-')).innerText = lang[item];
            }
        }
    }
}

function handleText() {
    switch (actualLang) {
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
    handleText();
}

document.addEventListener("DOMContentLoaded", handleText);

export default translate;