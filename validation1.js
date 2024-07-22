function validator(form) {  
    var userInputs = form.getElementsByClassName('userInput')
    console.log(userInputs)
    for (var i=0; i<userInputs.length; i++){
        validator.isRequired(userInputs[i]);
    }
}

//định nghĩa các rule
// validator.isRequired = function (element) {
//     console.dir(element)
//     element.onblur = function (e) {
//         var eValue = element.value;
//         if (eValue === '') {
//             element.parentElement.getElementsByTagName('span')[0].style.display="block"
//             element.onchange = function(){
//                 console.log(1);
//                 element.parentElement.getElementsByTagName('span')[0].style.display="none"
//             }
//         }
//     }
// }
validator.isRequired = function (element) {
    console.dir(element);
    
    function validate() {
        //kiểm tra trạng thái của input và xử lý tương ứng
        var eValue = element.value;
        var messageSpan = element.parentElement.getElementsByTagName('span')[0];
        
        if (eValue === '') {
            messageSpan.style.display = "block";
        } else {
            messageSpan.style.display = "none";
        }
    }

    // Đặt sự kiện onblur để kiểm tra khi người dùng rời khỏi trường
    element.onblur = validate;

    // Đặt sự kiện oninput để kiểm tra mỗi khi giá trị thay đổi
    element.oninput = validate;
}


var element = document.getElementsByTagName('input')[0]
validator.isRequired(element);

validator.isEmail = function () {

}



//chạy validator
var form = document.querySelector('.form1')
//tên class form1 được đặt duy nhất cho target form

// console.log(form)
validator(form);