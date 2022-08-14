//Normal way of solving merge sort

// export const mergeSort = array=>{
//     if (array.length == 1) return array;
//     const mid = Math.floor(array.length / 2);
//     const left = mergeSort(array.slice(0,mid));
//     const right = mergeSort(array.slice(mid,array.length));
//     return merge(left,right);
// }

// const merge = (left,right) =>{

// 	let mergeArr=[];
// 	let i=0,j=0,k=0;
// 	while(i < left.length && j < right.length){
// 		if (left[i] < right[j]){
// 			mergeArr[k] = left[i]
// 			i++;
// 		}else{
// 			mergeArr[k] = right[j];
// 			j++;
// 		}
// 		k++;
// 	}
// 	while(i < left.length){
// 		mergeArr[k] = left[i];
// 		i++;
// 		k++;
// 	}
// 	while(j < right.length){
// 		mergeArr[k] = right[j];
// 		j++;
// 		k++;
// 	}
// 	return mergeArr;
// }



export const mergeSortAnimation = (array) => {
    //animations array
    const animations = [];
  if (array.length <= 1) return array;
  //helper array so we don't overwrite the indices of the main array
  const helperArray = array.slice();
  const start = 0,
    end = array.length - 1;
    //calling the merge sort function
  mergeSort(array, helperArray, start, end, animations);
  return animations;
};

const mergeSort = (array, helperArray, start, end, animations) => {
  if (start === end) return; 
  //we need to split the arrays
  const mid = Math.floor((start + end) / 2);
  //by calling mergeSort func recursively with the helper array as the main arr
  //this is the left half of the array
  mergeSort(helperArray, array, start, mid, animations);
  
  //this is the right half of the array
  mergeSort(helperArray, array, mid + 1, end, animations);

  //after partitioning the array we can merge the array
  merge(array, helperArray, start, end, mid, animations);
};

const merge = (array, helperArray, start, end, mid, animations) => {
  
  //these are the pointers to point the values in the array
    let i = start,
    j = mid + 1,
    k = start;
    //i is the pointer for left sub array which run till the mid or the half
    //j is the pointer for right sub array which run from next value to the mid and to the end
    //k is the pointer for referencing the main array
    while (i <= mid && j <= end) {
    //those are the values to compare i,j
    //this is used to change the color of the bar
    animations.push([i, j]);
    //we push the values again to change back the color to its original color
    animations.push([i, j]);
    if (helperArray[i] <= helperArray[j]) {
        //now we will compare the values 
        //this is where the change is happening
        //the value k is overwritten in the array
        //with the value of the helper array i
      animations.push([k, helperArray[i]]);
      array[k++] = helperArray[i++];
    } else {
        //the value k is overwritten in the array
        //with the value of the helper array j
      animations.push([k, helperArray[j]]);
      array[k++] = helperArray[j++];
    }
  }
  //these loops are for the values which are left over
  while (i <= mid) {

    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, helperArray[i]]);
    array[k++] = helperArray[i++];
  }
  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, helperArray[j]]);
    array[k++] = helperArray[j++];
  }

};
