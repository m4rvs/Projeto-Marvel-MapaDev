const characters = document.querySelectorAll(".character");

characters.forEach((character) =>
{
    character.addEventListener("mouseenter", () =>
    {
        const idSelected = character.attributes.id.value;
        
        if(idSelected === 'ultron') return;

        /*
            OBJECTIVE 1 - when hovering over the character:
            - put the selected class on the character that we hover over to add animation to it
            - remove the selected class from the character that is selected
        */
       const selectedCharacter = document.querySelector(".player-1-selected");selectedCharacter.classList.remove("player-1-selected");
        
        character.classList.add('player-1-selected')
        
       /*
            OBJECTIVE 2 - when hovering  over the character in the list, change the image and name of the large character
            - change the image of player 1
            - change player 1 name
        */
        const player1Image = document.getElementById('player-1-image');
        player1Image.src = `./src/images/${idSelected}.png`;
    
        const player1Name = document.getElementById('player-1-name');
        const selectedName = character.getAttribute('data-name');
            
        player1Name.innerHTML = selectedName;
    })
});