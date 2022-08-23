import React, { useState, useRef } from 'react';

function DragNDrop({data}) {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    // I need to set the style while dragging to not be so opaque
    const handleDragStart = (e, params) => {
        console.log('drag started', params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnter = (e) => {
        console.log('Enter the Dragon')
    }

    const handleDragEnd = () => {
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
        console.log('drag end')
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.groupI === params.groupI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }
            return 'dnd-item';
    }

    return (
        <div className="dragon-drop">
      {list.map((group, groupI) => (
        <div key={group.title}className="dnd-group">
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemI) => (
            <div draggable="true" 
            onDragStart={(e) => {handleDragStart(e, {groupI, itemI})}} 
            onDragEnter={dragging? handleDragEnter : null}
            key={item}className={dragging? getStyles({groupI, itemI}):"dnd-item"}>
              {item}
            </div>
          ))}
        </div>
      ))}
      </div>
    )
}

export default DragNDrop;