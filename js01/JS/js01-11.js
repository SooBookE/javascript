let a = 1;
let number = prompt("값을 입력하세요");
//prompt로 값을 입력하면 table에 적용되는 구문
let table = `<table><tr><th>증감 연산자</th><th>설명</th><th>예)let number = ${number}</th></tr><tr><td>변수++</td><td>기존의 변수 값에 1을 더합니다(후위)</td><td>alert(number++) 답: ${number++}</td></tr><tr><td>++변수</td><td>기존의 변수 값에 1을 더합니다.(전위)</td><td>alert(++number) 답: ${++number}</td></tr><tr><td>변수--</td><td>기존의 변수 값에 1을 뺍니다(후위)</td><td>alert(number--) 답: ${number--}</td></tr><tr><td>--변수</td><td>기존의 변수 값에 1을 뺍니다(전위)</td><td>alert(--number) 답: ${--number}</td></tr></table>`;
//증감연산자 사용예시를 응용해 변환 가능한 코드를 작성함.

document.write(table);
//복합 대입 연산자를 사용하지 않은 경우(1)

document.write(`<br><table><tr><th>증감 연산자</th><th>설명</th></tr><tr><td>변수++</td><td>기존의 변수 값에 1을 더합니다(후위)</td></tr><tr><td>++변수</td><td>기존의 변수 값에 1을 더합니다.(전위)</td></tr><tr><td>변수--</td><td>기존의 변수 값에 1을 뺍니다(후위)</td></tr><tr><td>--변수</td><td>기존의 변수 값에 1을 뺍니다(전위)</td></tr></table>`);
//복합 대입 연산자를 사용하지 않은 경우(2)
