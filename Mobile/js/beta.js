$( document ).ready(function() {
	$("#agregar_producto").click(function (e) {
		$('input[disabled]').parent().find('.ui-disabled').removeClass('ui-disabled');
		var numItems = $('.trs').last().attr('id');
		numItems = numItems.substr(numItems.length - 1);
		numItems = numItems*1 + 1;
		var html =
		"<tr class='trs' id='trs_" +numItems+"'>" +
			"<td id='eliminar_producto_" +numItems+"' class='ui-table-priority-1 eliminar_producto'> " +
			"<a href='#' class='ui-btn ui-shadow ui-corner-all ui-icon-minus ui-btn-icon-notext ui-btn-inline'>Eliminar</a>" +
			"</td>" +
			"<td class='ui-table-priority-1'>" +
			"<div class='ui-select'><div id='cod_producto_" +numItems+"-button' class='ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow'>"+
			"<span>01 (Impr.)</span><select name='cod_producto_" +numItems+"' id='cod_producto_" +numItems+"'>" +
				"<option id='p_1' value=''>01 (Impr.)</option>" +
				"<option id='p_2' value=''>02 (Insumos)</option>" +
				"<option id='p_3' value=''>03 (Tintas)</option>" +
			"</select></div></div>" +
			"</td>" +
			"<td class='ui-table-priority-5'><div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input name='n_producto_" +numItems+"' id='n_producto_" +numItems+"'></input></div></td>" +
			"<td class='ui-table-priority-2'><div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input name='d_producto_" +numItems+"' id='d_producto_" +numItems+"'></input></div></td>" +
			"<td class='ui-table-priority-1'><div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input name='c_producto_" +numItems+"' id='c_producto_" +numItems+"'></input></div></td>" +
			"<td class='ui-table-priority-1'><div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input name='u_producto_" +numItems+"' id='u_producto_" +numItems+"'></input></div></td>" +
			"<td class='ui-table-priority-2'><div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input name='p_producto_" +numItems+"' id='p_producto_" +numItems+"'></input></div></td>" +
			"<td class='ui-table-priority-1'><div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input name='desc_producto_" +numItems+"' id='desc_producto_" +numItems+"'></input></div></td>" +
			"<td class='ui-table-priority-2'><div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input name='sub_producto_" +numItems+"' id='sub_producto_" +numItems+"'></input></div></td>" +
		"</tr>";
		
		$('#table-column-toggle tr:last').after(html);
	});
	$( document ).on( 'click', '.eliminar_producto', function(e) {
		var number = $(this).attr('id');
		if(number == "eliminar_producto_1"){
			alert("Debe haber al menos un producto en la factura");
		}
		else{
			number = number.substr(number.length - 1);
			$("#trs_" +number ).remove();
		}
	});
	
});