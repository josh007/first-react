import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No {heading} found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(e) => {
              console.log(e);
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
