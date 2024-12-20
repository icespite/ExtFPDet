﻿$.extend({
    wezhan: {
        isEmail: function (source) {
            var reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/i;
            return reg.test(source);
        },
        isMobile: function (source) {
            var reg = /^1(1|2|3|4|5|6|7|8|9)\d{9}$/;
            var reg_hk = /^(852){0,1}\d{8}$/;
            return reg.test(source) || reg_hk.test(source);
        },
        // 判断浮点型  
        isFloat: function (value, element) {
            return /^[-\+]?\d+(\.\d+)?$/.test(value);
        },
        // 匹配integer
        isInteger: function (value, element) {
            return parseInt(value) == value;
        },
        // 判断数值类型，包括整数和浮点数
        isNumber: function (value, element) {
            return /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
        },
        // 只能输入[0-9]数字
        isDigits: function (value, element) {
            return /^\d+$/.test(value);
        },
        // 判断中文字符 
        isChinese: function (value, element) {
            return /^[\u0391-\uFFE5]+$/.test(value);
        },
        // 判断英文字符 
        isEnglish: function (value, element) {
            return /^[A-Za-z]+$/.test(value);
        },
        // 电话号码验证    
        isPhone: function (value, element) {
            var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
            return (tel.test(value));
        },
        // 匹配qq      
        isQQ: function (value, element) {
            var qq = /^[1-9]\d{4,12}$/;
            return qq.test(value);
        },
        // 邮政编码验证    
        isZipCode: function (value, element) {
            var zip = /^[0-9]{6}$/;
            return (zip.test(value));
        },
        // 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。      
        isPwd: function (value, element) {
            return /^[a-zA-Z]\\w{6,12}$/.test(value);
        },
        // 身份证号码验证
        isIdCardNo: function (value, element) {
            //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;   
            return isIdCardNo(value);
        },
        // IP地址验证   
        isIP: function (value, element) {
            return /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);
        },
        // 字符验证，只能包含中文、英文、数字、下划线等字符。    
        isCanPostString: function (value, element) {
            return /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
        },
        // 匹配中文(包括汉字和字符) 
        isChineseChar: function (value, element) {
            return /^[\u0391-\uFFE5]+$/.test(value);
        },
        // 判断是否包含中英文特殊字符，除英文"-_"字符外
        isContainsSpecialChar: function (value, element) {
            var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
            return !reg.test(value);
        },
        isRightFullString: function (value, element) {
            var reg = RegExp(/^[a-zA-Z0-9\u4e00-\u9fa5-_\s]+$/);
            return reg.test(value);
        },
        isEmailOrMobile: function (value, element)
        {
            return $.wezhan.isEmail(value) || $.wezhan.isMobile(value);
        }
    }
});
