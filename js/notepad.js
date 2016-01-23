function annotateContent() {
	//CKEDITOR.instances['editor1'].setData("<em>Text</em> changed!");
	var content = CKEDITOR.instances['editor1'].getData();
	var paragraphs = content.split("\n");
	console.log(paragraphs);
}