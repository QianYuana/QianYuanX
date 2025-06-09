import { Tag } from 'antd';
import * as React from 'react';

interface IAppProps {
  icon?: any;
  title?: string;
  onremove?: () => void;
  onSwitch?: () => void;
}

const TagTel: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Tag
      style={{
        marginTop: 10,
      }}
      closable
      onClose={props.onremove}
    >
      <span
        style={{
          display: 'inline-block',
          alignItems: 'center',
          lineHeight: '24px',
        }}
      >
        <span onClick={props.onSwitch}>{props.icon}&nbsp;&nbsp;</span>
        <span>{props.title}</span>
      </span>
    </Tag>
  );
};

export default TagTel;
