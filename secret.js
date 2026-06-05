/* =========================
   💎 SECRET ENGINE
   Treasure of Love
   ========================= */

/* ---------- تشغيل موسيقى عامة ---------- */

let currentAudio = null;

function playMusic(src){
    if(currentAudio){
        currentAudio.pause();
    }

    currentAudio = new Audio(src);
    currentAudio.loop = true;
    currentAudio.volume = 0.5;
    currentAudio.play();
}

/* ---------- مؤثر النجاح ---------- */

function playSuccess(){
    let audio = new Audio("success.mp3");
    audio.volume = 0.7;
    audio.play();
}

/* ---------- مؤثر اللغز ---------- */

function playPuzzle(){
    let audio = new Audio("puzzle.mp3");
    audio.volume = 0.4;
    audio.loop = true;
    audio.play();
}

/* ---------- موسيقى النهاية ---------- */

function playFinal(){
    playMusic("final.mp3");
}

/* ---------- الانتقال بين الصفحات ---------- */

function goTo(page){
    window.location.href = page;
}

/* ---------- شريط التقدم ---------- */

function updateProgress(value){
    let bar = document.getElementById("progressFill");
    if(bar){
        bar.style.width = value + "%";
    }
}

/* ---------- رسائل ---------- */

function showMessage(id, text, type){

    let el = document.getElementById(id);

    if(!el) return;

    el.innerText = text;

    if(type === "success"){
        el.style.color = "#00ffcc";
    } else {
        el.style.color = "#ff4d4d";
    }

}

/* ---------- خطأ ---------- */

function wrongAnswer(id){

    let el = document.getElementById(id);

    if(!el) return;

    el.innerText = "❌ جواب غير صحيح حاول مرة ثانية";
    el.style.color = "#ff4d4d";

}

/* ---------- حفظ مفتاح الكنز ---------- */

function saveTreasurePiece(piece){

    let old = localStorage.getItem("treasure") || "";

    localStorage.setItem("treasure", old + piece);

}

/* ---------- فتح مرحلة ---------- */

function unlockLevel(level){

    localStorage.setItem(level, "unlocked");

}

/* ---------- تأثير قلب سري ---------- */

function secretHeart(){

    let msg = "💖 أنت داخل لعبة ذكريات خاصة جداً…";

    alert(msg);
}

/* ---------- Easter Egg ---------- */

document.addEventListener("keydown", function(e){

    if(e.key === "t"){

        alert("💎 Treasure Code Activated!");

        document.body.style.background = "#0a0a0a";

    }

    if(e.key === "l"){

        console.log("💖 Love Mode Enabled");
    }

});

/* ---------- تشغيل تلقائي أولي ---------- */

window.onload = function(){

    console.log("💎 Treasure of Love loaded");

};