document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector("button");
    const searchInput = document.getElementById("input-search");
    const driverContainer = document.getElementById("driverInfo");
  
    function showWarning() {
      let warning = driverContainer.querySelector(".warning-message");
      if (!warning) {
        warning = document.createElement("div");
        warning.className = "warning-message";
        warning.style.color = "red";
        warning.style.fontSize = "18px";
        warning.style.marginTop = "20px";
        driverContainer.appendChild(warning);
      }
      warning.textContent = "Ingen sjåfør med det navnet ble funnet.";
    }
  
    function clearWarning() {
      const warning = driverContainer.querySelector(".warning-message");
      if (warning) {
        warning.remove();
      }
    }
  
    function showDriverInfo(driverName) {
      clearWarning(); 
  
      const driverCards = driverContainer.querySelectorAll(".driver-card");
      let found = false;
  
      driverCards.forEach(card => {
        const nameElement = card.querySelector(".driver-name");
        const driverId = card.id;
  
        if (nameElement.textContent.toLowerCase() === driverName.toLowerCase()) {
          card.style.display = "flex";
          found = true;
        } else {
          card.style.display = "none";
        }
      });
  
      if (!found) {
        showWarning();
      }
    }
  
    searchButton.addEventListener("click", () => {
      const searchValue = searchInput.value.trim();
      if (searchValue) {
        showDriverInfo(searchValue);
        searchInput.value = ""; 
      }
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click(); 
      }
    });
  });
  