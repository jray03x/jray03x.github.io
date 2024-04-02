function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.querySelector(".main").style.marginLeft = "150px"; /* Push main content to the right */
    document.querySelector(".navbar").style.marginLeft = "150px"; /* Push navbar to the right */
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft= "0"; /* Bring main content back to center */
    document.querySelector(".navbar").style.marginLeft= "0"; /* Bring navbar back to center */
}
        function getRandomFact() {
            // Fetch a new random fact from an API
            fetch('https://uselessfacts.jsph.pl/random.json?language=en')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('randomFact').textContent = data.text;
                });
        }
