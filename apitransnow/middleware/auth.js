module.exports = (req, res, next) => {
	if('bearer '+process.env.BEARER !== req.headers.authorization) {
		res.json({"translator": "---fail---"})
	}
	next();
};