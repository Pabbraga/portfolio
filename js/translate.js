import pt from '../lang/pt.json' with {type:'json'};
import en from '../lang/en.json' with {type:'json'};

function changeText(lang) {
    const projectLink = document.querySelectorAll('.projects-link');
    
    for (let item in lang) {
        if (document.getElementById(item.replace('_', '-')) != null) {
            document.getElementById(item.replace('_', '-')).innerText = lang[item];
        }
    }
    
    // translating projects links
    for (let i = 0; i < projectLink.length; i++) {
        projectLink[i].innerText = lang["projects_link"];
    }
    
    // translating projects about
    for (const project in lang['projects']) {
        document.getElementById(project.replace('_', '-')).innerText = lang.projects[project];
    }
    
}

function changeResume(lang) {
    const ptButton = document.querySelector("#pt-resume");
    const enButton = document.querySelector("#en-resume");

    switch (lang) {
        case 'PT':
            ptButton.classList.remove('blank');
            enButton.classList.add('blank');
            break;
        case 'EN':
            enButton.classList.remove('blank');
            ptButton.classList.add('blank');
            break;
    }
}

function translate (e) {
    let inputLang = e;

    if (typeof(e) != "string") {
        inputLang = e.target.innerText;
    }

    localStorage.setItem("lang", inputLang);

    switch (inputLang) {
        case 'PT':
            changeText(pt);
            break;
        case 'EN':
            changeText(en);
            break;
    }

    changeResume(inputLang);
}

export default translate;