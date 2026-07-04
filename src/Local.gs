const Local={
enviar(datos){
 const sh=hoja('Consignaciones');
 const fila=Base.primeraFilaLibre(sh);
 sh.getRange(fila,1,1,8).setValues([[
 new Date(),datos.local,datos.codigo,datos.producto,datos.cantidad,0,0,datos.cantidad
 ]]);
}
};