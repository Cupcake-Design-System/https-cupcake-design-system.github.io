$(document).ready(function () {
  $(".c-action-panel-close").on("click", function () {
    $(this).closest(".c-action-panel").toggleClass("c-action-panel-visible")
  }), $("#qv-basic-trigger").on("click", function () {
    $("#qv-basic").toggleClass("c-action-panel-visible"), $("#backdrop-main").toggle()
  }), $("#backdrop-main").on("click", function () {
    $("#backdrop-main").toggle(), $("#qv-basic").toggleClass("c-action-panel-visible")
  }), $("#qv-sm-trigger").on("click", function () {
    $("#qv-sm").toggleClass("c-action-panel-visible")
  }), $("#qv-lg-trigger").on("click", function () {
    $("#qv-lg").toggleClass("c-action-panel-visible")
  }), $("#qv-xl-trigger").on("click", function () {
    $("#qv-xl").toggleClass("c-action-panel-visible")
  }), $("#qv-xxl-trigger").on("click", function () {
    $("#qv-xxl").toggleClass("c-action-panel-visible")
  }), $("#qv-backdrop-dark-trigger").on("click", function () {
    $("#qv-backdrop-dark").toggleClass("c-action-panel-visible"), $("#backdrop-dark").toggle()
  }), $("#backdrop-dark").on("click", function () {
    $("#backdrop-dark").toggle(), $("#qv-backdrop-dark").toggleClass("c-action-panel-visible")
  })
}), 

$(document).ready(function () {
  $("#fab").click(function () {
    $(this).toggleClass("active")
  }), $(".c-dropdown").click(function () {
    $(this).find(".c-dropdown-list, .c-dropdown-grid").slideToggle(100)
  }), $(document).on("click", function (e) {
    var l = $(".c-dropdown");
    l === e.target || l.has(e.target).length || $(".c-dropdown-list, .c-dropdown-grid").slideUp("fast")
  })
}), 

$(document).ready(function () {
  $("#fullscreenLoaderBtn").click(function () {
    $("#fullscreenLoader").toggleClass("c-loader-visible")
  }), $("#fullscreenLoader").click(function () {
    $("#fullscreenLoader").removeClass("c-loader-visible")
  }), $("#fullscreenLoaderBtn2").click(function () {
    $("#fullscreenLoader2").toggleClass("c-loader-visible")
  }), $("#fullscreenLoader2").click(function () {
    $("#fullscreenLoader2").removeClass("c-loader-visible")
  })
}), 

$(document).ready(function () {
  $("#defaultBtn").click(function () {
    $("#newDark").toggleClass("c-modal-visible")
  }), $("#close, #cancel").click(function () {
    $("#newDark").removeClass("c-modal-visible")
  }), $("#largeBtn").click(function () {
    $("#largeModal").toggleClass("c-modal-visible")
  }), $("#close, #cancel").click(function () {
    $("#largeModal").removeClass("c-modal-visible")
  }), $("#smallBtn").click(function () {
    $("#smallModal").toggleClass("c-modal-visible")
  }), $("#close, #cancel").click(function () {
    $("#smallModal").removeClass("c-modal-visible")
  }), $("#centerBtn").click(function () {
    $("#centerModal").toggleClass("c-modal-visible")
  }), $("#close, #cancel").click(function () {
    $("#centerModal").removeClass("c-modal-visible")
  }), $("#fullscreenBtn").click(function () {
    $("#fullscreenModal").toggleClass("c-modal-visible")
  }), $("#close, #cancel").click(function () {
    $("#fullscreenModal").removeClass("c-modal-visible")
  })
}), 

$(document).ready(function () {
  $('a[href="#"]').click(function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
  }), $(".c-nav-toggle").click(function () {
    $(".c-nav-toggle").toggleClass("c-nav-toggle-active"), $(".c-header").toggleClass("c-nav-active")
  }), $("#sidenavHideToggle").on("click", function (e) {
    e.preventDefault(), $("#sidenavMain").removeClass("c-sidenav-folded").toggleClass("c-sidenav-hidden")
  }), $("#layoutFixedToggle").on("click", function (e) {
    e.preventDefault(), $("body").removeClass().toggleClass("c-layout-fixed"), $("#sidenavMain").removeClass("c-sidenav-folded")
  }), $("#sidenavFoldToggle").on("click", function (e) {
    e.preventDefault(), $("body").removeClass("c-layout-fixed c-layout-fixed-folded"), $("#sidenavMain").removeClass("c-sidenav-hidden").toggleClass("c-sidenav-folded")
  }), $("#sidenavMainFoldToggle").on("click", function (e) {
    e.preventDefault(), $("#sidenavMain").toggleClass("c-sidenav-folded")
  }), $("#fixedFoldToggle").on("click", function (e) {
    e.preventDefault(), $("body").addClass("c-layout-fixed c-layout-fixed-folded"), $("#sidenavMain").addClass("c-sidenav-folded")
  }), $("#sidenavUserToggle").on("click", function (e) {
    e.preventDefault(), $("#sidenavUser").toggleClass("c-sidenav-user-hidden")
  }), $("#sidenavDarkToggle").on("click", function (e) {
    e.preventDefault(), $(".c-sidenav").toggleClass("c-sidenav-dark")
  }), $("#actionPanelRightToggle").on("click", function (e) {
    e.preventDefault(), $("#actionPanelRight").toggleClass("c-action-panel-visible")
  }), $("#actionPanelLeftToggle").on("click", function (e) {
    e.preventDefault(), $("#actionPanelLeft").toggleClass("c-action-panel-visible")
  }), $("#actionPanelOverlayToggle").on("click", function (e) {
    e.preventDefault(), $("#actionPanelOverlay").toggleClass("c-action-panel-visible")
  }), $(".c-sidenav-user-dropdown").on("click", function (e) {
    e.preventDefault(), $("#user-nav").toggleClass("c-d-flex"), $(this).toggleClass("c-d-flex")
  });
  var c = "c-sidenav-menu",
    a = "c-sidenav-menu-item",
    o = "c-sidenav-menu-item-open",
    i = "c-sidenav-submenu-group";
  $("." + c).each(function () {
    $(this).find("." + a).has("." + i).children("." + a + " > .c-sidenav-menu-link").on("click", function (e) {
      e.preventDefault();
      var l = $(this),
        n = $(".c-sidenav-folded").find(".c-sidenav ." + c).children("." + a);
      l.parent("." + a).hasClass(o) ? l.parent("." + a).not(n).removeClass(o).children("." + i).slideUp(250) : l.parent("." + a).not(n).addClass(o).children("." + i).slideDown(250), "accordion" == l.parents("." + c).data("nav-type") && l.parent("." + a).not(n).siblings(":has(." + i + ")").removeClass(o).children("." + i).slideUp(250)
    })
  })
}(jQuery));
