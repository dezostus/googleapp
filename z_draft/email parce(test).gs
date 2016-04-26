function mParse2() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("parsemail");
  var label = GmailApp.getUserLabelByName("Тест");
  var threads = label.getThreads();

  for (var i=0; i<threads.length; i++)
  {
    var tmp,
      message = threads[i].getMessages()[0],
      subject = message.getSubject(),
      content = message.getPlainBody(),
      dat = message.getDate();
    
    for (var j=0; j<message.length; j++)
    {
    
      if (content) {
 
      tmp = content.match(/Телефон:(.*)?</i);
      var phone = (tmp && tmp[1]) ? tmp[1].trim() : 'No username';
 
      tmp = content.match(/Email:\s*([A-Za-z0-9@.]+)/);
      var email = (tmp && tmp[1]) ? tmp[1].trim() : 'No email';
 
      tmp = content.match(/Комментарий:(.*)?</i);
      var comment = (tmp && tmp[1]) ? tmp[1] : 'No comment';
 
      sheet.appendRow([dat, email, subject, phone, comment]);
      message[j].markRead();  
    
     } 
   }
 }
}  
