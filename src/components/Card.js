import { useDrag } from 'react-dnd';

const Card = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if ((item, monitor)) {
        alert(`You Dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} role="Box" style={{ opacity }}>
      {name}
    </div>
  );
};

export default Card;
