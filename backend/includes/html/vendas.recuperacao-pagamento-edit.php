			<?php

			$args = array(
				'box'=>array(
					'0'=> array(
						'title'=>__('Payment Recovery', 'checkout-mestres-wp'),
						'description'=>__('Retrieve pending payments by sending emails and messages via WhatsApp.', 'checkout-mestres-wp'),
						'help'=>'https://docs.mestresdowp.com.br',
						'formButton'=>__('Update', 'checkout-mestres-wp'),
						'bd'=>'cwmp_pending_payment_msg',
						'action'=>'externo',
						'args'=>array(
							'1' =>array(
								'type'=>'number',
								'value'=>array(
									'label'=>__( 'Time', 'checkout-mestres-wp'),
									'name'=>'time',
									'row'=>'time',
									'info'=>__('Enter the shipping time for pending payment recovery.', 'checkout-mestres-wp'),
								),
							),
							'2' =>array(
								'type'=>'select',
								'id'=>'time2',
								'row'=>'time2',
								'title'=>__( 'Period', 'checkout-mestres-wp'),
								'description'=>__('Enter the pending payment recovery shipping period.', 'checkout-mestres-wp'),
								'options'=>array(
									'0'=>array(
										'label'=>__('Minutes', 'checkout-mestres-wp'),
										'value'=>'0',
									),
									'1'=>array(
										'label'=>__('Hours', 'checkout-mestres-wp'),
										'value'=>'1',
									),
									'2'=>array(
										'label'=>__('Days', 'checkout-mestres-wp'),
										'value'=>'2',
									),

								),
							),
							'3' =>array(
								'type'=>'select',
								'id'=>'method',
								'row'=>'method',
								'title'=>__('Payment Method', 'checkout-mestres-wp'),
								'description'=>__('Choose the form of payment.', 'checkout-mestres-wp'),
								'options'=>cwmpArrayPaymentMethods(),
							),
							'4' =>array(
								'type'=>'text',
								'value'=>array(
									'label'=>__( 'Subject', 'checkout-mestres-wp'),
									'name'=>'titulo',
									'row'=>'titulo',
									'info'=>__('Enter the subject of the recovery email.', 'checkout-mestres-wp'),
								),
							),
							'5' =>array(
								'type'=>'textarea',
								'value'=>array(
									'label'=>__( 'E-mail Body', 'checkout-mestres-wp'),
									'name'=>'body',
									'row'=>'body',
									'info'=>__('Enter the body of the recovery email.', 'checkout-mestres-wp'),
								),
							),
							'6' =>array(
								'type'=>'textarea',
								'value'=>array(
									'label'=>__('Whatsapp Content', 'checkout-mestres-wp'),
									'name'=>'mensagem',
									'row'=>'mensagem',
									'info'=>__('Enter the content of the recovery message for WhatsApp.', 'checkout-mestres-wp'),
								),
							),
						),
					),
				),
			);
			echo '<form method="post" action="admin.php?page=cwmp_admin_vendas&type=vendas.recuperacao-pagamento&action=edit">';
			cwmpAdminCreateForms($args, '');
			echo '</form>';
			include "config.copyright.php";