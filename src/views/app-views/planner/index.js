
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Board from './Board'

const Planner = () => {
  return (
    <div>
      <div>
        
      </div>
      <DndProvider backend={HTML5Backend}>
      <Board />
    </DndProvider>
    </div>
  )
}

export default Planner