const pass = process.argv[2];
if (pass === undefined) process.exit();
let r = false;
let s = false;
let t = false;
if (pass.length >= 8) {
    for (let p = 0; p <= pass.length; p++){
        if(pass[p] === undefined){
            break
        }
        if (isNaN(Number(pass[p])) && (pass[p].toUpperCase() === pass[p])){
            r = true
        }
        if (isNaN(Number(pass[p])) && (pass[p].toLowerCase() === pass[p])){
            t = true
        }
        else{
            s = true
        }
    }
    if (r && (s && t)){
        console.log("Valid")
    }
    else{
        console.log("Invalid")
    }
} 
else {
    console.log("Invalid")
}