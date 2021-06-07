class Form{
    constructor(){


    }
display(){
    
    var title=createElement("h2")
     
title.html("C͜͡A͜͡R͜͡ ͜͡R͜͡A͜͡S͜͡I͜͡N͜͡G͜͡ ͜͡G͜͡A͜͡M͜͡E͜͡")
 
title.position(345,90)
title.shapeColor=("red");

var b=createElement("h4");
b.html("ENTER YOUR NAME");
b.position(345,150);


var box=createInput("")
box.position(345,190);
var button=createButton("LETS GO..")
button.position(760,580);
    
button.mousePressed(function(){
    box.hide();
    button.hide();
   title.hide();
   b.hide();

    var name=box.value();
    var greeting=createElement("h2");
    greeting.html("WELCOME: " +name);
    greeting.position(380,120)
    background("white");
})



}
}