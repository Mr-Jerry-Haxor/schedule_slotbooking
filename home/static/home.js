document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables
    const dateButtons = document.querySelectorAll(".nav-link");
    const timeSlotItems = document.querySelectorAll(".time-slot-item");
    const systemLabels = document.querySelectorAll(".time-slot-system");
    const dateInput = document.querySelector('input[name="selected_date"]');
    const systemInput = document.querySelector('input[name="selected_system"]');
    const timeSlotInput = document.querySelector('input[name="selected_time_slot"]');
    const form = document.querySelector("form");
  
    // Find and select the initially active tab
    const activeTab = document.querySelector(".nav-link.active");
    if (activeTab) {
      dateInput.value = activeTab.textContent;
    }
  
    // Event listener for date selection
    dateButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Set the selected date input
        dateInput.value = button.textContent;

        systemInput.value ="";
        timeSlotInput.value = "";
  
        // Remove the 'picked' class from all time slot items
        timeSlotItems.forEach(function (item) {
          item.classList.remove("picked");
          item.removeAttribute("disabled");
        });
      });
    });
  
    // Event listener for time slot selection
    timeSlotItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Check if the time slot item is not booked
        if (!item.classList.contains("booked")) {
          // Remove the 'picked' class from all time slot items
          timeSlotItems.forEach(function (slotItem) {
            slotItem.classList.remove("picked");
          });
  
          // Set the 'picked' class to the selected time slot item
          item.classList.add("picked");
  
          // Set the selected system input
          systemInput.value = item.closest(".time-slot").querySelector(".time-slot-system").textContent;
  
          // Set the selected time slot input
          timeSlotInput.value = item.textContent;
        }
      });
    });
  

  });
  