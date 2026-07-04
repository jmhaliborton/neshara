const Dashboard={
actualizar(){
 const dash=hoja(CONFIG.SHEETS.DASHBOARD);
 const ventas=hoja(CONFIG.SHEETS.VENTAS).getLastRow()-1;
 const productos=hoja(CONFIG.SHEETS.PRODUCTOS).getLastRow()-1;
 const materiales=hoja(CONFIG.SHEETS.MATERIALES).getLastRow()-1;
 dash.getRange('B3').setValue(ventas);
 dash.getRange('B5').setValue(productos);
 dash.getRange('B7').setValue(materiales);
}
};