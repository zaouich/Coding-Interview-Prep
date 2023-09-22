/* 
    Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
     Update the current existing inventory item quantities (in arr1).
      If an item cannot be found, add the new item and quantity into the inventory array.
     The returned inventory array should be in alphabetical order by item.
*/
/* 
    function updateInventory(arr1, arr2) {
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
*/

    function updateInventory (first:(string|number)[][],second:(string|number)[][]){
        // get as object
        const newObj = {}
        first.map(el=>{
            if(newObj[el[1]] ) newObj[el[1]] = newObj[el[1]]+=el[0]
        else newObj[el[1]] = el[0];
        })
        second.map(el=>{
            if(newObj[el[1]] ) newObj[el[1]] = newObj[el[1]]+=el[0]
        else newObj[el[1]] = el[0];
        })
        console.log(newObj)
        // convert object to array to arrays
        let newArray : (string|number)[][] = []
        Object.keys(newObj).map((el ,i)=>{
            newArray.push([el,+newObj[el]])

        })
        console.log(newArray)
        // order 
        const ordred = newArray.sort()
        // numbers first
         ordred.map((el,i)=>{
            ordred[i] = [el[1],el[0]]
        })
        console.log(ordred)
    }
    updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
    
    
//2) the sum

//3) order