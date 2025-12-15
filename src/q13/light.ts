const light = String(process.argv[2]);

switch (light.toLocaleUpperCase()) {

  case "RED":
    console.log("Stop");
    break;

  case "YELLOW":
    console.log("Caution");
    break;

  case "GREEN":
    console.log("Go");
    break;
  
    default:
      console.log("Unknown");
}