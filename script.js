const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// Keep portfolio videos from playing audio or multiple videos at once.
document.querySelectorAll('.work-card video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('.work-card video').forEach(other => {
      if (other !== video) other.pause();
    });
  });
});

// Lead form: collect fields and send them to WhatsApp.
const WA_NUMBER = '2348029073497';
const WA_INTRO = 'Hi! I came across your short-form content portfolio and I\u2019d like to know more about your video editing services.';

const leadForm = document.getElementById('lead-form');
if (leadForm) {
  leadForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!leadForm.reportValidity()) return;

    const data = new FormData(leadForm);
    const val = key => (data.get(key) || '').toString().trim();
    const lines = [
      WA_INTRO,
      '',
      `Name: ${val('name')}`,
      `Business: ${val('business')}`,
      `Email: ${val('email')}`,
      `Website/Instagram: ${val('social') || '-'}`,
      `Need: ${val('need')}`,
      `About my content: ${val('message') || '-'}`
    ];

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
}
