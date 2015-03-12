var $showHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');


$showHide.on('click', function () {
    $box.toggleClass('js-box-show');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-move');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse');
});

$btnBounce.on('click', function () {
    $circle.toggleClass('js-ball-bounce');
});

$circle.on('webkitAnimationEnd animationend', function () {
    $circle.removeClass('js-ball-bounce');
});

$btnAppend.on('click', function() {

        var $li = $('<li>').html('New List Item');
    
        $list.prepend($li);
        $li.toggleClass ('js-list-append');
});