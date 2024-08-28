// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'job-title'
    const jobTitles = document.querySelectorAll('.job-title');

    // Loop through each job title and add a click event listener
    jobTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            // Toggle the visibility of the next sibling element (job description)
            const jobDescription = this.nextElementSibling.nextElementSibling;
            if (jobDescription.style.display === 'none' || jobDescription.style.display === '') {
                jobDescription.style.display = 'block'; // Show the job description
            } else {
                jobDescription.style.display = 'none'; // Hide the job description
            }
        });
    });
});











