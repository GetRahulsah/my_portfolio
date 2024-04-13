// Smooth scroll function
function scrollToAbout() {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}

// Event listener for About link click
const aboutLink = document.getElementById('about-link');
aboutLink.addEventListener('click', scrollToAbout);



// Smooth scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners for navbar links
const projectsLink = document.getElementById('projects-link');
projectsLink.addEventListener('click', () => scrollToSection('projects'));

const skillsLink = document.getElementById('skills-link');
skillsLink.addEventListener('click', () => scrollToSection('skills'));

const contactLink = document.getElementById('contact-link');
contactLink.addEventListener('click', () => scrollToSection('contact'));
