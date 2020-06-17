// ====================================================== //
// ======================= 基本路径配置 ======================= //
// ====================================================== //
require.config({
  paths: {
    jquery: "./lib/jquery-3.4.1.min",
    anime: "./lib/anime.min",
  },
});

require(["jquery", "anime"], function ($, anime) {
  $(function () {
    var animation = anime({
      targets: ".state-tone path",
      translateY: -8,
      delay: anime.stagger(50),
      loop: true,
      direction: "alternate",
      // autoplay: false,
      // easing: "easeInOutSine",
    });
    // $(".box").click(function () {
    //   console.log(1);
    //   animation.play();
    //   console.log(animation);
    // });
  });
});
//  <main class="box">
//         <svg width="217px" height="141px">
//             <g class="state-tone" fill="#022f68">
//                 <path d="M 2.9 10.4 L 6.9 17.4 L 17.9 17.4 L 13.9 10.4 L 2.9 10.4 Z" />
//                 <path d="M 16 10.4 L 20 17.4 L 31 17.4 L 27 10.4 L 16 10.4 Z" />
//                 <path d="M 29.3 10.4 L 33.3 17.4 L 44.3 17.4 L 40.3 10.4 L 29.3 10.4 Z" />
//                 <path d="M 42.4 10.4 L 46.4 17.4 L 57.3 17.4 L 53.4 10.4 L 42.4 10.4 Z" />
//                 <path d="M 55.2 10.4 L 59.2 17.4 L 70.2 17.4 L 66.2 10.4 L 55.2 10.4 Z" />
//                 <path d="M 68.1 10.4 L 72.1 17.4 L 81.1 17.4 L 81.1 10.4 L 68.1 10.4 Z" />
//             </g>
//         </svg>
//     </main>