import React from 'react';

export const Card = (props) => {

    const dragStart = e => {
        const target = e.target;
        // setting the target.id to the data
        e.dataTransfer.setData('card.id', target.id);

        //this keeps the card we're dragging from being invisible
        setTimeout(() => {
            target.style.display="none";
        }, 0);
    }

    // Stop any events from being called when we drag so we don't drag cards into cards
    const dragOver = e => {
        e.stopPropagation();
    }

    //pass props for events, onDragStart NOT onDrag because it'd be continuous
    return (
        <div id={props.id} className={props.className} 
        draggable={props.draggable}
        onDragStart={dragStart} onDragOver={dragOver}>
            {props.children}
        </div>
      );
}
 
