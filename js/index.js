// ====================================================== //
// =================== require 基本路径配置 =================== //
// ====================================================== //
require.config({
  paths: {
    jquery: "./lib/jquery-3.4.1.min",
    anime: "./lib/anime.min",
  },
});

require(["jquery", "anime"], function ($, anime) {
  $(function () {
    var subAnimaMap = null;
    function animation(ele) {
      subAnimaMap = null;
      var animaAction = anime({
        // targets: ".state-tone path",
        targets: ele,
        translateY: -8,
        delay: anime.stagger(60),
        fill: "#50E0FB",
        endDelay: 0,
        direction: "alternate",
        autoplay: false,
        changeComplete: function (anim) {
          anim.pause();
        },
      });
      return animaAction;
    }
    $(".sub__project--item")
      .on("mouseenter", function () {
        var target = $(this).find(".state-tone path");
        var targetAnima = $.map(target, function (item) {
          return item;
        });
        var animaAction = animation(targetAnima);
        subAnimaMap = animaAction;
        animaAction.play();
      })
      .on("mouseleave", function () {
        subAnimaMap.reverse();
        subAnimaMap.play();
      });
  });
});
