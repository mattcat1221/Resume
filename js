// Create the resume layout using JavaScript
function createResume() {
    // Create a container for the resume
    const resumeContainer = document.createElement('div');
    resumeContainer.style.maxWidth = '800px';
    resumeContainer.style.margin = 'auto';
    resumeContainer.style.padding = '20px';
    resumeContainer.style.fontFamily = 'Arial, sans-serif';
    resumeContainer.style.backgroundColor = '#ffe0e9';  // Light pink background
    resumeContainer.style.color = '#333333';  // Dark text color

    // Create a header for the resume
    const header = document.createElement('div');
    header.style.textAlign = 'center';
    header.style.padding = '20px 0';
    header.style.borderBottom = '2px solid #ff80ab';  // Darker pink border
    header.style.marginBottom = '20px';

    // Name
    const name = document.createElement('h1');
    name.textContent = 'Your Name';
    name.style.color = '#ff4081';  // Darker pink text for the name

    // Contact information
    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Email: your.email@example.com | Phone: (123) 456-7890 | Location: City, Country';

    header.appendChild(name);
    header.appendChild(contactInfo);
    resumeContainer.appendChild(header);

    // Create the Experience section
    const experienceSection = createSection('Experience', [
        {
            title: 'Job Title 1',
            company: 'Company Name 1',
            duration: 'January 2020 - Present',
            description: 'Brief description of your role and responsibilities at Company Name 1.'
        },
        {
            title: 'Job Title 2',
            company: 'Company Name 2',
            duration: 'January 2018 - December 2019',
            description: 'Brief description of your role and responsibilities at Company Name 2.'
        }
    ]);

    // Create the Education section
    const educationSection = createSection('Education', [
        {
            title: 'Degree Name',
            company: 'University Name',
            duration: 'Graduation Year',
            description: 'Brief description of your studies and accomplishments at University Name.'
        }
    ]);

    // Create the Skills section
    const skillsSection = createSection('Skills', [
        {
            title: 'Skill 1',
            description: 'Description or proficiency level of Skill 1.'
        },
        {
            title: 'Skill 2',
            description: 'Description or proficiency level of Skill 2.'
        }
    ]);

    resumeContainer.appendChild(experienceSection);
    resumeContainer.appendChild(educationSection);
    resumeContainer.appendChild(skillsSection);

    // Append the resume container to the body
    document.body.appendChild(resumeContainer);
}

// Function to create a section of the resume
function createSection(title, items) {
    const section = document.createElement('div');
    section.style.marginBottom = '20px';

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;
    sectionTitle.style.color = '#ff80ab';  // Darker pink section title
    section.appendChild(sectionTitle);

    items.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.style.marginBottom = '10px';

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
        itemTitle.style.color = '#333333';  // Dark text for job titles and skill names
        itemContainer.appendChild(itemTitle);

        const itemCompany = document.createElement('p');
        itemCompany.textContent = item.company || '';
        itemCompany.style.fontWeight = 'bold';
        itemCompany.style.color = '#555555';  // Slightly lighter text for company names
        itemContainer.appendChild(itemCompany);

        const itemDuration = document.createElement('p');
        itemDuration.textContent = item.duration || '';
        itemDuration.style.fontStyle = 'italic';
        itemContainer.appendChild(itemDuration);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemContainer.appendChild(itemDescription);

        section.appendChild(itemContainer);
    });

    return section;
}

// Call the function to create the resume
createResume();






