$(function() {
    function i() {
        $(this).siblings(".Rese_db_dl_yzxs ").css("display ", "none ");
        $(this).parent().siblings(".Rese_db_dl_yzxs ").css("display ", "none ")
    }
    sendSmsCodeBtn({
        GLVar: "btnSendCodeOrder ",
        btnId: "#btnSendCodeOrder ",
        formId: "#rg_nrfromOrder ",
        url: basePath + "v / sendorder.htm ",
        valid: function() {
            return ! 0
        },
        ok: function() {
            alert(prompts.sms_code_send_ok)
        },
        notok: function(b) {
            alert(b.msg)
        },
        error: function() {
            alert(prompts.sms_code_send_failed)
        }
    });
    $("input ").each(function() {
        var b = "#" + $(this).attr("id ");
        $(b).focus({
            tipTag: b
        },
        i)
    });
    $("select ").each(function() {
        var b = "#" + $(this).attr("id ");
        $(b).focus({
            tipTag: b
        },
        i)
    });
    var q = !0;
    $("#Rese_db_qryy_btn ").click(function() {//TODO Rese_db_qryy_btn
        if (q) {
            var b = $(".resedl_bgcolor: contains('\u5426')").attr("href ");
            b != 1 && (b = 2);
            var r = $(".resedl_bgcolor2: contains('\u5426')").attr("href ");
            r != 1 && (r = 2);
            var j = $(".ek_bgcolor2: contains('\u7537')").attr("href ");
            j != 1 && (j = 2);
            var g = $(".ek_bgcolor: contains('\u5176\u4ed6')").attr("href ");
            g != 2 && (g = 1);
            var k = $("input[name = 'hzr'] : checked ").val();
            if (typeof k == "undefined " || k == null || k == "") alert("\u8bf7\u9009\u62e9\u5c31\u8bca\u4eba ! ");
            else {
                var i = $("#Rese_db_dl_bah ").val(),
                f = $("#Rese_db_dl_jzk ").val(),
                v = $("#hospitalId ").val();
                if (v == 17) {
                    var h = RegExp(/^(T00|000)[0-9]{7}$/);
                    if (typeof f != "undefined " && f != "" && !h.test(f.trim())) {
                        alert("\u5c31\u8bca\u5361\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e\uff01 ");
                        return
                    }
                } else if (h = /^[A-Za-z0-9]+$/, typeof f != "undefined " && f != "" && !h.test(f.trim())) {
                    alert("\u5c31\u8bca\u5361\u53f7\u53ea\u80fd\u8f93\u5165\u5b57\u6bcd\u548c\u6570\u5b57 ! ");
                    return
                }
                var h = $("#Rese_db_dl_ybk ").val(),
                w = $("#Rese_db_dl_idselect ").val(),
                s = $("#Rese_db_dl_dxyzid ").val(),
                x = $("#dutySourceId ").val(),
                y = $("#departmentId ").val(),
                z = $("#doctorId ").val(),
                l = $("#Rese_db_dl_qsxm ").val(),
                m = $("#Rese_db_dl_hrxm_ek ").val(),
                n = $("#Rese_db_dl_hrzjh_ek ").val(),
                d = $("#Rese_db_dl_hrsf_ek ").val(),
                e;
                if (g == 1 && d != null) e = IdCard(d, 1),
                j = IdCard(d, 2);
                else {
                    e = $("#sel_year ").val();
                    var o = $("#sel_month ").val(),
                    p = $("#sel_day ").val();
                    e = e == null || e == "" || e == void 0 || o == null || o == "" || o == void 0 || p == null || p == "" || p == void 0 ? "": e + " - " + o + " - " + p
                }
                var c = !0,
                t, u = $("#childCardType ").val() == 2 ? !0 : !1;
                $(" [item_flag = 4]").each(function() {
                    $(this).attr("id ") == "Rese_db_dl_qsxm " && (l == null || l == "" ? ($("#kinshipName_span ").html("\u4eb2\u5c5e\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a "), $("#kinshipName_span ").css("display ", "block "), c = !1) : Gvali.reg.isTrueName.test(l) || ($("#kinshipName_span ").html("\u8bf7\u8f93\u5165\u4eb2\u5c5e\u771f\u5b9e\u59d3\u540d "), $("#kinshipName_span ").css("display ", "block "), c = !1));
                    $(this).attr("id ") == "Rese_db_dl_hrxm_ek " && (m == null || m == "" ? ($("#childrenName_span ").html("\u60a3\u513f\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a "), $("#childrenName_span ").css("display ", "block "), c = !1) : Gvali.reg.isTrueName.test(m) || ($("#childrenName_span ").html("\u8bf7\u8f93\u5165\u60a3\u513f\u771f\u5b9e\u59d3\u540d "), $("#childrenName_span ").css("display ", "block "), c = !1));
                    g == 1 && d != null ? $(this).attr("id ") == "Rese_db_dl_hrsf_ek " && (d == null || d == "" ? ($("#childrenIdNo_span1 ").html("\u60a3\u513f\u8eab\u4efd\u8bc1\u53f7\u4e0d\u80fd\u4e3a\u7a7a "), $("#childrenIdNo_span1 ").css("display ", "block "), c = !1) : Gvali.isIdCard(d) || ($("#childrenIdNo_span1 ").html("\u8eab\u4efd\u8bc1\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e "), $("#childrenIdNo_span1 ").css("display ", "block "), c = !1), t = d, u = !1) : g == 2 && $(this).attr("id ") == "Rese_db_dl_hrzjh_ek " && (n == null || n == "" ? ($("#childrenIdNo_span2 ").html("\u60a3\u513f\u8bc1\u4ef6\u53f7\u4e0d\u80fd\u4e3a\u7a7a "), $("#childrenIdNo_span2 ").css("display ", "block "), c = !1) : n.length <= 2 && ($("#childrenIdNo_span2 ").html("\u8bc1\u4ef6\u53f7\u957f\u5ea6\u5927\u4e8e2\u4f4d "), $("#childrenIdNo_span2 ").css("display ", "block "), c = !1), t = n, u = !0);
                    if (($("#sel_year ").val() <= 0 || $("#sel_month ").val() <= 0 || $("#sel_day ").val() <= 0) && u) {
                        $("#sel_year ");
                        var a = $("#sel_year ").parent().siblings(".Rese_db_dl_yzxs ");
                        $(a).css("display ", "block ");
                        c = !1
                    } else if ($(this).attr("id ") == "Rese_db_dl_dxyzid " && (s == null || s == "")) $("#yzm_span ").html("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a "),
                    $("#yzm_span ").css("display ", "block "),
                    c = !1
                });
                if (c == !1) return ! 1;
                $.ajax({
                    type: "post ",
                    url: basePath + "order / confirm.htm ",
                    data: {
                        dutySourceId: x,
                        hospitalId: v,
                        departmentId: y,
                        doctorId: z,
                        patientId: k,
                        medicalRecordId: i,
                        hospitalCardId: f,
                        medicareCardId: h,
                        reimbursementType: w,
                        smsVerifyCode: s,
                        kinshipName: l,
                        isFirstTime: b,
                        hasPowerHospitalCard: r,
                        childrenName: m,
                        cidType: g,
                        childrenIdNo: t,
                        childrenBirthday: e,
                        childrenGender: j,
                        isAjax: !0
                    },
                    dataType: "json ",
                    beforeSend: function() {
                        $("#Rese_db_qryy_btn ").attr("disabled ", "disabled ");
                        q = !1
                    },
                    complete: function() {
                        $("#Rese_db_qryy_btn ").removeAttr("disabled ");
                        q = !0
                    },
                    success: function(a) {
                        if (a.hasError) alert(a.msg);
                        else {
                            $("#Rese_yytj ").css("display ", "block ");
                            $("#Rese_yytj_p ").html("\u60a8\u5df2\u6210\u529f\u9884\u7ea6 " + a.data[0].hospitalName + "" + a.data[0].departmentName);
                            $("#Rese_yytj dd ").eq(0).html(a.data[0].patientName);
                            var b = a.data[0].idTypeName;
                            $("#Rese_yytj dd ").eq(1).html(b);
                            $("#Rese_yytj dd ").eq(2).html(a.data[0].patientIdNo);
                            $("#Rese_yytj dd ").eq(3).html(a.data[0].recognitionCode);
                            b = a.data[0].ampm;
                            $("#Rese_yytj dd ").eq(4).html(a.data[0].dutyDate + b);
                            $("#Rese_yytj dd ").eq(5).html(a.data[0].offerTime);
                            $("#Rese_yytj dd ").eq(6).html(a.data[0].offerAddress);
                            a.data[0].needNs && (a.data[0].numericalSequence != null && a.data[0].numericalSequence != "" ? $("#Rese_yytj dl ").eq(6).after(" < dl > <dt > \u987a\u3000\u5e8f\u3000\u53f7\uff1a < /dt><dd>" + a.data[0].numericalSequence + "</dd > </dl>") : a.data[0].temporalSequence != null && a.data[0].temporalSequence != "" && $("#Rese_yytj dl").eq(6).after("<dl><dt>\u987a\u3000\u5e8f\u3000\u53f7\uff1a</dt > <dd > " + a.data[0].temporalSequence + " < /dd></dl > "));
                            a.data[0].needTs && a.data[0].temporalSequence != null && a.data[0].temporalSequence != "" && $(".Rese_yytj_p2 ").before(" < dl > <dt > \u5019\u8bca\u65f6\u6bb5\uff1a < /dt><dd>" + a.data[0].temporalSequence + "</dd > </dl>")
                        }
                    }
                })
            }
        } else alert("\u8bf7\u52ff\u91cd\u590d\u63d0\u4ea4\uff01")
    })
});
