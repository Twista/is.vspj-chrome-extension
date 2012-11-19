
function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('https://is.vspj.cz') == 0) {
		chrome.pageAction.show(tabId);
	}
};


chrome.tabs.onUpdated.addListener(checkForValidUrl);