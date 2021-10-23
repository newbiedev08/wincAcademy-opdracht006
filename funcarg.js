//No arguments//
const wall= function(){
  console.log('The wall has been painted red') ; 
};

wall();

//Single arguments//
const wall = function (color){
    console.log("The wall has been painted" + "color");
};
const color= "red";
const color= "green";

wall();

//Multiple arguments//

const wallPaint = function(){
console.log("The south-east has ben painted grey");
console.log("The north wall has to be painted orange");

}
wallPaint("The south-east has ben painted grey");
wallPaint("The north wall has to be painted orange");

//yes, the order of arguments has switched//
//the order stays the same even when the function switch//