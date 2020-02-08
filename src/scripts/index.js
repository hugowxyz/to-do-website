import Project from "./Project";
import Task from "./Task";
import ProjectsHandler from "./ProjectHandler";
import RenderHandler from "./RenderHandler";

const initialize = (function() {

    // Adding default project 

    const initializeProjectForm = (function() {
        const defaultProject = Project("default");
        ProjectsHandler.addProject(defaultProject);
    
        const createProjectForm = document.querySelector(".project-form");
        createProjectForm.addEventListener(
            "submit", (e) => {
                e.preventDefault();
    
                let button = document.querySelector("#create-proj");
                let input = document.querySelector("#projName");
    
                const projObj = Project(input.value);
                ProjectsHandler.addProject(projObj);
    
                const Render = RenderHandler(createProjectForm);
                Render.clearChildren();
                
                button = document.createElement("button");
                button.id = "create-proj";
                button.textContent = "Create new project";
    
                createProjectForm.appendChild(button);
    
                input = document.createElement("input");
                input.id = "projName";
                input.setAttribute("type", "text");
    
                createProjectForm.appendChild(input);
                
            }
        );
    })();

    // Handling creation of tasks

    const initializeTaskForm = (function() {
        const form = document.querySelector(".task-form");
        
        form.addEventListener(
            "submit", (e) => {
                e.preventDefault();

                let args = [];

                const taskName = document.querySelector("#taskName").value;
                args.push(taskName);
                const taskSubtitle = document.querySelector("#taskSubtitle").value;
                args.push(taskSubtitle);
                const taskDesc = document.querySelector("#taskDesc").value;
                args.push(taskDesc);
                const taskDue = document.querySelector("#taskDue").value;
                args.push(taskDue);
                const taskPriority = document.querySelector("#task-priority").value;
                args.push(taskPriority);

                if (taskName == "") {
                    alert("A task title is required!");
                    return;
                }

                // for (let i of args) {
                //     if (i == "") {
                //         alert("Please fill out all forms");
                //         return;
                //     }
                // }

                const activeProj = document.querySelector(".active").id;
                
                console.log("Active project ID:", activeProj);

                const newTask = Task(taskName, taskSubtitle, taskDesc,
                    taskDue, taskPriority);

                ProjectsHandler.addTaskToProject(activeProj, newTask);
            }
        );

    })();

})();
