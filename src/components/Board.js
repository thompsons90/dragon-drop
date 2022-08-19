import React from 'react';

export const Board= (props) => {
    const drop = e => {
        // this prevents data from resetting
        e.preventDefault();
        // We move the cards around by their id
        // Pass through key into getData('key')
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);

        // Hides the block (card) when we drag so it looks like you picked up the card
        card.style.display = 'block';

        // Target is the board we will drop into, appendChild = adding the card into the board
        e.target.appendChild(card)
    }

    // This prevents breaking it, if you let go it doesn't do anything, allows continuing on of function
    const dragOver = e => {
        e.preventDefault()
    }

    return(
<>
{ props.children }
</>
    )
}

// Anything that appears between <Board> "Hi, I'm a child!" </Board> is the children prop