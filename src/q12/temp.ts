const input_temp = Number(process.argv[2]);

if(isNaN(input_temp)){
  console.log("This input is invalid");
  process.exit(1); 
}

if(input_temp > 30){
  console.log("Hot");
}
else{
  console.log("Normal");
}