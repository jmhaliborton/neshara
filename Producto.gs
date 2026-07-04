const Producto={
crear(datos){
 const sh=hoja(CONFIG.SHEETS.PRODUCTOS);
 const fila=Base.primeraFilaLibre(sh);
 const codigo=generarCodigo('N');
 sh.getRange(fila,1,1,14).setValues([[
  codigo,datos.nombre,datos.categoria,datos.coleccion,'Disponible',new Date(),
  datos.tiempo,0,0,0,0,1,'',''
 ]]);
 return codigo;
}
};