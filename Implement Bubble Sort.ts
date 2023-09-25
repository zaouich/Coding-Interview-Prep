
/* 
    This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
*/

function bubbleSort(array : number[]):number[] {
    let max : number= undefined!
    let min:number = undefined!
    array.map(el=>{
      var biggerThan :number = 0
      for(var i = 0 ; i<array.length ;i++){
        if(el>array[i]) biggerThan +=1
      }
      if(biggerThan >=array.length -1){
        max = el
      }
      if(biggerThan == 0) min = el
    })
    const newArray :number[]= []
    for(var i = min ; i<=max; i++){
      if(array.includes(i)){
        var n = 0
             array.map(el=>{
          if(el==i) n+=1
        })
        if(n>0 && n<=array.length){
        for(var x =0 ; x<n; x++){
          newArray.push(i)
        }
        
        }
       
      }
    }
      return newArray;
      // Only change code above this line
    }
    