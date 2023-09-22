
// Find the Symmetric Difference


/* The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates). */


// my solution

// 1) symmetric of two arrays 
const symmetricOfTwo = (first : number[] , second : number[]) =>{
    const clean : number[] = []
    // remove duplicate values  in the same array
    const first_ : number[]= []
    const second_ : number[]= []

    first.map(el=>{
        if(!first_.includes(el)) first_.push(el)
    })
    second.map(el=>{
        if(!second_.includes(el)) second_.push(el)
    })
    // 
    first_.map((el)=>{
        
        if(! second.includes(el) ) clean.push(el)
    })
    second_.map(el=>{
        if(! first.includes(el) ) clean.push(el)
    })
    return(clean)
}
//2) two by two
function sym(...args : number[][]) {
let arraysOfarrays  = Object.values(arguments).map(el=>{
    return el
})
while (arraysOfarrays.length !==1) {
    const d = symmetricOfTwo(arraysOfarrays[0], arraysOfarrays[1])
    arraysOfarrays.shift()
    arraysOfarrays[0] = d
}
return arraysOfarrays[0]
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
