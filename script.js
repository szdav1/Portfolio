const $ = (id) => {
    return document.querySelector(id);
}

const $s = (id) => {
    return document.querySelectorAll(id);
}

const szurkediv = $("#szurke");
const szabodiv = $("#szabo");
const szantodiv = $("#szanto");
const briefIntro = $s(".brief-intro");
const briefIntroBtn = $s(".brief-intro-btn");

szabodiv.style = "display: none;";
szantodiv.style = "display: none;";

const getIndexOf = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item)
            return i;
    }

    return -1;
}

const toggleBriefIntro = (item) => {
    const index = getIndexOf(briefIntroBtn, item);

    for (let i = 0; i < briefIntroBtn.length; i++) {
        if (i == index)
            briefIntro[i].style = "display: block;";
        else
            briefIntro[i].style = "display: none;";
    }
}

briefIntroBtn.forEach(bib => {
    bib.addEventListener("click", (e) => {
        const t = e.target;
        toggleBriefIntro(t);
    });
});