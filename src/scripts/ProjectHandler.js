import RenderHandler from "./RenderHandler";

const ProjectsHandler = (function() {
    let myProjects = [];

    const findObject = projectId => {
        for (let index=0; index<myProjects.length; index++) {
            if (myProjects[index].getId() == projectId) {
                return index;
            }
        }
    }

    const changeCurrent = (index, newCurrent) => {
        myProjects[index].setCurrent(newCurrent);
    }

    const resetCurrent = () => {
        for (let project of myProjects) {
            project.setCurrent("not-active");
        }
    }
    
    const Render = RenderHandler(document.querySelector(".projects-list"));
    
    Render.renderObjects = function() {
        Render.clearChildren();

        for (let project of myProjects) {
            project.render();

            const listItem = document.createElement("li");
            listItem.classList.add("projects-item");
            listItem.setAttribute("id", project.getId());
            listItem.classList.add(project.getCurrent());
            listItem.textContent = project.getName();

            listItem.addEventListener(
                "click", (e) => {

                    resetCurrent();

                    const index = findObject(e.target.getAttribute("id"));
                    changeCurrent(index,  "active");

                    Render.renderObjects();
                    
                    project.render()
                }
            );


            if (project.getId() != 0) {
                const close = document.createElement("span");
                close.textContent = "X"; 
                close.classList = "delete-project";

                close.addEventListener(
                    "click", (e) => {
                        removeObject(e.target.parentNode.getAttribute("id"));
                    }
                );

                listItem.appendChild(close);
            }
            
            Render.getContainer().appendChild(listItem);
        }
    }

    const addProject = project => {

        if (project.getName() == "") {
            alert("Project name cannot be empty!"); return;
        }

        const id = myProjects.length;
        project.setId(id);

        resetCurrent();
        project.setCurrent("active");


        myProjects.push(project);
        Render.renderObjects();
    }

    const removeObject = projectId => {
        const index = findObject(projectId);
        myProjects.splice(index, 1);

        for (let cleanUp = index; cleanUp < myProjects.length; cleanUp++) {
            myProjects[cleanUp].id -= 1;
        }

        Render.renderObjects();
    }

    // Not sure about this :/

    const addTaskToProject = (id, task) => {
        console.log("Task to be added:", task);
        myProjects[id].addTask(task);
    }

    return {
        addProject,
        removeObject,
        findObject,
        addTaskToProject
    }
})();

export default ProjectsHandler;