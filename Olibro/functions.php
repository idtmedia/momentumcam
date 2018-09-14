<?php 
function elegant_enqueue_css() { wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); }

add_action( 'wp_enqueue_scripts', 'elegant_enqueue_css' );
$template_directory_uri = get_stylesheet_directory_uri();

/* Add style & script */
add_action( 'wp_enqueue_scripts', 'olibro_enqueue_assets' );
function olibro_enqueue_assets() {
    wp_enqueue_style( 'jui-css', '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' );
}

add_action( 'wp_footer', 'footer_enqueue_assets' );
function footer_enqueue_assets() {
    wp_enqueue_script( 'js-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.js' );
    wp_enqueue_script( 'js-custom', get_stylesheet_directory_uri() . '/js/custom.js?t=5' );
}

// Remove version
remove_action('wp_head', 'wp_generator');
add_filter('the_generator', 'olibro_remove_version');
function olibro_remove_version() {
    return '';
}

function remove_ver_css_js($src) {
    if (strpos($src, 'ver='))
        $src = remove_query_arg('ver', $src);
    return $src;
}
add_filter('style_loader_src', 'remove_ver_css_js', 9999);
add_filter('script_loader_src', 'remove_ver_css_js', 9999);


// Update footer admin
add_filter('admin_footer_text', 'olibro_footer_admin');
function olibro_footer_admin () {
    echo 'Thank you for choosing <a href="https://www.olibro.com/?ref=wp_footer" target="blank">Olibro Design</a>.';
}

// Add class into body
function olibro_add_body_class($classes) {
    // don't remove this class
    $classes[] = 'olibro-theme';

    $post_type = get_post_type();
    if (!in_array('post-type-' . $post_type, $classes)) {
        $classes[] = 'post-type-' . $post_type;
    }

    global $post;
    if (isset($post->post_name)) {
        $classes[] = 'post-' . $post->post_name;
    }
    $parent = (isset($post->post_parent)) ? $post->post_parent : NULL;
    while ($parent > 0) {
        $parent_post = get_post($parent);
        $classes[] = 'child-post-of-' . $parent_post->post_name;
        $parent = $parent_post->post_parent;
    }

    return $classes;
}
add_filter('body_class', 'olibro_add_body_class');

//include('editor/footer-editor.php');

