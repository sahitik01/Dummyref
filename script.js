// Define the referral code and build the referral link with UTM parameters
const referralCode = "REF-ABC123";
// Use your GitHub Pages landing URL for demonstration:
const baseUrl = "https://sahitik01.github.io/Dummyref/landing.html";
const utmParams = "utm_source=referral&utm_medium=whatsapp&utm_campaign=referral_program";
const referralLink = `${baseUrl}?ref=${referralCode}&${utmParams}`;

// Update the referral banner text
const bannerElement = document.getElementById("referral-banner");
bannerElement.innerText = "Earn $20 Off Your Next Service! Use your referral code: " + referralCode;

// Display the referral link on the page
const linkDisplay = document.getElementById("referral-link");
if (linkDisplay) {
  linkDisplay.innerText = referralLink;
}

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

// Email sharing functionality
document.getElementById("share-email").addEventListener("click", function() {
  const subject = encodeURIComponent("Join me at Zenoti and get rewards!");
  const body = encodeURIComponent(`Hi,\n\nCheck out this offer: ${referralLink}\n\nCheers!`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

// Set up WhatsApp sharing
const shareMessage = encodeURIComponent("Earn $20 Off Your Next Service at Zenoti! Use my referral link: " + referralLink);
const whatsappLink = "whatsapp://send?text=" + shareMessage;
document.getElementById("whatsapp-share").setAttribute("href", whatsappLink);

// Log for debugging
console.log("Dynamic referral link created:", referralLink);
