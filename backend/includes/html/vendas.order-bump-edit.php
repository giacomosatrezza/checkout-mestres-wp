			<?php

			$args = array(
				'box'=>array(
					'0'=> array(
						'title'=>__('Update Order Bump', 'checkout-mestres-wp'),
						'description'=>__('Create offers according to the products desired by your customers.', 'checkout-mestres-wp'),
						'help'=>'https://docs.mestresdowp.com.br',
						'formButton'=>__('Update', 'checkout-mestres-wp'),
						'bd'=>'cwmp_order_bump',
						'action'=>'externo',
						'args'=>array(
							'0' =>array(
								'type'=>'select',
								'id'=>'produto',
								'row'=>'produto',
								'title'=>__('Product', 'checkout-mestres-wp'),
								'description'=>__('Choose the product.', 'checkout-mestres-wp'),
								'options'=>cwmpArrayProducts(),
							),
							'1' =>array(
								'type'=>'select',
								'id'=>'bump',
								'row'=>'bump',
								'title'=>__('Product Offer', 'checkout-mestres-wp'),
								'description'=>__('Choose the product you want to offer a discount on.', 'checkout-mestres-wp'),
								'options'=>cwmpArrayProducts(),
							),
							'2' =>array(
								'type'=>'text',
								'value'=>array(
									'label'=>__('Kitten', 'checkout-mestres-wp'),
									'name'=>'chamada',
									'row'=>'chamada',
									'info'=>__('Set the offer title.', 'checkout-mestres-wp'),
								),
							),
							'3' =>array(
								'type'=>'number',
								'value'=>array(
									'label'=>__('Discount', 'checkout-mestres-wp'),
									'name'=>'valor',
									'row'=>'valor',
									'info'=>__('Set the percentage of the discount amount.', 'checkout-mestres-wp'),
								),
							),
						),
					),
				),
			);
			echo '<form method="post" action="admin.php?page=cwmp_admin_vendas&type=vendas.order-bump&action=edit">';
			cwmpAdminCreateForms($args, '');
			echo '</form>';
			include "config.copyright.php";
