// import fs from 'fs';
import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

interface IAppProps {
  [x: string]: any;
}

const DataSource: React.FunctionComponent<IAppProps> = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [currentLine, setCurrentLine] = useState(''); // 用于存储当前行的输入

  useEffect(() => {
    const term = new Terminal();
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current!);
    fitAddon.fit();

    term.writeln('欢迎使用终端！！！');

    term.onData((data) => {
      if (data === '\r') {
        // 检测回车键
        term.write('\r\n');
        setCurrentLine(''); // 重置当前行
      } else if (data === '\x7f') {
        // 检测退格键 (ASCII DEL)
        if (currentLine.length > 0) {
          const updatedLine = currentLine.slice(0, -1);
          setCurrentLine(updatedLine);
          // 处理终端显示的删除效果
          term.write('\b \b');
        }
      } else {
        // 添加字符到当前行，并显示在终端中
        setCurrentLine((prev) => prev + data);
        term.write(data);
        // fs.writeFileSync('./htX.json', JSON.stringify(data));
      }
    });
    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div style={{ height: '300px' }}>
      <div
        style={{
          height: '300px',
          width: '600px',
          background: 'black',
          padding: '10px 0 10px 10px',
        }}
        ref={terminalRef}
      ></div>
    </div>
  );
};

export default DataSource;
