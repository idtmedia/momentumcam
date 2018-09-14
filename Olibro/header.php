<!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 7]>
<html id="ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<?php elegant_description(); ?>
	<?php elegant_keywords(); ?>
	<?php elegant_canonical(); ?>

	<?php do_action( 'et_head_meta' ); ?>

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php $template_directory_uri = get_template_directory_uri(); ?>
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( $template_directory_uri . '/js/html5.js"' ); ?>" type="text/javascript"></script>
	<![endif]-->

	<script type="text/javascript">
		document.documentElement.className = 'js';
	</script>

	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php get_template_part('header', 'icons'); ?>
    <div class="page__overlay"></div>
<?php
	$product_tour_enabled = et_builder_is_product_tour_enabled();
	$page_container_style = $product_tour_enabled ? ' style="padding-top: 0px;"' : ''; ?>
	<div id="page-container"<?php echo $page_container_style; ?>>
<?php
	if ( $product_tour_enabled || is_page_template( 'page-template-blank.php' ) ) {
		return;
	}

	$et_secondary_nav_items = et_divi_get_top_nav_items();

	$et_phone_number = $et_secondary_nav_items->phone_number;

	$et_email = $et_secondary_nav_items->email;

	$et_contact_info_defined = $et_secondary_nav_items->contact_info_defined;

	$show_header_social_icons = $et_secondary_nav_items->show_header_social_icons;

	$et_secondary_nav = $et_secondary_nav_items->secondary_nav;

	$et_top_info_defined = $et_secondary_nav_items->top_info_defined;

	$et_slide_header = 'slide' === et_get_option( 'header_style', 'left' ) || 'fullscreen' === et_get_option( 'header_style', 'left' ) ? true : false;
