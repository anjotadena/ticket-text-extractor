chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'extractText') {
        const idField = document.querySelector('[aria-label="ID Field"]');
        const titleField = document.querySelector('[aria-label="Title Field"]');

        const text = {
            id: idField ? idField.textContent.trim() : 'Not found',
            title: titleField ? titleField.textContent.trim() : 'Not found'
        };

        chrome.runtime.sendMessage({ action: 'displayText', text });
    }
});
