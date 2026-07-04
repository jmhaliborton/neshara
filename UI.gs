function registrarVenta(datos){Venta.registrar(datos);}
function enviarAConsignacion(datos){Local.enviar(datos);}
function actualizarDashboard(){Dashboard.actualizar();}
function abrirSidebar() {

  const template = HtmlService.createTemplateFromFile("SidebarView");

  const html = template
      .evaluate()
      .setTitle("Neshara Studio");

  SpreadsheetApp.getUi().showSidebar(html);

}

function include(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
