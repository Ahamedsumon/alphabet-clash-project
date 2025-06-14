
function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    console.log(element);
}



function getRandomAlphabet(){
    const randomNumber = Math.random()*25;
        const roundRandomNumber = Math.round(randomNumber);
        const alphabet = "abcdefghijklmnopqrstuvwxyz/";
        const alphabetIntoArray = alphabet.split('');
        const randomDisplayText = alphabetIntoArray[roundRandomNumber];
        const displayText = document.getElementById('display-text');
        displayText.innerText = randomDisplayText.toUpperCase();
        addBackgroundColorById(randomDisplayText);
}




document.getElementById('play-button').addEventListener('click', function(){
            const hidingGameStartSection = document.getElementById('home-section');
            hidingGameStartSection.classList.add('hidden');


            const unHidingPlayGroundSection = document.getElementById('play-ground-section');
            unHidingPlayGroundSection.classList.remove('hidden');

            getRandomAlphabet();
            
        })