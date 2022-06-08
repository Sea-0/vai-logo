class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.positionX=0;
    this.positionY=0;
  }
  addPlayer(){
    var playerIndex="players/player"+this.index
    if(this.index===1){
      this.positionX=width/2-100
    }else{
      this.positionX=width/2+100
    }
    dataBase.ref(playerIndex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })
  }
  getDistance(){
    var playerDistanceRef=dataBase.ref("players/player"+this.index)
    playerDistanceRef.on("value",data =>{
    var data = data.val();
    this.positionX = data.positionX
    this.positionY = data.positionY
    })
  }
  getCount(){
  var playerCountRef = dataBase.ref("playerCount")
  playerCountRef.on("value",data => {
    playerCount=data.val();
  })

  }
  updateCount(count){
    dataBase.ref("/").update({
      playerCount : count
    })
  }
  update(){
    var playerIndex= "players/player"+this.index
    dataBase.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY
    });
  }
static  getPlayerInfo(){
var playerInfoRef=dataBase.ref("players")
playerInfoRef.on("value",data=>{
  allPlayers=data.val();
})
  }
}
