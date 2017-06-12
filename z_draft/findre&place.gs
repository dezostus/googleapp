function replace() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  for (var sheetId = 0; sheetId<sheets.length; sheetId++){
    if(sheets[sheetId].getSheetName() == "google"){continue;}
    var range = sheets[sheetId].getRange("G16:G");
    var data = range.getValues();
     for (var row=0; row<data.length; row++) {
      for (var item=0; item<data[row].length; item++) {
      data[row][item] = data[row][item].replace(/\./g, ',');
      }
     }
  range.setValues(data);      
  }
}
