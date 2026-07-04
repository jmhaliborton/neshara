function registrarVenta(datos){
  Venta.registrar(datos);
}

function enviarAConsignacion(datos){
  Local.enviar(datos);
}

function actualizarDashboard(){
  Dashboard.actualizar();
}


/* =====================================
   SIDEBAR
===================================== */

function abrirSidebar() {

  const template = HtmlService.createTemplateFromFile("SidebarView");

  const html = template
    .evaluate()
    .setTitle("📿 Neshara Studio");

  SpreadsheetApp
    .getUi()
    .showSidebar(html);

}


/* =====================================
   INCLUDE HTML
===================================== */

function include(nombre) {

  return HtmlService
    .createHtmlOutputFromFile(nombre)
    .getContent();

}


/* =====================================
   DEVOLVER VISTAS
===================================== */

function vista(nombre){

  return HtmlService
    .createHtmlOutputFromFile(nombre)
    .getContent();

}

function obtenerVistaDashboard(){

  return vista("DashboardView");

}

function obtenerVistaProductos(){

  return vista("ProductosView");

}

function obtenerVistaMateriales(){

  return vista("MaterialesView");

}

function obtenerVistaRecetas(){

  return vista("RecetasView");

}

function obtenerVistaVentas(){

  return vista("VentasView");

}

function obtenerVistaLocales(){

  return vista("LocalesView");

}

function obtenerVistaProductoForm(){

  return vista("ProductoFormView");

}