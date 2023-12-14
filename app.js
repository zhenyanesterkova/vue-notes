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
        toUpperCase (item) {
            return item.toUpperCase();
        },
        addNewNote () {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1);

        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed');
            return (this.notes.length * 2);
        }        
    }
}

Vue.createApp(App).mount('#app');