function hideAllMenu(menu) {
    let views = ["login",
        "contact",
        "mainMenu",
        "anulationFile",
        "consultClient",
        "consultDataUser",
        "consultFile",
        "deleteUser",
        "insertFile",
        "registerUser",
        "updateFile",
        "updateUser",
        "insertClient",
        "updateClient",
        "deleteClient"
    ];

    views.forEach(function(elemento, indice, array) {
        if (elemento !== menu) {
            var menuOption = '#' + elemento;
            $(menuOption).hide();
        } else {
            $('#' + menu).show();
        }
    })
}

function hideRoleMenu(menu) {

    menu.forEach(function(elemento, indice, array) {
        hideAllMenu(menu)
    })
}

function addInputsInViewsInsert(view){
    var data = getInputData();
    var html ='<div class="login-page">' +
        '<div class="form">' +
            '<div class="div-login login-form">';
    $.each(data[view], function(key,value) {

        switch(value.type_tag){
            case 'input' : {
                html +='<'+ value.type_tag + ' type=' + value.type + ' id='+ value.id  + ' placeholder=' + value.placeholder +  (value.style? ' style=' + value.style : "") + '/>' ;
                break;
            };
            case 'button':{
                html +='<'+ value.type_tag + ' id='+ value.id + (value.style? ' style=' + value.style : "") +' >'+ value.placeholder + '</' + value.type_tag + '>' ;
                break; 
            };
            default : {
                html +='<'+ value.type_tag + ' id='+ value.id + (value.style? ' style=' + value.style : "") + '>' + value.placeholder + '</' + value.type_tag + '>' ;
                break;
            }
        }
    });
        '    </div>' +
        ' </div>' +
    '</div>';
    return html;
}

function addEventsInputsInsert(view){
    var data = getInputData();
    $.each(data[view], function(key,value) {

        switch(value.type_tag){
            case 'input' : {
                $('#' + value.id).on('input', function(a) {
                    $('#'+ value.id).removeAttr( 'style' );
                    $('#idEr').hide();
                });
                break;
            };
            case 'button':{
                if(value.function){
                    var dataInsert = data[view];
                    $('#' + value.id).on('click',function() {
                        callBacks( value.function, data[view]);
                    });
                }
                break; 
            };
            default : {
                break;
            }
        }
    });
}

function callBacks(functionName, data){

    switch(functionName){
    case 'insertClient':{
        insertClient(data);
        break;
    };
    default:{

    }
    }
}
function getInputData(){
var data = {
    "clients_data": [
        {
            "id": "clientName",
            "placeholder": "Nombre del Cliente",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "ruc",
            "placeholder": "RUC o Cédula",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "clientAddress",
            "placeholder": "Dirección del cliente",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "email",
            "placeholder": "Email del cliente",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "phone",
            "placeholder": "Número de teléfono",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "mobile",
            "placeholder": "Número de celular",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "labelIsEmailSend",
            "placeholder": "Envio por email",
            "type": "",
            "type_tag": "label",
            "style": "width:50%;"
        },
        {
            "id": "isEmailSend",
            "type": "checkbox",
            "type_tag": "input",
            "placeholder": "Envio de correo",
            "style": "width:50%;"
        },
        {
            "id": "date",
            "placeholder": "Fecha de registro",
            "type": "date",
            "type_tag": "input"
        },
        {
            "id": "buttonInsertClient",
            "placeholder": "Ingresar Cliente",
            "type": "",
            "type_tag": "button",
            "function": "insertClient",
        }
    ],
    "file_data": [
        {
            "id": "sample",
            "placeholder": "Muestra",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "feature",
            "placeholder": "Característica de la muestra",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "date_elaboration",
            "placeholder": "Fecha de Elaboración",
            "type": "date",
            "type_tag": "input"
        },
        {
            "id": "date_due",
            "placeholder": "Fecha de caducidad",
            "type": "date",
            "type_tag": "input"
        },
        {
            "id": "lote",
            "placeholder": "Lote",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "localization",
            "placeholder": "Localización de la toma de muestra",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "container",
            "placeholder": "Envase",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "content",
            "placeholder": "Contenido",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "n_sample",
            "placeholder": "Número de muestras",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "temperature",
            "placeholder": "Temperatura de la o las muestras",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "comentary",
            "placeholder": "Comentario",
            "type": "text",
            "type_tag": "input"
        }
    ],
    "user_data": [
        {
            "id": "username",
            "placeholder": "User Name",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "pass",
            "placeholder": "Password",
            "type": "pass",
            "type_tag": "input"
        },
        {
            "id": "email",
            "placeholder": "Email",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "ci",
            "placeholder": "Cédula de identidad",
            "type": "text",
            "type_tag": "input"
        },
        {
            "id": "role",
            "placeholder": "Rol del usuario",
            "type": "text",
            "type_tag": "input"
        }
    ]
    };

    return data;
}