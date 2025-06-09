import {
  CheckCircleFilled,
  PauseCircleFilled,
  PlayCircleFilled,
} from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import './sound.less';
function Index(props: any) {
  const { key, errKey, item, className } = props;
  const itemRef: React.RefObject<HTMLAudioElement> =
    useRef<HTMLAudioElement>(null);
  const [paused, setPaused] = useState(false);
  const audioUpdate = () => {
    setPaused(false);
  };
  return (
    <li
      key={key}
      className={`${'base'} ${className || ''}`}
      onClick={() => {
        props.onClick(key);
      }}
    >
      <span>{item?.name}</span>
      <div className="icon">
        {paused ? (
          <PauseCircleFilled
            style={{
              fontSize: '20px',
              marginLeft: '8px',
              color: errKey === item.status ? '#fff' : '',
            }}
            onClick={() => {
              itemRef.current?.pause();
              setPaused(false);
            }}
          />
        ) : (
          <PlayCircleFilled
            style={{
              fontSize: '20px',
              marginLeft: '8px',
              color: errKey === item.status ? '#fff' : '',
            }}
            onClick={() => {
              itemRef.current?.play();
              setPaused(true);
            }}
          />
        )}
        <audio
          ref={itemRef}
          src={item?.audio}
          onPause={() => audioUpdate()}
        ></audio>
        <CheckCircleFilled
          style={{
            fontSize: '20px',
            marginLeft: '8px',
            // eslint-disable-next-line eqeqeq
            color: errKey === item.status ? '#fff' : '',
          }}
        />
      </div>
    </li>
  );
}

export default Index;
