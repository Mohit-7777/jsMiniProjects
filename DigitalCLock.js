function updateClock(){
    const now =  new Date();
    const hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    //hours = hours % 12 || 12;
    //hours = hours.toString().padStart(2,0)
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem} ${date}  ${month} ${year}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);