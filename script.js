function calculateBill() {
    const previous = parseInt(document.getElementById("previous").value);
    const current = parseInt(document.getElementById("current").value);
    const ratePerUnit = 7; // ₹7 per unit

    if (isNaN(previous) || isNaN(current) || current < previous) {
        document.getElementById("result").innerHTML = "Please enter valid readings.";
        return;
    }

    const unitsConsumed = current - previous;
    const billAmount = unitsConsumed * ratePerUnit;

    document.getElementById("result").innerHTML = `Units Consumed: ${unitsConsumed} units <br>Total Bill: ₹${billAmount}`;
}
