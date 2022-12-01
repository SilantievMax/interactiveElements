window.addEventListener('DOMContentLoaded', function() {
    var selector = document.querySelector("input[type='tel']");

    new JustValidate('.forms__form', {
        rules: {
            name: {
                required: true,
                minLength: 3,
                maxLength: 25
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10;
                }
            },
            mail: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: 'Вы не ввели имя',
                minLength: 'Введите от 3 до 25 символов',
                maxLength: 'Запрещено вводить более 25 символов'
            },
            tel: {
                required: 'Вы не ввели телефон',
                function: 'Введите 10 символов'
            },
            mail: {
                required: 'Вы не ввели e-mail',
                email: 'Введите корректный email'
            }
        }
    })
})