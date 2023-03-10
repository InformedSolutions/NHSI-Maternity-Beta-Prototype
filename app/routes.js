// External dependencies
const express = require('express');
const session = require('express-session');

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

router.post('/event-type-0', function (req, res) {

    req.session.MaternalEventType = req.body['maternal-event-type'];
    req.session.BabyEventType = req.body['baby-event-type']

    if ((req.session.BabyEventType == 'baby-death' || req.session.BabyEventType == 'brain-injury') && (req.session.MaternalEventType == 'maternal' || req.session.MaternalEventType == 'maternal-42' || req.session.MaternalEventType == 'maternal-365')) {
        
        res.redirect('/multiple')

    } else if (req.session.MaternalEventType == 'maternal') {

        res.redirect('/maternal/criteria')

    } else if (req.session.MaternalEventType == 'maternal-42') {

        res.redirect('/maternal/criteria')

    } else if (req.session.MaternalEventType == 'maternal-365') {

        res.redirect('/maternal/task-list-after42')

    } else if (req.session.BabyEventType == 'baby-death') {

        res.redirect('/event-type-3')

    } else if (req.session.BabyEventType == 'brain-injury') {

        res.redirect('/brain-injury/still-alive')
    }
});

router.post('/event-type-1', function (req, res) {
    req.session.answer = req.session.data['yes-no']
    req.session.died = req.session.data['died']


    if (req.session.answer == 'no') {
        res.redirect('/brain-injury/task-list')
    } else if (req.session.died == 'baby') {
        res.redirect('/event-type-3')
    } else if (req.session.died == 'mother') {
        res.redirect('/event-type-2')
    }
});

router.post('/event-type-2', function (req, res) {
    req.session.eventType = req.session.data['death-details']
    if (req.session.eventType == 'maternal' || req.session.eventType == 'maternal-42') {
        res.redirect('/maternal/criteria')
    } else {
        res.redirect('/maternal/task-list')
    }

})

router.post('/event-type-3', function (req, res) {
    req.session.gestationKnown = req.session.data['gestation-known']
    req.session.gestationWeeks = req.session.data['gestational-weeks']
    req.session.gestationDays = req.session.data['gestational-days']
    req.session.birthWeight = req.session.data['birth-weight']
    req.session.signOfLife = req.session.data['sign-of-life']
    req.session.timeAfterBirth = req.session.data['time-after-birth']

    if (req.session.gestationWeeks > 21 && req.session.gestationWeeks < 24 && req.session.signOfLife == 'no') {
        req.session.eventType = "late-fetal-loss"
        res.redirect('/late-fetal-loss/task-list')
    } else if (req.session.gestationWeeks > 23 && req.session.signOfLife == 'no') {
        req.session.eventType = "stillbirth"
        res.redirect('/stillbirth/task-list')
    } else if (req.session.birthWeight > 399 && req.session.signOfLife == 'no') {
        req.session.eventType = "stillbirth"
        res.redirect('/stillbirth/task-list')
    } else if (req.session.gestationWeeks > 19 && req.session.timeAfterBirth == 'before-7') {
        req.session.eventType = "neonatal"
        res.redirect('/neonatal/task-list')
    } else if (req.session.birthWeight > 399 && req.session.timeAfterBirth == 'before-7') {
        req.session.eventType = "neonatal"
        res.redirect('/neonatal/task-list')
    } else if (req.session.gestationWeeks > 19 && req.session.timeAfterBirth == 'between-7-28') {
        req.session.eventType = "perinatal"
        res.redirect('/perinatal/task-list')
    } else if (req.session.birthWeight > 399 && req.session.timeAfterBirth == 'between-7-28') {
        req.session.eventType = "perinatal"
        res.redirect('/perinatal/task-list')
    } else if (req.session.timeAfterBirth == 'after-28') {
        res.redirect('/not-notifiable')
    } else if (req.session.gestationWeeks < 20) {
        res.redirect('/not-notifiable')
    } else if (req.session.birthWeight < 400) {
        res.redirect('/not-notifiable')
    }
})

router.post('/maternal/criteria', function (req, res) {
    req.session.suicide = req.session.data['suicide']
    res.redirect('/maternal/task-list')
})