?>

	<?php if ( $et_top_info_defined && ! $et_slide_header || is_customize_preview() ) : ?>
		<div id="top-header"<?php echo $et_top_info_defined ? '' : 'style="display: none;"'; ?>>
			<div class="container clearfix">

			<?php if ( $et_contact_info_defined ) : ?>

				<div id="et-info">
				<?php if ( '' !== ( $et_phone_number = et_get_option( 'phone_number' ) ) ) : ?>
					<span id="et-info-phone"><?php echo et_sanitize_html_input_text( $et_phone_number ); ?></span>
				<?php endif; ?>

				<?php if ( '' !== ( $et_email = et_get_option( 'header_email' ) ) ) : ?>
					<a href="<?php echo esc_attr( 'mailto:' . $et_email ); ?>"><span id="et-info-email"><?php echo esc_html( $et_email ); ?></span></a>
				<?php endif; ?>

				<?php
				if ( true === $show_header_social_icons ) {
					get_template_part( 'includes/social_icons', 'header' );
				} ?>
				</div> <!-- #et-info -->

			<?php endif; // true === $et_contact_info_defined ?>

				<div id="et-secondary-menu">
				<?php
					if ( ! $et_contact_info_defined && true === $show_header_social_icons ) {
						get_template_part( 'includes/social_icons', 'header' );
					} else if ( $et_contact_info_defined && true === $show_header_social_icons ) {
						ob_start();

						get_template_part( 'includes/social_icons', 'header' );

						$duplicate_social_icons = ob_get_contents();

						ob_end_clean();

						printf(
							'<div class="et_duplicate_social_icons">
								%1$s
							</div>',
							$duplicate_social_icons
						);
					}

					if ( '' !== $et_secondary_nav ) {
						echo $et_secondary_nav;
					}

					et_show_cart_total();
				?>
				</div> <!-- #et-secondary-menu -->

			</div> <!-- .container -->
		</div> <!-- #top-header -->
	<?php endif; // true ==== $et_top_info_defined ?>

	<?php if ( $et_slide_header || is_customize_preview() ) : ?>
		<div class="et_slide_in_menu_container">
			<?php if ( 'fullscreen' === et_get_option( 'header_style', 'left' ) || is_customize_preview() ) { ?>
				<span class="mobile_menu_bar et_toggle_fullscreen_menu"></span>
			<?php } ?>

			<?php
				if ( $et_contact_info_defined || true === $show_header_social_icons || false !== et_get_option( 'show_search_icon', true ) || class_exists( 'woocommerce' ) || is_customize_preview() ) { ?>
					<div class="et_slide_menu_top">

					<?php if ( 'fullscreen' === et_get_option( 'header_style', 'left' ) ) { ?>
						<div class="et_pb_top_menu_inner">
					<?php } ?>
			<?php }

				if ( true === $show_header_social_icons ) {
					get_template_part( 'includes/social_icons', 'header' );
				}

				et_show_cart_total();
			?>
			<?php if ( false !== et_get_option( 'show_search_icon', true ) || is_customize_preview() ) : ?>
				<?php if ( 'fullscreen' !== et_get_option( 'header_style', 'left' ) ) { ?>
					<div class="clear"></div>
				<?php } ?>
				<form role="search" method="get" class="et-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
					<?php
						printf( '<input type="search" class="et-search-field" placeholder="%1$s" value="%2$s" name="s" title="%3$s" />',
							esc_attr__( 'Search &hellip;', 'Divi' ),
							get_search_query(),
							esc_attr__( 'Search for:', 'Divi' )
						);
					?>
					<button type="submit" id="searchsubmit_header"></button>
				</form>
			<?php endif; // true === et_get_option( 'show_search_icon', false ) ?>

			<?php if ( $et_contact_info_defined ) : ?>

				<div id="et-info">
				<?php if ( '' !== ( $et_phone_number = et_get_option( 'phone_number' ) ) ) : ?>
					<span id="et-info-phone"><?php echo et_sanitize_html_input_text( $et_phone_number ); ?></span>
				<?php endif; ?>

				<?php if ( '' !== ( $et_email = et_get_option( 'header_email' ) ) ) : ?>
					<a href="<?php echo esc_attr( 'mailto:' . $et_email ); ?>"><span id="et-info-email"><?php echo esc_html( $et_email ); ?></span></a>
				<?php endif; ?>
				</div> <!-- #et-info -->

			<?php endif; // true === $et_contact_info_defined ?>
			<?php if ( $et_contact_info_defined || true === $show_header_social_icons || false !== et_get_option( 'show_search_icon', true ) || class_exists( 'woocommerce' ) || is_customize_preview() ) { ?>
				<?php if ( 'fullscreen' === et_get_option( 'header_style', 'left' ) ) { ?>
					</div> <!-- .et_pb_top_menu_inner -->
				<?php } ?>

				</div> <!-- .et_slide_menu_top -->
			<?php } ?>

			<div class="et_pb_fullscreen_nav_container">
				<?php
					$slide_nav = '';
					$slide_menu_class = 'et_mobile_menu';

					$slide_nav = wp_nav_menu( array( 'theme_location' => 'primary-menu', 'container' => '', 'fallback_cb' => '', 'echo' => false, 'items_wrap' => '%3$s' ) );
					$slide_nav .= wp_nav_menu( array( 'theme_location' => 'secondary-menu', 'container' => '', 'fallback_cb' => '', 'echo' => false, 'items_wrap' => '%3$s' ) );
				?>

				<ul id="mobile_menu_slide" class="<?php echo esc_attr( $slide_menu_class ); ?>">

				<?php
					if ( '' == $slide_nav ) :
				?>
						<?php if ( 'on' == et_get_option( 'divi_home_link' ) ) { ?>
							<li <?php if ( is_home() ) echo( 'class="current_page_item"' ); ?>><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Home', 'Divi' ); ?></a></li>
						<?php }; ?>

						<?php show_page_menu( $slide_menu_class, false, false ); ?>
						<?php show_categories_menu( $slide_menu_class, false ); ?>
				<?php
					else :
						echo( $slide_nav );
					endif;
				?>

				</ul>
			</div>
		</div>
	<?php endif; // true ==== $et_slide_header ?>

        <div id="shopify-section-announcement" class="shopify-section shopify-section__announcement-bar">
            <a href="<?php echo olibro_site_url() ?>/products/aria-outdoor-floodlight-security-camera" class="announcement-bar">
                <div class="container">
                    <span class="announcement-bar__content">Introducing the New Momentum Aria Floodlight. Click Here to Learn More.</span>
              </div></a>
        </div>
        <div id="shopify-section-header" class="shopify-section shopify-section__header">
            <nav class="sidebar-nav" tabindex="-1">
                <ul class="sidebar-nav__links list--unstyled">
                    <li>
                        <a href="<?php echo olibro_site_url() ?>/collections/all" class="sidebar-nav__link sidebar-nav__link--has-sub-links sidebar-nav__link--level-1">
                            Products
                            <div class="plus-button-container" data-action="toggle-mobile-sub-menu" aria-haspopup="true" aria-expanded="false">
                                <span class="plus-button "></span>
                            </div>
                        </a>
                        <ul class="sidebar-nav__sub-links  list--unstyled">
                            <li><a href="<?php echo olibro_site_url() ?>/products/720p-wifi-camera" class="sidebar-nav__link sidebar-nav__link--level-2">Axel HD Smart Camera</a></li>
                            <li><a href="<?php echo olibro_site_url() ?>/products/cori-720p-camera" class="sidebar-nav__link sidebar-nav__link--level-2">(2-Pack) Cori HD Smart Camera</a></li>
                            <li><a href="<?php echo olibro_site_url() ?>/products/aria-outdoor-floodlight-security-camera" class="sidebar-nav__link sidebar-nav__link--level-2">Aria LED Floodlight Camera</a></li>
                            <li><a href="<?php echo olibro_site_url() ?>/products/garage-door-controller" class="sidebar-nav__link sidebar-nav__link--level-2">Niro Garage Door Controller</a></li>
                        </ul>
                    </li>
                    <li><a href="<?php echo olibro_site_url() ?>/pages/app" class="sidebar-nav__link sidebar-nav__link--level-1">App</a></li>
                    <li><a href="<?php echo olibro_site_url() ?>/pages/cloud" class="sidebar-nav__link sidebar-nav__link--level-1">Cloud Service</a></li>
                    <li><a href="https://support.momentumcam.com" class="sidebar-nav__link sidebar-nav__link--level-1">Help</a></li>
                    <li><a href="https://account.momentum-cam.com/" class="sidebar-nav__link sidebar-nav__link--level-1">Cloud Login</a></li>
                    <li><a href="<?php echo olibro_site_url() ?>/account/login" class="sidebar-nav__link sidebar-nav__link--level-1">Store Login</a></li>
                </ul>
            </nav>
            <form action="/cart" method="post" novalidate="" class="mini-cart" tabindex="-1" data-cart-item-count="0">
                <div class="mini-cart__inner mini-cart__inner--centered" style="max-height: 873px;">
                    <div class="mini-cart__empty-state">
                        <p>Your cart is empty</p>
                        <a class="button button--primary button--full" href="<?php echo olibro_site_url() ?>/collections/all">Start shopping</a>
                    </div>
                </div>
            </form>
            <div class="header-search">
                <div class="header-search__form-wrapper">
                    <div class="container">
                        <form action="/search" method="GET" class="header-search__form">
                            <svg class="icon icon-search">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
                            </svg>
                            <input type="hidden" name="type" value="product,article,page">
                            <div class="header-search__input-wrapper">
                                <input class="header-search__input" type="search" name="q" autocomplete="off" autocorrect="off" aria-label="Search..." placeholder="Search...">
                            </div>
                            <input class="visually-hidden" type="submit">
                            <button class="header-search__close" data-action="close-search">
                                <svg class="icon icon-cross">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cross"></use>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div class="header-search__results-wrapper">
                </div>
                <script id="search-results-template" type="text/template7">
                    <div class="container">
                      {{#if is_loading}}
                        <div class="header-search__results">
                          <div class="header-search__spinner-container">
                            <span class="header-search__spinner"></span>
                          </div>
                        </div>
                      {{else}}
                        {{#unless split_search}}
                          <div class="header-search__results">
                            <p class="header-search__category text--uppercase">Products</p>
                              {{#if has_results}}
                                <ul class="header-search__products grid">
                                  {{#each results}}
                                    <li class="grid__cell 1/3--handheld-and-up 1/4--desk">
                                      <div class="product-item product-item--push">
                                        {{#if on_sale}}
                                          <div class="product-item__labels labels"><span class="label label--on-sale">{{@root.on_sale_label}}</span></div>
                                        {{/if}}
                                        <figure class="product-item__image-container">
                                          <a href="{{url}}" class="product-item__link">
                                            <img class="product-item__image " src="{{image}}" alt="{{image_alt}}">
                                          </a>
                                        </figure>
                                        <div class="product-item__info">
                                          <h3 class="product-item__title">
                                            <a href="{{url}}" class="link">{{title}}</a>
                                          </h3>
                                          {{#if on_sale#}}
                                            <span class="product-item__price product-item__price--new" data-money-convertible>{{price}}</span>
                                            <span class="product-item__price product-item__price--old" data-money-convertible>{{compare_at_price}}</span>
                                          {{else}}
                                            <span class="product-item__price product-item__price--new" data-money-convertible>{{price}}</span>
                                          {{/if}}
                                        </div>
                                      </div>
                                    </li>
                                  {{/each}}
                                </ul>
                                <a href="{{results_url}}" class="header-search__see-more button button--secondary" data-results-count="{{results_count}}">{{results_label}}</a>
                              {{else}}
                                <p class="header-search__no-results h4">{{results_label}}</p>
                              {{/if}}
                          </div>
                        {{else}}
                          <div class="header-search__results grid grid--huge">
                            <div class="grid__cell 3/5--handheld 4/6--lap 3/4--desk">
                              <p class="header-search__category text--uppercase">Products</p>
                                {{#if has_products_results}}
                                  <ul class="header-search__products grid">
                                    {{#each products.results}}
                                      <li class="grid__cell 1/2--handheld 1/3--lap 1/4--desk">
                                        <div class="product-item product-item--push">
                                          {{#if on_sale}}
                                            <div class="product-item__labels labels"><span class="label label--on-sale">{{@root.on_sale_label}}</span></div>
                                          {{/if}}
                                          <figure class="product-item__image-container">
                                            <a href="{{url}}" class="product-item__link">
                                              <img class="product-item__image " src="{{image}}" alt="{{image_alt}}">
                                            </a>
                                          </figure>
                                          <div class="product-item__info">
                                            <h3 class="product-item__title">
                                              <a href="{{url}}" class="link">{{title}}</a>
                                            </h3>
                                            {{#if on_sale#}}
                                              <span class="product-item__price product-item__price--new" data-money-convertible>{{price}}</span>
                                              <span class="product-item__price product-item__price--old" data-money-convertible>{{compare_at_price}}</span>
                                            {{else}}
                                              <span class="product-item__price product-item__price--new" data-money-convertible>{{price}}</span>
                                            {{/if}}
                                          </div>
                                        </div>
                                      </li>
                                    {{/each}}
                                  </ul>
                                  <a href="{{products.results_url}}" class="header-search__see-more button button--secondary" data-results-count="{{products.results_count}}">{{products.results_label}}</a>
                                {{else}}
                                  <p class="header-search__no-results h4">{{products.results_label}}</p>
                                {{/if}}
                            </div>
                            <div class="grid__cell 2/5--handheld 2/6--lap 1/4--desk">
                                <p class="header-search__category text--uppercase">Pages &amp; Journal</p>
                                {{#if has_others_results}}
                                  <ul class="header-search__pages list--unstyled">
                                    {{#each others.results}}
                                      <li>
                                        <a href="{{url}}" class="header-search__page link link--secondary link--effect">{{title}}</a>
                                      </li>
                                    {{/each}}
                                  </ul>
                                  <a href="{{others.results_url}}" class="header-search__see-more button button--secondary" data-results-count="{{others.results_count}}">{{others.results_label}}</a>
                                {{else}}
                                  <p class="header-search__no-results h4">{{others.results_label}}</p>
                                {{/if}}
                            </div>
                          </div>
                        {{/unless}}
                      {{/if}}
                    </div>
                </script>
            </div>
            <header class="header  header--init">
                <div class="container">
                    <div class="header__inner">
                        <button class="header__nav-toggle hidden-desk" data-action="toggle-mobile-sidebar">
                        <span></span>
                        <span></span>
                        <span></span>
                        </button>
                        <h1 class="header__logo header__logo--image ">
                            <a class="header__logo-link" href="https://momentumcam.myshopify.com"><img class="header__logo-image header__logo-image--desktop " src="//cdn.shopify.com/s/files/1/2837/3356/files/test2_220x.png?v=1522691386" srcset="//cdn.shopify.com/s/files/1/2837/3356/files/test2_220x.png?v=1522691386 1x, //cdn.shopify.com/s/files/1/2837/3356/files/test2_220x@2x.png?v=1522691386 2x" alt="MomentumCam Logo"></a>
                        </h1>
                        <nav class="header__main-nav header__main-nav--stretched">
                            <ul class="header__links list--unstyled">
                                <li class="header__link header__link--need-extra-space" aria-haspopup="true" tabindex="">
                                    <a href="<?php echo olibro_site_url() ?>/collections/all" class="link">
                                        Products
                                        <svg class="icon icon-dropdown-arrow">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dropdown-arrow"></use>
                                        </svg>
                                    </a>
                                    <div class="mega-nav"><a href="<?php echo olibro_site_url() ?>/products/720p-wifi-camera" class="mega-nav__item"><img src="//cdn.shopify.com/s/files/1/2837/3356/products/MomentumCam_150x150_crop_center@2x.jpg?v=1520021109" height="150" width="150" alt="Axel HD Smart Camera" class="mega-nav__image"><span class="mega-nav__title">Axel HD Smart Camera</span>
                                        </a><a href="<?php echo olibro_site_url() ?>/products/aria-outdoor-floodlight-security-camera" class="mega-nav__item"><img src="//cdn.shopify.com/s/files/1/2837/3356/products/baby-cori-3-1500_grande_963db422-8e5a-4b82-bd9f-c5565ebb5dd6_150x150_crop_center@2x.png?v=1525149439" height="150" width="150" alt="(2-Pack) Cori HD Smart Camera" class="mega-nav__image"><span class="mega-nav__title">(2-Pack) Cori HD Smart Camera</span>
                                        </a><a href="<?php echo olibro_site_url() ?>/products/aria-outdoor-floodlight-security-camera" class="mega-nav__item"><img src="//cdn.shopify.com/s/files/1/2837/3356/products/aria-2-1500-1500_150x150_crop_center@2x.png?v=1521246772" height="150" width="150" alt="Aria LED Floodlight with Wi-Fi Camera" class="mega-nav__image"><span class="mega-nav__title">Aria LED Floodlight Camera</span>
                                        </a><a href="<?php echo olibro_site_url() ?>/products/garage-door-controller" class="mega-nav__item"><img src="//cdn.shopify.com/s/files/1/2837/3356/products/Niro_4_1500_1500_1200_NoGradient_150x150_crop_center@2x.png?v=1522914386" height="150" width="150" alt="Niro Garage Door Controller with Wi-Fi Camera" class="mega-nav__image"><span class="mega-nav__title">Niro Garage Door Controller</span>
                                        </a>
                                    </div>
                                </li>
                                <li class="header__link " tabindex="">
                                    <a href="<?php echo olibro_site_url() ?>/pages/app" class="link">App</a>
                                </li>
                                <li class="header__link " tabindex="">
                                    <a href="<?php echo olibro_site_url() ?>/pages/cloud" class="link">Cloud Service</a>
                                </li>
                                <li class="header__link " tabindex="">
                                    <a href="https://support.momentumcam.com" class="link">Help</a>
                                </li>
                                <li class="header__link " tabindex="">
                                    <a href="https://account.momentum-cam.com/" class="link">Cloud Login</a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="header__secondary-nav">
                            <ul class="header__links list--unstyled">
                                <li class="header__link hidden-pocket"><a href="<?php echo olibro_site_url() ?>/account/login" class="link">Store Login</a></li>
                                <li class="header__link hidden-pocket">
                                    <a href="<?php echo olibro_site_url() ?>/cart" class="header__cart-count-wrapper link" data-action="toggle-mini-cart">
                                    Cart
                                    </a>
                                </li>
                                <li class="header__link">
                                    <a href="<?php echo olibro_site_url() ?>/search" class="link" aria-label="Search" data-action="open-search">
                                        <svg class="icon icon-search">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="header__link hidden-lap-and-up">
                                    <a href="<?php echo olibro_site_url() ?>/cart" aria-label="Cart" data-action="toggle-mini-cart">
                                        <svg class="icon icon-cart">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>

		<div id="et-main-area">
