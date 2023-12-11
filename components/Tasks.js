import TaskList from "./TaskList.js";
import TaskCreate from "./TaskCreate.js";

export default {
    components: { TaskList, TaskCreate },
    
    template: `
        <section class="flex gap-8">
            <TaskList :tasks="filters.inProgress" title="In Progress">
                <TaskCreate @add="add" />
            </TaskList>

            <div v-show="showCompleted">
                <TaskList
                    :tasks="filters.completed"
                    title="Completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                />
            </div>
        </section>
    `,

    data() {
        return {
            tasks: [],
            showCompleted: true
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.tasks.filter(task => ! task.complete),
                completed: this.tasks.filter(task => task.complete),
            };
        }
    },

    created() {
        fetch('http://localhost:3001/tasks')
            .then(response => response.json())
            .then(tasks => {
                this.tasks = tasks;
            });
    },

    methods: {
        add(name) {
            this.tasks.push({
                name: name,
                completed: false,
                id: this.tasks.length +1,
                tag: 'other'
            });
        }
    }
}