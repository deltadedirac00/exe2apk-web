document.getElementById("yearly").addEventListener("click", function() {
    setPricing("yearly");
});

document.getElementById("monthly").addEventListener("click", function() {
    setPricing("monthly");
});

function setPricing(period) {
    if (period === "yearly") {
        document.querySelectorAll(".monthly-price").forEach((el, index) => {
            if (index === 0) {
                el.textContent = "1,99";
            } else if (index === 1) {
                el.textContent = "219";
            }
        });
        document.querySelectorAll(".price-period").forEach(el => el.textContent = "month");
        document.getElementById("yearly").classList.add("active");
        document.getElementById("monthly").classList.remove("active");
        
        // Mostrar descuentos
        document.querySelectorAll(".discount").forEach((el, index) => {
            if (index === 0) {
                el.style.display = "inline";
            } else if (index === 1) {
                el.style.display = "inline";
            }
        });
    } else {
        document.querySelectorAll(".monthly-price").forEach((el, index) => {
            if (index === 0) {
                el.textContent = "2,99";
            } else if (index === 1) {
                el.textContent = "329,99";
            }
        });
        document.querySelectorAll(".price-period").forEach(el => el.textContent = "month");
        document.getElementById("yearly").classList.remove("active");
        document.getElementById("monthly").classList.add("active");
        
        // Ocultar descuentos
        document.querySelectorAll(".discount").forEach(el => {
            el.style.display = "none";
        });
    }
}