---
title: "Mensaje enviado"
description: "Tu mensaje ha sido enviado correctamente."
layout: "contact-success"
---

<div class="contact-success">
  <div class="contact-success__card">
    <!-- Success Icon with Glow -->
    <div class="contact-success__icon-wrapper">
      <div class="contact-success__icon-glow"></div>
      <div class="contact-success__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      </div>
    </div>

    <!-- Success Message -->
    <div class="contact-success__content">
      <h1 class="contact-success__title">{{ i18n "formSuccessTitle" | default "¡MENSAJE ENVIADO!" }}</h1>
      <div class="contact-success__divider"></div>
      <p class="contact-success__message">{{ i18n "formSuccessMessage" | default "Gracias por escribir. Responderé lo antes posible." }}</p>
    </div>

    <!-- Language Switcher -->
    <div class="contact-success__languages">
      <span class="contact-success__lang active">ES</span>
      <a href="{{ "/en/contact/success/" | relLangURL }}" class="contact-success__lang">EN</a>
      <a href="{{ "/fr/contact/success/" | relLangURL }}" class="contact-success__lang">FR</a>
    </div>

    <!-- CTA Button -->
    <div class="contact-success__action">
      <a href="{{ "/" | relLangURL }}" class="contact-success__button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        {{ i18n "backToPortfolio" | default "Volver al portafolio" }}
      </a>
    </div>
  </div>

  <!-- Status Details -->
  <div class="contact-success__details">
    <div class="contact-success__status">
      <span class="contact-success__status-label">{{ i18n "status" | default "Estado" }}</span>
      <div class="contact-success__status-indicator">
        <div class="contact-success__status-dot"></div>
        <span class="contact-success__status-text">{{ i18n "encryptionActive" | default "Encriptación activa" }}</span>
      </div>
    </div>
    <div class="contact-success__security">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    </div>
  </div>
</div>
