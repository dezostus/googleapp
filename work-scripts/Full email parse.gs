function mParse2() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Входящие заявки с форм");
  var label = GmailApp.getUserLabelByName("Лендинги/Ремонт квартир (мастера)");
  var threads = label.getThreads();

  for (var i=0; i<threads.length; i++)
  {
    var message = threads[i].getMessages(); // берем все сообщения из цепочки
    
    for (var j=0; j<message.length; j++)
    {
      var tmp,
      subject = message[j].getSubject(),
      content = message[j].getBody(),
      dat = message[j].getDate();
      
      //if (content) {
      if (content && message[j].isUnread()==true) {
 
      tmp = content.match(/phone:\s*((?:[48+][- ]?)?(?:\(?\d{3}\)?[- ]?)?[\d -]{7,10})/);
      var phone = (tmp && tmp[1]) ? tmp[1].trim() : 'No phone';
 
      tmp = content.match(/email:\s*([A-Za-z0-9@.]+)/);
      var email = (tmp && tmp[1]) ? tmp[1].trim() : 'No email';
 
      tmp = content.match(/comment:\s*([\s\S]+?)(?=<\/p>)/);
      var comment = (tmp && tmp[1]) ? tmp[1] : 'No comment';
 
      sheet.appendRow([dat, email, subject, phone, comment]);
      message[j].markRead();  
    
     } 
   }
 }
}  
