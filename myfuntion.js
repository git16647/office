
    let btf = document.getElementById('btf');
    btf.onclick = function(){
    window.alert('تم شراء العقار')
    }



    function showPropertyDetails() {
    
        var info = {
            city: "دمشق",
            detail: "شقة 3 غرف مساحة 150 م",
            rent: "450 000 000 ل.س	 ",
            city2:"دمشق",
            detail2:"شقة 5 غرف مساحة 350 م	",
            rent2:"600 000 000 ل.س	",
            city3: "دمشق",
            detail3:"شقة 4 غرف مساحة 200 م	",
            rent3:"500 000 000 ل.س	 ",
            city4:" دمشق",
            detail4:"شقة 7 غرف مساحة 600 م	",
            rent4:"800 000 000 ل.س",
            city5:"دمشق",
            detail5:"شقة 3 غرف مساحة 175 م	",
            rent5:"450 000 000 ل.س	 ",
            city6:"دمشق",
            detail6:"شقة 6 غرف مساحة 700 م	",
            rent6:"450 000 000 ل.س	",
            city7:"دمشق",
            detail7:"شقة 4 غرف مساحة 530 م	",
            rent7:"450 000 000 ل.س	 ",
            city8:"دمشق",
            detail8:"شقة 8 غرف مساحة 600 م	",
            rent8:"740 000 000 ل.س	 ",
            city9:"دمشق",
            detail9:"فيلا 12 غرف مساحة 900 م	",
            rent9:"ثلاثة مليارات ل.س	",
            city10:"دمشق",
            detail10:"فيلا 15 غرف مساحة 1دنم	",
            rent10:"مليارات ل.س 4 "
        };
    
        var radio= document.getElementsByName('choose')
        for(i=0;i<radio.length;i++){
            if(radio[i].checked){
                if(radio[i].value == 1){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent + "</p>");
                }else if(radio[i].value==2){
    
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city2 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail2 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent2 + "</p>");
                }else if(radio[i].value==3){                    
    
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city3 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail3 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent3 + "</p>");
                }else if(radio[i].value==4){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city4 + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail4 + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent4 + "</p>");
                }else if(radio[i].value==5){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city5 + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail5 + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent5 + "</p>");
                }else if(radio[i].value==6){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city6 + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail6 + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent6 + "</p>");
                }else if(radio[i].value==7){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city7 + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail7 + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent7 + "</p>");
                }else if(radio[i].value==8){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city8 + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail8 + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent8 + "</p>");
                }else if(radio[i].value==9){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city9 + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail9 + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent9 + "</p>");
                }else if(radio[i].value==10){
                    var popup = window.open("", "_blank", "width=400, height=300");
                    popup.document.write("<h2>تفاصيل العقار</h2>");
                    popup.document.write("<p>المدينة: " + info.city10 + "</p>");
                    popup.document.write("<p> التفاصيل:" + info.detail10 + "</p>");
                    popup.document.write("<p> الايجار الشهري:" + info.rent10 + "</p>");
                }
    
            }
        }
          };



          function generate_captcha() {

            let result = '';
            let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabsdefghijklmnopqrstuvwxyz0123456789';
        
            for (let s = 0; s < 6; s++) {
                result += string.charAt(Math.floor(Math.random() * string.length));
            }
            document.getElementById("captcha").innerHTML = result;
        
        
        }


        
function check_captcha() {
    let text_captcha = document.getElementById("captcha").textContent;
    return text_captcha == form1.place_cood.value;
}

function number_correct() {
    var inputID = document.getElementById('phone').value;
    var isValid = validateSyrianID(inputID);

    if (!isValid) {

        alert('الرقم المدخل غير صحيح أو لا يتبع نمط الأرقام الوطنية السورية.');
    }
}

function validateSyrianID(id) {
    var syrianIDPattern = /^\d{9}$/;
    return syrianIDPattern.test(id);
}

function validateArabicName() {
    var inputName = document.getElementById('fn').value;
    var isValid = /^[ء-ي ]+$/.test(inputName);

    if (!isValid) {
        alert('الاسم المدخل غير صحيح أو يحتوي على حروف غير عربية.');
    }
}

function national(){
    var natid = document.getElementById('number').value;
    var iValid = validatnatid(natid)
    if(!iValid){
    alert ('الرقم الوطني يجب ان يكون 11 خانة')
    }

}
function validatnatid(id){
    var IDPattern = /^\d{11}$/;
    return IDPattern.test(id);
}

function validateEmail() {
    var inputEmail = document.getElementById('em').value;
    var isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail);

    if (!isValid) {
        alert('البريد الإلكتروني غير صحيح.');
    }
}