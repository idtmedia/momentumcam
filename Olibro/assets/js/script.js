/**
 * Plugin to handle the Google Map
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkMap',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   * @constructor
   * @param {HTMLElement} element The element that will be monitored
   */
  function Plugin(element) {
    this.element = $(element);
    this.options = JSON.parse(this.element.attr('data-section-settings'));
    this.locations = [];
    this.markers = [];

    this.element.on('click', '[data-action="toggle-store"]', this._toggleStore.bind(this));
    this.element.on('click', '.featured-map__store-item', this._activateStore.bind(this));
    this.element.on('shopify:block:select', this._blockSelected.bind(this));

    this.googleMapContainer = this.element.find('.featured-map__gmap').get(0);

    if (this.options['apiKey'] && this.options['mapAddresses'].length > 0) {
      var $script = $('script[src*="' + this.options['apiKey'] + '&"]'),
        self = this;

      if ($script.length === 0) {
        $.getScript(
          'https://maps.googleapis.com/maps/api/js?key=' + this.options['apiKey']
        ).then(function() {
          self._initMap();
        });
      } else {
        this._initMap();
      }
    }

    $(window).on('resize.trademarkMap', this._repositionMap.bind(this));
  }

  Plugin.prototype.destroy = function() {
    $(window).off('resize.trademarkMap');
  };

  Plugin.prototype._blockSelected = function(event) {
    this._selectStore($(event.target));
  };

  Plugin.prototype._toggleStore = function(event) {
    this._selectStore($(event.currentTarget).closest('.featured-map__store-item'));
  };

  Plugin.prototype._activateStore = function(event) {
    this._selectStore($(event.currentTarget));
  };

  Plugin.prototype._selectStore = function(storeElement) {
    storeElement.addClass('featured-map__store-item--active');

    if (window.matchMedia('screen and (max-width: 800px)').matches) {
      storeElement.find('.featured-map__store-inner').slideDown()
        .end().find('.plus-button').addClass('plus-button--active');

      storeElement.siblings('.featured-map__store-item--active')
        .find('.featured-map__store-inner').slideUp()
        .end().find('.plus-button').removeClass('plus-button--active');
    }

    storeElement.siblings('.featured-map__store-item--active').removeClass('featured-map__store-item--active');

    this._repositionMap();
    this._setNewCenter(storeElement.attr('data-store-index'));
  };

  Plugin.prototype._initMap = function() {
    var geocoder = new google.maps.Geocoder(),
      self = this;

    var mapOptions = {
      zoom: self.options['zoom'],
      draggable: false,
      clickableIcons: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      disableDefaultUI: true
    };

    this.googleMap = new google.maps.Map(this.googleMapContainer, mapOptions);
    var styledMapType = new google.maps.StyledMapType(JSON.parse(this.element.find('[data-gmap-style]').html()));

    this.googleMap.mapTypes.set('styled_map', styledMapType);
    this.googleMap.setMapTypeId('styled_map');

    this._repositionMap();

    // We need to geocode each addresses individually
    this.options['mapAddresses'].forEach(function(address, index) {
      geocoder.geocode({ address: address }, function(results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          if (Shopify.designMode) {

          }
        } else {
          if (index === 0) {
            self.googleMap.setCenter(results[0].geometry.location);
          }

          self.locations[index] = results[0].geometry.location;

          var icon = {
            path: "M32.7374478,5.617 C29.1154478,1.995 24.2994478,0 19.1774478,0 C14.0544478,0 9.23944778,1.995 5.61744778,5.617 C-1.08555222,12.319 -1.91855222,24.929 3.81344778,32.569 L19.1774478,54.757 L34.5184478,32.6 C40.2734478,24.929 39.4404478,12.319 32.7374478,5.617 Z M19.3544478,26 C15.4954478,26 12.3544478,22.859 12.3544478,19 C12.3544478,15.141 15.4954478,12 19.3544478,12 C23.2134478,12 26.3544478,15.141 26.3544478,19 C26.3544478,22.859 23.2134478,26 19.3544478,26 Z",
            fillColor: index === 0 ? self.options['markerActiveColor'] : self.options['markerColor'],
            fillOpacity: 1,
            anchor: new google.maps.Point(15,55),
            strokeWeight: 0,
            scale: window.matchMedia('screen and (max-width: 559px)').matches ? 0.5 : (index === 0 ? 0.7 : 0.5)
          };

          self.markers[index] = new google.maps.Marker({
            map: self.googleMap,
            position: results[0].geometry.location,
            icon: icon
          });
        }
      });
    });
  };

  Plugin.prototype._setNewCenter = function(index) {
    var self = this,
      indexAsInt = parseInt(index);

    this.googleMap.panTo(this.locations[indexAsInt]);

    this.markers.forEach(function(marker, markerIndex) {
      if (markerIndex === indexAsInt) {
        marker.icon.fillColor = self.options['markerActiveColor'];
        marker.icon.scale = window.matchMedia('screen and (max-width: 559px)').matches ? 0.5 : 0.7;
      } else {
        marker.icon.fillColor = self.options['markerColor'];
        marker.icon.scale = 0.5;
      }

      marker.setMap(self.googleMap);
    });
  };

  /**
   * Reposition the GMap container (which allows to re-use it on mobile and desktop)
   *
   * @private
   */
  Plugin.prototype._repositionMap = function() {
    var container = null;

    if (window.matchMedia('screen and (min-width: 801px)').matches) {
      container = this.element.find('.featured-map__map-container--desktop');
    } else {
      container = this.element.find('.featured-map__store-item--active .featured-map__map-container--mobile');
    }

    container.append(this.googleMapContainer);

    var center = this.googleMap.getCenter();
    google.maps.event.trigger(this.googleMap, 'resize');
    this.googleMap.setCenter(center);
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle the header search
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkHeaderSearch',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   */
  function Plugin(element) {
    this.headerSearch = $(element);
    this.headerSearchForm = this.headerSearch.find('.header-search__form');
    this.headerInput = this.headerSearch.find('.header-search__input');
    this.headerSearchResults = this.headerSearch.find('.header-search__results-wrapper');

    this.searchResultsTemplate = Template7.compile($('#search-results-template').html());
    this.searchMode = "product,article,page",
    this.body = $('body');
    this.pageOverlay = $('.page__overlay');

    this.sidebarNavInstance = $('.sidebar-nav').data('plugin_trademarkMobileSidebar');
    this.miniCartInstance = $('.mini-cart').data('plugin_trademarkMiniCart');

    $('[data-action="open-search"]').on('click', $.proxy(this._openSearch, this));
    $('[data-action="close-search"]').on('click', $.proxy(this._closeSearch, this));

    this.headerInput.on('keyup', $.proxy(this._initSearch, this));

    this.headerSearchForm.on('submit', $.proxy(this._formSubmitted, this));
  }

  Plugin.prototype.destroy = function() {
    $('[data-action="open-search"]').off('click');
    $('[data-action="close-search"]').off('click');

    this.headerSearch.removeData('plugin_trademarkHeaderSearch');
    this.headerInput.off('keyup');
    this.headerSearchForm.off('submit');
    this.body.off('.trademarkHeaderSearch');
  };

  Plugin.prototype._openSearch = function(event) {
    var self = this;

    // If either mobile sidebar or mini-cart are open we must first close them, otherwise we open directly

    if (this.sidebarNavInstance.state === 'opening' || this.sidebarNavInstance.state === 'opened') {
      this.sidebarNavInstance._toggleSidebar(event);

      $(document).one('closed.trademarkMobileSidebar', function() {
        self._doOpenSearch();
      });
    } else if (undefined !== this.miniCartInstance && (this.miniCartInstance.state === 'opening' || this.miniCartInstance.state === 'opened')) {
      this.miniCartInstance._toggleMiniCart(event);

      $(document).one('closed.trademarkMiniCart', function() {
        self._doOpenSearch();
      });
    } else {
      this._doOpenSearch(); // Both are closed so we can open directly
    }

    event.preventDefault();
  };

  Plugin.prototype._closeSearch = function(event) {
    this.body.removeClass('no-scroll');
    this.pageOverlay.removeClass('page__overlay--open');
    this.headerSearch.removeClass('header-search--open');
    this.body.off('.trademarkHeaderSearch');

    event.preventDefault();
  };

  Plugin.prototype._doOpenSearch = function() {
    var self = this;

    this.body.addClass('no-scroll');
    this.pageOverlay.addClass('page__overlay--open');

    this.headerSearch.addClass('header-search--open');
    this.headerSearch.one('transitionend', function() {
      self._cursorFocus(self.headerInput);
    });

    this.body.on('keyup.trademarkHeaderSearch', function(event) {
      if (event.keyCode == 27) {
        self._closeSearch(event);
      }
    });

    this.body.on('click.trademarkHeaderSearch', function(outsideEvent) {
      if (!$(outsideEvent.target).closest('#shopify-section-header').length) {
        self._closeSearch(outsideEvent);
      }
    });
  };

  Plugin.prototype._initSearch = function(event) {
    var target = $(event.currentTarget);

    clearTimeout(target.data('timeout'));

    target.data('timeout', setTimeout($.proxy(this._doSearch, this), 250));
  };

  Plugin.prototype._doSearch = function(event) {
    // No autocompletion on mobile
    if (Modernizr.mq('(max-width: 559px)')) {
      return;
    }

    // If we are on mobile, we do a single search that will get all resources, based on the setting. If tablet and higher, we do two Ajax calls: one
    // that will fetch product only, and another one that will fetch anything else
    if (this.headerInput.val() === '') {
      this.headerSearchResults.empty();
      return; // No need to search if it's empty
    } else {
      this.headerSearchResults.html(this.searchResultsTemplate({is_loading: true}));
    }

    if (this.searchMode === 'product') {
      this._doCompleteSearch();
    } else {
      this._doSeparateSearch();
    }
  };

  Plugin.prototype._doCompleteSearch = function(event) {
    var self = this;

    $.ajax({
      method: 'GET',
      url: '/search?view=json',
      dataType: 'json',
      data: {
        q: this.headerInput.val() + '*',
        type: this.searchMode
      }
    }).then(function(data) {
      self.headerSearchResults.html(self.searchResultsTemplate({
        is_loading: false,
        split_search: false,
        on_sale_label: window.languages.productLabelsOnSale,
        results: data['results'],
        has_results: (data['results'].length > 0),
        results_count: data['results_count'],
        results_label: data['results_label'],
        results_url: (data['url'] + '&type=' + self.searchMode)
      }));

      
    });
  };

  Plugin.prototype._doSeparateSearch = function(event) {
    var searchTypes = this.searchMode.split(','),
      self = this;

    var firstSearch = $.ajax({
      method: 'GET',
      url: '/search?view=json',
      dataType: 'json',
      data: {
        q: this.headerInput.val() + '*',
        type: searchTypes[0]
      }
    });

    var lastSearch = $.ajax({
      method: 'GET',
      url: '/search?view=json',
      dataType: 'json',
      data: {
        q: this.headerInput.val() + '*',
        type: searchTypes.slice(1).join(',')
      }
    });

    $.when(firstSearch, lastSearch).then(function(data1, data2) {
      self.headerSearchResults.html(self.searchResultsTemplate({
        is_loading: false,
        split_search: true,
        on_sale_label: window.languages.productLabelsOnSale,
        has_products_results: (data1[0]['results'].length > 0),
        has_others_results: (data2[0]['results'].length > 0),
        products: {
          results: data1[0]['results'],
          results_count: data1[0]['results_count'],
          results_label: data1[0]['results_label'],
          results_url: (data1[0]['url'] + '&type=' + searchTypes[0])
        },
        others: {
          results: data2[0]['results'],
          results_count: data2[0]['results_count'],
          results_label: data2[0]['results_label'],
          results_url: (data2[0]['url'] + '&type=' + searchTypes.slice(1).join(','))
        }
      }));

      
    });
  };

  Plugin.prototype._formSubmitted = function(event) {
    this.headerInput.val(this.headerInput.val() + '*');
    return true;
  };

  /**
   * Allow to give focus on an item while preserving scroll position
   */
  Plugin.prototype._cursorFocus = function(element) {
    var x = window.scrollX,
      y = window.scrollY;

    element.focus();
    window.scrollTo(x, y);
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle home slideshow
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkHomeSlideshow',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   * @constructor
   * @param {HTMLElement} element The element that will be monitored
   */
  function Plugin(element) {
    this.slideshow = $(element);
    this.slideshowAnchor = this.slideshow.find('.slideshow--anchor');
    this.slideshowAnchorSlides = this.slideshowAnchor.find('.slideshow__slide');
    this.slideshowMain = this.slideshow.find('.slideshow--main');
    this.slideshowMainSlides = this.slideshowMain.find('.slideshow__slide');
    this.slideshowSlidesCount = this.slideshowMainSlides.length;
    this.slideshowCount = this.slideshow.find('.slideshow__current-slide');
    this.slideshowButtons = this.slideshow.find('.slideshow__nav-button');
    this.hasTransitionPending = false;
    this.paused = false;

    this.slideshow.find('.slideshow__nav-next').on('click', $.proxy(this.nextSlide, this));
    this.slideshow.find('.slideshow__nav-prev').on('click', $.proxy(this.prevSlide, this));
    this.slideshow.on('swipeleft', $.proxy(this.nextSlide, this));
    this.slideshow.on('swiperight', $.proxy(this.prevSlide, this));

    // If we have the autoplay set up, we activate it
    this.hasAutoplay = (this.slideshow.attr('data-autoplay') === 'true');
    this.autoplayCycleSpeed = parseInt(this.slideshow.attr('data-cycle-speed'));

    if (this.hasAutoplay) {
      this._setupAutoplay();
    }

    // We simulate an initial change so that various events can be hooked up correctly
    var firstSlide = this.slideshowMainSlides.eq(0);
    this._didChange(firstSlide, firstSlide);

    // Setup the video (if any)

    this.players = plyr.setup(this.slideshowMain.find('.plyr-video[data-type]'), {
      controls: ['play-large'],
      iconPrefix: 'icon-video'
    }) || [];

    var self = this;

    this.players.forEach(function(player) {
      player.on('play', $.proxy(self._videoStarted, self));
      player.on('pause ended', $.proxy(self._videoEnded, self));
    });
  }

  /**
   * Clear the memory and remove any listener
   */
  Plugin.prototype.destroy = function() {
    this.slideshow.off('swipeleft swiperight');
    this.slideshowButtons.off('click');
    clearInterval(this.timer);

    this.players.forEach(function(player) {
      player.destroy();
    });

    this.slideshow.removeData('plugin_trademarkHomeSlideshow');
  };

  /**
   * Move to the next slide
   */
  Plugin.prototype.nextSlide = function() {
    var currentAnchorSlide = this.slideshowAnchorSlides.filter('.slideshow__slide--active'),
      prevOrNextAnchorSlide = currentAnchorSlide.next('.slideshow__slide'),
      currentMainSlide = this.slideshowMainSlides.filter('.slideshow__slide--active'),
      prevOrNextMainSlide = currentMainSlide.next('.slideshow__slide');

    if (prevOrNextAnchorSlide.length === 0) {
      prevOrNextAnchorSlide = this.slideshowAnchorSlides.first();
    }

    if (prevOrNextMainSlide.length === 0) {
      prevOrNextMainSlide = (prevOrNextMainSlide.length !== 0) ? prevOrNextMainSlide : this.slideshowMainSlides.first();
    }

    this._move(currentAnchorSlide, prevOrNextAnchorSlide, currentMainSlide, prevOrNextMainSlide, 'next');

    return false;
  };

  /**
   * Move to the previous slide
   */
  Plugin.prototype.prevSlide = function() {
    var currentAnchorSlide = this.slideshowAnchorSlides.filter('.slideshow__slide--active'),
      prevOrNextAnchorSlide = currentAnchorSlide.prev('.slideshow__slide'),
      currentMainSlide = this.slideshowMainSlides.filter('.slideshow__slide--active'),
      prevOrNextMainSlide = currentMainSlide.prev('.slideshow__slide');

    if (prevOrNextAnchorSlide.length === 0) {
      prevOrNextAnchorSlide = this.slideshowAnchorSlides.last();
    }

    if (prevOrNextMainSlide.length === 0) {
      prevOrNextMainSlide = (prevOrNextMainSlide.length !== 0) ? prevOrNextMainSlide : this.slideshowMainSlides.last();
    }

    this._move(currentAnchorSlide, prevOrNextAnchorSlide, currentMainSlide, prevOrNextMainSlide, 'previous');

    return false;
  };

  /**
   * Move to a specific slide
   */
  Plugin.prototype.goToSlide = function(index) {
    var desiredIndex = parseInt(index) - 1,
      currentAnchorSlide = this.slideshowAnchorSlides.filter('.slideshow__slide--active'),
      prevOrNextAnchorSlide = this.slideshowAnchorSlides.eq(desiredIndex === 0 ? 1 : (desiredIndex + 1) % this.slideshowSlidesCount),
      currentMainSlide = this.slideshowMainSlides.filter('.slideshow__slide--active'),
      prevOrNextMainSlide = this.slideshowMainSlides.eq(desiredIndex),
      currentIndex = this.slideshowMainSlides.index(currentMainSlide);

    if (currentIndex === desiredIndex) {
      return;
    }

    this._move(currentAnchorSlide, prevOrNextAnchorSlide, currentMainSlide, prevOrNextMainSlide, (currentIndex > desiredIndex) ? 'previous' : 'next');

    return false;
  };

  /**
   * Pause the autoplay
   */
  Plugin.prototype.pause = function() {
    this.paused = true;
  };

  /**
   * Restart the autoplay
   */
  Plugin.prototype.play = function() {
    this.paused = false;
  };

  /**
   * Add the various classes to properly animate all the slides
   *
   * @param currentAnchorSlide
   * @param prevOrNextAnchorSlide
   * @param currentMainSlide
   * @param prevOrNextMainSlide
   * @param direction
   * @private
   */
  Plugin.prototype._move = function(currentAnchorSlide, prevOrNextAnchorSlide, currentMainSlide, prevOrNextMainSlide, direction) {
    if (this.hasTransitionPending) {
      return;
    }

    if (this.hasAutoplay && !this.paused) {
      this._clearAutoplay();
    }

    var self = this;

    this.slideshowButtons.attr('disabled', 'disabled');

    this._willChange(currentMainSlide, prevOrNextMainSlide);

    if (Modernizr.cssanimations) {
      var animationClasses = 'slideshow__slide--animating ' + (direction === 'next' ? 'slideshow__slide--animating-rtl' : 'slideshow__slide--animating-ltr');

      // 1st: add all the classes needed to trigger animations
      prevOrNextAnchorSlide.addClass(animationClasses);
      prevOrNextMainSlide.addClass(animationClasses);
      currentMainSlide.addClass('slideshow__slide--removing');
      currentAnchorSlide.addClass('slideshow__slide--removing');

      // 2nd: listen to the event to properly removing the classes when animations are over
      prevOrNextAnchorSlide.find('.slideshow__media-container').one('webkitAnimationEnd animationend', function() {
        prevOrNextAnchorSlide.removeClass(animationClasses).addClass('slideshow__slide--active');
        currentAnchorSlide.removeClass('slideshow__slide--active slideshow__slide--removing');
      });

      prevOrNextMainSlide.find('.slideshow__media').one('webkitAnimationEnd animationend', function() {
        prevOrNextMainSlide.removeClass(animationClasses).addClass('slideshow__slide--active');
        currentMainSlide.removeClass('slideshow__slide--active slideshow__slide--removing');

        self.slideshowCount.text(prevOrNextMainSlide.attr('data-slide-index'));
        self.slideshowButtons.removeAttr('disabled');

        self._didChange(currentMainSlide, prevOrNextMainSlide);
      });
    } else {
      prevOrNextAnchorSlide.addClass('slideshow__slide--active');
      currentAnchorSlide.removeClass('slideshow__slide--active');

      prevOrNextMainSlide.addClass('slideshow__slide--active');
      currentMainSlide.removeClass('slideshow__slide--active');

      this.slideshowCount.text(prevOrNextMainSlide.attr('data-slide-index'));
      this.slideshowButtons.removeAttr('disabled');

      this._didChange(currentMainSlide, prevOrNextMainSlide);
    }
  };

  /**
   * Callback that is called before the slide changes
   */
  Plugin.prototype._willChange = function(previousSlide, newSlide) {
    this.hasTransitionPending = true;

    if (!previousSlide.hasClass('slideshow__slide--video')) {
      return;
    }

    // If the previous slide (the one that gonna disappear) is a video, we pause it

    plyr.get(previousSlide.get(0))[0].pause();
  };

  /**
   * Callback that is called after the slide has changed
   */
  Plugin.prototype._didChange = function(previousSlide, newSlide) {
    this.hasTransitionPending = false;

    if (this.hasAutoplay && !this.paused) {
      this._setupAutoplay();
    }
  };

  /**
   * Setup the autoplay which allows to automatically change slide
   */
  Plugin.prototype._setupAutoplay = function() {
    var self = this;

    // If there is a previous timer, clear it
    this._clearAutoplay();

    this.timer = setInterval(function() {
      if (!self.paused) {
        self.nextSlide();
      }
    }, this.autoplayCycleSpeed);
  };

  /**
   * Clear the autoplay
   */
  Plugin.prototype._clearAutoplay = function() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = null;
  };

  /**
   * Called when a video starts playing
   */
  Plugin.prototype._videoStarted = function() {
    if (this.hasAutoplay) {
      this.paused = true;
    }

    this.slideshowMain.addClass('slideshow--video-playing');
  };

  /**
   * Called when a video ends or is paused
   */
  Plugin.prototype._videoEnded = function() {
    if (this.hasAutoplay) {
      this.paused = false;
    }

    this.slideshowMain.removeClass('slideshow--video-playing');
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle Instagram
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkInstagram',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   */
  function Plugin(element) {
    this.element = $(element);
    this.hasTransitionPending = false;
    this.accessToken = this.element.attr('data-access-token');

    if (this.accessToken) {
      // Otherwise, we init the plugin
      var feed = new Instafeed({
        get: 'user',
        userId: 'self',
        accessToken: this.accessToken,
        sortBy: 'most-recent',
        limit: 15,
        resolution: Modernizr.mq('(max-width: 500px)') ? 'low_resolution' : 'standard_resolution',
        success: $.proxy(this._imagesLoaded, this),
        mock: function() {} // This allows to not insert images directly
      });

      feed.run();
    }

    this.element.on('click', '.instagram-tile__button--prev', $.proxy(this._move, this, 'prev'));
    this.element.on('click', '.instagram-tile__button--next', $.proxy(this._move, this, 'next'));
    this.element.on('swiperight', $.proxy(this._move, this, 'prev'));
    this.element.on('swipeleft', $.proxy(this._move, this, 'next'));
  }

  Plugin.prototype.destroy = function() {
    this.element.find('.instagram-tile__button').off('click');
    this.element.off('swipeleft swiperight');
    this.element.removeData('plugin_trademarkInstagram');
  };

  Plugin.prototype._imagesLoaded = function(results) {
    var images = results['data'];

    // We require 15 images to make it work, so we duplicate images until we have 15
    while (images.length < 15) {
      images = images.concat(images);
    }

    // We slice to images if we have more than 15
    images = images.slice(0, 15);

    // The first image is the newest one, but the elements must be re-ordered so that the newest image is at the centered of the array (acting as
    // a pivot)
    var pivotPosition = Math.round(images.length / 2),
      itemsToMoveBack = images.splice(pivotPosition),
      deepCopyOfImages = images.slice();

    itemsToMoveBack.reverse().forEach(function(itemToMoveBack) {
      deepCopyOfImages.unshift(itemToMoveBack);
    });

    // Then, we need to render the elements. Due to the effect we want to achieve, each "tile" must contain both the active image but as well the
    // previous and next ones
    var html = '';

    for (var i = 0 ; i !== deepCopyOfImages.length ; ++i) {
      var previousPositionIndex = (i === 0) ? (deepCopyOfImages.length - 1) : (i - 1),
        nextPositionIndex = (i === (deepCopyOfImages.length - 1)) ? 0 : (i + 1);

      // We can now render each tile
      var tileHtml = '' +
        '<div class="instagram__tile-wrapper-hidder">' +
          this._renderTile(deepCopyOfImages[previousPositionIndex], 'instagram-tile--prev') +
          this._renderTile(deepCopyOfImages[i], 'instagram-tile--active') +
          this._renderTile(deepCopyOfImages[nextPositionIndex], 'instagram-tile--next') +
        '</div>';

      html = html +
          '<div class="instagram__tile-wrapper ' + (i === (pivotPosition - 1) ? 'instagram__tile-wrapper--featured' : '') + '">' +
            '<button class="instagram-tile__button instagram-tile__button--prev">' +
              '<svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-left"></use></svg>' +
            '</button>' +
            tileHtml +
            '<button class="instagram-tile__button instagram-tile__button--next">' +
              '<svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right"></use></svg>' +
            '</button>' +
          '</div>';
    }

    this.element.html(html);
  };

  Plugin.prototype._renderTile = function(instagramImage, cssClass) {
    var caption = instagramImage['caption'] ? instagramImage['caption']['text'] : '';
    caption = (caption.length > 125 ? caption.substring(0, 125) + '...' : caption);

    // Allow to normalize a bit the content by escaping special characters
    caption = caption.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    return '<div class="instagram-tile ' + cssClass + '">' +
      '<div class="instagram-tile__info">' +
        '<div class="instagram-tile__info-wrapper">' +
          '<div class="instagram-tile__meta">' +
            '<p class="instagram-tile__likes">' +
              '<svg class="icon icon-heart">' +
                '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-heart"></use>' +
              '</svg>' +
              instagramImage['likes']['count'] +
            '</p>' +
            '<div class="instagram-tile__caption rte">' + caption + '</div>' +
          '</div>' +
          '<time class="instagram-tile__date text--uppercase">' + this._formatDate(instagramImage['created_time']) + '</time>' +
        '</div>' +
      '</div>' +
      '<a href="' + instagramImage['link'] + '" class="instagram-tile__image-wrapper" target="_blank" style="background-image: url(' + instagramImage['images']['standard_resolution']['url'] + ')">' +
      '</a>' +
    '</div>';
  };

  Plugin.prototype._formatDate = function(instagramDate) {
    var date = new Date(instagramDate * 1000),
      m = date.getMonth(),
      d = date.getDate(),
      y = date.getFullYear();

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return monthNames[m] + ' ' + d + ', ' + y;
  };

  Plugin.prototype._move = function(direction, event) {
    if (this.hasTransitionPending) {
      return;
    }

    this.hasTransitionPending = true;
    this.element.find('.instagram-tile__button').attr('disabled', 'disabled');
    this.element.addClass('instagram-feed--animating-' + direction);

    if (Modernizr.cssanimations) {
      this.element.on('webkitAnimationEnd animationend', $.proxy(this._finishTransition, this, direction));
    } else {
      this._finishTransition(direction);
    }

    event.preventDefault();
  };

  Plugin.prototype._finishTransition = function(direction, event) {
    if (Modernizr.cssanimations
      && (event.originalEvent.animationName !== 'instagramTileAnimation' || $(event.target).closest('.instagram__tile-wrapper--featured').length === 0)) {
      return;
    }

    var tileWrappers = this.element.find('.instagram__tile-wrapper');

    if (direction === 'next') {
      this.element.append(tileWrappers.first().detach());
      tileWrappers.filter('.instagram__tile-wrapper--featured').removeClass('instagram__tile-wrapper--featured').next().addClass('instagram__tile-wrapper--featured');
    } else {
      this.element.prepend(tileWrappers.last().detach());
      tileWrappers.filter('.instagram__tile-wrapper--featured').removeClass('instagram__tile-wrapper--featured').prev().addClass('instagram__tile-wrapper--featured');
    }

    this.element.find('.instagram-tile__button').removeAttr('disabled');
    this.element.removeClass('instagram-feed--animating-' + direction);
    this.element.off('webkitAnimationEnd animationend');
    this.hasTransitionPending = false;
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle the main nav
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkMainNav',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   */
  function Plugin(element) {
    this.mainNav = $(element);
    this.mainNavLinks = this.mainNav.find('.header__link');

    // Improve accessibility of menu by adding classes when an item is on focus
    this.mainNavLinks.on('focusin', function() {
      $(this).addClass('header__link--focused');
    });

    this.mainNavLinks.on('focusout', function() {
      $(this).removeClass('header__link--focused');
    });

    // Add a listener to check if the main nav can fit and init it (only when the logo is positioned in the center)
    if (!this.mainNav.hasClass('header__main-nav--stretched')) {
      this.mainNavWidth = Math.ceil(this.mainNav.width() + 35);
      this._verifyOverlap();

      $(window).on('resize.trademarkMainNav', $.proxy(this._verifyOverlap, this));
    }

    // We need to handle the overlap
    this.mainNav.find('.nav-dropdown--first').on('mouseenter', function() {
      var windowWidth = window.innerWidth,
        item = $(this),
        nestedMenus = item.find('.nav-dropdown--second'),
        rightEdge = this.getBoundingClientRect().right,
        shouldOpenLeft = false;

      nestedMenus.each(function(index, item) {
        if ((rightEdge + item.offsetWidth) > windowWidth) {
          shouldOpenLeft = true;
          return false; // this allows to break from the each
        }
      });

      if (shouldOpenLeft) {
        nestedMenus.addClass('nav-dropdown--left');
      } else {
        nestedMenus.removeClass('nav-dropdown--left');
      }
    });
  }

  Plugin.prototype.destroy = function() {
    this.mainNavLinks.off('focusin focusout');
    this.mainNav.removeData('plugin_trademarkMainNav');

    $(window).off('.trademarkMainNav');
  };

  Plugin.prototype._verifyOverlap = function() {
    // We need to find if the main nav overlap the logo. To find out this, we get the right edge of the main nav, and verify it's not "after" the left
    // position of the logo (the +35 is to add a bit more space)
    var isOverlapping = this.mainNavWidth > Math.ceil($('.header__logo').position().left - $('.header__inner').position().left);

    // If it's overlapping, we use the mobile navigation instead
    if (isOverlapping) {
      this.mainNav.hide();
      $('.header__nav-toggle').removeClass('hidden-desk');
    } else {
      this.mainNav.show();
      $('.header__nav-toggle').addClass('hidden-desk');
    }

    $('.header').addClass('header--init');
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle the mini-cart
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkMiniCart',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   */
  function Plugin(element) {
    this.miniCart = $(element);
    this.announcementBar = $('.announcement-bar');
    this.header = $('.header');
    this.headerCartCount = $('.header__cart-count');
    this.sidebarNav = $('.sidebar-nav');

    this.state = 'closed';

    this.body = $('body');
    this.pageOverlay = $('.page__overlay');

    this.body.on('click keypress', '[data-action="toggle-mini-cart"]', $.proxy(this._toggleMiniCart, this));
    this.miniCart.on('click', '[data-action="remove-line-item"]', $.proxy(this._removeLine, this));

    $(document).on('theme:cart:updated', $.proxy(this._cartUpdated, this));
    $(window).on('resize.trademarkMiniCart', $.proxy(this._computeMiniCartHeight, this));

    // We automatically re-render it a first time to solve a strange issue where adding a product in Ajax, going to Checkout and go back does not re-render
    // the very last version in Liquid
    this._rerender();

    if (Modernizr.csstransitions) {
      this.miniCart.on('transitionend', $.proxy(this._emitTransitionEvent, this));
    }
  }

  Plugin.prototype.destroy = function() {
    this.miniCart.removeData('plugin_trademarkMiniCart');
    this.miniCart.find('[data-action="remove-line-item"]').off('click');
    this.body.off('.trademarkMiniCart');

    $(document).off('theme:cart:updated');
    $(window).off('.trademarkMiniCart');
  };

  Plugin.prototype.getState = function() {
    return this.state;
  };

  Plugin.prototype._toggleMiniCart = function(event) {
    var self = this;

    // The mini-cart can be toggled using "Enter" key in keyboard as well
    if ((event.keyCode ? event.keyCode : event.which) == 13) {
      event.preventDefault(); // Prevent to follow the link
    }

    this._computeMiniCartHeight();

    this.miniCart.toggleClass('mini-cart--open');

    if (this.miniCart.hasClass('mini-cart--open')) {
      // Before opening, we must check if the nav sidebar is open. If that's the case we first close it
      var sidebarNavInstance = this.sidebarNav.data('plugin_trademarkMobileSidebar');

      if (sidebarNavInstance.state === 'opening' || sidebarNavInstance.state === 'opened') {
        sidebarNavInstance._toggleSidebar(event);
      }

      this.state = 'opening';
      $(document).trigger('opening.trademarkMiniCart');

      this.body.addClass('no-scroll');
      this.pageOverlay.addClass('page__overlay--open');

      if (!Modernizr.csstransitions) {
        this.state = 'opened';
        $(document).trigger('opened.trademarkMiniCart');
      }

      this.miniCart.one('transitionend', function() {
        self.miniCart.focus(); // Allows to give focus for better accessibility on keyboard
      });

      this.body.on('keyup.trademarkMiniCart', function(outsideEvent) {
        if (outsideEvent.keyCode == 27) {
          self._toggleMiniCart(outsideEvent);
        }
      });

      this.body.on('click.trademarkMiniCart', function(outsideEvent) {
        if (!$(outsideEvent.target).closest('#shopify-section-header').length) {
          self._toggleMiniCart(outsideEvent);
        }
      });
    } else {
      this.state = 'closing';
      $(document).trigger('closing.trademarkMiniCart');

      this.body.removeClass('no-scroll');
      this.body.off('.trademarkMiniCart');
      this.pageOverlay.removeClass('page__overlay--open');

      if (!Modernizr.csstransitions) {
        this.state = 'closed';
        $(document).trigger('closed.trademarkMiniCart');
      }
    }

    event.preventDefault();
  };

  Plugin.prototype._cartUpdated = function(event, cart, forceOpening, rerender) {
    this.headerCartCount.text(cart['item_count']);

    if (rerender || cart['item_count'] === 0) {
      this._rerender();
    } else {
      // If we do not completely re-render (for instance when we just delete a line), we just update the price
      this.miniCart.find('.mini-cart__total-price').replaceWith(
        '<span class="mini-cart-item__price mini-cart__total-price" data-money-convertible>' + Shopify.formatMoney(cart['total_price'], window.theme.moneyFormat) + '</span>'
      );
    }

    if (forceOpening) {
      this._toggleMiniCart(event);
    }

    
  };

  Plugin.prototype._removeLine = function(event) {
    var target = $(event.currentTarget),
      variantId = target.attr('data-variant-id'),
      lineItem = target.closest('.mini-cart__item-wrapper'),
      items = target.closest('.mini-cart__items');

    items.addClass('mini-cart__items--loading');

    $.ajax({
      method: 'POST',
      url: '/cart/change.js',
      dataType: 'json',
      data: {
        quantity: 0,
        id: variantId
      }
    }).then(function(newCart) {
      items.removeClass('mini-cart__items--loading');
      lineItem.slideUp(250, function() {$(this).remove();});

      $(document).trigger('theme:cart:updated', [newCart, false, false]);
    });

    event.preventDefault();
  };

  /**
   * Rerender each items of the mini cart
   *
   * @param cart
   * @private
   */
  Plugin.prototype._rerender = function() {
    // We render the alternate mini-cart template instead of rendering it in JavaScript. This allows app vendor to hook their own logic within the
    // mini-cart in pure Liquid
    var self = this;

    $.ajax('/cart?view=mini-cart').then(function(result) {
      var domResult = $(result),
        miniCartCount = domResult.attr('data-cart-item-count');

      self.miniCart.find('.mini-cart__inner').replaceWith(domResult.find('.mini-cart__inner'));
      self.headerCartCount.text(miniCartCount);
      self._computeMiniCartHeight();

      
    });
  };

  /**
   * Compute the correct mini-cart height (by taking into account things such as top bar, viewport...)
   */
  Plugin.prototype._computeMiniCartHeight = function() {
    // First, we need to get how much of the "top bar" (which is not fixed) is visible in the viewport
    var announcementBarVisibleHeight = 0,
      headerOuterHeight = this.header.outerHeight();

    if (this.announcementBar.length > 0) {
      var announcementBarHeight = this.announcementBar.height(),
        windowHeight = $(window).height(),
        rect = this.announcementBar[0].getBoundingClientRect();

      announcementBarVisibleHeight = Math.max(0, rect.top > 0 ? Math.min(announcementBarHeight, windowHeight - rect.top) : (rect.bottom < windowHeight ? rect.bottom : windowHeight));
    }

    this.miniCart.find('.mini-cart__inner').css('max-height', (window.innerHeight - headerOuterHeight - announcementBarVisibleHeight) + 'px');
  };

  /**
   * Callback called whenever the transition (animation of opening or closing) is ended so we can emit events for other parts of the system
   */
  Plugin.prototype._emitTransitionEvent = function(event) {
    if (event.originalEvent.propertyName !== 'transform') {
      return;
    }

    if (this.state === 'opening' || this.state === 'opened') {
      this.state = 'opened';
      $(document).trigger('opened.trademarkMiniCart');
    } else {
      this.state = 'closed';
      $(document).trigger('closed.trademarkMiniCart');
    }
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle the mobile sidebar
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkMobileSidebar',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   */
  function Plugin(element) {
    this.sidebarNav = $(element);
    this.announcementBar = $('.announcement-bar');
    this.header = $('.header');
    this.headerNavToggle = this.header.find('[data-action="toggle-mobile-sidebar"]');
    this.miniCart = $('.mini-cart');

    this.state = 'closed';

    this.body = $('body');
    this.pageOverlay = $('.page__overlay');

    this.headerNavToggle.on('click.trademarkMobileSidebar', $.proxy(this._toggleSidebar, this));
    this.sidebarNav.find('[data-action="toggle-mobile-sub-menu"]').on('click.trademarkMobileSidebar', $.proxy(this._toggleSubMenu, this));

    $(window).on('resize.trademarkMobileSidebar', $.proxy(this._computeSidebarHeight, this));

    if (Modernizr.csstransitions) {
      this.sidebarNav.on('transitionend', $.proxy(this._emitTransitionEvent, this));
    }
  }

  Plugin.prototype.destroy = function() {
    this.header.find('[data-action="toggle-mobile-sidebar"]').off('click');
    this.sidebarNav.find('[data-action="toggle-mobile-sub-menu"]').off('click');
    this.body.off('.trademarkMobileSidebar');
    $(window).off('.trademarkMobileSidebar');

    this.sidebarNav.removeData('plugin_trademarkMobileSidebar');
  };

  Plugin.prototype.getState = function() {
    return this.state;
  };

  /**
   * Tgogle the navigation sidebar
   */
  Plugin.prototype._toggleSidebar = function(event) {
    var self = this;

    this.headerNavToggle.toggleClass('header__nav-toggle--open');

    this._computeSidebarHeight();
    this.sidebarNav.toggleClass('sidebar-nav--open');

    if (this.sidebarNav.hasClass('sidebar-nav--open')) {
      // Before opening, we must check if the mini-cart is open. If that's the case we first close it
      var miniCartInstance = this.miniCart.data('plugin_trademarkMiniCart');

      if (undefined !== miniCartInstance && (miniCartInstance.state === 'opening' || miniCartInstance.state === 'opened')) {
        miniCartInstance._toggleMiniCart(event);
      }

      this.state = 'opening';
      $(document).trigger('opening.trademarkMobileSidebar');

      this.body.addClass('no-scroll');
      this.pageOverlay.addClass('page__overlay--open');

      this.body.on('click.trademarkMobileSidebar', function(outsideEvent) {
        if (!$(outsideEvent.target).closest('#shopify-section-header').length) {
          self._toggleSidebar(outsideEvent);
        }
      });

      if (!Modernizr.csstransitions) {
        this.state = 'opened';
        $(document).trigger('opened.trademarkMobileSidebar');
      }
    } else {
      this.state = 'closing';
      $(document).trigger('closing.trademarkMobileSidebar');

      this.body.removeClass('no-scroll');
      this.body.off('.trademarkMobileSidebar');
      this.pageOverlay.removeClass('page__overlay--open');

      if (!Modernizr.csstransitions) {
        this.state = 'closed';
        $(document).trigger('closed.trademarkMobileSidebar');
      }
    }

    event.preventDefault();
  };

  /**
   * Toggle a submenu
   */
  Plugin.prototype._toggleSubMenu = function(event) {
    var buttonContainer = $(event.target),
      sidebarMenu = buttonContainer.closest('li').find('> .sidebar-nav__sub-links');

    buttonContainer.attr('aria-expanded', function(index, attr) {return attr === 'true' ? 'false' : 'true'})
      .find('.plus-button').toggleClass('plus-button--active');
    sidebarMenu.slideToggle();

    event.preventDefault();
  };

  /**
   * Compute the correct sidebar height (by taking into account things such as top bar, viewport...)
   */
  Plugin.prototype._computeSidebarHeight = function() {
    // First, we need to get how much of the "top bar" (which is not fixed) is visible in the viewport
    var announcementBarVisibleHeight = 0,
      headerOuterHeight = this.header.outerHeight();

    if (this.announcementBar.length > 0) {
      var announcementBarHeight = this.announcementBar.height(),
        windowHeight = $(window).height(),
        rect = this.announcementBar[0].getBoundingClientRect();

      announcementBarVisibleHeight = Math.max(0, rect.top > 0 ? Math.min(announcementBarHeight, windowHeight - rect.top) : (rect.bottom < windowHeight ? rect.bottom : windowHeight));
    }

    this.sidebarNav.css('max-height', (window.innerHeight - headerOuterHeight - announcementBarVisibleHeight) + 'px');
  };

  /**
   * Callback called whenever the transition (animation of opening or closing) is ended so we can emit events for other parts of the system
   */
  Plugin.prototype._emitTransitionEvent = function(event) {
    if (event.originalEvent.propertyName !== 'transform') {
      return;
    }

    this._cursorFocus(this.sidebarNav); // Give the focus to the sidebar for easier keyboard navigation

    if (this.state === 'opening' || this.state === 'opened') {
      this.state = 'opened';
      $(document).trigger('opened.trademarkMobileSidebar');
    } else {
      this.state = 'closed';
      $(document).trigger('closed.trademarkMobileSidebar');
    }
  };

  /**
   * Allow to give focus on an item while preserving scroll position
   */
  Plugin.prototype._cursorFocus = function(element) {
    var x = window.scrollX,
      y = window.scrollY;

    element.focus();
    window.scrollTo(x, y);
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle product update
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkProduct',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   * @constructor
   * @param {HTMLElement} element The element that will be monitored
   * @param {Object} options
   */
  function Plugin(element, options) {
    this.element = $(element);

    this._init(options);
  }

  Plugin.prototype._init = function(options) {
    this.product = options['product'];
    this.enableHistoryState = options['enableHistoryState'];
    this.optionsWithValues = options['optionsWithValues'];
    this.allowSelectingSoldOutVariants = options['allowSelectingSoldOutVariants'];
    this.context = options['context'] || null;
    this.singleOptionSelectors = this.element.find('.single-option-selector');
    this.dataSelectors = this.element.find('[data-selector-type]').toArray();
    this.masterSelector = this.element.find('#product-select-' + options['product']['id']);
    this.productSlides = this.element.find('.product__slides');
    this.productPrices = this.element.find('.product__prices');
    this.addToCartButton = this.element.find('.product__add-to-cart');
    this.quantitySelector = this.element.find('.quantity-selector');

    this.currentVariant = this._getVariantFromOptions();

    this.singleOptionSelectors.on('change', $.proxy(this._onSelectorChanged, this));
    this.quantitySelector.find('[data-action="decrease-product-quantity"]').on('click', $.proxy(this._decreaseProductQuantity, this));
    this.quantitySelector.find('[data-action="increase-product-quantity"]').on('click', $.proxy(this._increaseProductQuantity, this));

    // In order to improve accessibility in keyboard, we allow to update swatches when pressing the Enter key over a label
    this.singleOptionSelectors.next('label').on('keypress', function(e) {
      if ((e.keyCode ? e.keyCode : e.which) == 13) {
        $(this).trigger('click');
      }
    });

    // If Ajax cart is enabled we add some more listeners to add product in the background
    
      this.addToCartButton.on('click', $.proxy(this._addToCart, this));
    
  };

  Plugin.prototype.destroy = function() {
    this.singleOptionSelectors.off('change');
    this.singleOptionSelectors.next('label').off('keypress');
    this.addToCartButton.off('click');
    this.quantitySelector.find('[data-action="decrease-product-quantity"]').off('click');
    this.quantitySelector.find('[data-action="increase-product-quantity"]').off('click');

    this.element.removeData('plugin_trademarkProduct');
  };

  /**
   * ---------------------------------------------------------------------------------------------------
   * CODE THAT HANDLE PRODUCT OPERATIONS
   * ---------------------------------------------------------------------------------------------------
   */

  Plugin.prototype._decreaseProductQuantity = function(event) {
    var currentQuantity = this.quantitySelector.find('.quantity-selector__current-quantity'),
      currentQuantityAsNumber = parseInt(currentQuantity.text());

    // Do nothing if it's already one...
    if (currentQuantityAsNumber === 1) {
      event.preventDefault();
      return;
    }

    var newQuantity = currentQuantityAsNumber - 1;

    currentQuantity.text(newQuantity);

    this.element.find('[name="quantity"]').val(newQuantity);

    event.preventDefault();
  };

  Plugin.prototype._increaseProductQuantity = function(event) {
    var currentQuantity = this.quantitySelector.find('.quantity-selector__current-quantity'),
      currentQuantityAsNumber = parseInt(currentQuantity.text()),
      newQuantity = currentQuantityAsNumber + 1;

    currentQuantity.text(newQuantity);

    this.element.find('[name="quantity"]').val(newQuantity);

    event.preventDefault();
  };

  /**
   * ---------------------------------------------------------------------------------------------------
   * CODE THAT HANDLE VARIANT CHANGES IN THE FRONT
   * ---------------------------------------------------------------------------------------------------
   */

  /**
   * Whenever the variant changes, we have several things to update: the slideshow image, the prices,
   * the labels...
   */
  Plugin.prototype._onVariantChanged = function(previousVariant, newVariant) {
    // 1st: the slideshow
    this._updateSlideshowImage(previousVariant, newVariant);

    // 2st: the prices
    this._updateProductPrices(previousVariant, newVariant);

    // 3rd: update the variant dropdowns
    this._updateSelectors(previousVariant, newVariant);

    // 4th: the add to cart button
    this._updateAddToCartButton(previousVariant, newVariant);
  };

  /**
   * Switch to the correct slideshow image
   */
  Plugin.prototype._updateSlideshowImage = function(previousVariant, newVariant) {
    if (!newVariant || !newVariant['featured_image']) {
      return;
    }

    if (this.productSlides.length > 0) {
      this.productSlides.slick(
        'slickGoTo',
        parseInt(this.productSlides.find('[data-image-id="' + newVariant['featured_image']['id'] + '"]').attr('data-image-position'))
      );
    }

    if (this.context === 'homepage') {
      this.element.find('.product__featured-image[data-image-id="' + newVariant['featured_image']['id'] + '"]').show()
        .siblings().hide();
    }
  };

  /**
   * Update the prices. If the variant does not exist, we hide the prices completely
   */
  Plugin.prototype._updateProductPrices = function(previousVariant, newVariant) {
    if (!newVariant) {
      this.productPrices.each(function(index, element) {
        var parent = $(element).parent();

        if (parent.hasClass('form__control')) {
          parent.hide();
        } else {
          $(element).hide();
        }
      });
    } else {
      if (previousVariant && (previousVariant['price'] === newVariant['price']) && (previousVariant['compare_at_price'] === newVariant['compare_at_price'])) {
        return;
      }

      this.productPrices.empty();

      if (newVariant['compare_at_price'] > newVariant['price']) {
        this.productPrices.append('<span class="product__price product__price--new h4" data-money-convertible>' + Shopify.formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>');
        this.productPrices.append('<span class="product__price product__price--old h4" data-money-convertible>' + Shopify.formatMoney(newVariant['compare_at_price'], window.theme.moneyFormat) + '</span>');
      } else {
        this.productPrices.append('<span class="product__price h4" data-money-convertible>' + Shopify.formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>');
      }

      this.productPrices.show().parent().show();
    }

    
  };

  /**
   * Update the selectors
   *
   * We have different kind of selectors: the size one, the color swatch and standard dropdown. When a new variant is selected, we must check the options
   * and prevent selection of unavailable and, if selected by the merchant, sold out variants
   */
  Plugin.prototype._updateSelectors = function(previousVariant, newVariant) {
    // No need to recompute the combinations if there is only one option
    if (!newVariant || this.product['options'].length <= 1) {
      return;
    }

    var option1 = newVariant['option1'],
      option2 = newVariant['option2'],
      option3 = newVariant['option3'],
      variantsCount = this.product['variants'].length;

    for (var i = 0 ; i != this.dataSelectors.length ; ++i) {
      var dataSelector = $(this.dataSelectors[i]),
        dataSelectorType = dataSelector.attr('data-selector-type'),
        optionIndex = (i + 1),
        optionValues = this.optionsWithValues[i]['values'];

      for (var j = 0 ; j != optionValues.length ; ++j) {
        var valueToCheck = optionValues[j],
          variantExists = false,
          allowVariantSelection = false,
          variantAvailable = false;

        if (optionIndex === 1) {
          for (var k = 0 ; k != variantsCount ; ++k) {
            var currentVariant = this.product['variants'][k];

            if (currentVariant['option1'] === valueToCheck && currentVariant['option2'] === option2 && currentVariant['option3'] === option3) {
              variantExists = true;
              variantAvailable = currentVariant['available'];

              break;
            }
          }
        } else if (optionIndex === 2) {
          for (var k = 0 ; k != variantsCount ; ++k) {
            var currentVariant = this.product['variants'][k];

            if (currentVariant['option1'] === option1 && currentVariant['option2'] === valueToCheck && currentVariant['option3'] === option3) {
              variantExists = true;
              variantAvailable = currentVariant['available'];

              break;
            }
          }
        } else if (optionIndex === 3) {
          for (var k = 0 ; k != variantsCount ; ++k) {
            var currentVariant = this.product['variants'][k];

            if (currentVariant['option1'] === option1 && currentVariant['option2'] === option2 && currentVariant['option3'] === valueToCheck) {
              variantExists = true;
              variantAvailable = currentVariant['available'];

              break;
            }
          }
        }

        if (variantExists) {
          if (variantAvailable || this.allowSelectingSoldOutVariants) {
            allowVariantSelection = true;
          }
        } else {
          allowVariantSelection = false;
        }

        if (dataSelectorType === 'size') {
          // For the size, we need to add the "product__size--unavailable" class and "disabled" to the input
          var sizeItem = dataSelector.find('.product__size').eq(j);

          if (allowVariantSelection) {
            sizeItem.removeClass('product__size--unavailable').find('> input').removeAttr('disabled')
              .next('label').attr('tabindex', 0);
          } else {
            sizeItem.addClass('product__size--unavailable').find('> input').attr('disabled', 'disabled')
              .next('label').removeAttr('tabindex');
          }
        } else if (dataSelectorType === 'color') {
          // For the color, we need to add the "product__color--unavailable" class and "disabled" to the input
          var colorItem = dataSelector.find('.product__color').eq(j);

          if (allowVariantSelection) {
            colorItem.removeClass('product__color--unavailable').find('> input').removeAttr('disabled')
              .next('label').attr('tabindex', 0);
          } else {
            colorItem.addClass('product__color--unavailable').find('> input').attr('disabled', 'disabled')
              .next('label').removeAttr('tabindex');
          }
        } else if (dataSelectorType === 'select') {
          // For the select, we need to add disabled to the option
          var optionItem = dataSelector.find('option').eq(j);

          if (allowVariantSelection) {
            optionItem.removeAttr('disabled');
          } else {
            optionItem.attr('disabled', 'disabled');
          }
        }
      }
    }
  };

  /**
   * Update the add to cart button
   */
  Plugin.prototype._updateAddToCartButton = function(previousVariant, newVariant) {
    if (!newVariant) {
      this.addToCartButton.attr('disabled', 'disabled')
        .removeClass('button--primary')
        .addClass('button--secondary')
        .text(window.languages.productFormUnavailable)
    } else {
      if (newVariant['available']) {
        this.addToCartButton.removeAttr('disabled')
          .addClass('button--primary')
          .removeClass('button--secondary')
          .text(window.languages.productFormAddToCart)
      } else {
        this.addToCartButton.attr('disabled', 'disabled')
          .removeClass('button--primary')
          .addClass('button--secondary')
          .text(window.languages.productFormSoldOut)
      }
    }
  };

  /**
   * ---------------------------------------------------------------------------------------------------
   * INTERNAL CODE THAT HANDLE VARIANT CHANGES
   * ---------------------------------------------------------------------------------------------------
   */

  /**
   * This call back is called whenever a property in one of the select or radio button has changed
   */
  Plugin.prototype._onSelectorChanged = function() {
    var previousVariant = this.currentVariant;

    this.currentVariant = this._getVariantFromOptions();
    this._onVariantChanged(previousVariant, this.currentVariant);

    if (this.currentVariant) {
      if (this.enableHistoryState) {
        this._updateHistoryState(this.currentVariant);
      }

      // We need to modify the hidden select that contain the id attribute as well
      this.masterSelector.find('[selected]').removeAttr('selected');
      this.masterSelector.find('[value="' + this.currentVariant['id'] + '"]').attr('selected', 'selected');
    }

    // We also trigger an event so that other system can hookup and perform additional changes
    $(document).trigger('variant_changed.product', this.currentVariant);
  };

  /**
   * Update the HTML history state
   */
  Plugin.prototype._updateHistoryState = function(variant) {
    if (!history.replaceState) {
      return;
    }

    var newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
    window.history.replaceState({path: newUrl}, '', newUrl);
  };

  /**
   * Get the variant that is currently selected
   */
  Plugin.prototype._getVariantFromOptions = function() {
    var selectedValues = this._getCurrentOptions();
    var variants = this.product['variants'];
    var found = false;

    variants.forEach(function(variant) {
      var satisfied = true;

      selectedValues.forEach(function(option) {
        if (satisfied) {
          satisfied = (option.value === variant[option.index]);
        }
      });

      if (satisfied) {
        found = variant;
      }
    });

    return found || null;
  };

  /**
   * Extract all the current options
   */
  Plugin.prototype._getCurrentOptions = function() {
    var currentOptions = this.singleOptionSelectors.toArray().map(function(element) {
      var $element = $(element),
        type = $element.attr('type'),
        index = $element.attr('data-option-index');

      if (type === 'radio' || type === 'checkbox') {
        if ($element[0].checked) {
          return {value: $element.val(), index: index};
        } else {
          return false;
        }
      } else {
        return {value: $element.val(), index: index};
      }
    });

    // remove any unchecked input values if using radio buttons or checkboxes

    return currentOptions.filter(function(item) {
      return item;
    });
  };

  /**
   * ---------------------------------------------------------------------------------------------------
   * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
   * ---------------------------------------------------------------------------------------------------
   */

  Plugin.prototype._addToCart = function(event) {
    var self = this;

    // First, we switch the status of the button to display the spinner
    this.addToCartButton.attr('disabled', 'disabled').addClass('button--loading');

    // Then we add the product in Ajax
    $.ajax({
      method: 'POST',
      url: '/cart/add.js',
      dataType: 'json',
      data: this.element.find('form[action^="/cart/add"]').serialize()
    }).then(function() {
      $.ajax({
        method: 'GET',
        url: '/cart.js',
        dataType: 'json'
      }).then(function(cart) {
        // Last parameter set to true allow to indicate the cart to force open the mini-cart)
        $(document).trigger('theme:cart:updated', [cart, true, true]);
        self.addToCartButton.removeAttr('disabled').removeClass('button--loading');
      });
    }).catch(function(error) {
      // If there is an error while adding (usually if all products are added to the cart), we temporarily
      // display the message from Shopify, and then revert to the original message after 2 seconds
      var errorMessage = error.responseJSON['description'];

      self.addToCartButton.text(errorMessage)
        .removeAttr('disabled')
        .removeClass('button--loading');

      setTimeout(function() {
        self.addToCartButton.text(window.languages.productFormAddToCart);
      }, 2500);
    });

    event.preventDefault();
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
/**
 * Plugin to handle tabs
 */

(function ($) {

  'use strict';

  var pluginName = 'trademarkTabs',
    namespace = 'plugin_' + pluginName;

  /**
   * The Plugin constructor
   */
  function Plugin(element, options) {
    this.element = $(element);
    this.navItems = this.element.find('.tabs__nav-item');
    this.content = this.element.find('.tabs__content');
    this.contentItems = this.content.find('.tabs__content-item');

    this.navItems.on('click', $.proxy(this._changeTab, this));

    var tabsNav = this.element.find('.tabs__nav-inner'),
      tabsNavElem = tabsNav.get(0);

    tabsNavElem.classList[tabsNavElem.scrollWidth - tabsNavElem.clientWidth - tabsNavElem.scrollLeft > 20 ? 'add' : 'remove']('tabs__nav-inner--shadowed-right');

    tabsNav.on('scroll', function() {
      this.classList[this.scrollLeft > 20 ? 'add' : 'remove']('tabs__nav-inner--shadowed-left');
      this.classList[this.scrollWidth - this.clientWidth - this.scrollLeft > 20 ? 'add' : 'remove']('tabs__nav-inner--shadowed-right');
    });
  }

  Plugin.prototype.destroy = function() {
    this.navItems.off('click');

    this.element.removeData('plugin_trademarkTabs');
  };

  Plugin.prototype._changeTab = function(event) {
    var target = $(event.target),
      currentItem = this.contentItems.filter('.tabs__content-item--active'),
      newItem = this.contentItems.eq(target.index()),
      self = this;

    // Set the current height to the container, so that animation can be done
    this.content.css('height', currentItem.height());

    // Change the active nav item
    target.siblings().removeClass('tabs__nav-item--active').end().addClass('tabs__nav-item--active');

    currentItem.removeClass('tabs__content-item--active');
    newItem.addClass('tabs__content-item--active');

    // Set the height of the new item for the parent to trigger CSS3 animation
    this.content.css('height', newItem.height());

    // Then, make sure to remove the hard-coded height to allow change in height inside the container
    if (Modernizr.cssanimations) {
      this.content.one('webkitAnimationEnd animationend', function() {
        self.content.css('height', '');
      });
    } else {
      this.content.css('height', '');
    }

    event.preventDefault();
  };

  $.fn[pluginName] = function(options) {
    var method = false,
      methodArgs = arguments;

    if (typeof options == 'string') {
      method = options;
    }

    return this.each(function() {
      var plugin = $.data(this, namespace);

      if (!plugin && !method) {
        $.data(this, namespace, new Plugin(this, options));
      } else if (method) {
        callMethod(plugin, method, Array.prototype.slice.call(methodArgs, 1));
      }
    });
  };
}(jQuery));
var router = new RouterRouter();

// router.route('*all', function() {
//   var bodyElement = jQuery('body');

//   /**
//    * -------------------------
//    * STICKY HEADER POLYFILL AND HEADER SIZE
//    * -------------------------
//    */

//   (function() {

//     var headerSection = jQuery('.shopify-section__header');

//     Stickyfill.add(headerSection.get(0));
//     jQuery('.anchor').css('top', -headerSection.height());

//     jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
//       Stickyfill.remove(event.target);
//     });

//     jQuery(document).on('shopify:section:load', '#shopify-section-header', function(event) {
//       Stickyfill.add(event.target);
//     });
//   }());

//   /**
//    * -------------------------
//    * MOBILE/TABLET NAVIGATION
//    * -------------------------
//    */

//   (function() {
//     jQuery('.sidebar-nav').trademarkMobileSidebar();

//     jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
//       jQuery(event.target).find('.sidebar-nav').data('plugin_trademarkMobileSidebar').destroy();
//     });

//     jQuery(document).on('shopify:section:load', '#shopify-section-header', function(event) {
//       jQuery(event.target).find('.sidebar-nav').trademarkMobileSidebar();
//     });
//   }());

//   /**
//    * -------------------------
//    * MAIN NAVIGATION (ACCESSIBILITY)
//    * -------------------------
//    */

//   (function() {
//     jQuery('.header__main-nav').trademarkMainNav();

//     jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
//       jQuery(event.target).find('.header__main-nav').data('plugin_trademarkMainNav').destroy();
//     });

//     jQuery(document).on('ready', function(event) {
//       jQuery('.header__main-nav').trademarkMainNav();
//     });
//   }());

//   /**
//    * -------------------------
//    * MINI-CART
//    * -------------------------
//    */

//   (function() {
    
//       jQuery('.mini-cart').trademarkMiniCart();

//       jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
//         jQuery(event.target).find('.mini-cart').data('plugin_trademarkMiniCart').destroy();
//       });

//       jQuery(document).on('shopify:section:load', '#shopify-section-header', function(event) {
//         jQuery(event.target).find('.mini-cart').trademarkMiniCart();
//       });
    
//   }());

//   /**
//    * -------------------------
//    * SEARCH
//    * Note that search initialization must happen after mini-cart and sidebar, as it relies on the existence of those two
//    * -------------------------
//    */

//   (function() {
//     jQuery('.header-search').trademarkHeaderSearch();

//     jQuery(document).on('shopify:section:unload', '#shopify-section-header', function(event) {
//       jQuery(event.target).find('.header-search').data('plugin_trademarkHeaderSearch').destroy();
//     });

//     jQuery(document).on('shopify:section:load', '#shopify-section-header', function(event) {
//       jQuery(event.target).find('.header-search').trademarkHeaderSearch();
//     });
//   }());

//   /**
//    * -------------------------
//    * RTE (FOR PAGE THAT CONTAINED USER DEFINED TEXT, WE DO SOME POST-PROCESSING
//    * -------------------------
//    */

//   (function() {
//     // 1st: wrap tables
//     jQuery('.rte table').addClass('table').wrap('<div class="table-wrapper"></div>');

//     // 2nd: wrap videos
//     var iframeVideo = jQuery('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]');
//     var iframeReset = iframeVideo.add('.rte iframe#admin_bar_iframe');

//     iframeVideo.each(function() {
//       // Add wrapper to make video responsive
//       jQuery(this).wrap('<div class="video-wrapper"></div>');
//     });

//     iframeReset.each(function() {
//       // Re-set the src attribute on each iframe after page load
//       // for Chrome's "incorrect iFrame content on 'back'" bug.
//       // https://code.google.com/p/chromium/issues/detail?id=395791
//       // Need to specifically target video and admin bar
//       this.src = this.src;
//     });
//   }());

 

//   /**
//    * -------------------------
//    * MARKETING POPUP
//    * -------------------------
//    */

//   (function() {
//     var popupModalInstance = null;

//     var initPopup = function(element) {
//       if (element.length === 0 || Modernizr.mq('(max-width: 559px)')) {
//         return;
//       }

//       popupModalInstance = element.remodal({
//         hashTracking: true,
//         appendTo: '#shopify-section-popup'
//       });

//       setTimeout(function() {
//         // We save into the cookie in order to avoid annoying the user
//         if (popupModalInstance.getState() === 'closed' && !$.cookie('theme_popup_seen') && element.attr('data-visible') === 'true') {
//           popupModalInstance.open();
//         }

//         $.cookie('theme_popup_seen', true, {expires: parseInt(element.attr('data-remember-me')) });
//       }, parseInt(element.attr('data-delay')));
//     };

//     initPopup(jQuery('.promotion-popup'), false);

//     jQuery(document).on('shopify:section:select', '#shopify-section-popup', function() {
//       if (popupModalInstance && popupModalInstance.getState() !== 'opened') {
//         popupModalInstance.open();
//       }
//     });

//     jQuery(document).on('shopify:section:deselect', '#shopify-section-popup', function() {
//       if (popupModalInstance) {
//         popupModalInstance.close();
//       }
//     });

//     jQuery(document).on('shopify:section:load', '#shopify-section-popup', function(event) {
//       initPopup(jQuery(event.target).find('.promotion-popup'));
//     });
//   })();


// });
