function scrollToWorks() {
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
}

function openVideo(bvid) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    iframe.src = `//player.bilibili.com/player.html?bvid=${bvid}&page=1`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    modal.style.display = 'none';
    iframe.src = '';
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}
