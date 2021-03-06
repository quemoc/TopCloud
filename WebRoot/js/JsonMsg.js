"object" != typeof JSON && (JSON = {}),
	function() {
		"use strict";

		function f(t) {
			return t < 10 ? "0" + t : t
		}

		function quote(t) {
			return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
				var e = meta[t];
				return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + t + '"'
		}

		function str(t, e) {
			var n, r, o, i, a, f = gap,
				u = e[t];
			switch(u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof rep && (u = rep.call(e, t, u)), typeof u) {
				case "string":
					return quote(u);
				case "number":
					return isFinite(u) ? String(u) : "null";
				case "boolean":
				case "null":
					return String(u);
				case "object":
					if(!u) return "null";
					if(gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
						for(i = u.length, n = 0; n < i; n += 1) a[n] = str(n, u) || "null";
						return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + f + "]" : "[" + a.join(",") + "]", gap = f, o
					}
					if(rep && "object" == typeof rep)
						for(i = rep.length, n = 0; n < i; n += 1) "string" == typeof rep[n] && (r = rep[n], o = str(r, u), o && a.push(quote(r) + (gap ? ": " : ":") + o));
					else
						for(r in u) Object.prototype.hasOwnProperty.call(u, r) && (o = str(r, u), o && a.push(quote(r) + (gap ? ": " : ":") + o));
					return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + f + "}" : "{" + a.join(",") + "}", gap = f, o
			}
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		});
		var cx, escapable, gap, indent, meta, rep;
		"function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		}, JSON.stringify = function(t, e, n) {
			var r;
			if(gap = "", indent = "", "number" == typeof n)
				for(r = 0; r < n; r += 1) indent += " ";
			else "string" == typeof n && (indent = n);
			if(rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
			return str("", {
				"": t
			})
		}), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
			function walk(t, e) {
				var n, r, o = t[e];
				if(o && "object" == typeof o)
					for(n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
				return reviver.call(t, e, o)
			}
			var j;
			if(text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
					return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
				})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}(), window.TCapMsg = function() {
		function t(t, e) {
			var n = "";
			if(arguments.length < 2 ? n = "target error - target and name are both required" : "object" != typeof t ? n = "target error - target itself must be window object" : "string" != typeof e && (n = "target error - target name must be string type"), n) throw new Error(n);
			this.target = t, this.name = e
		}

		function e(t, e) {
			this.targets = {}, this.name = t, this.listenFunc = [], n = e || n, "string" != typeof n && (n = n.toString()), this.initListen()
		}
		var n = "[CODE_VERIFY]",
			r = "postMessage" in window;
		return r ? t.prototype.send = function(t) {
			this.target.postMessage(t, "*")
		} : t.prototype.send = function(t) {
			var e = window.navigator[n + this.name];
			if("function" != typeof e) throw new Error("target callback function is not defined");
			e(t, window)
		}, e.prototype.addTarget = function(e, n) {
			var r = new t(e, n);
			this.targets[n] = r
		}, e.prototype.initListen = function() {
			var t = this,
				e = function(e) {
					"object" == typeof e && e.data && (e = e.data);
					for(var n = 0; n < t.listenFunc.length; n++) t.listenFunc[n](e)
				};
			r ? "addEventListener" in document ? window.addEventListener("message", e, !1) : "attachEvent" in document && window.attachEvent("onmessage", e) : window.navigator[n + this.name] = e
		}, e.prototype.listen = function(t) {
			this.listenFunc.push(t)
		}, e.prototype.clear = function() {
			this.listenFunc = []
		}, e.prototype.send = function(t) {
			var e, n = this.targets;
			for(e in n) n.hasOwnProperty(e) && n[e].send(t)
		}, e
	}();