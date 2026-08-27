// Template Name: Scooterr EV
// Version: 1.0.0
// Author: Webstrot 


/************ TABLE OF CONTENTS ***************

  01. preloader js
  02. owlCarousel js
  03. Outer height js
  04. Element rotated on scroll js
  05. Header Scroll js
  06. Mouse Animation 
  07. Mouse Animation 
  08. Dropdown js
  09. Mobile menu toggle js
  10. YouTube Popup (Vanilla)
  11. jQuery YouTube Integration
  12. AOS Initialization
  13. select2 Initialization
  14. SVG Animation Trigger
  15. Init all players
  16. OwlCarousel JS
  17. Pagination Animation JS
  18. google map js
  19. state city dropdown js
  20. Countdown
  21. Initialize only when DOM is ready
  22. our team nav js 
  23. Swiper JS init
  24. Owl Carousel: Related Services
  25. Owl Carousel: Happy Clients
  26. Collapse JS (Bootstrap)
  27. Color Option Tabs 
  28. Swiper Slider
  29. Owl Carousel (jQuery) 
  30. buttonPlus-buttonMinus
  31. Explore Accessories Slider
  32. Range Slider Initialization (Safe & Optimized)

**********************************************/

// ======================
// Preloader
// ======================
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(450).fadeOut('slow');
});

// ======================
// jQuery DOM Ready
// ======================
$(function () {
  const $body = $('body');
  const $header = $('.header');
  const $comingSoon = $('.comingSoon');

  // ======================
  // Functions
  // ======================
  function updateCartHeight() {
    const $total = $('.grandtotals');
    const $heading = $('.cartSidebarHeading');
    const $products = $('#sidebar-cart .products');

    if ($total.length && $heading.length && $products.length) {
      const h1 = $total.outerHeight() || 0;
      const h2 = $heading.outerHeight() || 0;
      const calcHeight = `calc(100vh - ${h1 + h2 + 83}px)`;
      $products.css('height', calcHeight);
    }
  }

  function updateHeading() {
    if ($header.length && $comingSoon.length) {
      const topHeaderHeight = $header.outerHeight() || 0;
      const newHeight = `calc(100vh - ${topHeaderHeight}px)`;
      $comingSoon.css('height', newHeight);
    }
  }

  // ======================
  // Initial Setup
  // ======================
  updateCartHeight();
  updateHeading();

  if ($('.loginRow').length) {
    $('.loginRow').addClass('loginCol1Active');
  }

  const scrollClass = 'headerActive';
  const savedScroll = parseInt(localStorage.getItem('scrollPosition'), 10);
  if (!isNaN(savedScroll) && savedScroll > 80) {
    $header.addClass(scrollClass);
  }

  // ======================
  // Events
  // ======================

  $(window).on('resize', function () {
    updateCartHeight();
    updateHeading();
  });

  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 80) {
      $header.addClass(scrollClass);
    } else {
      $header.removeClass(scrollClass);
    }
    localStorage.setItem('scrollPosition', scrollTop.toString());
  });

  // Sidebar Cart Toggle
  $body.on('click', '.cartIcon, .close-button, #sidebar-cart-curtain', function (e) {
    e.preventDefault();
    $body.toggleClass('show-sidebar-cart');
    $('#sidebar-cart-curtain').fadeToggle(500);
  });

  // Quantity +/-
  $body.on('click', '.plus-button, .minus-button', function () {
    const $qty = $(this).closest('.qty').find('.qty-input');
    if (!$qty.length) return;

    const val = parseFloat($qty.val()) || 0;
    const max = parseFloat($qty.attr('max')) || Infinity;
    const min = parseFloat($qty.attr('min')) || 0;
    const step = parseFloat($qty.attr('step')) || 1;

    if ($(this).hasClass('plus-button') && val + step <= max) {
      $qty.val(val + step);
    } else if ($(this).hasClass('minus-button') && val - step >= min) {
      $qty.val(val - step);
    } else {
      $qty.val(min);
    }
  });

  // Header Nav & Sidebar Toggles
  $body.on('click', '#nav-icon2', function () {
    $(this).toggleClass('open');
  });

  $body.on('click', '.blogFilterIcon, .blogFilterCloseIcon', function () {
    $('.lunchboxSidebar').toggleClass('active');
  });

  $body.on('click', '.toggleBar a, .sideToggleIcon', function () {
    $('.sideToggleBar').toggleClass('active');
  });

  $body.on('click', '.mobToggleBar1', function () {
    $('.loginRow').addClass('loginCol2Active').removeClass('loginCol1Active');
  });

  $body.on('click', '.mobToggleBar2', function () {
    $('.loginRow').addClass('loginCol1Active').removeClass('loginCol2Active');
  });

  $body.on('click', '.search', function () {
    $('.sideToggleBar').toggleClass('active');
    $('.menuSearchGroup').toggleClass('activeSearch').removeClass('activeMenu');
  });

  $body.on('click', '.toggleBar', function () {
    $('.menuSearchGroup').toggleClass('activeMenu').removeClass('activeSearch');
  });

  $body.on('click', '.sideToggleIcon', function () {
    $('.menuSearchGroup').removeClass('activeSearch activeMenu');
  });

  $body.on('click', '.toggleSidebarClose, .filterIcon', function () {
    $('.blogSidebar').toggleClass('active');
  });

  // Dropdown Hover
  $body.on('mouseenter mouseleave', '.dropdown', function () {
    $(this).toggleClass('active open');
    $(this).find('.dropdown-menu').not('.in .dropdown-menu').stop(true, true).slideToggle(400);
  });

  // Bootstrap Dropdown Animate
  $('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });

  $('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });

  $(".navbar-nav .dropdown").hover(
    function () {
      $(this).find('.dropdown-menu').stop(true, true).slideDown(400);
      $(this).addClass('open');
    },
    function () {
      $(this).find('.dropdown-menu').stop(true, true).slideUp(400);
      $(this).removeClass('open');
    }
  );
});

