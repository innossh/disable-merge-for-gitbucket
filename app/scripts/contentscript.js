'use strict';

(function($){
    var disableMergeButton = function() {
        var $mergeButton = $('#merge-pull-request').find('div.check-conflict div.pull-right');
        var mergeButtonHtml = '<span class="btn disabled">You can\'t merge!</span>';
        $mergeButton.html(mergeButtonHtml);
    };

    disableMergeButton();
    setInterval(disableMergeButton, 1000);
})(jQuery);
