
let userPoints = getCurrentUserPoints();
let userRewards = [
    {
        name: "Curso de Capacitação",
        description: "Acesso a curso online de vendas e atendimento ao cliente",
        points: 600,
        date: "15/09/2024",
        id: 1726358400000
    },
    {
        name: "Combo Lanche",
        description: "Hambúrguer artesanal + batata + refrigerante",
        points: 450,
        date: "20/09/2024",
        id: 1726790400000
    }
];

function getCurrentUserPoints() {
    const saved = localStorage.getItem('userPoints');
    return saved ? parseInt(saved) : 1250;
}

function updateUserPoints(newPoints) {
    localStorage.setItem('userPoints', newPoints);
    updatePointsDisplayGlobal();
}

function updatePointsDisplayGlobal() {
    const currentPoints = getCurrentUserPoints();

    const pointsDisplays = document.querySelectorAll('.user-points, #currentUserPoints');
    pointsDisplays.forEach(el => {
        el.textContent = `${currentPoints.toLocaleString('pt-BR')} pontos`;
    });

    const numbersOnly = document.querySelectorAll('.points-number');
    numbersOnly.forEach(el => {
        el.textContent = currentPoints.toLocaleString('pt-BR');
    });

    const dashboardPoints = document.querySelector('.text-swift-orange.fw-bold.fs-4');
    if (dashboardPoints && dashboardPoints.textContent.includes('pontos')) {
        dashboardPoints.innerHTML = `💎 ${currentPoints.toLocaleString('pt-BR')} pontos`;
    }
}

function updateAllPointsDisplay() {
    const currentPoints = getCurrentUserPoints();

    document.querySelectorAll('.user-points').forEach(element => {
        element.textContent = `${currentPoints.toLocaleString('pt-BR')} pts`;
    });

    document.querySelectorAll('.points-balance').forEach(element => {
        element.textContent = `${currentPoints.toLocaleString('pt-BR')} pontos`;
    });

    const navBadge = document.querySelector('.navbar-nav .badge');
    if (navBadge) {
        navBadge.textContent = `${currentPoints.toLocaleString('pt-BR')} pts`;
    }

    document.querySelectorAll('.alert .points-display').forEach(element => {
        element.textContent = `${currentPoints.toLocaleString('pt-BR')} pontos`;
    });
}

function updateRedeemButtonState(justRedeemed = 0) {
    document.querySelectorAll('.btn-redeem').forEach(button => {
        const requiredPoints = parseInt(button.dataset.points);
        const currentPoints = getCurrentUserPoints();
        if (currentPoints < requiredPoints) {
            button.disabled = true;
            button.innerHTML = '<i class="bi bi-lock me-2"></i>Pontos Insuficientes';
            button.classList.remove('btn-swift-orange');
            button.classList.add('btn-outline-secondary');
        } else {
            button.disabled = false;
            button.innerHTML = '<i class="bi bi-bag-check me-2"></i>Resgatar Agora';
            button.classList.remove('btn-outline-secondary');
            button.classList.add('btn-swift-orange');
        }
    });
}

function updatePoints(newPoints) {
    updateUserPoints(newPoints);
}
