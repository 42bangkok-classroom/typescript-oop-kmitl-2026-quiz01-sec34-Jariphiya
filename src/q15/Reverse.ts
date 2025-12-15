const text_ori = String(process.argv[2]);

let reversed = "";
for(let i = text_ori.length - 1; i >= 0; i--){

    reversed += text_ori[i];


}
  console.log(reversed);
