var INIT_PARAMETERS = {
	MIN_LARGO_NOMBRE : undefined,
	MAX_LARGO_NOMBRE : undefined
};
function _config_app_init(){
	INIT_PARAMETERS.MIN_LARGO_NOMBRE = 5;
	INIT_PARAMETERS.MAX_LARGO_NOMBRE = 20;
};
function verificarDatos(input) {
	var content = input.value;
	if (content.length >= INIT_PARAMETERS.MIN_LARGO_NOMBRE) {
		$("#botonLogin").prop('disabled', false);
	} else {
		$("#botonLogin").prop('disabled', true);
	}
};
function verificarSoporteArchivos(){
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		return true;
	} else {
		alert('Las APIs de manejos de archivos no estan soportadas por el navegador.');
		return false;
	}
};
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
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
};
function mostrarImagen(imagen){
	bootbox.dialog({
	  message: "<div><img src='" + imagen.archivo + "' class='imagenDetalle'/><h2>" + imagen.descripcion + "</h2></div>",
	  title: imagen.titulo,
	  buttons: {
    	aceptar: {
    		label: "Cerrar",
      		className: "btn-primary",
      		callback: function() {}
    	}
	  }
	});
};
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
};
function mostrarLista(){
	var imagenesCargadas = _ROUTER.FUNCIONALIDAD_ACTUAL.datos.imagenesCargadas;
	if(!(imagenesCargadas === undefined) && imagenesCargadas.length > 0){
		$("#contenedorImagenes").html(null);
		$("#sinImagenes").hide();
		for(var i = 0; i < imagenesCargadas.length; i++){
			var imagen = imagenesCargadas[i];
			var cloneImagenMuestra = $("#imagenMuestra_").clone();
			//Se cambian los ids para el clon.
			cloneImagenMuestra.attr("id", "imagenMuestra_" + i);
			//Se asignan los valores a los hijos del clon.
			cloneImagenMuestra.find("img").attr("src", imagen.archivo);
			cloneImagenMuestra.find("img").attr("alt", imagen.titulo);
			cloneImagenMuestra.find("h3").html(imagen.titulo);
			cloneImagenMuestra.find("p").html(imagen.descripcion);
			
			$(cloneImagenMuestra.find("img")).on("click", {imagen : imagen}, function(event){mostrarImagen(event.data.imagen)});
			$("#contenedorImagenes").append(cloneImagenMuestra);
		}
	}else{
		$("#sinImagenes").show();
	}
}
function mostrarGaleria(){
	_ROUTER.WAIT();
	setTimeout(function(){
		var imagenesCargadas = _ROUTER.FUNCIONALIDAD_ACTUAL.datos.imagenesCargadas;
		if(!(imagenesCargadas === undefined) && imagenesCargadas.length > 0){
			$("#SLIDER").html(null);
			$("#sinImagenes").hide();
			for(var i = 0; i < imagenesCargadas.length; i++){
				var imagen = imagenesCargadas[i];
				var cloneImagenMuestra = $("#SLIDER_imagenMuestra_").clone();
				//Se cambian los ids para el clon.
				cloneImagenMuestra.attr("id", "SLIDER_imagenMuestra_" + i);
				//Se asignan los valores a los hijos del clon.
				cloneImagenMuestra.find("img").attr("src", imagen.archivo);
				cloneImagenMuestra.find("img").attr("alt", imagen.titulo);
				cloneImagenMuestra.attr("hidden", null);
				$("#SLIDER").append(cloneImagenMuestra);					
			}
			if(_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria === undefined || 
					(!(_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria === undefined) && 
							_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria === _GALERIA.HORIZONTAL)){
				_init_galeria_horizontal($);
			}else{
				_init_galeria_vertical($);
			}
			$("#contenedorImagenes").show();
			$("#botonCambio").show();
		}else{
			$("#contenedorImagenes").hide();
			$("#sinImagenes").show();
			$("#botonCambio").hide();
		}
		_ROUTER.STOP_WAIT();
	}, 50);
};
function cambiarHorientacionGaleria(){
	_ROUTER.WAIT();
	if(_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria === undefined || 
			(!(_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria === undefined) && 
					_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria === _GALERIA.HORIZONTAL)){
		_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria = _GALERIA.VERTICAL;
	}else{
		_ROUTER.FUNCIONALIDAD_ACTUAL.datos.galeria = _GALERIA.HORIZONTAL;
	}			
	_ROUTER.routeToWithImages(_ROUTER.FUNCIONALIDAD_ACTUAL, _ROUTER.FUNCIONALIDAD_ACTUAL.datos.imagenesCargadas);
};
function setNombreUsuario(){
	if(!(_ROUTER.FUNCIONALIDAD_ACTUAL === undefined) &&
			!(_ROUTER.FUNCIONALIDAD_ACTUAL.equals(_FUNCIONALIDAD.INDEX()))){
		var nombreUsuario = _ROUTER.FUNCIONALIDAD_ACTUAL.datos.nombreUsuario;
		$("#nombreUsuario").html("Bienvenido " + nombreUsuario);
	}
};