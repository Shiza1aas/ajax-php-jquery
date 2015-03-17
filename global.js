$('#addForm').on('submit',
	function (e) {
		// alert("hello submit");
		e.preventDefault();
		var contents = $(this).serialize();	

		$.ajax(
		{
			url:'add.php',
			dataType: 'json',
			type:'post',
			data:contents,
			success:function(data)
			{
				if(data.success)
				{
					alert("result is " + data.result);
				}
			},
		}
			);
		// alert("Wfah");
	});