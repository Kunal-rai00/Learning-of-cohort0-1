function counter_clock(){
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
}

setInterval(counter_clock, 100)