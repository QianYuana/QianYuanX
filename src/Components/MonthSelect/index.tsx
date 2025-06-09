/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// 封装自定义月份组件
import { InputNumber, Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
const MonthSelect = (props: any) => {
  const [month, setmonth] = useState(false); //自定义时长
  const [time, settime] = useState(12); //月份
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    props.onChange(time);
    props.changTime ? props.changTime(time) : console.log();
  }, [time]);
  useEffect(() => {
    props.onChange(time);
  }, []);
  useEffect(() => {
    if (props.value == undefined) {
      settime(12);
    }
  }, [props.value]);
  const handleChange = (value: any) => {
    //自定义时长
    if (value == '自定义时长') {
      setmonth(true);
      settime(12);
    } else {
      month == true ? setmonth(false) : console.log();
      value == '一年（12个月）'
        ? settime(12)
        : value == '二年（24个月）'
        ? settime(24)
        : value == '三年（36个月）'
        ? settime(36)
        : '';
    }
  };
  const changemonth = (value: any) => {
    if (value != null) {
      settime(value);
    } else {
      message.info('月份不能为空');
    }
  };
  return (
    <>
      <Select
        defaultValue="一年（12个月）"
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={[
          {
            value: '一年（12个月）',
            label: '一年（12个月）',
          },
          {
            value: '二年（24个月）',
            label: '二年（24个月）',
          },
          {
            value: '三年（36个月）',

            label: '三年（36个月）',
          },
          {
            value: '自定义时长',
            label: '自定义时长',
          },
        ]}
      />
      <span style={{ display: month == true ? '' : 'none' }}>
        <InputNumber
          min={1}
          max={12}
          defaultValue={12}
          onChange={changemonth}
        />{' '}
        &nbsp;&nbsp;个月
      </span>
    </>
  );
};

export default MonthSelect;
