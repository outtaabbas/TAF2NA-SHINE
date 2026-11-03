document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('quoteForm');
  const resultDiv = document.getElementById('quoteResult');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const clientName = document.getElementById('clientName').value.trim();
    const serviceSelect = document.getElementById('serviceType');
    const rate = parseFloat(serviceSelect.value);
    const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
    const hours = parseFloat(document.getElementById('hoursNeeded').value);

    if (!clientName || !rate || !hours) {
      alert('Please fill all fields!');
      return;
    }

    const total = rate * hours;

    document.getElementById('quoteName').textContent = clientName;
    document.getElementById('quoteRate').textContent = rate;
    document.getElementById('quoteHours').textContent = hours;
    document.getElementById('quoteTotal').textContent = total.toFixed(2);

    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({ behavior: 'smooth' });

    // WhatsApp auto button
    let waBtn = document.getElementById('waBtn');
    if (!waBtn) {
      waBtn = document.createElement('a');
      waBtn.id = 'waBtn';
      waBtn.className = 'cta-btn';
      waBtn.style.background = '#25D366';
      waBtn.style.marginTop = '15px';
      waBtn.style.display = 'inline-block';
      waBtn.target = '_blank';
      resultDiv.appendChild(waBtn);
    }

    const message = `Marhaba TAF2NA SHINE! ✨%0A%0AEsme: ${clientName}%0AKhedme: ${serviceText}%0ASe3at: ${hours}%0ASa3er: $${rate}/hr%0A*Total: $${total.toFixed(2)}*%0A%0ABade ehjoz!`;
    waBtn.href = `https://wa.me/96176950998?text=${message}`;
    waBtn.textContent = '📱 Send on WhatsApp';
  });
});
