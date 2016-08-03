$( document ).ready(function() {
    $("a").click(function (e) {
        var value = $(this).attr("href");
        if(value === "#facturas"){
    		var ititle2= parent.document.getElementById('iframe_beta');
    		$(ititle2).attr('src', 'beta.html#facturas');
        }
    });
});

