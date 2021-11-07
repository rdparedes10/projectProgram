function hideAllMenu(menu) {
    let views = ["login",
        "contact",
        "mainMenu",
        "anulationFile",
        "consultClient",
        "consultUser",
        "consultFile",
        "deleteUser",
        "insertFile",
        "registerUser",
        "updateFile",
        "updateUser",
        "insertClient",
        "updateClient",
        "deleteClient",
        "authorizeFile",
        "authorizeSamples"
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
                if( value.type !== 'checkbox'){
                    html += '<label>' + value.placeholder + '</label>';
                }
                html +='<'+ value.type_tag + ' type=' + value.type + ' id='+ value.id  + ' placeholder="' + value.placeholder + '" ' + (value.style? ' style=' + value.style : "") + ' />' ;
                html += '<br>';
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
    }
    case 'insertFile':{
        insertFile(data);
        break;
    }
    case 'registerUser':{
        insertUser(data);
        break;
    }
    case 'searchFile':{
        searchFile(data);
        break;
    }
    case 'searchClient':{
        searchClient(data);
        break;
    }
    case 'searchUser':{
        searchUser(data);
        break;
    }
    default:
    }
}

function getSuccessView(text_success){ 
    var html = '<div class="form"><div class="card"> ';
    html += '    <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">';
    html += '  <i class="checkmark i_success">✓</i></div>';
    html += '   <h1 class="h1_success">Success</h1> ';
    html += '   <p class="p_success">'+ text_success + '</p>';
    html += '   </div>';
    html += '  <button class="form button" onclick="loadMenu()">Continuar</button></div>';

    return html;
}


function addUpdateInViewsInsert(view, valueData, buttonId){
    var data = getInputData();
    var html ='<div class="login-page">' +
        '<div class="form">' +
            '<div class="div-login login-form">';
    $.each(data[view], function(key,value) {

        switch(value.type_tag){
            case 'input' : {
                if( value.type !== 'checkbox'){
                    html += '<label>' + value.placeholder + '</label>';
                }
                html +='<'+ value.type_tag + ' type=' + value.type + ' id='+ value.id  + ' placeholder="' + value.placeholder + '" ' + (value.style? ' style=' + value.style : "") + 'value="'+ (valueData[value.id]? valueData[value.id]: '""') + '" />' ;
                html += '<br>';  
                break;
            };
            case 'button':{
                html +='<'+ value.type_tag + ' id='+ buttonId + ' ' + (value.style? ' style=' + value.style : "") +' >'+ value.placeholder + '</' + value.type_tag + '>' ;
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