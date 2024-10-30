import { useEffect, useState } from 'react';

function observer(Component, store) {
  console.log(Component, store);

  return function ObserverComponent(props) {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
      const handleStateChange = () => {
        setState(store.getState());
      };

      const unsubscribe = store.subscribe(handleStateChange);

      // 清理函数，组件卸载时取消订阅
      return () => unsubscribe();
    }, [store]); // 依赖 props.store，确保只在 store 变化时重新订阅

    return Component({ ...props, state });
  };
}
export default observer;
