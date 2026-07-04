const Material={
crear(datos){
 const sh=hoja(CONFIG.SHEETS.MATERIALES);
 const fila=Base.primeraFilaLibre(sh);
 const pref={Hilo:'HI',Piedra:'PI',Dije:'DI',Mostacilla:'MO',Packaging:'PK'}[datos.categoria]||'MA';
 const codigo=generarCodigo(pref);
 const costo=datos.cantidad?datos.costoCompra/datos.cantidad:0;
 sh.getRange(fila,1,1,12).setValues([[
 codigo,datos.categoria,datos.nombre,datos.marca,datos.color,datos.espesor,
 datos.unidad,datos.cantidad,datos.costoCompra,costo,datos.proveedor,''
 ]]);
 return codigo;
}
};