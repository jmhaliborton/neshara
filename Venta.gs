const Venta={
registrar(datos){
 const sh=hoja(CONFIG.SHEETS.VENTAS);
 const fila=Base.primeraFilaLibre(sh);
 sh.getRange(fila,1,1,7).setValues([[
 new Date(),datos.codigo,datos.producto,datos.precio,datos.medioPago,datos.lugar,datos.observaciones||''
 ]]);
}
};