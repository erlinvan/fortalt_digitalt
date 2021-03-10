export default function isDay() {
    let time = new Date().getHours();
  
    if (8 < time && time < 18) {
      return true;
    }
    else {
      return false; 
    }
}