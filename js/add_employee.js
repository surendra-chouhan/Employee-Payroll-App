function getProfileValue(){
    for (var i = 0; i < document.getElementsByName("profile").length; i++){
        if (document.getElementsByName("profile")[i].checked){
            return document.getElementsByName("profile")[i].value;
        }
    } 
}

const dept = () => {
    let dept = [];
    var hrchecked = document.getElementById('hr').checked;
    var saleschecked = document.getElementById('sales').checked;
    var financechecked = document.getElementById('finance').checked;
    var engineerChecked = document.getElementById('engineer').checked;
    var otherschecked = document.getElementById('others').checked;
    
    if(hrchecked == true){
        var hrcheck = document.getElementById('hr').value;
        dept.push(hrcheck);
    }
    if(saleschecked == true){
        var salescheck = document.getElementById('sales').value;
        dept.push(salescheck);
    }
    if(financechecked == true){
        var fincheck = document.getElementById('finance').value;
        dept.push(fincheck);
    }
    if(engineerChecked == true){
        var engcheck = document.getElementById('engineer').value;
        dept.push(engcheck);
    }
    if(otherschecked == true){
        var otherscheck = document.getElementById('others').value;
        dept.push(otherscheck);
    }
    return dept;
}

function addUser(){ 
    console.log("Add User Calling");
    var profile_pic = getProfileValue();
    var sex= document.getElementsByName("gender")[0].checked? 'Male' : 'Female';   

    let requestData= {
        "profile": profile_pic,
        "name": document.getElementById('name').value,
        "gender": sex,
        "department": dept,
        "salary": document.getElementById('salary').selectedOptions[0].text,
        "startdate": document.getElementById('day').value + '-' + document.getElementById('month').value + '-' + document.getElementById('year').value,
    };
    $.ajax({
        url: 'http://localhost:3000/employee',
        type: "POST",
        data: requestData,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
}