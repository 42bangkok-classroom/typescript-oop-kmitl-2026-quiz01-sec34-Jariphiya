let even = Number(process.argv[2]);

if(isNaN(even)){
    process.exit();
}

for(let i = 0; i <= even; i++ ){

    if(i % 2 === 0){
        console.log(i)
        }
}