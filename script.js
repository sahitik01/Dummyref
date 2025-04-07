// Define multiple variants for the referral banner message
const variants = [
  "Refer a friend and get $20 off your next service! (Variant A)",
  "Invite your friends and unlock exclusive rewards! (Variant B)",
  "Share your unique referral link and earn bonus points! (Variant C)"
];

// Randomly assign a variant (simulate multi-variant A/B/C testing)
const variantIndex = Math.floor(Math.random() * variants.length);
const bannerElement = document.getElementById("referral-banner");
bannerElement.innerText = variants[variantIndex];

// Generate the referral link with UTM parameters
const referralCode = "REF-ABC123";
const baseUrl = "https://yourdomain.com/landing";  // Replace with actual landing page URL
const utmParams = "utm_source=referral&utm_medium=web&utm_campaign=referral_program";
const referralLink = `${baseUrl}?ref=${referralCode}&${utmParams}`;

// Copy referral link functionality
document.getElementById("copy-link").addEventListener("click", function() {
  navigator.clipboard.writeText(referralLink)
    .then(() => {
      alert("Referral link copied: " + referralLink);
    })
    .catch((err) => {
      alert("Error copying referral link: " + err);
    });
});

// Email share functionality
document.getElementById("share-email").addEventListener("click", function() {
  const subject = encodeURIComponent("Join me at Zenoti and get rewards!");
  const body = encodeURIComponent(`Hi,\n\nCheck out this offer: ${referralLink}\n\nCheers!`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

// Log the assigned variant for debugging/analytics purposes
console.log("User assigned to variant:", variantIndex);

// Function to simulate sending a notification
function sendNotification(message) {
  const notificationDiv = document.createElement("div");
  notificationDiv.style.position = "fixed";
  notificationDiv.style.bottom = "20px";
  notificationDiv.style.right = "20px";
  notificationDiv.style.background = "#28a745";
  notificationDiv.style.color = "#fff";
  notificationDiv.style.padding = "15px";
  notificationDiv.style.borderRadius = "5px";
  notificationDiv.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  notificationDiv.innerText = message;
  document.body.appendChild(notificationDiv);
  setTimeout(() => {
    document.body.removeChild(notificationDiv);
  }, 5000);
}

// Define notification messages for each variant
const notificationMessages = [
  "Thanks for sharing! Get ready to enjoy $20 off when your friend books.",
  "Your friends will unlock exclusive rewards when they join!",
  "Bonus points are on the way – share your referral link now!"
];

// Trigger a notification after 3 seconds based on assigned variant
setTimeout(() => {
  sendNotification(notificationMessages[variantIndex]);
}, 3000);
