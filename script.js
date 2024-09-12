const $ = (id) => {
    return document.getElementById(id);
}

const szurkediv = $("szurke");
const szabodiv = $("szabo");
const szantodiv = $("szanto");

szabodiv.style = "display: none;";
szantodiv.style = "display: none;";