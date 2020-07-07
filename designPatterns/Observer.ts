/**
 * @file 观察者模式
 */
class Observer {
    private message: object =  {}
    
    // 注册event
    regist (type: string, fn: (e: object) => any | never) {
        if (this.message[type] === undefined) {
            this.message[type] = [];
        }
        this.message[type].push(fn);
        return this;
    }

    // 发布信息
    fire (type: string, arg: object) {
        if (this.message[type] === undefined) {
            Error("没有这个String")
        } else {
            this.message[type].forEach((fn: Function) => {
                fn(arg);
            });
        }
        return this;
    }

    // 移除
    remove (type: string, fn: Function) {
        console.log( this.message[type]);
        if (this.message[type] === undefined) {
            Error("没有这个String")
        }
        if (this.message[type].includes(fn)) {
            this.message[type].splice(this.message[type].indexOf(fn), 1)
        }
        console.log( this.message[type]);
        return this;
    }
};

const observer = new Observer();
function aaa(e) {
    console.log(e);
}
observer.regist("test", function (e) {
    console.log(1);
}).regist("test", aaa).fire("test", {a: 1}).remove("test", aaa);