
function UPDATED__() {
  // .. ..2
}

__deps = () => {
  SpreadsheetApp.getActiveRangeList(); // ..
  DriveApp.getFolderById(); // ..
  DriveApp.createFolder();
  MailApp.sendEmail(); // ..
};
__$$dd = (...params) => ContentService.createTextOutput(JSON.stringify(params, null, 2)); // ..
doGet  = (e) => __$$dd('.. ..2 again!!! REDEPLOY ..' + 555); // ..
doPost = (e) => __$$dd(4567); // ..
