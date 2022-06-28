
let fruits = ["pommes", "oranges", "citron"];

alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);

fruits[2] = 'cerises';

fruits[3] = 'kiwi';

alert (fruits);


/* pop enlève le dernier élément et le renvoie :

let fruits = ["pommes", "oranges", "citron",];
alert( fruits.pop() );
alert( fruits );
*/

/* push ajoute l'élément à la fin du tableau :

let fruits = ["pommes", "oranges"];
fruits.push("citron");
alert( fruits );
*/

/* shift extrait le 1er élément du tableau et le renvoie :

let fruits = ["pommes", "oranges", "citron"];
fruits( fruits.shift());
alert( fruits)
*/

/* unshift ajoute l'élément au début du tableau :

let fruits = ["oranges", "citron"];
fruits.unshift( 'pommes');
alert( fruits );
*/

/* push et unshift ajoutent plusieurs éléments à la fois :

let fruits = ["pommes"];
fruits.push("pommes", "oranges");
fruits.unshift("kiwi", "ananas");
alert( fruits );
*/





