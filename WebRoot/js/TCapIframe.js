! function(t) {
	function e(t, e) {
		var i = [];
		if("getElementsByClassName" in document) i = t.getElementsByClassName(e);
		else
			for(var n = t.getElementsByTagName("*"), s = 0; s < n.length; s++) {
				var r = n[s].className;
				r.indexOf(e) != -1 && i.push(n[s])
			}
		return i
	}

	function i(t, e, i) {
		var n = 0,
			s = 0,
			r = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		return n = (o - i) / 2, s = (r - e) / 2, N(t, {
			top: n + "px",
			left: s + "px"
		})
	}

	function n() {
		if(S(6) || S(7) || S(8) || S(9) || E || I || T) return !0
	}

	function s(t, e, i, n) {
		try {
			return t.insertRule ? t.insertRule(e + "{" + i + "}", n) : t.addRule(e, i, n)
		} catch(s) {}
	}

	function r(t, e) {
		var i = t.className,
			n = "" != i ? " " : "",
			s = i + n + e;
		t.className = s
	}

	function o(t, e) {
		var i = " " + t.className + " ";
		i = i.replace(/(\s+)/gi, " ");
		var n = i.replace(" " + e + " ", " ");
		n = n.replace(/(^\s+)|(\s+$)/g, ""), t.className = n
	}

	function a(t) {
		var e = document.createElement("link");
		e.rel = "stylesheet", e.type = "text/css", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
	}

	function c(t) {
		var e = "#4886ff";
		if(t) {
			var i = decodeURIComponent(t),
				n = /^[0-9a-fA-F]{6}$/g;
			i && i.indexOf("#") == -1 && 6 == i.length && n.test(i) && (e = "#" + i)
		}
		return e
	}

	function d(t, e, i) {
		if(t.indexOf("?") != -1) {
			var n = new RegExp("(\\?|&" + e + ")=[^&]*");
			t = n.test(t) ? t.replace(n, "$1=" + i) : t + "&" + e + "=" + i
		} else t = t + "?" + e + "=" + i;
		return t
	}

	function h(t, e) {
		for(var i in e) t = d(t, encodeURIComponent(i), encodeURIComponent(e[i]));
		return t
	}

	function p(t) {
		return document.createElement(t)
	}

	function l(t) {
		return _ || (_ = this.init(t))
	}

	function u() {
		return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}

	function f() {
		return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
	}

	function g(t) {
		var e, i, n = 0,
			s = 0,
			r = t.getPTPpos(),
			o = t.getPTPsize(),
			a = u(),
			c = f(),
			d = 0;
		return d = r[1] - c, d >= t.sizeSC.height / 2 && a - d - o[1] / 2 >= t.sizeSC.height / 2 ? (n = r[1] + o[1] / 2 - t.sizeSC.height / 2, s = r[0] + 45, e = "top: 50%;", i = "top: 50%;") : d <= t.sizeSC.height / 2 ? (n = r[1] - d, s = r[0] + 45, e = "top: " + (d + o[1] / 2) / t.sizeSC.height * 100 + "%;", i = e) : a - d >= o[1] && a - d - o[1] / 2 <= t.sizeSC.height / 2 ? (n = a - t.sizeSC.height + c, s = r[0] + 45, e = "top: " + (t.sizeSC.height - (a - d - o[1] / 2)) / t.sizeSC.height * 100 + "%;", i = e) : a - d <= o[1] ? (n = r[1] + o[1] - t.sizeSC.height, s = r[0] + 45, e = "top: " + (t.sizeSC.height - o[1] / 2) / t.sizeSC.height * 100 + "%;", i = e) : (n = r[1] + o[1] / 2 - t.sizeSC.height / 2, s = r[0] + 45, e = "top: 50%;", i = "top: 50%;"), [n, s, e, i]
	}

	function m(t) {
		t.src = "about:blank", t.parentNode && t.parentNode.removeChild(t), t.onload = null
	}

	function y(t, e) {
		if(t = parseInt(t, 10), e = parseInt(e, 10), 1 == t || 2 == t) switch(e) {
			case 1:
				return D.click;
			case 4:
				return D.piece;
			case 7:
				return D.coordinate;
			case 8:
				return D.slide;
			case 9:
				return D.slidePuzzle;
			case 10:
				return D.new_slidePuzzle;
			case 11:
				return D.vtt;
			case 12:
				return D.f_limit;
			case 13:
				return D.cdn_slidePuzzle;
			case 14:
				return D.new_slidePuzzle;
			case 15:
				return D.new_slidePuzzle
		}
		return D["char"]
	}

	function v(t, e) {
		return !(1 != t && 2 != t || 10 != e && 11 != e && 12 != e && 13 != e && 14 != e && 15 != e)
	}

	function w(t, e) {
		return !(1 != t && 2 != t || 10 != e && 11 != e && 13 != e && 14 != e && 15 != e)
	}

	function b(t, e) {
		return(1 == t || 2 == t) && 12 == e
	}! function() {
		var t = ["c2", "c3", "c11", "c12", "c21", "c22", "c23"],
			e = {
				"zh-cn": ["安全验证", "验证成功", "返回", "验证中...", "验证成功", "尝试太多了", "2s后自动为您刷新验证码"],
				"zh-hk": ["安全驗證", "驗證成功", "返回", "驗證中⋯", "驗證成功", "錯誤次數太多", "驗證碼將於 2 秒後自動更新"],
				"zh-tw": ["安全驗證", "驗證成功", "返回", "驗證中...", "驗證成功", "嘗試次數太多", "2秒後自動為您重新整理驗證碼"],
				en: ["Security Verification", "Verification is successful", "Back", "Verifying...", "Verification is successful", "Refreshing too often", "Verification Code will refresh in 2 sec."],
				ar: ["التحقق من الحماية", "نجاح التحقق", "عودة", "جاري التحقق...", "نجاح التحقق", "كثرة التحديث", "سيتم تحديث كود التحقق خلال 2 ثانية."],
				my: ["လံုၿခံဳေရးအတည္ျပဳျခင္း", "အတည္ျပဳမႈ ေအာင္ျမင္ပါသည္", "ေနာက္သို႔", "အတည္ျပဳေနသည္...", "အတည္ျပဳမႈ ေအာင္ျမင္ပါသည္", "မၾကာခနျပန္ဖြင့္ေနရသည္။", "2 စကၠန္႔အတြင္း အတည္ျပဳရန္Code အသစ္ေပၚပါမည္"],
				fr: ["Vérification de sécurité", "La vérification est réussie", "Retour", "Vérification...", "La vérification est réussie", "Trop actualisé", "Le code de vérification s'actualisera dans 2 sec."],
				de: ["Sicherheitsbestätigung", "Verifizierung erfolgreich", "Zurück", "Wird verifziert …", "Verifizierung erfolgreich", "Zu oft aktualisiert", "Verifizierungscode wird in 2 Sekunden aktualisiert."],
				he: ["אימות אבטחה", "האימות עבר בהצלחה", "חזרה", "מאמת", "האימות עבר בהצלחה", "מרענן לעתים קרובות מידי", "קוד האימות יתחדש בתוך 2 שניות"],
				hi: ["सुरक्षा सत्यापन", "सत्यापन सफल", "पीछे", "सत्यापन जारी...", "सत्यापन सफल", "अक्सर रीफ्रेश हो रहा है।", "सत्यापन कोड 2 सेक. में रीफ्रेश होगा"],
				id: ["Verifikasi Keamanan", "Verifikasi berhasil", "Kembali", "Memverifikasi...", "Verifikasi berhasil", "Terlalu sering merefresh.", "Kode Verifikasi akan di-refresh dalam 2 detik."],
				it: ["Verifica di sicurezza", "Verifica completata", "Indietro", "Verifica in corso", "Verifica completata", "Troppo frequente", "Il codice di verifica sarà aggiornato tra 2 secondi"],
				ja: ["セキュリティ認証", "認証が正常に完了", "戻る", "認証中…", "認証が正常に完了", "更新頻度が高すぎます", "認証コードは2秒後にリフレッシュされます。"],
				ko: ["보안 인증", "인증 성공", "뒤로가기", "인증 중...", "인증 성공", "새로고침이 너무 잦습니다", "인증 코드가 2초 후에 새로고침 됩니다."],
				lo: ["ການຢືນຢັນຄວາມປອດໄພ", "ການຢືນຢັນໄດ້ສຳເລັດແລ້ວ", "ກັບຄືນ", "ກຳລັງຢືນຢັນ...", "ການຢືນຢັນໄດ້ສຳເລັດແລ້ວ", "ຟື້ນຟູຄືນເລື້ອຍໆ", "ລະຫັດຢືນຢັນຈະມີການຟື້ນຟູຄືນໃຫມ່ພາຍໃນ 2 ວິນາທີ"],
				ms: ["Pengesahan Keselamatan", "Pengesahan berjaya", "Kembali", "Mengesahkan...", "Pengesahan berjaya", "Terlalu kerap segar semula", "Kod Pengesahan akan disegar semula dalam 2 saat"],
				pl: ["Weryfikacja bezpieczeństwa", "Weryfikacja powiodła się", "Wstecz", "Weryfikowanie...", "Weryfikacja powiodła się", "Za często odświeżasz", "Kod weryfikacyjny zostanie odświeżony za 2 s."],
				pt: ["Verificação de Segurança", "Verificado com sucesso", "Voltar", "Verificando...", "Verificado com sucesso", "Atualizando muito", "Código de Verificação será atualizado em 2 seg."],
				ru: ["Проверка в целях безопасности", "Проверка пройдена", "Назад", "Проверка...", "Проверка пройдена", "Слишком частое обновление", "Проверочный код будет обновлен через 2 сек."],
				es: ["Verificación de seguridad", "Verificación correcta", "Atrás", "Verificando...", "Verificación correcta", "Actualización muy frecuente", "El código se actualizará en 2 segundos."],
				th: ["การยืนยันความปลอดภัย", "การยืนยันสำเร็จแล้ว", "กลับ", "กำลังยืนยัน...", "การยืนยันสำเร็จแล้ว", "รีเฟรชบ่อยเกินไป", "รหัสการยืนยันจะรีเฟรชภายใน 2 วินาที"],
				tr: ["Güvenlik Doğrulaması", "Doğrulama başarılı", "Geri", "Doğrulanıyor", "Doğrulama başarılı", "Yenilemeler çok sık", "Doğrulama Kodu 2 sn. sonra yenilenecek."],
				vi: ["Xác minh bảo mật", "Xác minh thành công", "Quay lại", "Đang xác minh...", "Xác minh thành công", "Làm mới quá thường xuyên", "Mã xác minh sẽ được làm mới sau 2 giây."]
			};
		e.zh = e["zh-cn"], e.iw = e.he, e["in"] = e.id;
		var i = {
				2052: "zh-cn",
				1028: "zh-hk",
				1033: "en"
			},
			n = "zh";
		/MicroMessenger/.test(navigator.userAgent) && (n = "en");
		var s = function() {
				var t;
				return t = navigator.languages && navigator.languages[0] ? navigator.languages[0] : navigator.language || navigator.userLanguage, t ? t.toLowerCase().replace(/_/, "-") : null
			}(),
			r = {
				rightToLeft: !1
			};
		r.total = e, r.init = function(o) {
			var a;
			a = o ? /^\d+$/.test(o) ? i[o] || s || n : o.toLowerCase().replace(/_/, "-") : s || n;
			var c = a;
			/-/.test(a) && (c = a.split("-")[0]), e[a] || (a = e[c] ? c : n);
			for(var d = e[a], h = 0; h < t.length; h++) r[t[h]] = void 0 === d[h] ? e[n][h] : d[h];
			"ar" !== a && "he" !== a && "iw" !== a || (r.rightToLeft = !0), r.currentLanguage = a
		}, r.init(), window.captchaSimple = r
	}();
	var _, C = window.captchaSimple,
		x = function() {
			var t = 1,
				e = function(e) {
					return e = /subsid=\d+/.test(e) ? e.replace(/subsid=\d+/g, "subsid=" + t) : e.indexOf("?") >= 0 ? e + "&subsid=" + t : e + "?subsid=" + t, t++, e
				};
			return e.reset = function() {
				t = 1
			}, e.set = function(e) {
				e && (t = e)
			}, e
		}(),
		S = function(t) {
			var e = document.createElement("b");
			return e.innerHTML = "<!--[if IE " + t + "]><i></i><![endif]-->", e.getElementsByTagName("i") && 1 === e.getElementsByTagName("i").length
		},
		z = !!window.ActiveXObject,
		E = z && 7 == document.documentMode,
		I = z && 8 == document.documentMode,
		T = z && 9 == document.documentMode,
		k = {
			preTrigerPoint: "preTrigerPoint",
			securityCode: "securityCode"
		},
		P = function(t, e) {
			return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e]
		},
		F = function(t) {
			return function(e) {
				return Object.prototype.toString.call(e) == "[object " + t + "]"
			}
		},
		B = function(t) {
			var e = window.document.getElementById(t);
			return !!e && (e.parentNode.removeChild(e), !0)
		},
		O = F("Object"),
		R = F("Function"),
		N = function(t, e) {
			if(t && e) {
				if(O(e)) {
					for(var i in e) t.style[i] = e[i];
					return e
				}
				return P(t, e)
			}
		},
		H = function(t) {
			if("undefined" != typeof t.offsetParent) {
				for(var e = 0, i = 0; t; t = t.offsetParent) {
					var n = P(t, "borderLeftWidth");
					n = n && n.indexOf("px") > -1 ? parseInt(n, 10) : 0;
					var s = P(t, "borderTopWidth");
					s = s && s.indexOf("px") > -1 ? parseInt(s, 10) : 0, I && (n = s = 0), e += t.offsetLeft + n, i += t.offsetTop + s
				}
				return [e, i]
			}
			return [t.x, t.y]
		},
		L = function(t) {
			var e = N(t, "width"),
				i = N(t, "height");
			return [parseInt(e, 10), parseInt(i, 10)]
		},
		W = function(t, e, i) {
			i = i || !1;
			var n = {};
			for(var s in e) t[s] = e[s];
			if(i) {
				for(var s in t) n[s] = t[s];
				return n
			}
			return t
		},
		V = function(t) {
			var e = window.document.getElementsByTagName("script")[0],
				i = window.document.createElement("script"),
				n = t.callback || "callback",
				s = "_aq_" + Math.floor(1e6 * Math.random()),
				r = window[s] = t.success || function() {},
				o = t.url,
				a = {};
			a[n] = s, t.data && (a = W(a, t.data)), o = h(o, a), i.async = t.async || !0, i.src = x(o), i.onload = function() {
				i && e.parentNode && e.parentNode.removeChild(i), r = null
			}, i.onerror = t.error || function() {}, e.parentNode.insertBefore(i, e)
		},
		D = {
			"char": {
				btn_width: 298,
				height: 152,
				width: 300
			},
			click: {
				btn_width: 326,
				height: 483,
				width: 328
			},
			coordinate: {
				btn_width: 298,
				width: 300,
				height: 277
			},
			piece: {
				height: 516,
				btn_width: 362,
				width: 366
			},
			slide: {
				height: 260,
				width: 300,
				btn_width: 298
			},
			slidePuzzle: {
				height: 232,
				width: 300,
				btn_width: 298
			},
			new_slidePuzzle: {
				height: 360,
				width: 360,
				btn_width: 298
			},
			cdn_slidePuzzle: {
				height: 360,
				width: 360,
				btn_width: 298
			},
			vtt: {
				height: 360,
				width: 360,
				btn_width: 298
			},
			f_limit: {
				height: 230,
				width: 300,
				btn_width: 298
			},
			"default": {
				btn_width: 350
			}
		},
		M = ['content: "";', "height: 0;", "width: 0;", "position: absolute;", "left: -17px;", "top: 50%;", "margin-top: -9.5px;", "border-left: 9px solid transparent;", "border-top: 9px solid transparent;", "border-bottom: 9px solid transparent;", "border-right: 9px solid rgba(63, 63, 63, 0.1);", "z-index: 0;"],
		A = ['content: "";', "height: 0;", "width: 0;", "position: absolute;", "left: -17px;", "top: 50%;", "margin-top: -9.5px;", "border-left: 9px solid transparent;", "border-top: 9px solid transparent;", "border-bottom: 9px solid transparent;", "border-right: 9px solid #fff;", "z-index: 1;"],
		j = {
			minHeight: 40,
			minWidth: 230
		},
		J = {
			height: 40,
			width: 300
		},
		K = {
			height: 300,
			width: 400
		},
		U = {
			height: 160,
			width: 160
		},
		q = {
			type: "point",
			ele: document.body,
			src: "",
			uin: "",
			capcd: "",
			lang: "2052",
			fb: 1,
			startFn: function() {},
			endFn: function() {}
		},
		G = {
			ERR_CODE_SUC: 0,
			ERR_CODE_BACK: 1,
			ERR_CODE_CLOSE: 2
		};
	l.prototype = {
		init: function(t) {
			return this.opts = W(q, t || {}), this.initOptions(), this.listenFunc = [], this.readyFunc = [], this.msg = new TCapMsg("parent"), this.initListener(), this.create(), this.sess = "", this
		},
		initOptions: function() {
			this.ele = this.opts.ele, this.src = this.opts.src, this.ticket = "", this.randstr = "", this.sizeSC = W({}, K), this.securityIframe = "", this.opts.firstvrytype && 2 == this.opts.firstvrytype && (this.src = this.opts.slide_src)
		},
		getSrc: function() {
			var t = this;
			V({
				url: h(t.opts.s_type, {
					uid: this.opts.uin,
					cap_cd: this.opts.capcd,
					lang: this.opts.lang,
					color: this.opts.themeColor
				}),
				success: function(e) {
					y(e.capclass, e.subcapclass);
					captype = e.capclass, subcaptype = e.subcapclass;
					var i = t.opts.domain + "/" + e.src_1 + t.opts.s_type_suffix + "&lang=" + t.opts.lang + "&sess=" + e.sess + "&theme=" + t.opts.theme + "&sid=" + e.sid;
					i = h(i, {
						showtype: "popup",
						fb: t.opts.fb,
						forcestyle: t.opts.forcestyle,
						color: t.opts.themeColor
					});
					var n = window.document.getElementById("tcaptcha_popup");
					n.src = x(i)
				}
			})
		},
		create: function() {
			x.reset();
			var t = this;
			switch(this.opts.type) {
				case "point":
					t.createPreTrigerPoint();
					break;
				case "embed":
					if(window.document.getElementById("tcaptcha_load")) {
						var e = window.document.getElementById("tcaptcha_load");
						e.style.display = "none"
					}
					var i = (new Date).getTime(),
						n = 0,
						s = h(t.opts.s_type, {
							uid: this.opts.uin,
							cap_cd: this.opts.capcd,
							lang: this.opts.lang
						}),
						r = function(e) {
							if(e.ticket)
								for(var n = 0, s = t.listenFunc.length; n < s; n++) t.listenFunc[n]({
									ret: G.ERR_CODE_SUC,
									ticket: e.ticket,
									randstr: e.randstr
								});
							else {
								var r = y(e.capclass, e.subcapclass);
								captype = e.capclass, subcaptype = e.subcapclass, t.sess = e.sess;
								var o = t.opts.domain + "/" + e.src_1 + t.opts.s_type_suffix + "&sess=" + e.sess + "&theme=" + t.opts.theme + "&sid=" + e.sid;
								o = h(o, {
									noBorder: "noborder",
									fb: t.opts.fb,
									forcestyle: t.opts.forcestyle
								});
								var a = (new Date).getTime();
								t.prehandleLoadTime = a - i, t.createIframeStart = a, t.createSecurityCode(x(o), r, captype, subcaptype, t.opts.ele)
							}
						},
						o = function() {
							V({
								url: s,
								success: r,
								error: function() {
									if(n++, n < 2) o();
									else
										for(var e = 0, i = t.listenFunc.length; e < i; e++) t.listenFunc[e]({
											ret: G.ERR_CODE_SUC,
											ticket: Math.random().toString(36).substr(2),
											randstr: "@" + Math.random().toString(36).substr(2)
										})
								}
							})
						};
					o();
					break;
				case "popup":
					if(t.opts.tcaptchaFlag) {
						var a = p("div");
						a.className = "t-mask", a.id = "t_mask", window.document.body.appendChild(a), t.createSmartVerify(document.body)
					}
					if(window.document.getElementById("tcaptcha_load")) {
						var e = window.document.getElementById("tcaptcha_load");
						e.style.display = "none"
					}
					var i = (new Date).getTime(),
						n = 0,
						r = function(e) {
							var n = (new Date).getTime();
							if(t.prehandleLoadTime = n - i, t.createIframeStart = n, e.ticket)
								if(t.opts.tcaptchaFlag) setTimeout(function() {
									t.changeVerifyType(), setTimeout(function() {
										B("t_verify"), B("t_mask");
										for(var i = 0, n = t.listenFunc.length; i < n; i++) t.listenFunc[i]({
											ret: G.ERR_CODE_SUC,
											ticket: e.ticket,
											randstr: e.randstr
										})
									}, 1e3)
								}, 1e3);
								else
									for(var s = 0, r = t.listenFunc.length; s < r; s++) t.listenFunc[s]({
										ret: G.ERR_CODE_SUC,
										ticket: e.ticket,
										randstr: e.randstr
									});
							else {
								var o = y(e.capclass, e.subcapclass);
								captype = e.capclass, subcaptype = e.subcapclass;
								var a = t.opts.domain + "/" + e.src_1 + t.opts.s_type_suffix + "&sess=" + e.sess + "&theme=" + t.opts.theme + "&sid=" + e.sid;
								a = h(a, {
									showtype: "popup",
									fb: t.opts.fb,
									forcestyle: t.opts.forcestyle
								}), a = x(a), 1 == v(captype, subcaptype) ? w(captype, subcaptype) && t.opts.tcaptchaFlag ? setTimeout(function() {
									t.enlargeVerifyType(window.document.getElementById("t_verify"), o.width, o.height), t.createSecurityCode(a, {
										width: o.width,
										height: o.height
									}, captype, subcaptype, document.body, t.opts.tcaptchaFlag)
								}, 350) : t.createSecurityCode(a, {
									width: o.width,
									height: o.height
								}, captype, subcaptype, document.body) : t.createSecurityCode(a, {
									width: o.width,
									height: o.height + 40
								}, captype, subcaptype, document.body)
							}
						},
						s = h(t.opts.s_type, {
							uid: this.opts.uin,
							cap_cd: this.opts.capcd,
							lang: this.opts.lang,
							random: Math.random()
						}),
						o = function() {
							V({
								url: s,
								success: r,
								error: function() {
									if(n++, n < 2) o();
									else
										for(var e = 0, i = t.listenFunc.length; e < i; e++) t.listenFunc[e]({
											ret: G.ERR_CODE_SUC,
											ticket: Math.random().toString(36).substr(2),
											randstr: "@" + Math.random().toString(36).substr(2)
										})
								}
							})
						};
					o()
			}
		},
		createPreTrigerPoint: function() {
			this.wrap = "", this.preTrigerPoint && this.nullIframe(!0);
			var t = document.createElement("div");
			t.id = "loading_animation";
			var e = this.opts.htdoc_path + "/loading_grey.gif",
				i = document.createElement("iframe");
			i.setAttribute("frameborder", "0", 0), i.setAttribute("border", "0"), i.marginheight = 0, i.marginwidth = 0, i.setAttribute("marginheight", "0", 0), i.setAttribute("marginwidth", "0", 0), i.scrolling = "no";
			var n = P(this.ele, "width"),
				s = P(this.ele, "height"),
				r = 0;
			n && "auto" != n ? parseInt(n, 10) < j.minWidth ? (this.clientW = j.minWidth + "px", r = j.minWidth - 2 + "px") : (this.clientW = n, r = parseInt(n, 10) - 2 + "px") : (this.clientW = "100%", r = I ? "99%" : "100%"), !s || "auto" == s || parseInt(s, 10) < j.minHeight ? this.clientH = j.minHeight + "px" : this.clientH = s;
			var o = {
				width: this.clientW,
				height: this.clientH,
				border: "1px solid #e7e7e7",
				position: "relative",
				borderRadius: "2px",
				lineHeight: this.clientH,
				boxSizing: "border-box",
				background: "url(" + e + ") center no-repeat"
			};
			N(t, o);
			var a = {
				width: r,
				height: parseInt(this.clientH, 10) - 2 + "px",
				border: "none",
				position: "relative",
				minHeight: j.minHeight - 2 + "px",
				minWidth: j.minWidth - 2 + "px",
				zIndex: 10
			};
			if(this.opts.firstvrytype && 2 == this.opts.firstvrytype && (this.clientW = J.width + "px", this.clientH = J.height + "px", a = {
					width: this.clientW,
					height: this.clientH,
					border: "none",
					position: "relative",
					minHeight: this.clientH,
					minWidth: this.clientW,
					zIndex: 10
				}), N(i, a), this.src) {
				this.opts.themeColor && (this.src = h(this.src, {
					color: this.opts.themeColor
				}));
				var c = 0;
				this.clientH.length > 2 && (c = this.clientH.substr(0, this.clientH.length - 2)), this.src = h(this.src, {
					uid: this.opts.uin,
					cap_cd: this.opts.capcd,
					height: c,
					lang: this.opts.lang,
					fb: this.opts.fb,
					theme: this.opts.theme,
					rnd: Math.floor(1e6 * Math.random()),
					forcestyle: this.opts.forcestyle
				}), i.src = this.src
			}
			this.preTrigerPoint = i, this.wrap = t, this.wrap.appendChild(this.preTrigerPoint), this.ele.appendChild(this.wrap), this.initPreTriggerPointTarget()
		},
		initListener: function() {
			var t = this;
			this.listenResize(), this.msg.listen(function(n) {
				try {
					var s = "string" == typeof n ? JSON.parse(n) : n;
					s = s.message
				} catch(a) {
					return
				}
				var c = 1e4;
				switch(s && s.type && (c = s.type), c) {
					case 0:
						return void t.collapsePreTriggerPoint();
					case 1:
						return void(s.size && t.setSCheight(parseInt(s.size.height, 10)));
					case 2:
						return void t.send2preTriggerPoint();
					case 3:
						if(B("tcaptcha_container"), B("tcaptcha_transform"), B("t_mask"), s.subsid && x.set(s.subsid), t.opts.startFn(), s && s.ticket) {
							t.ticket = s.ticket, t.randstr = s.randstr;
							for(var d = 0, p = t.listenFunc.length; d < p; d++) "embed" == t.opts.type && t.opts.keepOpen ? (t.listenFunc[d]({
								ret: 0,
								ticket: s.ticket,
								randstr: s.randstr
							}), t.opts.endFn()) : t.closeSecurityCode(function() {
								t.listenFunc[d]({
									ret: 0,
									ticket: s.ticket,
									randstr: s.randstr
								})
							});
							t.listenFunc.length || ("embed" == t.opts.type && t.opts.keepOpen ? t.opts.endFn() : t.closeSecurityCode());
							parseInt(t.clientW, 10) > j.minWidth ? parseInt(t.clientW, 10) : j.minWidth;
							if("point" == t.opts.type)
								if(s.noVerify) setTimeout(function() {
									var e = {
										border: "1px solid #42dd18"
									};
									N(window.document.getElementById("loading_animation"), e), t.send2preTriggerPoint(JSON.stringify({
										message: {
											type: "success"
										}
									}))
								}, 1e3);
								else {
									var l = {
										border: "1px solid #42dd18"
									};
									N(window.document.getElementById("loading_animation"), l), t.send2preTriggerPoint(JSON.stringify({
										message: {
											type: "success"
										}
									}))
								}
						} else {
							if(s && s.src) {
								var u = y(s.captype, s.subcaptype);
								t.createSecurityCode(x(s.src), u, s.captype, s.subcaptype, document.body)
							}
							t.securityIframe && t.setPosition(t.securityIframe)
						}
						return;
					case 4:
						return void t.send2securityCode(JSON.stringify({
							message: {
								type: s.task
							}
						}));
					case 5:
						return void t.send2preTriggerPoint(JSON.stringify({
							message: {
								type: s.task
							}
						}));
					case 6:
						if("embed" == t.opts.type && B("cap_iframe")) return;
						if(B("tcaptcha_container"), B("t_mask"), t.listenFunc.length)
							for(var d = 0, p = t.listenFunc.length; d < p; d++) t.closeSecurityCode(function() {
								t.listenFunc[d]({
									ret: G.ERR_CODE_CLOSE,
									ticket: "",
									randstr: ""
								})
							});
						else t.closeSecurityCode();
						return;
					case 7:
						var l = {
							height: s.size.height + "px",
							width: s.size.width + "px"
						};
						return N(t.securityIframe, l), void t.setPosition(t.securityIframe);
					case 8:
						return t.sess = s.sess, x.set(s.subsid), void V({
							url: h(t.opts.s_type, {
								uid: t.opts.uin,
								cap_cd: t.opts.capcd,
								lang: t.opts.lang,
								sess: t.sess
							}),
							success: function(e) {
								switch(t.opts.type) {
									case "embed":
										var n = y(e.capclass, e.subcapclass);
										1 != captype && 2 != captype || 10 != subcaptype && 13 != subcaptype && 14 != subcaptype && 15 != subcaptype || (n = {
											width: 300,
											height: 230,
											btn_width: 298
										}), t.sess = e.sess;
										var s = t.opts.domain + "/" + e.src_1 + t.opts.s_type_suffix + "&sess=" + e.sess + "&theme=" + t.opts.theme + "&sid=" + e.sid;
										s = h(s, {
											noBorder: "noborder",
											fb: t.opts.fb,
											forcestyle: t.opts.forcestyle
										}), t.replaceSccurityCode(x(s), n);
										break;
									case "popup":
										var n = y(e.capclass, e.subcapclass);
										t.sess = e.sess;
										var s = t.opts.domain + "/" + e.src_1 + t.opts.s_type_suffix + "&sess=" + e.sess + "&theme=" + t.opts.theme + "&sid=" + e.sid;
										s = h(s, {
											showtype: "popup",
											fb: t.opts.fb
										}), 1 == v(captype, subcaptype) ? t.replaceSccurityCode(x(s), n) : (window.document.getElementById("tcaptcha_transform") && i(window.document.getElementById("tcaptcha_transform"), n.width, n.height + 40), t.replaceSccurityCode(x(s), {
											width: n.width,
											height: n.height + 40
										}));
										break;
									case "point":
										var n = y(e.capclass, e.subcapclass),
											s = t.opts.domain + "/" + e.src_1 + t.opts.s_type_suffix + "&sess=" + e.sess + "&theme=" + t.opts.theme + "&sid=" + e.sid + "&firstvrytype=1";
										t.replaceSccurityCode(x(s), n);
										var r = window.document.getElementById("tcaptcha_container"),
											o = {
												width: n.width + "px",
												height: n.height + "px"
											};
										N(r, o), t.setDivPosition(r)
								}
							}
						});
					case 9:
						return window.document.getElementById("loading_animation") && setTimeout(function() {
							window.document.getElementById("loading_animation").style.background = "none"
						}, 100), void("point" == t.opts.type && t.send2preTriggerPoint(JSON.stringify({
							message: {
								type: "triggerSuccess"
							}
						})));
					case 10:
						if(B("t_verify"), t.readyFunc)
							for(var d = 0, p = t.readyFunc.length; d < p; d++) t.readyFunc[d] && t.readyFunc[d]();
						return;
					case 11:
						return void(t._div && (o(t._div, "shake"), setTimeout(function() {
							r(t._div, "shake")
						}, 200)));
					case 12:
						return void(t._div && o(t._div, "shake"));
					case 13:
						if("embed" == t.opts.type && B("cap_iframe") || B("tcaptcha_container"), B("tcaptcha_transform"), B("t_mask"), t.listenFunc.length)
							for(var d = 0, p = t.listenFunc.length; d < p; d++) t.closeSecurityCode(function() {
								t.listenFunc[d]({
									ret: G.ERR_CODE_CLOSE,
									ticket: "",
									randstr: ""
								})
							});
						else t.closeSecurityCode();
						return void(1 == s.neednotify && t.send2preTriggerPoint(JSON.stringify({
							message: {
								type: "closePopup"
							}
						})));
					case 14:
						return "point" == t.opts.type && t.send2preTriggerPoint(JSON.stringify({
							message: {
								type: "loadDone"
							}
						})), document.getElementById("tcaptcha_container") && (N(document.getElementById("tcaptcha_container"), {
							display: "block",
							zoom: 1
						}), setTimeout(function() {
							r(document.getElementById("tcaptcha_container"), "show"), N(t.securityIframe, {
								zoom: 1
							})
						}, 16)), void B("t_verify");
					case 15:
						if(x.reset(), "point" == t.opts.type)
							if(B("tcaptcha_container"), t.send2preTriggerPoint(JSON.stringify({
									message: {
										type: "fLimit"
									}
								})), t.listenFunc.length)
								for(var d = 0, p = t.listenFunc.length; d < p; d++) t.closeSecurityCode(function() {
									t.listenFunc[d]({
										ret: G.ERR_CODE_CLOSE,
										ticket: "",
										randstr: ""
									})
								});
							else t.closeSecurityCode();
						else if("popup" == t.opts.type && w(captype, subcaptype)) {
							if(window.document.getElementById("tcaptcha_transform"))
								for(var f = e(window.document.getElementById("tcaptcha_transform"), "ticons"), g = f.length, d = 0; d < g; d++) f[d] && (f[d].style.visibility = "visible");
							var m = window.document.getElementById("transform_close");
							t.getSrc();
							var b = window.document.getElementById("tcaptcha_popup"),
								_ = window.document.getElementById("transform_text");
							b.style.visibility = "hidden", S(6) || E || I ? m.attachEvent("onclick", function() {
								if(t.listenFunc.length)
									for(var e = 0, i = t.listenFunc.length; e < i; e++) t.closeSecurityCode(function() {
										t.listenFunc[e]({
											ret: G.ERR_CODE_CLOSE,
											ticket: "",
											randstr: ""
										})
									});
								else t.closeSecurityCode();
								B("tcaptcha_transform"), B("t_mask")
							}) : m.addEventListener("click", function() {
								if(t.listenFunc.length)
									for(var e = 0, i = t.listenFunc.length; e < i; e++) t.closeSecurityCode(function() {
										t.listenFunc[e]({
											ret: G.ERR_CODE_CLOSE,
											ticket: "",
											randstr: ""
										})
									});
								else t.closeSecurityCode();
								B("tcaptcha_transform"), B("t_mask")
							}), setTimeout(function() {
								_.innerHTML = _.innerHTML.replace(/2/, "1")
							}, 1e3), setTimeout(function() {
								if(b.style.visibility = "visible", window.document.getElementById("tcaptcha_transform"))
									for(var t = e(window.document.getElementById("tcaptcha_transform"), "ticons"), i = t.length, n = 0; n < i; n++) t[n] && (t[n].style.visibility = "hidden");
								_.innerHTML = _.innerHTML.replace(/1/, "2")
							}, 2e3)
						} else t.refresh();
						return;
					case 16:
						if(x.reset(), "point" == t.opts.type)
							if(B("tcaptcha_container"), t.send2preTriggerPoint(JSON.stringify({
									message: {
										type: "fLimit"
									}
								})), t.listenFunc.length)
								for(var d = 0, p = t.listenFunc.length; d < p; d++) t.closeSecurityCode(function() {
									t.listenFunc[d]({
										ret: G.ERR_CODE_CLOSE,
										ticket: "",
										randstr: ""
									})
								});
							else t.closeSecurityCode();
						else "popup" == t.opts.type && w(captype, subcaptype) ? t.getSrc() : t.refresh();
						return
				}
			})
		},
		initPreTriggerPointTarget: function() {
			this.msg.addTarget(this.preTrigerPoint.contentWindow, k.preTrigerPoint)
		},
		replaceSccurityCode: function(t, e) {
			this.sizeSC.height = e && e.height ? e.height : this.sizeSC.height, this.sizeSC.width = e && e.width ? e.width : this.sizeSC.width;
			var i = this;
			this.opts.themeColor && (t = h(t, {
				color: this.opts.themeColor
			})), this.opts.type && (t = h(t, {
				showtype: this.opts.type
			})), t = h(t, {
				uid: this.opts.uin,
				cap_cd: this.opts.capcd,
				lang: this.opts.lang,
				fb: this.opts.fb,
				rnd: Math.floor(1e6 * Math.random())
			}), this.securityIframe.src = t;
			var n = {
				height: this.sizeSC.height + "px",
				width: this.sizeSC.width + "px"
			};
			N(this.securityIframe, n), this.setPosition(i.securityIframe)
		},
		createSmartVerify: function(t) {
			var e = "embed" == this.opts.type ? "relative" : "absolute";
			if("popup" == this.opts.type && this.opts.pos && this.opts.pos.length > 0)
				for(var s = ["absolute", "fixed", "static", "relative"], r = 0; r < s.length; r++)
					if(this.opts.pos === s[r]) {
						e = this.opts.pos;
						break
					}
			var o = this,
				a = p("div");
			a.id = "t_verify";
			var d = {
				width: U.width + "px",
				height: U.height + "px",
				background: "#fff",
				border: "1px solid #e5e5e5",
				borderRadius: "3px",
				position: e,
				left: "0px",
				top: "0px",
				zIndex: 2000000002
			};
			N(a, d);
			var h = p("div");
			if(h.className = "verify-icon", h.id = "verify_icon", o._verifyicon = h, a.appendChild(h), n()) {
				var l = this.opts.htdoc_path + "/loading_grey.gif",
					u = {
						height: "70px",
						marginTop: "50px",
						background: "url(" + l + ") center no-repeat"
					};
				N(h, u)
			} else {
				var f = p("span");
				f.className = "dots_item dot0", f.id = "dot0_item";
				var g = p("span");
				g.className = "dots_item dot1";
				var m = p("span");
				m.className = "dots_item dot2";
				var y = c(this.opts.themeColor),
					v = {
						background: y
					};
				N(f, v), N(g, v), N(m, v), h.appendChild(f), h.appendChild(g), h.appendChild(m)
			}
			var w = p("p");
			w.className = "verify-text", w.id = "verify_text", o._verifytext = w;
			var b = {
				position: "absolute",
				width: "100%",
				fontSize: "17px",
				textAlign: "center",
				marginTop: "100px",
				lineHeight: "22px",
				zIndex: -1
			};
			N(w, b), a.appendChild(w), t.appendChild(a), i(a, U.width, U.height)
		},
		enlargeVerifyType: function(t, e, n) {
			if(window.document.getElementById("verify_text")) {
				var s = window.document.getElementById("verify_text");
				s.style.display = "none"
			}
			if(window.document.getElementById("verify_icon")) {
				var r = {
					marginTop: n / 2 + "px"
				};
				N(window.document.getElementById("verify_icon"), r)
			}
			var o = {
				width: e + "px",
				height: n + "px"
			};
			N(t, o), i(t, D.new_slidePuzzle.width, D.new_slidePuzzle.height)
		},
		changeVerifyType: function() {
			var t = this;
			if(window.document.getElementById("dot0_item"))
				for(var e = window.document.getElementsByClassName("dots_item"), i = window.document.getElementsByClassName("dots_item").length, n = 0; n < i; n++) e[n].style.display = "none";
			var s = t.opts.htdoc_path + "/tverify-success.png",
				r = {
					height: "70px",
					marginTop: "20px",
					background: "url(" + s + ") center no-repeat"
				},
				o = window.document.getElementById("verify_icon");
			N(o, r);
			var a = window.document.getElementById("verify_text");
			N(a, {
				marginTop: "100px"
			}), a.innerText = C.c3
		},
		createSecurityCode: function(t, e, i, n, s, r) {
			r || C.init(this.opts.lang);
			var o = "embed" == this.opts.type ? "relative" : "absolute";
			if("popup" == this.opts.type && this.opts.pos && this.opts.pos.length > 0)
				for(var c = ["absolute", "fixed", "static", "relative"], d = 0; d < c.length; d++)
					if(this.opts.pos === c[d]) {
						o = this.opts.pos;
						break
					}
			this.sizeSC.height = e && e.height ? e.height : this.sizeSC.height, this.sizeSC.width = e && e.width ? e.width : this.sizeSC.width;
			var l = this;
			if(this.opts.themeColor && (t = h(t, {
					color: this.opts.themeColor
				})), this.opts.type && (t = h(t, {
					showtype: this.opts.type
				})), t = h(t, {
					uid: this.opts.uin,
					cap_cd: this.opts.capcd,
					lang: this.opts.lang,
					fb: this.opts.fb,
					rnd: Math.floor(1e6 * Math.random()),
					TCapIframeLoadTime: this.opts.TCapIframeLoadTime,
					prehandleLoadTime: this.prehandleLoadTime,
					createIframeStart: this.createIframeStart
				}), this.hasSecurityCode()) {
				this.securityIframe.src = t;
				var u = {
					height: this.sizeSC.height + "px",
					width: this.sizeSC.width + "px"
				};
				return N(this.securityIframe, u), void this.setPosition(l.securityIframe)
			}
			var f = this.opts.htdoc_path;
			if(a(f + "/tcaptcha_animation.css?v=1.0.0"), "point" == this.opts.type) {
				var g = p("div");
				g.className = "tcaptcha-container", g.id = "tcaptcha_container", this._div = g;
				var u = {
					width: this.sizeSC.width + "px",
					height: this.sizeSC.height + "px",
					border: "1px solid #e5e5e5",
					position: "absolute",
					left: "0px",
					top: "0px",
					display: "none",
					zIndex: 2000000002
				};
				N(g, u);
				var m = document.createElement("iframe");
				m.setAttribute("frameborder", "0", 0), m.setAttribute("border", "0"), m.marginheight = 0, m.marginwidth = 0, m.setAttribute("marginheight", "0", 0), m.setAttribute("marginwidth", "0", 0), m.scrolling = "no", N(m, {
					display: "block",
					width: "100%",
					height: "100%",
					border: "0px",
					background: "#fff",
					visibility: "visible"
				}), this.securityIframe = m, g.appendChild(m), s.appendChild(g), m.src = t, this.setDivPosition(g), this.initSecurityCodeTarget()
			} else if("popup" == this.opts.type && w(i, n)) {
				var g = p("div");
				g.className = "tcaptcha-transform", g.id = "tcaptcha_transform", this._div = g;
				var u = {
					width: this.sizeSC.width + "px",
					height: this.sizeSC.height + "px",
					border: "1px solid #e5e5e5",
					borderRadius: "3px",
					position: o,
					left: "0px",
					top: "0px",
					visibility: "visible",
					zIndex: 2000000002,
					fontFamily: "Helvtical,microsoft yahei,sans-serif",
					backgroundColor: "#fff"
				};
				N(g, u);
				var y = p("div");
				if(y.className = "ticons", S(6)) var v = this.opts.htdoc_path + "/transform-rfie.png";
				else var v = this.opts.htdoc_path + "/transform-refresh.png";
				var _ = {
					position: "absolute",
					height: "70px",
					width: "100%",
					marginTop: "95px",
					background: "url(" + v + ") center no-repeat",
					backgroundPosition: "50% 32%",
					zIndex: -1,
					visibility: "hidden"
				};
				N(y, _), g.appendChild(y);
				var x = p("div");
				x.className = "ticons", x.id = "transform_close";
				var v = this.opts.htdoc_path + "/transform-close.png",
					z = {
						position: "absolute",
						height: "22px",
						width: "22px",
						cursor: "pointer",
						marginTop: "319.3px",
						marginLeft: "320px",
						background: "url(" + v + ") center no-repeat",
						zIndex: -1,
						visibility: "hidden"
					};
				N(x, z), g.appendChild(x);
				var E = p("p");
				E.className = "transform-header ticons", E.id = "transform_header", this._ph = E, E.innerText = C.c22;
				var I = {
					position: "absolute",
					width: "100%",
					fontSize: "18px",
					textAlign: "center",
					marginTop: "170px",
					zIndex: -1,
					visibility: "hidden"
				};
				N(E, I);
				var T = p("p");
				T.className = "transform-text ticons", T.id = "transform_text", this._pt = T, T.innerText = C.c23;
				var k = {
					position: "absolute",
					width: "92%",
					paddingLeft: "4%",
					paddingRight: "4%",
					fontSize: "15px",
					textAlign: "center",
					marginTop: "200px",
					zIndex: -1,
					visibility: "hidden"
				};
				N(T, k), g.appendChild(E), g.appendChild(T);
				var m = document.createElement("iframe");
				m.id = "tcaptcha_popup", m.setAttribute("frameborder", "0", 0), m.setAttribute("border", "0"), m.marginheight = 0, m.marginwidth = 0, m.setAttribute("marginheight", "0", 0), m.setAttribute("marginwidth", "0", 0), m.scrolling = "no", N(m, {
					display: "block",
					width: this.sizeSC.width + "px",
					height: this.sizeSC.height + "px",
					borderRadius: "3px",
					left: "0px",
					top: "0px",
					background: "#fff",
					zIndex: 2000000002
				}), this.securityIframe = m, g.appendChild(m), s.appendChild(g), m.src = t, this.setDivPosition(g), this.initSecurityCodeTarget()
			} else {
				var m = document.createElement("iframe");
				if(m.setAttribute("frameborder", "0", 0), m.setAttribute("border", "0"), m.marginheight = 0, m.marginwidth = 0, m.setAttribute("marginheight", "0", 0), m.setAttribute("marginwidth", "0", 0), m.scrolling = "no", "embed" != this.opts.type || 1 != i && 2 != i || 10 != n && 13 != n && 14 != n && 15 != n)
					if("popup" == this.opts.type && b(i, n)) var u = {
						display: "block",
						width: this.sizeSC.width + "px",
						height: this.sizeSC.height + "px",
						border: "1px solid #e5e5e5",
						position: o,
						left: "0px",
						top: "0px",
						background: "#fff",
						zIndex: 2000000002
					};
					else var u = {
						width: this.sizeSC.width + "px",
						height: this.sizeSC.height + "px",
						border: "0px",
						position: o,
						left: "0px",
						top: "0px",
						zIndex: 2000000002
					};
				else var u = {
					width: "300px",
					height: "230px",
					border: "0px",
					position: o,
					left: "0px",
					top: "0px",
					zIndex: 2000000002
				};
				N(m, u), this.securityIframe = m, s.appendChild(m), m.src = t, this.setPosition(m), this.initSecurityCodeTarget()
			}
		},
		hasSecurityCode: function() {
			var t = !!this.securityIframe && this.securityIframe;
			return t
		},
		initSecurityCodeTarget: function() {
			this.msg.addTarget(this.securityIframe.contentWindow, k.securityCode)
		},
		destroy: function() {
			_ && (this.closeSecurityCode(), this.listenFunc = [], this.readyFunc = [], this.msg.clear(), this.clearContainer(), this.ele = "", _ = "", B("t_mask"), B("t_verify"), B("tcaptcha_container"), B("tcaptcha_transform"))
		},
		refresh: function(t) {
			B("tcaptcha_container"), B("t_verify"), _ && (this.closeSecurityCode(), this.clearContainer(), this.initOptions(), t && O(t) && (t.uin && (this.opts.uin = t.uin), t.capcd && (this.opts.capcd = t.capcd)), this.create())
		},
		clearContainer: function() {
			"popup" != this.opts.type && this.ele && (this.ele.innerHTML = "")
		},
		setSrc: function(t) {
			this.tpl.src = t
		},
		listen: function(t, e) {
			this.listenFunc.push(t), this.readyFunc.push(e)
		},
		clear: function() {
			this.listenFunc.length = 0, this.readyFunc.length = 0
		},
		send2preTriggerPoint: function(t) {
			if("point" == this.opts.type) {
				var e = k.preTrigerPoint;
				this.msg.targets[e].send(t)
			}
		},
		send2securityCode: function(t) {
			var e = k.securityCode;
			this.msg.targets[e].send(t)
		},
		setSCheight: function(t) {
			N(this.securityIframe, {
				height: t + "px"
			}), this.sizeSC.height = t, this.setPosition(this.securityIframe)
		},
		getPTPpos: function() {
			return H(this.preTrigerPoint)
		},
		getSCsize: function() {
			return [this.sizeSC.width, this.sizeSC.height];
		},
		getPTPsize: function() {
			return L(this.preTrigerPoint)
		},
		setPosition: function(t) {
			if("embed" != this.opts.type) {
				var e = 0,
					i = 0;
				if("popup" == this.opts.type) {
					var n = this.getSCsize(),
						s = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
						r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
					e = (r - n[1]) / 2, i = (s - n[0]) / 2
				}
				if("point" == this.opts.type) {
					var o = g(this);
					e = o[0], i = o[1]
				}
				return N(t, {
					top: e + "px",
					left: i + "px"
				})
			}
		},
		setDivPosition: function(t) {
			if("embed" != this.opts.type) {
				var e = 0,
					i = 0;
				if("popup" == this.opts.type) {
					var n = this.getSCsize(),
						r = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
						o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
					e = (o - n[1]) / 2, i = (r - n[0]) / 2
				}
				if("point" == this.opts.type) {
					var a = g(this);
					e = a[0], i = a[1], M[5] = a[2], A[5] = a[3];
					var c = document.createElement("style");
					c.rel = "stylesheet", c.href = "style.css", c.type = "text/css";
					var d = document.getElementsByTagName("body")[0];
					d.appendChild(c), setTimeout(function() {
						s(document.styleSheets[document.styleSheets.length - 1], ".tcaptcha-container:before", M.join(""), 0), s(document.styleSheets[document.styleSheets.length - 1], ".tcaptcha-container:after", A.join(""), 0)
					}, 1)
				}
				return N(t, {
					top: e + "px",
					left: i + "px"
				})
			}
		},
		closeSecurityCode: function(t) {
			this.opts.endFn(), this.securityIframe && this.nullIframe(), R(t) && t(), window.CollectGarbage && window.CollectGarbage()
		},
		listenResize: function() {
			var t = this;
			window.onresize = function() {
				if(t.securityIframe && t.setPosition(t.securityIframe), window.document.getElementById("tcaptcha_container") && t.setDivPosition(window.document.getElementById("tcaptcha_container")), window.document.getElementById("tcaptcha_transform") && t.setDivPosition(window.document.getElementById("tcaptcha_transform")), window.document.getElementById("t_verify")) {
					var e = window.document.getElementById("t_verify").style.width.split("px")[0],
						n = window.document.getElementById("t_verify").style.height.split("px")[0];
					i(window.document.getElementById("t_verify"), e, n)
				}
			}
		},
		getTicket: function() {
			return {
				ticket: this.ticket,
				randstr: this.randstr
			}
		},
		collapsePreTriggerPoint: function() {
			I || N(this.preTrigerPoint, {
				width: this.clientW
			})
		},
		start: function(t) {
			this.opts.startFn = t
		},
		end: function(t) {
			this.opts.endFn = t
		},
		nullIframe: function(t) {
			return t ? (m(this.preTrigerPoint), void(this.preTrigerPoint = null)) : (m(this.securityIframe), void(this.securityIframe = null))
		}
	}, t.AqSCode = l
}(window);