document.getElementById('changeColorButton').addEventListener('click', function() {
  let colorCode = document.getElementById('colorInput').value;

  console.log("Popup: Saving color to storage");
  chrome.storage.sync.set({ 'selectedColor': colorCode }, function() {
    console.log("Popup: Color saved to storage");
  });

  console.log("Popup: Sending message to background script");
  chrome.runtime.sendMessage({ action: 'changeColor', color: colorCode });
});