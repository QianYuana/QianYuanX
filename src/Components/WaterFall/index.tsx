import * as React from 'react';
import { useEffect, useState } from 'react';
import './index.less';
interface IAppProps {
  cols: number;
  data?: object[] | string[];
  style?: object;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [arrs, setArrs] = useState<
    Array<Array<{ id: number; title: string; thumbnailUrl: string }>>
  >([]);
  const filiter = (arr: any[]) => {
    let num = 0;
    let newArr =
      arrs.length === 0
        ? new Array(props.cols).fill([]).map(() => [])
        : [...arrs];
    arr.forEach((element: any) => {
      newArr[num].push(element);
      num = (num + 1) % props.cols;
    });
    setArrs(newArr);
  };
  useEffect(() => {
    if (props.data) {
      filiter(props.data);
    }
  }, [props.data]);
  return (
    <div className="app-1">
      <h1>瀑布流布局</h1>
      <ul className="grid">
        {arrs &&
          arrs.map((item) => (
            <li key={JSON.stringify(item)}>
              {item &&
                item.map((item1) => (
                  <div key={item1.id} className="grid-item">
                    <img src={item1.thumbnailUrl} alt={item1.title} />
                  </div>
                ))}
            </li>
          ))}
      </ul>
    </div>
  );
};
App.defaultProps = {
  cols: 2,
  style: {},
};

export default App;
