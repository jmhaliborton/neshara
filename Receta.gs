const Receta={
agregar(item){
 const sh=hoja(CONFIG.SHEETS.RECETAS);
 const fila=Base.primeraFilaLibre(sh);
 const mats=hoja(CONFIG.SHEETS.MATERIALES).getDataRange().getValues();
 let costo=0,nombre='';
 for(let i=1;i<mats.length;i++){
   if(mats[i][0]===item.material){
     nombre=mats[i][2];
     costo=Number(mats[i][9]||0);
     break;
   }
 }
 sh.getRange(fila,1,1,8).setValues([[
 generarCodigo('R'),item.producto,item.material,nombre,
 item.cantidad,item.unidad,costo,costo*item.cantidad
 ]]);
 this.actualizarCostoProducto(item.producto);
},
actualizarCostoProducto(cod){
 const rec=hoja(CONFIG.SHEETS.RECETAS).getDataRange().getValues();
 let total=0;
 rec.slice(1).forEach(r=>{if(r[1]===cod) total+=Number(r[7]||0);});
 const prod=hoja(CONFIG.SHEETS.PRODUCTOS).getDataRange().getValues();
 const sh=hoja(CONFIG.SHEETS.PRODUCTOS);
 for(let i=1;i<prod.length;i++){
   if(prod[i][0]===cod){sh.getRange(i+1,8).setValue(total);break;}
 }
}
};