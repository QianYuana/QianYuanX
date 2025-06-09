class HandPromise {
  state: string;
  value: undefined;
  reason: undefined;
  onFullfilledCallbacks: any[];
  onRejectedCallbacks: any[];
  constructor(exector: any) {
    this.state = 'pending';
    this.value = undefined; //临时保存resolve
    this.reason = undefined; //临时保存reject中的参数
    this.onFullfilledCallbacks = []; //装then里面的回调
    this.onRejectedCallbacks = []; //装catch里面的回调
    const resolve = (value: any) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFullfilledCallbacks.forEach((cb) => cb(value));
      }
    };
    const reject = (reason: any) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((cb) => cb(reason));
      }
    };
    exector(resolve, reject);
  }
  then(
    onFulfilled: (arg0: any) => any | null,
    onRejected: (arg0: any) => any | null,
  ) {
    (onFulfilled =
      typeof onFulfilled == 'function' ? onFulfilled : (value: any) => value),
      (onRejected =
        typeof onRejected == 'function'
          ? onRejected
          : (err: any) => {
              throw err;
            });
    return new HandPromise(
      (resolve: (arg0: any) => void, reject: (arg0: unknown) => void) => {
        if (this.state == 'fulfilled') {
          setTimeout(() => {
            //模拟异步,但是模拟不了微任务
            try {
              const res = onFulfilled(this.value);
              resolve(res);
            } catch (error) {
              reject(error);
            }
          });
        }
        if (this.state == 'rejected') {
          setTimeout(() => {
            //模拟异步,但是模拟不了微任务
            try {
              const res = onRejected(this.reason);
              resolve(res);
            } catch (error) {
              reject(error);
            }
          });
        }
        //将自己的回调存进onFullfilledCallbacks中
        if (this.state == 'pending') {
          this.onFullfilledCallbacks.push((value: any) => {
            setTimeout(() => {
              onFulfilled(value);
            });
          });
          this.onRejectedCallbacks.push((reason: any) => {
            setTimeout(() => {
              onRejected(reason);
            });
          });
        }
      },
    );
  }
  catch(onRejected: (arg0: undefined) => void) {
    return this.then(() => {}, onRejected);
  }
}
export default HandPromise;
