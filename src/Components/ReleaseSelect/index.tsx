/* eslint-disable no-param-reassign */

import { DatePicker, InputNumber, Select, Space, message } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
interface IProps {
  value: any;
  onChange: (value: any) => void;
}
interface sta {
  type: string;
  dayNum: number;
  time: any;
}
export default class ReleaseSelect extends Component<IProps> {
  // constructor(props:IProps | Readonly<IProps>) {
  //   super(props);
  // }
  state: sta = {
    type: 'day', //day 天，monents 日期
    dayNum: 0,
    time: '',
  };
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Select
          defaultValue={this.state.type}
          style={{
            width: 130,
            marginRight: 10,
          }}
          onChange={(value) => this.onRelease(value)}
          options={[
            {
              value: 'day',
              label: '几天以后',
            },
            {
              value: 'monents',
              label: '固定时间',
            },
          ]}
        />
        <InputNumber
          style={{
            width: 180,
            marginRight: 10,
            display: this.state.type === 'day' ? 'block' : 'none',
          }}
          placeholder="请输入"
          min={0}
          value={this.state.dayNum}
          onChange={(value: number | null) => {
            if (value === null || value < 0) {
              message.error('时间不能为空或不合法');
              value = 0;
            }
            this.setState({ type: 'day', dayNum: value }, () =>
              this.props.onChange(this.state),
            );
            console.log(value);
          }}
        />
        <Space direction="vertical">
          <DatePicker
            style={{
              width: 150,
              marginRight: 10,
              display: this.state.type === 'monents' ? 'block' : 'none',
            }}
            showTime={{
              format: 'HH:mm',
            }}
            value={this.state.time ? this.state.time : null}
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={this.disabledDate}
            onChange={this.onChangeData}
            onOk={this.onChangeData}
          />
        </Space>
      </div>
    );
  }
  onRelease = (value: any) => {
    if (value !== this.state.type) {
      this.setState(
        {
          type: value,
          time: '',
          dayNum: 0,
        },
        () => this.props.onChange(this.state),
      );
    }
  };
  onChangeData = (value: any) => {
    console.log(value);
    let datas = value ? moment(value._d).format('YYYY-MM-DD HH:mm:ss') : value;
    this.setState(
      {
        type: 'monents',
        time: value,
      },
      () => {
        this.props.onChange({ type: this.state.type, time: datas });
      },
    );
  };
  disabledDate = (current: any) => {
    return current && current < Date.now();
  };
}
