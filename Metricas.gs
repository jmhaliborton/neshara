const Metricas={
resumen(){
return{
productos:Math.max(hoja(CONFIG.SHEETS.PRODUCTOS).getLastRow()-1,0),
materiales:Math.max(hoja(CONFIG.SHEETS.MATERIALES).getLastRow()-1,0),
ventas:Math.max(hoja(CONFIG.SHEETS.VENTAS).getLastRow()-1,0)
};
}
};