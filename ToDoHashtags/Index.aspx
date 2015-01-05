<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="ToDoHashtags.Index" %>

<!DOCTYPE html>
<html ng-app="todos">
<head>
    <title>TO DO APP</title>
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/custom.css" />
</head>
<body>

    <!-- This must be present for the .net framework to work correctly -->
    <form id="form1" runat="server"></form>

    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="js/custom-jquery.js"></script>

    <section id="todoapp" ng-controller="TodosController as todolist">

        <h1>todos</h1>

        <!-- Form to create a new todo -->
        <form id="todosForm" name="todoForm" ng-submit="todoForm.$valid && todolist.addTodo()" novalidate>

            <textarea id="todotext" name="todotext" ng-model="todolist.todotext" placeholder="What needs to be done?" required></textarea>
            <div>
                <span style="color:red" ng-show="todoForm.todotext.$dirty && todoForm.todotext.$invalid">
                    <span ng-show="todoForm.todotext.$error.required">Please enter what needs to be done</span>
                </span>
            </div>
            <div id="tags">
            </div>
            <input type="button" id="addTag" value="Add Tag">
            <input type="submit" value="Submit" />

        </form>

        <!-- Lisitng of all todos -->
        <ul class="list-group">
            <li class="list-group-item" ng-repeat="todo in todolist.myTodos track by $index">
                <h4>
                    <button ng-click="todolist.deleteTodo(todo)" class="delete"><img src="img/delete-icon.png" /></button>
                    {{todo.todotext}}
                    <small class="pull-right">{{todo.timeStamp | date:'short'}}</small>
                </h4>
                <blockquote ng-repeat="tag in todo.tags">
                    <a ng-click="todolist.showTagTodos(tag)"><b>#{{tag}}</b></a>
                </blockquote>
            </li>
        </ul>
    </section>
</body>
</html>
