import { Button, Form, Modal, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import './main.css';
function ModalList(props: any) {
  const { open, loading, isloading } = props;
  const [List, setList] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    setList(props.data.listData);
  }, [props]);
  const onFinish = (values: any): any => {
    props.onFinish(values);
  };
  return (
    <Modal
      open={open}
      title={props.data.title}
      onCancel={() => props.onCancel()}
      footer={null}
      width={props.data.width || 520}
    >
      <Spin tip="Loading..." spinning={isloading || false}>
        <Form
          layout={props.data.layout}
          initialValues={props.data.initialValues}
          form={form}
          onFinish={onFinish}
        >
          {List &&
            List.map(({ label, name, render, rules, style }, index) => (
              <Form.Item
                label={label}
                name={name}
                key={index}
                rules={rules || []}
                style={style || {}}
              >
                {render}
              </Form.Item>
            ))}
          <Form.Item>
            <div className="subit">
              <Button htmlType="button" onClick={() => props.onCancel()}>
                取消
              </Button>
              <Button htmlType="submit" type="primary" loading={loading}>
                提交
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}

export default ModalList;
