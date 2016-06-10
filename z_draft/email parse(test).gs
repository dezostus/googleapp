function mParseForm() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Inbox forms");
  var sheet2 = ss.getSheetByName("Inbox forms").getRange("A:G").getValues();
  var label = GmailApp.getUserLabelByName("Land/Gates");
  var threads = label.getThreads();
  var lr = getLastRow(sheet2);
  var newData = [];

  for (var i = 0; i < threads.length; i++) {
    var message = threads[i].getMessages(); // take all messages from chains

    for (var j = 0; j < message.length; j++) {
      var tmp,
        subject = message[j].getSubject(),
        content = message[j].getBody(),
        dat = message[j].getDate();

      //if (content) {
      if (content && message[j].isUnread() == true) {

        tmp = content.match(/phone:\s*((?:[48+][- ]?)?(?:\(?\d{3}\)?[- ]?)?[\d -]{7,10})/);
        var phone = (tmp && tmp[1]) ? tmp[1].trim() : 'No phone';

        tmp = content.match(/email:\s*([A-Za-z0-9@.].*)(?=<\/p>)/);
        var email = (tmp && tmp[1]) ? tmp[1].trim() : 'No email';

        tmp = content.match(/comment:\s*([\s\S]+?)(?=<\/p>\n<p>phone)/);
        var comment = (tmp && tmp[1]) ? tmp[1] : 'No comment';

        newData.push([dat, email, subject, phone, comment, ""]);
        message[j].markRead();
      }

    }
  }
  var dLenght = newData.length;
   if (dLenght > 0) {
   sheet.getRange(lr + 1, 1, newData.length, newData[0].length).setValues(newData);
   } 
}

