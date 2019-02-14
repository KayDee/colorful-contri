chrome.runtime.onInstalled.addListener (function (details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'github.com', schemes: ['https']},
      })
      ],
          actions: [
            // new chrome.declarativeContent.ShowPageAction(),
            new chrome.declarativeContent.RequestContentScript({"js": ['index.js']})
          ]
    }]);
  });
});