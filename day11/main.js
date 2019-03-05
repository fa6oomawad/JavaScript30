
//get our elements 
const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progress= document.querySelector('.progress');
const progressBar=document.querySelector('.progress-filled');
const toggle=document.querySelector('.toggle');
const skipButton=document.querySelectorAll('[data-skip]');
const ranges=document.querySelectorAll('.player-slider');

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

//hookup events listeners

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);

skipButton.addEventListener('click',skip);
