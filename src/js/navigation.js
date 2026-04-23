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

prevBtn?.addEventListener("click", () => {
    if (overlay) overlay.style.display = "flex";
    
    currentUrl.searchParams.set(
        "week",
        (currentOffset - 1).toString(),
    );
    window.location.href = currentUrl.toString();
});

nextBtn?.addEventListener("click", () => {
    if (overlay) overlay.style.display = "flex";

    currentUrl.searchParams.set(
        "week",
        (currentOffset + 1).toString(),
    );
    window.location.href = currentUrl.toString();
});