import { useCallback, useState } from 'react'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox.js'
import { ItemTypes } from './ItemTypes.js'
import { snapToGrid as doSnapToGrid } from './snapToGrid.js'

import { data } from './data'

const styles = {
  width: '50vw',
  height: '50vh',
  border: '1px solid black',
  position: 'relative',
}

const Container = ({ snapToGrid }) => {

  const [boxes, setBoxes] = useState(data)
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes],
  )
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        if (snapToGrid) {
          ;[left, top] = doSnapToGrid(left, top)
        }
        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )
  return (
    <>
      <div ref={drop} style={styles}>
        {Object.keys(boxes).map((key) => (
          <DraggableBox key={key} id={key} {...boxes[key]} />
        ))}
      </div>
    </>
  )
}


export default Container;