/* =========================
   Treasure of Love
   Main Game Script
========================= */

/* ---------- الأصوات ---------- */

const successSound = new Audio("audio/success.mp3");
const failSound = new Audio("audio/fail.mp3");
const puzzleSound = new Audio("audio/puzzle.mp3");
const finalSound = new Audio("audio/final.mp3");

/* ---------- تشغيل صوت ---------- */

function playSuccess(){
    successSound.currentTime = 0;
    successSound.play();
}

function playFail(){
    failSound.currentTime = 0;
    failSound.play();
}

function playPuzzle(){
    puzzleSound.volume = 0.3;
    puzzleSound.loop = true;
    puzzleSound.play();
}

function stopPuzzle(){
    puzzleSound.pause();
}

function playFinal(){
    finalSound.currentTime = 0;
    finalSound.play();
}

/* ---------- الرسائل ---------- */

function showMessage(id,text,type){

    const box = document.getElementById(id);

    box.style.display = "block";

    box.className = "message-box";

    if(type === "success"){
        box.classList.add("success");
    }

    if(type === "error"){
        box.classList.add("error");
    }

    if(type === "hint"){
        box.classList.add("hint");
    }

    box.innerHTML = text;
}

/* ---------- عداد الأخطاء ---------- */

let mistakes = 0;

function wrongAnswer(msgId){

    mistakes++;

    playFail();

    if(mistakes === 1){

        showMessage(
            msgId,
            "ليس هذا الجواب... حاول التفكير بطريقة مختلفة 🌙",
            "error"
        );

    }

    else if(mistakes === 2){

        showMessage(
            msgId,
            "أنت قريب... لكن ما زال هناك شيء لم تلاحظه 💡",
            "hint"
        );

    }

    else{

        showMessage(
            msgId,
            "تلميح إضافي: لا تبحث عن الجواب المعقد دائماً 😉",
            "hint"
        );

    }

}

/* ---------- حفظ التقدم ---------- */

function unlockLevel(level){

    localStorage.setItem(level,"done");

}

function isUnlocked(level){

    return localStorage.getItem(level) === "done";

}

/* ---------- الانتقال ---------- */

function goTo(page){

    window.location.href = page;

}

/* ---------- شريط التقدم ---------- */

function updateProgress(percent){

    const bar = document.getElementById("progressFill");

    if(bar){
        bar.style.width = percent + "%";
    }

}

/* ---------- رموز الكنز ---------- */

function saveTreasurePiece(piece){

    let pieces =
        JSON.parse(localStorage.getItem("treasurePieces")) || [];

    pieces.push(piece);

    localStorage.setItem(
        "treasurePieces",
        JSON.stringify(pieces)
    );

}

function getTreasurePieces(){

    return JSON.parse(
        localStorage.getItem("treasurePieces")
    ) || [];

}

/* ---------- Easter Egg ---------- */

let secretClicks = 0;

function secretHeart(){

    secretClicks++;

    if(secretClicks >= 5){

        alert(
        "💖 رسالة سرية:\n\nإذا وصلتِ إلى هنا... فأنتِ مميزة أكثر مما تتخيلين ❤️"
        );

        secretClicks = 0;
    }

}

/* ---------- قلوب متحركة ---------- */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (15 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (8 + Math.random()*8) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },15000);

}

/* ---------- تشغيل القلوب ---------- */

setInterval(createHeart,1200);