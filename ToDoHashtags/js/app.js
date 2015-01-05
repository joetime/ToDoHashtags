(function () {

    var app = angular.module('todos', []);

    app.controller('TodosController', function () {
        this.myTodos = JSON.parse(localStorage.getItem('todos')) || [];

        //Add New ToDo
        this.addTodo = function () {
            var newtodotext = document.getElementById("todotext").value;
            var numTags = document.getElementsByClassName('todotag').length;
            var newTags = [];
            if (numTags > 0) {
                for (var i = 0; i < numTags; i++) {
                    newTags[i] = document.getElementById("todotag" + (i + 1)).value;
                }
            }

            // find and add any #inline tags
            var inlineTagSearch = newtodotext.split(' ');
            for (var i = 0; i < inlineTagSearch.length; i++) {
                var word = inlineTagSearch[i];
                if (word[0] == '#') {
                    word = word.substring(1); 
                    if (newTags.indexOf(word) < 0) // checks for duplicates
                        newTags.push(word.substring(1));
                }
            }

            this.myTodos.push({
                'todotext': newtodotext,
                'tags': newTags
            });
            // Clean Form
            document.forms["todoForm"].reset();

            // Save New Todo TO Local Storage
            localStorage.setItem('todos', JSON.stringify(this.myTodos));
        };

        //Delete slected todo
        this.deleteTodo = function (todo) {
            this.myTodos.splice(this.myTodos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(this.myTodos));
        };

        this.showTagTodos = function (tag) {
            this.tagTodos = [];
            for (var i = 0; i < this.myTodos.length; i++) {
                if (this.myTodos[i].tags == tag) {
                    this.tagTodos.push(this.myTodos[i]);
                }
            }
            var tester = [];
            for (var i = 0; i < this.tagTodos.length; i++) {
                tester[i] = this.tagTodos[i].todotext;
            }
            alert(tester.toString());
        };

    });



})();