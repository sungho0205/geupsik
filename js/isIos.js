// Detects if device is on iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator.standalone;
// Checks if should display install popup notification:
if (isIos() &&
  !isInStandaloneMode() &&
  localStorage.getItem('homescreenbanner') !== 'true') {
  localStorage.setItem('homescreenbanner', 'true');
  Toastify({
    text: "아래 있는 공유 버튼을 눌러서 앱을 홈 화면에 추가해 보세요",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "wheat",
    },
    onClick: function () {} // Callback after click
  }).showToast();
}