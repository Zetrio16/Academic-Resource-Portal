// uploadLogo.js
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFile = upload.single('image');

const uploadEventMiddleware = (req, res, next) => {
    uploadFile(req, res, async (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error uploading file');
        }

        // Assuming 'event' is the key containing JSON data in the form
        const eventJson = req.body.event;

        if (!eventJson) {
            return res.status(400).send('Event JSON data is required');
        } else {
            console.log(eventJson);
        }

        try {
            req.body.event = JSON.parse(eventJson);
            req.body.image = req.file;


            // Now req.body.event contains the JSON data, and req.file contains the uploaded file
            next();
        } catch (error) {
            console.log(error);
            return res.status(400).send('Invalid JSON data in the event key');
        }
    });
};

const uploadTicketMiddleware = (req, res, next) => {
    uploadFile(req, res, async (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error uploading file');
        }
        // make sure image exists in req.file
if (!req.file) {
            return res.status(400).send('Image file is required');
        }
        // Now req.file contains the uploaded file
        next();
    });
};

module.exports = { uploadEventMiddleware, uploadTicketMiddleware };
