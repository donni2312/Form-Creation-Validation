async function fetchUserData() {
    // Your code for fetching and displaying data will go here
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        // Clear existing content before appending new data
        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear existing content and show error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);