include('editor/login-editor.php');
function create_freshdesk_ticket($name,$need_help,$email,$problem,$file,$subject){
	$api_key = "y74vcWyPzN8sHf3DOgtJ";
	$password = "x";
	$yourdomain = "tofasconew";
	$fname = trim($tmp[0]);
	$lname = trim($tmp[count($tmp)-1]);
	$ticket_data = json_encode(array(
	  "name" => $name,
	  "description" => $problem . ".<br><br>More Information:<br>This ticket came from MomentumCam Support form.<br>Requester name: $name<br>Requester email: $email<br>I need help with: $need_help" . ($file?"<br>Attached file:<a href='$file' target='_blank'>$file</a>":""),
	  "subject" => $subject.$need_help,
	  "email" => $email,
	  "priority" => 1,
	  "status" => 2,
	  "source" => 2,
	  'type'=>'Technical Support',
	  //'email_config_id'=> 16000027400,
	  'product_id'=>16000001469,
	  "custom_fields" => array('cf_shipping_address_no_po_box'=>'1','date_of_purchase'=>'1970-01-01','first_name'=>$fname,'last_name'=>$lname,'store_name'=>'Store Name','cf_call_time_minutes'=>480,'product_category'=>'Momentum','reason_code_category'=>'New Products','call_reason'=>'Alerts/Notifications','customer_type'=>'RA for CS Portal'),
	  "tags" => array("new product support form"),
	));
	$url = "https://$yourdomain.freshdesk.com/api/v2/tickets";
	$ch = curl_init($url);
	$header[] = "Content-type: application/json";
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_HEADER, true);
	curl_setopt($ch, CURLOPT_USERPWD, "$api_key:$password");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $ticket_data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$server_output = curl_exec($ch);
	$info = curl_getinfo($ch);
	$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	$headers = substr($server_output, 0, $header_size);
	$response = substr($server_output, $header_size);
	if($info['http_code'] == 201) {
		return true;
	} else {
	  if($info['http_code'] == 404) {
		  wp_mail(array('webmaster@olibro.com'),'Momentum New Product Support API',"Error, Please check the end point \n");
		return false;
		echo "Error, Please check the end point \n";
	  } else {
		  wp_mail(array('webmaster@olibro.com'),'Momentum New Product Support API',"Error, HTTP Status Code : " . $info['http_code'] . ". Input is $ticket_data. Headers are ".$headers.". Response are ".$response);
	    return false;
		echo "Error, HTTP Status Code : " . $info['http_code'] . "\n";
		echo "Headers are ".$headers;
		echo "Response are ".$response;
	  }
	}
	curl_close($ch);
}
add_action( 'gform_after_submission_3', 'momentum_after_support_submission', 10, 2 );
function momentum_after_support_submission($entry, $form){
	//print_r($entry);
	//echo rgar($entry,'1');
	//echo rgar($entry,'1.3');
	//echo rgar($entry,'1.6');
	$full_name = rgar($entry,'1.3') . ' ' . rgar($entry,'1.6');
	$need_help = rgar($entry,'2');
	$email = rgar($entry,'3');
	$problem = rgar($entry,'4');
	$file = rgar($entry,'5');
	create_freshdesk_ticket($full_name,$need_help,$email,$problem,$file,"[MomentumCam New Product] I need help with ");
	//print_r($form);
}
add_action( 'gform_after_submission_5', 'momentum_after_support_submission_gdc', 10, 2 );
function momentum_after_support_submission_gdc($entry, $form){
	$full_name = rgar($entry,'1.3') . ' ' . rgar($entry,'1.6');
	$need_help = rgar($entry,'2');
	$email = rgar($entry,'3');
	$problem = rgar($entry,'4');
	$file = rgar($entry,'5');
	create_freshdesk_ticket($full_name,$need_help,$email,$problem,$file,"[Garage Door Controller] I need help with ");
	//print_r($form);
}
add_action( 'gform_after_submission_6', 'momentum_after_support_submission_cori', 10, 2 );
function momentum_after_support_submission_cori($entry, $form){
	$full_name = rgar($entry,'1.3') . ' ' . rgar($entry,'1.6');
	$need_help = rgar($entry,'2');
	$email = rgar($entry,'3');
	$problem = rgar($entry,'4');
	$file = rgar($entry,'5');
	create_freshdesk_ticket($full_name,$need_help,$email,$problem,$file,"[Cori HD Smart Home Security Camera] I need help with ");
	//print_r($form);
}
add_action( 'gform_after_submission_7', 'momentum_after_support_submission_aria', 10, 2 );
function momentum_after_support_submission_aria($entry, $form){
	$full_name = rgar($entry,'1.3') . ' ' . rgar($entry,'1.6');
	$need_help = rgar($entry,'2');
	$email = rgar($entry,'3');
	$problem = rgar($entry,'4');
	$file = rgar($entry,'5');
	create_freshdesk_ticket($full_name,$need_help,$email,$problem,$file,"[Aria LED Floodlight with Wi-Fi Camera] I need help with ");
	//print_r($form);
}
function create_old_freshdesk_ticket($name,$need_help,$email,$problem,$file){
	$api_key = "y74vcWyPzN8sHf3DOgtJ";
	$password = "x";
	$yourdomain = "tofasconew";
	$tmp = explode(' ',$name);
	$fname = trim($tmp[0]);
	$lname = trim($tmp[count($tmp)-1]);
	$ticket_data = json_encode(array(
	  "name" => $name,
	  "description" => $problem . ".<br><br>More Information:<br>This ticket came from MomentumCam Old Product Support form.<br>Requester name: $name<br>Requester email: $email<br>I need help with: $need_help" . ($file?"<br>Attached file:<a href='$file' target='_blank'>$file</a>":""),
	  "subject" => "[MomentumCam Old Product] I need help with ".$need_help,
	  "email" => $email,
	  "priority" => 1,
	  "status" => 2,
	  "source" => 2,
	  'type'=>'Technical Support',
	  'product_id'=>16000000465,
	  "custom_fields" => array('cf_shipping_address_no_po_box'=>'1','date_of_purchase'=>'1970-01-01','first_name'=>$fname,'last_name'=>$lname,'store_name'=>'Store Name','cf_call_time_minutes'=>480,'product_category'=>'Momentum','reason_code_category'=>'Old Camera','call_reason'=>'APP ERROR','customer_type'=>'RA for CS Portal'),
	  "tags" => array("old product support form"),
	));
	$url = "https://$yourdomain.freshdesk.com/api/v2/tickets";
	$ch = curl_init($url);
	$header[] = "Content-type: application/json";
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_HEADER, true);
	curl_setopt($ch, CURLOPT_USERPWD, "$api_key:$password");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $ticket_data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$server_output = curl_exec($ch);
	$info = curl_getinfo($ch);
	$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	$headers = substr($server_output, 0, $header_size);
	$response = substr($server_output, $header_size);
	if($info['http_code'] == 201) {
		return true;
	} else {
	  if($info['http_code'] == 404) {
		  wp_mail(array('webmaster@olibro.com'),'Momentum Old Product Support API',"Error, Please check the end point \n");
		return false;
	  } else {
		  wp_mail(array('webmaster@olibro.com'),'Momentum Old Product Support API',"Error, HTTP Status Code : " . $info['http_code'] . ". Input is $ticket_data. Headers are ".$headers.". Response are ".$response);
	    return false;
	  }
	}
	curl_close($ch);
}
add_action( 'gform_after_submission_4', 'momentum_after_old_support_submission', 10, 2 );
function momentum_after_old_support_submission($entry, $form){
	$full_name = rgar($entry,'8.3') . ' ' . rgar($entry,'8.6');
	$need_help = rgar($entry,'4');
	$email = rgar($entry,'9');
	$problem = rgar($entry,'7');
	$file = rgar($entry,'6');
	create_old_freshdesk_ticket($full_name,$need_help,$email,$problem,$file);
}

