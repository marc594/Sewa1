// Function to show detailed interest information
function showInterest(interestType) {
    const interestDetail = document.getElementById("interest-detail");

    // Clear previous content
    interestDetail.innerHTML = '';

    let details = '';
    switch (interestType) {
        case 'creative':
            details = `
                <h3>Creative Interests</h3>
                <p><strong>Art:</strong> Passionate about painting and drawing, exploring different mediums.</p>
                <p><strong>Dance:</strong> Loves to dance various styles and enjoys choreography.</p>
            `;
            break;
        case 'intellectual':
            details = `
                <h3>Intellectual Interests</h3>
                <p><strong>Reading:</strong> Avid reader of diverse genres, especially fiction and tech.</p>
                <p><strong>Science:</strong> Deep interest in scientific discoveries, especially in physics and technology.</p>
            `;
            break;
        case 'outdoor':
            details = `
                <h3>Outdoor Interests</h3>
                <p><strong>Swimming:</strong> Enjoys swimming, especially in natural bodies of water.</p>
                <p><strong>Camping:</strong> Goes on camping trips regularly to connect with nature.</p>
                <p><strong>Hiking:</strong> Exploring new hiking trails, embracing adventure.</p>
            `;
            break;
        case 'social':
            details = `
                <h3>Social Interests</h3>
                <p><strong>Travel:</strong> Loves to travel to new destinations and meet new people.</p>
                <p><strong>Networking:</strong> Enthusiastic about connecting with others in the tech community.</p>
            `;
            break;
        case 'others':
            details = `
                <h3>Other Interests</h3>
                <p><strong>Technology:</strong> Exploring new gadgets, software, and emerging technologies.</p>
            `;
            break;
    }

    interestDetail.innerHTML = details;
}

// Function to show detailed skills information
function showSkills(skillType) {
    const skillsDetail = document.getElementById("skills-detail");

    // Clear previous content
    skillsDetail.innerHTML = '';

    let details = '';
    switch (skillType) {
        case 'hard':
            details = `
                <h3>Hard Skills</h3>
                <ul>
                    <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, Node.js</li>
                    <li><strong>Database Management:</strong> MySQL, MongoDB</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>Problem-Solving:</strong> Algorithms and Data Structures</li>
                </ul>
            `;
            break;
        case 'soft':
            details = `
                <h3>Soft Skills</h3>
                <ul>
                    <li><strong>Communication:</strong> Able to articulate ideas and explain complex concepts clearly.</li>
                    <li><strong>Teamwork:</strong> Collaborates well in group settings to achieve common goals.</li>
                    <li><strong>Adaptability:</strong> Open to learning and growing in a dynamic environment.</li>
                    <li><strong>Creativity:</strong> Constantly seeking innovative solutions to problems.</li>
                </ul>
            `;
            break;
    }

    skillsDetail.innerHTML = details;
}
