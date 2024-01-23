chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  console.log("Background: Received message from popup");

  if (request.action === 'changeColor') {
    console.log("Background: Forwarding message to content script");
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tabs[0].id, { action: 'changeColor', color: request.color });
  }
});
