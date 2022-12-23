const validate = require("validate-vat");
module.exports = async (countryCode, vat_number) => {
	console.log("execution testing");
	try {
		let temp;
		temp = await validate(countryCode, vat_number, (err, response) => {
			if (err) {
				console.log(JSON.stringify(err));
				return;
			}
			return (JSON.stringify(response));
		});

		console.log("14",JSON.stringify(temp))


	} catch (err) {
		console.log(JSON.stringify(err.message));
	}

	console.log("execution ending");
};
