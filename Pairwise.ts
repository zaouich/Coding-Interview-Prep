function pairwise(arr : number[], arg:number) :number {
    let valide : {el1:number,el1index:number,el2:number,el2index:number}[] = [];
    const i = 0;
    arr.map((el, x) => {
        for (var i = 1 + x; i < arr.length; i++) {
            if (valide.length < 2 && el + arr[i] === arg) {
                if (valide.length > 0 && valide[valide.length - 1].el1index != x && valide[valide.length - 1].el2index != i && valide[valide.length - 1].el2index != x && valide[valide.length - 1].el1index != i) {
                    valide.push({
                        el1: el,
                        el1index: x,
                        el2: arr[i],
                        el2index: i,
                    });
                    break
                } if (valide.length == 0) {
                    valide.push({
                        el1: el,
                        el1index: x,
                        el2: arr[i],
                        el2index: i,
                    });
                    break
                }
            }

        }
    });
    var total = 0;

    valide.map(el => {
        total += el.el1index += el.el2index
    })
    return total
}
