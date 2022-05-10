ขั้นตอนการติดตั้งและทดสอบโปรเจ็ต

ติดตั้ง package
 1. ``` cd frontend && npm install ```
 2. ``` cd backend && npm install ```

 เปิดใช้งาน Backend บน localhost:3001
``` 
cd backend && npm run start 
```
 เปิดใช้งาน Frontend บน localhost:8080\
``` 
 cd frontend && npm run serve 
```

ขั้นตอนการ deploy ระบบ
 1. ``` git clone https://github.com/piyanatnine/Final_SDTE.git ```
 2. cd to project 
 3. ``` docker-compose -f docker-compose-build.yml build ```
 4. ``` docker-compose -f docker-compose-deploy.yml up ```
 5. ``` เปิด localhost:8080 ใน browser ```
