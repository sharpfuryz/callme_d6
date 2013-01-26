$(function(){
jQuery(".callme_viewform").click(function(){
	callmeShowForm();
});

jQuery("#cme_cls").click(function(){//кнопка "закрыть" 
	callmeShowForm();
});

jQuery("#viewform").hover(function(){ 
	jQuery(this).addClass("callmeform_hover");
},function(){
	jQuery(this).removeClass("callmeform_hover");
}

);
});

function callmeShowForm(){ //скрываем и показываем форму
	jQuery('#callmeform').toggle();
	jQuery("#callme_result").html("");
}

function sendMail() {
f_name = $('#callmeform #name').val();
f_phone = $('#callmeform #phone').val();
f_ccmnt = $('#callmeform #ccmnt').val();

$.post('?q=callme/js', {name: f_name, phone: f_phone, ccmnt: f_ccmnt},function(data){
	var text = "<div class='c_success'>Спасибо, мы свяжемся с вами в ближайшее время</div>";
	$('#callme_result').html(text);
	$('#callmeform .btn').attr("disabled","disabled");
	$('#callmeform .txt').val("");		
});
}

jQuery(document).ready(function(){

jQuery("#callmeform .btn").click(function(){
	jQuery("#callme_result").html("<div class='sending'>Отправка...</div>");
	setTimeout( function(){ sendMail(); }, 2000);
	return false;
});	
});

jQuery(document).keyup(function(a) { //обработка esc
	if (a.keyCode == 27) {
		if(jQuery("#callmeform").is(":visible")) {
			callmeShowForm();
		}
	}
});
