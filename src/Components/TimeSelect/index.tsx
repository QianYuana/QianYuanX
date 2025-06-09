/* eslint-disable eqeqeq */
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import './main.less';

//封装的日期组件
const TimeSelect = (props: { onChange: (arg0: any[]) => void; value: any }) => {
  const [vals, setvals] = useState<any[]>([]);
  useEffect(() => {
    props.onChange(vals);
  }, [vals]);
  useEffect(() => {
    // console.log(props.value);
    if (props.value == undefined) {
      setvals([]);
    }
  }, [props.value]);
  const disabledDate = (current: any) => {
    return current && current < vals[0];
  };
  const starttimechange: DatePickerProps['onChange'] = (date, dateString) => {
    //Wed Nov 08 2023 09:43:03 GMT+0800 (中国标准时间)
    console.log(date, dateString);

    vals.splice(0, 1, date);
  };
  const removetimechange: DatePickerProps['onChange'] = (date, dateString) => {
    //Wed Nov 08 2023 09:43:03 GMT+0800 (中国标准时间)
    console.log(date, dateString);
    vals.splice(1, 1, date);
  };

  return (
    <div className="search">
      <DatePicker
        onChange={starttimechange}
        format="YYYY-MM-DD "
        defaultValue={props.value ? props.value[0] : ''}
        value={vals[0]}
      />
      <span>-</span>
      <DatePicker
        format="YYYY-MM-DD "
        defaultValue={props.value ? props.value[1] : ''}
        disabledDate={disabledDate}
        onChange={removetimechange}
        value={vals[1]}
      />
    </div>
  );
};
export default TimeSelect;
