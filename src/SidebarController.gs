function obtenerProductos(){const sh=hoja(CONFIG.SHEETS.PRODUCTOS);return sh.getRange(2,1,Math.max(sh.getLastRow()-1,0),5).getValues();}
function obtenerMateriales(){const sh=hoja(CONFIG.SHEETS.MATERIALES);return sh.getRange(2,1,Math.max(sh.getLastRow()-1,0),5).getValues();}
