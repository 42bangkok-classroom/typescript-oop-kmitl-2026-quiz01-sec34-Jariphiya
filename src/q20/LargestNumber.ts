let r = 2
let q = 3
let Largest = 0;
let range_ = 0
while(1){
    let User_lc7 = Number(process.argv[r]);
    let User_lc7_plus1 = Number(process.argv[q]);

    if (User_lc7 === undefined || isNaN(User_lc7_plus1)) {
        if (User_lc7 !== undefined && User_lc7_plus1 === undefined){
            Largest = User_lc7
            break
        }
        else{
            Largest = User_lc7
            break
        }
    };
    if ( User_lc7 >= User_lc7_plus1) {
        Largest = User_lc7
        q++
    }
    else if ( User_lc7 <= User_lc7_plus1) {
        if ( q > r){
            range_ = q - r
            r += range_
            Largest = User_lc7
            q++
        }
    }
    range_ = 0
}
console.log(Largest.toString())