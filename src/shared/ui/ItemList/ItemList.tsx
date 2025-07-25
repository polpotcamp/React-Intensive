import React from "react";

type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

function ItemList<T>({ items, renderItem }: ItemListProps<T>) {
  return <>{items.map((item, index) => renderItem(item, index))}</>;
}

export default ItemList;