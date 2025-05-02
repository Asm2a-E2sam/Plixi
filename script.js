document.addEventListener("DOMContentLoaded", function() {
    if ( document.querySelector(".main-title a") ) {
        const links = document.querySelectorAll(".main-title a");
        links.forEach(link => link.setAttribute("href", "https://plixi.com/"));
    }
    if ( document.querySelector(".site-logo a") ) {
        const links = document.querySelectorAll(".site-logo a");
        links.forEach(link => link.setAttribute("href", "https://plixi.com/"));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if ( document.querySelector(".main-title a") ) {
        const links = document.querySelectorAll(".main-title a");
        links.forEach( link => link.setAttribute("target", "_self"));
    }
    if ( document.querySelector(".site-logo a") ) {
        const links = document.querySelectorAll(".site-logo a");
        links.forEach( link => link.setAttribute("target", "_self"));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    jQuery(function(){
        var shrinkHeader = 70;
        jQuery(window).scroll(function() {
            var scroll = getCurrentScroll();
                if ( scroll >= shrinkHeader ) {
                         jQuery('.site-header').addClass('shrink');
                    }
                    else {
                            jQuery('.site-header').removeClass('shrink');
                    }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
            }
        });

        jQuery(document).ready(function($) {
			const utm_source = 'meta';
			const utm_campaign = 'plixi.co';
			const utm_medium = '';
			const utm_term = '';
			const utm_content = '';
			var lang = "";
			var siteLink;
			if (lang === '') {
				siteLink = `https://plixi.com/?utm_source=${encodeURIComponent(utm_source)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_term=${encodeURIComponent(utm_term)}&utm_content=${encodeURIComponent(utm_content)}`;
			} else {
				siteLink = "https://plixi.com/" + lang + `/?utm_source=${encodeURIComponent(utm_source)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_term=${encodeURIComponent(utm_term)}&utm_content=${encodeURIComponent(utm_content)}`;
			}
			$('.site-logo a').prop('href', siteLink);
		});
        
        jQuery(document).ready(function($) {
			const utm_source = 'meta';
			const utm_campaign = 'plixi.co';
			const utm_medium = '';
			const utm_term = '';
			const utm_content = '';
			var lang = "";
			var bannerLink;
			if (lang === '') {
				bannerLink = `https://plixi.com/anniversary-sale/?utm_source=${encodeURIComponent(utm_source)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_term=${encodeURIComponent(utm_term)}&utm_content=${encodeURIComponent(utm_content)}`;
			} else {
				bannerLink = "https://plixi.com/" + lang + `/anniversary-sale/?utm_source=${encodeURIComponent(utm_source)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_term=${encodeURIComponent(utm_term)}&utm_content=${encodeURIComponent(utm_content)}`;
			}
			$('.bannerLink').prop('href', bannerLink);
		});

        jQuery(document).ready(function($) {
			const utm_source = 'meta';
			const utm_campaign = 'plixi.co';
			const utm_medium = '';
			const utm_term = '';
			const utm_content = '';
			var lang = "";
			var pricingLink;
			if (lang === '') {
				pricingLink = `https://plixi.com/pricing/?utm_source=${encodeURIComponent(utm_source)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_term=${encodeURIComponent(utm_term)}&utm_content=${encodeURIComponent(utm_content)}`;
			} else {
				pricingLink = "https://plixi.com/" + lang + `/pricing/?utm_source=${encodeURIComponent(utm_source)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_term=${encodeURIComponent(utm_term)}&utm_content=${encodeURIComponent(utm_content)}`;
			}
			$('.pricingLink').prop('href', pricingLink);
		});

        jQuery(document).ready(function($) {
			var lang = "";
				var bannerLinkCalab;
				if (lang === '') {
					bannerLinkCalab = 'https://plixi.com/labourday-sale-ca';
				} else {
					bannerLinkCalab = "https://plixi.com/"+lang+"/labourday-sale-ca";
				}
				$('.bannerLinkCalab').prop('href', bannerLinkCalab);
		});
        jQuery(document).ready(function($) {
			var lang = "";
				var bannerLinkUslab;
				if (lang === '') {
					bannerLinkUslab = 'https://plixi.com/laborday-sale-us';
				} else {
					bannerLinkUslab = "https://plixi.com/"+lang+"/laborday-sale-us";
				}
				$('.bannerLinkUslab').prop('href', bannerLinkUslab);
		});
})

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButton');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});

function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second').textContent = seconds;
    }

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMemoCan');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_can');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_can').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_can').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_can').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMemo');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_memo');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_memo').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_memo').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_memo').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonbastille');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_bastille');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_bastille').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_bastille').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_bastille').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonargentina');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_argentina');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_argentina').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_argentina').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_argentina').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonunitedDe');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_unitedde');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_unitedde').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_unitedde').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_unitedde').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonprime');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
var userLang = document.querySelector('html').lang;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
var current = new Date(pstDate);
var currentHour = current.getHours();
var current_date;
if (currentHour >= 0 && currentHour < 6) {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
} else if (currentHour > 5 && currentHour < 12) {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
} else if (currentHour > 11 && currentHour < 18) {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
} else {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
}
var endTime = new Date(current_date);
endTime = Date.parse(endTime) / 1000;
var now = Date.parse(current) / 1000;
var timeLeft = endTime - now;
var days = Math.floor(timeLeft / 86400);
var hours = Math.floor((timeLeft - days * 86400) / 3600);
var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
if (hours < 10) { hours = "0" + hours; }
if (minutes < 10) { minutes = "0" + minutes; }
if (seconds < 10) { seconds = "0" + seconds; }
var flashSaleBannerDiv = document.querySelector('.prime-sale-banner-timer');
if (!!flashSaleBannerDiv) {
    flashSaleBannerDiv.querySelector('.sale_hour-prime').textContent = hours;
    flashSaleBannerDiv.querySelector('.sale_minute-prime').textContent = minutes;
    flashSaleBannerDiv.querySelector('.sale-second-prime').textContent = seconds;
}	
}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener("DOMContentLoaded", function() {
    if ( document.querySelector(".main-title a") ) {
        const links = document.querySelectorAll(".main-title a");
        links.forEach(link => link.setAttribute("href", "https://plixi.com/"));
    }
    if ( document.querySelector(".site-logo a") ) {
        const links = document.querySelectorAll(".site-logo a");
        links.forEach(link => link.setAttribute("href", "https://plixi.com/"));
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonspain');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});

function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_spain');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_spain').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_spain').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_spain').textContent = seconds;
    }

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonUsLabour');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_uslabour');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_uslabour').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_uslabour').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_uslabour').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMemoCanLab');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_can_lab');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_can_lab').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_can_lab').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_can_lab').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMemoCanLab');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_can_lab');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_can_lab').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_can_lab').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_can_lab').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonrepublicpt');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_republicpt');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_republicpt').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_republicpt').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_republicpt').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButton-mob');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobCan');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_can');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_can').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_can').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_can').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobMemo');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_memo');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_memo').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_memo').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_memo').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonprimeMob');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
var userLang = document.querySelector('html').lang;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
var current = new Date(pstDate);
var currentHour = current.getHours();
var current_date;
if (currentHour >= 0 && currentHour < 6) {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
} else if (currentHour > 5 && currentHour < 12) {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
} else if (currentHour > 11 && currentHour < 18) {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
} else {
    current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
}
var endTime = new Date(current_date);
endTime = Date.parse(endTime) / 1000;
var now = Date.parse(current) / 1000;
var timeLeft = endTime - now;
var days = Math.floor(timeLeft / 86400);
var hours = Math.floor((timeLeft - days * 86400) / 3600);
var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
if (hours < 10) { hours = "0" + hours; }
if (minutes < 10) { minutes = "0" + minutes; }
if (seconds < 10) { seconds = "0" + seconds; }
var flashSaleBannerDiv = document.querySelector('.mobile-prime-sale-banner-timer');
if (!!flashSaleBannerDiv) {
    flashSaleBannerDiv.querySelector('.sale_hour-prime').textContent = hours;
    flashSaleBannerDiv.querySelector('.sale_minute-prime').textContent = minutes;
    flashSaleBannerDiv.querySelector('.sale-second-prime').textContent = seconds;
}	
}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobargentina');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_argentina');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_argentina').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_argentina').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_argentina').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobbastille');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_bastille');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_bastille').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_bastille').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_bastille').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobindia');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_india');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_india').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_india').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_india').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobspain');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_spain');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_spain').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_spain').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_spain').textContent = seconds;
    }
}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobUslabour');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_uslabour');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_uslabour').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_uslabour').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_uslabour').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobCanLab');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_can_lab');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_can_lab').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_can_lab').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_can_lab').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMaxico');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_maxico');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_maxico').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_maxico').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_maxico').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobmaxico');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_maxico');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_maxico').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_maxico').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_maxico').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobunitedde');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_unitedde');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_unitedde').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_unitedde').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_unitedde').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobrepublicpt');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_republicpt');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_republicpt').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_republicpt').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_republicpt').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonthanksca');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_thanksca');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_thanksca').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_thanksca').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_thanksca').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonspainnational');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_spain_national');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_spain_national').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_spain_national').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_spain_national').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobspainnational');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_spain_national');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_spain_national').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_spain_national').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_spain_national').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMemoCanLab');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_can_lab');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_can_lab').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_can_lab').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_can_lab').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonhalloween');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_halloween');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_halloween').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_halloween').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_halloween').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobhalloween');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_halloween');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_halloween').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_halloween').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_halloween').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener("DOMContentLoaded", function () {
    jQuery(document).ready(function($) {
        var lang = "";
           var bannerRepublicPt;
           if (lang === 'en') {
              bannerRepublicPt = 'https://plixi.com/republicday-sale-pt';
           }else if (lang === '') {
              bannerRepublicPt = 'https://plixi.com/republicday-sale-pt';
           } else {
              bannerRepublicPt = "https://plixi.com/"+lang+"/republicday-sale-pt";
           }
           $('.bannerRepublicPt').prop('href', bannerRepublicPt);
     });
  
     jQuery(document).ready(function($) {
        var lang = "";
           var bannerNationalspain;
           if (lang === 'en') {
              bannerNationalspain = 'https://plixi.com/nationalday-sale-es';
           }else if (lang === '') {
              bannerNationalspain = 'https://plixi.com/nationalday-sale-es';
           } else {
              bannerNationalspain = "https://plixi.com/"+lang+"/nationalday-sale-es";
           }
           $('.bannerNationalspain').prop('href', bannerNationalspain);
     });

     jQuery(document).ready(function($) {
        var lang = "";
           var bannerThanksca;
           if (lang === 'en') {
              bannerThanksca = 'https://plixi.com/thanksgiving-sale-ca';
           }else if (lang === '') {
              bannerThanksca = 'https://plixi.com/thanksgiving-sale-ca';
           } else {
              bannerThanksca = "https://plixi.com/"+lang+"/thanksgiving-sale-ca";
           }
           $('.bannerThanksca').prop('href', bannerThanksca);
     });

     jQuery(document).ready(function($) {
        var lang = "";
           var halloweenLink;
           if (lang === 'en') {
              halloweenLink = 'https://plixi.com/halloween-sale';
           }else if (lang === '') {
              halloweenLink = 'https://plixi.com/halloween-sale';
           } else {
              halloweenLink = "https://plixi.com/"+lang+"/halloween-sale";
           }
           $('.halloweenLink').prop('href', halloweenLink);
     }); 
})


