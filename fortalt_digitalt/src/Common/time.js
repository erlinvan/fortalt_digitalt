export default function isDay() {
    let time = new Date().getHours();
  
    if (7 < time && time < 18) {
      return true;
    }
    else {
      return false; 
    }
}