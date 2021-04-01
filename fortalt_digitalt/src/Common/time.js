export default function isDay() {
    let time = new Date().getHours();
  
    if (7 < time && time < 18) {
      return true;
    }
    else {
      return false; 
    }
}

export function getTimeType() {
  let time = new Date().getHours();
  if (time > 7 && time < 12) {
    return "Morgen";
  }
  if (time >= 12 && time <= 18) {
    return "Ettermiddag";
  }
  if (time > 18 && time <= 24) {
    return "Kveld";
  }
  if (time > 24 && time <= 7) {
    return "Natt";
  }
}

export function getSeason() {
    let month = new Date().getMonth();
      if (month < 2 || month >= 11) {
    return "Vinter";
  }
    if (month >= 2 && month <=4 ) {
      return "Var";
  }
    if (month >= 5 && month <= 7 ) {
      return "Sommer";
  }
    if (month >=8 && month <= 10) {
      return "Host";
  }
}