// ======================
// Scroll-based CSS Variable
// ======================
window.addEventListener('scroll', () => {
  document.body.style.setProperty(
    '--scroll',
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );
}, false);

// ======================
// Mousemove Animation
// ======================
document.addEventListener('mousemove', function (e) {
  document.querySelectorAll('.movingjs').forEach(function (move) {
    const val = parseFloat(move.getAttribute('data-value')) || 0;
    const x = (e.clientX * val) / 250;
    const y = (e.clientY * val) / 250;
    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// ======================
// Quantity Buttons (Vanilla)
// ======================
document.addEventListener('DOMContentLoaded', function () {
  const quantities = document.querySelectorAll('.quantity');
  const increaseBtns = document.querySelectorAll('.increase');
  const decreaseBtns = document.querySelectorAll('.decrease');

  increaseBtns.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      const input = quantities[i];
      const currentVal = parseInt(input.value, 10) || 0;
      input.value = currentVal + 1;
    });
  });

  decreaseBtns.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      const input = quantities[i];
      const currentVal = parseInt(input.value, 10) || 1;
      if (currentVal > 1) {
        input.value = currentVal - 1;
      }
    });
  });
});


// ==========================
// Sidebar Height & Toggle (Mobile)
// ==========================
let sidebarInitialized = false;

function adjustSidebarHeight() {
  const header = document.querySelector('.dubaiHealthHeader');
  const sidebar = document.querySelector('.evBlogSidebar');

  if (!sidebar) return;

  if (window.innerWidth <= 991) {
    const headerHeight = header ? header.offsetHeight : 0;
    sidebar.style.height = `calc(100vh - ${headerHeight}px)`;
    sidebar.style.overflowY = "auto";
  } else {
    sidebar.style.height = '';
    sidebar.style.overflowY = '';
  }
}

function initSidebarForMobile() {
  const sidebar = document.querySelector('.evBlogSidebar');
  const filterToggle = document.querySelector('.evSidebarFilterToggle');
  const closeButton = document.querySelector('.blogSidebarClose');

  if (!sidebar || sidebarInitialized) return;

  filterToggle?.addEventListener('click', () => sidebar.classList.toggle('active'));
  closeButton?.addEventListener('click', () => sidebar.classList.remove('active'));

  sidebar.addEventListener('wheel', function (event) {
    const isAtTop = sidebar.scrollTop === 0 && event.deltaY < 0;
    const isAtBottom = sidebar.scrollHeight - sidebar.scrollTop <= sidebar.clientHeight && event.deltaY > 0;
    if (isAtTop || isAtBottom) event.preventDefault();
  }, { passive: false });

  sidebarInitialized = true;
  adjustSidebarHeight();
}

function checkAndInitSidebar() {
  if (window.innerWidth <= 991 && !sidebarInitialized) {
    initSidebarForMobile();
  }
}

document.addEventListener('DOMContentLoaded', checkAndInitSidebar);
window.addEventListener('load', adjustSidebarHeight);
window.addEventListener('resize', () => {
  adjustSidebarHeight();
  checkAndInitSidebar();
});

// ==========================
// Toggle Password Visibility
// ==========================
$(document).on("click", ".toggle-password", function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  const input = $($(this).data("toggle"));
  const isPassword = input.attr("type") === "password";
  input.attr("type", isPassword ? "text" : "password");
});

// ==========================
// YouTube Popup (Vanilla)
// ==========================
function grtYouTube(elements, options = {}) {
  elements.forEach(element => {
    const videoID = element.dataset.youtubeId;
    if (!videoID) return;

    const settings = {
      videoID: videoID,
      autoPlay: options.autoPlay ?? true,
      theme: options.theme === "light" ? "grtyoutube-light-theme" : "grtyoutube-dark-theme"
    };

    element.addEventListener("click", function (e) {
      e.preventDefault();
      const popup = document.createElement("div");
      popup.className = `grtyoutube-popup ${settings.theme}`;
      popup.innerHTML = `
        <div class="grtyoutube-popup-content">
          <span class="grtyoutube-popup-close">&times;</span>
          <iframe class="grtyoutube-iframe" 
            src="https://www.youtube.com/embed/${settings.videoID}?rel=0&wmode=transparent&autoplay=${settings.autoPlay ? 1 : 0}&iv_load_policy=3" 
            frameborder="0" allow="autoplay; fullscreen">
          </iframe>
        </div>
      `;
      document.body.appendChild(popup);

      popup.querySelector(".grtyoutube-popup-close").addEventListener("click", () => popup.remove());
      popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.remove();
      });
    });
  });

  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".grtyoutube-popup").forEach(popup => popup.remove());
    }
  });
}

