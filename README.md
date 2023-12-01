# Ticket Number Generator Chrome Extension

## Description

The Ticket Number Generator Chrome Extension is a personal tool designed to simplify the process of creating ticket numbers. It extracts information from specific elements on a webpage, combining the ID and Title fields to generate a formatted ticket number. This extension is intended for personal use only.

## Features

- Extract text from elements with `aria-label="ID Field"` and `aria-label="Title Field"`.
- Generate a formatted ticket number by combining the ID and Title fields.
- Copy the generated ticket number to the clipboard.

## Installation

1. Download or clone the repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click on "Load unpacked" and select the directory where you downloaded the extension.

## Usage

1. Visit a webpage with elements having `aria-label="ID Field"` and `aria-label="Title Field"`.
2. Click on the extension icon in the Chrome toolbar.
3. In the popup, click the "Extract Text" button.
4. The generated ticket number will be displayed and copied to the clipboard.

## Personal Use Only

This extension is intended for personal use only. It helps streamline the process of creating ticket numbers for personal tasks and projects.

## Troubleshooting

If the extension is not working as expected, check the following:

- Ensure that the webpage has elements with the specified `aria-label` attributes.
- Open the Chrome Developer Tools (`Ctrl + Shift + I`), go to the Console tab, and check for any error messages.

## Contributing

As this extension is for personal use, contributions are not actively sought. Feel free to customize the extension for your personal needs.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** This README is a basic template. You may want to add more sections or details based on the specific features and requirements of your personal use case.
