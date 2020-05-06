let date = new Date();
let month = date.getMonth();
switch (month) {
    case 0:
        month = "stycznia";
        break;
    case 1:
        month = "lutego";
        break;
    case 2:
        month = "marca";
        break;
    case 3:
            month = "kwietnia";
            break;
    case 4:
        month = "maja";
        break;
    case 5:
        month = "czerwca";
        break;
    case 6:
        month = "lipca";
        break;
    case 7:
        month = "sierpnia";
        break;
    case 8:
        month = "września";
        break;
    case 9:
        month = "października";
        break;
    case 10:
        month = "listopada";
        break;  
    case 11:
        month = "grudnia";
        break;
}
$(".data").html("dziś jest: "+date.getDate()+" "+month+" "+date.getFullYear());