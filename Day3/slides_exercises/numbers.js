var numbers = '80:70:90:100';


function max_num(number, max) {
  var number = parseInt(number),
      max = parseInt(max);

  if (number > max) {
    return number
  } else {
    return max
  }
}

function min_num(number, min) {
  var number = parseInt(number),
      min = parseInt(min);

  if (number < min) {
    return number
  } else {
    return min
  }
}


function averageColon(numbers) {

  var numbers_array = numbers.split(':');
  var total;
  var average;
  var max = parseInt(numbers_array[0]);
  var min = parseInt(numbers_array[0]);

  total = numbers_array.reduce( function(memo, number) {

    var num = parseInt(number)

    max = max_num(number,max)
    min = min_num(number,min)

    return parseInt(memo) + num;

  });

  average = total / numbers_array.length

  return result = {
    avg: average,
    max: max,
    min: min
  };
}

console.log(averageColon(numbers))