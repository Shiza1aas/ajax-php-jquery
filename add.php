<?php 
	header('Content-type: text/html; charset=utf-8');
	$json  = array('success' => false, 
					'result' => 1
					);


	if (isset($_POST['first']) && isset($_POST['second']))
	{
		$json['success'] = "true";
		$first = $_POST['first'];
		$second = $_POST['second'];
		$json['result'] = $first + $second;
	}
	echo json_encode($json);
 ?>