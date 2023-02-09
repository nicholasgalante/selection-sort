function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++){
    let minIndex = i;
    for (let j = i + 1  ; j < arr.length; j++){
      if (arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]] //destructuring to swap
  }
  return arr;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Test 1 - Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Test 2 - Expecting: [-3, -3, -2, 1, 0]");
  console.log("=>", selectionSort([2, -1, -3, 0, -3]));

  console.log("Test 3 - Expecting: [0]");
  console.log("=>", selectionSort[0]);

  console.log("Test 4 - Expecting: [0,0,0]");
  console.log("=>", selectionSort[(0, 0, 0)]);

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now()

  for(let i= 0; i < 1000; i++){
    selectionSort([3,2,-1]);
    selectionSort(longInput);
  }



  console.log("BENCHMARK:",((Date.now()-startTime)/2000))


}

module.exports = selectionSort;

// Pseudocode:
/*
create new sorted array
for loop through arr
  let minValue = index
  if currentIndex < currentIndex + 1, continue
  if current Index + 1 < currentIndex, minValue = currentIndex +1
  sortedArray.push(minValue)
return sortedArray



create new sortedArray
for loop i = 0 {
  let minVal = arr[i]
  arr[i] > arr[0+1] ? ==> minVal = arr[0+1]

}

*/

// And a written explanation of your solution
