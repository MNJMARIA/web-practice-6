function loadTabs() {
    fetch('php/load.php')
        .then(r => r.json())
        .then(data => renderTabs(data || []))
        .catch(() => {
            document.getElementById('tabs-container').innerHTML = '<p style="color: red;">Помилка завантаження даних з сервера</p>';
        });
}

function renderTabs(tabs) {
    const container = document.getElementById('tabs-container');
    if (tabs.length === 0) {
        container.innerHTML = '<p>Немає збережених вкладок. Створіть їх на <a href="create.html">сторінці створення</a>.</p>';
        return;
    }

    let html = '<div class="tabs-nav">';
    tabs.forEach((tab, i) => {
        html += `<button onclick="openTab(${i})" ${i === 0 ? 'class="active"' : ''}>${tab.title}</button>`;
    });
    html += '</div>';

    tabs.forEach((tab, i) => {
        const content = tab.content.replace(/\n/g, '<br>');
        html += `<div class="tab-panel ${i === 0 ? 'active' : ''}">${content}</div>`;
    });

    container.innerHTML = html;
}

function openTab(index) {
    document.querySelectorAll('.tabs-nav button').forEach((b, i) => b.classList.toggle('active', i === index));
    document.querySelectorAll('.tab-panel').forEach((p, i) => p.classList.toggle('active', i === index));
}

//Періодичний асинхронний контроль змін 
// Завантаження при старті і кожні 5 секунд
loadTabs();
setInterval(loadTabs, 5000);