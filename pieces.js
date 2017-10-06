var BasicCard = require("./BasicCard");
var ClozeCard = require("./clozeCard");

process.argv[2];
console.log(process.argv[2]);
process.argv[3];
process.argv[4];

if(process.argv[2] === 'BasicCard'){
  console.log("BasicCard")
newBasicCard = process.argv[3];
}else{
  console.log("clozeCard")
  newClozeCard = process.argv[4];
};
