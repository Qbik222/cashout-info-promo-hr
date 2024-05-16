const darkBtn = document.querySelector('.dark-btn')

darkBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark")
})

function getOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;

    if (macosPlatforms.includes(platform)) {
        os = 'Mac OS';
    } else if (iosPlatforms.includes(platform)) {
        os = 'iOS';
    } else if (windowsPlatforms.includes(platform)) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

const operatingSystem = getOS();

if (operatingSystem === 'Android') {
    if(window.innerWidth <= 600){
        document.querySelector('.info__subtitle-top').style.backgroundPosition = "-5px, -9px"
        document.querySelector('.guide__subtitle').style.backgroundPosition = "0, -.12em"
    }
    if(window.innerWidth <= 1024){
        document.querySelector('.info__subtitle-top').style.backgroundPosition = "-5px, -14px"
        document.querySelector('.guide__subtitle').style.backgroundPosition = "0, -.16em"
    }

}
