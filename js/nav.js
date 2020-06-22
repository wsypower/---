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
  function NavAnima({ target = target, subAnimaDefault = subAnimaDefault }) {
    //目标元素
    this.target = target;
    this.subAnimaDefault = subAnimaDefault;
    //头部动画元素
    this.headPath = null;
    //头部动画属性
    this.animaActiontion = null;
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
      // this.animaAction(...this.iteration(this.subAnimaDefault));
      this.bindMouseAnima();
    },
    // ─── # ─────────────────────────────

    //头部左侧修饰动画
    animaAction(headPath, arrowCircle, arrowPath) {
      this.animaActiontion = anime({
        targets: headPath,
        translateY: -8,
        delay: anime.stagger(60),
        fill: "#50E0FB",
        endDelay: 0,
        autoplay: false,
      });
      this.arrowIconAnima = anime
        .timeline({
          targets: arrowCircle,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          rotate: "180deg",
          fill: {
            value: "#fff",
            duration: 700,
            delay: 350,
          },
          fillOpacity: {
            value: "1",
          },
          duration: 700,
          delay: function (el, i) {
            console.log(i);
            return i * 250;
          },
          autoplay: false,
        })
        .add({
          targets: arrowPath,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
        });
    },
    // 出现的箭头指示器

    // ─── # ─────────────────────────────

    // 开始动画
    starAnima() {
      // 鼠标移除事件有翻转动画,flag判断是否初次鼠标滑入，不是初次需反转动画
      if (this.starFlag) {
        this.animaActiontion.reverse();
        this.arrowIconAnima.reverse();
      } else {
        this.starFlag = true;
      }
      this.animaActiontion.play();
      this.arrowIconAnima.play();
    },
    // ─── # ─────────────────────────────

    // 停止动画
    stopAnima() {
      this.animaActiontion.reverse();
      this.animaActiontion.play();
      this.arrowIconAnima.reverse();
      this.arrowIconAnima.play();
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
    iteration(def) {
      var self = this;
      return Object.values(def)
        .map(function (el) {
          return $(self.target).find(el);
        })
        .map(function (el) {
          return $.map(el, function (item) {
            return item;
          });
        });
    },
  };
  return NavAnima;
});
