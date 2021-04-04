class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("virtual pet");
      title.position(130, 0);
      
      var input = createInput("Name");
      
      input.position(130, 160);
      
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        if(mousePressed(addFood)){
        feedTime.update();
        }
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }