var _NOMAPP = "RiA LaB";
var _HTML_EXT = ".html";
var _DIR_IMGS_PRUEBA = "images/landscape/"
	
var _DATOS_PRUEBA = new Array(
	{id : -1, titulo:"Titulo 01", descripcion : "Descripción 01", archivo : _DIR_IMGS_PRUEBA + "01.jpg"},
	{id : -2, titulo:"Titulo 02", descripcion : "Descripción 02", archivo : _DIR_IMGS_PRUEBA + "02.jpg"},
	{id : -3, titulo:"Titulo 03", descripcion : "Descripción 03", archivo : _DIR_IMGS_PRUEBA + "03.jpg"},
	{id : -4, titulo:"Titulo 04", descripcion : "Descripción 04", archivo : _DIR_IMGS_PRUEBA + "04.jpg"},
	{id : -5, titulo:"Titulo 05", descripcion : "Descripción 05", archivo : _DIR_IMGS_PRUEBA + "05.jpg"},
	{id : -6, titulo:"Titulo 06", descripcion : "Descripción 06", archivo : _DIR_IMGS_PRUEBA + "06.jpg"},
	{id : -7, titulo:"Titulo 07", descripcion : "Descripción 07", archivo : _DIR_IMGS_PRUEBA + "07.jpg"},
	{id : -8, titulo:"Titulo 08", descripcion : "Descripción 08", archivo : _DIR_IMGS_PRUEBA + "08.jpg"},
	{id : -9, titulo:"Titulo 09", descripcion : "Descripción 09", archivo : _DIR_IMGS_PRUEBA + "09.jpg"},
	{id : -10, titulo:"Titulo 10", descripcion : "Descripción 10", archivo : _DIR_IMGS_PRUEBA + "10.jpg"},
	{id : -11, titulo:"Titulo 11", descripcion : "Descripción 11", archivo : _DIR_IMGS_PRUEBA + "11.jpg"},
	{id : -12, titulo:"Titulo 12", descripcion : "Descripción 12", archivo : _DIR_IMGS_PRUEBA + "12.jpg"}
);
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
