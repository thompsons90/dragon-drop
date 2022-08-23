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

    const handleDragEnter = (e, params) => {
        console.log('Enter the Dragon', params)
        const currentItem = dragItem.current;
        if(e.target !== dragNode.current) {
            console.log('target is not same')
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.groupI].items.splice(params.itemI, 0, newList[currentItem.groupI].items.splice(currentItem.itemI,1)[0])
                dragItem.current = params;
                return newList;
            })
        }
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
        <div 
            key={group.title} 
            className="dnd-group"
            onDragEnter={dragging && !group.items.length?(e) => handleDragEnter(e, {groupI, itemI: 0}) : null}
            >
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemI) => (
            <div draggable="true" 
            onDragStart={(e) => {handleDragStart(e, {groupI, itemI})}} 
            onDragEnter={dragging?(e) => handleDragEnter(e, {groupI, itemI}) : null}
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