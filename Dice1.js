

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    let diceResult = document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];
    for(let i=0; i<numOfDice; i++){
    let value = Math.floor(Math.random()*6)+1;
    values.push(value); 
    images.push(`<img src="Dice Imgs/${value}.png " alt"Dice ${value}">`)
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("")
    
}