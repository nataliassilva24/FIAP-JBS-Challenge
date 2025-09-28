
function getAvatarImage(avatar, size = 40) {
    const realImages = {
        'MA': 'Maria Oliveira.png', 'CA': 'Carlos Santos.png', 'JS': 'João Silva.png',
        'AN': 'Ana Costa.png', 'PE': 'Pedro Lima.png', 'LU': 'Lúcia Ferreira.png',
        'BR': 'Bruno Almeida.png', 'FS': 'Renata Souza.png', 'JT': 'Júlia Martins.png',
        'AC': 'Patrícia Gomes.png', 'BL': 'Isabella Rocha.png', 'CS': 'Carla Mendes.png',
        'VA': 'Vanessa Silva.png', 'IS': 'Isabella Rocha.png', 'LA': 'Larissa Monteiro.png',
        'TA': 'Tatiana Ribeiro.png', 'JU': 'Júlia Martins.png', 'RE': 'Renata Souza.png',
        'PA': 'Patrícia Gomes.png', 'TH': 'Thiago Rodrigues.png', 'FL': 'Felipe Santos.png',
        'RO': 'Roberto Nascimento.png', 'MV': 'Marcelo Vieira.png', 'DA': 'Daniel Castro.png',
        'GA': 'Gabriel Oliveira.png', 'LE': 'Leonardo Dias.png', 'AL': 'Alexandre Ferreira.png',
        'LO': 'Lorenzo Barbosa.png'
    };

    if (realImages[avatar]) {
        const basePath = window.location.pathname.includes('/pages/') ? '../assets/images/users/' : 'assets/images/users/';
        return basePath + realImages[avatar];
    }

    return `https://via.placeholder.com/${size}/${getAvatarColor(avatar)}/${getAvatarTextColor(avatar)}?text=${avatar}`;
}

function getAvatarColor(avatar) {
    const colors = {
        'MA': 'ffc107', 'CA': '6c757d', 'JS': '28a745', 'AN': '007bff', 'PE': 'dc3545',
        'LU': '17a2b8', 'BR': '28a745', 'FS': 'e83e8c', 'RM': '6f42c1', 'JT': 'fd7e14',
        'RS': '20c997', 'AC': 'f012be', 'MP': '795548', 'BL': '9c27b0', 'RC': 'ff9800',
        'CS': 'e91e63', 'DA': '8bc34a', 'VA': 'e91e63', 'IS': '9c27b0', 'LA': 'ff4081', 'TA': '00bcd4',
        'TH': 'fd7e14', 'FL': '795548', 'RO': 'ff5722', 'MV': '607d8b', 'GA': '3f51b5',
        'LE': 'ff6f00', 'AL': '795548', 'LO': '9e9e9e', 'JU': 'ff9800', 'RE': '009688', 'PA': '4caf50'
    };
    return colors[avatar] || '6c757d';
}

function getAvatarTextColor(avatar) {
    const lightColors = ['ffc107'];
    return lightColors.includes(getAvatarColor(avatar)) ? '000000' : 'ffffff';
}

function getLevel(points) {
    if (points >= 2000) return 'Expert';
    if (points >= 1001) return 'Avançado';
    if (points >= 501) return 'Intermediário';
    return 'Iniciante';
}
