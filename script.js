const chatBody = document.getElementById('chat-body');
const chatWidget = document.getElementById('chat-widget');
const chatToggle = document.getElementById('chat-toggle');
let history = [];

function toggleChat() {
  chatWidget.style.display = chatWidget.style.display === 'flex' ? 'none' : 'flex';
}

function goBack() {
  if (history.length > 0) {
    chatBody.innerHTML = history.pop();
  }
}

function showMarketingOptions() {
  history.push(chatBody.innerHTML);
  chatBody.innerHTML = `
    <p class="bot-msg">Please select a service:</p>
    <div class="btn-group">
      ${["SEO", "Google Ads", "Meta Ads", "Web Development", "WhatsApp Marketing", "Shopify Development"]
        .map(service => `<button onclick="showServiceForm('${service}')">${service}</button>`).join('')}
    </div>
  `;
}

function showServiceForm(service) {
  history.push(chatBody.innerHTML);
  chatBody.innerHTML = `
    <p class="bot-msg">You selected: ${service}</p>
    <form onsubmit="submitServiceForm(event, '${service}')">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Contact Number" required />
      <button type="submit">Submit</button>
    </form>
  `;
}

function submitServiceForm(e, service) {
  e.preventDefault();
  const [name, email, phone] = [...e.target.elements].map(i => i.value);
  alert('Thank you! Our team will reach out to you soon.\nFrom SocioLabs Team');
  console.log({
    to: 'nayan@sociolabs.in',
    name, email, phone, service
  });
  goBack();
}

function showCareerForm() {
  history.push(chatBody.innerHTML);
  chatBody.innerHTML = `
    <p class="bot-msg">Apply for a Career</p>
    <form onsubmit="submitCareerForm(event)" enctype="multipart/form-data">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Contact Number" required />
      <input type="file" accept="application/pdf" required />
      <button type="submit">Submit</button>
    </form>
  `;
}

function submitCareerForm(e) {
  e.preventDefault();
  const [name, email, phone, file] = [...e.target.elements];
  if (file.files[0].size > 3 * 1024 * 1024) {
    alert('File exceeds 3MB limit');
    return;
  }
  alert('Thank you! Your resume has been submitted.\nFrom SocioLabs Team');
  console.log({
    to: 'hr@sociolabs.in',
    name: name.value,
    email: email.value,
    phone: phone.value,
    file: file.files[0].name
  });
  goBack();
}

function showContactOptions() {
  history.push(chatBody.innerHTML);
  chatBody.innerHTML = `
    <p class="bot-msg">Choose one option to connect:</p>
    <div class="btn-group">
      <a href="tel:+919650750546"><button>📞 Call +91 96507 50546</button></a>
      <a href="https://wa.me/919650750546" target="_blank"><button>💬 WhatsApp Chat</button></a>
    </div>
  `;
}
