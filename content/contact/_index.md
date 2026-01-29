---
title: "Contacto"
description: "Información de contacto para Le'Onyx Da'Vida"
layout: "contact"
---

# Contacto

Conecta con Le'Onyx Da'Vida para colaboraciones artísticas, proyectos comunitarios, o consultas académicas.

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
    <div class="file-name">Whatsapp</div>
    <div class="file-content">
        <a href="tel:+573213668876">+573213668876<span class="external-icon">↗</span></a>
    </div>
</div>

## 🎭 Áreas de Colaboración

### Artística
- Performances y danza contemporánea
- Proyectos de arte comunitario
- Residencias artísticas
- Exposiciones y galerías

### Académica
- Conferencias y talleres
- Investigación colaborativa
- Publicaciones y escritos
- Asesorías pedagógicas

### Activismo
- Proyectos con comunidades afrodescendientes
- Trabajo con disidencias de género
- Iniciativas culturales
- Movimiento AfroNtando

## 📍 Ubicación

Bogotá, Colombia
Disponible para proyectos nacionales e internacionales.

---

*Para consultas profesionales, favor de incluir detalles del proyecto y plazo en el mensaje inicial.*

<script>
function copyEmail() {
    const email = 'leonyxdavida@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        const emailElement = document.getElementById('contact-email');
        const originalText = emailElement.textContent;
        emailElement.textContent = '¡Copiado!';
        setTimeout(function() {
            emailElement.textContent = originalText;
        }, 2000);
    });
}
</script>
