import $ from 'jquery';

export default class Modal {
    constructor() {
        this.openModalButtons = $('.open-modal-js');
        this.modal = $('.modal')
        this.closeModalButton = $('.modal__close');
        this.events();
    }
    events() {
        this.openModalButtons.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));
    }
    openModal() {
        this.modal.addClass('modal--open');
        $(document).on('keyup', event => {
            if (event.key === "Escape") {
                this.closeModal();
            }
        });
    }
    closeModal() {
        this.modal.removeClass('modal--open');
    }
}