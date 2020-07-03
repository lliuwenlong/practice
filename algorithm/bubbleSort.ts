/**
 * @file 冒泡算法
 * @author liuwenlong
 */

 // 两两相比,符合不动位置,不符合直接换位置
const arr: number[] = [7, 1, 5, 8, 9];

function bubbleSort (arr: number[]): number[] {
    for (let i: number = 0; i < arr.length; i++) {
        let flag: boolean = true;
        // 第二层排好序的不处理
        for (let j: number = 0; j < arr.length - i - 1; j++) {
            const cur = arr[j];
            const next = arr[j + 1];
            if (next < cur) {
                arr[j] = next;
                arr[j + 1] = cur;
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
    return arr;
}
console.log(bubbleSort(arr));