// ==========================
// jQuery YouTube Integration
// ==========================
if ($(".youtube-link").length > 0 && $.fn.grtyoutube) {
  $(".youtube-link").grtyoutube({
    autoPlay: true,
    theme: "dark",
  });
}

// ==========================
// AOS Initialization
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      // once: true,
    });
  }
});

// ==========================
// select2 Initialization
// ==========================
$(function () {
  if ($.fn.select2 && $(".selectFiled").length) {
    $(".selectFiled").each(function () {
      $(this).select2({
        placeholder: $(this).data("placeholder"),
        allowClear: false,
      });
    });
  }

  // ==========================
  // SVG Animation Trigger
  // ==========================
  $('.plugSvg').addClass('active');
});



$('.aboutOurTeamCarousel').owlCarousel({
  loop: false,
  margin: 30,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});

$('.brandsCarousel').owlCarousel({
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  smartSpeed: 800,
  margin: 30,
  responsiveClass: true,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2.8
    },
    768: {
      items: 3.8
    },
    1200: {
      items: 5.8
    }
  }
});





document.addEventListener("DOMContentLoaded", function () {
  // Counter
  if (window.jQuery && $(".counter").length > 0) {
    $(".counter").each(function () {
      const $this = $(this);
      const countTo = parseInt($this.attr("data-countto"));
      const countDuration = parseInt($this.attr("data-duration")) || 1000;

      $({ counter: $this.text() }).animate(
        { counter: countTo },
        {
          duration: countDuration,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.counter));
          },
          complete: function () {
            $this.text(this.counter);
          }
        }
      );
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  class AudioPlayer {
    constructor(audioPlayer) {
      this.audio = audioPlayer.querySelector('.audio-element');
      this.playPauseButton = audioPlayer.querySelector('.play-pause-button');
      this.currentTimeEl = audioPlayer.querySelector('.current-time-text');
      this.durationEl = audioPlayer.querySelector('.duration-text');
      this.progressBar = audioPlayer.querySelector('.progress-bar-display');
      this.volumeButton = audioPlayer.querySelector('.volume-button');
      this.volumeBar = audioPlayer.querySelector('.volume-bar');

      if (
        this.audio && this.playPauseButton && this.currentTimeEl &&
        this.durationEl && this.progressBar && this.volumeButton && this.volumeBar
      ) {
        this.init();
      }
    }

    init() {
      this.playPauseButton.addEventListener('click', () => this.togglePlayPause());
      this.audio.addEventListener('timeupdate', () => this.updateProgressBar());
      this.audio.addEventListener('loadedmetadata', () => this.setDuration());
      this.audio.addEventListener('ended', () => this.resetPlayer());
      this.audio.addEventListener('canplay', () => this.setDuration());

      this.volumeButton.addEventListener('click', () => this.toggleVolumeBar());
      this.volumeBar.addEventListener('input', (e) => this.updateVolume(e));
      this.progressBar.addEventListener('input', (e) => this.updateAudioTime(e));

      this.loadVolume();
    }

    togglePlayPause() {
      if (this.audio.paused) {
        this.audio.play();
        this.playPauseButton.innerHTML = '<i class="fa fa-pause"></i>';
      } else {
        this.audio.pause();
        this.playPauseButton.innerHTML = '<i class="fa fa-play"></i>';
      }
    }

    updateProgressBar() {
      this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
      const percent = (this.audio.currentTime / this.audio.duration) * 100;
      this.progressBar.value = percent || 0;
    }

    updateAudioTime(e) {
      const percent = e.target.value;
      const newTime = (percent / 100) * this.audio.duration;
      this.audio.currentTime = newTime;
    }

    setDuration() {
      if (this.audio.duration) {
        this.durationEl.textContent = this.formatTime(this.audio.duration);
      }
    }

    resetPlayer() {
      this.playPauseButton.innerHTML = '<i class="fa fa-play"></i>';
      this.progressBar.value = 0;
      this.currentTimeEl.textContent = '00:00';
    }

    toggleVolumeBar() {
      this.volumeBar.style.display = this.volumeBar.style.display === 'block' ? 'none' : 'block';
    }

    updateVolume(e) {
      const volume = e.target.value;
      this.audio.volume = volume / 100;
      localStorage.setItem('audioVolume', volume);
      this.volumeButton.innerHTML = volume === '0'
        ? '<i class="fas fa-volume-mute"></i>'
        : '<i class="fas fa-volume-up"></i>';
    }

    loadVolume() {
      const storedVolume = localStorage.getItem('audioVolume') || 100;
      this.audio.volume = storedVolume / 100;
      this.volumeBar.value = storedVolume;
      this.volumeButton.innerHTML = storedVolume === '0'
        ? '<i class="fas fa-volume-mute"></i>'
        : '<i class="fas fa-volume-up"></i>';
    }

    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  }

  // Init all players
  document.querySelectorAll('.audio-player').forEach(player => new AudioPlayer(player));
});


