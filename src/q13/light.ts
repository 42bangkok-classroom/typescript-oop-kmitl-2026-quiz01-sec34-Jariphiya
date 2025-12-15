const light_color = String(process.argv[2]);

switch (light_color.toLocaleUpperCase()) {

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