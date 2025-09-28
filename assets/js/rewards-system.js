
function initializeRewardSystem() {
    const redeemButtons = document.querySelectorAll('.btn-redeem');

    redeemButtons.forEach((button, index) => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener('click', function (e) {
            e.preventDefault();

            const rewardName = this.dataset.reward;
            const rewardPoints = parseInt(this.dataset.points);
            const rewardDescription = this.dataset.description;

            if (typeof openRedeemModal === 'function') {
                openRedeemModal(rewardName, rewardPoints, rewardDescription);
            } else if (window.openRedeemModal) {
                window.openRedeemModal(rewardName, rewardPoints, rewardDescription);
            }
        });
    });
}

window.openRedeemModal = function openRedeemModal(rewardName, rewardPoints, description) {
    const modalElement = document.getElementById('redeemModal');
    if (!modalElement) {
        return;
    }

    const currentUserPoints = getCurrentUserPoints();
    if (currentUserPoints < rewardPoints) {
        if (typeof showInsufficientPointsModal === 'function') {
            showInsufficientPointsModal(currentUserPoints, rewardPoints);
        }
        return;
    }

    const titleEl = document.getElementById('redeemModalTitle');
    const nameEl = document.getElementById('rewardName');
    const descEl = document.getElementById('rewardDescription');
    const pointsEl = document.getElementById('rewardPoints');
    const currentPointsEl = document.getElementById('userCurrentPoints');
    const afterRedeemEl = document.getElementById('pointsAfterRedeem');
    const confirmBtnEl = document.getElementById('confirmRedeemBtn');

    if (!titleEl || !nameEl || !descEl || !pointsEl || !currentPointsEl || !afterRedeemEl || !confirmBtnEl) {
        return;
    }

    titleEl.textContent = 'Confirmar Resgate';
    nameEl.textContent = rewardName;
    descEl.textContent = description;
    pointsEl.textContent = rewardPoints;
    currentPointsEl.textContent = currentUserPoints.toLocaleString('pt-BR');
    afterRedeemEl.textContent = (currentUserPoints - rewardPoints).toLocaleString('pt-BR');

    confirmBtnEl.dataset.reward = rewardName;
    confirmBtnEl.dataset.points = rewardPoints;
    confirmBtnEl.dataset.description = description;

    try {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } catch (error) {
    }
};

window.confirmRedeem = function confirmRedeem() {
    const button = document.getElementById('confirmRedeemBtn');
    const rewardName = button.dataset.reward;
    const rewardPoints = parseInt(button.dataset.points);
    const description = button.dataset.description;

    const newPoints = getCurrentUserPoints() - rewardPoints;
    updateUserPoints(newPoints);

    const newReward = {
        name: rewardName,
        description: description,
        points: rewardPoints,
        date: new Date().toLocaleDateString('pt-BR'),
        id: Date.now()
    };

    userRewards.unshift(newReward);
    updateRedeemedRewardsSection();
    updateRedeemButtonState(rewardPoints);

    const modalElement = document.getElementById('redeemModal');
    if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
    }
};

function updateRedeemedRewardsSection() {
    const container = document.querySelector('.redeemed-rewards-container');
    if (!container) return;

    container.innerHTML = '';
    userRewards.slice(0, 5).forEach(reward => {
        const rewardElement = document.createElement('div');
        rewardElement.className = 'col-md-6 mb-3';
        rewardElement.innerHTML = `
            <div class="d-flex align-items-center p-3 border rounded-3 bg-light">
                <i class="bi bi-check-circle-fill text-success me-3" style="font-size: 1.5rem;"></i>
                <div>
                    <h6 class="mb-1">${reward.name}</h6>
                    <small class="text-muted">Resgatado em ${reward.date} • ${reward.points} pontos</small>
                </div>
            </div>
        `;
        container.appendChild(rewardElement);
    });
}

function showInsufficientPointsModal(currentPoints, requiredPoints) {
    const currentPointsEl = document.getElementById('currentPointsAlert');
    const requiredPointsEl = document.getElementById('requiredPointsAlert');

    if (currentPointsEl) currentPointsEl.textContent = currentPoints.toLocaleString('pt-BR');
    if (requiredPointsEl) requiredPointsEl.textContent = requiredPoints.toLocaleString('pt-BR');

    const modal = document.getElementById('insufficientPointsModal');
    if (modal) {
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    }
}

function showNotification(message, type = 'success') {
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    const notification = document.createElement('div');
    notification.className = `alert ${alertClass} position-fixed`;
    notification.style.cssText = 'top: 150px; right: 20px; z-index: 1050; min-width: 300px;';
    notification.innerHTML = `
        <i class="bi bi-check-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}
