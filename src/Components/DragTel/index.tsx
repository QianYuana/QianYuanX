/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  DndContext,
  MouseSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { TagTel } from 'qianyuanx';
import React, { useEffect, useState } from 'react';
import Item from './item';

interface IAppProps {
  list: object[];
  onChange: (items: any) => void;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [items, setItems] = useState<any[]>(props.list || []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(MouseSensor),
  );

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    // console.log(active,over);
    if (active.id !== over.id) {
      // console.log(`Move item ${active.id} to position ${over.id}`);
      let arrayMoves = arrayMove(items, active.id, over.id);
      setItems(arrayMoves);
    }
  };
  const arrayMove = (array: any[], from: any, to: any) => {
    if (array.length === 0) {
      return array;
    }
    let newArr: any[] = [...array];
    array.forEach((item, index) => {
      if (item.id === from) {
        array.forEach((items, indexs) => {
          if (items.id === to) {
            newArr.splice(index, 1);
            newArr.splice(indexs, 0, item);
            return;
          }
        });
      }
    });
    return newArr;
  };
  useEffect(() => {
    props.onChange(items);
  }, [items]);
  useEffect(() => {
    setItems(props.list);
  }, [props.list]);
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        {items.map((item) => (
          <Item id={item.id} key={item.id}>
            <TagTel title={item.value}></TagTel>
          </Item>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default App;
