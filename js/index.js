
$(document).ready(function() {

    $('#btnRun1').click(function() {
		$.ajax({
			url: "php/language.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry1').val(),
				lang: $('#selLanguage1').val()
			},
			success: function(result) {
                let data = "";
				console.log(JSON.stringify(result.data));

				if (result.status.name == "ok") {

                    data = "Capital : "+result.data[0]['capital']+"<br><br>Continent : "+result['data'][0]['continent']+"<br><br>Languages : "+result['data'][0]['languages'];
					$('#result').html(data);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});


    $('#btnRun2').click(function() {
		$.ajax({
			url: "php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry2').val(),
				lang: $('#selLanguage2').val()
			},
			success: function(result) {
                let data = "";
				console.log(JSON.stringify(result.data));

				if (result.status.name == "ok") {

                    data = "Capital : "+result.data[0]['capital']+"<br><br>Continent name : "+result['data'][0]['continentName']+"<br><br>Country name : "+result['data'][0]['countryName'];
					$('#result').html(data);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});


    $('#btnRun3').click(function() {
		$.ajax({
			url: "php/population.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry3').val(),
				lang: $('#selLanguage3').val()
			},
			success: function(result) {
                let data = "";
				console.log(JSON.stringify(result.data));

				if (result.status.name == "ok") {

                    data = "Capital : "+result.data[0]['capital']+"<br><br>Continent : "+result['data'][0]['continent']+"<br><br>Population : "+result['data'][0]['population'];
					$('#result').html(data);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});
  });
   