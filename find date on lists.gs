function vLeads() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets(); 
  var sheetNames = ss.getSheetByName("List_1");
  var rangeNames = sheetNames.getRange("B3:B5").getValues();
  
   rangeNames.forEach(function(row) {
     var ActiveDate = ss.getSheetByName("Data").getRange("B1").getValues();
     var EndRow = ss.getSheetByName("Data").getRange("B3").getValue();
     var sheet = ss.getSheetByName (row[0]);
     var DataSheet = sheet.getDataRange().getValues();
       for(var j=0, jLen=DataSheet.length; j<jLen; j++) {
         if(DataSheet[j][0] == ActiveDate) {
         var rowNum = j+1;
         sheet.getRange(rowNum, 2, EndRow, 2).clear();
                             
       }
         } 
   });
  
}
