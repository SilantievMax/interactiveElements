window.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.material__select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });

    const element2 = document.querySelector('.material__select2');
    const choices2 = new Choices(element2, {
        searchEnabled: false,
        itemSelectText: '',
    });
})