



//  nếu gán rule bằng dấu '=' thì không thể ghi nhiều rule. vì mỗi lần lặp qua nó sẽ ghi đè
//==> vì thể nên ta sử dụng lưu chúng vào trong một cái mảng






// đối tượng 'Validator'
function Validator(options) {


    // thưc hiện việc hiện : validate  ---hiện ra lỗi và bỏ nó đi
    function validate(inputTextElement, rule) {
        var errorMessage;
        var errorElement = inputTextElement.parentElement.querySelector(options.errorSelector)


        // Lấy ra các rules của selector
        // Nếu có lỗi thì dừng việc kiểm tra
        var rules = selectorRules[rule.selector]
        //Lặp qua từng rules và kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputTextElement.value);
            if (errorMessage) break;
        }




        // khi xử nhập lỗi
        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputTextElement.parentElement.classList.add('invalid')


            // xử lí khi thêm invalid thì border chuyển sang màu đỏ
            var isInvalid = document.querySelectorAll('.form-input-item');

            for (var i = 0; i < isInvalid.length; i++) {
                var hasInvalidClass = isInvalid[i].classList.contains('invalid');

                if (hasInvalidClass) {
                    var input = isInvalid[i].querySelector('.form-input-item__input');
                    var message = isInvalid[i].querySelector(options.errorSelector);

                    if (input) {
                        input.style.border = '1px solid red';
                    }

                    if (message) {
                        message.style.color = 'red';
                    }
                }
            }

        }




        // xử lí khi nhập đúng
        else {
            errorElement.innerText = '';
            inputTextElement.parentElement.classList.remove('invalid')
            inputTextElement.parentElement.querySelector('.form-input-item__input').style.border = '1px solid #5555'

        }

        return !errorMessage;
        // boolean '!!' sẽ biến thành true or false



    }


    // ------------------------------------------------

    // - lấy element của form
    var formElement = document.querySelector(options.form)

    if (formElement) {


        // khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault()

            var isFormValid = true;


            // thực hiện lặp qua từng rule và validate(xử lí)
            options.rules.forEach(function (rule) {
                var inputTextElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputTextElement, rule);


                if (!isValid) {
                    isFormValid = false;

                }
            });



            if (isFormValid) {

                // trường hợp submit với js
                if (typeof options.onSubmit === 'function') {
                    // select tất cả các fill có tên là name và không select tất cả các fill có tên là disable
                    // tại sao lại là disable: trong trường hợp có những fill mà ta không dùng tới và thêm attribute 
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])')
                    // enableInput là một NodeList nên nó không có các phương thức của array, như reduce, forEach, some, every, filter
                    // --> để convert nó sang arrat ta dùng Array.form(enaleInputs)
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        // gán values cho input.value và return về values
                        return (values[input.name] = input.value) && values;
                    }, {})

                    options.onSubmit(formValues)

                    // console.log(formValues)


                    // options.onSubmit({
                    //     name: 'Quyen Chau',

                    // })
                }

                // trường hợp submit với hành vi mặc định
                else {
                    // submit với hành vi mặc định
                    formElement.submit();
                }
            }

        }



        // xử lí lặp qua mỗi rule và xử lí (lắng nghe sự kiện blur và input,..)
        // nhận lại từng rule đã cấu hình ở bên ngoài
        options.rules.forEach(function (rule) {
            //  lấy ra input của email và name
            var inputTextElement = formElement.querySelector(rule.selector)

            //  lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
                // - lần chạy thứ hai nó đã là array nên nó sẽ lưu phần tử kế tiếp vaò trong mảng

            }
            else {
                selectorRules[rule.selector] = [rule.test]
                // - Nếu không phải mảng thì gán phần tử đầu tiên là rule
            }




            if (inputTextElement) {

                // xử lí trường hợp blur ra ngoài input
                inputTextElement.onblur = function (e) {
                    // value: inputTextElement.value
                    // test func: rule.test
                    // dùng để chạy hàm và truyền vào value mà người dùng nhập vào
                    validate(inputTextElement, rule);
                }


                // xử lí trường hợp , mỗi khi người dùng nhập vào input
                inputTextElement.oninput = function () {

                    var errorElement = inputTextElement.parentElement.querySelector(options.errorSelector)

                    errorElement.innerText = '';
                    inputTextElement.parentElement.classList.remove('invalid')
                    inputTextElement.parentElement.querySelector('.form-input-item__input').style.border = '1px solid #5555'

                }
            }
        })
            ;

    }
}








// định nghĩa các rules
// nguyên tắc rule:
// + khi có lỗi thì trả ra message lồi
// + khi hợp lên k trả ra cái gì cả (undefined)


Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            // trim loại bỏ dấu cách 2 đầu chuỗi
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'

        }
    }

}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            // check email:  search 'js email regex'
            var regex = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}



Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            // check email:  search 'js email regex'

            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}


Validator.isConfirmation = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
            // nếu message không có gí trị thì lấy giá trị bên phải
        }
    }
}




// ------------------
var selectorRules = {};