document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById('video');
  const playPauseBtn = document.getElementById('play-pause');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.querySelector('.progress-container');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const volumeBtn = document.getElementById('volume-btn');
  const volumeSlider = document.getElementById('volume-slider');
  const fullscreenBtn = document.getElementById('fullscreen');

  if (
    video && playPauseBtn && progressBar && progressContainer &&
    currentTimeEl && durationEl && volumeBtn && volumeSlider && fullscreenBtn
  ) {
    // Format time to mm:ss
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Set duration when metadata is loaded
    video.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(video.duration);
    });

    // Update progress bar and current time
    video.addEventListener('timeupdate', () => {
      currentTimeEl.textContent = formatTime(video.currentTime);
      const progress = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${progress}%`;
    });

    // Play/Pause button
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });

    // When video ends
    video.addEventListener('ended', () => {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Clicking progress container seeks video
    progressContainer.addEventListener('click', (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * video.duration;
      video.currentTime = newTime;
    });

    // Load volume from localStorage or default to 1
    let storedVolume = parseFloat(localStorage.getItem('videoVolume'));
    if (isNaN(storedVolume)) storedVolume = 1;
    video.volume = storedVolume;
    volumeSlider.value = storedVolume;

    updateVolumeUI(storedVolume);

    // Volume slider change
    volumeSlider.addEventListener('input', (e) => {
      const volume = parseFloat(e.target.value);
      video.volume = volume;
      localStorage.setItem('videoVolume', volume);
      updateVolumeUI(volume);
    });

    // Mute/unmute button
    volumeBtn.addEventListener('click', () => {
      if (video.volume > 0) {
        video.dataset.lastVolume = video.volume;
        video.volume = 0;
        volumeSlider.value = 0;
      } else {
        const lastVol = parseFloat(video.dataset.lastVolume) || 1;
        video.volume = lastVol;
        volumeSlider.value = lastVol;
      }
      updateVolumeUI(video.volume);
    });

    function updateVolumeUI(volume) {
      volumeBtn.innerHTML = volume === 0
        ? '<i class="fas fa-volume-mute"></i>'
        : '<i class="fas fa-volume-up"></i>';
    }

    // Fullscreen toggle
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => console.error(err));
      } else {
        document.exitFullscreen().catch(err => console.error(err));
      }
    });
  }
});

// OwlCarousel JS
$(document).ready(function () {
  if (window.jQuery && $.fn.owlCarousel && $('.evBlogGridCarousel').length > 0) {
    $('.evBlogGridCarousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
    });
  }
});

// Pagination Animation JS
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.pBox');
  const parentBox = document.querySelector('.paginationMiddleBox');
  let index = 0;

  if (parentBox && boxes.length > 0) {
    function toggleParentClass() {
      parentBox.classList.toggle('parentActive');
      setTimeout(toggleParentClass, 2000);
    }

    function activateBox() {
      boxes.forEach(box => box.classList.remove('activeBox'));
      boxes[index].classList.add('activeBox');
      index = (index + 1) % boxes.length;
      setTimeout(activateBox, 2000);
    }

    toggleParentClass();
    activateBox();
  }
});

// google map js
class GoogleMap {
  constructor(mapElement) {
    this.mapElement = mapElement;
    this.map = null;
    this.markersData = [
      { lat: 27.2752, lng: 76.8107, icon: "images/legend.svg" },
      { lat: 19.0424, lng: 74.7893, icon: "images/legend.svg" },
      { lat: 23.1010, lng: 73.7785, icon: "images/legend.svg" },
      { lat: 22.8583, lng: 76.5690, icon: "images/legend.svg" },
      { lat: 23.1778, lng: 75.7898, icon: "images/legend.svg" },
      { lat: 22.9687, lng: 76.0530, icon: "images/legend.svg" },
      { lat: 23.2628, lng: 77.4140, icon: "images/legend.svg" },
      { lat: 26.4538, lng: 80.3260, icon: "images/legend.svg" },
      { lat: 23.6949, lng: 85.1947, icon: "images/legend.svg" },
    ];
  }

  init() {
    if (!this.mapElement) return;

    this.map = new google.maps.Map(this.mapElement, {
      center: { lat: 22.8178, lng: 79.7551 },
      zoom: 6,
    });

    this.addMarkers();
  }

  addMarkers() {
    this.markersData.forEach((data) => {
      const myLatlng = new google.maps.LatLng(data.lat, data.lng);
      new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: {
          url: data.icon,
        },
      });
    });
  }
}

function initAllMaps() {
  const mapElements = document.querySelectorAll(".dvMap");
  if (mapElements.length === 0) return;

  mapElements.forEach((mapElement) => {
    const googleMap = new GoogleMap(mapElement);
    googleMap.init();
  });
}

window.initAllMaps = initAllMaps;

function loadScript() {
  const mapElementsExist = document.querySelectorAll(".dvMap").length > 0;
  if (!mapElementsExist) return;

  if (window.google && window.google.maps) {
    initAllMaps();
    return;
  }

  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpaB_dPvL0RPGaE5dhKhI2Vu-mecFfGOY&callback=initAllMaps";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

window.onload = loadScript;

// state city dropdown js
const stateCityData = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangalore", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket"]
};

$(document).ready(function () {
  const $stateSelect = $('#stateSelect');
  const $citySelect = $('#citySelect');

  if ($stateSelect.length > 0 && $citySelect.length > 0) {
    // Populate States
    for (let state in stateCityData) {
      $stateSelect.append(new Option(state, state));
    }

    // On State Change
    $stateSelect.on('change', function () {
      const selectedState = $(this).val();
      const cities = stateCityData[selectedState] || [];

      $citySelect.empty().append('<option></option>');

      cities.forEach(function (city) {
        $citySelect.append(new Option(city, city));
      });

      $citySelect.val(null).trigger('change');
    });
  }
});


// Countdown
function startCountdown(targetDate) {
  const timerElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  const progressElements = {
    days: document.querySelector(".days .progress"),
    hours: document.querySelector(".hours .progress"),
    minutes: document.querySelector(".minutes .progress"),
    seconds: document.querySelector(".seconds .progress"),
  };

  // Exit if any required element is missing
  if (
    !timerElements.days ||
    !timerElements.hours ||
    !timerElements.minutes ||
    !timerElements.seconds ||
    !progressElements.days ||
    !progressElements.hours ||
    !progressElements.minutes ||
    !progressElements.seconds
  ) {
    return;
  }

  const circleLength = 2 * Math.PI * 45;

  function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(interval);
      Object.values(timerElements).forEach((el) => (el.textContent = "00"));
      Object.values(progressElements).forEach((el) => (el.style.strokeDashoffset = 0));
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    timerElements.days.textContent = String(days).padStart(2, "0");
    timerElements.hours.textContent = String(hours).padStart(2, "0");
    timerElements.minutes.textContent = String(minutes).padStart(2, "0");
    timerElements.seconds.textContent = String(seconds).padStart(2, "0");

    // Avoid divide-by-zero
    const dayPercentage = days > 0 ? (days / (days + 1)) * 100 : 0;
    const hourPercentage = (hours / 24) * 100;
    const minutePercentage = (minutes / 60) * 100;
    const secondPercentage = (seconds / 60) * 100;

    progressElements.days.style.strokeDashoffset = circleLength - (circleLength * dayPercentage / 100);
    progressElements.hours.style.strokeDashoffset = circleLength - (circleLength * hourPercentage / 100);
    progressElements.minutes.style.strokeDashoffset = circleLength - (circleLength * minutePercentage / 100);
    progressElements.seconds.style.strokeDashoffset = circleLength - (circleLength * secondPercentage / 100);
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Initialize only when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const countdownContainer = document.getElementById("days");
  if (countdownContainer) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 263);
    startCountdown(targetDate);
  }
});


// our team nav js
document.addEventListener('DOMContentLoaded', () => {
  const evOurTeamNav = document.querySelector('.evOurTeamNav');
  if (!evOurTeamNav) return; // Stop if element not found

  const navLinks = evOurTeamNav.querySelectorAll('.nav-link');
  let isDown = false;
  let startX, scrollLeft;

  evOurTeamNav.addEventListener('mousedown', (e) => {
    isDown = true;
    evOurTeamNav.classList.add('active');
    startX = e.pageX - evOurTeamNav.offsetLeft;
    scrollLeft = evOurTeamNav.scrollLeft;
  });

  evOurTeamNav.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - evOurTeamNav.offsetLeft;
    scrollLeft = evOurTeamNav.scrollLeft;
  });

  evOurTeamNav.addEventListener('mouseleave', () => {
    isDown = false;
    evOurTeamNav.classList.remove('active');
  });

  evOurTeamNav.addEventListener('mouseup', () => {
    isDown = false;
    evOurTeamNav.classList.remove('active');
  });

  evOurTeamNav.addEventListener('touchend', () => {
    isDown = false;
  });

  evOurTeamNav.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - evOurTeamNav.offsetLeft;
    const walk = (x - startX) * 2;
    evOurTeamNav.scrollLeft = scrollLeft - walk;
  });

  evOurTeamNav.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - evOurTeamNav.offsetLeft;
    const walk = (x - startX) * 2;
    evOurTeamNav.scrollLeft = scrollLeft - walk;
  });

  evOurTeamNav.addEventListener('selectstart', (e) => {
    if (isDown) e.preventDefault();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (isDown) e.preventDefault();
    });
  });
});

// DOM Ready wrapper
$(window).on('load', function () {

  // color option js
  const colorOptions = document.querySelectorAll('.color-option');
  const imageTabs = document.querySelectorAll('.scooter-images-Tab');

  if (colorOptions.length && imageTabs.length) {
    const activateTab = (targetImageId) => {
      imageTabs.forEach(tab => tab.style.display = 'none');
      const activeTab = document.getElementById(targetImageId);
      if (activeTab) activeTab.style.display = 'block';
      colorOptions.forEach(opt => opt.classList.remove('active'));
      const activeOption = document.querySelector(`.color-option[data-image="${targetImageId}"]`);
      if (activeOption) activeOption.classList.add('active');
    };

    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
      activateTab(savedTab);
    } else {
      const firstOption = colorOptions[0];
      if (firstOption) {
        const targetImageId = firstOption.getAttribute('data-image');
        activateTab(targetImageId);
      }
    }

    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        const targetImageId = option.getAttribute('data-image');
        localStorage.setItem('selectedTab', targetImageId);
        activateTab(targetImageId);
      });
    });
  }

  // increase decrease js
  window.increaseValue = function () {
    const input = document.getElementById('number');
    if (input) {
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      input.value = ++value;
    }
  };

  window.decreaseValue = function () {
    const input = document.getElementById('number');
    if (input) {
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      if (value > 1) input.value = --value;
    }
  };

});

// owlCarousel init
if (typeof $ !== 'undefined' && typeof $.fn.owlCarousel === 'function') {
  $('.relatedScooterCarousel').each(function () {
    $(this).owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 }
      }
    });
  });

  $('.evShopFeaturesCarousel').each(function () {
    $(this).owlCarousel({
      loop: false,
      margin: 30,
      responsiveClass: true,
      nav: false,
      center: true,
      responsive: {
        0: { items: 1 },
        768: { items: 1.4 },
        992: { items: 2 },
        1200: { items: 2.4 }
      }
    });
  });
}

// Swiper JS init
if (typeof Swiper !== 'undefined') {
  if (document.querySelector('.slider__thumbs .swiper-container')) {
    const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 15,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        0: { direction: 'horizontal' },
        768: { direction: 'vertical' }
      }
    });

    const sliderImages = new Swiper('.slider__images .swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 15,
      mousewheel: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      thumbs: { swiper: sliderThumbs },
      breakpoints: {
        0: { direction: 'horizontal' },
        768: { direction: 'vertical' }
      }
    });
  }

  if (document.querySelector('.gallery-top') && document.querySelector('.gallery-thumbs')) {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 30,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: { slidesPerView: 3 },
        992: { slidesPerView: 3 }
      }
    });

    const galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      thumbs: { swiper: galleryThumbs }
    });

    // Adjust height dynamically
    const topWidth = $('.gallery-top').outerWidth();
    $('.gallery-top').css('height', topWidth);

    const thumbsWidth = $('.gallery-thumbs .swiper-slide').outerWidth();
    $('.gallery-thumbs').css('height', thumbsWidth);
  }
}

// EasyZoom
if (typeof $ !== 'undefined' && typeof $.fn.easyZoom === 'function') {
  $('.easyzoom').easyZoom();
}



// Owl Carousel: Related Services
if (typeof $ !== 'undefined' && typeof $.fn.owlCarousel === 'function') {
  if ($('.relatedServicesCarousel').length) {
    $('.relatedServicesCarousel').owlCarousel({
      loop: false,
      center: true,
      margin: 30,
      responsiveClass: true,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 1 },
        450: { items: 1.4 },
        576: { items: 1.8 },
        768: { items: 2.8 },
        992: { items: 3.8 },
        1200: { items: 4.8 },
        1400: { items: 5.8 }
      }
    });
  }

  // Owl Carousel: Happy Clients
  if ($('.ourHappyClientCarousel').length) {
    $('.ourHappyClientCarousel').owlCarousel({
      center: true,
      items: 2,
      loop: true,
      margin: 30,
      responsive: {
        0: { items: 1.5 },
        576: { items: 2.1 },
        768: { items: 2.3 }
      }
    });
  }
}

// Collapse JS (Bootstrap)
document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.collapse');

  if (accordions.length) {
    function restoreAccordionState() {
      accordions.forEach(collapse => {
        const isOpen = localStorage.getItem(`accordion_${collapse.id}`) === 'true';
        const card = collapse.closest('.card');
        if (!card) return;

        if (isOpen) {
          collapse.classList.add('show');
          card.classList.add('accordion-open');
        } else {
          collapse.classList.remove('show');
          card.classList.remove('accordion-open');
        }
      });
    }

    accordions.forEach(collapse => {
      collapse.addEventListener('show.bs.collapse', () => {
        const card = collapse.closest('.card');
        if (card) {
          card.classList.add('accordion-open');
          localStorage.setItem(`accordion_${collapse.id}`, 'true');
        }
      });

      collapse.addEventListener('hide.bs.collapse', () => {
        const card = collapse.closest('.card');
        if (card) {
          card.classList.remove('accordion-open');
          localStorage.setItem(`accordion_${collapse.id}`, 'false');
        }
      });
    });

    restoreAccordionState();
    window.addEventListener('resize', restoreAccordionState);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const progressFills = document.querySelectorAll(".progress-fill");

  if (!progressFills.length) return;

  progressFills.forEach((fill) => {
    const percentage = parseFloat(fill.getAttribute("data-percentage")) || 0;
    fill.style.width = `${Math.min(Math.max(percentage, 0), 100)}%`;
  });
});



// ========== Color Option Tabs ==========
$(window).on('load', function () {
  const colorOptions = document.querySelectorAll('.color-option');
  const imageTabs = document.querySelectorAll('.scooter-images-Tab');

  if (!colorOptions.length || !imageTabs.length) return;

  const activateTab = (targetImageId) => {
    imageTabs.forEach(tab => tab.style.display = 'none');
    const activeTab = document.getElementById(targetImageId);
    if (activeTab) activeTab.style.display = 'block';

    colorOptions.forEach(opt => opt.classList.remove('active'));
    const activeOption = document.querySelector(`.color-option[data-image="${targetImageId}"]`);
    if (activeOption) activeOption.classList.add('active');
  };

  const getCurrentIndex = () => {
    return Array.from(colorOptions).findIndex(opt => opt.classList.contains('active'));
  };

  const navigateColor = (direction) => {
    const currentIndex = getCurrentIndex();
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = colorOptions.length - 1;
    if (newIndex >= colorOptions.length) newIndex = 0;

    const newOption = colorOptions[newIndex];
    const targetImageId = newOption.getAttribute('data-image');

    localStorage.setItem('selectedTab', targetImageId);
    activateTab(targetImageId);
  };

  const savedTab = localStorage.getItem('selectedTab');
  if (savedTab) {
    activateTab(savedTab);
  } else {
    activateTab(colorOptions[0].getAttribute('data-image'));
  }

  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      const targetImageId = option.getAttribute('data-image');
      localStorage.setItem('selectedTab', targetImageId);
      activateTab(targetImageId);
    });
  });

  const nextBtn = document.getElementById('nextColor');
  const prevBtn = document.getElementById('prevColor');
  if (nextBtn) nextBtn.addEventListener('click', () => navigateColor(1));
  if (prevBtn) prevBtn.addEventListener('click', () => navigateColor(-1));
});

// ========== Swiper Slider ==========
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper === 'undefined' || !document.querySelector('.swiper')) return;

  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 600,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    on: {
      init: function () {
        updateSlideCounter(this);
        updateFirstLastClasses(this);
      },
      slideChange: function () {
        updateSlideCounter(this);
        updateFirstLastClasses(this);
      },
    },
    breakpoints: {
      0: { slidesPerView: 1, centeredSlides: false },
      576: { slidesPerView: 3, centeredSlides: true },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  });

  function updateSlideCounter(swiper) {
    const counterElement = document.getElementById('slideCounter');
    if (!counterElement) return;
    const current = swiper.realIndex + 1;
    const total = swiper.wrapperEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
    counterElement.textContent = `${current}/${total}`;
  }

  function updateFirstLastClasses(swiper) {
    document.querySelectorAll('.swiper-slide.first, .swiper-slide.last')
      .forEach(slide => slide.classList.remove('first', 'last'));

    const prevEl = swiper.slides[swiper.activeIndex - 1];
    const nextEl = swiper.slides[swiper.activeIndex + 1];

    if (prevEl?.previousElementSibling) {
      prevEl.previousElementSibling.classList.add('first');
    }

    if (nextEl?.nextElementSibling) {
      nextEl.nextElementSibling.classList.add('last');
    }
  }
});


// ========== Owl Carousel (jQuery) ==========
$(document).ready(function () {
  const $owl = $('.slider-wrapper');
  if ($owl.length) {
    $owl.owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      dotsContainer: '.custom-dots'
    });

    function updateCounter(index, total) {
      let current = (index % total + total) % total;
      $('.slideCounter').text((current + 1).toString().padStart(2, '0'));
    }

    $owl.on('changed.owl.carousel', function (event) {
      const index = event.item.index - event.relatedTarget._clones.length / 2;
      updateCounter(index, event.item.count);
    });

    updateCounter(0, $owl.find('.owl-item:not(.cloned)').length);

    let resizeTimer;
    $(window).on('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        $owl.trigger('refresh.owl.carousel');
      }, 200);
    });
  }
});



// swiper js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper === 'undefined') return;

  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    speed: 600,
    grabCursor: true,
    on: {
      init: function () {
        updateSlideCounter(this);
        updateFirstLastClasses(this);
      },
      slideChange: function () {
        updateSlideCounter(this);
        updateFirstLastClasses(this);
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      576: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  function updateSlideCounter(swiper) {
    const counterElement = document.getElementById('slideCounter');
    if (!counterElement) return;

    const current = swiper.realIndex + 1;
    const total = swiper.wrapperEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;

    counterElement.textContent = `${current}/${total}`;
  }

  function updateFirstLastClasses(swiper) {
    // Remove old classes
    document.querySelectorAll('.swiper-slide.first, .swiper-slide.last').forEach(slide => {
      slide.classList.remove('first', 'last');
    });

    const slides = Array.from(swiper.slides);
    const prevEl = swiper.slides[swiper.activeIndex - 1];
    const nextEl = swiper.slides[swiper.activeIndex + 1];

    if (prevEl && prevEl.previousElementSibling) {
      prevEl.previousElementSibling.classList.add('first');
    }

    if (nextEl && nextEl.nextElementSibling) {
      nextEl.nextElementSibling.classList.add('last');
    }
  }
});

// buttonPlus-buttonMinus

var buttonPlus = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 1);
  }
});

// Explore Accessories Slider

$('.exploreAccessoriesSlider').owlCarousel({
  loop: false,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
    },
    575: {
      items: 2,

    },
    768: {
      items: 2,
      nav: false,
      dots: true,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    }
  }

})
$(".owl-nav .owl-prev").html('<svg fill="none" width="20px" height="20px" viewBox="0 0 20 20"><path fill="#08FAC2" d="M.25 10a.75.75 0 001.5 0H.25zM10 1.75a.75.75 0 000-1.5v1.5zm0 18a.75.75 0 000-1.5v1.5zm-6.44-4.593a.75.75 0 10-1.172.936l1.172-.936zM19 10.75a.75.75 0 000-1.5v1.5zM7.75 10l-.53-.53a.75.75 0 000 1.06l.53-.53zm3.905-2.845a.75.75 0 00-1.06-1.06l1.06 1.06zm-1.06 6.75a.75.75 0 101.06-1.06l-1.06 1.06zM1.75 10a8.25 8.25 0 012.416-5.834l-1.06-1.06A9.75 9.75 0 00.25 10h1.5zm2.416-5.834A8.25 8.25 0 0110 1.75V.25a9.75 9.75 0 00-6.894 2.856l1.06 1.06zM10 18.25a8.233 8.233 0 01-3.572-.812l-.65 1.352a9.733 9.733 0 004.224.96l-.002-1.5zm-3.572-.812a8.233 8.233 0 01-2.867-2.281l-1.172.936a9.734 9.734 0 003.39 2.697l.649-1.352zM19 9.25H7.75v1.5H19v-1.5zM8.28 10.53l3.375-3.375-1.06-1.06L7.22 9.47l1.06 1.06zm-1.06 0l3.375 3.375 1.06-1.06L8.28 9.47l-1.06 1.06z"/></svg>');

$(".owl-nav .owl-next").html('<svg fill="none" width="20px" height="20px" viewBox="0 0 20 20"><path fill="#08FAC2" d="M18.25 10a.75.75 0 001.5 0h-1.5zM10 .25a.75.75 0 000 1.5V.25zm0 18a.75.75 0 100 1.5v-1.5zm7.611-2.157a.75.75 0 10-1.171-.936l1.171.936zM1 9.25a.75.75 0 000 1.5v-1.5zm11.25.75l.53.53a.75.75 0 000-1.06l-.53.53zM9.405 6.095a.75.75 0 00-1.06 1.06l1.06-1.06zm-1.06 6.75a.75.75 0 101.06 1.06l-1.06-1.06zM19.75 10a9.75 9.75 0 00-2.856-6.894l-1.06 1.06A8.25 8.25 0 0118.25 10h1.5zm-2.856-6.894A9.75 9.75 0 0010 .25v1.5a8.25 8.25 0 015.834 2.416l1.06-1.06zM10 19.75a9.733 9.733 0 004.224-.96l-.65-1.352a8.234 8.234 0 01-3.572.812l-.002 1.5zm4.224-.96a9.734 9.734 0 003.388-2.697l-1.171-.936a8.232 8.232 0 01-2.867 2.281l.65 1.352zM1 10.75h11.25v-1.5H1v1.5zm11.78-1.28L9.405 6.095l-1.06 1.06 3.375 3.375 1.06-1.06zm-1.06 0l-3.375 3.375 1.06 1.06 3.375-3.375-1.06-1.06z"/></svg>');



// Range Slider Initialization (Safe & Optimized)

document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress"),
    resetBtn = document.querySelector(".reset-range"),
    maxPriceLabel = document.getElementById("maxPriceText");

  const maxRange = 350000;
  const priceGap = 1000;

  // Exit if essential elements are not found
  if (!rangeInput.length || !priceInput.length || !range) return;

  // Attach Reset Button (only if it exists)
  if (resetBtn) {
    resetBtn.addEventListener("click", resetRange);
  }

  function resetRange() {
    rangeInput[0].value = 0;
    rangeInput[1].value = maxRange;

    priceInput[0].value = 0;
    priceInput[1].value = maxRange;

    range.style.left = "0%";
    range.style.right = "0%";

    updateMaxPriceLabel(maxRange);
  }

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= maxRange) {
        if (e.target.classList.contains("input-min")) {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / maxRange) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / maxRange) * 100 + "%";
          updateMaxPriceLabel(maxPrice);
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.classList.contains("range-min")) {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;

        range.style.left = (minVal / maxRange) * 100 + "%";
        range.style.right = 100 - (maxVal / maxRange) * 100 + "%";

        updateMaxPriceLabel(maxVal);
      }
    });
  });

  function updateMaxPriceLabel(value) {
    if (maxPriceLabel) {
      maxPriceLabel.textContent = value.toLocaleString("en-IN");
    }
  }

  function initializeSlider() {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    priceInput[0].value = minVal;
    priceInput[1].value = maxVal;

    range.style.left = (minVal / maxRange) * 100 + "%";
    range.style.right = 100 - (maxVal / maxRange) * 100 + "%";

    updateMaxPriceLabel(maxVal);
  }

  initializeSlider();
});

