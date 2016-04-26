function mParse() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("parsemail");
  var label = GmailApp.getUserLabelByName("Тест Натяжные потолки");
  var threads = label.getThreads();
    
  for (var i=0; i<threads.length; i++)
  {
    var messages = threads[i].getMessages(); // берем все сообщения из цепочки
    for (var j=0; j<messages.length; j++) // для каждого сообщения из цепочки
    {
      if (messages[j].isUnread()==true) 
      {
      //var msg = messages[j].getBody(); // парсит в HTML
      var msg = messages[j].getPlainBody();
      var sub = messages[j].getSubject();
      var dat = messages[j].getDate();
      sheet.appendRow([dat, sub, msg])
      messages[j].markRead();  // маркируем сообщение как прочитанное     
      }
    } 
    //threads[i].removeLabel(label); // удалить ярлык с сообщения
  }
}
