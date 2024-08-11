import { useCallback, useState } from 'react';

import ListItem from './ListItem';

export default function List({ itemsCount }) {
  const initialState = Array.from({ length: itemsCount }).map((_, id) => ({
    id,
    label: `Item #${id + 1}`,
    value: Math.random(),
  }));

  const [items, setItems] = useState(initialState);

  const handleUpdate = useCallback((index: number) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, value: Math.random() } : item
      )
    );
  }, []);

  return (
    <>
      {/* <button>Delete first</button> */}
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            index={index}
            item={item}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </>
  );
}
