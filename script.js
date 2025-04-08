// Define the unique referral code (in production, this would come from your backend)
const referralCode = "REF-ABC123";

// Define the base URL for your landing page (make sure landing.html exists or adjust to your needs)
const baseUrl = "https://sahitik01.github.io/Dummyref/landing.html";

// Define UTM parameters
const utmParams = "utm_source=referral&utm_medium=whatsapp&utm_campaign=referral_program";

// Construct the full dynamic referral link with tracking parameters
const referralLink = `${baseUrl}?ref=${referralCode}&${utmParams}`;

// Update the referral banner text
const bannerElement = document.getElementById("referral-banner");
bannerElement.innerText = "Earn $20 Off Your Next Service! Use your referral code: " + referralCode;

// Display the referral link on the page for demo purposes
const linkDisplay = document.getElementById("referral-link");
if (linkDisplay) {
  linkDisplay.innerText = referralLink;
}

// Copy Referral Link button functionality
document.getElementById("copy-link").addEventListener("click", function() {
  navigator.clipboard.writeText(referralLink)
    .then(() => {
      alert("Referral link copied: " + referralLink);
    })
    .catch((err) => {
      alert("Error copying referral link: " + err);
    });
});

// Share via Email button functionality using mailto:
document.getElementById("share-email").addEventListener("click", function() {
  const subject = encodeURIComponent("Join me at Zenoti and get rewards!");
  const body = encodeURIComponent(`Hi,\n\nCheck out this offer: ${referralLink}\n\nCheers!`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

// Build the WhatsApp sharing URL
const shareMessage = encodeURIComponent("Earn $20 Off Your Next Service at Zenoti! Use my referral link: " + referralLink);

// Basic device detection for mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Set the WhatsApp share link based on device
let whatsappShareURL = "";
if (isMobile) {
  // Use the native WhatsApp URL scheme for mobile
  whatsappShareURL = "whatsapp://send?text=" + shareMessage;
} else {
  // Fallback for desktop using WhatsApp API web
  whatsappShareURL = "https://api.whatsapp.com/send?text=" + shareMessage;
}
document.getElementById("whatsapp-share").setAttribute("href", whatsappShareURL);

// Build the Facebook Share URL using Facebook's Share Dialog URL
const encodedReferralLink = encodeURIComponent(referralLink);
const facebookShareURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodedReferralLink;
document.getElementById("facebook-share").setAttribute("href", facebookShareURL);

// Log output for debugging purposes
console.log("Dynamic referral link created:", referralLink);
console.log("WhatsApp Share URL:", whatsappShareURL);
console.log("Facebook Share URL:", facebookShareURL);

