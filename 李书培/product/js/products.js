/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-20 11:07:11
 * @version $Id$
 */

$(function(){
	$.ajax({
		url:"./products/products.php",
		dataType:"json",
		success : function(data){
			console.log(data);
		}
	})
})