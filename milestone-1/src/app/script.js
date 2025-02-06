document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-certifications');
    const fullCertifications = document.createElement('div');
    fullCertifications.id = 'full-certs';
    fullCertifications.style.display = 'none';
    
    // Add your full certifications list here
    fullCertifications.innerHTML = `
        <h3>Full Certification List</h3>
        <ul>
            <li>Artificial Intelligence, Web 3.0 & Metaverse - Governor Initiative</li>
            <li>Google Soft Skills Program - Google</li>
            <li>TypeScript Variables and Data Types - Coursera</li>
            <!-- Add all other certifications from PDF -->
        </ul>
    `;

    document.querySelector('.left-section').appendChild(fullCertifications);

    toggleButton.addEventListener('click', () => {
        if(fullCertifications.style.display === 'none') {
            fullCertifications.style.display = 'block';
            toggleButton.textContent = 'Hide Certifications';
        } else {
            fullCertifications.style.display = 'none';
            toggleButton.textContent = 'View Full Certifications';
        }
    });
});