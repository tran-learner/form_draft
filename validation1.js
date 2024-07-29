validator = function (object) { //Constructor function / object
    //nhận vào form cần thao tác
    // console.log(object.form)
    var formElemet = document.querySelector(object.form);
    // console.log(formElemet);
    var formRules = {}; //object
    function validate(inputE, rule){
        var errorMessage;
        var errorE = inputE.parentElement.querySelector(object.errorSelector)                  

        var rules = formRules[rule.element]
        for (var i=0; i<rules.length; i++){
            errorMessage = rules[i](inputE.value);
            if (errorMessage) break;
        }
        
        if (errorMessage){
            errorE.innerText = errorMessage
            inputE.parentElement.classList.add('invalid');
            return false;
        } else {
            errorE.innerText = '';
            inputE.parentElement.classList.remove('invalid');
        }
        return true;
    }

    if (formElemet) {
        formElemet.onsubmit = function(e){
            var flag = true;
            e.preventDefault();
            object.rules.forEach(function (rule) {
                if (Array.isArray(formRules[rule.element])){
                    formRules[rule.element].push(rule.test)
                } 
                else {
                    formRules[rule.element] = [rule.test]
                }
                var inputE = formElemet.querySelector(rule.element);
                if (!validate(inputE, rule)) flag = false;
            })
        if (flag===true){
            alert('succeeded!')
        }    
        }
        object.rules.forEach(function (rule) {
            if (Array.isArray(formRules[rule.element])){
                formRules[rule.element].push(rule.test)
            } 
            else {
                formRules[rule.element] = [rule.test]
            }
            
            // console.log(inputE)
            var inputE = formElemet.querySelector(rule.element);
            if (inputE) {
                //onblur
                inputE.onblur = function () {
                    //lấy value người dùng nhập
                    //lấy được test func   
                    validate(inputE, rule)         
                }

                //starting to type
                inputE.oninput = function(){
                    var errorE = inputE.parentElement.querySelector('.erMsg')                  
                    inputE.parentElement.classList.remove('invalid');
                    errorE.innerText = '';
                }
            }
        })
    //    //rules tương ứng với các thẻ input
    //    console.log(formRules)
    }
}

//Định nghĩa các rules
//return object có keys là [phần tử được chọn] + [fnc test]
//Nguyên tắc rules:
//1. Có lỗi => báo lỗi
//2. Hợp lệ => trả về undefined
validator.isRequired = function (element) {
    // console.log(typeof element)
    return {
        element: element,
        test: function (value) {
            return value.trim() ? undefined : 'Please fill out this field.'
        }
    }
}

validator.isEmail = function (element) {
    return {
        element: element,
        test: function (value) {
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined: 'This field has to be an email.'
        }
    }
}

validator.minLength = function (element, min) {
    // console.log(typeof element)
    return {
        element: element,
        test: function (value) {
            return value.length>=min ? undefined : `Password must be at least ${min} characters.`
        }
    }
}

validator.confirmPassword = function (element, pass, message){
    return {
        element: element,
        test: function (value){
            return value === pass()? undefined : message || 'The re-entered value is incorrect.'
        }
    }
}

/**Lọc từng element trong form => rules */