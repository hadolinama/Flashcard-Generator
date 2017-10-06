
function BasicCard(front, back) {

  this.front = front    //We would make objects and assign properties to placeholders;front and back
  this.back = back

};

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);

module.exports = {
  BasicCard: BasicCard
}
