function sendMessage(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // هنا يمكنك استخدام API لإرسال البريد الإلكتروني (مثل EmailJS أو أي خدمة مشابهة)
    alert(`تم إرسال الرسالة بنجاح!\n\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالموضوع: ${subject}\nالرسالة: ${message}`);
}
