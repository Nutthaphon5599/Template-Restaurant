RESTAURANT TEMPLATE V2.0.0 — วิธีติดตั้งร้านใหม่

สำคัญ: ร้านแต่ละร้านต้องมี Supabase Project แยกกัน ห้ามใช้ฐานข้อมูลเดียวกันหลายร้าน

ร้านใหม่ (แนะนำ)
1. สร้าง Supabase Project ใหม่
2. เปิด SQL Editor แล้วรัน 00-INSTALL-NEW-RESTAURANT.sql เพียงไฟล์เดียว
3. สร้างผู้ใช้ Owner ใน Authentication > Users
4. เปิด config.js แล้วใส่ Project URL และ anon/publishable key ของร้านใหม่
5. เปลี่ยนชื่อร้าน เบอร์โทร WhatsApp Facebook แผนที่ ที่อยู่ และเวลาเปิดร้านใน config.js
6. เปลี่ยน logo.png, hero.jpg และรูปแกลเลอรี
7. ทดสอบ connection-test.html, admin.html และ pos.html
8. Deploy ไป GitHub Pages / Netlify / Vercel

ร้านเดิมที่มีฐานข้อมูลอยู่แล้ว
1. สำรองข้อมูลก่อน
2. รัน V8.2-UPGRADE-FIXED.sql เพียงครั้งเดียว
3. ห้ามรัน 00-INSTALL-NEW-RESTAURANT.sql บนร้านเดิม

VAT
- inclusive = VAT รวมอยู่ในราคาอาหารแล้ว
- exclusive = บวก VAT เพิ่มท้ายบิล
ตั้งค่าได้ในหน้า Admin

ความปลอดภัย
- config.js ใส่ได้เฉพาะ anon/publishable key
- ห้ามใส่ service_role key ในเว็บไซต์
- อย่าคัดลอก Supabase URL/Key ของร้านต้นฉบับไปให้ร้านอื่น
