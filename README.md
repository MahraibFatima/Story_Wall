# Story Wall (Local)

A personal storytelling journal that lives in your browser. Start stories and add to them later - all stored locally on your device.

## Features

- **Private Stories**: All content stays in your browser (no server, no sharing).
- **Continue Anytime**: Add to your stories whenever inspiration strikes.
- **Auto-Completion**: Stories lock after 10 lines as "complete".
- **No Login Needed**: Everything works offline after first load.
- **Responsive Design**: Works on phones, tablets, and computers.

## How It Works

1. **Main Page** (`index.html`):
   - Type your story starter in the text box.
   - Click "Post" to save it.
   - View all your stories below.
   - Click "+ Add Line" on any unfinished story to continue writing.

2. **Add Line Page** (`add-line.html`):
   - See what you've written so far.
   - Add your next line in the text box.
   - Click "Submit" to save.
   - Returns you to the main page automatically.

## Important Notes

**Local Storage**: 
- Stories are saved ONLY in your current browser.
- Clearing browser data will delete your stories.
- Different browsers/devices won't share stories.

**Future Ideas**:
- Option to adjust the maximum story length (currently 10 lines).
- Support for images or media attachments.

## For Developers

### Technical Stack
- Vanilla HTML/CSS/JS.
- localStorage for persistence.
- Zero dependencies.

### File Structure
```
├── index.html          # Main interface
├── add-line.html       # Continuation page
├── style.css           # Shared styles
└── script.js           # Core logic
```

### Customization Ideas
1. Change max story length (edit `script.js`).
2. Modify colors/themes (`style.css`).
3. Add rich text formatting.

## Why This Exists

I created this to have:
- A private writing space.
- No account requirements.
- Simple interface that stays out of the way.
- Fun constraint of 10-line stories.

