function mergeSort(arr){
	if(arr.length < 2){
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var leftArr = mergeSort(arr.slice(0, mid));
	var rightArr = mergeSort(arr.slice(mid));
	return merge(leftArr, rightArr, arr);
}
function merge(left, right, arr){ 
	// l = left arr index position
	// r = right arr index position
	var l = 0;
	var	r = 0;
	var i = 0;
	// var arr = [];
	while(l < left.length && r < right.length){
		if(left[l] > right[r]){
			// arr.push(right[r]);
			arr[i] = right[r];
			i++;
			r++;
		}
		else{
			// arr.push(left[l]);
			arr[i] = left[l];
			i++;
			l++;
		}
	}
	while(l < left.length){
		// arr.push(left[l]);
		arr[i] = left[l];
		i++;
		l++;
	}
	while(r < right.length){
		// arr.push(right[r]);
		arr[i] = right[r];
		i++;
		r++;
	} 
	return arr;
}