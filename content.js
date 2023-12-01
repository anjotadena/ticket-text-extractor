chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, "REQUEST!");
    if (request.action === 'extractText') {
        const idField = document.querySelector('[aria-label="ID Field"]');
        const titleField = document.querySelector('[aria-label="Title Field"]');
        
        if (idField && titleField) {
            const text = `${idField.textContent.trim()}-${titleField.value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`;
        
            // Create a temporary textarea element to store the text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
        
            // Select the text in the textarea
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length);
        
            // Copy the selected text to the clipboard
            document.execCommand('copy');
        
            // Remove the temporary textarea element
            document.body.removeChild(textarea);
        
            // Log the copied text to the console
            console.log(`Copied to clipboard: ${text}`);
        
            // Notify the background script or popup about the copied text
            chrome.runtime.sendMessage({ action: 'displayText', text });
          } else {
            console.error('ID Field or Title Field not found');
          }
    }
});
