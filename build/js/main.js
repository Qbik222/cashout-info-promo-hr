"use strict";

var darkBtn = document.querySelector('.dark-btn');
darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
//
// function getOS() {
//     const userAgent = window.navigator.userAgent;
//     const platform = window.navigator.platform;
//     const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
//     const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
//     const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
//     let os = null;
//
//     if (macosPlatforms.includes(platform)) {
//         os = 'Mac OS';
//     } else if (iosPlatforms.includes(platform)) {
//         os = 'iOS';
//     } else if (windowsPlatforms.includes(platform)) {
//         os = 'Windows';
//     } else if (/Android/.test(userAgent)) {
//         os = 'Android';
//     } else if (!os && /Linux/.test(platform)) {
//         os = 'Linux';
//     }
//
//     return os;
// }
//
// const operatingSystem = getOS();
//
// if (operatingSystem === 'Android') {
//     if(window.innerWidth <= 600){
//         document.querySelector('.info__subtitle-top').style.backgroundPosition = "-5px, -9px"
//         document.querySelector('.guide__subtitle').style.backgroundPosition = "0, -.12em"
//     }
//     if(window.innerWidth <= 1024){
//         document.querySelector('.info__subtitle-top').style.backgroundPosition = "-5px, -14px"
//         document.querySelector('.guide__subtitle').style.backgroundPosition = "0, -.16em"
//     }
//
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGFya0J0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBRW5ERixPQUFPLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0VBQ25DRixRQUFRLENBQUNHLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzFDLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXJrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJylcblxuZGFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxufSlcbi8vXG4vLyBmdW5jdGlvbiBnZXRPUygpIHtcbi8vICAgICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbi8vICAgICBjb25zdCBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4vLyAgICAgY29uc3QgbWFjb3NQbGF0Zm9ybXMgPSBbJ01hY2ludG9zaCcsICdNYWNJbnRlbCcsICdNYWNQUEMnLCAnTWFjNjhLJ107XG4vLyAgICAgY29uc3Qgd2luZG93c1BsYXRmb3JtcyA9IFsnV2luMzInLCAnV2luNjQnLCAnV2luZG93cycsICdXaW5DRSddO1xuLy8gICAgIGNvbnN0IGlvc1BsYXRmb3JtcyA9IFsnaVBob25lJywgJ2lQYWQnLCAnaVBvZCddO1xuLy8gICAgIGxldCBvcyA9IG51bGw7XG4vL1xuLy8gICAgIGlmIChtYWNvc1BsYXRmb3Jtcy5pbmNsdWRlcyhwbGF0Zm9ybSkpIHtcbi8vICAgICAgICAgb3MgPSAnTWFjIE9TJztcbi8vICAgICB9IGVsc2UgaWYgKGlvc1BsYXRmb3Jtcy5pbmNsdWRlcyhwbGF0Zm9ybSkpIHtcbi8vICAgICAgICAgb3MgPSAnaU9TJztcbi8vICAgICB9IGVsc2UgaWYgKHdpbmRvd3NQbGF0Zm9ybXMuaW5jbHVkZXMocGxhdGZvcm0pKSB7XG4vLyAgICAgICAgIG9zID0gJ1dpbmRvd3MnO1xuLy8gICAgIH0gZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodXNlckFnZW50KSkge1xuLy8gICAgICAgICBvcyA9ICdBbmRyb2lkJztcbi8vICAgICB9IGVsc2UgaWYgKCFvcyAmJiAvTGludXgvLnRlc3QocGxhdGZvcm0pKSB7XG4vLyAgICAgICAgIG9zID0gJ0xpbnV4Jztcbi8vICAgICB9XG4vL1xuLy8gICAgIHJldHVybiBvcztcbi8vIH1cbi8vXG4vLyBjb25zdCBvcGVyYXRpbmdTeXN0ZW0gPSBnZXRPUygpO1xuLy9cbi8vIGlmIChvcGVyYXRpbmdTeXN0ZW0gPT09ICdBbmRyb2lkJykge1xuLy8gICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDYwMCl7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX19zdWJ0aXRsZS10b3AnKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcIi01cHgsIC05cHhcIlxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpZGVfX3N1YnRpdGxlJykuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCIwLCAtLjEyZW1cIlxuLy8gICAgIH1cbi8vICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0KXtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9fX3N1YnRpdGxlLXRvcCcpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiLTVweCwgLTE0cHhcIlxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpZGVfX3N1YnRpdGxlJykuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCIwLCAtLjE2ZW1cIlxuLy8gICAgIH1cbi8vXG4vLyB9XG4iXX0=
