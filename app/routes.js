// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// event type routing

router.post('/event-type', function (req, res) {
        
    req.session.eventType = req.body['event-type'];

    if (req.session.eventType == 'brain-injury') {
            res.redirect('/brain-injury/still-alive')

        } else if (req.session.eventType == 'maternal') {

                res.redirect('/maternal/criteria')

        } else if (req.session.eventType == 'maternal-42') {

                res.redirect('/maternal/criteria')
                
        } else if (req.session.eventType == 'maternal-365') {

                res.redirect('/maternal/task-list-after42')

        } else if (req.session.eventType == 'late-fetal-loss') {

                res.redirect('/late-fetal-loss/task-list')
        
        
        } else if (req.session.eventType == 'stillbirth') {

                res.redirect('/stillbirth/stillbirth-type')

                 
        } else if (req.session.eventType == 'perinatal') {

                res.redirect('/perinatal/task-list')

        } else if (req.session.eventType == 'neonatal') {

                res.redirect('/stillbirth/stillbirth-type')
        

    } else {
            res.redirect('/task-list')

    }
});

router.get('/task-list', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('task-list', {
            eventType: req.session.eventType,
        });
    });

router.get('/task-list-section-2', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('task-list-section-2', {
            eventType: req.session.eventType,
        });
    });

router.get('/check-answers-section-1', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('check-answers-section-1', {
            eventType: req.session.eventType,
        });
    });

router.get('/mothers-details', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('mothers-details', {
            eventType: req.session.eventType,
        });
    });


router.get('/baby-1-details', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('baby-1-details', {
            eventType: req.session.eventType,
        });
    });
    
router.get('/baby-1-location', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('baby-1-location', {
            eventType: req.session.eventType,
        });
    });
    
router.get('/further-details', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('further-details', {
            eventType: req.session.eventType,
        });
    });
    
        
router.get('/maternal/task-list', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('maternal/task-list', {
            eventType: req.session.eventType,
        });
    });
    
router.get('/stillbirth/stillbirth-type', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('stillbirth/stillbirth-type', {
            eventType: req.session.eventType,
        });
    });

 router.get('/safety-event', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('safety-event', {
            eventType: req.session.eventType,
        });
    });

router.get('/confirmation-section-1', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('confirmation-section-1', {
            eventType: req.session.eventType,
        });
    });
    
    
router.get('/event-details', function (req, res) {
        req.session.eventType = req.session.eventType;
        res.render('event-details', {
            eventType: req.session.eventType,
        });
    });
    
    
    
    