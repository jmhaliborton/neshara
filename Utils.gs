function ss(){return SpreadsheetApp.getActive();}
function hoja(n){return ss().getSheetByName(n);}
function generarCodigo(p){const d=PropertiesService.getDocumentProperties();let n=Number(d.getProperty(p)||0)+1;d.setProperty(p,n);return `${p}-${String(n).padStart(6,'0')}`;}