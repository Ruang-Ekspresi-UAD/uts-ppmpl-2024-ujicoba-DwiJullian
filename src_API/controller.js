let items = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'}
]

exports.getItems = (req, res) => {
    res.status(200).json(items)
}