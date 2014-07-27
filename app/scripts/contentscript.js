'use strict';

(function($){
    var disableMergeButton = function() {
        var $mergeButton = $('#merge-pull-request').find('div.check-conflict div.pull-right');
        var mergeButtonHtml = '<span class="btn disabled">You can\'t merge!</span>';
        $mergeButton.html(mergeButtonHtml);
    };
    var disableCloseButton = function() {
        var $closeButton = $('#action');
        var $parent = $closeButton.closest('div');
        $closeButton.remove();
        var closeButtonHtml = '<span class="btn disabled">You can\'t close!</span>';
        $parent.append(closeButtonHtml);
    };

    disableMergeButton();
    disableCloseButton();
    setInterval(disableMergeButton, 1000);
    setInterval(disableCloseButton, 1000);
})(jQuery);
