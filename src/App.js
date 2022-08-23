// import { Board } from './components/Board';
// import { Card } from './components/Card';
import './style.css';
import DragNDrop from './components/DragNDrop';

const data = [
  {title: 'Group 1', items: ['1','2','3']},
  {title: 'Group 2', items: ['4','5','6']}
]

function App() {
  return (
    <div className="App">
      <DragNDrop data={data}/>

            {/* <div className="dragon-drop">
        <div className="dnd-group">
          <div className="group-title">Group 1</div>
          <div className="dnd-item"><p>ITEM 1</p></div>
          <div className="dnd-item"><p>ITEM 2</p></div>
        </div>
        <div className="dnd-group">
        <div className="group-title">Group 2</div>
          <div className="dnd-item"><p>ITEM 3</p></div>
          <div className="dnd-item"><p>ITEM 4</p></div>
        </div>
        <div className="dnd-group">
        </div>
      </div> */}


      {/* -----previous video----- */}
      {/* <main className="flexbox">
        Here will be our boards
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true"> Card 1</Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true"> Card 2</Card>
        </Board>
      </main> */}

    </div>
  );
}

export default App;
