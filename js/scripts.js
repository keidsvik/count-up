$(document).ready(function() {
  $('form#counter').submit(function(event) {
    event.preventDefault();

    var total = 0;
    var input = parseInt($('#input').val());
    console.log('input: ', input, typeof input)
    
    var countby = parseInt($('#countby').val());
    console.log('countby: ', countby, typeof countby)

    // create a blank array
    let countArray = [];
    for (var index = 0; index <= input; index += countby) {
      console.log('i am in the for loop')  
      // make a list of all the numbers
      countArray.push(index)
    };
    // put that list on the DOM
    $('#output').text(countArray)
    
  });
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt