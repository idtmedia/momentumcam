var olibro = {
    timer: false,
	sticky_header: function() {
        var headerSection = jQuery('.shopify-section__header');

        Stickyfill.add(headerSection.get(0));
        jQuery('.anchor').css('top', -headerSection.height());

        jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
          Stickyfill.remove(event.target);
        });

        jQuery(document).on('shopify:section:load', '#shopify-section-header', function(event) {
          Stickyfill.add(event.target);
        });
	},

    mobile_tablet_navigation: function() {
        jQuery('.sidebar-nav').trademarkMobileSidebar();

        jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
          jQuery(event.target).find('.sidebar-nav').data('plugin_trademarkMobileSidebar').destroy();
        });

        jQuery(document).on('shopify:section:load', '#shopify-section-header', function(event) {
          jQuery(event.target).find('.sidebar-nav').trademarkMobileSidebar();
        });
    },

    main_navigation: function() {
        jQuery('.header__main-nav').trademarkMainNav();

        jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
          jQuery(event.target).find('.header__main-nav').data('plugin_trademarkMainNav').destroy();
        });

        jQuery(document).on('ready', function(event) {
          jQuery('.header__main-nav').trademarkMainNav();
        });
    },
}


jQuery(document).ready(function() {
  for (var func in olibro) {
      if (olibro[func] instanceof Function) {
          olibro[func]();
      }
  }
});

