var _NOMAPP = "RiA LaB";
var _HTML_EXT = ".html";

var _GALERIA = {
	HORIZONTAL : {id : "HORIZONTAL", url : "pages/galeria/galeriaHorizontal" + _HTML_EXT},
	VERTICAL : {id : "VERTICAL", url : "pages/galeria/galeriaVertical" + _HTML_EXT}
};
var _FUNCIONALIDAD = {
	equals : function(obj) {
	    if (this.url === obj.url) {
	        return true;
	    }
	    return false;
	}
}
_FUNCIONALIDAD.INDEX = function(){
	this.titulo = _NOMAPP; 
	this.url = "pages/inicio" + _HTML_EXT; 
	this.datos = undefined;
	this.equals = _FUNCIONALIDAD.equals;
	return this;
};
_FUNCIONALIDAD.INGRESAR = function(){
	this.titulo = _NOMAPP + " - INGRESAR";
	this.url = "pages/ingresar" + _HTML_EXT;
	this.datos = undefined;
	this.equals = _FUNCIONALIDAD.equals;
	return this;
};
_FUNCIONALIDAD.VER_LISTA = function(){
	this.titulo = _NOMAPP + " - VER LISTA";
	this.url = "pages/verLista" + _HTML_EXT;
	this.datos = undefined;
	this.equals = _FUNCIONALIDAD.equals;
	return this;
};
_FUNCIONALIDAD.VER_GALERIA = function(){
	this.titulo = _NOMAPP + " - VER GALERIA";
	this.url = "pages/verGaleria" + _HTML_EXT;
	this.datos = undefined;
	this.equals = _FUNCIONALIDAD.equals;
	return this;
};
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};
