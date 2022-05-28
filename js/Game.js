class Game{
    constructor(){
        this.resetButton = createButton("RESET");
        this.resetTitle = createElement("RESET");

        this.leaderboardTitle = createElement("h2");

        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
        
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(start){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        player = new Player();
        playerCount = player.getcount();

        form = new form();
        form.display();

        plane1 = createSprite(100, 157, 20, 20);
        plane1.addImage(plane1Img);
        plane1.scale = 0.8;
        
      
        plane2 = createSprite(100, 301,20,20);
        plane2.addImage(plane2Img);
        plane2.scale = 0.27;
      
        planes = [plane1, plane2];
    }
}