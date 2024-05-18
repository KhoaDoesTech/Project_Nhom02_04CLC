# ỨNG DỤNG MUA BÁN CHO THUÊ QUẦN ÁO VIẾT BẰNG NODEJS VÀ REACT NATIVE
## Yêu cầu hệ thống
- Node.js phiên bản 14 trở lên
- Bun.js phiên bản 0.5.0 trở lên
- React Native CLI
  
## Cài đặt và chạy
### Backend (Bun.js)
Vào thư mục backend, cài đặt các package cần thiết:
```bash
cd backend
bun install
```

Tạo file .env với các biến môi trường cần thiết:
```javascript
# Develop 
# DEV_DB_URL=
DEV_DB_URL=

# DEV_MAILER_USER=
# DEV_MAILER_PASS=
DEV_MAILER_USER=
DEV_MAILER_PASS=

# # AWS Email
# DEV_MAILER_USER=
# DEV_MAILER_PASS=

# Production 
PRO_DB_URL=

PRO_MAILER_USER=
PRO_MAILER_PASS=
PRO_MAILER_SENDER=

PAYPAL_CLIENT_ID=
PAYPAL_APP_SECRET=
PAYPAL_API_URL=

DISCORD_TOKEN=
DISCORD_CHANNEL_ID=

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Chạy backend:
```bash
bun run dev/prod
```

### Frontend (React Native)
Vào thư mục frontend, cài đặt các package cần thiết:
```bash
cd frontend
npm install
```

Chỉnh sửa URL API trong file ./frontend/API/API.js:
```javascript
const IP_ADD = 'YOUR_IP';
```

Chạy ứng dụng React Native:
```bash
npm run start
```
