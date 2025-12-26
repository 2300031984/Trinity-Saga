function redirectToVerse(event) {
    event.preventDefault(); 
    const verseInput = document.getElementById("verse-select").value.trim(); 
    
    if (verseInput === "mcu") {
        window.location.href = "Marvel.html"; 
    } else if (verseInput === "star-wars") {
        window.location.href = "StarWars.html"; 
    } else {
        alert("Invalid input! Please select 'MCU' for Marvel or 'Star Wars' to enter the Star Wars world.");
    }
}
