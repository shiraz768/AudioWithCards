let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let audio1 = new Audio("./audioSongs/Dusk-Till-Dawn.mp3");
let audio2 = new Audio("./audioSongs/Michele Morrone - Feel It.mp3");
let audio3 = new Audio("./audioSongs/everybody-loves-an-outlaw-i-see-red.mp3");
let audio4 = new Audio("./audioSongs/Night-Changes.mp3");
let audio5 = new Audio("./audioSongs/Apna-Bana-Le(PagalWorld).mp3");
let audio6 = new Audio("./audioSongs/satranga.mp3");
let audio7 = new Audio("./audioSongs/Popular.mp3");

let volume = document.getElementById("volume");

let isPlaying1 = false;
let isPlaying2 = false;
let isPlaying3 = false;
let isPlaying4 = false;
let isPlaying5 = false;
let isPlaying6 = false;
let isPlaying7 = false;

volume.addEventListener("input", () => {
    audio1.volume = volume.value / 100;
    audio2.volume = volume.value / 100;
    audio3.volume = volume.value / 100;
    audio4.volume = volume.value / 100;
    audio5.volume = volume.value / 100;
    audio6.volume = volume.value / 100;
    audio7.volume = volume.value / 100;

})

btn1.addEventListener("click", () => {
    if (isPlaying1) {

        audio1.pause()
        btn1.innerHTML = "Play";
        isPlaying1 = false
    } else {
        if (isPlaying2) {
            audio2.pause()
            btn2.innerHTML = "Play"
            isPlaying2 = false;
        }
        if (isPlaying3) {
            audio3.pause()
            btn3.innerHTML = "Play"
            isPlaying3 = false;
        }
        if (isPlaying4) {
            audio4.pause()
            btn4.innerHTML = "Play"
            isPlaying4 = false;
        }
        if (isPlaying5) {
            audio5.pause()
            btn5.innerHTML = "Play"
            isPlaying5 = false;
        }
        if (isPlaying6) {
            audio6.pause();
            btn6.innerHTML = "Play";
            isPlaying6 = false;
        }
        if (isPlaying7) {
            audio7.pause();
            btn7.innerHTML = "Play";
            isPlaying7 = false
        }

        audio1.play();
        btn1.innerHTML = "Pause";
        isPlaying1 = true;
    }
})

btn2.addEventListener("click", () => {
    if (isPlaying2) {
        audio2.pause();
        btn2.innerHTML = "Play";
        isPlaying2 = false;
    } else {
        // Pause other audio if playing
        if (isPlaying1) {
            audio1.pause();
            btn1.innerHTML = "Play";
            isPlaying1 = false;
        }
        if (isPlaying3) {
            audio3.pause();
            btn3.innerHTML = "Play";
            isPlaying3 = false;
        }
        if (isPlaying4) {
            audio4.pause();
            btn4.innerHTML = "Play";
            isPlaying4 = false;
        }
        if (isPlaying5) {
            audio5.pause();
            btn5.innerHTML = "Play";
            isPlaying5 = false;
        }
        if (isPlaying6) {
            audio6.pause();
            btn6.innerHTML = "Play";
            isPlaying6 = false;
        }
        if (isPlaying7) {
            audio7.pause();
            btn7.innerHTML = "Play";
            isPlaying7 = false
        }

        // Play audio2
        audio2.play();
        btn2.innerHTML = "Pause";
        isPlaying2 = true;
    }
});

btn3.addEventListener("click", () => {
    if (isPlaying3) {
        audio3.pause();
        btn3.innerHTML = "Play";
        isPlaying3 = false;
    } else {
        // Pause other audio if playing
        if (isPlaying1) {
            audio1.pause();
            btn1.innerHTML = "Play";
            isPlaying1 = false;
        }
        if (isPlaying2) {
            audio2.pause();
            btn2.innerHTML = "Play";
            isPlaying2 = false;
        }
        if (isPlaying4) {
            audio4.pause();
            btn4.innerHTML = "Play";
            isPlaying4 = false;
        }
        if (isPlaying5) {
            audio5.pause();
            btn5.innerHTML = "Play";
            isPlaying5 = false;
        }
        if (isPlaying6) {
            audio6.pause();
            btn6.innerHTML = "Play";
            isPlaying6 = false;
        }
        if (isPlaying7) {
            audio7.pause();
            btn7.innerHTML = "Play";
            isPlaying7 = false
        }
        // Play audio3
        audio3.play();
        btn3.innerHTML = "Pause";
        isPlaying3 = true;
    }
});

