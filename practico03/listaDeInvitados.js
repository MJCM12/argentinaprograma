
let listaInvitados = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia']

let invitadosAdmitidos = [];
let invitadosRechazados = [];


for (let i = 0; i < listaInvitados.length; i ++) {
    if (listaInvitados[i] === 'Jose' || listaInvitados[i] === 'Sofia') {
         invitadosRechazados.push(listaInvitados[i]);
    } else  {
        invitadosAdmitidos.push(listaInvitados[i]);
    } 
  }
 let bandera1 = 0;
 let bandera2 = 0;

  for (let i = 0; i < invitadosAdmitidos.length; i++) {
    if (bandera1 === 0) {
    console.log("La lista de invitados admitidos es ")
    console.log(invitadosAdmitidos[bandera1])
    bandera1 ++;
  }
    else {
      console.log(invitadosAdmitidos[i])
    }
  }

  for (let i = 0; i < invitadosRechazados.length; i++) {
    if (bandera2 === 0) {
    console.log("La lista de invitados rechazados es ")
    console.log(invitadosRechazados[bandera2])
    bandera2 ++;
  }
    else {
      console.log(invitadosRechazados[i])
    }
  }

  bandera1 = 0;
  bandera2 = 0;

  invitadosAdmitidos.sort();
  invitadosRechazados.sort();

  for (let i = 0; i < invitadosAdmitidos.length; i++) {
    if (bandera1 === 0) {
    console.log("La lista ordenada de invitados admitidos es ")
    console.log(invitadosAdmitidos[bandera1])
    bandera1 ++;
  }
    else {
      console.log(invitadosAdmitidos[i])
    }
  }

  for (let i = 0; i < invitadosRechazados.length; i++) {
    if (bandera2 === 0) {
    console.log("La lista ordenada de invitados rechazados es ")
    console.log(invitadosRechazados[bandera2])
    bandera2 ++;
  }
    else {
      console.log(invitadosRechazados[i])
    }
  }


