import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            todo: [
                {title: 'bruh1', id: 'abc', description: 'bruh momentom'},
            ],
            pending: [
                {title: 'bruh2', id: 'abcd', description: 'wollah', tasks: [
                    {label: 'build todont', checked: false, id: 'bbcd'},
                    {label: 'build todont2', checked: false, id: 'bbcde'}
                ]},
            ],
            done: [
                {title: 'bruh3', id: 'abcde', tasks: [
                    {label: 'build todont', checked: false, id: 'bbcd'},
                    {label: 'build todont2', checked: false, id: 'bbcde'}
                ]},
                {title: 'bruh4', id: 'abcdefg'}
            ]
        }
    },

    mutations: {
        update(state, payload) {
            state[payload.group] = payload.value;
        }
    }
})

export default store