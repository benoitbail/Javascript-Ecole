let a = 2 + 2;

switch (a){
    case 3:
        alert( 'Too small');
    case 4:
        alert( 'Exactly!');
    case 5:
        alert( 'Too big');
    case 6:
        alert( '5');
    default:
        alert( "I don't know such values");
}
/* ajouter break pour arrêter la boucle*/



let arg = prompt("Enter a value?");
switch (arg) {
    case '0':
    case '1':
        alert('One or zero');
        break

    case '2':
        alert( 'Two');
        break;

    case 3:
        alert( 'Never executest!');
        break;
    default:
        alert( 'An unknown value');
}



let a = +prompt('a?', '');
switch (a){
    case 0:
        alert ( 0 );
        break

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}
