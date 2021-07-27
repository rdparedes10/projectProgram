function getInputData(){
    var data = {
        'clients_data': [
            {
                'id': 'name',
                'placeholder': 'Nombre del Cliente',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'ruc',
                'placeholder': 'RUC o Cédula',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'address',
                'placeholder': 'Dirección del cliente',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'email',
                'placeholder': 'Email del cliente',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'phone',
                'placeholder': 'Número de teléfono',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'mobile',
                'placeholder': 'Número de celular',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'labelIsEmailSend',
                'placeholder': 'Envio por email',
                'type': '',
                'type_tag': 'label',
                'style': 'width:50%;'
            },
            {
                'id': 'sendEmail',
                'type': 'checkbox',
                'type_tag': 'input',
                'placeholder': 'Envio de correo',
                'style': 'width:50%;'
            },
            {
                'id': 'date',
                'placeholder': 'Fecha de registro',
                'type': 'date',
                'type_tag': 'input'
            },
            {
                'id': 'buttonInsertClient',
                'placeholder': 'Ingresar Cliente',
                'type': '',
                'type_tag': 'button',
                'function': 'insertClient',
            }
        ],
        'file_data': [
            {
                'id': 'sample',
                'placeholder': 'Muestra',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'feature',
                'placeholder': 'Característica de la muestra',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'dateElaboration',
                'placeholder': 'Fecha de Elaboración',
                'type': 'date',
                'type_tag': 'input'
            },
            {
                'id': 'dueDate',
                'placeholder': 'Fecha de caducidad',
                'type': 'date',
                'type_tag': 'input'
            },
            {
                'id': 'lote',
                'placeholder': 'Lote',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'localization',
                'placeholder': 'Localización de la toma de muestra',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'container',
                'placeholder': 'Envase',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'content',
                'placeholder': 'Contenido',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'nSample',
                'placeholder': 'Número de muestras',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'temperature',
                'placeholder': 'Temperatura de las muestras',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'commentary',
                'placeholder': 'Comentario',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'buttonInsertFiles',
                'placeholder': 'Ingresar Ficha',
                'type': '',
                'type_tag': 'button',
                'function': 'insertFile',
            }
        ],
        'user_data': [
            {
                'id': 'userName',
                'placeholder': 'User Name',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'pass',
                'placeholder': 'Password',
                'type': 'password',
                'type_tag': 'input'
            },
            {
                'id': 'email',
                'placeholder': 'Email',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'ci',
                'placeholder': 'Cédula de identidad',
                'type': 'text',
                'type_tag': 'input'
            },
            {
                'id': 'role',
                'placeholder': 'Rol del usuario',
                'type': '',
                'type_tag': 'select'
            },
            {
                'id': 'buttonRegisterUser',
                'placeholder': 'Ingresar Usuario',
                'type': '',
                'type_tag': 'button',
                'function': 'registerUser',
            }
        ]
    };

    return data;
}