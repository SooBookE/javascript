const id1 = setTimeout(()=>console.log('5초 뒤에 실행 됨'),5001);
let count = 0;
const id2 = setInterval(()=>{count++;console.log(`[${count}번째] 1초마다 실행 됨`)},1000);
console.log(id1);
setTimeout(()=>{
    clearTimeout(id1);
    clearInterval(id2)}
    ,8000);

    // 엔진마다 성능 차가 나온다...
    // 크롬엔진에서 사용하는게 더 정확한 시간으로 나오더라.