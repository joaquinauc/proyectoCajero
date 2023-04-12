"use strict"

// SELECCIÓN DE LOS NODOS DE HTML
const cuentaMali = document.querySelector(".cuentaMali");
const cuentaGera = document.querySelector(".cuentaGera");
const cuentaMaui = document.querySelector(".cuentaMaui");

const menuMali = document.querySelector(".menuMali");
const menuGera = document.querySelector(".menuGera");
const menuMaui = document.querySelector(".menuMaui");

const consultMali = document.querySelector(".consultMali");
const consultGera = document.querySelector(".consultGera");
const consultMaui = document.querySelector(".consultMaui");

const depositMali = document.querySelector(".depositMali");
const depositGera = document.querySelector(".depositGera");
const depositMaui = document.querySelector(".depositMaui");

const withdrawMali = document.querySelector(".withdrawMali");
const withdrawGera = document.querySelector(".withdrawGera");
const withdrawMaui = document.querySelector(".withdrawMaui");

const btnConsultMali = document.querySelector(".btn-consultMali");
const btnConsultGera = document.querySelector(".btn-consultGera");
const btnConsultMaui = document.querySelector(".btn-consultMaui");

const btnDepositMali = document.querySelector(".btn-depositMali");
const btnDepositGera = document.querySelector(".btn-depositGera");
const btnDepositMaui = document.querySelector(".btn-depositMaui");

const btnWithdrawMali = document.querySelector(".btn-whitdrawMali");
const btnWithdrawGera = document.querySelector(".btn-whitdrawGera");
const btnWithdrawMaui = document.querySelector(".btn-whitdrawMaui");

const overlayCuentaMali = document.querySelector(".overlayCuentaMali");
const overlayCuentaGera = document.querySelector(".overlayCuentaGera");
const overlayCuentaMaui = document.querySelector(".overlayCuentaMaui");

const overlayMenu = document.querySelector(".overlayMenu");
const overlayConsult = document.querySelector(".overlayConsult");
const overlayDeposit = document.querySelector(".overlayDeposit");
const overlayWithdraw = document.querySelector(".overlayWithdraw");

const mali = document.querySelector(".show-mali");
const gera = document.querySelector(".show-gera");
const maui = document.querySelector(".show-maui");

const btnCloseCuenta = document.querySelector(".closeCuenta");
const btnCloseMenu = document.querySelector(".closeMenu");
const btnCloseConsult = document.querySelector(".closeConsult");
const btnCloseDeposit = document.querySelector(".closeDeposit");
const btnCloseWithdraw = document.querySelector(".closeWithdraw");

/* MALI */

function openCuentaMali() {
    cuentaMali.classList.remove("hidden");
    overlayCuentaMali.classList.remove("hidden");
    return;
}

function closeCuentaMali() {
    cuentaMali.classList.add("hidden");
    overlayCuentaMali.classList.add("hidden");
    return;
}

function loginMali() {
    let password = document.getElementById("passwordMali").value;
    if (password == "qwerty") {
        menuMali.classList.remove("hidden");
        overlayMenu.classList.remove("hidden");
        cuentaMali.classList.add("hidden");
        overlayCuentaMali.classList.add("hidden");
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.")
    }
    return;
}

// Opciones de menú

function openConsultMali() {
    consultMali.classList.remove("hidden");
    overlayConsult.classList.remove("hidden");
    closeMenu();
    return;
}

function openDepositMali() {
    depositMali.classList.remove("hidden");
    overlayDeposit.classList.remove("hidden");
    closeMenu();
    return;
}

function openWithdrawMali() {
    withdrawMali.classList.remove("hidden");
    overlayWithdraw.classList.remove("hidden");
    closeMenu();
    return;
}

// Botones para regresar

function menuBackMali() {
    menuMali.classList.add("hidden");
    cuentaMali.classList.remove("hidden");
    return;
}

function consultBackMali() {
    consultMali.classList.add("hidden");
    depositMali.classList.add("hidden");
    withdrawMali.classList.add("hidden");
    menuMali.classList.remove("hidden");
    addOverlays();
    return;
}

