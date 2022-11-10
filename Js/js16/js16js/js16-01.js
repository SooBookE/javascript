// 리듀서로 어레이의 평균을 구하라
// reduce() 를 사용할 것
arr1=[12,46,23,57,12,54,62];
let sum=0;
let result=arr1.reduce((acc,cur,idx,ar)=>{
     avg=acc+cur;
     if(idx==ar.length-1){
        return avg/ar.length;
     }
     return acc+cur },0)

console.log(result);

// ???
const arr=[1,2,3,4,5,6];

const arr_rt=arr.reduce((a,c,i,ar)=>{
    avg = a + c;
    if(i==ar.length-1){
        return avg/ar.length;
    }
    return avg;
},0)
console.log(arr_rt);
// 강사님이 알려주신 평균 구하는 방법
