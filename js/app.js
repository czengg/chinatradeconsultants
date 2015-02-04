$(document).ready(function() {
    $('#fullpage').fullpage({
      menu: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      resize: false,

      menu: '#menu',
      anchors: ['landing', 'services', 'products', 'trade-fairs', 'about', 'faq', 'contacts'],

      onLeave: function(index, nextIndex, direction) {
        if (nextIndex === 1) {
          $('.header .logo').addClass('show');
        } else {
          $('.header .logo').removeClass('show');
        }
      }
    });

    $('.header .logo').addClass('show');


});

function showAnswer(index) {
  var i;
  if (index > 5) {
    i = (index-5)*2;
    qi = i-1;
    var s = '#question-column-two li:nth-child(' + i + ')';
    var q = '#question-column-two li:nth-child(' + qi + ') a.question';
  } else {
    i = index*2;
    qi = i-1;
    var s = '#question-column-one li:nth-child(' + i + ')';
    var q = '#question-column-one li:nth-child(' + qi + ') a.question';
  }
  var answerObj = $(s);
  var questionObj = $(q);
  console.log(questionObj);
  console.log(answerObj);
  if (answerObj.is(':visible')) {
    answerObj.slideUp();
    questionObj.removeClass('minus');
    questionObj.addClass('plus');
  } else {
    answerObj.slideDown();
    questionObj.addClass('minus');
    questionObj.removeClass('plus');
  }
}
