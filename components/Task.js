export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ task.name }}
                <input type="checkbox" v-model="task.complete" class="ml-3" />
            </label>
        </li>
    `,

    props: {
        task: Object
    }
}