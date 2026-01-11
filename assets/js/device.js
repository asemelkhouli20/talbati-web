function redirectToStore() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    // Redirect to Google Play Store
    window.location.href = "https://play.google.com/store/apps/details?id=jomalatalabati.plus.app";
    // window.open("https://api.talabati.plus/ar", "_blank");
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // Redirect to Apple App Store
    window.location.href = "https://apps.apple.com/app/id1596505868";
  }else{
    Swal.fire({
      text: "هل تريد الذهاب الى المتجر؟",
      imageUrl: "/assets/main/logo.png", // Replace with your image URL
      imageHeight: 60, // Set height of the image
      showCancelButton: true,
      confirmButtonText: "نعم, اذهب",
      cancelButtonText: "لا, إلغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "https://api.talabati.plus/ar";
      }
    });
  }
}
// Call the function when needed
window.onload = function () {
    redirectToStore();
};
