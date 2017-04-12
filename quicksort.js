function quicksort(array){
	if(array.length < 2){
		return array;
	}
	// var pivot = array[0];
	var pivot = Math.floor(array.length / 2);
	var lessList = [];
	var greatList = [];
	var pointer = 0;

	// for(var i = 1; i < array.length; i++){
	// 	if(array[i] > pivot){
	// 		greatList.push(array[i]);
	// 	}
	// 	else{
	// 		lessList.push(array[i]);
	// 	}
	// }
	while(pointer < pivot){
		if(array[pointer] > array[pivot]){
			greatList.push(array[pointer]);
		}
		else{
			lessList.push(array[pointer]);
		}
		pointer++;
	}
	pointer += 1;
	while(pointer < array.length){
		if(array[pointer] > array[pivot]){
			greatList.push(array[pointer]);
		}
		else{
			lessList.push(array[pointer]);
		}
		pointer++;
	}
	console.log("great", greatList);
	console.log("less", lessList);
	var great = quicksort(greatList);
	var less = quicksort(lessList);
	return less.concat(array[pivot], great);
}
// document.getElementById("sort").innerText += quicksort([3,20,5,100,1,6,8,14,10,21,9,0]);	