router.get('/task-list', function (req, res) {
    req.session.eventType = req.session.eventType;
    req.session.gestationWeeks = req.session.gestationWeeks
    res.render('task-list', {
        eventType: req.session.eventType,
        gestationWeeks: req.session.gestationWeeks
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
    req.session.MaternalEventType = req.session.MaternalEventType;
    req.session.suicide = req.session.suicide;
    res.render('maternal/task-list', {
        MaternalEventType: req.session.MaternalEventType,
        suicide: req.session.suicide,
    });
});

router.get('/maternal/task-list-after42', function (req, res) {
    req.session.MaternalEventType = req.session.MaternalEventType;
    req.session.suicide = req.session.suicide;
    res.render('maternal/task-list-after42', {
        MaternalEventType: req.session.MaternalEventType,
        suicide: req.session.suicide,
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

router.post('/brain-injury/investigation-details-2', function (req, res) {
    req.session.refused = req.session.data['refused'];
    req.session.mnsi = req.session.data['MNSI'];

    if (req.session.mnsi == 'MNSI-y') {
        res.redirect('/brain-injury/investigation-details-4')
    }
    else if (req.session.refused == 'refused-y') {
        res.redirect('/brain-injury/investigation-details-3')
    }
    else if (req.session.refused == 'refused-n') {
        res.redirect('/brain-injury/investigation-details-4')
    }
})

router.post('/brain-injury/investigation-details-3', function (req, res) {
    req.session.EN = req.session.data['EN'];

    if (req.session.EN == 'yes') {
        res.redirect('/brain-injury/investigation-details-4')
    }
    else if (req.session.EN == 'no') {
        res.redirect('/brain-injury/nhsr-end')
    }
})


router.post('/household', function (req, res) {
    req.session.correspondenceType = req.session.data['answer'];

    if (req.session.correspondenceType == 'yes') {
        res.redirect('/household-further')
    }
    else if (req.session.correspondenceType == 'no') {
        res.redirect('/sibling-details')
    }
})

router.post('/sibling-details', function (req, res) {
    req.session.siblings = req.session.data['siblings'];

    if (req.session.siblings == 'yes') {
        res.redirect('/sibling-further')
    }
    else if (req.session.siblings == 'no') {
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

router.get('/cause-of-death', function (req, res) {
    req.session.eventType = req.session.eventType;
    res.render('cause-of-death', {
        eventType: req.session.eventType,
    });
});

router.get('/locations', function (req, res) {
    req.session.eventType = req.session.eventType;
    res.render('locations', {
        eventType: req.session.eventType,
    });
});

router.get('/not-notifiable', function (req, res) {
    req.session.birthWeight = req.session.birthWeight
    req.session.timeAfterBirth = req.session.timeAfterBirth
    req.session.diagnosed = req.session.diagnosed
    req.session.mri = req.session.mri

    res.render('not-notifiable', {
        birthWeight: req.session.birthWeight,
        timeAfterBirth: req.session.timeAfterBirth,
        diagnosed: req.session.diagnosed,
        mri: req.session.mri
    });
})

router.get('/neonatal/task-list', function (req, res) {
    req.session.gestationWeeks = req.session.gestationWeeks
    res.render('neonatal/task-list', {
        gestationWeeks: req.session.gestationWeeks
    });
});

router.get('/stillbirth/task-list', function (req, res) {
    req.session.gestationWeeks = req.session.gestationWeeks
    req.session.mri = req.session.mri
    req.session.diagnosed = req.session.diagnosed

    res.render('stillbirth/task-list', {
        gestationWeeks: req.session.gestationWeeks,
        mri: req.session.mri,
        diagnosed: req.session.diagnosed
    });
});

router.post('/brain-injury/still-alive', function(req,res) {
    req.session.die = req.session.data['die']
    
    if (req.session.die == 'yes') {
        res.redirect('/event-type-3')
    } else {
        res.redirect('/brain-injury/details')
    }
})

router.post('/brain-injury/details', function(req,res) {
    req.session.diagnosed = req.session.data['diagnosed']
    req.session.labour = req.session.data['labour']
    
    res.redirect('/brain-injury/task-list')
})

router.get('/brain-injury/task-list', function (req, res) {
    req.session.mri = req.session.mri
    req.session.diagnosed = req.session.diagnosed

    res.render('brain-injury/task-list', {
        diagnosed: req.session.diagnosed,
        labour: req.session.labour
    });
});
