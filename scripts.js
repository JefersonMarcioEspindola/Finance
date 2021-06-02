const Modal = {
    open() {
        // Abrir modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close() {
        // fechar o modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}
