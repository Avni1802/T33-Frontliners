console.log("Start of js");

function openNewTab() {
  console.log("Opening new tab");
  browser.tabs.create({
    'url':"https://meet.google.com/pjr-zxhf-gvo"
  });
}[4]


browser.browserAction.onClicked.addListener(openNewTab);