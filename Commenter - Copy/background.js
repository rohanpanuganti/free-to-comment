chrome.browserAction.onClicked.addListener(function(tab) {
  if(tab.url.slice(0,25) == "https://www.youtube.com/w"){
    
    var script = 'document.getElementById("myUrl").value = "'
    + tab.url + '";'
    + 'document.getElementById("myBtn").click()';
    
    chrome.tabs.create({ url: "https://free-comment.surge.sh" });
    
    chrome.tabs.query({'active': true, 'currentWindow': true},function (tabs) {
      if (tabs[0].url == "https://free-comment.surge.sh/"){
        chrome.tabs.executeScript({code: script});
      }
    });
  }
});