function depositBackMali() {
    consultMali.classList.add("hidden");
    depositMali.classList.add("hidden");
    withdrawMali.classList.add("hidden");
    menuMali.classList.remove("hidden");
    addOverlays();
    return;
}

function withdrawBackMali() {
    consultMali.classList.add("hidden");
    depositMali.classList.add("hidden");
    withdrawMali.classList.add("hidden");
    menuMali.classList.remove("hidden");
    addOverlays();
    return;
}

/* GERA */

function openCuentaGera() {
    cuentaGera.classList.remove("hidden");
    overlayCuentaGera.classList.remove("hidden");
    return;
}

function closeCuentaGera() {
    cuentaGera.classList.add("hidden");
    overlayCuentaGera.classList.add("hidden");
    return;
}

function loginGera() {
    let password = document.getElementById("passwordGera").value;
    if (password == "123") {
        menuGera.classList.remove("hidden");
        overlayMenu.classList.remove("hidden");
        cuentaGera.classList.add("hidden");
        overlayCuentaGera.classList.add("hidden");
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.")
    }
    return;
}

// Opciones de menú

function openConsultGera() {
    consultGera.classList.remove("hidden");
    overlayConsult.classList.remove("hidden");
    closeMenu();
    return;
}

function openDepositGera() {
    depositGera.classList.remove("hidden");
    overlayDeposit.classList.remove("hidden");
    closeMenu();
    return;
}

function openWithdrawGera() {
    withdrawGera.classList.remove("hidden");
    overlayWithdraw.classList.remove("hidden");
    closeMenu();
    return;
}

// Botones para regresar

function menuBackGera() {
    menuGera.classList.add("hidden");
    cuentaGera.classList.remove("hidden");
    return;
}

function consultBackGera() {
    consultGera.classList.add("hidden");
    depositGera.classList.add("hidden");
    withdrawGera.classList.add("hidden");
    menuGera.classList.remove("hidden");
    addOverlays();
    return;
}

function depositBackGera() {
    consultGera.classList.add("hidden");
    depositGera.classList.add("hidden");
    withdrawGera.classList.add("hidden");
    menuGera.classList.remove("hidden");
    addOverlays();
    return;
}

function withdrawBackGera() {
    consultGera.classList.add("hidden");
    depositGera.classList.add("hidden");
    withdrawGera.classList.add("hidden");
    menuGera.classList.remove("hidden");
    addOverlays();
    return;
}

/* MAUI */

function openCuentaMaui() {
    cuentaMaui.classList.remove("hidden");
    overlayCuentaMaui.classList.remove("hidden");
    return;
}

function closeCuentaMaui() {
    cuentaMaui.classList.add("hidden");
    overlayCuentaMaui.classList.add("hidden");
    return;
}

function loginMaui() {
    let password = document.getElementById("passwordMaui").value;
    if (password == "html") {
        menuMaui.classList.remove("hidden");
        overlayMenu.classList.remove("hidden");
        cuentaMaui.classList.add("hidden");
        overlayCuentaMaui.classList.add("hidden");
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.")
    }
    return;
}

// Opciones de menú

function openConsultMaui() {
    consultMaui.classList.remove("hidden");
    overlayConsult.classList.remove("hidden");
    closeMenu();
    return;
}

function openDepositMaui() {
    depositMaui.classList.remove("hidden");
    overlayDeposit.classList.remove("hidden");
    closeMenu();
    return;
}


function openWithdrawMaui() {
    withdrawMaui.classList.remove("hidden");
    overlayWithdraw.classList.remove("hidden");
    closeMenu();
    return;
}

// Botones para regresar

function menuBackMaui() {
    menuMaui.classList.add("hidden");
    cuentaMaui.classList.remove("hidden");
    return;
}

function consultBackMaui() {
    consultMaui.classList.add("hidden");
    depositMaui.classList.add("hidden");
    withdrawMaui.classList.add("hidden");
    menuMaui.classList.remove("hidden");
    addOverlays();
    return;
}

