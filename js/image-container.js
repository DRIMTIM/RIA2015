

function ImageHelper(urlPath, descripcion, titulo)  {
	var imageHelper = new Object();
	imageHelper.urlPath = urlPath;
	imageHelper.descripcion = descripcion;
	imageHelper.titulo = titulo;
	return imageHelper;
}

var helper1 = ImageHelper("images/1.jpeg", "Esto es pura naturaleza. Estaba en Nueva Zelanda y saque esta foto", "La pureza de la natureleza.");
var helper2 = ImageHelper("images/2.jpeg", "Con Frodo, antes de tirar el anillo :P", "Mordor en la noche.");
var helper3 = ImageHelper("images/3.jpeg", "Sol en Montevideo", "Amanecer en Uruguay");
var helper4 = ImageHelper("images/4.jpeg", "Nature!", "Humaturaleza.");

var imageContainer = new Object();

imageContainer.helpers = 
[
	helper1, helper2, helper3, helper4,
	helper1, helper2, helper3, helper4,
	helper1, helper2, helper3, helper4
];

imageContainer.printAllHelpers = function(container) {
	var helpers = imageContainer.helpers;

	for(index in helpers) {
		container.append(
	            '<div class="col-lg-3 col-md-4 col-xs-6 thumb" id="img-'+index+'" onclick="showImage(this);">'+
            	    '<a class="thumbnail" href="#">'+
                    '<img class="img-thumbnail" src="'+helpers[index].urlPath+'" style="width: 400px; height: 300px;">'+
        	        '</a>'+
    	        '</div>'
    	);
	}
	
}
/*
<div class="col-sm-6 col-md-3">
      <div class="thumbnail">
         <img src="/bootstrap/images/kittens.jpg" 
         alt="Generic placeholder thumbnail">
      </div>
      <div class="caption">
         <h3>Thumbnail label</h3>
         <p>Some sample text. Some sample text.</p>
         <p>
            <a href="#" class="btn btn-primary" role="button">
               Button
            </a> 
            <a href="#" class="btn btn-default" role="button">
               Button
            </a>
         </p>
      </div>
   </div>
   </div>
*/

function showImage(div) {
	var id = div.id.replace("img-", ""); 
	var helper = imageContainer.helpers[id];
	var modalBody = $('#modal-cuerpo');
	modalBody.empty();
	modalBody.append('<div class="col-sm-6 col-md-3">')
	.append('<div class="thumbnail">')
	.append('<img class="img-responsive center-block" src="'+helper.urlPath+'" style="width: 100%; height: 80%;">')
	.append('</div>')
	.append('<div class="caption">')
	.append('<h3>'+helper.titulo+'</h3')
	.append('<p>'+helper.descripcion+'</p>')
	.append('</div>')
	.append('</div>')
	$('#myModal').modal('show');
}