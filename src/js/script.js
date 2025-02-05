function configuracoes() {
    const op_config = document.querySelector('.config-container');
    const container = document.querySelector('.container');
    if (op_config.style.display == 'grid') {
        op_config.style.display = 'none';
    } else {
        op_config.style.display = 'grid';
        container.style.display = "none"
    }
}

function button_salvar() {
    const container = document.querySelector('.container');
    container.style.display = 'flex';
    const op_config = document.querySelector('.config-container');
    op_config.style.display = 'none';
}