add_action('wp_ajax_save_faq_question_helpful', 'save_faq_question_helpful');
add_action('wp_ajax_nopriv_save_faq_question_helpful', 'save_faq_question_helpful');

function save_faq_question_helpful(){
	global $wpdb;
	$question = $_POST['question'];
	$is_useful = intval($_POST['is_useful']);
	$question_slug = sanitize_title($question);
	if (isset($_COOKIE['question_slugs'])) {
		$question_slugs = $_COOKIE['question_slugs'];
	} else $question_slugs = ',';
	if (strpos('1'.$question_slugs,','.$question_slug.',')>0) 
		die();
	setcookie( "question_slugs", $question_slugs.$question_slug.',', 3 * DAYS_IN_SECONDS, COOKIEPATH, COOKIE_DOMAIN );
	$chk_existed = $wpdb->get_var($wpdb->prepare("select * from faq_question_helpful where question_slug=%s ",$question_slug));
	if ($chk_existed){
		if ($is_useful)
			$wpdb->query($wpdb->prepare("update faq_question_helpful set vote_up=vote_up+1 where question_slug=%s ",$question_slug));
		else $wpdb->query($wpdb->prepare("update faq_question_helpful set vote_down=vote_down+1 where question_slug=%s ",$question_slug));
	} else {
		$fqh = array('vote_down'=>0,'vote_up'=>0,'question_slug'=>$question_slug,'question_title'=>$question);
		if ($is_useful)
			$fqh['vote_up']++;
		else $fqh['vote_down']++;
		$wpdb->insert('faq_question_helpful',$fqh);
	}
	die();
}
add_action('wp_ajax_save_faq_search_404_keyword', 'save_faq_search_404_keyword');
add_action('wp_ajax_nopriv_save_faq_search_404_keyword', 'save_faq_search_404_keyword');
function correct_keyword_faq($in){
	$out = trim($in);
	while (strpos('1'.$out,'  ')){
		$out = str_replace('  ',' ',$out);
	}
	return $out;
}
function save_faq_search_404_keyword(){
	global $wpdb;
	$keyword = correct_keyword_faq($_POST['keyword']);
	$ip = $_SERVER['REMOTE_ADDR'];
	$period = 3600 * 24;
	$tb_ip = $wpdb->prefix . "faq_search_keyword_tracking";
	$tb_cnt = $wpdb->prefix . "faq_search_keyword_count";
	$id = $wpdb->get_var( $wpdb->prepare(
	  "SELECT id FROM $tb_ip WHERE ip=%s and `keyword` = %s and created+$period > %d",
	  $ip,
	  $keyword, 
	  time() 
	) );
	if ($id){
		//ignore
	}else {
		//save
		$wpdb->insert($tb_ip,array(
			'ip'=>$ip,
			'keyword' =>$keyword,
			'created' => time()
		));
		$c_cnt = $wpdb->get_var($wpdb->prepare(
		  "SELECT `count` FROM $tb_cnt WHERE `keyword` = %s ",
		  $keyword
		));
		if (!$c_cnt){
			$wpdb->insert($tb_cnt,array(
				'keyword' =>$keyword,
				'count' => 1
			));
		} else $wpdb->update($tb_cnt,array('count'=>$c_cnt+1),array('keyword'=>$keyword));
	}
	echo "There's no FAQ matched your query. Please check these FAQ sections.";
	die();
}
add_action('wp_enqueue_scripts', 'olibro_scripts', 9999);
function olibro_scripts()
{
  /* styles declaration: */
  $styles = array(
    'https://fonts.googleapis.com/css?family=Rajdhani:400,600,700',
    get_stylesheet_directory_uri() . '/assets/css/theme.css',
    get_stylesheet_directory_uri() . '/assets/css/main.css',
  );
  $i = 0;
  foreach ($styles as $style) {
    wp_enqueue_style('olibro_style-'.$i++, $style);
  }
  /* scripts declaration: */
  $scripts = array(
    get_stylesheet_directory_uri() . '/assets/js/libs.js',
    get_stylesheet_directory_uri() . '/assets/js/script.js',
    get_stylesheet_directory_uri() . '/assets/js/main.js',
  );
    // require jquery
  wp_enqueue_script("jquery");
  $i = 0;
  foreach ($scripts as $script) {
    wp_enqueue_script('olibro_script-'.$i++, $script, array(), '1.0.0', false);
  }
}

add_action('init', 'olibro_setup');
function olibro_setup()
{

  show_admin_bar(false);
}

function olibro_site_url() {
    return 'https://momentumcam.com';
}

// Add mime type for firmware
add_filter( 'upload_mimes', 'my_myme_types', 1, 1 );
function my_myme_types( $mime_types ) {
  $mime_types['dav'] = 'application/dav'; // Adding .dav extension
  return $mime_types;
}
