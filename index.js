function cal(value){
    const screen=document.getElementById('screen');
    screen.value=screen.value+value;
}
function clearDisplay() {
    const screen=document.getElementById('screen');
    screen.value = '';
}
function calculate(){
    const screen=document.getElementById('screen');
    try{
        screen.value=eval(screen.value);
    }
    catch(e){
        alert("Invalid input!!!");
        clearDisplay();
    }
}