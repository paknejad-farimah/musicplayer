let musics=[
{
    name:"Du Fehlst Mir",
    cover:"images/MATTHIAS.jpg",
    audio:new Audio("./music/Du Fehlst Mir.mp3")
},
{
    name:"Ich Hab Mich So Auf Dich Gefreu",
    cover:"images/MATTHIAS.jpg",
    audio:new Audio("./music/01. Ich Hab Mich So Auf Dich Gefreu.mp3")
},
{
    name:"Whatsappmsg",
    cover:"images/2022-WEIHNACHTSPARTY-mit-Matthias-Reim-150x150.jpg",
    audio:new Audio("./music/Kayef - Whatsappmsg.mp3")
}
]
let range =document.querySelector("#music-time")
let playBtn=document.querySelector("#play-btn")

let nextBtn=document.querySelector("#next-btn")

let preBtn=document.querySelector("#pre-btn")
let musicCover=document.querySelector("#music-cover")
let musicName=document.querySelector("#music-name")

let currentMusic=0;
let audio=musics[currentMusic].audio
musicCover.src=musics[currentMusic].cover
musicName.innerText=musics[currentMusic].name

audio.addEventListener("canplay",()=>{
    range.max=audio.duration
})
audio.addEventListener("timeupdate",()=>{
    range.value=audio.currentTime
})
range.addEventListener("input",()=>{
    audio.currentTime=range.value
})
playBtn.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        musicCover.computedStyleMap.animationPlaystate="running"
        playBtn.classList.replace("fa-play","fa-pause")
    }else{
        audio.pause()
        musicCover.computedStyleMap.animationPlaystate="paused"
        playBtn.classList.replace("fa-pause","fa-play")
    }
    
})
preBtn.addEventListener("click",()=>{
changeMusic("next")
})
nextBtn.addEventListener("click",()=>{
    changeMusic("pre")
})
function changeMusic(state){
    audio.pause()
    range.value=0
    playBtn.classList.replace("fa-pause","fa-play")
    musicCover.computedStyleMap.animationPlaystate="paused"
    audio.currentMusic=0
    if(state=="next"){
if(currentMusic==musics.length-1)
currentMusic=0
else currentMusic+=1
    }else{
        if(currentMusic==0)
        currentMusic=musics.length-1
        else currentMusic-=1
    }
    audio=musics[currentMusic].audio
    musicCover.src=musics[currentMusic].cover
    musicName.innerText=musics[currentMusic].name
}