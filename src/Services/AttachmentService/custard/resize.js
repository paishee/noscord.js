const AttachmentService = require('../index.js');
const Canvas = require('@napi-rs/canvas');


AttachmentService.newF("resize", async function(img, width, height, settings={}) {
    const client = this.parent;
    client.import("types", "util")

    if (img instanceof types.Attachment) img = img.png.attachment;
    else if (img.constructor.name == "AttachmentBuilder") img = img.attachment;

	let image = await Canvas.loadImage(img);
	
	width = (width) ? width : image.width;
	height = (height) ? height : image.height;
	
	let canvas = Canvas.createCanvas(width, height);
	let context = canvas.getContext('2d');
	
	context.drawImage(image, 0, 0, width, height);

	if (!settings.name) settings.name = util.genCode(9);
	
	return new types.Attachment(canvas, settings);
});
