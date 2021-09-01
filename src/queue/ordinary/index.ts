// 普通队列，first in -> first out
export default class Queue<T> {
  private list: T[] = [];

  // 向队列添加元素（一个或多个）
  enqueue(item: T | T[]) {
    if (Array.isArray(item)) {
      return (this.list = this.list.concat(item));
    }
    this.list.push(item);
  }

  // 从队列移除元素
  dequeue() {
    this.list.shift();
  }

  front = () => (this.list.length > 0 ? this.list[0] : "");

  isEmpty() {
    return !!!this.list.length;
  }

  size() {
    return this.list.length;
  }

  getList() {
    return this.list;
  }
}

const queue = new Queue<string>();
queue.enqueue("loy1");

queue.enqueue(["bike", "pino"]);

queue.dequeue();

console.log("list2====>", queue.getList());

// queue.dequeue();
// queue.dequeue();

console.log("empty===>", queue.isEmpty());
