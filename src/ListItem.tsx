import { memo, useRef } from 'react';

type Item = {
  id: number;
  label: string;
  value: number;
};

type ListItemProps = {
  index: number;
  item: Item;
  onUpdate: (index: number) => void;
};

const ListItem = memo<ListItemProps>(function ListItem({
  index,
  item,
  onUpdate,
}) {
  const renderCount = useRef<number>(0);
  renderCount.current = renderCount.current + 1;

  const handleClick = () => {
    onUpdate(index);
  };

  return (
    <li>
      {item.label}: {item.value} (renders: {renderCount.current})
      <button onClick={handleClick}>Update</button>
    </li>
  );
});

export default ListItem;
