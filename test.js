const logic = require('./logic.js');
(async () => {
    var data = await logic.onMessage({
        payload: 'https://falinwa.com'
    });
    console.log(data);
})().catch(err => console.error)