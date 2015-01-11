<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="ToDoHashtags.Index" %>

<% bool bUseMinified = true; %>

<!DOCTYPE html>
<html ng-app="todos">
<head>
    <title>TODO APP</title>
    <% if (Request.IsLocal && !bUseMinified)
       { %>
    <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="css/custom.css" />
    <link rel="stylesheet" type="text/css" href="css/hashtag.css" />
    <% }
       else
       { %>
    <link rel="stylesheet" type="text/css" href="dist/css/app.css" />
    <% } %>
</head>
<body>

    <!-- This must be present for the .net framework to work correctly -->
    <form id="form1" runat="server"></form>


    <% if (Request.IsLocal && !bUseMinified) { %>
    <script type="text/javascript" src="node_modules/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="node_modules/angular/angular.js"></script>
    <script type="text/javascript" src="node_modules/angular-sanitize/angular-sanitize.js"></script>
    <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.js"></script>

    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/highlightTagsFilter.js"></script>
    <script type="text/javascript" src="js/custom-jquery.js"></script>
    <% } else { %>
    <script type="text/javascript" src="dist/js/vendor.js"></script>
    <script type="text/javascript" src="dist/js/app.min.js"></script>
    <% } %>

    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <section id="todoapp" ng-controller="TodosController as todolist">

                    <h1>todos</h1>

                    <!-- Form to create a new todo -->
                    <form id="todosForm" name="todoForm" ng-submit="todoForm.$valid && addTodo()" novalidate>

                        <textarea id="todotext" name="todotext" ng-model="todotext" placeholder="What needs to be done?" 
                            required class="form-control"></textarea>
                        <div>
                            <span style="color: red" ng-show="todoForm.todotext.$dirty && todoForm.todotext.$invalid">
                                <span ng-show="todoForm.todotext.$error.required">Please enter what needs to be done</span>
                            </span>
                        </div>
                        <div id="tags">
                        </div>
                        <input type="button" id="addTag" value="Add Tag" class="btn btn-default">
                        <input type="submit" value="Submit" class="btn btn-primary" />

                    </form>
                    <div class="btn-group" style="text-align: right">
                        <a class="btn btn-default btn-small" href="#" ng-click="$$hideTags=!$$hideTags">toggle tags</a>
                        <a class="btn btn-default btn-small" href="#" ng-click="color()">color</a>
                        <br />
                        <br />
                    </div>

                    <div>
                        <!-- Lisitng of all todos -->
                        <ul class="list-group">
                            <li class="list-group-item" ng-repeat="todo in myTodos track by $index">
                                <h4>
                                    <span ng-bind-html="todo.todotext | highlightTags"></span>

                                    <small class="pull-right">{{todo.timeStamp | date:'short'}} &nbsp;&nbsp;
                            <i ng-click="deleteTodo(todo)" class="glyphicon glyphicon-remove btn btn-default btn-xs"></i>
                                    </small>
                                </h4>
                                <blockquote ng-repeat="tag in todo.tags" ng-show="!$$hideTags">
                                    <a ng-click="showTagTodos(tag)"><b>#{{tag}}</b></a>
                                </blockquote>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>

</body>
</html>
