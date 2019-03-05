
//get our elements 
const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progress= document.querySelector('.progress');
const progressBar=document.querySelector('.progress-filled');
const toggle=document.querySelector('.toggle');
const skipButton=document.querySelectorAll('[data-skip]');
const ranges=document.querySelectorAll('.player-slider');
console.log(skipButton);
//build the functions
function togglePlay (){
    if (video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}
//update the button , w wont add it only to toggle play beacuse there is many ways user can use to play and pause the vid
function updateButton(){
    const icon=this.paused ? '>' : '||';
    toggle.textContent=icon;
}

function skip (){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name]=this.value;
}
function handleProgress(){
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

function scrub (e){
const scrubTime=(e.offsetX/progress.offsetWidth)* video.duration;
video.currentTime=scrubTime;
}
//hookup events listeners

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);
//when video is update it time code
video.addEventListener('timeupdate',handleProgress);

skipButton.forEach((item)=>item.addEventListener('click',skip));

ranges.forEach((item)=>item.addEventListener('change',handleRangeUpdate));
ranges.forEach((item)=>item.addEventListener('mousemove',handleRangeUpdate));
let mousedown=false;
progress.addEventListener('click',scrub);

progress.addEventListener('mousedown',()=> mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e))
