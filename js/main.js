// Faqs
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;

    const group = groupHeader.parentElement; //faq-group
    const groupBody = group.querySelector(".faq-group-body"); //answer
    const icon = groupHeader.querySelector("i"); //icon

    // Toggle Icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle visibility
    groupBody.classList.toggle("open");

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherGroupBody.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
