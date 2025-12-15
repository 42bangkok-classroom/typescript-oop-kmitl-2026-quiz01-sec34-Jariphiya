const one_ze = Number(process.argv[2]);

for (let i = 0; i < one_ze; i++){
  let row = "";

  for(let j = 0; j < one_ze; j++){
    if(i % 2 === 0){
      row += "1 "
    }
    else{
      row += "0 ";
    }
  }
  
  console.log(row);
}