function checkForm(f) {
    alert("vous avez commandez : " + f.elements['boisson * quantité_boisson'].value + " " + f.elements['plat * quantité_plat'].value + " vous devez : " + f.elements['supplément * quantité_supplément'].value);
    return false;

    }