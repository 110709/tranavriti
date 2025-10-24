// --- Google Sheets Web App URL ---
const scriptURL = "https://script.google.com/macros/s/AKfycbxPHURHM2Ef6eeN-6HL_6ikhWglr51ZiDbn7VQAIKcpi7bqOKOZ8vYQb26tclpy8EVY_Q/exec";

// --- Form Submission ---
const donationForm = document.getElementById('donationForm');

donationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    itemName: donationForm.itemName.value,
    itemType: donationForm.itemType.value,
    quantity: donationForm.quantity.value,
    contact: donationForm.contact.value,
    locationLink: donationForm.locationLink.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      alert("🎉 Donation submitted successfully!");
      donationForm.reset();
    } else {
      alert("⚠️ Error submitting donation. Please try again.");
    }
  })
  .catch(error => alert("⚠️ Something went wrong: " + error.message));
});
