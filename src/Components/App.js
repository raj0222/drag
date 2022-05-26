import "../App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../Components/DragDrop";

import '../App.css';

function App() {
  return (
   <div>
    <DndProvider backend={HTML5Backend}>
        <div className="App">
          <DragDrop />
        </div>
      </DndProvider>
     
   </div>
  );
}

export default App;