btn4.addEventListener("click", () => {
    if (isPlaying4) {
        audio4.pause();
        btn4.innerHTML = "Play";
        isPlaying4 = false;
    } else {
        // Pause other audio if playing
        if (isPlaying1) {
            audio1.pause();
            btn1.innerHTML = "Play";
            isPlaying1 = false;
        }
        if (isPlaying2) {
            audio2.pause();
            btn2.innerHTML = "Play";
            isPlaying2 = false;
        }
        if (isPlaying3) {
            audio3.pause();
            btn3.innerHTML = "Play";
            isPlaying3 = false;
        }

        if (isPlaying5) {
            audio5.pause();
            btn5.innerHTML = "Play";
            isPlaying5 = false;
        }
        if (isPlaying6) {
            audio6.pause();
            btn6.innerHTML = "Play";
            isPlaying6 = false;
        }
        if (isPlaying7) {
            audio7.pause();
            btn7.innerHTML = "Play";
            isPlaying7 = false
        }

        // Play audio3
        audio4.play();
        btn4.innerHTML = "Pause";
        isPlaying4 = true;
    }
});

btn5.addEventListener("click", () => {
    if (isPlaying5) {
        audio5.pause();
        btn5.innerHTML = "Play";
        isPlaying5 = false;
    } else {
        // Pause other audio if playing
        if (isPlaying1) {
            audio1.pause();
            btn1.innerHTML = "Play";
            isPlaying1 = false;
        }
        if (isPlaying2) {
            audio2.pause();
            btn2.innerHTML = "Play";
            isPlaying2 = false;
        }
        if (isPlaying3) {
            audio3.pause();
            btn3.innerHTML = "Play";
            isPlaying3 = false;
        }
        if (isPlaying4) {
            audio4.pause();
            btn4.innerHTML = "Play";
            isPlaying4 = false;
        }
        if (isPlaying6) {
            audio6.pause();
            btn6.innerHTML = "Play";
            isPlaying6 = false;
        }
        if (isPlaying7) {
            audio7.pause();
            btn7.innerHTML = "Play";
            isPlaying7 = false
        }

        // Play audio3
        audio5.play();
        btn5.innerHTML = "Pause";
        isPlaying5 = true;
    }
});

btn6.addEventListener("click", () => {
    if (isPlaying6) {
        audio6.pause();
        btn6.innerHTML = "Play";
        isPlaying6 = false;
    } else {
        // Pause other audio if playing
        if (isPlaying1) {
            audio1.pause();
            btn1.innerHTML = "Play";
            isPlaying1 = false;
        }
        if (isPlaying2) {
            audio2.pause();
            btn2.innerHTML = "Play";
            isPlaying2 = false;
        }
        if (isPlaying3) {
            audio3.pause();
            btn3.innerHTML = "Play";
            isPlaying3 = false;
        }
        if (isPlaying4) {
            audio4.pause();
            btn4.innerHTML = "Play";
            isPlaying4 = false;
        }
        if (isPlaying5) {
            audio5.pause();
            btn5.innerHTML = "Play";
            isPlaying5 = false;
        }
        if (isPlaying7) {
            audio7.pause();
            btn7.innerHTML = "Play";
            isPlaying7 = false
        }

        // Play audio3
        audio6.play();
        btn6.innerHTML = "Pause";
        isPlaying6 = true;
    }
});

