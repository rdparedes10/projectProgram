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
                html +='<'+ value.type_tag + ' type=' + value.type + ' id='+ value.id  + ' placeholder=' + value.placeholder + ' ' + (value.style? ' style=' + value.style : "") + '/>' ;
                break;
            };
            case 'button':{
                html +='<'+ value.type_tag + ' id='+ value.id + ' ' + (value.style? ' style=' + value.style : "") +' >'+ value.placeholder + '</' + value.type_tag + '>' ;
                break; 
            };
            default : {
                html +='<'+ value.type_tag + ' id='+ value.id + ' ' +(value.style? ' style=' + value.style : "") + '>' + value.placeholder + '</' + value.type_tag + '>' ;
                break;
            }
        }
    });
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
    case 'insertFile':{
        insertFile(data);
        break;
    };
    default:
    }
}