/* ********************************************************************************************************* */
/*                                                                                                           */
/*                                                              :::::::::: ::::::::   :::::::: :::::::::::   */
/*   sub-anima.js                                              :+:       :+:    :+: :+:    :+:    :+:        */
/*                                                            +:+       +:+        +:+           +:+         */
/*   By: wsy <2553241022@qq.com>                             +#++:++#  +#++:++#++ :#:           +#+          */
/*                                                          +#+              +#+ +#+   +#+#    +#+           */
/*   Created: 2020/06/18 14:40:50 by wsy                   #+#       #+#    #+# #+#    #+#    #+#            */
/*   Updated: 2020/06/18 14:40:50 by wsy                  ########## ########   ######## ###########         */
/*                                                                                                           */
/* ********************************************************************************************************* */

define("subAnima", ["anime", "jquery"], function (anime, $) {
  var subAnimaDefault = {
    headPath: ".state-tone path",
  };
  function SubAnima({ target = target }) {
    //目标元素
    this.target = target;
    //头部动画元素
    this.headPath = null;
    //头部动画属性
    this.headPathAnimation = null;
    //初始化
    this.init();
  }
  SubAnima.prototype = {
    constructor: SubAnima,
    // ─── # ─────────────────────────────

    /**
     * @description
     * 初始化绑定动画
     * @author wsy
     * @date 2020-06-18  12:17:42
     */
    init() {
      var elePath = $(this.target).find(subAnimaDefault.headPath);
      this.headPath = $.map(elePath, function (item) {
        return item;
      });
      this.headPathAnima(this.headPath);
      this.bindMouseAnima();
    },
    // ─── # ─────────────────────────────

    //头部左侧修饰动画
    headPathAnima(headPath) {
      this.headPathAnimation = anime({
        targets: headPath,
        translateY: -8,
        delay: anime.stagger(60),
        fill: "#50E0FB",
        endDelay: 0,
        autoplay: false,
      });
    },
    // ─── # ─────────────────────────────

    // 开始动画
    starAnima() {
      // 鼠标移除事件有翻转动画,flag判断是否初次鼠标滑入，不是初次需反转动画
      if (this.starFlag) {
        this.headPathAnimation.reverse();
      } else {
        this.starFlag = true;
      }
      this.headPathAnimation.play();
    },
    // ─── # ─────────────────────────────

    // 停止动画
    stopAnima() {
      this.headPathAnimation.reverse();
      this.headPathAnimation.play();
    },
    // ─── # ─────────────────────────────
    // 绑定事件
    bindMouseAnima() {
      var self = this;
      $(this.target)
        .on("mouseenter", function () {
          self.starAnima();
        })
        .on("mouseleave", function () {
          self.stopAnima();
        });
    },
    // ─── # ─────────────────────────────
  };
  return SubAnima;
});
