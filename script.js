document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').innerText = `Your IP Address is: ${data.ip}`;
        })
        .catch(error => {
            console.error('Error fetching the IP address:', error);
            document.getElementById('ip-address').innerText = 'Could not fetch the IP address. Please try again later.';
        });
});
