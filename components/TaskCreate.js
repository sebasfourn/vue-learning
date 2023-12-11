export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newTask" placeholder="New task..." class="p-2 w-full" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newTask: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newTask);
            this.newTask = '';
        }
    }
}