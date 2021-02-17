// call count up based on interval in milliseconds
const counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const like = document.getElementById('heart')
const submit = document.getElementById('submit')
const likesList = document.getElementsByClassName('likes')[0]
const commentForm = document.getElementById('comment-form')

const likeKey = {}

setInterval(countUp, 1000)

function countUp() {
  let time = parseInt(counter.innerText)
  if (pause.innerText == 'pause') {
    counter.innerText = time + 1
  }
}

function countDown() {
  let time = parseInt(counter.innerText)
  if (pause.innerText == 'pause') {
    counter.innerText = time - 1
  }
}



function pauseButton() {
  if (pause.innerText == 'pause') {
    // don't need isPaused, just use one of the other variables
    pause.innerText = 'resume';
    // disable other functions here
    // wrap in function
  } else {
    pause.innerText = 'pause';
  }
  plus.disabled = !plus.disabled;
  minus.disabled = !minus.disabled;
  like.disabled = !like.disabled;
  submit.disabled = !submit.disabled;
}

function addTimeToLikeKey(time) {
  likeKey[time] ? likeKey[time] += 1 : likeKey[time] = 1;
}

function likeButton() {
  let time = parseInt(counter.innerText, 10)
  let time_id = `${time}-liked`
  let currLi = document.getElementById(time_id)
  if (currLi) {
    likesList.removeChild(currLi)
  }
  let newLi = document.createElement('li');
  addTimeToLikeKey(time)
  let likeCount = likeKey[time]
  newLi.innerText = `${time} has been liked ${likeCount} time`;
  if (likeCount > 1) {
    newLi.innerText += 's' 
  }
  newLi.id = `${time}-liked`
  likesList.appendChild(newLi);
}

function addComment(event) {
  event.preventDefault();
  let comment = document.getElementById('comment-input');
  let newP = document.createElement('p')
  newP.innerText = comment.value
  document.getElementById('list').appendChild(newP);
  event.target.reset();
}



commentForm.addEventListener('submit', addComment);
pause.addEventListener('click', pauseButton);
plus.addEventListener('click', countUp);
minus.addEventListener('click', countDown);
like.addEventListener('click', likeButton);
