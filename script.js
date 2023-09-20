function spamPerson() {
  var targetAddress = "email@example.com"; // Put address between those quotes
  var num = 250; // Put number of emails here between quotes
  var subject = ""; // Put subject line of email between these quotes
  var bodyText = ""; // Body text of emails goes here

  // Loops the script x many times.
  for (var i = 1; i <= num; i++) {
    // Creates the annoying email
    var draft = GmailApp.createDraft(targetAddress, subject + " email no. " + i, bodyText);
    
    // Sends the draft immediately
    draft.send();

    Logger.log(`Created and sent email no. ${i}`);
  }

  Logger.log(`Done creating and sending ${num} emails.`);
}
