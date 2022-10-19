import { memo, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { Box } from './Box.js'
import { ItemTypes } from './ItemTypes.js'



function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,

    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
}


export const DraggableBox = memo(function DraggableBox(props) {
  const { id, title, left, top } = props
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, title },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title],
  )
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div
      ref={drag}
      style={getStyles(left, top, isDragging)}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="DraggableBox"
    >
      <Box title={title} />
    </div>
  )
})
