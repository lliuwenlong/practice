
// 饿汉模式-加载的时候就加载
export class SingletonII {
    private static single: SingletonII;
    constructor () {}
    public static getInstance (): SingletonII {
        return SingletonII.single;
    }
}