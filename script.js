const express = require('express');
const qr = require('qrcode');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get('/', (req, res) => {
    const websiteData = req.query.website || 'https://www.aayushrestha.com';
    const githubData = req.query.github || 'https://www.github.com/AayuStha';
    const fbData = req.query.facebook || 'https://www.facebook.com/MaJhAa0';
    const instaData = req.query.instagram || 'https://www.instagram.com/aayushsnaps';
    const linkedinData = req.query.linkedin || 'https://www.fb.com/in/ayz-sth';
    const snapchatData = req.query.snapchat || 'https://www.snapchat.com/ayz_sth';


    qr.toDataURL(websiteData, (err, qrCode) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error generating QR code for website');
            return;
        }
        qr.toDataURL(githubData, (err, github) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error generating QR code for GitHub');
                return;
            }
            qr.toDataURL(fbData, (err, facebook) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error generating QR code for Facebook');
                    return;
                }
                qr.toDataURL(instaData, (err, insta) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send('Error generating QR code for Instagram');
                        return;
                    }
                    qr.toDataURL(linkedinData, (err, linkedin) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Error generating QR code for LinkedIn');
                            return;
                        }
                        qr.toDataURL(snapchatData, (err, snapchat) => {
                            if (err) {
                                console.error(err);
                                res.status(500).send('Error generating QR code for LinkedIn');
                                return;
                            }
                            res.render('index', { qrCode: qrCode, github: github, facebook: facebook, insta: insta, linkedin: linkedin , snapchat: snapchat});
                        });
                    });
                });
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
