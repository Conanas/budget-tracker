let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/budget", {
	useNewUrlParser: true,
	useFindAndModify: false
});

let transactionSeed = [
	{
		name: "Salary",
		value: 5000,
		date: new Date().setDate(new Date().getDate() - 10)
	},
	{
		name: "Rent",
		value: -2000,
		date: new Date().setDate(new Date().getDate() - 9)
	},
	{
		name: "Electricity",
		value: -100,
		date: new Date().setDate(new Date().getDate() - 8)
	},
	{
		name: "Gas",
		value: -80,
		date: new Date().setDate(new Date().getDate() - 7)
	},
	{
		name: "Food Shop",
		value: -50,
		date: new Date().setDate(new Date().getDate() - 6)
	},
	{
		name: "Ebay Sale",
		value: 20,
		date: new Date().setDate(new Date().getDate() - 5)
	},
	{
		name: "Gym Membership",
		value: -75,
		date: new Date().setDate(new Date().getDate() - 4)
	},
	{
		name: "Gift from Mum",
		value: 300,
		date: new Date().setDate(new Date().getDate() - 3)
	},
	{
		name: "Cash Withdrawal",
		value: -100,
		date: new Date().setDate(new Date().getDate() - 2)
	},
	{
		name: "Heston's",
		value: -400,
		date: new Date().setDate(new Date().getDate() - 1)
	},
	{
		name: "Petrol",
		value: -60,
		date: new Date().setDate(new Date().getDate())
	}
];

db.Transaction.deleteMany({})
	.then(() => db.Transaction.collection.insertMany(transactionSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
