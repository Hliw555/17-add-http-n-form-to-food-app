/*
*  Terms
--  1. just as = เช่นเดียวกับ
--  2. update = การกำหนดข้อมูลใหม่ล่าสุดให้กับตัวแปร
--  3. enclose = ปิดหุ้ม
--  3. wrap = หุ้ม ความหมายเดียวกัน enclose
--  4. detect = ตรวจพบ
--  5. adjacent = ที่อยู่ติดกัน, อยู่ข้าง ๆ กัน > adjacent jsx element
--  6. workaround = วิธีแก้ปัญหา
--  7. styling = การจัดรูปแบบ
--  8. in conjunction = ร่วมกัน, ร่วม => I use backdrop in conjunction
.with my modal
--  9. like = เช่นเดียวกับ, เหมือนกับ
-- 10. when ever = เมื่อไหร่ก็ตาม
-- 11. and so on = และอื่น ๆ
-- 12. directly = โดยตรง
-- 13. trigger function = call function
-- 14. run function = call functions
-- 15. this funciton run again = function ทำงานอีกครั้ง
-- 16. such a dependency = ส่วนเสริม ดังกล่าว
-- 17. dummy = จำลอง, a dummy app = appจำลอง
-- 18. infinit = ไม่มีที่สิ้นสุด, infinite loop = การวนที่ไม่สิ้นสุด
-- 19. advantage = ข้อดี, disadvantage = ข้อเสีย
-- 20. include = มี, ประกอบด้วย
-- 21. beside = นอกเหนือจาก, นอกจาก, ข้าง
-- 22. in addition = นอกจากนี้
-- 23. validity = ความถูกต้อง
-- 24. consistent = สม่ำเสมอ
-- 25. layout = แผนผัง = แบบที่เขียนย่อขนาดจากของจริง เช่น บ้าน อาคาร ตึก.
-- 26. as always = เช่นเคย
-- 27. structure = สร้าง => โครงสร้าง
-- 28. destructure = ทำลาย => โครงสร้าง
-- 29. feedback = ข้อเสนอแนะ
-- 30. downside = ข้อเสีย
-- 31. derive = ได้มา, ได้รับมา => use with from = derive from
-- 32. validity = ความถูกต้อง
-- 33. disabled = ปิดใช้งาน ตรงข้ามกับคำว่า ใช้กับ button
-- 34. enable = เปิดใช้งาน = activate

/////////////////////////////////////////////////////////////////////
---- เนื้อหา ตอนที่ 7
-- บท 83 เกิด error => app crashes          อ่าน error messages
-- บท 84 เกิด error => app doesn't crash     อ่าน error messages, analyze code flow
*/

/////////////////////////////////////////////////////////////////////

/*
* ---- chapters สำคัญ ที่ต้องทวน ของแต่ละ section
---- section  3 => 35, 36, 37, 38
---- section  4 => 46, 47, 48, 49, 52, 55, 56, 57, 58
---- section  5 => 63, 64, 65  ==>  68 เป็นเรื่อง chart ไม่ใช้
---- section  6 => 74 inline , 75 ใช้ selector ใน css file เราชอบอันนี้
---- section  7 => 83, 84
---- section  8 => ทวนทุกบท เป็นการฝึกทำ app ภาคปฎิบัติ
---- section  9 => 102 = <React.Fragment> => react,
                   104 = createPortal() => react-dom => reguler method,
                   105 = useRef() => react => Hook
---- section 10 =>
---- section 17 => การสร้าง async function และ throw error ใน async
.function

*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/*
*                          Section 17
*             Adding http request & form to food order app
!         
*/
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
/*
/////////////////////////////////////////////////////////////////////
-----                 217. Handling errors                  -----
/////////////////////////////////////////////////////////////////////
-- ให้จำไว้ว่า การ throw error in async function จะเป็นสาเหตุให้ promise
.ของ async function นัั้น is rejected คือ ถูกปฏิเสธ คือ ไม่สำเร็จ ดังนั้น
.เราต้องใช้ .catch() method จัดการ error นั้น
-- promise is fulfilled คือ สำเร็จ ใช้ .then() จัดการ ไม่มี error
-- promise is rejected คือ ไม่สำเร็จ มี error ใช้ catch() จัดการ
*/