function updateClock() {
    let now = new Date();
    
    // Convert to 12-hour format
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Countdown Timer (Time Left Until Midnight)
    let midnight = new Date();
    midnight.setHours(23, 59, 59, 999); // Midnight today
    
    let timeLeft = midnight - now;
    
    let hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60)) % 12 || 12;
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000).toString().padStart(2, '0');
    
    let countdownAMPM = now.getHours() < 12 ? 'AM' : 'PM';
    
    document.getElementById("countdown").textContent = `${hoursLeft}:${minutesLeft}:${secondsLeft} ${countdownAMPM}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
