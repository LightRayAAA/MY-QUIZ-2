class Contestant {
  constructor(){
   
  }

  
  getPlayerInfo(){
  var contestantInfoRef = database.ref("contestant")
  contestantInfoRef("value",(data)=>{
  allContestants = data.val()
  })
  }
}
