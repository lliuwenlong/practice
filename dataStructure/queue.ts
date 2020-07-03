abstract class QueueAbstract<T> {
    abstract enqueue(item: T): void;
    abstract dequeue(): void;
    abstract front(): T | never;
    abstract back(): T | never;
    abstract toStringData(): string;
    abstract isEmpty(): boolean;
}
class Queue<T> extends QueueAbstract<T> { 
    private data: Array<T> = [];
    get getData(): Array<T> {
        return this.data;
    }
    set setData (val: Array<T>) {
        this.data = val
    }

    constructor () {
        super();
        console.log(this.toStringData());
    }
    //队尾添加一个元素
    public enqueue (item: T) {
        this.data.push(item);
    }
    //队首删除一个元素
    public dequeue () {
        this.data.shift();
    }

    //读取队首元素
    public front (): T | never {
        if (this.isEmpty()) {
            return this.data[0];
        }
        return this.data[0];
    }

    //读取队尾元素
    public back (): T | never {
        if (this.isEmpty()) {
            return this.data[this.data.length - 1];
        }
    }

    public toStringData (): string {
        return this.data.toString();
    }

    //判断队列是否为空
    public isEmpty (): boolean {
        return this.data.length !== 0;
    }

    // 获取队列长度
    public getEnqueueLen(): number {
        return this.data.length;
    }
}

const queue: Queue<number> = new Queue<number>()
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.getData);
queue.dequeue();
console.log(queue.getData);
console.log(queue.front());
console.log(queue.back());
console.log(queue.toStringData())
console.log(queue.isEmpty())
console.log(queue.getEnqueueLen())

