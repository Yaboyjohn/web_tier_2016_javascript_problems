const $ = require('jquery'); // Don't touch this!

/** ================================================================================
 *  Use jquery so that when you click the button with id="question4", the
 *  background of the box below the button get's filled with purple. On every 4th
 *  click, the box should then turn red instead of turning purple.
 *
 *  You'll probably find the class active very useful. Look at `scss/index.scss`
 *  ================================================================================ */
 var counter = 0;
 $('#question4').click(function() {
   if (counter === 4) {
     $('#box').css("background-color", "purple");
     counter = 0;
   } else {
     $('#box').css("background-color", "red");
     counter += 1;
   }
});


/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */
module.exports = question4;