document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonblackfriday');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_blackfriday');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_blackfriday').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_blackfriday').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_blackfriday').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtoncybermonday');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_cybermonday');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_cybermonday').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_cybermonday').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_cybermonday').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobcybermonday');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_cybermonday');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_cybermonday').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_cybermonday').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_cybermonday').textContent = seconds;
    }	
}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener("DOMContentLoaded", function () {
    jQuery(document).ready(function($) {
		var lang = "";
			var cyberMondayLink;
			if (lang === 'en') {
				cyberMondayLink = 'https://plixi.com/cyber-monday-sale';
			}else if (lang === '') {
				cyberMondayLink = 'https://plixi.com/cyber-monday-sale';
			} else {
				cyberMondayLink = "https://plixi.com/"+lang+"/cyber-monday-sale";
			}
			$('.cyberMondayLink').prop('href', cyberMondayLink);
		});

})

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonholidaysale');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_holidaysale');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_holidaysale').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_holidaysale').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_holidaysale').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobholidaysale');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_holidaysale');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_holidaysale').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_holidaysale').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_holidaysale').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener("DOMContentLoaded", function () {
    jQuery(document).ready(function($) {
        var lang = "";
            var holidaySaleLink;
            if (lang === 'en') {
                holidaySaleLink = 'https://plixi.com/holiday-flash-sale';
            }else if (lang === '') {
                holidaySaleLink = 'https://plixi.com/holiday-flash-sale';
            } else {
                holidaySaleLink = "https://plixi.com/"+lang+"/holiday-flash-sale";
            }
            $('.holidaySaleLink').prop('href', holidaySaleLink);
        });

})

