// Rybbit Analytics Integration
(function () {
  // Create the script element
  const script = document.createElement("script");
  script.src = "https://rybbit.fossorial.io/api/script.js";
  script.async = true;
  script.defer = true;
  script.setAttribute("data-site-id", "da4fb64dc2d5"); // Replace with your actual Site ID

  // Append the script to the document head
  document.head.appendChild(script);
})();
