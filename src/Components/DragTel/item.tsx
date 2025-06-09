import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import * as React from 'react';

interface IAppProps {
  id: string | number;
  children?: React.ReactNode;
}

const Item: React.FunctionComponent<IAppProps> = (props) => {
  const { id } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
};

export default Item;
