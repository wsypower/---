// ====================================================== //
// =================== require 基本路径配置 =================== //
// ====================================================== //
require.config({
  paths: {
    jquery: "./lib/jquery-3.4.1.min",
    anime: "./lib/anime.min",
    subAnima: "./sub-anima",
  },
});

require(["jquery", "anime", "subAnima"], function ($, anime, SubAnima) {
  $(function () {
    eachInit(".sub__project--item", function (item) {
      new SubAnima({
        target: item,
        subAnimaDefault: {
          headPath: ".state-tone path",
          arrowCircle: ".anima__go--icon circle",
          arrowPath: ".anima__go--icon path",
        },
      });
    });
  });
  /**
   * @description
   * 遍历初始化元素
   * @author wsy
   * @date 2020-06-18  11:25:02
   * @param {Object} ele your introduction
   * @param {Object} callback your introduction
   */
  function eachInit(ele, callback) {
    $(ele).each(function (index, item) {
      callback(item);
    });
  }
});
