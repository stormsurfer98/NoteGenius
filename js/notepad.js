function annotateContent() {
	//CKEDITOR.instances['editor1'].setData("<em>abc</em>");
	var content = CKEDITOR.instances['editor1'].getData();

	var paragraphs = content.split("\n");
	console.log(paragraphs);
}