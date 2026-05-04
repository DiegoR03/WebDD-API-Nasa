// Week selector
const prevBtn = document.getElementById("prev-week");
const nextBtn = document.getElementById("next-week");
const weekDisplay = document.getElementById("week-display");
const overlay = document.getElementById("loading-overlay");

const currentUrl = new URL(window.location.href);
const currentOffset = parseInt(
    currentUrl.searchParams.get("week") || "0",
);

if (weekDisplay) {
    if (currentOffset === 0)
        weekDisplay.textContent = "Huidige Week";
    else if (currentOffset === 1)
        weekDisplay.textContent = "Volgende Week";
    else if (currentOffset === -1)
        weekDisplay.textContent = "Vorige Week";
    else weekDisplay.textContent = `Week Offset: ${currentOffset}`;
}

function navigateWeek(newOffset) {
    if (overlay) overlay.style.display = "flex";

    const url = new URL(window.location.href);

    url.searchParams.set("week", newOffset.toString());
    window.history.pushState({}, "", url.toString());
    window.location.reload(); 
}

nextBtn?.addEventListener("click", () => {
    const currentUrl = new URL(window.location.href);
    const currentOffset = parseInt(currentUrl.searchParams.get("week") || "0");
    navigateWeek(currentOffset + 1);
});

prevBtn?.addEventListener("click", () => {
    const currentUrl = new URL(window.location.href);
    const currentOffset = parseInt(currentUrl.searchParams.get("week") || "0");
    navigateWeek(currentOffset - 1);
});

window.addEventListener("popstate", () => {
    window.location.reload();
});