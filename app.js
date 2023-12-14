const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Замека 2']
        }
    },
    methods: {
        inputChangeHandler (event) {
            this.inputValue = event.target.value;
        },
        addNewNote () {
            this.notes.push(this.inputValue);
            this.inputValue = '';
        },
        removeNote(index) {
            this.notes.splice(index, 1);

        }
    }
}

Vue.createApp(App).mount('#app');