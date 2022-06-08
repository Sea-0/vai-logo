class Game {
  constructor() {}
  getState(){
  var gameStateRef = dataBase.ref("gameState")
  gameStateRef.on("value",function(data){
    gameState=data.val();
  });
  }
  update(state){
dataBase.ref("/").update({
  gameState:state
})
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();
    car1=createSprite(width/2-50,height-100)
    car2=createSprite(width/2+100,height-100)
    car=[car1,car2]
  }
  handleElements(){
    form.hide();
    form.titleImg.position(40,50)
    form.titleImg.class("gameTitleAfterEffect")
  }
  handlePlayerControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY +=10
      player.update();
    }
  }
play(){
  this.handleElements();
  Player.getPlayerInfo();
  if(allPlayers!==undefined){
    image(roadImg,0,-height*5,width,height*6)
    var index = 0
    for(var plr in allPlayers){
      index=index+1;
      var x = allPlayers[plr].positionX
      var y = height-allPlayers[plr].positionY
      cars[index-1].position.x=x
      cars[index-1].position.y=y
      if(index===player.index){
        stroke(10)
        fill("red")
        ellipse(x,y,60,60)
       camera.position.x=cars[index-1].position.x
      }
    }
    this.handlePlayerControls()
    drawSprites();
  }
}
}
