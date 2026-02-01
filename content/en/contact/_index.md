---
title: "Contact"
description: "Contact information for Le'Onyx Da'Vida"
layout: "contact"
---

# Contact

Connect with Le'Onyx Da'Vida for artistic collaborations, community projects, or academic inquiries.

## 📧 Email

<div class="contact-file email-contact" onclick="copyEmail()">
    <div class="file-icon">📧</div>
    <div class="file-name">Email</div>
    <div class="file-content">
        <span id="contact-email">leonyxdavida@gmail.com</span>
        <span class="copy-icon">⧉</span>
    </div>
</div>

## 📱 WhatsApp

<div class="contact-file">
    <div class="file-icon">📱</div>
    <div class="file-name">WhatsApp</div>
    <div class="file-content">
        <a href="tel:+573213668876">+573213668876<span class="external-icon">↗</span></a>
    </div>
</div>

## 🎭 Areas of Collaboration

### Artistic
- Performances and contemporary dance
- Community art projects
- Artistic residencies
- Exhibitions and galleries

### Academic
- Conferences and workshops
- Collaborative research
- Publications and writings
- Pedagogical advising

### Activism
- Projects with Afro-descendant communities
- Work with gender dissidents
- Cultural initiatives
- AfroNtando movement

## 📍 Location

Bogotá, Colombia
Available for national and international projects.

---

*For professional inquiries, please include project details and timeline in the initial message.*

<script>
function copyEmail() {
    const email = 'leonyxdavida@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        const emailElement = document.getElementById('contact-email');
        const originalText = emailElement.textContent;
        emailElement.textContent = 'Copied!';
        setTimeout(function() {
            emailElement.textContent = originalText;
        }, 2000);
    });
}
</script>
