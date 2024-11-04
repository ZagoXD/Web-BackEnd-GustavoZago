let ids = 0;
let tasks = [];

function getPriorityColor(priority) {
    switch (priority) {
        case "Alta": return "red";
        case "Média": return "yellow";
        default: return "green";
    }
}

module.exports = {
    new(name, priority) {
        let task = { id: ++ids, name: name, priority: priority || "Baixa" };
        task.priorityColor = getPriorityColor(task.priority); 
        tasks.push(task);
        return task;
    },
    update(id, name, priority) {
        let pos = this.getPositionById(id);
        if (pos >= 0) {
            tasks[pos].name = name;
            tasks[pos].priority = priority || tasks[pos].priority;
            tasks[pos].priorityColor = getPriorityColor(tasks[pos].priority); 
        }
    },
    list() {
        return tasks;
    },
    listSorted() {
        return tasks.sort((a, b) => a.name.localeCompare(b.name));
    },
    getElementById(id) {
        let pos = this.getPositionById(id);
        if (pos >= 0) {
            return tasks[pos];
        }
        return null;
    },
    getPositionById(id) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    delete(id) {
        let i = this.getPositionById(id);
        if (i >= 0) {
            tasks.splice(i, 1);
            return true;
        }
        return false;
    },
    count() {
        return tasks.length;
    }
};
