let table = '';
let bool = prompt('true or false');
// prompt에서 받는 데이터는 웬만하면 문자열로 받기 때문에 불리언 타입으로 바꿔줘야 제대로 작동됨
table += `<table><tr><td>${bool}</td><td>&&</td><td>false</td><td>일때 결과는</td><td>${false && bool}</td></tr>`;
table += `<tr><td>${bool}</td><td>&&</td><td>true</td><td>일때 결과는</td><td>${true && bool}</td></tr></table>`;
table += `<br>`
table += `<table><tr><td>${bool}</td><td>||</td><td>false</td><td>일때 결과는</td><td>${false || bool}</td></tr>`;
table += `<tr><td>${bool}</td><td>||</td><td>true</td><td>일때 결과는</td><td>${true || bool}</td></tr></table>`;

document.write(table);

document.write(`<br><table><tr><td>${bool}</td><td>&&</td><td>false</td><td>일때 결과는</td><td>${false&&bool}</td></tr><tr><td>${bool}</td><td>&&</td><td>true</td><td>일때 결과는</td><td>${true && bool}</td></tr></table>`);



// 만들어진 부분은 html인데 여기서 작성하는 이유는 변하는 데이터는 html에서 작성 불가능이므로 js로 코딩해주는 것

// ${} 안에 false와 bool이 왜 순서가 저런지는 js의 특성인데 https://velog.io/@proshy/JS%EC%9E%98%EB%AA%BB-%EC%95%8C%EA%B3%A0-%EC%9E%88%EC%97%88%EB%8D%98-%EB%85%BC%EB%A6%AC%EC%97%B0%EC%82%B0%EC%9E%90
// 위의 링크에서 확인해볼 것!! 결론은 논리연산에서는 앞의 변수의 속성을 기준으로 뒤의 값을 변환해 비교를 한다는 것!

//상수는 선언할 때 할당을 미리해야 패키징이 됨. 변수는 선언만 먼저하고 할당은 나중에 해도 ㄱㅊ