document.addEventListener('DOMContentLoaded', () => {
    const title = "My Awesome Title";
    
    // Get the container element
    const container = document.getElementById('title-container');
    
    // Create the first title element
    const titleElement1 = document.createElement('h1');
    titleElement1.textContent = title;
    
    // Create the second title element
    const titleElement2 = document.createElement('h1');
    titleElement2.textContent = title;
    
    // Append both title elements to the container
    container.appendChild(titleElement1);
    container.appendChild(titleElement2);
});
