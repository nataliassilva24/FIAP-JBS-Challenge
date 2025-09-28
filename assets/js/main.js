
document.addEventListener('DOMContentLoaded', function () {
    checkForReset();
    updatePointsDisplayGlobal();
    initializeTooltips();
    initializePageSpecific();
});

function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    setTimeout(() => {
        const newTooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        newTooltipTriggerList.forEach(function (tooltipTriggerEl) {
            if (!bootstrap.Tooltip.getInstance(tooltipTriggerEl)) {
                new bootstrap.Tooltip(tooltipTriggerEl);
            }
        });
    }, 500);
}

function initializePageSpecific() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('loja.html')) {
        updateAllPointsDisplay();
        updateRedeemedRewardsSection();
        updateRedeemButtonState();
        setTimeout(() => initializeRewardSystem(), 100);
    }

    if (currentPage.includes('ranking.html')) {
        setTimeout(() => updateRankingDisplay(), 100);
    }

    updateAllPointsDisplay();
}

function completeChallenge(challengeName, points) {
    const newPoints = getCurrentUserPoints() + points;
    updateUserPoints(newPoints);
    showNotification(`🎯 Desafio "${challengeName}" concluído! +${points} pontos`, 'success');
    updateRedeemButtonState();
}

function resetUserData() {
    localStorage.removeItem('userPoints');
    localStorage.removeItem('redeemHistory');
    location.reload();
}

function checkForReset() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('reset') === 'true') {
        resetUserData();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
