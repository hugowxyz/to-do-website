const Containers = (function() {
    const projectsContainer = document.querySelector(".projects-container");
    const projectsList = document.querySelector(".projects-list")

    return {
        projectsContainer,
        projectsList
    }
})();

const Buttons = (function() {

    const newProject = document.querySelector("#new-project");
    const debug = () => {
        console.log("hello");
    }

    return {
        newProject,
        debug
    }

})();

const Forms = (function() {

    const projectName = document.querySelector(".getProjName");

    return {
        projectName
    }
})();

export default {
    Containers,
    Buttons,
    Forms
}