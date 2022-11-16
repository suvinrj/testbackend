var admin = require("firebase-admin");

var serviceAccount = require("../learn-5e15e-firebase-adminsdk-6ewoq-ac9df9fea0.json");

var app = require('../index')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const token = "fHdjPTcdR4OOyqiWQ_uPnQ:APA91bHoEYwoz1wK0P_1npAduRTCTy-_XbSxe5CaSY3IksndiMXd5GqxK7h1Y6ogWbPtuyIcN2icd9JMR6gBv43tvPwcLR3XWC5RM8Ibx7TPn1BAbDXL4Flv-F0mJBhRy-snt9Duf-1c";
                // Andrey: fHdjPTcdR4OOyqiWQ_uPnQ:APA91bHoEYwoz1wK0P_1npAduRTCTy-_XbSxe5CaSY3IksndiMXd5GqxK7h1Y6ogWbPtuyIcN2icd9JMR6gBv43tvPwcLR3XWC5RM8Ibx7TPn1BAbDXL4Flv-F0mJBhRy-snt9Duf-1c
                // Suvin: dkZNLWatSyCRfNJhByRVZy:APA91bH0ngqMTM53P_YGe225vUzgQ993qIV8sGSMmWsphpSRXo6R0Fj7_fm9lj57WNRr_tntbiRvSEStPqcA579fOXNea2oHgrqDImKEWtR49ZBJWYnevux1iEQ5R6gCtGc01TJtqdc9
admin.messaging().send({
    token: app.token,
    data: {
        customData: "Notification",
        id: "1",
        ad: "Test",
        subTitle: "This is subtitle"
    },
    android: {
        notification: {
            body: "this is notification's body",
            title: "this is notification's title",
            color: "#ffff00",
            priority: "high",
            sound: 'default',
            vibrateTimingsMillis: [200, 500, 800],
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/LOGO_UNIVERSITAS_KLABAT.png"
        }
    }
})
.then((msg) => {
    console.log(msg)
    module.exports.msg = msg;
})