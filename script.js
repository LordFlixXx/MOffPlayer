// Inicializa o cliente WebTorrent
const client = new WebTorrent();

// Obtém referências aos elementos HTML
const magnetInput = document.getElementById('magnetInput');
const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');

// Evento para reproduzir o torrent ao clicar no botão
playButton.addEventListener('click', () => {
    const magnetLink = magnetInput.value;

    // Verifica se há um magnet link
    if (!magnetLink) {
        alert('Por favor, insira um magnet link.');
        return;
    }

    // Adiciona o torrent ao cliente WebTorrent
    client.add(magnetLink, (torrent) => {
        // Obtém o primeiro arquivo de vídeo no torrent
        const file = torrent.files.find(file => file.name.endsWith('.mp4'));

        // Stream do arquivo para o elemento de vídeo
        file.renderTo(videoPlayer, {
            autoplay: true,
            controls: true
        });
    });
});
