function mParseForm() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Тест");
  var label = GmailApp.getUserLabelByName("Лендинги/Натяжные потолки");
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
          
      if (content) {
      //if (content && message[j].isUnread()==true) {
  
      tmp = content.match(/phone:\s*((?:[48+][- ]?)?(?:\(?\d{3}\)?[- ]?)?[\d -]{7,10})/);
      var phone = (tmp && tmp[1]) ? tmp[1].trim() : 'No phone';
 
      tmp = content.match(/email:\s*([A-Za-z0-9@.]+)/);
      var email = (tmp && tmp[1]) ? tmp[1].trim() : 'No email';
 
      tmp = content.match(/comment:.*\n.*<p>\s*([\s\S]+?)(?=<\/p>)|productname:\s*([\s\S]+?)(?=<\/p>\n<p>phone)/);
      var comment = (tmp && tmp[1]) ? tmp[1] : 'No comment';
        
      tmp = content.match(/Ticket from site: <a href="([\s\S]+?)(?="\ target="_blank">)/);
      var url = (tmp && tmp[1]) ? tmp[1] : 'url error';        
         
      sheet.appendRow([dat, email, subject, phone, comment, url,""]);
      //message[j].markRead();  
     }

   }
 }
}  
