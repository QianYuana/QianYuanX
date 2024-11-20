import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import type {
  RGLine,
  RGLink,
  RGNode,
  RGNodeSlotProps,
  RGOptions,
  RelationGraphExpose,
} from 'relation-graph-react';
import RelationGraph from 'relation-graph-react';

const staticJsonData = {
  rootId: '2',
  nodes: [
    { id: '1', text: '节点-1', myicon: 'el-icon-star-on' },
    {
      id: '2',
      text: '节点-2',
      myicon: 'el-icon-setting',
      width: 100,
      height: 100,
    },
    { id: '3', text: '节点-3', myicon: 'el-icon-setting' },
    { id: '4', text: '节点-4', myicon: 'el-icon-star-on' },
    { id: '6', text: '节点-6', myicon: 'el-icon-setting' },
    { id: '7', text: '节点-7', myicon: 'el-icon-setting' },
    { id: '8', text: '节点-8', myicon: 'el-icon-star-on' },
    { id: '9', text: '节点-9', myicon: 'el-icon-headset' },
    { id: '71', text: '节点-71', myicon: 'el-icon-headset' },
    { id: '72', text: '节点-72', myicon: 'el-icon-s-tools' },
    { id: '73', text: '节点-73', myicon: 'el-icon-star-on' },
    { id: '81', text: '节点-81', myicon: 'el-icon-s-promotion' },
    { id: '82', text: '节点-82', myicon: 'el-icon-s-promotion' },
    { id: '83', text: '节点-83', myicon: 'el-icon-star-on' },
    { id: '84', text: '节点-84', myicon: 'el-icon-s-promotion' },
    { id: '85', text: '节点-85', myicon: 'el-icon-sunny' },
    { id: '91', text: '节点-91', myicon: 'el-icon-sunny' },
    { id: '92', text: '节点-82', myicon: 'el-icon-sunny' },
    { id: '5', text: '节点-5', myicon: 'el-icon-sunny' },
  ],
  lines: [
    { from: '7', to: '71', text: '投资' },
    { from: '7', to: '72', text: '投资' },
    { from: '7', to: '73', text: '投资' },
    { from: '8', to: '81', text: '投资' },
    { from: '8', to: '82', text: '投资' },
    { from: '8', to: '83', text: '投资' },
    { from: '8', to: '84', text: '投资' },
    { from: '8', to: '85', text: '投资' },
    { from: '9', to: '91', text: '投资' },
    { from: '9', to: '92', text: '投资' },
    { from: '1', to: '2', text: '投资' },
    { from: '3', to: '1', text: '高管' },
    { from: '4', to: '2', text: '高管' },
    { from: '6', to: '2', text: '高管' },
    { from: '7', to: '2', text: '高管' },
    { from: '8', to: '2', text: '高管' },
    { from: '9', to: '2', text: '高管' },
    { from: '1', to: '5', text: '投资' },
  ],
};

const NodeSlot: React.FC<RGNodeSlotProps> = ({ node }) => {
  console.log('NodeSlot:');
  if (node.id === '2') {
    // if rootNode
    return (
      <div
        style={{
          zIndex: 555,
          opacity: 0.5,
          lineHeight: '100px',
          width: '100px',
          height: '100px',
          color: '#000000',
          borderRadius: '50%',
          boxSizing: 'border-box',
          fontSize: '18px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: node.data!.percent * 100 + '%',
            marginTop: (1 - node.data!.percent) * 100 + '%',
            background: 'linear-gradient(to bottom, #00FFFF, #FF00FF)',
          }}
        >
          {node.text}
        </div>
      </div>
    );
  }
  return (
    <div style={{ lineHeight: '80px', textAlign: 'center' }}>
      <span>{node.text}</span>
    </div>
  );
};

const RelationGraphs: React.FunctionComponent = (props) => {
  const graphRef = useRef() as MutableRefObject<RelationGraphExpose>;
  useEffect(() => {
    showGraph();
  }, []);
  const showGraph = async () => {
    await graphRef.current.setJsonData(staticJsonData, (graphInstance) => {});
  };
  const options: RGOptions = {
    debug: true,
    defaultLineShape: 1,
    layout: {
      layoutName: 'center',
      maxLayoutTimes: 3000,
    },
    defaultExpandHolderPosition: 'right',
  };
  const onNodeClick = (node: RGNode, _e: MouseEvent | TouchEvent) => {
    // console.log('onNodeClick:', node, node.text);
    return true;
  };
  const onLineClick = (
    line: RGLine,
    _link: RGLink,
    _e: MouseEvent | TouchEvent,
  ) => {
    // console.log('onLineClick:', line, line.text, line.from, line.to);
    return true;
  };
  return (
    <div>
      <div style={{ height: 'calc(100vh - 0px)' }}>
        <RelationGraph
          ref={graphRef}
          options={options}
          nodeSlot={NodeSlot}
          onNodeClick={onNodeClick}
          onLineClick={onLineClick}
        />
      </div>
    </div>
  );
};

export default RelationGraphs;
