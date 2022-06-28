let i = 0;
while (i < 3) {
    alert( i );
    i++;
}

for (let i = 0; i < 3; i++) {alert(i);}


let sum = 0;
while (true){
    let value = +prompt("entrez un nombre", '');
    if (!value) break;
    sum += value;
}
alert( 'sum:' + sum );

for (let i = 0; i < 10; i++){
    if (i % 2 == 0) continue;
    alert(i);
}


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++){
let input = prompt(`Value at coords (${i},${j})`, '');
    }
}
alert('Done!');


