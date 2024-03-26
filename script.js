var arr = document.querySelectorAll('button');

for (let index = 0; index < arr.length; index++) {
    
    document.querySelectorAll('button')[index].addEventListener('click', AddListener);
}

function AddListener() {
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);


}
document.addEventListener('keypress', function(event){
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case 'A':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case 'S':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
            case 'D':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
            case 'F':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
            case 'J':
                var tom5 = new Audio("sounds/crash.mp3");
                tom5.play();
            break;
            case 'K':
                var tom6 = new Audio("sounds/kick-bass.mp3");
                tom6.play();
            break;
            case 'L':
                var tom7 = new Audio("sounds/snare.mp3");
                tom7.play();
            break;
    
        default:
            break;
    }
}