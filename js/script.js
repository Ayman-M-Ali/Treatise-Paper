import { tapToTop } from "./tapToTop.js";
import { countingAutoWhenScroll } from "./countingAutoWhenScroll.js";
import { numbers, section, form, sectionElements } from "./elements.js";
import { observerElements } from "./intersectioinObserver.js";
import { clearFormInputs, handleFormSubmit } from "./utilis.js";

// Moving to Top
tapToTop();
// ============================================

// Start Counting Automatically When scrolling
let started = false;

window.addEventListener("scroll", () => {
  if (section && window.scrollY >= section.offsetTop - 250) {
    if (!started) {
      numbers.forEach(num => {
        if (num) {
          countingAutoWhenScroll(num);
        }
      });
      started = true;
    }
  }
});
// ===========================================

// Form Validation
// Function to clear the form inputs
if (form) {
  clearFormInputs();

  // Add event listener for form submission
  form.addEventListener("submit", handleFormSubmit);
}
// ========================================

// Section Observer API
if (sectionElements.length > 0) {
  observerElements(sectionElements);
}