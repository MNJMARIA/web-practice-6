let tabs = [];

function addTab(title = 'Нова вкладка', content = 'Тут контент...') {
    tabs.push({ title, content });
    renderForm();
}

function renderForm() {
    const list = document.getElementById('tabs-list');
    list.innerHTML = '';
    tabs.forEach((tab, index) => {
        const div = document.createElement('div');
        div.style.cssText = 'margin: 15px 0; padding: 10px; border: 1px solid #ddd; background: #f9f9f9;';
        div.innerHTML = `
            <input type="text" value="${tab.title}" placeholder="Заголовок" style="width: 100%; margin-bottom: 5px; padding: 8px;" onchange="tabs[${index}].title = this.value">
            <textarea placeholder="Контент вкладки" style="width: 100%; height: 100px; padding: 8px;" onchange="tabs[${index}].content = this.value">${tab.content}</textarea>
            <button type="button" onclick="tabs.splice(${index}, 1); renderForm()" style="margin-top: 5px; background: #e74c3c; color: white; padding: 8px 12px; border: none; cursor: pointer;">Видалити</button>
        `;
        list.appendChild(div);
    });
}

function saveTabs() {
    fetch('php/save.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tabs)
    })
    .then(r => r.text())
    .then(data => {
        document.getElementById('status').innerHTML = '<strong style="color: green;">Успішно збережено!</strong> Перейдіть на <a href="view.html">view.html</a>, щоб побачити результат.';
    })
    .catch(err => {
        document.getElementById('status').innerHTML = '<strong style="color: red;">Помилка збереження:</strong> ' + err;
    });
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    addTab('Вкладка 1', 'Контент першої вкладки');
    addTab('Вкладка 2', 'Контент другої вкладки');
    addTab('Вкладка 3', 'Контент третьої вкладки');
});