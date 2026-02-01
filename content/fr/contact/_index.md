---
title: "Contact"
description: "Informations de contact pour Le'Onyx Da'Vida"
layout: "contact"
---

# Contact

Connectez-vous avec Le'Onyx Da'Vida pour des collaborations artistiques, des projets communautaires, ou des consultations académiques.

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

## 🎭 Domaines de Collaboration

### Artistique
- Performances et danse contemporaine
- Projets d'art communautaire
- Résidences artistiques
- Expositions et galeries

### Académique
- Conférences et ateliers
- Recherche collaborative
- Publications et écrits
- Conseil pédagogique

### Activisme
- Projets avec les communautés afro-descendantes
- Travail avec les dissidences de genre
- Initiatives culturelles
- Mouvement AfroNtando

## 📍 Localisation

Bogotá, Colombie
Disponible pour des projets nationaux et internationaux.

---

*Pour les consultations professionnelles, veuillez inclure les détails du projet et le calendrier dans le message initial.*

<script>
function copyEmail() {
    const email = 'leonyxdavida@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        const emailElement = document.getElementById('contact-email');
        const originalText = emailElement.textContent;
        emailElement.textContent = 'Copié!';
        setTimeout(function() {
            emailElement.textContent = originalText;
        }, 2000);
    });
}
</script>
