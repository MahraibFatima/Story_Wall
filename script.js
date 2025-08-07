// ========== Global Variables ==========
let stories = JSON.parse(localStorage.getItem('stories')) || [];

// ========== DOM Elements ==========
const elements = {
  newStory: document.getElementById('newStory'),
  storiesContainer: document.getElementById('stories'),
  storyPreview: document.getElementById('story-preview'),
  newLine: document.getElementById('newLine')
};

// ========== Main Page Functions ==========
function initMainPage() {
  renderStories();
}

function addStory() {
  const text = elements.newStory.value.trim();
  if (!text) return;
  
  stories.push({
    id: Date.now(), // Unique ID for each story
    lines: [text],
    locked: false
  });
  
  saveStories();
  renderStories();
  elements.newStory.value = '';
}

function renderStories() {
  elements.storiesContainer.innerHTML = stories.map(story => `
    <div class="story">
      ${story.lines.map(line => `<div class="story-line">${line}</div>`).join('')}
      ${!story.locked ? 
        `<a href="add-line.html?storyId=${story.id}" class="add-line-btn">+ Add Line</a>` : 
        '<div class="locked-message">This story is complete!</div>'
      }
    </div>
  `).join('');
}

// ========== Add Line Page Functions ==========
function initAddLinePage() {
  const story = getCurrentStory();
  if (story) {
    renderStoryPreview(story);
  } else {
    showStoryNotFound();
  }
}

function submitLine() {
  const newLine = elements.newLine.value.trim();
  if (!newLine) {
    alert("Please enter text before submitting!");
    return;
  }

  const story = getCurrentStory();
  if (!story) {
    alert("Story not found!");
    return;
  }

  story.lines.push(newLine);
  
  // Lock after 10 lines
  if (story.lines.length >= 10) {
    story.locked = true;
  }

  saveStories();
  redirectToIndex();
}

// ========== Helper Functions ==========
function getCurrentStory() {
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = parseInt(urlParams.get('storyId'));
  return stories.find(s => s.id === storyId);
}

function renderStoryPreview(story) {
  elements.storyPreview.innerHTML = 
    story.lines.map(line => `<div class="story-line">${line}</div>`).join('');
}

function showStoryNotFound() {
  elements.storyPreview.innerHTML = '<p class="error">Story not found!</p>';
}

function saveStories() {
  localStorage.setItem('stories', JSON.stringify(stories));
}

function redirectToIndex() {
  window.location.href = './index.html';
}

// ========== Initialize Appropriate Page ==========
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('add-line.html')) {
    initAddLinePage();
  } else {
    initMainPage();
  }
});