function findMax(numbers){
	var max = numbers[0];
  	for (var i = 0; i < numbers.length; i++){
    	if (max < numbers[i]){
        max = numbers[i]
        }
    }
  return max;
  console.log(max)
}