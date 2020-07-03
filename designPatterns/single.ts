 // 懒汉模式-需要的时候加载
 export class Singleton {
    private static single: Singleton;
    constructor () {}
    public static getInstance () {
        if (Singleton.single === null) {
            Singleton.single = new Singleton();
        }
        return Singleton.single;
    }
}