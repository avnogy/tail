function scrollToBottom(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      window.scrollTo(0, document.body.scrollHeight);
    },
  });
}

chrome.action.onClicked.addListener(scrollToBottom);
