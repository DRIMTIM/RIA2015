 		/* Copyright (c) 2006 Mathias Bank (http://www.mathias-bank.de)
 		* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 		* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 		* 
 		* Thanks to Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 		*/
		jQuery.extend({
		/**
		* Returns get parameters.
		*
		* If the desired param does not exist, null will be returned
		*
		* @example value = $.getURLParam("paramName");
		*/ 
 			getURLParam: function(strParamName){
				var strReturn = "";
				var strHref = window.location.href;
				var bFound=false;
				  
				var cmpstring = strParamName + "=";
				var cmplen = cmpstring.length;

				if ( strHref.indexOf("?") > -1 ){
				  	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
				    var aQueryString = strQueryString.split("&");
				    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
				      	if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
				        	var aParam = aQueryString[iParam].split("=");
				        	strReturn = aParam[1];
				        	bFound=true;
				        	break;
				      	}
				      
				    }
				}
				if (bFound==false) return null;
					return strReturn;
				}
			});

		var imagenCargada = null;
		var imagenesCargadas = new Array();	
		var active = false;

		var nombreUsuario = $.getURLParam("nombreUsu");
		if(nombreUsuario != null && nombreUsuario != ""){ 
			var aux = '&nbsp;' + nombreUsuario.replace(/\+/g, " ");
			$("#nombreUsu").html(aux);
		}else{
			$("#nombreUsu").html(" Registrese!");	
		}

		$("#formVer").hide();

		function mostrarImagen2(input) {
 			if (input.files && input.files[0]) {
  				var reader = new FileReader();
  				reader.onload = function (e) {
   					$('#miniatura').attr('src', e.target.result);
   					imagenCargada = e.target.result;
  				}
  				reader.readAsDataURL(input.files[0]);
 			}
		}

		function mostrarImagen(titulo, imagen, descripcion){
			bootbox.dialog({
			  message: "<div><img src='" + imagen + "' class='imagenDetalle'/><h4>" + descripcion + "</h4></div>",
			  title: titulo,
			  buttons: {
		    	aceptar: {
		    		label: "Cerrar",
		      		className: "btn-primary",
		      		callback: function() {}
		    	}
			  }
			});
		}		

		function cargarImagen(event) {
			var files = event.target.files;
			var reader = new FileReader();
			var miniatura = document.getElementById("miniatura");
			for (var i = 0, file; file = files[i]; i++) {
				miniatura.title = file.name;
				reader.onload = function(event) {
					miniatura.src = event.target.result;
					imagenCargada = event.target.result;
				};
				reader.readAsDataURL(file);
			}
		}	

		function mostrarFuncionalidad(funcionalidad) {
			if (funcionalidad == "INGRESAR") {
				$("#formIngresar").show();
				$("#formVer").hide();
				$("#linkIngresar").attr("class", "active");
				$("#linkVer").attr("class", "");
			} else {
				$("#formIngresar").hide();
				$("#formVer").show();
				$("#linkIngresar").attr("class", "");
				$("#linkVer").attr("class", "active");
				mostrarImagenesCargadas();
			}

		}

		function mostrarImagenesCargadas(){

			$(".carousel-inner").html(null);
			$('.carousel-indicators').html(null);

			if(imagenesCargadas.length > 0){
				$("#sinImagenes").hide();
				var indicator = "";
				var item = "";
				for(var i = 0; i < imagenesCargadas.length; i++){
					var titulo = imagenesCargadas[i].titulo;
					var imagen = imagenesCargadas[i].archivo;
					var descripcion = imagenesCargadas[i].descripcion;

					if(i == 0){
						item = "<div class='item active'>" +
						        "<img class='img-rounded img-thumbnail' src='" + imagen + "'" + "alt='" + titulo + "'" 
						        + "width='500' height='350'>" + "<div class='carousel-caption'>" +
						        	"<h3>" + titulo + "</h3>" + 
						        	"<p>" + descripcion + "</p>" +
						        "</div>" +
						    "</div>";

						indicator = "<li data-target='#myCarousel' data-slide-to='" + i + "'" + "class='active'></li>";

					}else{

						item = "<div class='item'>" +
						        "<img class='img-rounded img-thumbnail' src='" + imagen + "'" + "alt='" + titulo + "'" 
						        + "width='500' height='350'>" + "<div class='carousel-caption'>" +
						        	"<h3>" + titulo + "</h3>" + 
						        	"<p>" + descripcion + "</p>" +
						        "</div>" +
						    "</div>";

						indicator = "<li data-target='#myCarousel' data-slide-to='" + i + "'" + "></li>";

					}

					$('.carousel-indicators').append(indicator);
					$('.carousel-inner').append(item);	
					item = null;				

				}
			}else{
				$("#sinImagenes").show();
				$("#myCarousel").hide();
			}
		}	
		
		function mostrarConfirmacion(titulo, mensaje, funcionAceptar){
			bootbox.dialog({
			  message: mensaje,
			  title: titulo,
			  buttons: {
			  	cancelar: {
				  label: "Cancelar",
			      className: "btn-primary",
			      callback: function() {}
		    	},
		    	aceptar: {
		    		label: "Aceptar",
		      		className: "btn-primary",
		      		callback: function() {
		        		funcionAceptar();
		      		}
		    	}
			  }
			});
		}

		function mostrarError(mensaje){
			bootbox.dialog({
			  message: mensaje,
			  title: "Error!",
			  buttons: {
		    	aceptar: {
		    		label: "Cerrar",
		      		className: "btn-primary",
		      		callback: function() {}
		    	}
			  }
			});
		}

		function guardarImagen(){
			var tituloImagen = $("#tituloImagen").val();
			var descripcionImagen = $("#descripcionImagen").val();
			if(imagenCargada != null && imagenCargada != "" && imagenCargada != undefined){
				if(tituloImagen != null && tituloImagen != "" && tituloImagen != undefined){
					if(descripcionImagen != null && descripcionImagen != "" && descripcionImagen != undefined){
						mostrarConfirmacion("Confirmación", "Esta seguro que desea guardar la imagen?", function (){
							var imagen = new Object();
							imagen.archivo = imagenCargada;
							imagen.titulo = tituloImagen;
							imagen.descripcion = descripcionImagen;
							imagenesCargadas[imagenesCargadas.length] = imagen;
							limpiarCampos();
						});
					}else{
						mostrarError("Debe ingresar una descripción!");
					}
				}else{
					mostrarError("Debe ingresar un titulo!");
				}
			}else{
				mostrarError("Debe seleccionar una imagen!");
			}		
		}

		function limpiarCampos(){
			$("#archivoImagen").val(null);
			$("#tituloImagen").val(null);
			$("#descripcionImagen").val(null);
			$("#miniatura").attr("src", "../images/upload.png");
			$(":file").filestyle('clear');
		}
 
		/*$("#archivoImagen").change(function(){
 			cargarImagen(event);
		});*/

		$("#btnSubirImg").click(function(){
			guardarImagen();
 		});	

 		function aleatorio(inferior,superior){
    		var numPosibilidades = superior - inferior;
    		var aleat = Math.random() * numPosibilidades;
    		aleat = Math.round(aleat);
    		return parseInt(inferior) + aleat;
		};