const num_rep = Number(process.argv[2]);

for (let i = 0; i < num_rep; i ++){
  let row = "";

  for(let j = 0; j < num_rep; j ++){
     row += j+1;
  }
  console.log(row);
}