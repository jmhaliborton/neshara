function registrarVenta(datos){Venta.registrar(datos);}
function enviarAConsignacion(datos){Local.enviar(datos);}
function actualizarDashboard(){Dashboard.actualizar();}
function abrirSidebar(){
 const html=HtmlService.createHtmlOutputFromFile('SidebarView').setTitle('Neshara Studio');
 SpreadsheetApp.getUi().showSidebar(html);
}

function include(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