document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonnewyearsale');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.flash-sale-banner-timer_newyearsale');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_newyearsale').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_newyearsale').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_newyearsale').textContent = seconds;
    }	

}
setInterval(makeTimerGetStarted, 1000);
document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMobnewyearsale');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hideButtonMob');
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            var banner = document.querySelector('.top-bar');
            if (banner) {
                banner.style.display = 'none';
                var header = document.querySelector("header");
                header.style.setProperty('margin-top', '0', 'important');
                header.classList.add('banner-shrink');
            }
        });
    }
});
function makeTimerGetStarted() {
    var userLang = document.querySelector('html').lang;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var pstDate = new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' });
    var current = new Date(pstDate);

    var currentHour = current.getHours();

    var current_date;

    if (currentHour >= 0 && currentHour < 6) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 06:00:00";
    } else if (currentHour > 5 && currentHour < 12) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 12:00:00";
    } else if (currentHour > 11 && currentHour < 18) {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 18:00:00";
    } else {
        current_date = current.getDate() + " " + months[current.getMonth()] + " " + current.getFullYear() + " 00:00:00";
    }

    var endTime = new Date(current_date);

    endTime = Date.parse(endTime) / 1000;

    var now = Date.parse(current) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }


    var flashSaleBannerDiv = document.querySelector('.mobile-flash-sale-banner-timer_newyearsale');
    if (!!flashSaleBannerDiv) {
        flashSaleBannerDiv.querySelector('.sale_hour_newyearsale').textContent = hours;
        flashSaleBannerDiv.querySelector('.sale_minute_newyearsale').textContent = minutes;
        flashSaleBannerDiv.querySelector('.sale-second_newyearsale').textContent = seconds;
    }
}
setInterval(makeTimerGetStarted, 1000);

