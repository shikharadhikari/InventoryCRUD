// ️ ⃣ Callbacks and Arrow Functions – Useful Task Management

let tasks = [    
    { id: 1, title: 'Complete assignment', completed: false },
    { id: 2, title: 'Attend meeting', completed: true } 
];

let newTask = [];
let Summary = [];

const addTask = (tasks, newTask, callback) => {
    tasks.push(newTask);
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    const summary = { total, completed, pending };
    callback(tasks, summary);
};

// Example usage:
addTask(tasks, { id: 3, title: 'Start project', completed: false }, (updatedTasks, summary) => {
    console.log("Updated Task List:", updatedTasks);
    console.log("Summary:", summary);
});