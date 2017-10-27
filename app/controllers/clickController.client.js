'use strict';

(function () {

   // original code example
   //var addButton = document.querySelector('.btn-add');
   
   
   var test = document.querySelector('.btn-test');
   
   test.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Congrats! You have reached the clickController!');
});

});
