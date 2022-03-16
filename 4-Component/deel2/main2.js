
Vue.component('task-list', { //task lijst hier
    template: `
            <div>
                <h1>Tasks</h1>
                <task v-for="task in tasks">{{task.description}}<button @click="completeTask">x</button></task>
            </div>
            `,

    data() {
        return {
            tasks: [
                { "description": 'Naar de winkel gaan', completed: true },
                { "description": 'Mail beantwoorden', completed: false },
                { "description": 'Computer fixen', completed: false },
            ]
        }
    },
    methods: {
        completeTask() {
            console.log(this)
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
})

new Vue({
    el: '#app'
})




