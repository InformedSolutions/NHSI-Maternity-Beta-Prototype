// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// event type routing

router.post('/event-type', function (req, res) {
    var event = req.body['event-type'];

    if (event == 'brain-injury') {
            res.redirect('/brain-injury/task-list')

    } else {
            res.redirect('/task-list')

    }
});