document.addEventListener("DOMContentLoaded", function () {
    jQuery(document).ready(function($) {
		var lang = "";
        var newYearSaleLink;
        if (lang === 'en') {
            newYearSaleLink = 'https://plixi.com/new-year-flash-sale';
		} else if (lang === '') {
            newYearSaleLink = 'https://plixi.com/new-year-flash-sale';
		} else {
			newYearSaleLink = "https://plixi.com/"+lang+"/new-year-flash-sale";
		}
		$('.newYearSaleLink').prop('href', newYearSaleLink);
    });
    jQuery(document).ready(function($) {
		var lang = "";
        var velSaleLink;
        if (lang === 'en') {
            velSaleLink = 'https://plixi.com/valentines-day-sale';
		} else if (lang === '') {
            velSaleLink = 'https://plixi.com/valentines-day-sale';
		} else {
			velSaleLink = "https://plixi.com/"+lang+"/valentines-day-sale";
		}
		$('.velSaleLink').prop('href', velSaleLink);
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const yearlySwitch = document.getElementById("yearlySwitch");
    const monthlySwitch = document.getElementById("monthlySwitch");
    const yearlyPrices = document.querySelectorAll(".yearly-price");
    const monthlyPrices = document.querySelectorAll(".monthly-price");
    const yearlyPlanbtn = document.querySelectorAll(".yearly-plans");
    const monthlyPlanbtn = document.querySelectorAll(".monthly-plans");

    yearlySwitch.addEventListener("click", function () {
        yearlySwitch.classList.add("selectedupgrade");
        monthlySwitch.classList.remove("selectedupgrade");
        yearlyPrices.forEach(price => price.style.display = "block");
        yearlyPlanbtn.forEach(btn => btn.style.display = "block");
        monthlyPrices.forEach(price => price.style.display = "none");
        monthlyPlanbtn.forEach(price => price.style.display = "none");
    });

    monthlySwitch.addEventListener("click", function () {
        monthlySwitch.classList.add("selectedupgrade");
        yearlySwitch.classList.remove("selectedupgrade");
        monthlyPrices.forEach(price => price.style.display = "block");
        monthlyPlanbtn.forEach(price => price.style.display = "block");
        yearlyPlanbtn.forEach(btn => btn.style.display = "none");
        yearlyPrices.forEach(price => price.style.display = "none");
    });
});