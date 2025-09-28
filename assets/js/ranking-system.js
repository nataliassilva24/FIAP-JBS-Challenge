
const rankingData = {
    'semana': {
        'sp-centro': {
            title: 'Loja SP Centro - Esta Semana',
            stats: { total: 24, highest: 1580, average: 1127, userPos: '3º' },
            podium: [
                { name: 'Maria Oliveira', role: 'Gerente de Vendas', points: 1580, weekly: 120, avatar: 'MA', position: 1 },
                { name: 'Carlos Santos', role: 'Vendedor Sênior', points: 1420, weekly: 95, avatar: 'CA', position: 2 },
                { name: 'João Silva', role: 'Vendedor Pleno', points: 1250, weekly: 85, avatar: 'JS', position: 3, isUser: true }
            ],
            others: [
                { name: 'Ana Costa', role: 'Vendedora', points: 1180, weekly: 75, avatar: 'AN', position: 4 },
                { name: 'Pedro Lima', role: 'Vendedor', points: 1090, weekly: 65, avatar: 'PE', position: 5 },
                { name: 'Lúcia Ferreira', role: 'Vendedora', points: 985, weekly: 55, avatar: 'LU', position: 6 },
                { name: 'Bruno Almeida', role: 'Vendedor', points: 920, weekly: 48, avatar: 'BR', position: 7 }
            ]
        }
    }
};

function updateRankingDisplay() {
    const periodFilter = document.getElementById('periodFilter');
    const storeFilter = document.getElementById('storeFilter');

    if (!periodFilter || !storeFilter) {
        return;
    }

    const period = periodFilter.value;
    const store = storeFilter.value;
    const data = rankingData[period]?.[store] || rankingData['semana']['sp-centro'];

    updateStatsCards(data.stats);
    updatePodium(data.podium);
    updateRankingTable(data.others);
    showFilterChangeEffect();
}

function updatePodium(podiumData) {
    const podiumCards = document.querySelectorAll('.podium-card');
    const cardOrder = [1, 0, 2];

    podiumData.forEach((person, index) => {
        const cardIndex = cardOrder[index];
        const card = podiumCards[cardIndex];
        if (!card) return;

        const img = card.querySelector('img');
        const name = card.querySelector('h5');
        const role = card.querySelector('p');
        const points = card.querySelector('.badge');
        const weekly = card.querySelector('small:last-child');

        if (img) img.src = getAvatarImage(person.avatar, 80);
        if (name) name.innerHTML = person.isUser ? `${person.name} <span class="small">(Você)</span>` : person.name;
        if (role) role.textContent = person.role;
        if (points) points.textContent = `${person.points.toLocaleString('pt-BR')} pontos`;
        if (weekly) weekly.textContent = `+${person.weekly} esta semana`;
    });
}

function updateStatsCards(stats) {
    const statsSection = document.querySelector('.row.mb-5');
    if (!statsSection) return;

    const cards = statsSection.querySelectorAll('.card h4');

    if (cards[0]) cards[0].textContent = stats.total;
    if (cards[1]) cards[1].textContent = stats.highest.toLocaleString('pt-BR');
    if (cards[2]) cards[2].textContent = stats.average.toLocaleString('pt-BR');
    if (cards[3]) cards[3].textContent = stats.userPos;
}

function updateRankingTable(othersData) {
    const tbody = document.querySelector('.ranking-table tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    othersData.forEach(person => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><span class="badge bg-light text-dark">${person.position}º</span></td>
            <td>
                <div class="d-flex align-items-center">
                    <img src="${getAvatarImage(person.avatar, 40)}" 
                         alt="${person.name}" class="rounded-circle me-3" width="40" height="40">
                    <div>
                        <div class="fw-semibold">${person.name}${person.isUser ? ' (Você)' : ''}</div>
                        <small class="text-muted">${person.role}</small>
                    </div>
                </div>
            </td>
            <td><span class="fw-bold">${person.points.toLocaleString('pt-BR')}</span></td>
            <td><span class="text-success">+${person.weekly}</span></td>
            <td><span class="badge bg-secondary text-white">${getLevel(person.points)}</span></td>
            <td>
                <button class="btn btn-outline-primary btn-sm">
                    <i class="bi bi-eye"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showFilterChangeEffect() {
    const rankingCard = document.querySelector('.ranking-table');
    if (rankingCard) {
        rankingCard.classList.add('filter-updating');
        setTimeout(() => {
            rankingCard.classList.remove('filter-updating');
        }, 600);
    }
}

window.toggleMoreEmployees = function () {
    const hiddenRows = document.querySelectorAll('.hidden-row');
    const button = document.querySelector('.btn-show-more');

    if (!button) return;

    const isExpanded = hiddenRows[0]?.style.display !== 'none';

    hiddenRows.forEach(row => {
        row.style.display = isExpanded ? 'none' : 'table-row';
    });

    button.textContent = isExpanded ? 'Ver Mais Colaboradores' : 'Ver Menos';
    button.className = isExpanded ? 'btn btn-primary' : 'btn btn-outline-primary';
};
