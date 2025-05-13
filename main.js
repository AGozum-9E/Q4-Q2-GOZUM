function rate(){
	var grado= document.getElementById('grado').value;
		if (grado >= 94 && grado <= 100) {
			window.alert('Excellent!');
		}

		else if (grado >= 87 && grado <=93) {
			window.alert('Above Standard!');
		}

		else if (grado >= 80 && grado <=86) {
			window.alert('Standard!');
		}

		else if (grado >= 75 && grado <=79) {
			window.alert('Needs Improvement!');
		}

		else {
			window.alert('Failed!');
		}}

		