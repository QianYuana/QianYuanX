import { Collapse } from 'antd';
import * as React from 'react';
import './index.less';

const { Panel } = Collapse;

interface IAppProps {
  title: string;
  children?: React.ReactNode;
  defaultActiveKey?: string[];
  bordered?: boolean;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Collapse
      defaultActiveKey={props.defaultActiveKey}
      bordered={props.bordered || true}
      style={{ marginBottom: 10 }}
    >
      <Panel header={props.title} key="1" showArrow={false} collapsible="icon">
        {props.children ? props.children : null}
      </Panel>
    </Collapse>
  );
};

export default App;
