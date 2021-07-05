/**
 * 
 */
function openNav() {

    $('#mySidenav0').hide();
    $('#mySidenav1').hide();
    $('#mySidenav2').hide();
    $('#mySidenav3').hide();
    $('#mySidenav4').hide();
    document.getElementById("mySidenav").style.width = "30%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavSub(menu) {
    var subMenu = '#' + menu;
    if ($(subMenu).css('display') === 'none') {
        $(subMenu).show();
    } else {
        $(subMenu).hide();
    }
}