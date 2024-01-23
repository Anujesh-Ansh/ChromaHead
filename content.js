chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'changeColor') {
      let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
      headings.forEach(function(heading) {
        heading.style.color = request.color;
      });
    }
  });
  