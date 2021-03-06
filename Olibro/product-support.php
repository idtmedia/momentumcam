<?php
/*
Template Name: Product Support
*/

get_header();

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>
<link rel='stylesheet' id='gforms_reset_css-css'  href='https://support.momentumcam.com/wp-content/plugins/gravityforms/css/formreset.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='gforms_formsmain_css-css'  href='https://support.momentumcam.com/wp-content/plugins/gravityforms/css/formsmain.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='gforms_ready_class_css-css'  href='https://support.momentumcam.com/wp-content/plugins/gravityforms/css/readyclass.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='gforms_browsers_css-css'  href='https://support.momentumcam.com/wp-content/plugins/gravityforms/css/browsers.min.css' type='text/css' media='all' />
<div id="main-content">

<?php if ( ! $is_page_builder_used ) : ?>

	<div class="container">
		<div id="content-area" class="clearfix">
			<div id="left-area">

<?php endif; ?>

			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<?php if ( ! $is_page_builder_used ) : ?>

					<h1 class="entry-title main_title"><?php the_title(); ?></h1>
				<?php
					$thumb = '';

					$width = (int) apply_filters( 'et_pb_index_blog_image_width', 1080 );

					$height = (int) apply_filters( 'et_pb_index_blog_image_height', 675 );
					$classtext = 'et_featured_image';
					$titletext = get_the_title();
					$thumbnail = get_thumbnail( $width, $height, $classtext, $titletext, $titletext, false, 'Blogimage' );
					$thumb = $thumbnail["thumb"];

					if ( 'on' === et_get_option( 'divi_page_thumbnails', 'false' ) && '' !== $thumb )
						print_thumbnail( $thumb, $thumbnail["use_timthumb"], $titletext, $width, $height );
				?>

				<?php endif; ?>

					<div class="entry-content">
					<?php
						the_content();

						if ( ! $is_page_builder_used )
							wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );
					?>
						<div class="et_pb_section et_pb_section_1 et_section_regular" style="padding: 0;">
						   <div class=" et_pb_row et_pb_row_0">
							  <div class="et_pb_column et_pb_column_4_4  et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child">
								 <div class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left  et_pb_text_0">
									<div class="et_pb_text_inner">
									   <div class="gf_browser_chrome gform_wrapper" id="gform_wrapper_5">
										<!--  ----------------------------------------------------------------------  -->
										<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
										<!--  If necessary, please modify the charset parameter to specify the        -->
										<!--  character set of your HTML page.                                        -->
										<!--  ----------------------------------------------------------------------  -->

										<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">

										<!--  ----------------------------------------------------------------------  -->
										<!--  NOTE: Please add the following <FORM> element to your page.             -->
										<!--  ----------------------------------------------------------------------  -->

										<form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST" id="gform_5" >

										<input type=hidden name="orgid" value="00Df20000017OJZ">
										<input type=hidden name="retURL" value="https://support.momentumcam.com/product-support-thank-you/">
										<input  id="subject" maxlength="80" name="subject" type="hidden" value="<?php echo get_the_title(); ?>"/>
										<input  id="reason" name="reason" value="GEN05 - REQ PRODUCT INFO" type="hidden" /> 	
										<!--  ----------------------------------------------------------------------  -->
										<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
										<!--  these lines if you wish to test in debug mode.                          -->
										<!--  <input type="hidden" name="debug" value=1>                              -->
										<!--  <input type="hidden" name="debugEmail" value="licensing@tofasco.com">   -->
										<!--  ----------------------------------------------------------------------  -->
										 <div class="gform_body">
										 <ul id="gform_fields_5" class="gform_fields top_label form_sublabel_below description_below">
											 <li id="field_5_1" class="gfield gfield_fullwidth gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
											 <div class="ginput_complex ginput_container no_prefix has_first_name no_middle_name has_last_name no_suffix gf_name_has_2 ginput_container_name gfield_trigger_change" id="input_5_1">
											  <span id="input_5_1_3_container" class="name_first">
												<input  id="00Nf200000DIynx" maxlength="20" name="00Nf200000DIynx" size="20" type="text" placeholder="First Name"/>
											 </span>
											  <span id="input_5_1_6_container" class="name_last">
											<input  id="00Nf200000DIyo2" maxlength="20" name="00Nf200000DIyo2" size="20" type="text" placeholder="Last Name"/>
											</span>
											</div>
											</li>
											<li id="field_5_2" class="gfield gfield_halfwidth field_sublabel_below field_description_below gfield_visibility_visible"><label class="gfield_label" for="input_5_2"></label><div class="ginput_container ginput_container_select"><select name="00Nf200000DIzPm" id="00Nf200000DIzPm" class="medium gfield_select" tabindex="6" aria-invalid="false"><option value="I need help with..."><?php _e('I need help with...'); ?></option><option value="Connecting My Camera"><?php _e('Connecting My Camera'); ?></option><option value="Something in the App"><?php _e('Something in the App'); ?></option><option value="Something else"><?php _e('Something else'); ?></option></select></div></li>
											<li id="field_5_3" class="gfield gfield_halfwidth gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"><label class="gfield_label" for="input_5_3"><span class="gfield_required">*</span></label><div class="ginput_container ginput_container_email">
												<input name="00Nf200000DIyoC" id="00Nf200000DIyoC" type="text" value="" class="medium" tabindex="7" placeholder="Email" aria-required="true" aria-invalid="false">
											</div></li>
											<li id="field_5_4" class="gfield gfield_fullwidth field_sublabel_below field_description_below gfield_visibility_visible"><label class="gfield_label" for="input_5_4"></label><div class="ginput_container ginput_container_textarea"><textarea name="description" id="description" class="textarea medium" tabindex="8" placeholder="A brief description of my problem:" aria-invalid="false" rows="10" cols="50"></textarea></div></li>
											</ul>
										
										</div>
										<div class="gform_footer top_label"> <input type="submit" id="gform_submit_button_5" class="gform_button button" value="SUBMIT" tabindex="10" name="submit" /></div>
										</form>									   
									   </div>
									</div>
								 </div>
							  </div>
						   </div>
						</div>

					</div> <!-- .entry-content -->

				<?php
					if ( ! $is_page_builder_used && comments_open() && 'on' === et_get_option( 'divi_show_pagescomments', 'false' ) ) comments_template( '', true );
				?>

				</article> <!-- .et_pb_post -->

			<?php endwhile; ?>

<?php if ( ! $is_page_builder_used ) : ?>

			</div> <!-- #left-area -->

			<?php get_sidebar(); ?>
		</div> <!-- #content-area -->
	</div> <!-- .container -->

<?php endif; ?>

</div> <!-- #main-content -->

<?php

get_footer();
