function timeConversion(s) {
    const period = s.slice(-2); 
    let [hours, minutes, seconds] = s.slice(0, 8).split(':');

    hours = parseInt(hours, 10);

    if (period === 'AM') {
        if (hours === 12) {
            hours = 0;
        }
    } else { 
        if (hours !== 12) {
            hours += 12;
        }
    }


    const formattedHours = hours.toString().padStart(2, '0');
    return `${formattedHours}:${minutes}:${seconds}`;
}

timeConversion('07:05:45PM');