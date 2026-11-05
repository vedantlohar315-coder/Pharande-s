(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const config = window.CLINIC_CONFIG || {};
  const actions = document.getElementById('contact-actions');
  const note = document.getElementById('contact-config-note');
  if (actions) {
    const cleanPhone = (config.phone || '').replace(/[^0-9+]/g, '');
    const cleanWhatsApp = (config.whatsapp || '').replace(/\D/g, '');
    let added = false;
    if (cleanPhone) {
      const call = document.createElement('a');
      call.href = `tel:${cleanPhone}`;
      call.textContent = 'Call the clinic';
      actions.appendChild(call);
      added = true;
    }
    if (cleanWhatsApp) {
      const whatsapp = document.createElement('a');
      whatsapp.href = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent('Hello, I would like to enquire about an appointment at Dr Pharande Dental Clinic.')}`;
      whatsapp.target = '_blank';
      whatsapp.rel = 'noopener noreferrer';
      whatsapp.textContent = 'Enquire on WhatsApp';
      actions.appendChild(whatsapp);
      added = true;
    }
    if (config.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
      const email = document.createElement('a');
      email.href = `mailto:${config.email}`;
      email.textContent = 'Email the clinic';
      actions.appendChild(email);
      added = true;
    }
    if (added) {
      actions.hidden = false;
      if (note) note.hidden = true;
    }
  }

  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!enquiryForm.reportValidity()) return;

      const formData = new FormData(enquiryForm);
      const values = {
        name: String(formData.get('name') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        service: String(formData.get('service') || '').trim(),
        date: String(formData.get('date') || '').trim(),
        message: String(formData.get('message') || '').trim()
      };
      const whatsappNumber = String(config.whatsapp || '917028657619').replace(/\D/g, '');
      const lines = [
        'Hello, I would like to enquire with Dr Pharande Dental Clinic.',
        '',
        `Name: ${values.name}`,
        `Contact number: ${values.phone}`,
        `Enquiry about: ${values.service}`,
        values.email ? `Email: ${values.email}` : '',
        values.date ? `Preferred appointment date: ${values.date}` : '',
        values.message ? `Message: ${values.message}` : '',
        '',
        'Please let me know the next available appointment and further details.'
      ].filter(Boolean);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
      const status = document.getElementById('form-status');
      if (status) status.textContent = 'Opening WhatsApp with your enquiry. Review the message and tap Send to share it with the clinic.';
      window.location.href = whatsappUrl;
    });
  }
})();
