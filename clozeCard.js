 var otherCard = require("./BasicCard.js");

 console.log(otherCard);
 function ClozeCard(text, cloze){
   this.text = text
   this.cloze = cloze
   this.partial = text.replace(cloze,"...")
 }

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze);
