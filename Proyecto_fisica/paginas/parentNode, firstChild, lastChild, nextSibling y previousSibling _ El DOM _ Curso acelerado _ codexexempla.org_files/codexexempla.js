var CE = {
    $ : function(id){var el = document.getElementById(id);return el;},
    $$ : function(cls){
        var lista = new Array();
        var els = document.getElementsByTagName('*');
        var regex = new RegExp("(^|\\s)"+cls+"(\\s|$)");
        for(i=0,j=0;i<els.length;i++){
            if(regex.test(els[i].className)){
                lista[j] = els[i];              
                j++;          
            }      
        }      
        return lista;  
    },
    eL : function(el,ev,fun){document.addEventListener ? el.addEventListener(ev,fun,false) : el.attachEvent('on'+ev,fun);},
    rL : function(el,ev,fun){document.removeEventListener ? el.removeEventListener(ev,fun,false) : el.detachEvent('on'+ev,fun);},
    pD : function(el){el.preventDefault ? el.preventDefault() : el.returnValue = false;},
    o : function(e){e.target ? e = e.target : e = e.srcElement;return e;},
    pF : function(e){
        function oHTTP(){var xhr = false;if(window.XMLHttpRequest){xhr = new XMLHttpRequest();} else if(window.ActiveXObject){try{xhr = new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{xhr = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){xhr = false;}}}return xhr;}
        function cargar(x){
            var peticion = oHTTP();
            if(peticion){
                peticion.onreadystatechange = function(){resultado(peticion);};
                peticion.open('POST','http://www.codexexempla.org/elementos-comunes/contacto.php',true);
                peticion.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                peticion.send(x);
            }
        }
        function resultado(peticion) {
			if (peticion.readyState == 4) {
                if (peticion.status == 200 || peticion.status == 304) {					
                    var contenido = peticion.responseText;
                    var resultados;
                    if(!(CE.$('resultados'))){
                        resultados = document.createElement('fieldset');
                        resultados.id = 'resultados';
                    } else { resultados = CE.$('resultados'); }
                    CE.$('f-contacto').insertBefore(resultados,CE.$('privacidad'));
                    CE.$('resultados').innerHTML = contenido;    
                    CE.$('b').disabled = false;
                    CE.$('b').innerHTML = 'Enviar';
                    CE.$('resultados').tabindex = '-1';
                    CE.$('resultados').focus();
                }
            }
        }
        CE.pD(e);
        CE.$('b').disabled = true;
        CE.$('b').innerHTML = '<img src="http://www.codexexempla.org/imagenes/cargador.gif" alt="" /> Esperando respuesta del servidor&#8230;';
        var vars = 'nombre='+CE.$('nombre').value+'&mensaje='+CE.$('mensaje').value+'&correo='+CE.$('correo').value;
        cargar(vars);
    },
    vN : function(e){
        CE.pD(e);
        e = CE.o(e);
		while(!(e.href)){e = e.parentNode;}
		e = e.href;
        var t = new Date();
        var nV = window.open(e,t.getTime(),'location=1,status=1,scrollbars=1,toolbar=1,menubar=1,resizable=1');
    },
    menu : {
        desplegar : function(e){
            var temp = CE.$$('(m-desplegado|ol-desplegado)');
            for(var i=0;i<temp.length;i++){
                temp[i].className='';    
            }
            e = CE.o(e);
            CE.$('menu-curso').className = 'm-desplegado';
            while(e.parentNode){
                if(e.parentNode=='[object HTMLOListElement]'){
                    e.parentNode.className = 'ol-desplegado';    
                }
                e = e.parentNode;
            }
        },
        finalizar : function(e){
            CE.$('menu-curso').className = '';
        }
    },
    inicio : function(){
        if(CE.$('b')){CE.$('b').disabled = false;CE.eL(CE.$('b'),'click',CE.pF)}
        var vincsVN = CE.$$('vn');
        for(var i=0;i<vincsVN.length;i++){CE.eL(vincsVN[i],'click',CE.vN);}
        if(CE.$('menu-curso')){
            var vincsM = CE.$('menu-curso').getElementsByTagName('a');
            for(var i=3;i<vincsM.length;i++){CE.eL(vincsM[i],'focus',CE.menu.desplegar);}
            CE.eL(vincsM[3],'blur',CE.menu.finalizar);
            CE.eL(vincsM[vincsM.length-1],'blur',CE.menu.finalizar);
        }
    }
}

CE.eL(window,'load',CE.inicio);