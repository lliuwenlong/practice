/**
 * @file 访问者模式: 定义在不改变该对象的前提下访问其结构中元素的新方法。
 */

// 编辑自己操作数组的方法
class Visitor {
    splice<T> (obj: T, ...arg: number[]): [] {
        return Array.prototype.splice.apply(obj, arg);
    }

    push<T, S> (obj: T, ...arg: Array<S>): any[] {
        const len: number = (obj as any).length === undefined ? 0 : (obj as any).length;
        const arr: Array<any> = this.splice<T>(obj, 0);
        Array.prototype.push.apply(arr, arg)
        return arr;
    }

    pop<T> (arr: T[]): T {
        return Array.prototype.pop.call(arr);
    }
};

const visitor = new Visitor();
const data: number[] = visitor.push<{}, number>({}, 1,2,3)
console.log(visitor.pop<number>(data));