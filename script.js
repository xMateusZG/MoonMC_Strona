const ctaButton = document.getElementById('ctaButton');
const serverIP = "MoonMC.gameshare.pl";

ctaButton.addEventListener('click', () => {
    navigator.clipboard.writeText(serverIP).then(() => {
        alert(`IP serwera skopiowane: ${serverIP}`);
    });
});

const discordLink = document.getElementById('discordLink');
discordLink.addEventListener('click', (e) => {
    e.preventDefault();
    const discordURL = "https://discord.gg/mpbz95gydZ";
    window.open(discordURL, "_blank");
});
