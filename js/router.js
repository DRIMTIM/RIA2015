var _ROUTER = {
	blockUI : false,
	STOP_WAIT : function(){
		if(this.blockUI){
			$.unblockUI;
			this.blockUI = false;
		}
	},
	WAIT : function(){
		if(!this.blockUI){
			$.blockUI({ css: { 
		        border: 'none', 
		        padding: '15px', 
		        backgroundColor: '#000', 
		        '-webkit-border-radius': '10px', 
		        '-moz-border-radius': '10px', 
		        opacity: .5, 
		        color: '#fff' 
		    }});
			this.blockUI = true;
		}
	},
	NAVIGATE : function(funcionalidad){
		this.WAIT();
		if(funcionalidad != null && funcionalidad != "" && !(funcionalidad === undefined) &&
		funcionalidad.url != null && funcionalidad.url != "" && !(funcionalidad.url === undefined)){
			$("title").html(funcionalidad.titulo);
			$("body").load(funcionalidad.url, function( response, status, xhr ) {_ROUTER.STOP_WAIT()});
			this.FUNCIONALIDAD_ACTUAL = funcionalidad;
		}else{
			$("title").html(_FUNCIONALIDAD.INDEX.titulo);
			$("body").load(_FUNCIONALIDAD.INDEX.url, function( response, status, xhr ) {_ROUTER.STOP_WAIT()});
			this.FUNCIONALIDAD_ACTUAL = new _FUNCIONALIDAD.INDEX;
		}
	},
	FUNCIONALIDAD_ACTUAL:undefined,
	routeTo : function(funcionalidad){
		_ROUTER.WAIT();
		_ROUTER.NAVIGATE(funcionalidad);
	},
	routeToWithImages : function(funcionalidad, imagenesCargadas){
		_ROUTER.WAIT();
		var datos = this.FUNCIONALIDAD_ACTUAL.datos;
		if(datos.imagenesCargadas === undefined){
			datos.imagenesCargadas = imagenesCargadas;
		}else{
			for(var i = 0; i < imagenesCargadas.length; i++){
				if(!datos.imagenesCargadas.contains(imagenesCargadas[i])){
					datos.imagenesCargadas.push(imagenesCargadas[i]);
				}
			}					
		}
		funcionalidad.datos = datos;
		this.routeTo(funcionalidad);
	}
};