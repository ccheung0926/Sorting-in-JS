function selectionSort(arr){
	var min;
	for(var i = 0; i <= arr.length - 2; i++){
		min = arr[i]
		for(var j = i+1; j <= arr.length - 1; j++){
			if(arr[j] < min){
				min = arr[j];
				var temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
			console.log(arr);

		}
	}
	return arr;
}
// [44,75,23,43,55,12,64,77,33];