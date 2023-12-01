document.getElementById('extractBtn').addEventListener('click', () => {
    console.log("GESS xx ");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log("SEND MESSAGE");
        chrome.tabs.sendMessage(tabs[0].id, { action: 'extractText' });
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("GESS");
    if (request.action === 'displayText') {
        document.getElementById('result').textContent = request.text;
    }
});
