jQuery(document).ready(function($){
  $(".cwmpUpdateAjaxTrue").click(function () {
	  var formData = $(".cwmpOptions").serialize();
		$.ajax({
		  type: "POST",
		  url: "admin-ajax.php",
		  data: { action: "cwmpUpdateOptions", data: formData },
		  success: function (data) {
			  window.location.reload(true);
		  },
		});
	  return false;
  });
  $(".buttonFuncionalidade").click(function () {
	  var retornoId = $(this).attr("id");
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: { action: "cwmpChangeFuncionalidade", cwmp_id: retornoId },
      success: function (data) {
        $("#" + retornoId ).attr("src", data);
      },
    });
    return false;
  });
  $(".cwmp_delete_bump").click(function () {
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: { action: "cwmp_order_bump_delete", id: $(this).attr("id") },
      success: function (data) {
        window.location.href =
          "admin.php?page=cwmp_admin_vendas&type=order-bump";
      },
    });
    return false;
  });
  $("#cwmp_add_newsletter").click(function () {
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cwmp_newsletter_add",
        campanha: $("#cwmp_newsletter_campanha").val(),
        conteudo: $("#cwmp_newsletter_conteudo").val(),
      },
      success: function (data) {
        window.location.href =
          "admin.php?page=cwmp_admin_comunicacao&type=newsletter";
      },
    });
    return false;
  });
  $("#cwmp_edit_newsletter").click(function () {
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cwmp_newsletter_edit",
        id: $("#cwmp_newsletter_id").val(),
        campanha: $("#cwmp_newsletter_campanha").val(),
        conteudo: $("#cwmp_newsletter_conteudo").val(),
      },
      success: function (data) {
        window.location.href =
          "admin.php?page=cwmp_admin_comunicacao&type=newsletter";
      },
    });
    return false;
  });
  $("#cwmp_add_bump").click(function () {
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cwmp_order_bump_add",
        chamada: $("#cwmp_bump_chamada").val(),
        produto: $("#cwmp_bump_product").val(),
        bump: $("#cwmp_bump_offer").val(),
        valor: $("#cwmp_bump_discount").val(),
      },
      success: function (data) {
        window.location.href =
          "admin.php?page=cwmp_admin_vendas&type=order-bump";
      },
    });
    return false;
  });
  $(".cwmp_template_pre").click(function () {
		$.ajax({
			type: "POST",
			url: "admin-ajax.php",
			data: {
				action: "cwmp_template_pre",
				color: $("#cwmp-checkout-template-pre").val()
			},
			success: function (data) {
				window.location.href = "admin.php?page=cwmp_admin_checkout&type=checkout.personalizacao";
			},
		});
		return false;
  });
  $("#cwmp_edit_bump").click(function () {
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cwmp_order_bump_edit",
        chamada: $("#cwmp_bump_chamada").val(),
        produto: $("#cwmp_bump_product").val(),
        bump: $("#cwmp_bump_offer").val(),
        valor: $("#cwmp_bump_discount").val(),
        id: $("#cwmp_bump_id").val(),
      },
      success: function (data) {
        window.location.href =
          "admin.php?page=cwmp_admin_vendas&type=order-bump";
      },
    });
    return false;
  });
  $("#cwmp_license_cwmwp_button").click(function () {
	$(this).addClass('disabled');
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cmwp_get_plugins_licensa",
        email: $("input[name=cwmp_license_cmwp_email]").val(),
        product: $("input[name=cwmp_license_cmwp_product]").val(),
        url: $("input[name=cwmp_license_cmwp_url]").val(),
        tipo: $("select[name=cwmp_license_cmwp_tipo]").val(),
      },
      success: function (data) {
		$('#cwmp_license_cwmwp_button').removeClass('disabled');
		window.location.reload(true);
      },
    });
    return false;
  });
  $("#cwmp_license_cwmwp_button_remove").click(function () {
    $(this).addClass('disabled');
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cmwp_get_plugins_licensa_remove",
        email: $("input[name=cwmp_license_cmwp_email]").val(),
        product: $("input[name=cwmp_license_cmwp_product]").val(),
        url: $("input[name=cwmp_license_cmwp_url]").val(),
        tipo: $("input[name=cwmp_license_cmwp_tipo]").val(),
      },
      success: function (data) {
		  $('#cwmp_license_cwmwp_button_remove').removeClass('disabled');
        window.location.reload(true);
      },
    });
    return false;
  });
  $(".mwp-sections ul li a.aba").click(function (e) {
    e.preventDefault();
    $(".box_section").removeClass("active");
    $(".box_menu").removeClass("mpcw-section-active");
    var section_ativo = $(this).attr("href");
    var section = section_ativo.substring(1);
    $("#" + section).addClass("active");
    $("." + section).addClass("mpcw-section-active");
  });
  $("#cwmp_send_whatsapp_manual").click(function (e) {
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cwmp_add_other_whats_manual_send",
        pedido: $("#cwmp_whats_manual_send_template").val(),
        template: $(".cwmp_whats_manual_send_pedido").val(),
      },
      success: function (data) {
		  //alert(data);
	  },
    });
    return false;
  });
  $("#cwmp_button_add_rastreio").click(function (e) {
    $.ajax({
      type: "POST",
      url: "admin-ajax.php",
      data: {
        action: "cwmp_save_wc_order_other_fields",
        pedido: $("#cwmp_pedido_id").val(),
        transportadora: $("#cwmp_codigo_transportadora").val(),
        track: $("#cwmp_codigo_rastreio").val()
      },
      success: function (data) {
		window.location.reload(true);
	  },
    });
	
    return false;
  });
  $("#cwmp_template_email_status").change(function () {
    var email_template = "cwmp_template_email_" + $(this).val();
    $(".box_email_template").addClass("email_template_none");
    $("." + email_template).removeClass("email_template_none");
  });
  $("#cwmp_template_email_payment").change(function () {
    var email_template = "cwmp_template_email_" + $(this).val();
    $(".box_email_template").addClass("email_template_none");
    $("." + email_template).removeClass("email_template_none");
  });
  $("#cwmp_template_whatsapp_status").change(function () {
    var whatsapp_template = "cwmp_template_whatsapp_" + $(this).val();
    $(".box_whatsapp_template").addClass("whatsapp_template_none");
    $("." + whatsapp_template).removeClass("whatsapp_template_none");
  });
  $("#cwmp_template_whatsapp_payment").change(function () {
    var whatsapp_template = "cwmp_template_whatsapp_" + $(this).val();
    $(".box_whatsapp_template").addClass("whatsapp_template_none");
    $("." + whatsapp_template).removeClass("whatsapp_template_none");
  });
  $("#cwmp_template_whatsapp_type").change(function () {
    var type = $("#cwmp_template_whatsapp_type option")
      .filter(":selected")
      .val();
    if (type == "1") {
      $("#whatsapp_default").show();
      $("#whatsapp_multi").hide();
    }
    if (type == "2") {
      $("#whatsapp_default").hide();
      $("#whatsapp_multi").show();
    }
    if (type == "0") {
      $("#whatsapp_default").hide();
      $("#whatsapp_multi").hide();
    }
  });


	if($('select[name="parcelas_mwp_type_tax"').val()=="fixed"){
		$("p#variable_tax").addClass("hide");
		$("p#fixed_tax").removeClass("hide");
	}else{
		$("p#fixed_tax").addClass("hide");
		$("p#variable_tax").removeClass("hide");
	}
	$('select[name="parcelas_mwp_type_tax"').change(function(){
		if($(this).val()=="fixed"){
			$("p#variable_tax").addClass("hide");
			$("p#fixed_tax").removeClass("hide");
		}else{
			$("p#fixed_tax").addClass("hide");
			$("p#variable_tax").removeClass("hide");
		}
	});
	
	
	if($('select.tipoDiscount').val()=="1"){
		$('p#metodoPayment').removeClass("hide");
		$('p#metodoShipping').addClass("hide");
		$('p#product').addClass("hide");
		$('p#category').addClass("hide");
		$('p#label').removeClass("hide");
		$('p#discountValue').removeClass("hide");
		$('p#discountType').removeClass("hide");
		$('p#valueMax').addClass("hide");
		$('p#minQtd').addClass("hide");
		$('p#maxQtd').addClass("hide");
	}
	if($('select.tipoDiscount').val()=="2"){
		$('p#metodoPayment').addClass("hide");
		$('p#metodoShipping').removeClass("hide");
		$('p#product').addClass("hide");
		$('p#category').addClass("hide");
		$('p#label').removeClass("hide");
		$('p#discountValue').removeClass("hide");
		$('p#discountType').removeClass("hide");
		$('p#valueMax').addClass("hide");
		$('p#minQtd').addClass("hide");
		$('p#maxQtd').addClass("hide");
	}
	if($('select.tipoDiscount').val()=="3"){
		$('p#metodoPayment').addClass("hide");
		$('p#metodoShipping').addClass("hide");
		$('p#product').removeClass("hide");
		$('p#category').addClass("hide");
		$('p#label').removeClass("hide");
		$('p#discountValue').removeClass("hide");
		$('p#discountType').removeClass("hide");
		$('p#valueMax').addClass("hide");
		$('p#minQtd').removeClass("hide");
		$('p#maxQtd').removeClass("hide");
	}
	if($('select.tipoDiscount').val()=="4"){
		$('p#metodoPayment').addClass("hide");
		$('p#metodoShipping').addClass("hide");
		$('p#product').addClass("hide");
		$('p#category').addClass("hide");
		$('p#label').removeClass("hide");
		$('p#discountValue').removeClass("hide");
		$('p#discountType').removeClass("hide");
		$('p#valueMax').removeClass("hide");
		$('p#minQtd').addClass("hide");
		$('p#maxQtd').addClass("hide");
	}
	if($('select.tipoDiscount').val()=="5"){
		$('p#metodoPayment').addClass("hide");
		$('p#metodoShipping').addClass("hide");
		$('p#product').addClass("hide");
		$('p#category').removeClass("hide");
		$('p#label').removeClass("hide");
		$('p#discountValue').removeClass("hide");
		$('p#discountType').removeClass("hide");
		$('p#valueMax').addClass("hide");
		$('p#minQtd').addClass("hide");
		$('p#maxQtd').addClass("hide");
	}
	
	
	$('select.tipoDiscount').change(function(){
		if($(this).val()=="1"){
			$('p#metodoPayment').removeClass("hide");
			$('p#metodoShipping').addClass("hide");
			$('p#product').addClass("hide");
			$('p#category').addClass("hide");
			$('p#label').removeClass("hide");
			$('p#discountValue').removeClass("hide");
			$('p#discountType').removeClass("hide");
			$('p#valueMax').addClass("hide");
			$('p#minQtd').addClass("hide");
			$('p#maxQtd').addClass("hide");
		}
		if($(this).val()=="2"){
			$('p#metodoPayment').addClass("hide");
			$('p#metodoShipping').removeClass("hide");
			$('p#product').addClass("hide");
			$('p#category').addClass("hide");
			$('p#label').removeClass("hide");
			$('p#discountValue').removeClass("hide");
			$('p#discountType').removeClass("hide");
			$('p#valueMax').addClass("hide");
			$('p#minQtd').addClass("hide");
			$('p#maxQtd').addClass("hide");
		}
		if($(this).val()=="3"){
			$('p#metodoPayment').addClass("hide");
			$('p#metodoShipping').addClass("hide");
			$('p#product').removeClass("hide");
			$('p#category').addClass("hide");
			$('p#label').removeClass("hide");
			$('p#discountValue').removeClass("hide");
			$('p#discountType').removeClass("hide");
			$('p#valueMax').addClass("hide");
			$('p#minQtd').removeClass("hide");
			$('p#maxQtd').removeClass("hide");
		}
		if($(this).val()=="4"){
			$('p#metodoPayment').addClass("hide");
			$('p#metodoShipping').addClass("hide");
			$('p#product').addClass("hide");
			$('p#category').addClass("hide");
			$('p#label').removeClass("hide");
			$('p#discountValue').removeClass("hide");
			$('p#discountType').removeClass("hide");
			$('p#valueMax').removeClass("hide");
			$('p#minQtd').addClass("hide");
			$('p#maxQtd').addClass("hide");
		}
		if($(this).val()=="5"){
			$('p#metodoPayment').addClass("hide");
			$('p#metodoShipping').addClass("hide");
			$('p#product').addClass("hide");
			$('p#category').removeClass("hide");
			$('p#label').removeClass("hide");
			$('p#discountValue').removeClass("hide");
			$('p#discountType').removeClass("hide");
			$('p#valueMax').addClass("hide");
			$('p#minQtd').addClass("hide");
			$('p#maxQtd').addClass("hide");
		}
	});
    $('.mwpsectioncontent select').select2();
	
	if($('select.cwmp_template_whatsapp_type').val()=="2"){
		$('p#cwmp_key_endpoint_wpp').removeClass("hide");
		$('p#cwmp_key_url_wpp').addClass("hide");
		$('p#cwmp_key_method_wpp').addClass("hide");
		$('p#cwmp_key_header_wpp').addClass("hide");
		$('p#cwmp_key_body_wpp').addClass("hide");
	}
	if($('select.cwmp_template_whatsapp_type').val()=="3"){
		$('p#cwmp_key_endpoint_wpp').addClass("hide");
		$('p#cwmp_key_url_wpp').removeClass("hide");
		$('p#cwmp_key_method_wpp').removeClass("hide");
		$('p#cwmp_key_header_wpp').removeClass("hide");
		$('p#cwmp_key_body_wpp').removeClass("hide");
	}
	
	$('select.cwmp_template_whatsapp_type').change(function(){
		if($(this).val()=="2"){
			$('p#cwmp_key_endpoint_wpp').removeClass("hide");
			$('p#cwmp_key_url_wpp').addClass("hide");
			$('p#cwmp_key_method_wpp').addClass("hide");
			$('p#cwmp_key_header_wpp').addClass("hide");
			$('p#cwmp_key_body_wpp').addClass("hide");
		}
		if($(this).val()=="3"){
			$('p#cwmp_key_endpoint_wpp').addClass("hide");
			$('p#cwmp_key_url_wpp').removeClass("hide");
			$('p#cwmp_key_method_wpp').removeClass("hide");
			$('p#cwmp_key_header_wpp').removeClass("hide");
			$('p#cwmp_key_body_wpp').removeClass("hide");
		}
		
	});
});


jQuery(document).ready(function($) {
    $('.health-check-accordion-trigger').on('click', function() {
        var panel = $(this).attr('aria-controls');
        var isOpen = $(this).attr('aria-expanded') === 'true';
        $('.health-check-accordion-trigger').attr('aria-expanded', 'false');
        $('.health-check-accordion-panel').attr('hidden', 'hidden');
        if (!isOpen) {
            $(this).attr('aria-expanded', 'true');
            $('#' + panel).removeAttr('hidden');
        }
    });
});