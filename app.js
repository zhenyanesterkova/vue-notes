const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Замека 2']
        }
    },
    methods:{
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
            return (this.notes.length * 2);
        }        
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = '';
            }
        }
    }
}

Vue.createApp(App).mount('#app');