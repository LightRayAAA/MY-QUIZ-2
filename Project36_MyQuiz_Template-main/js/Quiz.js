class Quiz {
  constructor(){}

  start(){
    
      question = new Question()
      question.display();
    
  }

 
play(){
question.hide()
background("yellow")
textSize(30)
text("result of the quiz:",340,50)
Contestant.getPlayerInfo()
if(allContestants!=undefined){
var displayAnswer = 230
textSize(20)
text("Contestants who Answer correctly are in green",130,230)
for(var plr in allContestants){
var correctAnswer = "2"
if(correctAnswer == allContestants[plr].answer){
fill("green")
}
else{
fill("red")
}
displayAnswer+=30
textSize(20)
text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayAnswer)
}
}
}

}