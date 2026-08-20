var tasks = [];

const ToDoList = { 
    data() {
        return {
            tasks: window.tasks,
            newTask: {
                done: false
            }
        }
    },
    methods: {
        addTask: function()
        {
            if (this.newTask.name)
            {
                this.tasks.push(this.newTask)
                this.newTask = {
                    done: false
                };
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
            }
            else 
            {
                alert("Todos os campos devem ser preenchidos!")
            }
        },
        storeTasks()
        {
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        }
    },
    created()
    {
       this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks
    },
};

Vue.createApp(ToDoList).mount('#app');