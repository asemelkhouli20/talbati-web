function redirectToStore() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    // Redirect to Google Play Store
    window.location.href = "https://play.google.com/store/apps/details?id=com.talbat.app";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // Redirect to Apple App Store
    window.location.href = "https://apps.apple.com/app/id1596505868";
  }
}
// Call the function when needed
redirectToStore();
