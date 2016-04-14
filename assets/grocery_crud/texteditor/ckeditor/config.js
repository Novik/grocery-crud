﻿/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.enterMode = CKEDITOR.ENTER_BR;
	config.shiftEnterMode = CKEDITOR.ENTER_BR;
	config.toolbar = 
	[
		{ name: 'source',	items: [ 'Source' ] },
		{ name: "basicstyles",	items: ["Bold", "Italic", "Underline", "Strike"] },
		{ name: 'links',	items: [ 'Link','Unlink' ] }
	];
	
	config.allowedContent = "br b i u s; a[!href]";
	config.width = 512;	
};
