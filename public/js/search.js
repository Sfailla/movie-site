window.onload = () => {
	console.log('search js');

	function getValue() {
		let searchVal = document.getElementsByClassName('input');
		console.log(searchVal.value);
		document
			.getElementsByClassName('input')
			.addEventListener('click', getValue);
	}
};
