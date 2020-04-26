for (var i = 0;i < document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function ()
    {
        var buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonHover(buttonText);
    }
    ); 
}


document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonHover(event.key);
});

function makeSound(key)
{
    switch (key)
    {
        case "w":
            var audio1 = new Audio("sound/1.wav");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sound/2.wav");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sound/3.wav");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sound/4.wav");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sound/5.wav");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sound/6.wav");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("sound/7.wav");
            audio7.play();
            break;
        default:
            console.log(this.buttonText);
         
    }
}
function buttonHover(currentKey)
{
    var button1 =   document.querySelector("." + currentKey);
    button1.classList.add("pressed");
    setTimeout(function () {
        button1.classList.remove("pressed")}, 100);
}