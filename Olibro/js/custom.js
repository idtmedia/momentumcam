// JS Custom

function getFaqDataSource(){
	var data = [];
	jQuery('#custom-tab .et_slidecontent  h5').each(function(){
		data.push(jQuery(this).text());
	});
	return data;
}
function replaceString(str, rpl){
	var str1 = str.toLowerCase();
	rpl = rpl.toLowerCase();
	var astr = str1.split(rpl);
	var fstr = [];
	var cpos = 0;
	for(i=0;i<astr.length;i++){
		fstr.push( str.substring(cpos, cpos + astr[i].length) );
		cpos +=astr[i].length;
		if(i<astr.length-1){
			fstr.push('<b>'+str.substring(cpos , cpos + rpl.length)+'</b>');
			cpos += rpl.length;
		}
	}
	return fstr.join('');
}
jQuery(document).ready(function($) {
	if($( "#faq-search .et_pb_s" ).length > 0){
		var dtsource = getFaqDataSource();
		$( "#faq-search .et_pb_s" )
			.autocomplete({
				minLength: 3,
				source: dtsource,
				// focus: function( event, ui ) {
				//   $( "#faq-search .et_pb_s" ).val( ui.item.label );
				//   return false;
				// },
				select: function( event, ui ) {
					$( "#faq-search .et_pb_s" ).val( ui.item.label );
					return false;
				}
			})
			.autocomplete( "instance" )._renderItem = function( ul, item ) {
				var stlabel = replaceString(item.label,$("#faq-search .et_pb_s" ).val());
				return $( "<li>" ).append( "<div>" + stlabel + "</div>" ).appendTo( ul );
			};

		$('#faq-search .et_pb_searchsubmit').click(function(){
			var search = $('#faq-search .et_pb_s').val().toLowerCase();
			// reset search result
			if(search.length < 3){
				$('#custom-tab .et-tabs-control li.active').find('a').trigger('click');
			}else{
				$('#custom-tab .et_slidecontent').show();
				$('#custom-tab .et_slidecontent').css('opacity','1');
				$('#custom-tab .et_slidecontent .et_pb_toggle').hide();
				$('#custom-tab .et_slidecontent .accordions-zone h1').hide();
				var s_found = false;
				$('#custom-tab .et_slidecontent .et_pb_toggle h5').each(function(){
					var text = $(this).text().toLowerCase();
					if(text.indexOf(search) > -1){
						$(this).parent().show();
						s_found = true;
					}
				});
				if (!s_found){
					jQuery.ajax({
					  type: "POST", 
					  url: ajaxurl,
					  dataType : "JSON",
					  data : {action: "save_faq_search_404_keyword",keyword:search},
					  success: function(data){
					  }
					});
					
				}
				$('html, body').animate({
					scrollTop: $("#custom-tab").offset().top
				}, 500);
				if (!s_found){
					alert("There's no FAQ matched your query. Please check these FAQ sections below.");
					$('#custom-tab .et-tabs-control li.active').find('a').trigger('click');
				}
			}
			return false;
		});
		$('#custom-tab .et-tabs-control li a').click(function(){
			var li_index = $(this).parent().index();
			$('#custom-tab .et_slidecontent').hide();
			$('#custom-tab .et_slidecontent').css('opacity','0');
			$('#custom-tab .et_slidecontent .et_pb_toggle').show();
			$('#custom-tab .et_slidecontent .accordions-zone h1').show();
			$('#custom-tab .et_slidecontent:eq('+li_index+')').show();
			$('#custom-tab .et_slidecontent:eq('+li_index+')').css('opacity','1');
		});
	}
});
function faq_helpful(e,yn){
	var question = jQuery(e).parent().parent().parent().find('.et_pb_toggle_title').text();
	jQuery.ajax({
	  type: "POST", 
	  url: ajaxurl,
	  dataType : "JSON",
	  data : {action: "save_faq_question_helpful",question:question,is_useful:yn},
	  success: function(data){
		alert("Thank you! We appreciate your contribution.");  
	  }
	});
}
jQuery('.faq-was-this-helpful .accordions-zone .et_pb_accordion .et_pb_toggle .et_pb_toggle_content').each(function(){
    jQuery(this).append('<p>Was this helpful? <span class="helpful-btn helpful-btn-yes" onclick="faq_helpful(this,1);" style="margin-left: 11px; border: 1px solid rgb(204, 204, 204); cursor: pointer; padding: 4px 10px; display: inline-block;"><img alt="Yes" style="height: 16px" src="/wp-content/themes/Olibro/images/thumb_up_small.png"> Yes</span> &nbsp; <span href="javascript:void(0);" style="margin-left: 7px; border: 1px solid rgb(204, 204, 204); cursor: pointer; padding: 4px 10px; display: inline-block;" class="helpful-btn helpful-btn-no" onclick="faq_helpful(this,0);"><img style="height: 16px" alt="No" src="/wp-content/themes/Olibro/images/thumb_down_small.png"> No</span></p>');
});