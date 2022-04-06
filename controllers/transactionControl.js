// @desc Get all transactions
// @route GET /api/v1/transactions
// @acess Public

exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

// @desc add all transactions
// @route POST /api/v1/transactions
// @acess Public

exports.addTransactions = (req, res, next) => {
    res.send('POST transaction');
}

// @desc add all transactions
// @route DELETE /api/v1/transactions/:id
// @acess Public

exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transaction');
}
