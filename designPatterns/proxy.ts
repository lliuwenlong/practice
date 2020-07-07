/**
 * @file 代理模式
 */

// 代理
class Mengtong {
    constructor (private noReception: string[] = []) {}
    // 接收礼物
    reception(gift) {
        console.log(`门童收到礼物：${gift}`);
        if (!!~this.noReception.indexOf(gift)) {
            console.log(`门童拒收`);
        } else {
            const my = new One();
            my.reception(gift);
        }
    }
}

// 只管接收，逻辑代理负责
class One {
    reception(gift) {
        console.log(`主人收到礼物：${gift}`)
    }
}
new Mengtong(["花"]).reception("钱")