function depositBackMaui() {
    consultMaui.classList.add("hidden");
    depositMaui.classList.add("hidden");
    withdrawMaui.classList.add("hidden");
    menuMaui.classList.remove("hidden");
    addOverlays();
    return;
}

function withdrawBackMaui() {
    consultMaui.classList.add("hidden");
    depositMaui.classList.add("hidden");
    withdrawMaui.classList.add("hidden");
    menuMaui.classList.remove("hidden");
    addOverlays();
    return;
}

/* CLOSE MENU */

function closeMenu() {
    menuMali.classList.add("hidden");
    overlayMenu.classList.add("hidden");
    menuGera.classList.add("hidden");
    overlayMenu.classList.add("hidden");
    menuMaui.classList.add("hidden");
    overlayMenu.classList.add("hidden");
    return;
}

/* CLOSE CONSULT */

function closeConsult() {
    consultMali.classList.add("hidden");
    overlayConsult.classList.add("hidden");
    consultGera.classList.add("hidden");
    overlayConsult.classList.add("hidden");
    consultMaui.classList.add("hidden");
    overlayConsult.classList.add("hidden");
    return;
}

/* CLOSE DEPOSIT */

function closeDeposit() {
    depositMali.classList.add("hidden");
    overlayDeposit.classList.add("hidden");
    depositGera.classList.add("hidden");
    overlayDeposit.classList.add("hidden");
    depositMaui.classList.add("hidden");
    overlayDeposit.classList.add("hidden");
    return;
}

/* CLOSE WITHDRAW */

function closeWithdraw() {
    withdrawMali.classList.add("hidden");
    overlayWithdraw.classList.add("hidden");
    withdrawGera.classList.add("hidden");
    overlayWithdraw.classList.add("hidden");
    withdrawMaui.classList.add("hidden");
    overlayWithdraw.classList.add("hidden");
    return;
}

/* FORMULA DEPOSIT */

function formulaDepositMali() {
    let balance=parseInt(document.getElementsByClassName("balanceMali")[0].value);
    let deposit=parseInt(document.getElementsByClassName("inputDepositMali")[0].value);
    let totalBalance = balance + deposit;

    if (totalBalance > 990) {
        balance -= deposit;
        alert("El saldo de la cuenta no puede exceder 990 pesos. Inténtelo de nuevo.");
    } else {
        alert(("Se ha depositado dinero a su cuenta con éxito. Su monto ingresado fue de ") + deposit + (" pesos. Y su nuevo saldo es de ") + totalBalance + (" pesos."));
    }

    document.getElementsByClassName("balanceMali")[0].value=(balance+deposit);
    return;
}

function formulaDepositGera() {
    let balance=parseInt(document.getElementsByClassName("balanceGera")[0].value);
    let deposit=parseInt(document.getElementsByClassName("inputDepositGera")[0].value);
    let totalBalance = balance + deposit;

    if (totalBalance > 990) {
        balance -= deposit;
        alert("El saldo de la cuenta no puede exceder 990 pesos. Inténtelo de nuevo.");
    } else {
        alert(("Se ha depositado dinero a su cuenta con éxito. Su monto ingresado fue de ") + deposit + (" pesos. Y su nuevo saldo es de ") + totalBalance + (" pesos."));
    }

    document.getElementsByClassName("balanceGera")[0].value=(balance+deposit);
    return;
}

function formulaDepositMaui() {
    let balance=parseInt(document.getElementsByClassName("balanceMaui")[0].value);
    let deposit=parseInt(document.getElementsByClassName("inputDepositMaui")[0].value);
    let totalBalance = balance + deposit;

    if (totalBalance > 990) {
        balance -= deposit;
        alert("El saldo de la cuenta no puede exceder 990 pesos. Inténtelo de nuevo.");
    } else {
        alert(("Se ha depositado dinero a su cuenta con éxito. Su monto ingresado fue de ") + deposit + (" pesos. Y su nuevo saldo es de ") + totalBalance + (" pesos."));
    }

    document.getElementsByClassName("balanceMaui")[0].value=(balance+deposit);
    return;
}

