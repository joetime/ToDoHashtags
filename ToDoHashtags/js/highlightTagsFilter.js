(function () {

    angular.module('todos')

        .filter('highlightTags', function () {

            return function (input) {
                var words = input.split(' ');
                var out = "";
                angular.forEach(words, function (word) {
                    if (word[0] == '#') {
                        var tag = word.substring(1);
                        console.log(tag);
                        word = '<span class="hashtag hashtag-' + tag + '">' + tag + '</span>';
                    }
                    out += word + ' ';
                });

                return out;
            }
        });
})();