const removeCheckbox = document.getElementById("removeCheckbox");

removeCheckbox.addEventListener("change", function() {
  let checkboxes = document.querySelectorAll(".check-item");
  if (this.checked) {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  }
});

const checkboxes = document.querySelectorAll(".check-item");
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      removeCheckbox.checked = false;
    }
  });
});