btn7.addEventListener("click", () => {
    if (isPlaying7) {
        audio7.pause();
        btn7.innerHTML = "Play";
        isPlaying7 = false;
    } else {
        // Pause other audio if playing
        if (isPlaying1) {
            audio1.pause();
            btn1.innerHTML = "Play";
            isPlaying1 = false;
        }
        if (isPlaying2) {
            audio2.pause();
            btn2.innerHTML = "Play";
            isPlaying2 = false;
        }
        if (isPlaying3) {
            audio3.pause();
            btn3.innerHTML = "Play";
            isPlaying3 = false;
        }
        if (isPlaying4) {
            audio4.pause();
            btn4.innerHTML = "Play";
            isPlaying4 = false;
        }
        if (isPlaying5) {
            audio5.pause();
            btn5.innerHTML = "Play";
            isPlaying5 = false;
        }
        if (isPlaying6) {
            audio6.pause();
            btn6.innerHTML = "Play";
            isPlaying6 = false;
        }

        // Play audio3
        audio7.play();
        btn7.innerHTML = "Pause";
        isPlaying7 = true;
    }
});

let remainingTime1 = document.getElementById("remainingTime1");
let remainingTime2 = document.getElementById("remainingTime2");
let remainingTime3 = document.getElementById("remainingTime3");
let remainingTime4 = document.getElementById("remainingTime4");
let remainingTime5 = document.getElementById("remainingTime5");
let remainingTime6 = document.getElementById("remainingTime6");
let remainingTime7 = document.getElementById("remainingTime7");


audio1.addEventListener("timeupdate", function () {
    seekBar1.value = audio1.currentTime;
    seekBar1.max = audio1.duration; // Ensure maximum value matches audio duration
    remainingTime1.textContent = "-" + formatTime(audio1.duration - audio1.currentTime);
});

audio2.addEventListener("timeupdate", function () {
    seekBar2.value = audio2.currentTime;
    seekBar2.max = audio2.duration; // Ensure maximum value matches audio duration
    remainingTime2.textContent = "-" + formatTime(audio2.duration - audio2.currentTime);
});

audio3.addEventListener("timeupdate", function () {
    seekBar3.value = audio3.currentTime;
    seekBar3.max = audio3.duration; // Ensure maximum value matches audio duration
    remainingTime3.textContent = "-" + formatTime(audio3.duration - audio3.currentTime)
});

audio4.addEventListener("timeupdate", function () {
    seekBar4.value = audio4.currentTime;
    seekBar4.max = audio4.duration; // Ensure maximum value matches audio duration
    remainingTime4.textContent = "-" + formatTime(audio4.duration - audio4.currentTime)
});

audio5.addEventListener("timeupdate", function () {
    seekBar5.value = audio5.currentTime;
    seekBar5.max = audio5.duration; // Ensure maximum value matches audio duration
    remainingTime5.textContent = "-" + formatTime(audio5.duration - audio5.currentTime)
});

audio6.addEventListener("timeupdate", function () {
    seekBar6.value = audio6.currentTime;
    seekBar6.max = audio6.duration; // Ensure maximum value matches audio duration
    remainingTime6.textContent = "-" + formatTime(audio6.duration - audio6.currentTime)
});

audio7.addEventListener("timeupdate", function () {
    seekBar7.value = audio7.currentTime;
    seekBar7.max = audio7.duration; // Ensure maximum value matches audio duration
    remainingTime7.textContent = "-" + formatTime(audio7.duration - audio7.currentTime)
});


seekBar1.addEventListener("input", function () {
    audio1.currentTime = seekBar1.value;
});

seekBar2.addEventListener("input", function () {
    audio2.currentTime = seekBar2.value;
});

seekBar3.addEventListener("input", function () {
    audio3.currentTime = seekBar3.value;
});

seekBar4.addEventListener("input", function () {
    audio4.currentTime = seekBar4.value;
});

seekBar5.addEventListener("input", function () {
    audio5.currentTime = seekBar5.value;
});

seekBar6.addEventListener("input", function () {
    audio6.currentTime = seekBar6.value;
});

seekBar7.addEventListener("input", function () {
    audio7.currentTime = seekBar7.value;
});

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return (
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}
