import * as React from 'react';
// import type { PaginationProps } from "antd";
import { Pagination, Table } from 'antd';
// import type { ColumnsType } from "antd/es/table";
import { GetRowKey, RowClassName, TableComponents } from './interface';
interface IAppProps<RecordType = any> {
  total?: number;
  columns: any;
  bordered?: boolean;
  dataSource: object[];
  onchange?: (page: number, pageSize: number) => void;
  onremove?: () => void;
  components?: TableComponents<RecordType>;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  rowKey?: GetRowKey<any>;
  rowSelection?: any;
  rowClassName?: RowClassName<RecordType>;
  pageSizeOptions?: string[];
  defaultPageSize?: number;
  defaultCurrent?: number;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  // const onShowSizeChange: PaginationProps["onChange"] = (page, pageSize) => {
  //   // props.onchange? props.onchange(page, pageSize):null
  // };
  return (
    <>
      <Table pagination={false} {...props} />
      <div
        className="pagetion"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '20px',
        }}
      >
        <Pagination
          showSizeChanger
          showTotal={(total) => `共 ${total} 条`}
          onChange={props.onchange}
          defaultCurrent={props.defaultCurrent || 1}
          pageSizeOptions={props.pageSizeOptions || ['50', '100', '200', '500']}
          defaultPageSize={props.defaultPageSize || 50}
          total={props.total}
        />
      </div>
    </>
  );
};

export default App;
