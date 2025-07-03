// -----------------TRẢI NGHIỆM NGƯỜI DÙNG--------------

// + nếu bấm đăng kí khi người dùng chưa nhập đủ các trường bắt buộc thì báo lỗi  ==> tránh việc ng dùng đi nhập lại thông tin
// + nếu đang báo lỗi mà ng dùng nhập một kí tự bất kỳ nào thì tắt thông báo lỗi
// + blur ra ngoài nếu còn lỗi thì sẽ báo lỗi


// ----------------LỖI GIAO DIỆN CẦN CẢI THIỆN------------------
//  - khi nhập mk xác nhận trước khi nhập mk chính, nếu nhập đúng thì vẫn xảy ra lỗi ở input mk xác nhận
//  - Giả sử có một trường không bắt buộc nhập
//      + Người dùng sẽ bỏ qua nó ==> kết quả trả về khi người dùng nhấn Đăng kí mà chúng ta nhận được sẽ là một chuỗi rỗng (ĐÃ SỬA)
//  - khi thay đổi cấu trúc trong html thì hành động tìm thẻ cha của input sẽ k chính xác
//  và gây ra hiện tượng không tìm được ==> dẫn đến lỗi và không thẻ xuất ra message lỗi được (ĐÃ SỬA)
// - với checkbox chỉ lấy ra ô được check đầu tiên
// - trường hợp với input[name="file"] thì phải lấy input value chứ k được lây path

// --------------TÍNH MỞ RỘNG VÀ TÁI SỬ DỤNG--------------------

// - customer mesage: qua tham số 'message' có thể điểu chỉnh qua tham số truyền vào mà không cần vào code thay đổi
// - sử dụng được nhiêu rule trong một input
//  + version trước: bị ghi đè nên chỉ dùng được một rule
// ==> cải tiến bằng cách: tạo một object rỗng để lưu các rules khi thực hiện (tránh trường hợp bị ghi đề)
//  + sau đó tiến hành duyệt qua, rồi push vào trong mảng. từ đó lấy ra các rule tỏng từng input 
// - bấm vào nút submit và nó sẽ lưu thông tin của người dùng
//  + truyền vào hàm callback onSubmit, dữ liệu sẽ lọt vào hàm này in ra dữ liệu ở tab console
//  + 


// -------------NHỮNG CHỨC NĂNG--------------------

//- khi blur ra ngoài, nếu người dùng nhập thông tin sai (không nhập) ==> báo lỗi

// *** Nếu thêm invalid thì sẽ báo lỗi----------------------------
// - trường hợp khi người dùng đang nhập thông tin vào => tắt thông báo hiển thị lỗi
//      + bắt sự kiện nhập vòa bằng oninput -> remove('invalid')




// *** FUNCTION VALIDATOR-------------------------------------------------
//----------------------------------------------------------------------------------
// - có thể coi lại một constructor

