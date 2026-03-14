let config = {};

fetch('config.json')
    .then(res => res.json())
    .then(data => {
        config = data;
        initHomepage();
    });

function initHomepage() {
    document.getElementById('heroTitle').textContent = config.homepage.title;
    document.getElementById('heroSubtitle').textContent = config.homepage.subtitle;
    document.getElementById('heroContact').textContent = `${config.homepage.contact.phone} | ${config.homepage.contact.email}`;

    const categoriesDiv = document.getElementById('categories');
    config.categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => openCategory(cat);
        card.innerHTML = `
            <img src="${cat.thumbnail}" alt="${cat.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3E${cat.name}%3C/text%3E%3C/svg%3E'">
            <h3>${cat.name}</h3>
        `;
        categoriesDiv.appendChild(card);
    });
}

function openCategory(category) {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'block';
    document.getElementById('pageTitle').textContent = category.name;

    const worksGrid = document.getElementById('worksGrid');
    worksGrid.innerHTML = '';
    category.works.forEach(work => {
        const card = document.createElement('div');
        card.className = 'work-card';
        card.onclick = () => openVideo(work.bvid);
        card.innerHTML = `
            <img src="${work.cover}" alt="${work.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22200%22/%3E%3C/svg%3E'">
            <div class="work-info">
                <div class="work-title">${work.title}</div>
                <div class="work-desc" title="${work.description}">${work.description}</div>
            </div>
        `;
        worksGrid.appendChild(card);
    });
}

function goBack() {
    document.getElementById('categoryPage').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
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
