let number=0;
let id = 0;
let ct = 5;
// 전역 변수로 지정해줘야 여러 함수에서 동작 가능
let fn=()=>{
id=setInterval(()=>{
    console.log(`${ct}`);
    if(ct==1){
        alert('펑!');
        clearInterval(id);
        ct=5;
        return /*ct=5*//*,number=10;*/;
        // 종료되면 ct 값을 5로 되돌림.
        // return에는 여러 값들을 돌려 보낼 수 있다.
        // 그러나 함수에 할당되는 값은 맨 뒤의
        // 값이 할당된다.


        // return의 역할은
        // 1. 발동 했을 시 함수 종료
        // 2. 발동 했을 시 함수에 return값 할당
        // 의 기능을 수행한다...
    }
    --ct;
},1000);
}
let fnX=()=>{
    clearInterval(id);
    // 즉각 종료할 것이기 때문에 시간작성은 안 함.
    return ct=5;
}
    // ct 값을 5로 되돌림.
    
    // 리턴은 함수를 종료시키면서
    // 함수 자체에 값을 할당시킨다..?






// const id1=setInterval(()=>{console.log(`${ct}`);--ct},1000);
// setTimeout(()=>{clearInterval(id1)},5000);
// setTimeout(alert('펑!'),5000);