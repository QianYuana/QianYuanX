import { AppstoreOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Input, Modal, Spin, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { TableTel } from 'qianyuanx';
import { GetRowKey, RowClassName, TableComponents } from './interface';
const { TextArea } = Input;
interface Table<RecordType = unknown> {
  total?: number;
  columns?: any[];
  bordered?: boolean;
  dataSource?: object[];
  onremove?: () => void;
  components?: TableComponents<RecordType>;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  rowKey?: GetRowKey<any> | any;
  rowSelection?: any;
  rowClassName?: RowClassName<RecordType>;
  pageSizeOptions?: string[];
  defaultPageSize?: number;
  defaultCurrent?: number;
}
interface IAppProps extends Table {
  loading: boolean;
  size?: 'large' | 'default' | 'small';
  maxRows?: number;
  children?: React.ReactNode;
  columns?: any[];
  dataSource?: object[];
  onChange: (page: number, pageSize: number) => void | void;
  onvalue: (value: any) => void;
  value?: any;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [size, setSize] = useState(props.size || 'default'); //图标尺寸
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [maxRows, setmaxRows] = useState(props.maxRows || 10); //最大行数
  const [openText, setOpenText] = useState<boolean>(false); //是否打开文本框
  const [isModalOpen, setIsModalOpen] = useState(false); //是否打开弹窗
  const [inputVal, setinputVal] = useState<string>(props.value || ''); //文本框的值
  const [textVal, settextVal] = useState<string>(''); //多行文本框的值
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]); //表格选中的行

  const textRef = useRef<HTMLDivElement>(null); //文本框的ref
  const dropRef = useRef<HTMLDivElement>(null); //点的ref
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      // 判断用户点击的对象是否在DOM节点内部
      if (divRef.current?.contains(e.target as Node)) {
        // console.log("点击了DOM里面区域");
        return;
      }
      //   console.log("点击DOM外面区域");
      setOpenText(false);
    };
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);
  useEffect(() => {
    if (openText) {
      console.log(dropRef.current);

      textRef.current?.focus();
    }
  }, [openText]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let Str = e.target.value.split(/[\n]+/);
    if (Str.length > maxRows) {
      Str = Str.slice(0, maxRows);
      message.destroy();
      message.error(`超出最大数据值${maxRows}条`);
    }
    setinputVal(Str.join(','));
    settextVal(Str.join('\n'));
    setSelectedRowKeys([]);
  };

  const handleOk = () => {
    if (selectedRowKeys.length > 0) {
      let str = selectedRowKeys.join(',');
      setinputVal(str);
    } else {
      setinputVal('');
    }
    settextVal('');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setSelectedRowKeys([]);
    setIsModalOpen(false);
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    if (Object.keys(props).includes('onvalue')) {
      props.onvalue(inputVal);
    }
  }, [inputVal]);
  return (
    <div style={{ position: 'relative' }}>
      <Input
        placeholder="请输入或选择"
        style={{ height: 29 }}
        suffix={
          <>
            <AppstoreOutlined
              style={{
                fontSize: size === 'large' ? 16 : size === 'small' ? 12 : 14,
              }}
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
          </>
        }
        value={inputVal}
      />
      <div
        ref={divRef}
        style={{
          position: 'absolute',
          left: 0,
          top: 29,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <EllipsisOutlined
          ref={dropRef}
          style={{
            fontSize: size === 'large' ? 16 : size === 'small' ? 12 : 14,
            height: 29,
            marginRight: 35,
            zIndex: 10,
            position: 'absolute',
            top: -22,
            right: 0,
          }}
          onClick={() => {
            if (!openText) {
              setOpenText(true);
            }
          }}
        />

        {openText && (
          <div
            style={{
              padding: '10px',
              backgroundColor: '#fff',
              borderRadius: '4px 0 0 4px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 999999,
            }}
          >
            <TextArea
              ref={textRef}
              placeholder="换行输入"
              style={{
                resize: 'none',
              }}
              value={textVal}
              autoSize={{
                minRows: 4,
                maxRows: maxRows,
              }}
              rows={4}
              allowClear
              onChange={onChange}
            />
          </div>
        )}
      </div>
      {isModalOpen && (
        <Spin tip="Loading..." spinning={props.loading}>
          <Modal
            title="选择数据"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width="1000px"
            // style={{
            //   width: "1000px",
            // left: `${window.innerWidth / 2 - 500}px`,
            // position: "fixed",
            // top: "100px",
            // transform: "none !importent",
            // }}
          >
            <div style={{ padding: '12px' }}>{props.children}</div>
            <TableTel
              {...props}
              columns={props.columns || []}
              bordered
              dataSource={props.dataSource || []}
              total={props.total || 0}
              rowKey={props.rowKey}
              rowSelection={rowSelection}
              onchange={(page: number, pageSize: number) => {
                props.onChange(page, pageSize);
              }}
            />
          </Modal>
        </Spin>
      )}
    </div>
  );
};

export default App;
