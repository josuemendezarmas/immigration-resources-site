function toggleInfo() {
    let infoDiv = document.getElementById("info");
    if (infoDiv.classList.contains("hidden")) {
        infoDiv.classList.remove("hidden");
    } else {
        infoDiv.classList.add("hidden");
    }
}