// - options sẽ là từng item trong Validator
function Validator(options) {

    function getParent(element, selector) {

        // - tìm kiếm thẻ cha bên ngoài có matches với selector hay không
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }

            element = element.parentElement


        }
    }


    // lưu các rules khi thực hiện
    var selectorRules = {};



    // - thực hiện việc hiện ra lỗi hay bỏ lỗi đi
    function Validate(inputElement, rule) {



        // - nếu có lỗi, thì lỗi sẽ được lưu giá trị vào errorMessage
        var errorMessage //= rule.test(inputElement.value)
        // gọi tới class="form-message"
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

        // - lấy ra những cái rules của từng input
        var rules = selectorRules[rule.selector]

        // lặp qua tửng rules và kiểm tra
        for (var i = 0; i < rules.length; ++i) {

            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        // rule của input năm
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }




            if (errorMessage) {
                break
                // khi có lỗi thì thoát khỏi vòng lặp
            }
        }

        // ------------------XỬ LÍ TRƯỜNG HỢP XUẤT HIỆN LỖI-------------------------------

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')


            // xử lí khi thêm invalid 
            // Gắn style khi có lỗi
            inputElement.style.border = '1px solid red';
            errorElement.style.color = 'red';

        }
        else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            // Xóa style lỗi nếu hợp lệ
            inputElement.style.border = '';
            errorElement.style.color = '';

        }

        return !errorMessage; // nếu Validate không có lỗi thì trả về false và có lỗi sẽ trả về true


    }



    //------------------------------------GỌI RA FORM ĐỂ XỬ LÍ-----------------------------------

    // gọi tới form-1
    var formElement = document.querySelector(options.form)

    // - nếu là form-1 thì
    if (formElement)


        // bỏ đi hành vi mặc định khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault()

            // trường hợp nhập hợp lệ ==> gán bằng true và gửi thông tin đi
            var isFormvalid = true

            // lặp qua từng ruls và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = Validate(inputElement, rule)

                // nếu nhập sai bất kỳ 1 trường nào thì sửa thành false
                if (!isValid) {
                    isFormvalid = false
                }
            })
            if (isFormvalid) {


                // Trường hợp submit với js

                if (typeof options.onSubmit === 'function') {
                    // lấy ra những input có trạng thái enable
                    // - lấy ra những thẻ có att = name và không có att = disable
                    // - trả về nodeList gồm 4 thẻ input ==> không có phức của array
                    // disable: trường hợp có những fill không thẻ nhập , ngta sẽ thêm vào disable và dòng này để loại trừ ra những trường hợp đó

                    // để chuyển sang array

                    var EnableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    var formValues = Array.from(EnableInputs).reduce(function (values, input) {
                        // lấy ra value của input
                        // !!!!Nếu một input trong form không có giá trị thì nó sẽ trả về một chuỗi rỗng
                        // return (values[input.name] = input.value) && values
                        // TH chuỗi rỗng đứng trước toán tử logic, khi convert sang boolean sẽ trả ra là false
                        //  --> kết quả trả ra là một chuỗi rỗng

                        // ===> fix <===
                        // values[input.name] = input.value

                        //==> fix lỗi khi thêm 3 input[name="radio"]
                        switch (input.type) {
                            case 'radio':
                                errorMessage = rules[i](
                                    // rule của input năm
                                    values[input.name] = formElement.querySelector(rule.selector + ':checked')
                                )
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    // đảm bảo trong trường hợp không nhập gì vẫn k bị lỗi
                                    values[input.name] = ''
                                    return values
                                }

                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files

                                break;
                            default:
                                values[input.name] = input.value

                        }


                        return values
                        // -> Trả về một object đầy đủ



                    }, {}) // convert to aray



                    options.onSubmit(formValues) // tham số data được đối số formValues truyền qua
                    //call API
                }

                // Trường hợp submit với hành vi mặt định
                else {
                    formElement.submit();
                }
            }
            else {
                console.log('có lỗi')
            }
        }

    // rule là con của rules
    // rule.selector: là gọi id mà yêu cầu phương thức
    // inputElement là các thẻ input

    // - duyệt qua từng phần tử của mỗi rule (lắng nghe sự kiện)
    options.rules.forEach(function (rule) {


        // Lưu lại các rules trong mỗi input
        // _nếu là mảng thì
        if (Array.isArray(selectorRules[rule.selector])) {

            selectorRules[rule.selector].push(rule.test)
        }
        else {
            // nếu không phải là mảng thì gán phần tử đầu tiên của nó là một cái rule
            // _ trường hợp có nhiều phần tử -> quay lên trên push thêm rule vào
            selectorRules[rule.selector] = [rule.test]
        }

        // selectorRules[rule.selector] = rule.test  ==> dấu bằng thể hiện sự gán và dễ bị ghi đè

        // - gọi id mà thực thiện rules
        var inputElements = formElement.querySelectorAll(rule.selector)
        Array.from(inputElements).forEach(function (inputElement) {
            // - dùng khi xảy ra sự kiện blur

            // - khi blur ra ngoài thì nó sẽ thực hiện xử lí lỗi nếu có
            inputElement.onblur = function () {
                Validate(inputElement, rule)
            }

            // *xử lí khi người dùng nhập vào input
            inputElement.oninput = function () {
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

                errorElement.innerText = '';
                getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                // Xóa style lỗi nếu hợp lệ
                inputElement.style.border = '';
                errorElement.style.color = '';
            }
        })

        // // nếu là cái cái id này 
        // if (inputElement) {

        // }


    })

}















//*** Tạo ra các phương thức của rules */

// - định nghĩa rules
// - selector là con của rules là những cái id gọi tới isRequired
// + ví dụ selector của isRequired sẽ là #fullName, #email

// - khi có lỗi thì trả ra mesg lỗi
// - không có lỗi thì trả về undefined

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        //  function test(){} ==> dùng để kiểm tra
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập vào trường này!'

        }
    }

}

// + ví dụ selector của isRequired sẽ là #email
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        //  function test(){} ==> dùng để kiểm tra
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            // nếu cái giá trị của chuỗi là email thì trả về undefined, nếu không thì hiển thị message
            return regex.test(value) ? undefined : message || 'Trường này phải là email!'
        }
    }


}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= 5 ? undefined : message || `Vui lòng nhập ít nhất ${min} ký tự`
        }
    }

}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác!'

        }
    }

}