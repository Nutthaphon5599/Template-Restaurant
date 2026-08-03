RESTAURANT TEMPLATE V2.0.2
============================

เวอร์ชันนี้รวม Supabase สำหรับโปรเจกต์ใหม่ไว้เป็น SQL ไฟล์เดียวแล้ว

ไฟล์ที่ต้องรัน:
00-SUPABASE-NEW-PROJECT-V2.0.2.sql

ขั้นตอน:
1. สร้าง Supabase New Project
2. เข้า SQL Editor > New query
3. เปิดไฟล์ 00-SUPABASE-NEW-PROJECT-V2.0.2.sql
4. คัดลอกโค้ดทั้งหมด วาง แล้วกด Run เพียงครั้งเดียว
5. นำ Project URL และ Publishable/Anon Key ไปใส่ผ่าน setup.html
6. สร้าง Owner ที่ Authentication > Users
7. เปิด connection-test.html เพื่อตรวจการเชื่อมต่อ

SQL ไฟล์เดียวนี้รวม:
- categories และ menu_items
- orders และ order_items
- restaurant_settings
- restaurant_tables (ໂຕະ)
- ระบบ Admin/Profile
- VAT inclusive/exclusive
- ภาษา lo/th/en
- สกุลเงิน LAK/THB/USD
- Theme สีร้าน
- Storage bucket และ policies
- Setup Wizard settings

คำเตือน:
- ใช้กับ Supabase Project ใหม่เท่านั้น
- อย่ารัน SQL เก่าร่วมกับไฟล์นี้
- ห้ามใส่ service_role key ในเว็บไซต์
- ร้านลูกค้าแต่ละร้านควรใช้ Supabase Project แยกกัน
