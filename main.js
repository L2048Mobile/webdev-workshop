window.onresize = onResize; // called whenever the window is resized

var CONTAINER_WIDTH = 500; // variable for container width
var CONTAINER_HEIGHT = 500; // variable for container height

// the ids of the 3 pages we have
var pages = [
  'profile-page',
  'about-me-page',
  'skills-page'
]

// the index of the page we're currently on
var pageIndex = 0;

// call init when script is first loaded
initPage();

// set up the page
function initPage() {
  positionContainer();
  var prev = document.getElementById('prev-page');
  // prev-page button is initially hidden because
  // we're at index 0 and can't go to a "previous" page
  prev.classList.add('hidden');
  setupListeners();
}

// reposition the container so that it's in the center of the page
function onResize() {
  positionContainer();
}

// return a dimensions object that contains the window's width and height
function getWindowDimensions() {
  var dimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  return dimensions;
}

// set the left and top attributes of the container in order to center it on the page
function positionContainer() {
  var container = document.getElementById('container');
  var dimensions = getWindowDimensions();
  container.style.left = (dimensions.width - CONTAINER_WIDTH)/2 + 'px';
  container.style.top = (dimensions.height - CONTAINER_HEIGHT)/2 + 'px';
}

// set up event listeners for the next and prev buttons
function setupListeners() {
  var prev = document.getElementById('prev-page');
  var next = document.getElementById('next-page');
  prev.addEventListener('click', toPrevPage);
  next.addEventListener('click', toNextPage);
}

function toPrevPage() {
  pageIndex = Math.max(pageIndex - 1, 0);
  for (var i = 0; i < pages.length; i++) {
    var pageId = pages[i];
    var pageElement = document.getElementById(pageId);
    if (i == pageIndex) {
      pageElement.classList.remove('hidden');
    } else {
      pageElement.classList.add('hidden');
    }
  }

  // hide or unhide next and prev buttons accordingly
  var next = document.getElementById('next-page');
  var prev = document.getElementById('prev-page');
  if (pageIndex == 0) {
    prev.classList.add('hidden');
  } else {
    next.classList.remove('hidden');
  }
}

function toNextPage() {
  pageIndex = Math.min(pageIndex + 1, pages.length - 1);
  for (var i = 0; i < pages.length; i++) {
    var pageId = pages[i];
    var pageElement = document.getElementById(pageId);
    if (i == pageIndex) {
      pageElement.classList.remove('hidden');
    } else {
      pageElement.classList.add('hidden');
    }
  }

  // hide or unhide next and prev buttons accordingly
  var next = document.getElementById('next-page');
  var prev = document.getElementById('prev-page');
  if (pageIndex == pages.length - 1) {
    next.classList.add('hidden');
  } else {
    prev.classList.remove('hidden');
  }
}
