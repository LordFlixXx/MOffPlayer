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

    // Limpa o vídeo anterior, caso exista
    videoPlayer.src = '';
    videoPlayer.poster = ''; // Remove qualquer imagem de poster

    // Adiciona o torrent ao cliente WebTorrent
    client.add(magnetLink, (torrent) => {
        // Verifica se o torrent contém arquivos de vídeo
        const file = torrent.files.find(file => file.name.endsWith('.mp4') || file.name.endsWith('.webm') || file.name.endsWith('.mkv'));

        if (file) {
            // Stream do arquivo para o elemento de vídeo
            file.renderTo(videoPlayer, {
                autoplay: true,
                controls: true
            });
        } else {
            alert('Nenhum arquivo de vídeo encontrado no torrent.');
        }
    });
});
