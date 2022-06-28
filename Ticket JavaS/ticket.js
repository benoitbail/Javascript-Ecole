var prix_boisson; /* créer les variables pour ensuite leur donner leur rôle*/
var quantité_boisson;
var prix_plat;
var quantité_plat;
var prix_supplément;
var quantité_supplément;
var stock_boisson = 10;
var stock_plat = 10;
var stock_supplément = 10;
var total_ht;
var tva;
var total_ttc;
var stock_boisson_reste;
var stock_plat_reste;
var stock_supplément_reste;

/* boisson */
var prix_boisson = prompt ("prix_boisson"); /* prompt affiche le message "prix_boisson"*/
document.write ("le prix est de: "); /*affiche le message pour que l'on entre une donné : le prix*/
document.write (prix_boisson);
document.write (" € "); /* ajoute "€" derrière le chiffre "prix"*/
document.write ("</br></br>"); /* va à la ligne  : pour éviter les chiffres collés par ex.*/
document.write ("la quantité est de: "); /* indique la quantité commandée */
var quantité_boisson = prompt("quantité_boisson");
document.write (quantité_boisson);
document.write ("</br></br>");
while (quantité_boisson > stock_boisson) /* on crée une boucle pour les stocks...*/
{
    alert ("stock insuffisant"); /* un message d'erreur apparaît si le stock est insuffisant*/
    document.write ("</br></br>");
    document.write ("erreur ");
    document.write ("</br></br>");
    document.write ("stock_restant: ");
    document.write (stock_boisson);
    document.write ("</br></br>");
    var quantité_boisson = prompt("quantité_boisson");
    document.write ("la quantité est de: ");
    document.write (quantité_boisson);
}
document.write ("</br></br>");
var prix_boisson = (prix_boisson * quantité_boisson);
document.write ("prix total boisson: ");
document.write (prix_boisson);
document.write (" € ");
document.write ("</br></br>");
document.write ("</br></br>");

/* Plat */
var prix_plat = prompt ("prix_plat");
document.write ("le prix est de: ");
document.write (prix_plat);
document.write (" € ");
document.write ("</br></br>");
document.write ("la quantité est de: ");
var quantité_plat = prompt("quantité_plat");
document.write (quantité_plat);
document.write ("</br></br>");
while (quantité_plat > stock_plat) 
{
    alert ("stock insuffisant");
    document.write ("</br></br>");
    document.write ("erreur");
    document.write ("</br></br>");
    document.write ("stock_restant: ");
    document.write (stock_plat);
    document.write ("</br></br>");
    var quantité_plat = prompt("quantité_plat");
    document.write ("la quantité est de: ");
    document.write (quantité_plat);
}
document.write ("</br></br>");
var prix_plat = (prix_plat * quantité_plat);
document.write ("prix total plat: ");
document.write (prix_plat);
document.write (" € ");
document.write ("</br></br>");
document.write ("</br></br>");

/* supplément */
var prix_supplément = prompt ("prix_supplément");
document.write ("le prix est de: ");
document.write (prix_supplément);
document.write (" € ");
document.write ("</br></br>");
document.write ("la quantité est de: ");
var quantité_supplément = prompt ("quantité_supplément");
document.write (quantité_supplément);
document.write ("</br></br>");
while (quantité_supplément > stock_supplément)
{
    alert ("stock insuffisant");
    document.write ("</br></br>");
    document.write ("erreur");
    document.write ("</br></br>");
    document.write ("stock_restant: ");
    document.write (stock_supplément);
    document.write ("</br></br>");
    var quantité_supplément = prompt ("quantité_supplément");
    document.write ("la quantité est de: ");
    document.write (quantité_supplément);
}
document.write ("</br></br");
var prix_supplément = (prix_supplément * quantité_supplément);
document.write ("prix total supplément: ");
document.write (prix_supplément);
document.write (" € ");
document.write ("</br></br>");
document.write ("</br></br>");


/* Total ht et Total ttc */
document.write ("____________________________________"); /* permet d'avoir un trait de séparation pour plus de clarté à la lecture*/
document.write ("</br></br>");
var total_ht = (prix_boisson + prix_plat + prix_supplément);
document.write ("Total HT: ");
document.write (total_ht);
document.write (" € ");
document.write ("</br></br>");
var tva = prompt ("afficher une tva: ");
var tva = (total_ht * tva / 100);
document.write ("</br></br>");
document.write ("Total tva: ");
var tva = (tva);
document.write (tva);
document.write ("</br></br>");
var total_ttc = (total_ht + tva);
document.write ("Total: ");
document.write (total_ttc);
document.write (" € ");
document.write ("</br></br>");

/* stock */
document.write ("_____________________________________________");
document.write ("</br></br>");
var stock_boisson_reste = (stock_boisson - quantité_boisson);
document.write ("stock_boisson_reste: ");
document.write (stock_boisson_reste);
document.write ("</br></br>");
var stock_plat_reste = (stock_plat - quantité_plat);
document.write ("stock_plat_reste: ");
document.write (stock_plat_reste);
document.write ("</br></br>");
var stock_supplément_reste = (stock_supplément - quantité_supplément);
document.write ("stock_supplément_reste: ");
document.write (stock_supplément_reste);
document.write("</br></br>");

document.write ("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
document.write ("</br></br>");
document.write ("Merci pour votre visite et à très bientôt... ");











