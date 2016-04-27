function mParse2() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("parsemail");
  var label = GmailApp.getUserLabelByName("Тест");
  var threads = label.getThreads();

  for (var i=0; i<threads.length; i++)
  {
    var message = threads[i].getMessages(); // берем все сообщения из цепочки
    
    for (var j=0; j<message.length; j++)
    {
      var tmp,
      subject = message[j].getSubject(),
      content = message[j].getPlainBody(),
      dat = message[j].getDate();
           
      if (content && message[j].isUnread()==true) {
 
      tmp = content.match(/Phone:\s*([A-Za-z0-9\s]+)(\r?\n)/);
      var phone = (tmp && tmp[1]) ? tmp[1].trim() : 'No phone';
 
      tmp = content.match(/Email:\s*([A-Za-z0-9@.]+)/);
      var email = (tmp && tmp[1]) ? tmp[1].trim() : 'No email';
 
      tmp = content.match(/Comment:\s*([\s\S]+)/);
      var comment = (tmp && tmp[1]) ? tmp[1] : 'No comment';
 
      sheet.appendRow([dat, email, subject, phone, comment]);
      message[j].markRead();  
    
     } 
   }
 }
}  
