const admin = require('firebase-admin');
const serviceAccount = require('C:\Users\acer\Desktop\JSPROJECT\NongNghiepThongMinh\Login-demo\nongnghiepxanh-f6689-firebase-adminsdk-fbsvc-7cc919a1e5.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nongnghiepxanh-f6689.firebaseio.com"
});

const uid = "cTegcSbG7VOkgmF4u3j48u6WdM63"; // Thay bằng UID của người dùng admin
admin.auth().setCustomUserClaims(uid, { role: 'admin' }).then(() => {
  console.log('Đã gán vai trò admin cho UID:', uid);
}).catch((error) => {
  console.error('Lỗi:', error);
});