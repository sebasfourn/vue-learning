import Task from "./Task.js";
import TaskTags from "./TaskTags.js";
import Panel from "./Panel.js";

export default {
    components: { Task, TaskTags, Panel },

    template: `
        <Panel v-show="tasks.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ tasks.length }})</span>
                </h2>

                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>

            <TaskTags
                v-model:currentTag="currentTag"
                :initial-tags="tasks.map(a => a.tag)"
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <Task
                    v-for="task in filterTask"
                    :key="task.id"
                    :task="task"
                />
            </ul>

            <slot  />

            <template #footer>
                footer
            </template>
        </Panel>
    `,

    props: {
        tasks: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filterTask() {
            if (this.currentTag === 'all') {
                return this.tasks;
            }

            return this.tasks.filter(a => a.tag === this.currentTag);
        }
    }
}