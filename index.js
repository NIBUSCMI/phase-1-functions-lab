// Code your solution in this file!
let hq = 42
function distanceFromHqInBlocks(st) {
    if (hq > st) {
        return hq - st;
    }
    else if (hq < st) {
        return st - hq;
    }
}
console.log(distanceFromHqInBlocks(32));

function distanceFromHqInFeet(st) {
    return distanceFromHqInBlocks(st)*264
}
console.log(distanceFromHqInFeet(32))

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination) * 264)
    }
    else {
        return ((destination - start) * 264)
    }
}
console.log(distanceTravelledInFeet(42, 32))

function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
console.log( calculatesFarePrice(42, 32))