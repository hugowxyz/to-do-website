function Task(title, subtitle, desc, dateDue, priority) {

    let id;

    // Getters

    const getTitle = () => { return title; }
    const getSubtitle = () => { return subtitle; }
    const getDesc = () => { return desc; } 
    const getDateDue = () => { return dateDue; } 
    const getPriority = () => { return priority; } 
    const getId = () => { return id; }

    // Setters

    const setTitle = newEntry => { title = newEntry; } 
    const setSubtitle = newEntry => { subtitle = newEntry; }
    const setDesc = newEntry => { desc = newEntry; } 
    const setDateDue = newEntry => { dateDue = newEntry; } 
    const setPriority = newEntry => { priority = newEntry; } 
    const setId = newEntry => { id = newEntry; }

    return {
        setTitle, getTitle,
        setSubtitle, getSubtitle,
        setDesc, getDesc,
        setDateDue, getDateDue,
        setPriority, getPriority,
        getId, setId
    }

}

export default Task;