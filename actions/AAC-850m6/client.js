function(properties, context) {
  
   
  
	try {
    	var title = properties.title
	}
	catch(err) {
    	var title = ''
	}
   
  
  if (properties.positionclass === 'Top Right'){
    var pos = 'toast-top-right';
  } else if (properties.positionclass === 'Bottom Right'){
    var pos = 'toast-bottom-right';
  } else if (properties.positionclass === 'Bottom Left'){
    var pos = 'toast-bottom-left';
  } else if (properties.positionclass === 'Top Left'){
    var pos = 'toast-top-left';
  } else if (properties.positionclass === 'Top Full Width'){
    var pos = 'toast-top-full-width';
  } else if (properties.positionclass === 'Buttom Full Width'){
    var pos = 'toast-bottom-full-width';
  } else if (properties.positionclass === 'Top Center'){
    var pos = 'toast-top-center';
  } else if (properties.positionclass === 'Buttom Center'){
    var pos = 'toast-bottom-center';
  } 

  
   toastr.options = {
  	"closeButton": properties.closebutton,
  	"debug": false,
  	"newestOnTop": properties.newestontop,
  	"progressBar": properties.progressbar,
  	"positionClass": pos,
  	"preventDuplicates": properties.preventduplicates,
  	"onclick": null,
  	"showDuration": properties.showduration,
  	"hideDuration": properties.hideduration,
  	"timeOut": properties.timeout,
  	"extendedTimeOut": properties.extendedtimeout,
    }
  
  
  
 if (properties.notification_type.toLowerCase()==='info'){
  
	toastr.info(properties.text,title);
 
 } else if (properties.notification_type.toLowerCase()==='warning') {

    toastr.warning(properties.text,title);

} else if (properties.notification_type.toLowerCase()==='success') {

    toastr.success(properties.text,title);

} else if (properties.notification_type.toLowerCase()==='error') {

    toastr.error(properties.text,title);

}
  

//Destroy variables
  type = null;
  title = null;
  pos = null;
  
  


}