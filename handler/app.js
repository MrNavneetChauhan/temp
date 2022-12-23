// const validations = require("./vat-validation/validation");
const validate = require("validate-vat");
exports.lambdaHandler = async (event, context) => {
	try {
		await validate("DK", "33066287", (err, response) => {
			if (err) {
				console.log(JSON.stringify(err));
				return;
			}
			console.log(JSON.stringify(response));
		});

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "hello world,its working",
			}),
		};
	} catch (err) {
		console.log(err);
		return err;
	}
};
