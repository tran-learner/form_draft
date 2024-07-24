validator = function (object) { //Constructor function / object
    //nhận vào form cần thao tác
    // console.log(object.form)
    var formElemet = document.querySelector(object.form)
    // console.log(formElemet);

    function validate(inputE, rule){
        var errorMessage = rule.test(inputE.value);
        var errorE = inputE.parentElement.querySelector(object.errorSelector)                  

        if (errorMessage){
            errorE.innerText = errorMessage
            inputE.parentElement.classList.add('invalid');
        } else {
            errorE.innerText = '';
            inputE.parentElement.classList.remove('invalid');
        }
    }

    if (formElemet) {
        // console.log(object.rules)
        object.rules.forEach(function (rule) {
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
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

validator.confirmPassword = function (element){
    // console.log(element)
    return {
        element:element,
        test: function (value){
            //assume the previous element is password field
            var currentElement = document.querySelector(element)
            // console.log(currentElement)
            var pass = currentElement.parentElement.previousElementSibling.getElementsByTagName('input')[0].value
            
            return pass===value ? undefined : `The re-entered password is incorrect.`
        }
    }
}