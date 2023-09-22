function permAlone(param) {
  

    const param_array = param.split("")
    const paramLength = param.length
    
    const numberArray = []
    const maxArray = []
    for (let i = 1; i < param.length+1; i++) {
        numberArray.push(i)
        maxArray.push(param.length)
    }
    const a = numberArray.join("")
    console.log(a)
    const max_ = maxArray.join("") 
    const max = parseInt(max_)
    const native_a_number = parseInt(a)
    const a_array = a.split("")
    const a_length =a_array.length 
    
    const a_number = a_array.map(el=>{
      return parseInt(el)
    })
    const goodNumber = []
    console.log(max)
    for (let i= 0 ;i<max;i++){
      const i_string = i.toString()
      const i_array = i_string.split("")
      const i_number = i_array.map(el=>{
      return parseInt(el)
    })
      if(JSON.stringify(i_number.sort())==JSON.stringify(a_number) ){
        goodNumber.push(i.toString().split(""))
      }
    }
    
    
    const toChars = [...goodNumber]
    goodNumber.map((singleArray,x=0)=>{
      singleArray.map((char,i=0)=>{
        toChars[x][i] = param_array[char-1]
      })
    })
    
    const toWords =  toChars.map(el=>{
      return el = el.join("")
    })
    
    const fitred = toWords.filter(el=>{
      var valid = true
      for(var i = 0 ;i<el.length-1;i++){
         if(el[i]==el[i+1]) valid=false
      }
      if(valid) return el
    })
    console.log(fitred.length)
    return(fitred.length)
    
    }
    
    permAlone('aab');