let list = '';
let table = '';
let table2 = '';
//문잔데 공백조차 없다


console.log(typeof(list));
list += '<ul>';
list += '<li>Hello 반갑다는 뜻이야!</li>';
list += '<li>JavaScript로 작성되었어!</li>';
list += '</ul>';
document.write(list);
// write 메소드로 list를 브라우저에 표시해준다

table += '<h2>&& and</h2>';
table += '<table class="a">';
// 콜랩스 적용을 위해 클래스를 선언했다.
    table += '<tr>';
        table += '<td>false</td>';
        table += '<td>false</td>';
        table += '<td>false</td>';
    table += '</tr>';

    table += '<tr>';
        table += '<td>true</td>';
        table += '<td>false</td>';
        table += '<td>false</td>';
    table += '</tr>';
        
    table += '<tr>';
        table += '<td>false</td>';
        table += '<td>true</td>';
        table += '<td>false</td>';
    table += '</tr>';

    table += '<tr>';
        table += '<td>true</td>';
        table += '<td>true</td>';
        table += '<td>true</td>';
    table += '</tr>';
table += '</table>';
document.write(table);
// document.write(list); 아무데나 놔도 됨


table2 += '<h2>|| or</h2>';
table2 += '<table>';
    table2 += '<tr>';
        table2 += '<td>false</td>';
        table2 += '<td>false</td>';
        table2 += '<td>false</td>';
    table2 += '</tr>';

    table2 += '<tr>';
        table2 += '<td>true</td>';
        table2 += '<td>false</td>';
        table2 += '<td>false</td>';
    table2 += '</tr>';
        
    table2 += '<tr>';
        table2 += '<td>false</td>';
        table2 += '<td>true</td>';
        table2 += '<td>false</td>';
    table2 += '</tr>';

    table2 += '<tr>';
        table2 += '<td>true</td>';
        table2 += '<td>true</td>';
        table2 += '<td>true</td>';
    table2 += '</tr>';
table2 += '</table>';
document.write(table2);
//브라우저에서 검사하면 body에도 작성이 되어있다.