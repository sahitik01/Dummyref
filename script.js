// Define two variants for the referral banner message
const variants = [
  "Refer a friend and get $20 off your next service! (Variant A)",
  "Invite your friends and earn exclusive rewards! (Variant B)"
];

// Randomly assign a variant to simulate an A/B test
const variantIndex = Math.random() < 0.5 ? 0 : 1;

// Get the banner element and set its text to the chosen variant
const bannerElement = document.getElementById("referral-banner");
bannerElement.innerText = variants[variantIndex];

// Define the referral code and build the referral link with UTM parameters
const referralCode = "REF-ABC123";
const baseUrl = "https://yourdomain.com/landing";  // Replace with your landing page URL
const utmParams = "utm_source=referral&utm_medium=web&utm_campaign=referral_program";
const referralLink = `${baseUrl}?ref=${referralCode}&${utmParams}`;

// Functionality to copy the referral link to the clipboard
document.getElementById("copy-link").addEventListener("click", function() {
  navigator.clipboard.writeText(referralLink)
    .then(() => {
      alert("Referral link copied: " + referralLink);
    })
    .catch((err) => {
      alert("Error copying referral link: " + err);
    });
});

// Functionality to share the referral link via email using a mailto link
document.getElementById("share-email").addEventListener("click", function() {
  const subject = encodeURIComponent("Join me at Zenoti and get rewards!");
  const body = encodeURIComponent(`Hi,\n\nCheck out this offer: ${referralLink}\n\nCheers!`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

// Log the assigned variant (for tracking during testing)
console.log("User assigned to variant:", variantIndex);
