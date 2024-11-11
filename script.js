const client = new WebTorrent();
const videoElement = document.getElementById('player');

function loadTorrent(magnetURI) {
    client.add(magnetURI, torrent => {
        const file = torrent.files.find(file => file.name.endsWith('.mp4'));
        file.renderTo(videoElement, { autoplay: true });
    });
}

function loadSampleTorrent() {
    const magnetURI = 'MAGNET_LINK_EXEMPLO'; // Substitua por um magnet link válido
    loadTorrent(magnetURI);
}
