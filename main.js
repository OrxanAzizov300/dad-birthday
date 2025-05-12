let count = 10;
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");
const giftBox = document.getElementById("gift-box");
const message2=document.getElementById("message2")
let started = false;

giftBox.addEventListener("click", () => {
    if (started) return; // Prevent multiple clicks
    started = true;

    giftBox.style.display = "none";
    countdownEl.style.display = "block";

    const interval = setInterval(() => {
        count--;
        if (count >= 0) {
            countdownEl.textContent = count;
        } else {
            clearInterval(interval);
            messageEl.textContent = "❤️🎉Happy birthday Fati! ! ! 🎉❤️";
            message2.textContent = "Bu xüsusi gündə sənə xoşbəxtlik, can sağlığı arzulayıram.Həyatın hər günündə yaxşılıqlar sənin üçün olsun, arzuların gerçək olsun.Yeni yaşın sənə çoxlu yaxşılıqlar gətirsin! By İsgəndər)❤️"
            countdownEl.style.display = "none";
        }
    }, 1000);
});
