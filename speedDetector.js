function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}

// Example usage:
checkSpeed(80);  // Output: Points: 2
checkSpeed(60);  // Output: Ok
checkSpeed(135); // Output: License suspended
