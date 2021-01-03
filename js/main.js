function validateForm(){
	var name = $('#name').val();
	if (name == '') {
		$ ('#name').parent().append('<span>Campo obligatorio</span>');
	}
	var lastname = $('#lastname').val();
	if (lastname == '') {
		$ ('#name').parent().append('<span>Campo obligatorio</span>');
	}
	
}