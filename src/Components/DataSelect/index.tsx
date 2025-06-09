import { Select } from 'antd';
import React, { useEffect, useState } from 'react';

interface IAppProps {
  [x: string]: any;
  option: object[];
  onChange?: (value: Event) => void;
}
interface Iobjects {
  value: Event | null | undefined;
  label: string;
}
const App: React.FunctionComponent<IAppProps> = (props) => {
  const [items, setItems] = useState<Iobjects[]>([]);
  const filiter = (option: any[]): any[] => {
    let arr = option.map((item: any) => {
      return { value: item.code, label: item.name };
    });
    return arr;
  };
  useEffect(() => {
    setItems(filiter(props.option));
  }, [props.option]);
  return (
    <Select
      defaultValue={items[0]?.value}
      style={{ width: 120 }}
      onChange={props.onChange}
      options={items}
      {...props}
    />
  );
};

export default App;
