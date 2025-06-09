import { useEffect, useState } from 'react';

const useClickOutside = (ref: React.RefObject<any>): boolean => {
  const [isOutside, setIsOutside] = useState(false);

  const handleClickOutSide = (e: MouseEvent) => {
    // 判断用户点击的对象是否在DOM节点内部
    if (ref.current?.contains(e.target as Node)) {
      // console.log("点击了DOM里面区域");
      setIsOutside(true);
      return true;
    }
    //   console.log("点击DOM外面区域");
    setIsOutside(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [ref]);

  return isOutside;
};

export default useClickOutside;
