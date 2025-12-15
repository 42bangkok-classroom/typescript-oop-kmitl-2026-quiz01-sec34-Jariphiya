const lp8 = String(process.argv[2]);

let reversed = "";
for(let i = lp8.length - 1; i >= 0; i--){

    reversed += lp8[i];


}
  console.log(reversed);
