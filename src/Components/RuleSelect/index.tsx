import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CloseSquareFilled,
} from '@ant-design/icons';
import { Select } from 'antd';
import { ModalList, TagTel } from 'qianyuanx';
import React, { useState } from 'react';
interface IAppProps {
  options: any[];
  modalop: object;
  modalSelect: any;
  onRemove?: () => void;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [list, setlist] = useState<
    { attrName: any; attrCode: any; Lifting: string; uid: any }[]
  >([]);
  const [open, setopen] = useState(false);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const ListFiliter = (arr: any[]) => {
    //过滤数据
    let newArr: { attrName: any; attrCode: any; Lifting: string; uid: any }[] =
      [];
    arr.forEach((item: any) => {
      props.modalSelect.forEach((i: any) => {
        if (i.value === item) {
          newArr.push({
            attrName: i.label,
            attrCode: item,
            Lifting: 'asc',
            uid: i.value,
          });
        }
      });
    });
    return newArr;
  };
  const onFinish = (value: any) => {
    console.log(value);
    let data = ListFiliter(value.sortField);
    console.log([...list, ...data]);

    let arr = Array.from(
      new Set([...list, ...data].map((obj) => JSON.stringify(obj))),
    ).map((obj) => JSON.parse(obj));
    setlist(arr);
    setopen(false);
  };

  return (
    <div className="drag-select">
      <div className="up" style={{ display: 'flex', alignItems: 'center' }}>
        <Select
          defaultValue={props.options[0].value}
          style={{ width: '100%' }}
          onChange={handleChange}
          options={props.options}
        />
        <CloseSquareFilled
          style={{ marginLeft: 10, color: 'red', fontSize: 20 }}
          onClick={props.onRemove}
        />
      </div>
      <div className="down">
        {list &&
          list.map((item) => (
            <TagTel
              title={item.attrName}
              key={item.uid}
              icon={
                item?.Lifting === 'asc' ? (
                  <ArrowUpOutlined
                    style={{
                      color: 'rgba(112, 182, 3, 1)',
                      fontWeight: '700',
                      fontSize: 14,
                    }}
                  />
                ) : (
                  <ArrowDownOutlined
                    style={{
                      color: 'rgba(2, 167, 240, 1)',
                      fontWeight: '700',
                      fontSize: 14,
                    }}
                  />
                )
              }
              onSwitch={() => {
                let arr = [...list];
                arr[arr.indexOf(item)].Lifting =
                  item.Lifting === 'asc' ? 'desc' : 'asc';
                setlist(arr);
              }}
              onremove={() => {
                let arr = [...list];
                arr.splice(arr.indexOf(item), 1);
                setlist(arr);
              }}
            ></TagTel>
          ))}
        <a
          href="javascript:;"
          onClick={() => setopen(true)}
          style={{ display: 'inline-block', marginTop: '10px' }}
        >
          新增排序字段
        </a>
        {open && (
          <ModalList
            open={open}
            data={props.modalop} //配置项
            onFinish={onFinish}
            onCancel={() => {
              setopen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