/* FORMULA WITHDRAW */

function formulaWithdrawMali() {
    let balance=parseInt(document.getElementsByClassName("balanceMali")[0].value);
    let withdraw=parseInt(document.getElementsByClassName("inputWithdrawMali")[0].value);
    let totalBalance = balance - withdraw;

    if (totalBalance < 10) {
        balance += withdraw;
        alert("El saldo de la cuenta no puede ser menor a 10 pesos. Inténtelo de nuevo.");
    } else {
        alert(("Se ha retirado dinero de su cuenta con éxito. El monto retirado fue de ") + withdraw + (" pesos. Y su nuevo saldo es de ") + totalBalance + (" pesos."));
    }

    document.getElementsByClassName("balanceMali")[0].value=(balance-withdraw);
    return;
}

function formulaWithdrawGera() {
    let balance=parseInt(document.getElementsByClassName("balanceGera")[0].value);
    let withdraw=parseInt(document.getElementsByClassName("inputWithdrawGera")[0].value);
    let totalBalance = balance - withdraw;

    if (totalBalance < 10) {
        balance += withdraw;
        alert("El saldo de la cuenta no puede ser menor a 10 pesos. Inténtelo de nuevo.");
    } else {
        alert(("Se ha retirado dinero de su cuenta con éxito. El monto retirado fue de ") + withdraw + (" pesos. Y su nuevo saldo es de ") + totalBalance + (" pesos."));
    }

    document.getElementsByClassName("balanceGera")[0].value=(balance-withdraw);
    return;
}

function formulaWithdrawMaui() {
    let balance=parseInt(document.getElementsByClassName("balanceMaui")[0].value);
    let withdraw=parseInt(document.getElementsByClassName("inputWithdrawMaui")[0].value);
    let totalBalance = balance - withdraw;

    if (totalBalance < 10) {
        balance += withdraw;
        alert("El saldo de la cuenta no puede ser menor a 10 pesos. Inténtelo de nuevo.");
    } else {
        alert(("Se ha retirado dinero de su cuenta con éxito. El monto retirado fue de ") + withdraw + (" pesos. Y su nuevo saldo es de ") + totalBalance + (" pesos."));
    }

    document.getElementsByClassName("balanceMaui")[0].value=(balance-withdraw);
    return;
}

// Cerrar menu con overlay
overlayMenu.addEventListener("click", closeMenu);

// Cerrar ventana con ESCAPE
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeCuentaMali(), closeCuentaGera(), closeCuentaMaui();
        closeMenu(), closeConsult(), closeDeposit(), closeWithdraw();
    }
})

/* AÑADIR OVERLAYS */

function addOverlays() {
    overlayConsult.classList.add("hidden");
    overlayDeposit.classList.add("hidden");
    overlayWithdraw.classList.add("hidden");
    overlayMenu.classList.remove("hidden");
    return;
}

/* BOTONES MALI */

mali.addEventListener("click", openCuentaMali);
btnCloseCuenta.addEventListener("click", closeCuentaMali);
overlayCuentaMali.addEventListener("click", closeCuentaMali);
overlayConsult.addEventListener("click", closeConsult);
overlayDeposit.addEventListener("click", closeDeposit);
overlayWithdraw.addEventListener("click", closeWithdraw);

/* BOTONES GERA */

gera.addEventListener("click", openCuentaGera);
btnCloseCuenta.addEventListener("click", closeCuentaGera);
overlayCuentaGera.addEventListener("click", closeCuentaGera);
overlayConsult.addEventListener("click", closeConsult);
overlayDeposit.addEventListener("click", closeDeposit);
overlayWithdraw.addEventListener("click", closeWithdraw);

/* BOTONES MAUI */

maui.addEventListener("click", openCuentaMaui);
btnCloseCuenta.addEventListener("click", closeCuentaMaui);
overlayCuentaMaui.addEventListener("click", closeCuentaMaui);
overlayConsult.addEventListener("click", closeConsult);
overlayDeposit.addEventListener("click", closeDeposit);
overlayWithdraw.addEventListener("click", closeWithdraw);