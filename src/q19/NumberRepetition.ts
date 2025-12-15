const num10 = Number(process.argv[2]);

for(let i = 0; i < num10; i++){
  let row = "";

    for(let j = 0; j < num10; j++){
      row += i+1
    }
    console.log(row);
}