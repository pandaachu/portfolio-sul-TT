var mobile = !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)
  ? false
  : true;

$(document).ready(function() {
  loading;
  var countImages = $(".time-wrapper img").length;
  $(".time-wrapper")
    .imagesLoaded()
    .done(function(instance) {
      $("#progress-bar").css({
        width: "100%"
      });
      TweenMax.to("#loading", 0.5, {
        delay: 2,
        display: "none",
        autoAlpha: 0,
        ease: Quart.easeOut,
        onComplete: function() {
          // onComplete do something
          $(".time-kv ").addClass("on");
          setTimeout(function() {
            $(".kvSection .kvTitle ").addClass("on");
            $(".kvSection .kv-en").addClass("on");
          }, 500);
        }
      });
    })
    .progress(function(instance, image) {
      if (image.isLoaded) {
        $(image.img).addClass("loaded");
        var countLoadedImages = $(".time-wrapper img.loaded").length;
        var width = 100 * (countLoadedImages / countImages) + "%";
        $("#progress-bar").css({ width: width });
      }
    });

  // ingredient mobile aniamtion

  if ($(window).width() <= 767) {
    $(".igdtWrap").click(function() {
      $(this).toggleClass("on");
    });
    $(".honorstige-slider").addClass("owl-carousel");
  }

  // ingredient mobile aniamtion

  // mainMenu START
  $(".navigation_trigger").on("click", function() {
    $(".navigation_trigger").addClass("nav_in");
    $(".nav_cover").addClass("nav_in");
    $(".contents_nav").addClass("nav_in");
    $(".nav_close").addClass("nav_in");
    $(".nav_list").addClass("nav_in");
    $(".menu").addClass("nav_in");
    $("body").addClass("fixed");
    return false;
  });
  $(".nav_close").on("click", function() {
    $(".navigation_trigger").removeClass("nav_in");
    $(".nav_cover").removeClass("nav_in");
    $(".contents_nav").removeClass("nav_in");
    $(".nav_close").removeClass("nav_in");
    $(".nav_list").removeClass("nav_in");
    $(".menu").removeClass("nav_in");
    $("body").removeClass("fixed");
    return false;
  });
  $(".nav_list a").on("click", function() {
    $(".navigation_trigger").removeClass("nav_in");
    $(".nav_cover").removeClass("nav_in");
    $(".contents_nav").removeClass("nav_in");
    $(".nav_close").removeClass("nav_in");
    $(".nav_list").removeClass("nav_in");
    $(".menu").removeClass("nav_in");
    $("body").removeClass("fixed");
  });
  // mainMenu END

  //slider Start
  $(".product-owl-carousel")
    .on("initialized.owl.carousel changed.owl.carousel", function(e) {
      if (!e.namespace) {
        return;
      }
      var carousel = e.relatedTarget;
      var cnum = carousel.relative(carousel.current());
      $(".btns a").removeClass("on");
      $(".btns a")
        .eq(cnum)
        .addClass("on");
      $(".btns").removeClass("bg00 bg01 bg02 bg03 bg04 bg05 bg06 bg07");
      $(".btns").addClass("bg0" + cnum);
    })
    .owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 5000,
      paginationSpeed: 5000,
      autoplayHoverPause: true,
      nav: true,
      navText: [
        "<img src='assets/images/leftArrow.png'>",
        "<img src='assets/images/rightArrow.png'>"
      ]
    });

  var owldata = $(".owl-carousel").data("owl.carousel");
  $(".btns a").on("click", function() {
    var num = $(this).index();
    owldata.to(num);
    return false;
  });

  // honorstige - slider

  $(".honorstige-slider.owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    slideSpeed: 5000,
    paginationSpeed: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<img src='assets/images/honorstige-left-arrow.png'>",
      "<img src='assets/images/honorstige-right-arrow.png'>"
    ]
  });
  // slider END

  //   table START
  $(".locationSelect select").on("change", function() {
    $(".locationResult .result").removeClass("on");
    if ($(this).val() == "01") {
      $(".locationResult .result")
        .eq(0)
        .addClass("on");
    } else if ($(this).val() == "02") {
      $(".locationResult .result")
        .eq(1)
        .addClass("on");
    } else if ($(this).val() == "03") {
      $(".locationResult .result")
        .eq(2)
        .addClass("on");
    } else if ($(this).val() == "04") {
      $(".locationResult .result")
        .eq(3)
        .addClass("on");
    } else if ($(this).val() == "05") {
      $(".locationResult .result")
        .eq(4)
        .addClass("on");
    } else if ($(this).val() == "06") {
      $(".locationResult .result")
        .eq(5)
        .addClass("on");
    } else if ($(this).val() == "07") {
      $(".locationResult .result")
        .eq(6)
        .addClass("on");
    } else if ($(this).val() == "08") {
      $(".locationResult .result")
        .eq(7)
        .addClass("on");
    } else if ($(this).val() == "09") {
      $(".locationResult .result")
        .eq(8)
        .addClass("on");
    } else if ($(this).val() == "10") {
      $(".locationResult .result")
        .eq(9)
        .addClass("on");
    } else if ($(this).val() == "11") {
      $(".locationResult .result")
        .eq(10)
        .addClass("on");
    } else if ($(this).val() == "12") {
      $(".locationResult .result")
        .eq(11)
        .addClass("on");
    } else if ($(this).val() == "13") {
      $(".locationResult .result")
        .eq(12)
        .addClass("on");
    } else if ($(this).val() == "14") {
      $(".locationResult .result")
        .eq(13)
        .addClass("on");
    } else if ($(this).val() == "15") {
      $(".locationResult .result")
        .eq(14)
        .addClass("on");
    } else if ($(this).val() == "16") {
      $(".locationResult .result")
        .eq(15)
        .addClass("on");
    } else if ($(this).val() == "17") {
      $(".locationResult .result")
        .eq(16)
        .addClass("on");
    }
    return false;
  });

  $(".gotopBtn").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $(".time-kv").offset().top - 100
      },
      700
    );
    return false;
  });
  //   table END

  //   animate START
  AOS.init({
    duration: 1200,
    useClassNames: true,
    initClassName: false,
    animatedClassName: "animated"
  });
  //   animate END

  // pv setting
  var _preview = "";
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
  function Tracking() {
    var range = 50;
    var t1 = $(".intro").offset().top - range;
    var t2 = $(".ingredient").offset().top - range;
    var t3 = $(".productSlider").offset().top - range;
    var t4 = $("#honorstige").offset().top - range;
    var t5 = $(".time-event1-txt2").offset().top - range;
    var t6 = $(".time-event2-txt").offset().top - range;

    var _top = $(window).scrollTop() + $(window).height() / 2;
    if (_top >= t1 && _top <= t2) {
      if (_preview != "Intro") {
        _preview = "Intro";
        TrackPage("/vp/Timetreasure/Intro", "赤松介紹");
        TrackEvent("Timetreasure", "Scroll", "Intro");
      }
    } else if (_top > t2 && _top <= t3) {
      if (_preview != "3points") {
        _preview = "3points";
        TrackPage("/vp/Timetreasure/3points", "三大抗老核心成份");
        TrackEvent("Timetreasure", "Scroll", "3points");
      }
    } else if (_top > t3 && _top <= t4) {
      if (_preview != "Products") {
        _preview = "Products";
        TrackPage("/vp/Timetreasure/Products", "產品系列");
        TrackEvent("Timetreasure", "Scroll", " Products");
      }
    } else if (_top > t4 && _top <= t5) {
      if (_preview != "honorstige") {
        _preview = "honorstige";
        TrackPage("/vp/Timetreasure/honorstige", "臻雪煥采琉金活膚系列");
        TrackEvent("Timetreasure", "Scroll", "honorstige");
      }
    } else if (_top > t5 && _top <= t6) {
      if (_preview != "60mSPA") {
        _preview = "60mSPA";
        TrackPage("/vp/Timetreasure/60mSPA", "頂級琥珀開運奢寵療程");
        TrackEvent("Timetreasure", "Scroll", "60mSPA");
      }
    } else if (_top > t6) {
      if (_preview != "30mSPA") {
        _preview = "30mSPA";
        TrackPage("/vp/Timetreasure/30mSPA", "貴婦好命光開運術");
        TrackEvent("Timetreasure", "Scroll", "30mSPA");
      }
    }
  }
  window.addEventListener("scroll", debounce(Tracking, 500));
  if (_preview == "") {
    _preview = "Intro";
  }

  //scroll到底觸發追蹤
  $(window).scroll(function() {
    // Returns height of browser viewport
    var window_height = $(window).height();

    var window_scrollTop = $(window).scrollTop();

    // Returns height of HTML document
    var document_height = $(document).height();

    console.log(window_height);
    console.log(window_scrollTop);
    console.log(document_height);

    if (window_height + window_scrollTop == document_height) {
      TrackEvent("Timetreasure", "Scroll", "Store");
    }
  });

  $(".shop-btn-pc").on("click", function() {
    TrackEvent("Timetreasure", "Click", "Store_btn");
  });
  $(".shop-btn-mb").on("click", function() {
    TrackEvent("Timetreasure", "Click", "Store");
  });
  $(".shopBtn2").on("click", function() {
    TrackEvent("Timetreasure", "Click", "Store_PC");
  });
  $(".more-btn-cream").on("click", function() {
    TrackEvent("Timetreasure", "Click", "Honorstige_Cream");
  });
  $(".more-btn-serum").on("click", function() {
    TrackEvent("Timetreasure", "Click", "Honorstige_Serum");
  });
  
});

// youtube api
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    width: "100%",
    height: "100%",
    // 這邊放video id
    videoId: "CzTy-GD1LIo",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    },
    playerVars: {
      showinfo: 0,
      rel: 0,
      playsinline: 1
    }
  });
}
function onPlayerReady(event) {}
function onPlayerStateChange(event) {
  // player狀態變更成播完
  if (event.data == 0) {
    // 裡面放追蹤碼
  }
}
function stopVideo() {
  player.stopVideo();
}

// on screen animation

$(window).scroll(function() {
  $(".animate").each(function() {
    if ($(this).isOnScreen(0, 0.1) == true) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});
