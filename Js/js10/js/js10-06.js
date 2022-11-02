let num=0;
    function updn(x){
        num+=x;

        /*    문제 발생!!   */


        // 아래의 해결 방법을 작성하지 않으면
        // 양수가 들어가면 그대로 도출
        // 음수가 들어가면 양수/음수 버튼이 자리가
        // 바뀌므로 아래의 구문을 작성해야 한다.


        if(x>0){
            x=x;
        } else{
            x=-x;
        }
        // 1번 방법: if-else 구문

        x>0?x=x:x=-x;
        // 2번 방법: 삼항연산자


        /*     문제 해결!!   */



        document.write(`<div>${num}</div><button onclick="updn(${x})">증가</button>
    <button onclick="updn(${-x})">감소</button>`);
        document.close();
        
        



    }