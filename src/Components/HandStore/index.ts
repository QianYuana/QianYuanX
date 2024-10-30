class Store {
  constructor(initialState: any) {
    this.state = { ...this.state, ...initialState };
    this.subscribers = []; // 用于存储订阅的回调函数
  }

  getState() {
    return this.state;
  }

  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    // 当状态更新时，通知所有订阅者
    this.subscribers.forEach((subscriber: (arg0: any) => any) =>
      subscriber(this.state),
    );
  }

  // 添加一个监听器
  subscribe(callback: any) {
    this.subscribers.push(callback);
    // 返回一个函数用于取消订阅
    return () => {
      const index = this.subscribers.indexOf(callback);
      if (index > -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }
}
export default Store;
