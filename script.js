document.getElementById('revealMessage').addEventListener('click', function () {
    const specialMessage = document.getElementById('specialMessage');
    specialMessage.classList.toggle('hidden');
    createEmotes();
});

function createEmotes() {
    // Create 10 flying emotes
    for (let i = 0; i < 10; i++) {
        createEmote();
    }
}

function createEmote() {
    const emote = document.createElement('div');
    emote.classList.add('emote');
    emote.textContent = '🍬🌷🍭'; // Change this emoji if desired
    emote.style.left = Math.random() * window.innerWidth + 'px';
    emote.style.bottom = '0px';
    document.body.appendChild(emote);

    // Remove emote after animation ends
    setTimeout(() => {
        emote.remove();
    }, 3000);
}
