import { Button, Input, Select } from 'antd';
import * as React from 'react';
import { useState } from 'react';
interface IAppProps {
  onAdd: (value: object) => void;
  options?: { label: string; value: string }[];
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [data, setdata] = useState(''); //输入框的值
  const [sel, setSel] = useState(
    props.options ? props.options[0].value : 'Single',
  ); //选择器的值
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    if (value !== sel) {
      setdata('');
    }
    setSel(value);
  };
  const add = () => {
    props.onAdd({ data, sel });
  };
  const handleKeyPress = (event: { key: string }) => {
    console.log(event.key);
    if (event.key === 'Enter') {
      // 在这里执行你想要的逻辑，比如提交表单或者进行搜索
      console.log('Enter key pressed');
      add();
    }
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        value={sel}
        options={
          props.options || [
            {
              label: '单码',
              value: 'Single',
            },
            {
              label: '整码',
              value: 'Whole',
            },
          ]
        }
      />
      &nbsp;
      <Input
        placeholder="商品码"
        value={data}
        style={{ width: '180px' }}
        onChange={(e) => setdata(e.target.value)}
        onPressEnter={handleKeyPress}
      />
      <Button
        type="primary"
        onClick={add}
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 14,
          fontWeight: 700,
          margin: '0 4px',
        }}
      >
        +
      </Button>
    </div>
  );
};

export default App;
