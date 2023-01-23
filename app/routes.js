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

                res.redirect('/stillbirth/task-list')

                 
        } else if (req.session.eventType == 'perinatal') {

                res.redirect('/perinatal/task-list')

        } else if (req.session.eventType == 'neonatal') {

                res.redirect('/neonatal/task-list')

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
    
router.get('/maternal/task-list-after42', function (req, res) {
    req.session.eventType = req.session.eventType;
    res.render('maternal/task-list-after42', {
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

router.post('/brain-injury/investigation-details', function (req, res) {
    req.session.refused = req.session.data['refused'];
    req.session.mnsi = req.session.data['MNSI'];

    if (req.session.mnsi == 'MNSI-y') {
        res.redirect('/brain-injury/mri-outcome')
    }
    else if (req.session.refused == 'refused-y') {
        res.redirect('/brain-injury/investigation-details-further')
    }
    else if (req.session.refused == 'refused-n') {
        res.redirect('/brain-injury/mri-outcome')
    }
})
     

router.post('/household', function (req, res) {
    req.session.correspondenceType = req.session.data['answer'];

    if (req.session.correspondenceType == 'yes') {
        res.redirect('/household-further')
    }
    else if (req.session.correspondenceType == 'no') {
        res.redirect('/further-details')
    }
})

router.get('/professionals', function (req, res) {
    req.session.eventType = req.session.eventType;
    res.render('professionals', {
        eventType: req.session.eventType,
    });
});

router.get('/account-details', function (req, res) {
    req.session.eventType = req.session.eventType;
    res.render('account-details', {
        eventType: req.session.eventType,
    });
});

router.get('/covid-19', function (req, res) {
    req.session.eventType = req.session.eventType;
    res.render('covid-19', {
        eventType: req.session.eventType,
    });
});
