let selectedService = '';
let formData = {};

// Start form with optional pre-selected service
function startForm(service = '') {
    if (service) {
        selectedService = service;
        selectService(service);
    }
    const modal = document.getElementById('formModal');
    modal.classList.add('active');
    showStep(1);
}

// Close form
function closeForm() {
    const modal = document.getElementById('formModal');
    modal.classList.remove('active');
    // Reset form
    selectedService = '';
    formData = {};
    document.getElementById('detailsForm').reset();
    showStep(1);
}

// Show specific step
function showStep(step) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
}

// Select service
function selectService(service) {
    selectedService = service;
    formData.service = service;
    
    // Update UI
    document.querySelectorAll('.service-option').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.querySelector('.service-text').textContent === service) {
            btn.classList.add('selected');
        }
    });
    
    // Move to next step after a short delay
    setTimeout(() => {
        showStep(2);
    }, 300);
}

// Go back to step 1
function goToStep1() {
    showStep(1);
}

// Handle form submission
document.getElementById('detailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const form = e.target;
    formData = {
        service: selectedService || formData.service,
        name: form.name.value,
        age: form.age.value,
        gender: form.querySelector('input[name="gender"]:checked')?.value,
        profession: form.profession.value,
        location: form.location.value,
        phone: form.phone.value
    };
    
    // Validate
    if (!formData.service || !formData.name || !formData.age || !formData.gender || 
        !formData.profession || !formData.location || !formData.phone) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Send to WhatsApp
    sendToWhatsApp(formData);
    
    // Redirect to showcase page
    setTimeout(() => {
        window.location.href = 'showcase.html';
    }, 500);
});

// Send data to WhatsApp
function sendToWhatsApp(data) {
    const phoneNumber = '916375275670'; // +91 6375275670
    const message = `*New Training Inquiry*\n\n` +
        `*Service:* ${data.service}\n` +
        `*Name:* ${data.name}\n` +
        `*Age:* ${data.age}\n` +
        `*Gender:* ${data.gender}\n` +
        `*Profession:* ${data.profession}\n` +
        `*Location:* ${data.location}\n` +
        `*Phone:* ${data.phone}\n\n` +
        `_Submitted via kuldeep.fun_`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('formModal');
    if (event.target === modal) {
        closeForm();
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
