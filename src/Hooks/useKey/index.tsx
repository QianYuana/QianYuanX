import { useLayoutEffect } from 'react';
import version from '../../../public/sysInfo.json';
export const AppVersion = version.version;
export default function useKey(code: string, callback: () => void) {
  const listener = (e: KeyboardEvent) => {
    if (e.code === code) callback();
  };
  useLayoutEffect(() => {
    console.log(AppVersion, '当前版本号');
    console.log(process.env, '当前环境');

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
}
