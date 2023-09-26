document.addEventListener("DOMContentLoaded", function () {
    const dateSlots = document.querySelectorAll(".date-slot-item");
    const timeSlots = document.querySelectorAll(".time-slot-item");
    const bookButton = document.getElementById("bookButton");
    let selectedDate = null;
    let selectedTime = null;

    // Disable time slots initially
    timeSlots.forEach(timeSlot => timeSlot.classList.add("disabled"));

    // Function to handle date slot click
    function handleDateSlotClick(event) {
        dateSlots.forEach(dateSlot => dateSlot.classList.remove("active"));
        event.currentTarget.classList.add("active");
        selectedDate = event.currentTarget.querySelector(".date-slot-day").textContent;

        // Enable the time slots
        timeSlots.forEach(timeSlot => timeSlot.classList.remove("disabled"));
    }

    // Function to handle time slot click
    function handleTimeSlotClick(event) {
        if (!selectedDate) {
            alert("Please pick a date");
            return; // Prevent picking a time slot without a date
        }
        
        if (!event.currentTarget.classList.contains("disabled")) {
            timeSlots.forEach(timeSlot => timeSlot.classList.remove("picked"));
            event.currentTarget.classList.add("picked");
            selectedTime = event.currentTarget.textContent;
            bookButton.style.display = "block";
        }
    }

    // Function to handle book button click
    function handleBookButtonClick() {
        if (selectedDate && selectedTime) {
            // Send a POST request with selectedDate and selectedTime data here
            // For example, you can use Fetch API or another library to make the request
            // Replace the following console log with your actual POST request code
            console.log("Date: " + selectedDate);
            console.log("Time: " + selectedTime);
        }
    }

    // Add event listeners
    dateSlots.forEach(dateSlot => dateSlot.addEventListener("click", handleDateSlotClick));
    timeSlots.forEach(timeSlot => timeSlot.addEventListener("click", handleTimeSlotClick));
    bookButton.addEventListener("click", handleBookButtonClick);
});
