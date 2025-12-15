const tri = Number(process.argv[2]);

for(let i = 0; i < tri; i ++){
  let row = "";
  
  for(let j = 0; j < tri; j ++){

    if(j <= i){
      row += "*";
    }
    else{
      row += " ";
    }
  }
  console.log(row.toString());
}