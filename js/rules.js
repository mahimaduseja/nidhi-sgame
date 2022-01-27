class Rule {
    constructor() {
       this.storyImg = createImg("story.png", "game story");
    }
    setElementsPosition() {
      this.storyImg.position(110, 100);
    }
    setElementsStyle() {
      this.storyImg.class("gamestory");}
hide1(){
  this.storyImg.hide()
}
    connectStates() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      updatestates(state) {
        database.ref("/").update({
          gameState: state
        });
      }
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
     
    }
}