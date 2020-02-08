import RenderHandler from "./RenderHandler";

function Project(name) {
    
    let myTasks = [];
    let id = -1;
    let current;

    // Render

    const Render = RenderHandler(document.querySelector(".task-list"));
    
    Render.renderTask = function() {

        const create = function(tag) { return document.createElement(tag); }

        Render.clearChildren();

        for (let task of myTasks) {
            const container = create("div");
            container.classList = "task-item";

            // Adding task title

            const taskTitle = create("div");
            taskTitle.classList.add("taskTitle");

            const heading = create("h1");
            heading.textContent = task.getTitle();

            const subHeading = create("h3");
            subHeading.textContent = task.getSubtitle();

            taskTitle.appendChild(heading);
            taskTitle.appendChild(subHeading);

            console.log("create task container");

            container.appendChild(taskTitle);

            // Adding Due date
            
            const taskDue = create("div");
            taskDue.classList = "taskDue";

            const taskDate = create("p");
            taskDate.textContent = task.getDateDue();

            taskDue.appendChild(taskDate);
            container.appendChild(taskDue);

            // Adding description

            const taskDesc = create("div");
            taskDesc.classList = "taskDesc";
            taskDesc.textContent = task.getDesc();

            container.appendChild(taskDesc);

            // Adding task delete

            const taskDelete = create("div");
            taskDelete.classList = "taskDelete";
            taskDelete.textContent = "X";

            taskDelete.addEventListener(
                "click", (e) => {
                    for (let index = 0; index < myTasks.length; index++) {
                        if (myTasks[index].getId() == task.getId()) {
                            myTasks.splice(index, 1);
                            for (let cleanUp = index; cleanUp < myTasks.length; cleanUp++) {
                                myTasks[cleanUp].setId(myTasks[cleanUp].getId() - 1);
                            }
                        }
                    }

                    Render.renderTask();
                }

      
            );

            container.appendChild(taskDelete);

            Render.getContainer().appendChild(container);

        }
    }

    // Getters
    const getName = () => { return name; }
    const getId = () => { return id; }
    const getTasks = () => { return myTasks; }
    const getCurrent = () => { return current; }
    const render = () => { Render.renderTask(); }

    // Setters

    const setId = newId => { id = newId; }

    const addTask = task => { 
        task.setId(myTasks.length);
        myTasks.push(task);
        Render.renderTask(); 
    }

    const setCurrent = newCurrent => { current = newCurrent; }

    // Debug

    return {
        addTask, getTasks,
        getName,
        setId, getId,
        setCurrent, getCurrent,
        render
    }
}

export default Project;