import { Cascader } from 'antd';
import { DataSource } from 'qianyuanx';
import React from 'react';

interface IAppProps {
  [x: string]: any;
}

const Cascaders: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Cascader
      placeholder="请选择省市区县"
      {...props}
      onChange={props.onChange}
      options={DataSource.RegionalDictionaryTable}
    />
  );
};

export default Cascaders;
