
(function () {

    angular.module('todos', ['ngSanitize'])

    .controller('TodosController', ['$scope', function ($scope) {

        // load todos from localStorage or empty list
        function init() {
            console.log('init()');
            $scope.myTodos = JSON.parse(localStorage.getItem('todos')) || [];

            //findAndColorTags();
        }
        init();
        
        //Add New ToDo
        $scope.addTodo = function () {
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
                    word = word.substring(0);
                    if (newTags.indexOf(word) < 0) // checks for duplicates
                        newTags.push(word.substring(1));
                }
            }

            $scope.myTodos.push({
                'todotext': newtodotext,
                'tags': newTags,
                'timeStamp': new Date()
            });

            // Clean Form
            document.forms["todoForm"].reset();

            // Save New Todo TO Local Storage
            localStorage.setItem('todos', JSON.stringify($scope.myTodos));
        };

        //Delete slected todo
        $scope.deleteTodo = function (todo) {
            $scope.myTodos.splice($scope.myTodos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify($scope.myTodos));
        };

        $scope.showTagTodos = function (tag) {
            $scope.tagTodos = [];
            for (var i = 0; i < $scope.myTodos.length; i++) {
                if ($scope.myTodos[i].tags == tag) {
                    $scope.tagTodos.push($scope.myTodos[i]);
                }
            }
            var tester = [];
            for (var i = 0; i < $scope.tagTodos.length; i++) {
                tester[i] = $scope.tagTodos[i].todotext;
            }
            alert(tester.toString());
        };

        // 
        $scope.color = function findAndColorTags() {

            var colors = ["66D394", "962E53", "FDABBF", "40FFAC", "C0F432", "2980D1", "56775C", "B4A506", "546540", "101145", "37EB8C", "CD3458", "00DA6E", "0C3717", "82793B", "E63D1B", "AE9D2F", "6303E6", "1F2463", "CE6389", "F60342", "EE08C3", "726754", "E741CA",
            "488AC0", "4B74EC", "7DB767", "BD915F", "636A43", "59BE47", "F937D2", "350FC6", "6840A9", "F1D6C2", "91C4F0", "CEA068", "39D399", "9F2DFC", "7FD459", "7EA33A", "409E1F", "649372", "D12FE2", "B618A6", "225C59", "79907A", "FEE916", "BF7DE6", "FAC137",
            "859D2E", "6980A0", "BAE930", "0E07CE", "EC9ADD", "253B35", "AAF3A9", "363207", "305382", "16EB0C", "831BE5", "19F0CA", "AF0E20", "551B89", "DAFB50", "8E39A2", "EBBEC7", "97795A", "ABFB67", "5324F7", "576810", "A0C6F9", "E81527", "0D2F98", "7EC93C",
            "184706", "8B7516", "FFF051", "75E957", "2C6F59", "C610E2", "76DEBF", "4AF3B5", "52B3B0", "BEC1D2", "A98CA6", "E1DCF9", "C44B8F", "1D1C1D", "CDB9E9", "B9246C", "B5E81E", "1D269A", "5A866A", "437FC6", "870BC6", "87B6FD", "41B784", "2DFA46", "489C75",
            "20D3C9", "A405A0", "3F2E6A", "38723B", "88424C", "77C5B8", "E5DEB8", "FE71CE", "B06329", "FB23D6", "F5ECA9", "59E279", "B78284", "045788", "1733B1", "9B7872", "1DB003", "ABA2D3", "7E8C50", "468893", "A3E2C6", "4D30E3", "38EEAC", "11A9E0", "A262B0",
            "554480", "ACEDCC", "104FFF", "B016AF", "642D7D", "DC311B", "2B7094", "CA5194", "0551B0", "0252FC", "0C93EA", "E0561E"];

            var allTags = [];
            angular.forEach($scope.myTodos, function (item) {
                console.log(item);
                allTags = allTags.concat(item.tags);
            });
            allTags = jQuery.unique(allTags);
            console.log(allTags);

            var i = 0;
            angular.forEach(allTags, function (item) {
                $('.hashtag-' + item).css('background-color', '#' + colors[i++])
            });
        }

    }]);
})();