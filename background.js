function scrollToBottom(tab) {
  chrome.tabs.executeScript(tab.id, {
      code: 'window.scrollTo(0, document.body.scrollHeight);'
  });
}

chrome.browserAction.onClicked.addListener((tab) => scrollToBottom(tab));
