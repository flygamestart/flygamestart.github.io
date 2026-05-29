var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/qr-code-styling/lib/qr-code-styling.js
var require_qr_code_styling = __commonJS({
  "node_modules/qr-code-styling/lib/qr-code-styling.js"(exports, module) {
    !(function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.QRCodeStyling = e() : t.QRCodeStyling = e();
    })(exports, (() => (() => {
      var t = { 873: (t2, e2) => {
        var i2, r2, n = (function() {
          var t3 = function(t4, e4) {
            var i4 = t4, r4 = s[e4], n3 = null, o2 = 0, h2 = null, p2 = [], v2 = {}, m = function(t5, e5) {
              n3 = (function(t6) {
                for (var e6 = new Array(t6), i5 = 0; i5 < t6; i5 += 1) {
                  e6[i5] = new Array(t6);
                  for (var r5 = 0; r5 < t6; r5 += 1) e6[i5][r5] = null;
                }
                return e6;
              })(o2 = 4 * i4 + 17), b(0, 0), b(o2 - 7, 0), b(0, o2 - 7), x(), y(), C(t5, e5), i4 >= 7 && S(t5), null == h2 && (h2 = M(i4, r4, p2)), A(h2, e5);
            }, b = function(t5, e5) {
              for (var i5 = -1; i5 <= 7; i5 += 1) if (!(t5 + i5 <= -1 || o2 <= t5 + i5)) for (var r5 = -1; r5 <= 7; r5 += 1) e5 + r5 <= -1 || o2 <= e5 + r5 || (n3[t5 + i5][e5 + r5] = 0 <= i5 && i5 <= 6 && (0 == r5 || 6 == r5) || 0 <= r5 && r5 <= 6 && (0 == i5 || 6 == i5) || 2 <= i5 && i5 <= 4 && 2 <= r5 && r5 <= 4);
            }, y = function() {
              for (var t5 = 8; t5 < o2 - 8; t5 += 1) null == n3[t5][6] && (n3[t5][6] = t5 % 2 == 0);
              for (var e5 = 8; e5 < o2 - 8; e5 += 1) null == n3[6][e5] && (n3[6][e5] = e5 % 2 == 0);
            }, x = function() {
              for (var t5 = a.getPatternPosition(i4), e5 = 0; e5 < t5.length; e5 += 1) for (var r5 = 0; r5 < t5.length; r5 += 1) {
                var o3 = t5[e5], s2 = t5[r5];
                if (null == n3[o3][s2]) for (var h3 = -2; h3 <= 2; h3 += 1) for (var d2 = -2; d2 <= 2; d2 += 1) n3[o3 + h3][s2 + d2] = -2 == h3 || 2 == h3 || -2 == d2 || 2 == d2 || 0 == h3 && 0 == d2;
              }
            }, S = function(t5) {
              for (var e5 = a.getBCHTypeNumber(i4), r5 = 0; r5 < 18; r5 += 1) {
                var s2 = !t5 && 1 == (e5 >> r5 & 1);
                n3[Math.floor(r5 / 3)][r5 % 3 + o2 - 8 - 3] = s2;
              }
              for (r5 = 0; r5 < 18; r5 += 1) s2 = !t5 && 1 == (e5 >> r5 & 1), n3[r5 % 3 + o2 - 8 - 3][Math.floor(r5 / 3)] = s2;
            }, C = function(t5, e5) {
              for (var i5 = r4 << 3 | e5, s2 = a.getBCHTypeInfo(i5), h3 = 0; h3 < 15; h3 += 1) {
                var d2 = !t5 && 1 == (s2 >> h3 & 1);
                h3 < 6 ? n3[h3][8] = d2 : h3 < 8 ? n3[h3 + 1][8] = d2 : n3[o2 - 15 + h3][8] = d2;
              }
              for (h3 = 0; h3 < 15; h3 += 1) d2 = !t5 && 1 == (s2 >> h3 & 1), h3 < 8 ? n3[8][o2 - h3 - 1] = d2 : h3 < 9 ? n3[8][15 - h3 - 1 + 1] = d2 : n3[8][15 - h3 - 1] = d2;
              n3[o2 - 8][8] = !t5;
            }, A = function(t5, e5) {
              for (var i5 = -1, r5 = o2 - 1, s2 = 7, h3 = 0, d2 = a.getMaskFunction(e5), u2 = o2 - 1; u2 > 0; u2 -= 2) for (6 == u2 && (u2 -= 1); ; ) {
                for (var c2 = 0; c2 < 2; c2 += 1) if (null == n3[r5][u2 - c2]) {
                  var l2 = false;
                  h3 < t5.length && (l2 = 1 == (t5[h3] >>> s2 & 1)), d2(r5, u2 - c2) && (l2 = !l2), n3[r5][u2 - c2] = l2, -1 == (s2 -= 1) && (h3 += 1, s2 = 7);
                }
                if ((r5 += i5) < 0 || o2 <= r5) {
                  r5 -= i5, i5 = -i5;
                  break;
                }
              }
            }, M = function(t5, e5, i5) {
              for (var r5 = u.getRSBlocks(t5, e5), n4 = c(), o3 = 0; o3 < i5.length; o3 += 1) {
                var s2 = i5[o3];
                n4.put(s2.getMode(), 4), n4.put(s2.getLength(), a.getLengthInBits(s2.getMode(), t5)), s2.write(n4);
              }
              var h3 = 0;
              for (o3 = 0; o3 < r5.length; o3 += 1) h3 += r5[o3].dataCount;
              if (n4.getLengthInBits() > 8 * h3) throw "code length overflow. (" + n4.getLengthInBits() + ">" + 8 * h3 + ")";
              for (n4.getLengthInBits() + 4 <= 8 * h3 && n4.put(0, 4); n4.getLengthInBits() % 8 != 0; ) n4.putBit(false);
              for (; !(n4.getLengthInBits() >= 8 * h3 || (n4.put(236, 8), n4.getLengthInBits() >= 8 * h3)); ) n4.put(17, 8);
              return (function(t6, e6) {
                for (var i6 = 0, r6 = 0, n5 = 0, o4 = new Array(e6.length), s3 = new Array(e6.length), h4 = 0; h4 < e6.length; h4 += 1) {
                  var u2 = e6[h4].dataCount, c2 = e6[h4].totalCount - u2;
                  r6 = Math.max(r6, u2), n5 = Math.max(n5, c2), o4[h4] = new Array(u2);
                  for (var l2 = 0; l2 < o4[h4].length; l2 += 1) o4[h4][l2] = 255 & t6.getBuffer()[l2 + i6];
                  i6 += u2;
                  var g2 = a.getErrorCorrectPolynomial(c2), f2 = d(o4[h4], g2.getLength() - 1).mod(g2);
                  for (s3[h4] = new Array(g2.getLength() - 1), l2 = 0; l2 < s3[h4].length; l2 += 1) {
                    var w2 = l2 + f2.getLength() - s3[h4].length;
                    s3[h4][l2] = w2 >= 0 ? f2.getAt(w2) : 0;
                  }
                }
                var p3 = 0;
                for (l2 = 0; l2 < e6.length; l2 += 1) p3 += e6[l2].totalCount;
                var v3 = new Array(p3), _2 = 0;
                for (l2 = 0; l2 < r6; l2 += 1) for (h4 = 0; h4 < e6.length; h4 += 1) l2 < o4[h4].length && (v3[_2] = o4[h4][l2], _2 += 1);
                for (l2 = 0; l2 < n5; l2 += 1) for (h4 = 0; h4 < e6.length; h4 += 1) l2 < s3[h4].length && (v3[_2] = s3[h4][l2], _2 += 1);
                return v3;
              })(n4, r5);
            };
            v2.addData = function(t5, e5) {
              var i5 = null;
              switch (e5 = e5 || "Byte") {
                case "Numeric":
                  i5 = l(t5);
                  break;
                case "Alphanumeric":
                  i5 = g(t5);
                  break;
                case "Byte":
                  i5 = f(t5);
                  break;
                case "Kanji":
                  i5 = w(t5);
                  break;
                default:
                  throw "mode:" + e5;
              }
              p2.push(i5), h2 = null;
            }, v2.isDark = function(t5, e5) {
              if (t5 < 0 || o2 <= t5 || e5 < 0 || o2 <= e5) throw t5 + "," + e5;
              return n3[t5][e5];
            }, v2.getModuleCount = function() {
              return o2;
            }, v2.make = function() {
              if (i4 < 1) {
                for (var t5 = 1; t5 < 40; t5++) {
                  for (var e5 = u.getRSBlocks(t5, r4), n4 = c(), o3 = 0; o3 < p2.length; o3++) {
                    var s2 = p2[o3];
                    n4.put(s2.getMode(), 4), n4.put(s2.getLength(), a.getLengthInBits(s2.getMode(), t5)), s2.write(n4);
                  }
                  var h3 = 0;
                  for (o3 = 0; o3 < e5.length; o3++) h3 += e5[o3].dataCount;
                  if (n4.getLengthInBits() <= 8 * h3) break;
                }
                i4 = t5;
              }
              m(false, (function() {
                for (var t6 = 0, e6 = 0, i5 = 0; i5 < 8; i5 += 1) {
                  m(true, i5);
                  var r5 = a.getLostPoint(v2);
                  (0 == i5 || t6 > r5) && (t6 = r5, e6 = i5);
                }
                return e6;
              })());
            }, v2.createTableTag = function(t5, e5) {
              t5 = t5 || 2;
              var i5 = "";
              i5 += '<table style="', i5 += " border-width: 0px; border-style: none;", i5 += " border-collapse: collapse;", i5 += " padding: 0px; margin: " + (e5 = void 0 === e5 ? 4 * t5 : e5) + "px;", i5 += '">', i5 += "<tbody>";
              for (var r5 = 0; r5 < v2.getModuleCount(); r5 += 1) {
                i5 += "<tr>";
                for (var n4 = 0; n4 < v2.getModuleCount(); n4 += 1) i5 += '<td style="', i5 += " border-width: 0px; border-style: none;", i5 += " border-collapse: collapse;", i5 += " padding: 0px; margin: 0px;", i5 += " width: " + t5 + "px;", i5 += " height: " + t5 + "px;", i5 += " background-color: ", i5 += v2.isDark(r5, n4) ? "#000000" : "#ffffff", i5 += ";", i5 += '"/>';
                i5 += "</tr>";
              }
              return (i5 += "</tbody>") + "</table>";
            }, v2.createSvgTag = function(t5, e5, i5, r5) {
              var n4 = {};
              "object" == typeof arguments[0] && (t5 = (n4 = arguments[0]).cellSize, e5 = n4.margin, i5 = n4.alt, r5 = n4.title), t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5, (i5 = "string" == typeof i5 ? { text: i5 } : i5 || {}).text = i5.text || null, i5.id = i5.text ? i5.id || "qrcode-description" : null, (r5 = "string" == typeof r5 ? { text: r5 } : r5 || {}).text = r5.text || null, r5.id = r5.text ? r5.id || "qrcode-title" : null;
              var o3, s2, a2, h3, d2 = v2.getModuleCount() * t5 + 2 * e5, u2 = "";
              for (h3 = "l" + t5 + ",0 0," + t5 + " -" + t5 + ",0 0,-" + t5 + "z ", u2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', u2 += n4.scalable ? "" : ' width="' + d2 + 'px" height="' + d2 + 'px"', u2 += ' viewBox="0 0 ' + d2 + " " + d2 + '" ', u2 += ' preserveAspectRatio="xMinYMin meet"', u2 += r5.text || i5.text ? ' role="img" aria-labelledby="' + $([r5.id, i5.id].join(" ").trim()) + '"' : "", u2 += ">", u2 += r5.text ? '<title id="' + $(r5.id) + '">' + $(r5.text) + "</title>" : "", u2 += i5.text ? '<description id="' + $(i5.id) + '">' + $(i5.text) + "</description>" : "", u2 += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', u2 += '<path d="', s2 = 0; s2 < v2.getModuleCount(); s2 += 1) for (a2 = s2 * t5 + e5, o3 = 0; o3 < v2.getModuleCount(); o3 += 1) v2.isDark(s2, o3) && (u2 += "M" + (o3 * t5 + e5) + "," + a2 + h3);
              return (u2 += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, v2.createDataURL = function(t5, e5) {
              t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
              var i5 = v2.getModuleCount() * t5 + 2 * e5, r5 = e5, n4 = i5 - e5;
              return _(i5, i5, (function(e6, i6) {
                if (r5 <= e6 && e6 < n4 && r5 <= i6 && i6 < n4) {
                  var o3 = Math.floor((e6 - r5) / t5), s2 = Math.floor((i6 - r5) / t5);
                  return v2.isDark(s2, o3) ? 0 : 1;
                }
                return 1;
              }));
            }, v2.createImgTag = function(t5, e5, i5) {
              t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
              var r5 = v2.getModuleCount() * t5 + 2 * e5, n4 = "";
              return n4 += "<img", n4 += ' src="', n4 += v2.createDataURL(t5, e5), n4 += '"', n4 += ' width="', n4 += r5, n4 += '"', n4 += ' height="', n4 += r5, n4 += '"', i5 && (n4 += ' alt="', n4 += $(i5), n4 += '"'), n4 + "/>";
            };
            var $ = function(t5) {
              for (var e5 = "", i5 = 0; i5 < t5.length; i5 += 1) {
                var r5 = t5.charAt(i5);
                switch (r5) {
                  case "<":
                    e5 += "&lt;";
                    break;
                  case ">":
                    e5 += "&gt;";
                    break;
                  case "&":
                    e5 += "&amp;";
                    break;
                  case '"':
                    e5 += "&quot;";
                    break;
                  default:
                    e5 += r5;
                }
              }
              return e5;
            };
            return v2.createASCII = function(t5, e5) {
              if ((t5 = t5 || 1) < 2) return (function(t6) {
                t6 = void 0 === t6 ? 2 : t6;
                var e6, i6, r6, n5, o4, s3 = 1 * v2.getModuleCount() + 2 * t6, a3 = t6, h4 = s3 - t6, d3 = { "\u2588\u2588": "\u2588", "\u2588 ": "\u2580", " \u2588": "\u2584", "  ": " " }, u3 = { "\u2588\u2588": "\u2580", "\u2588 ": "\u2580", " \u2588": " ", "  ": " " }, c3 = "";
                for (e6 = 0; e6 < s3; e6 += 2) {
                  for (r6 = Math.floor((e6 - a3) / 1), n5 = Math.floor((e6 + 1 - a3) / 1), i6 = 0; i6 < s3; i6 += 1) o4 = "\u2588", a3 <= i6 && i6 < h4 && a3 <= e6 && e6 < h4 && v2.isDark(r6, Math.floor((i6 - a3) / 1)) && (o4 = " "), a3 <= i6 && i6 < h4 && a3 <= e6 + 1 && e6 + 1 < h4 && v2.isDark(n5, Math.floor((i6 - a3) / 1)) ? o4 += " " : o4 += "\u2588", c3 += t6 < 1 && e6 + 1 >= h4 ? u3[o4] : d3[o4];
                  c3 += "\n";
                }
                return s3 % 2 && t6 > 0 ? c3.substring(0, c3.length - s3 - 1) + Array(s3 + 1).join("\u2580") : c3.substring(0, c3.length - 1);
              })(e5);
              t5 -= 1, e5 = void 0 === e5 ? 2 * t5 : e5;
              var i5, r5, n4, o3, s2 = v2.getModuleCount() * t5 + 2 * e5, a2 = e5, h3 = s2 - e5, d2 = Array(t5 + 1).join("\u2588\u2588"), u2 = Array(t5 + 1).join("  "), c2 = "", l2 = "";
              for (i5 = 0; i5 < s2; i5 += 1) {
                for (n4 = Math.floor((i5 - a2) / t5), l2 = "", r5 = 0; r5 < s2; r5 += 1) o3 = 1, a2 <= r5 && r5 < h3 && a2 <= i5 && i5 < h3 && v2.isDark(n4, Math.floor((r5 - a2) / t5)) && (o3 = 0), l2 += o3 ? d2 : u2;
                for (n4 = 0; n4 < t5; n4 += 1) c2 += l2 + "\n";
              }
              return c2.substring(0, c2.length - 1);
            }, v2.renderTo2dContext = function(t5, e5) {
              e5 = e5 || 2;
              for (var i5 = v2.getModuleCount(), r5 = 0; r5 < i5; r5++) for (var n4 = 0; n4 < i5; n4++) t5.fillStyle = v2.isDark(r5, n4) ? "black" : "white", t5.fillRect(r5 * e5, n4 * e5, e5, e5);
            }, v2;
          };
          t3.stringToBytes = (t3.stringToBytesFuncs = { default: function(t4) {
            for (var e4 = [], i4 = 0; i4 < t4.length; i4 += 1) {
              var r4 = t4.charCodeAt(i4);
              e4.push(255 & r4);
            }
            return e4;
          } }).default, t3.createStringToBytes = function(t4, e4) {
            var i4 = (function() {
              for (var i5 = v(t4), r5 = function() {
                var t5 = i5.read();
                if (-1 == t5) throw "eof";
                return t5;
              }, n3 = 0, o2 = {}; ; ) {
                var s2 = i5.read();
                if (-1 == s2) break;
                var a2 = r5(), h2 = r5() << 8 | r5();
                o2[String.fromCharCode(s2 << 8 | a2)] = h2, n3 += 1;
              }
              if (n3 != e4) throw n3 + " != " + e4;
              return o2;
            })(), r4 = "?".charCodeAt(0);
            return function(t5) {
              for (var e5 = [], n3 = 0; n3 < t5.length; n3 += 1) {
                var o2 = t5.charCodeAt(n3);
                if (o2 < 128) e5.push(o2);
                else {
                  var s2 = i4[t5.charAt(n3)];
                  "number" == typeof s2 ? (255 & s2) == s2 ? e5.push(s2) : (e5.push(s2 >>> 8), e5.push(255 & s2)) : e5.push(r4);
                }
              }
              return e5;
            };
          };
          var e3, i3, r3, n2, o, s = { L: 1, M: 0, Q: 3, H: 2 }, a = (e3 = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], i3 = 1335, r3 = 7973, o = function(t4) {
            for (var e4 = 0; 0 != t4; ) e4 += 1, t4 >>>= 1;
            return e4;
          }, (n2 = {}).getBCHTypeInfo = function(t4) {
            for (var e4 = t4 << 10; o(e4) - o(i3) >= 0; ) e4 ^= i3 << o(e4) - o(i3);
            return 21522 ^ (t4 << 10 | e4);
          }, n2.getBCHTypeNumber = function(t4) {
            for (var e4 = t4 << 12; o(e4) - o(r3) >= 0; ) e4 ^= r3 << o(e4) - o(r3);
            return t4 << 12 | e4;
          }, n2.getPatternPosition = function(t4) {
            return e3[t4 - 1];
          }, n2.getMaskFunction = function(t4) {
            switch (t4) {
              case 0:
                return function(t5, e4) {
                  return (t5 + e4) % 2 == 0;
                };
              case 1:
                return function(t5, e4) {
                  return t5 % 2 == 0;
                };
              case 2:
                return function(t5, e4) {
                  return e4 % 3 == 0;
                };
              case 3:
                return function(t5, e4) {
                  return (t5 + e4) % 3 == 0;
                };
              case 4:
                return function(t5, e4) {
                  return (Math.floor(t5 / 2) + Math.floor(e4 / 3)) % 2 == 0;
                };
              case 5:
                return function(t5, e4) {
                  return t5 * e4 % 2 + t5 * e4 % 3 == 0;
                };
              case 6:
                return function(t5, e4) {
                  return (t5 * e4 % 2 + t5 * e4 % 3) % 2 == 0;
                };
              case 7:
                return function(t5, e4) {
                  return (t5 * e4 % 3 + (t5 + e4) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + t4;
            }
          }, n2.getErrorCorrectPolynomial = function(t4) {
            for (var e4 = d([1], 0), i4 = 0; i4 < t4; i4 += 1) e4 = e4.multiply(d([1, h.gexp(i4)], 0));
            return e4;
          }, n2.getLengthInBits = function(t4, e4) {
            if (1 <= e4 && e4 < 10) switch (t4) {
              case 1:
                return 10;
              case 2:
                return 9;
              case 4:
              case 8:
                return 8;
              default:
                throw "mode:" + t4;
            }
            else if (e4 < 27) switch (t4) {
              case 1:
                return 12;
              case 2:
                return 11;
              case 4:
                return 16;
              case 8:
                return 10;
              default:
                throw "mode:" + t4;
            }
            else {
              if (!(e4 < 41)) throw "type:" + e4;
              switch (t4) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + t4;
              }
            }
          }, n2.getLostPoint = function(t4) {
            for (var e4 = t4.getModuleCount(), i4 = 0, r4 = 0; r4 < e4; r4 += 1) for (var n3 = 0; n3 < e4; n3 += 1) {
              for (var o2 = 0, s2 = t4.isDark(r4, n3), a2 = -1; a2 <= 1; a2 += 1) if (!(r4 + a2 < 0 || e4 <= r4 + a2)) for (var h2 = -1; h2 <= 1; h2 += 1) n3 + h2 < 0 || e4 <= n3 + h2 || 0 == a2 && 0 == h2 || s2 == t4.isDark(r4 + a2, n3 + h2) && (o2 += 1);
              o2 > 5 && (i4 += 3 + o2 - 5);
            }
            for (r4 = 0; r4 < e4 - 1; r4 += 1) for (n3 = 0; n3 < e4 - 1; n3 += 1) {
              var d2 = 0;
              t4.isDark(r4, n3) && (d2 += 1), t4.isDark(r4 + 1, n3) && (d2 += 1), t4.isDark(r4, n3 + 1) && (d2 += 1), t4.isDark(r4 + 1, n3 + 1) && (d2 += 1), 0 != d2 && 4 != d2 || (i4 += 3);
            }
            for (r4 = 0; r4 < e4; r4 += 1) for (n3 = 0; n3 < e4 - 6; n3 += 1) t4.isDark(r4, n3) && !t4.isDark(r4, n3 + 1) && t4.isDark(r4, n3 + 2) && t4.isDark(r4, n3 + 3) && t4.isDark(r4, n3 + 4) && !t4.isDark(r4, n3 + 5) && t4.isDark(r4, n3 + 6) && (i4 += 40);
            for (n3 = 0; n3 < e4; n3 += 1) for (r4 = 0; r4 < e4 - 6; r4 += 1) t4.isDark(r4, n3) && !t4.isDark(r4 + 1, n3) && t4.isDark(r4 + 2, n3) && t4.isDark(r4 + 3, n3) && t4.isDark(r4 + 4, n3) && !t4.isDark(r4 + 5, n3) && t4.isDark(r4 + 6, n3) && (i4 += 40);
            var u2 = 0;
            for (n3 = 0; n3 < e4; n3 += 1) for (r4 = 0; r4 < e4; r4 += 1) t4.isDark(r4, n3) && (u2 += 1);
            return i4 + Math.abs(100 * u2 / e4 / e4 - 50) / 5 * 10;
          }, n2), h = (function() {
            for (var t4 = new Array(256), e4 = new Array(256), i4 = 0; i4 < 8; i4 += 1) t4[i4] = 1 << i4;
            for (i4 = 8; i4 < 256; i4 += 1) t4[i4] = t4[i4 - 4] ^ t4[i4 - 5] ^ t4[i4 - 6] ^ t4[i4 - 8];
            for (i4 = 0; i4 < 255; i4 += 1) e4[t4[i4]] = i4;
            return { glog: function(t5) {
              if (t5 < 1) throw "glog(" + t5 + ")";
              return e4[t5];
            }, gexp: function(e5) {
              for (; e5 < 0; ) e5 += 255;
              for (; e5 >= 256; ) e5 -= 255;
              return t4[e5];
            } };
          })();
          function d(t4, e4) {
            if (void 0 === t4.length) throw t4.length + "/" + e4;
            var i4 = (function() {
              for (var i5 = 0; i5 < t4.length && 0 == t4[i5]; ) i5 += 1;
              for (var r5 = new Array(t4.length - i5 + e4), n3 = 0; n3 < t4.length - i5; n3 += 1) r5[n3] = t4[n3 + i5];
              return r5;
            })(), r4 = { getAt: function(t5) {
              return i4[t5];
            }, getLength: function() {
              return i4.length;
            }, multiply: function(t5) {
              for (var e5 = new Array(r4.getLength() + t5.getLength() - 1), i5 = 0; i5 < r4.getLength(); i5 += 1) for (var n3 = 0; n3 < t5.getLength(); n3 += 1) e5[i5 + n3] ^= h.gexp(h.glog(r4.getAt(i5)) + h.glog(t5.getAt(n3)));
              return d(e5, 0);
            }, mod: function(t5) {
              if (r4.getLength() - t5.getLength() < 0) return r4;
              for (var e5 = h.glog(r4.getAt(0)) - h.glog(t5.getAt(0)), i5 = new Array(r4.getLength()), n3 = 0; n3 < r4.getLength(); n3 += 1) i5[n3] = r4.getAt(n3);
              for (n3 = 0; n3 < t5.getLength(); n3 += 1) i5[n3] ^= h.gexp(h.glog(t5.getAt(n3)) + e5);
              return d(i5, 0).mod(t5);
            } };
            return r4;
          }
          var u = /* @__PURE__ */ (function() {
            var t4 = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], e4 = function(t5, e5) {
              var i5 = {};
              return i5.totalCount = t5, i5.dataCount = e5, i5;
            }, i4 = { getRSBlocks: function(i5, r4) {
              var n3 = (function(e5, i6) {
                switch (i6) {
                  case s.L:
                    return t4[4 * (e5 - 1) + 0];
                  case s.M:
                    return t4[4 * (e5 - 1) + 1];
                  case s.Q:
                    return t4[4 * (e5 - 1) + 2];
                  case s.H:
                    return t4[4 * (e5 - 1) + 3];
                  default:
                    return;
                }
              })(i5, r4);
              if (void 0 === n3) throw "bad rs block @ typeNumber:" + i5 + "/errorCorrectionLevel:" + r4;
              for (var o2 = n3.length / 3, a2 = [], h2 = 0; h2 < o2; h2 += 1) for (var d2 = n3[3 * h2 + 0], u2 = n3[3 * h2 + 1], c2 = n3[3 * h2 + 2], l2 = 0; l2 < d2; l2 += 1) a2.push(e4(u2, c2));
              return a2;
            } };
            return i4;
          })(), c = function() {
            var t4 = [], e4 = 0, i4 = { getBuffer: function() {
              return t4;
            }, getAt: function(e5) {
              var i5 = Math.floor(e5 / 8);
              return 1 == (t4[i5] >>> 7 - e5 % 8 & 1);
            }, put: function(t5, e5) {
              for (var r4 = 0; r4 < e5; r4 += 1) i4.putBit(1 == (t5 >>> e5 - r4 - 1 & 1));
            }, getLengthInBits: function() {
              return e4;
            }, putBit: function(i5) {
              var r4 = Math.floor(e4 / 8);
              t4.length <= r4 && t4.push(0), i5 && (t4[r4] |= 128 >>> e4 % 8), e4 += 1;
            } };
            return i4;
          }, l = function(t4) {
            var e4 = t4, i4 = { getMode: function() {
              return 1;
            }, getLength: function(t5) {
              return e4.length;
            }, write: function(t5) {
              for (var i5 = e4, n4 = 0; n4 + 2 < i5.length; ) t5.put(r4(i5.substring(n4, n4 + 3)), 10), n4 += 3;
              n4 < i5.length && (i5.length - n4 == 1 ? t5.put(r4(i5.substring(n4, n4 + 1)), 4) : i5.length - n4 == 2 && t5.put(r4(i5.substring(n4, n4 + 2)), 7));
            } }, r4 = function(t5) {
              for (var e5 = 0, i5 = 0; i5 < t5.length; i5 += 1) e5 = 10 * e5 + n3(t5.charAt(i5));
              return e5;
            }, n3 = function(t5) {
              if ("0" <= t5 && t5 <= "9") return t5.charCodeAt(0) - "0".charCodeAt(0);
              throw "illegal char :" + t5;
            };
            return i4;
          }, g = function(t4) {
            var e4 = t4, i4 = { getMode: function() {
              return 2;
            }, getLength: function(t5) {
              return e4.length;
            }, write: function(t5) {
              for (var i5 = e4, n3 = 0; n3 + 1 < i5.length; ) t5.put(45 * r4(i5.charAt(n3)) + r4(i5.charAt(n3 + 1)), 11), n3 += 2;
              n3 < i5.length && t5.put(r4(i5.charAt(n3)), 6);
            } }, r4 = function(t5) {
              if ("0" <= t5 && t5 <= "9") return t5.charCodeAt(0) - "0".charCodeAt(0);
              if ("A" <= t5 && t5 <= "Z") return t5.charCodeAt(0) - "A".charCodeAt(0) + 10;
              switch (t5) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + t5;
              }
            };
            return i4;
          }, f = function(e4) {
            var i4 = t3.stringToBytes(e4);
            return { getMode: function() {
              return 4;
            }, getLength: function(t4) {
              return i4.length;
            }, write: function(t4) {
              for (var e5 = 0; e5 < i4.length; e5 += 1) t4.put(i4[e5], 8);
            } };
          }, w = function(e4) {
            var i4 = t3.stringToBytesFuncs.SJIS;
            if (!i4) throw "sjis not supported.";
            !(function() {
              var t4 = i4("\u53CB");
              if (2 != t4.length || 38726 != (t4[0] << 8 | t4[1])) throw "sjis not supported.";
            })();
            var r4 = i4(e4), n3 = { getMode: function() {
              return 8;
            }, getLength: function(t4) {
              return ~~(r4.length / 2);
            }, write: function(t4) {
              for (var e5 = r4, i5 = 0; i5 + 1 < e5.length; ) {
                var n4 = (255 & e5[i5]) << 8 | 255 & e5[i5 + 1];
                if (33088 <= n4 && n4 <= 40956) n4 -= 33088;
                else {
                  if (!(57408 <= n4 && n4 <= 60351)) throw "illegal char at " + (i5 + 1) + "/" + n4;
                  n4 -= 49472;
                }
                n4 = 192 * (n4 >>> 8 & 255) + (255 & n4), t4.put(n4, 13), i5 += 2;
              }
              if (i5 < e5.length) throw "illegal char at " + (i5 + 1);
            } };
            return n3;
          }, p = function() {
            var t4 = [], e4 = { writeByte: function(e5) {
              t4.push(255 & e5);
            }, writeShort: function(t5) {
              e4.writeByte(t5), e4.writeByte(t5 >>> 8);
            }, writeBytes: function(t5, i4, r4) {
              i4 = i4 || 0, r4 = r4 || t5.length;
              for (var n3 = 0; n3 < r4; n3 += 1) e4.writeByte(t5[n3 + i4]);
            }, writeString: function(t5) {
              for (var i4 = 0; i4 < t5.length; i4 += 1) e4.writeByte(t5.charCodeAt(i4));
            }, toByteArray: function() {
              return t4;
            }, toString: function() {
              var e5 = "";
              e5 += "[";
              for (var i4 = 0; i4 < t4.length; i4 += 1) i4 > 0 && (e5 += ","), e5 += t4[i4];
              return e5 + "]";
            } };
            return e4;
          }, v = function(t4) {
            var e4 = t4, i4 = 0, r4 = 0, n3 = 0, o2 = { read: function() {
              for (; n3 < 8; ) {
                if (i4 >= e4.length) {
                  if (0 == n3) return -1;
                  throw "unexpected end of file./" + n3;
                }
                var t5 = e4.charAt(i4);
                if (i4 += 1, "=" == t5) return n3 = 0, -1;
                t5.match(/^\s$/) || (r4 = r4 << 6 | s2(t5.charCodeAt(0)), n3 += 6);
              }
              var o3 = r4 >>> n3 - 8 & 255;
              return n3 -= 8, o3;
            } }, s2 = function(t5) {
              if (65 <= t5 && t5 <= 90) return t5 - 65;
              if (97 <= t5 && t5 <= 122) return t5 - 97 + 26;
              if (48 <= t5 && t5 <= 57) return t5 - 48 + 52;
              if (43 == t5) return 62;
              if (47 == t5) return 63;
              throw "c:" + t5;
            };
            return o2;
          }, _ = function(t4, e4, i4) {
            for (var r4 = (function(t5, e5) {
              var i5 = t5, r5 = e5, n4 = new Array(t5 * e5), o3 = { setPixel: function(t6, e6, r6) {
                n4[e6 * i5 + t6] = r6;
              }, write: function(t6) {
                t6.writeString("GIF87a"), t6.writeShort(i5), t6.writeShort(r5), t6.writeByte(128), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(255), t6.writeByte(255), t6.writeByte(255), t6.writeString(","), t6.writeShort(0), t6.writeShort(0), t6.writeShort(i5), t6.writeShort(r5), t6.writeByte(0);
                var e6 = s3(2);
                t6.writeByte(2);
                for (var n5 = 0; e6.length - n5 > 255; ) t6.writeByte(255), t6.writeBytes(e6, n5, 255), n5 += 255;
                t6.writeByte(e6.length - n5), t6.writeBytes(e6, n5, e6.length - n5), t6.writeByte(0), t6.writeString(";");
              } }, s3 = function(t6) {
                for (var e6 = 1 << t6, i6 = 1 + (1 << t6), r6 = t6 + 1, o4 = a3(), s4 = 0; s4 < e6; s4 += 1) o4.add(String.fromCharCode(s4));
                o4.add(String.fromCharCode(e6)), o4.add(String.fromCharCode(i6));
                var h3, d3, u2, c2 = p(), l2 = (h3 = c2, d3 = 0, u2 = 0, { write: function(t7, e7) {
                  if (t7 >>> e7 != 0) throw "length over";
                  for (; d3 + e7 >= 8; ) h3.writeByte(255 & (t7 << d3 | u2)), e7 -= 8 - d3, t7 >>>= 8 - d3, u2 = 0, d3 = 0;
                  u2 |= t7 << d3, d3 += e7;
                }, flush: function() {
                  d3 > 0 && h3.writeByte(u2);
                } });
                l2.write(e6, r6);
                var g2 = 0, f2 = String.fromCharCode(n4[g2]);
                for (g2 += 1; g2 < n4.length; ) {
                  var w2 = String.fromCharCode(n4[g2]);
                  g2 += 1, o4.contains(f2 + w2) ? f2 += w2 : (l2.write(o4.indexOf(f2), r6), o4.size() < 4095 && (o4.size() == 1 << r6 && (r6 += 1), o4.add(f2 + w2)), f2 = w2);
                }
                return l2.write(o4.indexOf(f2), r6), l2.write(i6, r6), l2.flush(), c2.toByteArray();
              }, a3 = function() {
                var t6 = {}, e6 = 0, i6 = { add: function(r6) {
                  if (i6.contains(r6)) throw "dup key:" + r6;
                  t6[r6] = e6, e6 += 1;
                }, size: function() {
                  return e6;
                }, indexOf: function(e7) {
                  return t6[e7];
                }, contains: function(e7) {
                  return void 0 !== t6[e7];
                } };
                return i6;
              };
              return o3;
            })(t4, e4), n3 = 0; n3 < e4; n3 += 1) for (var o2 = 0; o2 < t4; o2 += 1) r4.setPixel(o2, n3, i4(o2, n3));
            var s2 = p();
            r4.write(s2);
            for (var a2 = (function() {
              var t5 = 0, e5 = 0, i5 = 0, r5 = "", n4 = {}, o3 = function(t6) {
                r5 += String.fromCharCode(s3(63 & t6));
              }, s3 = function(t6) {
                if (t6 < 0) ;
                else {
                  if (t6 < 26) return 65 + t6;
                  if (t6 < 52) return t6 - 26 + 97;
                  if (t6 < 62) return t6 - 52 + 48;
                  if (62 == t6) return 43;
                  if (63 == t6) return 47;
                }
                throw "n:" + t6;
              };
              return n4.writeByte = function(r6) {
                for (t5 = t5 << 8 | 255 & r6, e5 += 8, i5 += 1; e5 >= 6; ) o3(t5 >>> e5 - 6), e5 -= 6;
              }, n4.flush = function() {
                if (e5 > 0 && (o3(t5 << 6 - e5), t5 = 0, e5 = 0), i5 % 3 != 0) for (var n5 = 3 - i5 % 3, s4 = 0; s4 < n5; s4 += 1) r5 += "=";
              }, n4.toString = function() {
                return r5;
              }, n4;
            })(), h2 = s2.toByteArray(), d2 = 0; d2 < h2.length; d2 += 1) a2.writeByte(h2[d2]);
            return a2.flush(), "data:image/gif;base64," + a2;
          };
          return t3;
        })();
        n.stringToBytesFuncs["UTF-8"] = function(t3) {
          return (function(t4) {
            for (var e3 = [], i3 = 0; i3 < t4.length; i3++) {
              var r3 = t4.charCodeAt(i3);
              r3 < 128 ? e3.push(r3) : r3 < 2048 ? e3.push(192 | r3 >> 6, 128 | 63 & r3) : r3 < 55296 || r3 >= 57344 ? e3.push(224 | r3 >> 12, 128 | r3 >> 6 & 63, 128 | 63 & r3) : (i3++, r3 = 65536 + ((1023 & r3) << 10 | 1023 & t4.charCodeAt(i3)), e3.push(240 | r3 >> 18, 128 | r3 >> 12 & 63, 128 | r3 >> 6 & 63, 128 | 63 & r3));
            }
            return e3;
          })(t3);
        }, void 0 === (r2 = "function" == typeof (i2 = function() {
          return n;
        }) ? i2.apply(e2, []) : i2) || (t2.exports = r2);
      } }, e = {};
      function i(r2) {
        var n = e[r2];
        if (void 0 !== n) return n.exports;
        var o = e[r2] = { exports: {} };
        return t[r2](o, o.exports, i), o.exports;
      }
      i.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return i.d(e2, { a: e2 }), e2;
      }, i.d = (t2, e2) => {
        for (var r2 in e2) i.o(e2, r2) && !i.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: e2[r2] });
      }, i.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
      var r = {};
      return (() => {
        "use strict";
        i.d(r, { default: () => $ });
        const t2 = (t3) => !!t3 && "object" == typeof t3 && !Array.isArray(t3);
        function e2(i2, ...r2) {
          if (!r2.length) return i2;
          const n2 = r2.shift();
          return void 0 !== n2 && t2(i2) && t2(n2) ? (i2 = Object.assign({}, i2), Object.keys(n2).forEach(((r3) => {
            const o2 = i2[r3], s2 = n2[r3];
            Array.isArray(o2) && Array.isArray(s2) ? i2[r3] = s2 : t2(o2) && t2(s2) ? i2[r3] = e2(Object.assign({}, o2), s2) : i2[r3] = s2;
          })), e2(i2, ...r2)) : i2;
        }
        function n(t3, e3) {
          const i2 = document.createElement("a");
          i2.download = e3, i2.href = t3, document.body.appendChild(i2), i2.click(), document.body.removeChild(i2);
        }
        const o = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        class s {
          constructor({ svg: t3, type: e3, window: i2 }) {
            this._svg = t3, this._type = e3, this._window = i2;
          }
          draw(t3, e3, i2, r2) {
            let n2;
            switch (this._type) {
              case "dots":
                n2 = this._drawDot;
                break;
              case "classy":
                n2 = this._drawClassy;
                break;
              case "classy-rounded":
                n2 = this._drawClassyRounded;
                break;
              case "rounded":
                n2 = this._drawRounded;
                break;
              case "extra-rounded":
                n2 = this._drawExtraRounded;
                break;
              default:
                n2 = this._drawSquare;
            }
            n2.call(this, { x: t3, y: e3, size: i2, getNeighbor: r2 });
          }
          _rotateFigure({ x: t3, y: e3, size: i2, rotation: r2 = 0, draw: n2 }) {
            var o2;
            const s2 = t3 + i2 / 2, a2 = e3 + i2 / 2;
            n2(), null === (o2 = this._element) || void 0 === o2 || o2.setAttribute("transform", `rotate(${180 * r2 / Math.PI},${s2},${a2})`);
          }
          _basicDot(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(i2 + e3 / 2)), this._element.setAttribute("cy", String(r2 + e3 / 2)), this._element.setAttribute("r", String(e3 / 2));
            } }));
          }
          _basicSquare(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(i2)), this._element.setAttribute("y", String(r2)), this._element.setAttribute("width", String(e3)), this._element.setAttribute("height", String(e3));
            } }));
          }
          _basicSideRounded(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i2} ${r2}v ${e3}h ` + e3 / 2 + `a ${e3 / 2} ${e3 / 2}, 0, 0, 0, 0 ${-e3}`);
            } }));
          }
          _basicCornerRounded(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i2} ${r2}v ${e3}h ${e3}v ` + -e3 / 2 + `a ${e3 / 2} ${e3 / 2}, 0, 0, 0, ${-e3 / 2} ${-e3 / 2}`);
            } }));
          }
          _basicCornerExtraRounded(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i2} ${r2}v ${e3}h ${e3}a ${e3} ${e3}, 0, 0, 0, ${-e3} ${-e3}`);
            } }));
          }
          _basicCornersRounded(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i2} ${r2}v ` + e3 / 2 + `a ${e3 / 2} ${e3 / 2}, 0, 0, 0, ${e3 / 2} ${e3 / 2}h ` + e3 / 2 + "v " + -e3 / 2 + `a ${e3 / 2} ${e3 / 2}, 0, 0, 0, ${-e3 / 2} ${-e3 / 2}`);
            } }));
          }
          _drawDot({ x: t3, y: e3, size: i2 }) {
            this._basicDot({ x: t3, y: e3, size: i2, rotation: 0 });
          }
          _drawSquare({ x: t3, y: e3, size: i2 }) {
            this._basicSquare({ x: t3, y: e3, size: i2, rotation: 0 });
          }
          _drawRounded({ x: t3, y: e3, size: i2, getNeighbor: r2 }) {
            const n2 = r2 ? +r2(-1, 0) : 0, o2 = r2 ? +r2(1, 0) : 0, s2 = r2 ? +r2(0, -1) : 0, a2 = r2 ? +r2(0, 1) : 0, h2 = n2 + o2 + s2 + a2;
            if (0 !== h2) if (h2 > 2 || n2 && o2 || s2 && a2) this._basicSquare({ x: t3, y: e3, size: i2, rotation: 0 });
            else {
              if (2 === h2) {
                let r3 = 0;
                return n2 && s2 ? r3 = Math.PI / 2 : s2 && o2 ? r3 = Math.PI : o2 && a2 && (r3 = -Math.PI / 2), void this._basicCornerRounded({ x: t3, y: e3, size: i2, rotation: r3 });
              }
              if (1 === h2) {
                let r3 = 0;
                return s2 ? r3 = Math.PI / 2 : o2 ? r3 = Math.PI : a2 && (r3 = -Math.PI / 2), void this._basicSideRounded({ x: t3, y: e3, size: i2, rotation: r3 });
              }
            }
            else this._basicDot({ x: t3, y: e3, size: i2, rotation: 0 });
          }
          _drawExtraRounded({ x: t3, y: e3, size: i2, getNeighbor: r2 }) {
            const n2 = r2 ? +r2(-1, 0) : 0, o2 = r2 ? +r2(1, 0) : 0, s2 = r2 ? +r2(0, -1) : 0, a2 = r2 ? +r2(0, 1) : 0, h2 = n2 + o2 + s2 + a2;
            if (0 !== h2) if (h2 > 2 || n2 && o2 || s2 && a2) this._basicSquare({ x: t3, y: e3, size: i2, rotation: 0 });
            else {
              if (2 === h2) {
                let r3 = 0;
                return n2 && s2 ? r3 = Math.PI / 2 : s2 && o2 ? r3 = Math.PI : o2 && a2 && (r3 = -Math.PI / 2), void this._basicCornerExtraRounded({ x: t3, y: e3, size: i2, rotation: r3 });
              }
              if (1 === h2) {
                let r3 = 0;
                return s2 ? r3 = Math.PI / 2 : o2 ? r3 = Math.PI : a2 && (r3 = -Math.PI / 2), void this._basicSideRounded({ x: t3, y: e3, size: i2, rotation: r3 });
              }
            }
            else this._basicDot({ x: t3, y: e3, size: i2, rotation: 0 });
          }
          _drawClassy({ x: t3, y: e3, size: i2, getNeighbor: r2 }) {
            const n2 = r2 ? +r2(-1, 0) : 0, o2 = r2 ? +r2(1, 0) : 0, s2 = r2 ? +r2(0, -1) : 0, a2 = r2 ? +r2(0, 1) : 0;
            0 !== n2 + o2 + s2 + a2 ? n2 || s2 ? o2 || a2 ? this._basicSquare({ x: t3, y: e3, size: i2, rotation: 0 }) : this._basicCornerRounded({ x: t3, y: e3, size: i2, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: t3, y: e3, size: i2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: t3, y: e3, size: i2, rotation: Math.PI / 2 });
          }
          _drawClassyRounded({ x: t3, y: e3, size: i2, getNeighbor: r2 }) {
            const n2 = r2 ? +r2(-1, 0) : 0, o2 = r2 ? +r2(1, 0) : 0, s2 = r2 ? +r2(0, -1) : 0, a2 = r2 ? +r2(0, 1) : 0;
            0 !== n2 + o2 + s2 + a2 ? n2 || s2 ? o2 || a2 ? this._basicSquare({ x: t3, y: e3, size: i2, rotation: 0 }) : this._basicCornerExtraRounded({ x: t3, y: e3, size: i2, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: t3, y: e3, size: i2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: t3, y: e3, size: i2, rotation: Math.PI / 2 });
          }
        }
        const a = { dot: "dot", square: "square", extraRounded: "extra-rounded" }, h = Object.values(a);
        class d {
          constructor({ svg: t3, type: e3, window: i2 }) {
            this._svg = t3, this._type = e3, this._window = i2;
          }
          draw(t3, e3, i2, r2) {
            let n2;
            switch (this._type) {
              case a.square:
                n2 = this._drawSquare;
                break;
              case a.extraRounded:
                n2 = this._drawExtraRounded;
                break;
              default:
                n2 = this._drawDot;
            }
            n2.call(this, { x: t3, y: e3, size: i2, rotation: r2 });
          }
          _rotateFigure({ x: t3, y: e3, size: i2, rotation: r2 = 0, draw: n2 }) {
            var o2;
            const s2 = t3 + i2 / 2, a2 = e3 + i2 / 2;
            n2(), null === (o2 = this._element) || void 0 === o2 || o2.setAttribute("transform", `rotate(${180 * r2 / Math.PI},${s2},${a2})`);
          }
          _basicDot(t3) {
            const { size: e3, x: i2, y: r2 } = t3, n2 = e3 / 7;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${i2 + e3 / 2} ${r2}a ${e3 / 2} ${e3 / 2} 0 1 0 0.1 0zm 0 ${n2}a ${e3 / 2 - n2} ${e3 / 2 - n2} 0 1 1 -0.1 0Z`);
            } }));
          }
          _basicSquare(t3) {
            const { size: e3, x: i2, y: r2 } = t3, n2 = e3 / 7;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${i2} ${r2}v ${e3}h ${e3}v ` + -e3 + `zM ${i2 + n2} ${r2 + n2}h ` + (e3 - 2 * n2) + "v " + (e3 - 2 * n2) + "h " + (2 * n2 - e3) + "z");
            } }));
          }
          _basicExtraRounded(t3) {
            const { size: e3, x: i2, y: r2 } = t3, n2 = e3 / 7;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${i2} ${r2 + 2.5 * n2}v ` + 2 * n2 + `a ${2.5 * n2} ${2.5 * n2}, 0, 0, 0, ${2.5 * n2} ${2.5 * n2}h ` + 2 * n2 + `a ${2.5 * n2} ${2.5 * n2}, 0, 0, 0, ${2.5 * n2} ${2.5 * -n2}v ` + -2 * n2 + `a ${2.5 * n2} ${2.5 * n2}, 0, 0, 0, ${2.5 * -n2} ${2.5 * -n2}h ` + -2 * n2 + `a ${2.5 * n2} ${2.5 * n2}, 0, 0, 0, ${2.5 * -n2} ${2.5 * n2}M ${i2 + 2.5 * n2} ${r2 + n2}h ` + 2 * n2 + `a ${1.5 * n2} ${1.5 * n2}, 0, 0, 1, ${1.5 * n2} ${1.5 * n2}v ` + 2 * n2 + `a ${1.5 * n2} ${1.5 * n2}, 0, 0, 1, ${1.5 * -n2} ${1.5 * n2}h ` + -2 * n2 + `a ${1.5 * n2} ${1.5 * n2}, 0, 0, 1, ${1.5 * -n2} ${1.5 * -n2}v ` + -2 * n2 + `a ${1.5 * n2} ${1.5 * n2}, 0, 0, 1, ${1.5 * n2} ${1.5 * -n2}`);
            } }));
          }
          _drawDot({ x: t3, y: e3, size: i2, rotation: r2 }) {
            this._basicDot({ x: t3, y: e3, size: i2, rotation: r2 });
          }
          _drawSquare({ x: t3, y: e3, size: i2, rotation: r2 }) {
            this._basicSquare({ x: t3, y: e3, size: i2, rotation: r2 });
          }
          _drawExtraRounded({ x: t3, y: e3, size: i2, rotation: r2 }) {
            this._basicExtraRounded({ x: t3, y: e3, size: i2, rotation: r2 });
          }
        }
        const u = { dot: "dot", square: "square" }, c = Object.values(u);
        class l {
          constructor({ svg: t3, type: e3, window: i2 }) {
            this._svg = t3, this._type = e3, this._window = i2;
          }
          draw(t3, e3, i2, r2) {
            let n2;
            n2 = this._type === u.square ? this._drawSquare : this._drawDot, n2.call(this, { x: t3, y: e3, size: i2, rotation: r2 });
          }
          _rotateFigure({ x: t3, y: e3, size: i2, rotation: r2 = 0, draw: n2 }) {
            var o2;
            const s2 = t3 + i2 / 2, a2 = e3 + i2 / 2;
            n2(), null === (o2 = this._element) || void 0 === o2 || o2.setAttribute("transform", `rotate(${180 * r2 / Math.PI},${s2},${a2})`);
          }
          _basicDot(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(i2 + e3 / 2)), this._element.setAttribute("cy", String(r2 + e3 / 2)), this._element.setAttribute("r", String(e3 / 2));
            } }));
          }
          _basicSquare(t3) {
            const { size: e3, x: i2, y: r2 } = t3;
            this._rotateFigure(Object.assign(Object.assign({}, t3), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(i2)), this._element.setAttribute("y", String(r2)), this._element.setAttribute("width", String(e3)), this._element.setAttribute("height", String(e3));
            } }));
          }
          _drawDot({ x: t3, y: e3, size: i2, rotation: r2 }) {
            this._basicDot({ x: t3, y: e3, size: i2, rotation: r2 });
          }
          _drawSquare({ x: t3, y: e3, size: i2, rotation: r2 }) {
            this._basicSquare({ x: t3, y: e3, size: i2, rotation: r2 });
          }
        }
        const g = "circle", f = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], w = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        class p {
          constructor(t3, e3) {
            this._roundSize = (t4) => this._options.dotsOptions.roundSize ? Math.floor(t4) : t4, this._window = e3, this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t3.width)), this._element.setAttribute("height", String(t3.height)), this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), t3.dotsOptions.roundSize || this._element.setAttribute("shape-rendering", "crispEdges"), this._element.setAttribute("viewBox", `0 0 ${t3.width} ${t3.height}`), this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._imageUri = t3.image, this._instanceId = p.instanceCount++, this._options = t3;
          }
          get width() {
            return this._options.width;
          }
          get height() {
            return this._options.height;
          }
          getElement() {
            return this._element;
          }
          async drawQR(t3) {
            const e3 = t3.getModuleCount(), i2 = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, r2 = this._options.shape === g ? i2 / Math.sqrt(2) : i2, n2 = this._roundSize(r2 / e3);
            let s2 = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 };
            if (this._qr = t3, this._options.image) {
              if (await this.loadImage(), !this._image) return;
              const { imageOptions: t4, qrOptions: i3 } = this._options, r3 = t4.imageSize * o[i3.errorCorrectionLevel], a2 = Math.floor(r3 * e3 * e3);
              s2 = (function({ originalHeight: t5, originalWidth: e4, maxHiddenDots: i4, maxHiddenAxisDots: r4, dotSize: n3 }) {
                const o2 = { x: 0, y: 0 }, s3 = { x: 0, y: 0 };
                if (t5 <= 0 || e4 <= 0 || i4 <= 0 || n3 <= 0) return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                const a3 = t5 / e4;
                return o2.x = Math.floor(Math.sqrt(i4 / a3)), o2.x <= 0 && (o2.x = 1), r4 && r4 < o2.x && (o2.x = r4), o2.x % 2 == 0 && o2.x--, s3.x = o2.x * n3, o2.y = 1 + 2 * Math.ceil((o2.x * a3 - 1) / 2), s3.y = Math.round(s3.x * a3), (o2.y * o2.x > i4 || r4 && r4 < o2.y) && (r4 && r4 < o2.y ? (o2.y = r4, o2.y % 2 == 0 && o2.x--) : o2.y -= 2, s3.y = o2.y * n3, o2.x = 1 + 2 * Math.ceil((o2.y / a3 - 1) / 2), s3.x = Math.round(s3.y / a3)), { height: s3.y, width: s3.x, hideYDots: o2.y, hideXDots: o2.x };
              })({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: a2, maxHiddenAxisDots: e3 - 14, dotSize: n2 });
            }
            this.drawBackground(), this.drawDots(((t4, i3) => {
              var r3, n3, o2, a2, h2, d2;
              return !(this._options.imageOptions.hideBackgroundDots && t4 >= (e3 - s2.hideYDots) / 2 && t4 < (e3 + s2.hideYDots) / 2 && i3 >= (e3 - s2.hideXDots) / 2 && i3 < (e3 + s2.hideXDots) / 2 || (null === (r3 = f[t4]) || void 0 === r3 ? void 0 : r3[i3]) || (null === (n3 = f[t4 - e3 + 7]) || void 0 === n3 ? void 0 : n3[i3]) || (null === (o2 = f[t4]) || void 0 === o2 ? void 0 : o2[i3 - e3 + 7]) || (null === (a2 = w[t4]) || void 0 === a2 ? void 0 : a2[i3]) || (null === (h2 = w[t4 - e3 + 7]) || void 0 === h2 ? void 0 : h2[i3]) || (null === (d2 = w[t4]) || void 0 === d2 ? void 0 : d2[i3 - e3 + 7]));
            })), this.drawCorners(), this._options.image && await this.drawImage({ width: s2.width, height: s2.height, count: e3, dotSize: n2 });
          }
          drawBackground() {
            var t3, e3, i2;
            const r2 = this._element, n2 = this._options;
            if (r2) {
              const r3 = null === (t3 = n2.backgroundOptions) || void 0 === t3 ? void 0 : t3.gradient, o2 = null === (e3 = n2.backgroundOptions) || void 0 === e3 ? void 0 : e3.color;
              let s2 = n2.height, a2 = n2.width;
              if (r3 || o2) {
                const t4 = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), (null === (i2 = n2.backgroundOptions) || void 0 === i2 ? void 0 : i2.round) && (s2 = a2 = Math.min(n2.width, n2.height), t4.setAttribute("rx", String(s2 / 2 * n2.backgroundOptions.round))), t4.setAttribute("x", String(this._roundSize((n2.width - a2) / 2))), t4.setAttribute("y", String(this._roundSize((n2.height - s2) / 2))), t4.setAttribute("width", String(a2)), t4.setAttribute("height", String(s2)), this._backgroundClipPath.appendChild(t4), this._createColor({ options: r3, color: o2, additionalRotation: 0, x: 0, y: 0, height: n2.height, width: n2.width, name: `background-color-${this._instanceId}` });
              }
            }
          }
          drawDots(t3) {
            var e3, i2;
            if (!this._qr) throw "QR code is not defined";
            const r2 = this._options, n2 = this._qr.getModuleCount();
            if (n2 > r2.width || n2 > r2.height) throw "The canvas is too small.";
            const o2 = Math.min(r2.width, r2.height) - 2 * r2.margin, a2 = r2.shape === g ? o2 / Math.sqrt(2) : o2, h2 = this._roundSize(a2 / n2), d2 = this._roundSize((r2.width - n2 * h2) / 2), u2 = this._roundSize((r2.height - n2 * h2) / 2), c2 = new s({ svg: this._element, type: r2.dotsOptions.type, window: this._window });
            this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: null === (e3 = r2.dotsOptions) || void 0 === e3 ? void 0 : e3.gradient, color: r2.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: r2.height, width: r2.width, name: `dot-color-${this._instanceId}` });
            for (let e4 = 0; e4 < n2; e4++) for (let r3 = 0; r3 < n2; r3++) t3 && !t3(e4, r3) || (null === (i2 = this._qr) || void 0 === i2 ? void 0 : i2.isDark(e4, r3)) && (c2.draw(d2 + r3 * h2, u2 + e4 * h2, h2, ((i3, o3) => !(r3 + i3 < 0 || e4 + o3 < 0 || r3 + i3 >= n2 || e4 + o3 >= n2) && !(t3 && !t3(e4 + o3, r3 + i3)) && !!this._qr && this._qr.isDark(e4 + o3, r3 + i3))), c2._element && this._dotsClipPath && this._dotsClipPath.appendChild(c2._element));
            if (r2.shape === g) {
              const t4 = this._roundSize((o2 / h2 - n2) / 2), e4 = n2 + 2 * t4, i3 = d2 - t4 * h2, r3 = u2 - t4 * h2, s2 = [], a3 = this._roundSize(e4 / 2);
              for (let i4 = 0; i4 < e4; i4++) {
                s2[i4] = [];
                for (let r4 = 0; r4 < e4; r4++) i4 >= t4 - 1 && i4 <= e4 - t4 && r4 >= t4 - 1 && r4 <= e4 - t4 || Math.sqrt((i4 - a3) * (i4 - a3) + (r4 - a3) * (r4 - a3)) > a3 ? s2[i4][r4] = 0 : s2[i4][r4] = this._qr.isDark(r4 - 2 * t4 < 0 ? r4 : r4 >= n2 ? r4 - 2 * t4 : r4 - t4, i4 - 2 * t4 < 0 ? i4 : i4 >= n2 ? i4 - 2 * t4 : i4 - t4) ? 1 : 0;
              }
              for (let t5 = 0; t5 < e4; t5++) for (let n3 = 0; n3 < e4; n3++) s2[t5][n3] && (c2.draw(i3 + n3 * h2, r3 + t5 * h2, h2, ((e5, i4) => {
                var r4;
                return !!(null === (r4 = s2[t5 + i4]) || void 0 === r4 ? void 0 : r4[n3 + e5]);
              })), c2._element && this._dotsClipPath && this._dotsClipPath.appendChild(c2._element));
            }
          }
          drawCorners() {
            if (!this._qr) throw "QR code is not defined";
            const t3 = this._element, e3 = this._options;
            if (!t3) throw "Element code is not defined";
            const i2 = this._qr.getModuleCount(), r2 = Math.min(e3.width, e3.height) - 2 * e3.margin, n2 = e3.shape === g ? r2 / Math.sqrt(2) : r2, o2 = this._roundSize(n2 / i2), a2 = 7 * o2, u2 = 3 * o2, p2 = this._roundSize((e3.width - i2 * o2) / 2), v2 = this._roundSize((e3.height - i2 * o2) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach((([t4, r3, n3]) => {
              var g2, _2, m2, b2, y2, x2, S2, C2, A2, M2, $2, O, D, k;
              const z = p2 + t4 * o2 * (i2 - 7), B = v2 + r3 * o2 * (i2 - 7);
              let P = this._dotsClipPath, I = this._dotsClipPath;
              if (((null === (g2 = e3.cornersSquareOptions) || void 0 === g2 ? void 0 : g2.gradient) || (null === (_2 = e3.cornersSquareOptions) || void 0 === _2 ? void 0 : _2.color)) && (P = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), P.setAttribute("id", `clip-path-corners-square-color-${t4}-${r3}-${this._instanceId}`), this._defs.appendChild(P), this._cornersSquareClipPath = this._cornersDotClipPath = I = P, this._createColor({ options: null === (m2 = e3.cornersSquareOptions) || void 0 === m2 ? void 0 : m2.gradient, color: null === (b2 = e3.cornersSquareOptions) || void 0 === b2 ? void 0 : b2.color, additionalRotation: n3, x: z, y: B, height: a2, width: a2, name: `corners-square-color-${t4}-${r3}-${this._instanceId}` })), (null === (y2 = e3.cornersSquareOptions) || void 0 === y2 ? void 0 : y2.type) && h.includes(e3.cornersSquareOptions.type)) {
                const t5 = new d({ svg: this._element, type: e3.cornersSquareOptions.type, window: this._window });
                t5.draw(z, B, a2, n3), t5._element && P && P.appendChild(t5._element);
              } else {
                const t5 = new s({ svg: this._element, type: (null === (x2 = e3.cornersSquareOptions) || void 0 === x2 ? void 0 : x2.type) || e3.dotsOptions.type, window: this._window });
                for (let e4 = 0; e4 < f.length; e4++) for (let i3 = 0; i3 < f[e4].length; i3++) (null === (S2 = f[e4]) || void 0 === S2 ? void 0 : S2[i3]) && (t5.draw(z + i3 * o2, B + e4 * o2, o2, ((t6, r4) => {
                  var n4;
                  return !!(null === (n4 = f[e4 + r4]) || void 0 === n4 ? void 0 : n4[i3 + t6]);
                })), t5._element && P && P.appendChild(t5._element));
              }
              if (((null === (C2 = e3.cornersDotOptions) || void 0 === C2 ? void 0 : C2.gradient) || (null === (A2 = e3.cornersDotOptions) || void 0 === A2 ? void 0 : A2.color)) && (I = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), I.setAttribute("id", `clip-path-corners-dot-color-${t4}-${r3}-${this._instanceId}`), this._defs.appendChild(I), this._cornersDotClipPath = I, this._createColor({ options: null === (M2 = e3.cornersDotOptions) || void 0 === M2 ? void 0 : M2.gradient, color: null === ($2 = e3.cornersDotOptions) || void 0 === $2 ? void 0 : $2.color, additionalRotation: n3, x: z + 2 * o2, y: B + 2 * o2, height: u2, width: u2, name: `corners-dot-color-${t4}-${r3}-${this._instanceId}` })), (null === (O = e3.cornersDotOptions) || void 0 === O ? void 0 : O.type) && c.includes(e3.cornersDotOptions.type)) {
                const t5 = new l({ svg: this._element, type: e3.cornersDotOptions.type, window: this._window });
                t5.draw(z + 2 * o2, B + 2 * o2, u2, n3), t5._element && I && I.appendChild(t5._element);
              } else {
                const t5 = new s({ svg: this._element, type: (null === (D = e3.cornersDotOptions) || void 0 === D ? void 0 : D.type) || e3.dotsOptions.type, window: this._window });
                for (let e4 = 0; e4 < w.length; e4++) for (let i3 = 0; i3 < w[e4].length; i3++) (null === (k = w[e4]) || void 0 === k ? void 0 : k[i3]) && (t5.draw(z + i3 * o2, B + e4 * o2, o2, ((t6, r4) => {
                  var n4;
                  return !!(null === (n4 = w[e4 + r4]) || void 0 === n4 ? void 0 : n4[i3 + t6]);
                })), t5._element && I && I.appendChild(t5._element));
              }
            }));
          }
          loadImage() {
            return new Promise(((t3, e3) => {
              var i2;
              const r2 = this._options;
              if (!r2.image) return e3("Image is not defined");
              if (null === (i2 = r2.nodeCanvas) || void 0 === i2 ? void 0 : i2.loadImage) r2.nodeCanvas.loadImage(r2.image).then(((e4) => {
                var i3, n2;
                if (this._image = e4, this._options.imageOptions.saveAsBlob) {
                  const t4 = null === (i3 = r2.nodeCanvas) || void 0 === i3 ? void 0 : i3.createCanvas(this._image.width, this._image.height);
                  null === (n2 = null == t4 ? void 0 : t4.getContext("2d")) || void 0 === n2 || n2.drawImage(e4, 0, 0), this._imageUri = null == t4 ? void 0 : t4.toDataURL();
                }
                t3();
              })).catch(e3);
              else {
                const e4 = new this._window.Image();
                "string" == typeof r2.imageOptions.crossOrigin && (e4.crossOrigin = r2.imageOptions.crossOrigin), this._image = e4, e4.onload = async () => {
                  this._options.imageOptions.saveAsBlob && (this._imageUri = await (async function(t4, e5) {
                    return new Promise(((i3) => {
                      const r3 = new e5.XMLHttpRequest();
                      r3.onload = function() {
                        const t5 = new e5.FileReader();
                        t5.onloadend = function() {
                          i3(t5.result);
                        }, t5.readAsDataURL(r3.response);
                      }, r3.open("GET", t4), r3.responseType = "blob", r3.send();
                    }));
                  })(r2.image || "", this._window)), t3();
                }, e4.src = r2.image;
              }
            }));
          }
          async drawImage({ width: t3, height: e3, count: i2, dotSize: r2 }) {
            const n2 = this._options, o2 = this._roundSize((n2.width - i2 * r2) / 2), s2 = this._roundSize((n2.height - i2 * r2) / 2), a2 = o2 + this._roundSize(n2.imageOptions.margin + (i2 * r2 - t3) / 2), h2 = s2 + this._roundSize(n2.imageOptions.margin + (i2 * r2 - e3) / 2), d2 = t3 - 2 * n2.imageOptions.margin, u2 = e3 - 2 * n2.imageOptions.margin, c2 = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
            c2.setAttribute("href", this._imageUri || ""), c2.setAttribute("xlink:href", this._imageUri || ""), c2.setAttribute("x", String(a2)), c2.setAttribute("y", String(h2)), c2.setAttribute("width", `${d2}px`), c2.setAttribute("height", `${u2}px`), this._element.appendChild(c2);
          }
          _createColor({ options: t3, color: e3, additionalRotation: i2, x: r2, y: n2, height: o2, width: s2, name: a2 }) {
            const h2 = s2 > o2 ? s2 : o2, d2 = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (d2.setAttribute("x", String(r2)), d2.setAttribute("y", String(n2)), d2.setAttribute("height", String(o2)), d2.setAttribute("width", String(s2)), d2.setAttribute("clip-path", `url('#clip-path-${a2}')`), t3) {
              let e4;
              if ("radial" === t3.type) e4 = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient"), e4.setAttribute("id", a2), e4.setAttribute("gradientUnits", "userSpaceOnUse"), e4.setAttribute("fx", String(r2 + s2 / 2)), e4.setAttribute("fy", String(n2 + o2 / 2)), e4.setAttribute("cx", String(r2 + s2 / 2)), e4.setAttribute("cy", String(n2 + o2 / 2)), e4.setAttribute("r", String(h2 / 2));
              else {
                const h3 = ((t3.rotation || 0) + i2) % (2 * Math.PI), d3 = (h3 + 2 * Math.PI) % (2 * Math.PI);
                let u2 = r2 + s2 / 2, c2 = n2 + o2 / 2, l2 = r2 + s2 / 2, g2 = n2 + o2 / 2;
                d3 >= 0 && d3 <= 0.25 * Math.PI || d3 > 1.75 * Math.PI && d3 <= 2 * Math.PI ? (u2 -= s2 / 2, c2 -= o2 / 2 * Math.tan(h3), l2 += s2 / 2, g2 += o2 / 2 * Math.tan(h3)) : d3 > 0.25 * Math.PI && d3 <= 0.75 * Math.PI ? (c2 -= o2 / 2, u2 -= s2 / 2 / Math.tan(h3), g2 += o2 / 2, l2 += s2 / 2 / Math.tan(h3)) : d3 > 0.75 * Math.PI && d3 <= 1.25 * Math.PI ? (u2 += s2 / 2, c2 += o2 / 2 * Math.tan(h3), l2 -= s2 / 2, g2 -= o2 / 2 * Math.tan(h3)) : d3 > 1.25 * Math.PI && d3 <= 1.75 * Math.PI && (c2 += o2 / 2, u2 += s2 / 2 / Math.tan(h3), g2 -= o2 / 2, l2 -= s2 / 2 / Math.tan(h3)), e4 = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient"), e4.setAttribute("id", a2), e4.setAttribute("gradientUnits", "userSpaceOnUse"), e4.setAttribute("x1", String(Math.round(u2))), e4.setAttribute("y1", String(Math.round(c2))), e4.setAttribute("x2", String(Math.round(l2))), e4.setAttribute("y2", String(Math.round(g2)));
              }
              t3.colorStops.forEach((({ offset: t4, color: i3 }) => {
                const r3 = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                r3.setAttribute("offset", 100 * t4 + "%"), r3.setAttribute("stop-color", i3), e4.appendChild(r3);
              })), d2.setAttribute("fill", `url('#${a2}')`), this._defs.appendChild(e4);
            } else e3 && d2.setAttribute("fill", e3);
            this._element.appendChild(d2);
          }
        }
        p.instanceCount = 0;
        const v = p, _ = "canvas", m = {};
        for (let t3 = 0; t3 <= 40; t3++) m[t3] = t3;
        const b = { type: _, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: m[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { saveAsBlob: true, hideBackgroundDots: true, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000", roundSize: true }, backgroundOptions: { round: 0, color: "#fff" } };
        function y(t3) {
          const e3 = Object.assign({}, t3);
          if (!e3.colorStops || !e3.colorStops.length) throw "Field 'colorStops' is required in gradient";
          return e3.rotation ? e3.rotation = Number(e3.rotation) : e3.rotation = 0, e3.colorStops = e3.colorStops.map(((t4) => Object.assign(Object.assign({}, t4), { offset: Number(t4.offset) }))), e3;
        }
        function x(t3) {
          const e3 = Object.assign({}, t3);
          return e3.width = Number(e3.width), e3.height = Number(e3.height), e3.margin = Number(e3.margin), e3.imageOptions = Object.assign(Object.assign({}, e3.imageOptions), { hideBackgroundDots: Boolean(e3.imageOptions.hideBackgroundDots), imageSize: Number(e3.imageOptions.imageSize), margin: Number(e3.imageOptions.margin) }), e3.margin > Math.min(e3.width, e3.height) && (e3.margin = Math.min(e3.width, e3.height)), e3.dotsOptions = Object.assign({}, e3.dotsOptions), e3.dotsOptions.gradient && (e3.dotsOptions.gradient = y(e3.dotsOptions.gradient)), e3.cornersSquareOptions && (e3.cornersSquareOptions = Object.assign({}, e3.cornersSquareOptions), e3.cornersSquareOptions.gradient && (e3.cornersSquareOptions.gradient = y(e3.cornersSquareOptions.gradient))), e3.cornersDotOptions && (e3.cornersDotOptions = Object.assign({}, e3.cornersDotOptions), e3.cornersDotOptions.gradient && (e3.cornersDotOptions.gradient = y(e3.cornersDotOptions.gradient))), e3.backgroundOptions && (e3.backgroundOptions = Object.assign({}, e3.backgroundOptions), e3.backgroundOptions.gradient && (e3.backgroundOptions.gradient = y(e3.backgroundOptions.gradient))), e3;
        }
        var S = i(873), C = i.n(S);
        function A(t3) {
          if (!t3) throw new Error("Extension must be defined");
          "." === t3[0] && (t3 = t3.substring(1));
          const e3 = { bmp: "image/bmp", gif: "image/gif", ico: "image/vnd.microsoft.icon", jpeg: "image/jpeg", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", webp: "image/webp", pdf: "application/pdf" }[t3.toLowerCase()];
          if (!e3) throw new Error(`Extension "${t3}" is not supported`);
          return e3;
        }
        class M {
          constructor(t3) {
            (null == t3 ? void 0 : t3.jsdom) ? this._window = new t3.jsdom("", { resources: "usable" }).window : this._window = window, this._options = t3 ? x(e2(b, t3)) : b, this.update();
          }
          static _clearContainer(t3) {
            t3 && (t3.innerHTML = "");
          }
          _setupSvg() {
            if (!this._qr) return;
            const t3 = new v(this._options, this._window);
            this._svg = t3.getElement(), this._svgDrawingPromise = t3.drawQR(this._qr).then((() => {
              var e3;
              this._svg && (null === (e3 = this._extension) || void 0 === e3 || e3.call(this, t3.getElement(), this._options));
            }));
          }
          _setupCanvas() {
            var t3, e3;
            this._qr && ((null === (t3 = this._options.nodeCanvas) || void 0 === t3 ? void 0 : t3.createCanvas) ? (this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height), this._nodeCanvas.width = this._options.width, this._nodeCanvas.height = this._options.height) : (this._domCanvas = document.createElement("canvas"), this._domCanvas.width = this._options.width, this._domCanvas.height = this._options.height), this._setupSvg(), this._canvasDrawingPromise = null === (e3 = this._svgDrawingPromise) || void 0 === e3 ? void 0 : e3.then((() => {
              var t4;
              if (!this._svg) return;
              const e4 = this._svg, i2 = new this._window.XMLSerializer().serializeToString(e4), r2 = btoa(i2), n2 = `data:${A("svg")};base64,${r2}`;
              if (null === (t4 = this._options.nodeCanvas) || void 0 === t4 ? void 0 : t4.loadImage) return this._options.nodeCanvas.loadImage(n2).then(((t5) => {
                var e5, i3;
                t5.width = this._options.width, t5.height = this._options.height, null === (i3 = null === (e5 = this._nodeCanvas) || void 0 === e5 ? void 0 : e5.getContext("2d")) || void 0 === i3 || i3.drawImage(t5, 0, 0);
              }));
              {
                const t5 = new this._window.Image();
                return new Promise(((e5) => {
                  t5.onload = () => {
                    var i3, r3;
                    null === (r3 = null === (i3 = this._domCanvas) || void 0 === i3 ? void 0 : i3.getContext("2d")) || void 0 === r3 || r3.drawImage(t5, 0, 0), e5();
                  }, t5.src = n2;
                }));
              }
            })));
          }
          async _getElement(t3 = "png") {
            if (!this._qr) throw "QR code is empty";
            return "svg" === t3.toLowerCase() ? (this._svg && this._svgDrawingPromise || this._setupSvg(), await this._svgDrawingPromise, this._svg) : ((this._domCanvas || this._nodeCanvas) && this._canvasDrawingPromise || this._setupCanvas(), await this._canvasDrawingPromise, this._domCanvas || this._nodeCanvas);
          }
          update(t3) {
            M._clearContainer(this._container), this._options = t3 ? x(e2(this._options, t3)) : this._options, this._options.data && (this._qr = C()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || (function(t4) {
              switch (true) {
                case /^[0-9]*$/.test(t4):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(t4):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            })(this._options.data)), this._qr.make(), this._options.type === _ ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }
          append(t3) {
            if (t3) {
              if ("function" != typeof t3.appendChild) throw "Container should be a single DOM node";
              this._options.type === _ ? this._domCanvas && t3.appendChild(this._domCanvas) : this._svg && t3.appendChild(this._svg), this._container = t3;
            }
          }
          applyExtension(t3) {
            if (!t3) throw "Extension function should be defined.";
            this._extension = t3, this.update();
          }
          deleteExtension() {
            this._extension = void 0, this.update();
          }
          async getRawData(t3 = "png") {
            if (!this._qr) throw "QR code is empty";
            const e3 = await this._getElement(t3), i2 = A(t3);
            if (!e3) return null;
            if ("svg" === t3.toLowerCase()) {
              const t4 = `<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(e3)}`;
              return "undefined" == typeof Blob || this._options.jsdom ? Buffer.from(t4) : new Blob([t4], { type: i2 });
            }
            return new Promise(((t4) => {
              const r2 = e3;
              if ("toBuffer" in r2) if ("image/png" === i2) t4(r2.toBuffer(i2));
              else if ("image/jpeg" === i2) t4(r2.toBuffer(i2));
              else {
                if ("application/pdf" !== i2) throw Error("Unsupported extension");
                t4(r2.toBuffer(i2));
              }
              else "toBlob" in r2 && r2.toBlob(t4, i2, 1);
            }));
          }
          async download(t3) {
            if (!this._qr) throw "QR code is empty";
            if ("undefined" == typeof Blob) throw "Cannot download in Node.js, call getRawData instead.";
            let e3 = "png", i2 = "qr";
            "string" == typeof t3 ? (e3 = t3, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t3 && null !== t3 && (t3.name && (i2 = t3.name), t3.extension && (e3 = t3.extension));
            const r2 = await this._getElement(e3);
            if (r2) if ("svg" === e3.toLowerCase()) {
              let t4 = new XMLSerializer().serializeToString(r2);
              t4 = '<?xml version="1.0" standalone="no"?>\r\n' + t4, n(`data:${A(e3)};charset=utf-8,${encodeURIComponent(t4)}`, `${i2}.svg`);
            } else n(r2.toDataURL(A(e3)), `${i2}.${e3}`);
          }
        }
        const $ = M;
      })(), r.default;
    })()));
  }
});

// src/constants.ts
var STORAGE_KEY = "flyqrcode_history_v1";
var MAX_HISTORY = 50;
var STYLE_PRESETS = {
  mi: {
    id: "mi",
    name: "\u6696\u8272\u6A59",
    desc: "\u6A59\u8272\u6E10\u53D8\uFF0C\u9002\u5408\u5BA3\u4F20\u4E0E\u6D3B\u52A8\u9875",
    style: {
      fgColor: "#333333",
      bgColor: "#ffffff",
      dotType: "rounded",
      cornerSquareType: "extra-rounded",
      cornerDotType: "dot",
      fgGradient: {
        type: "linear",
        rotation: 0.785,
        colorStops: [
          { offset: 0, color: "#ff6700" },
          { offset: 1, color: "#ff9a44" }
        ]
      }
    }
  },
  ocean: {
    id: "ocean",
    name: "\u6D77\u6D0B\u84DD",
    desc: "\u6E05\u723D\u6E10\u53D8\uFF0C\u9002\u5408\u94FE\u63A5\u4E0E\u6587\u6863",
    style: {
      fgColor: "#1565c0",
      bgColor: "#f5f9ff",
      dotType: "classy-rounded",
      cornerSquareType: "extra-rounded",
      cornerDotType: "dot",
      fgGradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#0d47a1" },
          { offset: 1, color: "#42a5f5" }
        ]
      }
    }
  },
  forest: {
    id: "forest",
    name: "\u68EE\u6797\u7EFF",
    desc: "\u6C89\u7A33\u914D\u8272\uFF0C\u9002\u5408\u5185\u90E8\u5DE5\u5177",
    style: {
      fgColor: "#2e7d32",
      bgColor: "#f6faf6",
      dotType: "dots",
      cornerSquareType: "dot",
      cornerDotType: "dot",
      fgGradient: {
        type: "linear",
        rotation: 1.2,
        colorStops: [
          { offset: 0, color: "#1b5e20" },
          { offset: 1, color: "#66bb6a" }
        ]
      }
    }
  },
  mono: {
    id: "mono",
    name: "\u6781\u7B80\u9ED1\u767D",
    desc: "\u9AD8\u5BF9\u6BD4\u6253\u5370\u53CB\u597D",
    style: {
      fgColor: "#111111",
      bgColor: "#ffffff",
      dotType: "square",
      cornerSquareType: "square",
      cornerDotType: "square",
      fgGradient: null
    }
  },
  night: {
    id: "night",
    name: "\u6697\u591C\u7D2B",
    desc: "\u6DF1\u8272\u80CC\u666F\u5C55\u793A\u9875",
    style: {
      fgColor: "#e1bee7",
      bgColor: "#1a1a2e",
      dotType: "rounded",
      cornerSquareType: "extra-rounded",
      cornerDotType: "dot",
      fgGradient: {
        type: "radial",
        colorStops: [
          { offset: 0, color: "#ce93d8" },
          { offset: 1, color: "#7b1fa2" }
        ]
      }
    }
  }
};
var DEFAULT_ECC = "Q";
var DEFAULT_FORM = {
  text: "",
  label: "",
  presetId: "mono",
  size: 320,
  margin: 12,
  dotType: "square",
  cornerSquareType: "square",
  cornerDotType: "square",
  fgColor: "#111111",
  bgColor: "#ffffff",
  useGradient: false,
  fgGradient: null,
  ecc: DEFAULT_ECC,
  logoDataUrl: ""
};
var DOT_TYPES = [
  { value: "rounded", label: "\u5706\u89D2\u5757" },
  { value: "dots", label: "\u5706\u70B9" },
  { value: "classy-rounded", label: "\u7ECF\u5178\u5706\u89D2" },
  { value: "square", label: "\u65B9\u5757" },
  { value: "extra-rounded", label: "\u8D85\u5706\u89D2" }
];

// src/download.ts
async function downloadQr(qrInstance, extension, baseName) {
  const safeName = (baseName || "qrcode").replace(/[<>:"/\\|?*]/g, "_").slice(0, 80);
  await qrInstance.download({ name: safeName, extension });
}
async function copyQrToClipboard(qrInstance) {
  const blob = await qrInstance.getRawData("png");
  if (!blob || typeof ClipboardItem === "undefined") {
    throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\u5230\u526A\u8D34\u677F");
  }
  await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
}

// src/generator.ts
var import_qr_code_styling = __toESM(require_qr_code_styling());
function formToStyleConfig(form) {
  const preset = STYLE_PRESETS[form.presetId ?? "mono"] ?? STYLE_PRESETS.mono;
  return {
    text: String(form.text ?? "").trim(),
    label: String(form.label ?? "").trim(),
    presetId: form.presetId || preset.id,
    size: Number(form.size) || 320,
    margin: Number(form.margin) ?? 12,
    dotType: form.dotType || preset.style.dotType || "rounded",
    cornerSquareType: form.cornerSquareType || preset.style.cornerSquareType || "extra-rounded",
    cornerDotType: form.cornerDotType || preset.style.cornerDotType || "dot",
    fgColor: form.fgColor || preset.style.fgColor || "#333",
    bgColor: form.bgColor || preset.style.bgColor || "#fff",
    useGradient: !!form.useGradient && !!preset.style.fgGradient,
    fgGradient: preset.style.fgGradient ?? null,
    ecc: form.ecc || DEFAULT_ECC,
    logoDataUrl: form.logoDataUrl || ""
  };
}
function styleConfigToQrOptions(cfg) {
  const dotsColor = cfg.useGradient && cfg.fgGradient ? { gradient: cfg.fgGradient } : { color: cfg.fgColor };
  const options = {
    width: cfg.size,
    height: cfg.size,
    type: "canvas",
    data: cfg.text,
    margin: cfg.margin,
    qrOptions: { errorCorrectionLevel: cfg.ecc },
    dotsOptions: {
      type: cfg.dotType,
      ...dotsColor
    },
    cornersSquareOptions: {
      type: cfg.cornerSquareType,
      ...dotsColor
    },
    cornersDotOptions: {
      type: cfg.cornerDotType,
      ...dotsColor
    },
    backgroundOptions: {
      color: cfg.bgColor
    }
  };
  if (cfg.logoDataUrl) {
    options.image = cfg.logoDataUrl;
    options.imageOptions = {
      hideBackgroundDots: true,
      imageSize: 0.38,
      margin: 6,
      crossOrigin: "anonymous"
    };
  }
  return options;
}
function createQrInstance(container, styleConfig) {
  container.innerHTML = "";
  const qr = new import_qr_code_styling.default(styleConfigToQrOptions(styleConfig));
  qr.append(container);
  return qr;
}
function applyPresetToForm(form, presetId) {
  const preset = STYLE_PRESETS[presetId];
  if (!preset) return form;
  return {
    ...form,
    presetId,
    dotType: preset.style.dotType ?? form.dotType,
    cornerSquareType: preset.style.cornerSquareType ?? form.cornerSquareType,
    cornerDotType: preset.style.cornerDotType ?? form.cornerDotType,
    fgColor: preset.style.fgColor ?? form.fgColor,
    bgColor: preset.style.bgColor ?? form.bgColor,
    useGradient: !!preset.style.fgGradient,
    fgGradient: preset.style.fgGradient ?? null
  };
}

// src/i18n.ts
var STORAGE_KEY2 = "flyqrcode_locale";
var PATH_LOCALES = [
  { pattern: /\/en(?:\/|$)/, locale: "en" },
  { pattern: /\/ja(?:\/|$)/, locale: "ja" },
  { pattern: /\/ko(?:\/|$)/, locale: "ko" },
  { pattern: /\/zh-tw(?:\/|$)/i, locale: "zhTW" }
];
var messages = {
  zh: {
    presets: {
      mi: { name: "\u6696\u8272\u6A59", desc: "\u6A59\u8272\u6E10\u53D8\uFF0C\u9002\u5408\u5BA3\u4F20\u4E0E\u6D3B\u52A8\u9875" },
      ocean: { name: "\u6D77\u6D0B\u84DD", desc: "\u6E05\u723D\u6E10\u53D8\uFF0C\u9002\u5408\u94FE\u63A5\u4E0E\u6587\u6863" },
      forest: { name: "\u68EE\u6797\u7EFF", desc: "\u6C89\u7A33\u914D\u8272\uFF0C\u9002\u5408\u5185\u90E8\u5DE5\u5177" },
      mono: { name: "\u6781\u7B80\u9ED1\u767D", desc: "\u9AD8\u5BF9\u6BD4\u6253\u5370\u53CB\u597D" },
      night: { name: "\u6697\u591C\u7D2B", desc: "\u6DF1\u8272\u80CC\u666F\u5C55\u793A\u9875" }
    },
    dotTypes: {
      rounded: "\u5706\u89D2\u5757",
      dots: "\u5706\u70B9",
      "classy-rounded": "\u7ECF\u5178\u5706\u89D2",
      square: "\u65B9\u5757",
      "extra-rounded": "\u8D85\u5706\u89D2"
    },
    toast: {
      restored: "\u5DF2\u8F7D\u5165\u5386\u53F2\u8BB0\u5F55\uFF0C\u53EF\u7EE7\u7EED\u7F16\u8F91",
      generateFailed: "\u751F\u6210\u5931\u8D25",
      enterContent: "\u8BF7\u5148\u8F93\u5165\u4E8C\u7EF4\u7801\u5185\u5BB9",
      saved: "\u5DF2\u4FDD\u5B58\u5230\u5386\u53F2\u8BB0\u5F55",
      pickImage: "\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
      logoSize: "Logo \u5EFA\u8BAE\u5C0F\u4E8E 512KB",
      generateFirst: "\u8BF7\u5148\u751F\u6210\u4E8C\u7EF4\u7801",
      pngDownloaded: "PNG \u5DF2\u5F00\u59CB\u4E0B\u8F7D",
      svgDownloaded: "SVG \u5DF2\u5F00\u59CB\u4E0B\u8F7D",
      copied: "\u5DF2\u590D\u5236 PNG \u5230\u526A\u8D34\u677F",
      copyFailed: "\u590D\u5236\u5931\u8D25",
      cleared: "\u5386\u53F2\u5DF2\u6E05\u7A7A"
    },
    history: {
      custom: "\u81EA\u5B9A\u4E49",
      untitled: "\u672A\u547D\u540D",
      edit: "\u7F16\u8F91",
      delete: "\u5220\u9664",
      confirmClear: "\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u5386\u53F2\u8BB0\u5F55\uFF1F"
    },
    form: {
      pickFile: "\u9009\u62E9\u6587\u4EF6",
      noFileSelected: "\u672A\u9009\u62E9\u6587\u4EF6",
      imageLoaded: "\u5DF2\u9009\u62E9\u56FE\u7247"
    }
  },
  en: {
    presets: {
      mi: { name: "Warm Orange", desc: "Orange gradient for promos and events" },
      ocean: { name: "Ocean Blue", desc: "Fresh gradient for links and docs" },
      forest: { name: "Forest Green", desc: "Calm palette for internal tools" },
      mono: { name: "Minimal B&W", desc: "High contrast, print-friendly" },
      night: { name: "Night Purple", desc: "Dark background showcase style" }
    },
    dotTypes: {
      rounded: "Rounded",
      dots: "Dots",
      "classy-rounded": "Classy rounded",
      square: "Square",
      "extra-rounded": "Extra rounded"
    },
    toast: {
      restored: "History loaded \u2014 you can keep editing",
      generateFailed: "Failed to generate QR code",
      enterContent: "Please enter QR content first",
      saved: "Saved to history",
      pickImage: "Please choose an image file",
      logoSize: "Logo should be under 512KB",
      generateFirst: "Generate a QR code first",
      pngDownloaded: "PNG download started",
      svgDownloaded: "SVG download started",
      copied: "PNG copied to clipboard",
      copyFailed: "Copy failed",
      cleared: "History cleared"
    },
    history: {
      custom: "Custom",
      untitled: "Untitled",
      edit: "Edit",
      delete: "Delete",
      confirmClear: "Clear all history?"
    },
    form: {
      pickFile: "Choose file",
      noFileSelected: "No file chosen",
      imageLoaded: "Image selected"
    }
  },
  ja: {
    presets: {
      mi: { name: "\u30A6\u30A9\u30FC\u30E0\u30AA\u30EC\u30F3\u30B8", desc: "\u30D7\u30ED\u30E2\u5411\u3051\u30AA\u30EC\u30F3\u30B8\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3" },
      ocean: { name: "\u30AA\u30FC\u30B7\u30E3\u30F3\u30D6\u30EB\u30FC", desc: "\u30EA\u30F3\u30AF\u30FB\u8CC7\u6599\u5411\u3051\u306E\u723D\u3084\u304B\u306A\u914D\u8272" },
      forest: { name: "\u30D5\u30A9\u30EC\u30B9\u30C8\u30B0\u30EA\u30FC\u30F3", desc: "\u843D\u3061\u7740\u3044\u305F\u5185\u90E8\u30C4\u30FC\u30EB\u5411\u3051" },
      mono: { name: "\u30DF\u30CB\u30DE\u30EB\u767D\u9ED2", desc: "\u5370\u5237\u5411\u3051\u9AD8\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8" },
      night: { name: "\u30CA\u30A4\u30C8\u30D1\u30FC\u30D7\u30EB", desc: "\u30C0\u30FC\u30AF\u80CC\u666F\u5411\u3051\u30B9\u30BF\u30A4\u30EB" }
    },
    dotTypes: {
      rounded: "\u89D2\u4E38",
      dots: "\u30C9\u30C3\u30C8",
      "classy-rounded": "\u30AF\u30E9\u30B7\u30C3\u30AF\u89D2\u4E38",
      square: "\u30B9\u30AF\u30A8\u30A2",
      "extra-rounded": "\u8D85\u89D2\u4E38"
    },
    toast: {
      restored: "\u5C65\u6B74\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F\u3002\u7DE8\u96C6\u3092\u7D9A\u3051\u3089\u308C\u307E\u3059",
      generateFailed: "QR\u30B3\u30FC\u30C9\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
      enterContent: "QR\u30B3\u30FC\u30C9\u306E\u5185\u5BB9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
      saved: "\u5C65\u6B74\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F",
      pickImage: "\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
      logoSize: "\u30ED\u30B4\u306F512KB\u672A\u6E80\u3092\u63A8\u5968\u3057\u307E\u3059",
      generateFirst: "\u5148\u306BQR\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u3066\u304F\u3060\u3055\u3044",
      pngDownloaded: "PNG\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
      svgDownloaded: "SVG\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
      copied: "PNG\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
      copyFailed: "\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
      cleared: "\u5C65\u6B74\u3092\u6D88\u53BB\u3057\u307E\u3057\u305F"
    },
    history: {
      custom: "\u30AB\u30B9\u30BF\u30E0",
      untitled: "\u7121\u984C",
      edit: "\u7DE8\u96C6",
      delete: "\u524A\u9664",
      confirmClear: "\u5C65\u6B74\u3092\u3059\u3079\u3066\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F"
    },
    form: {
      pickFile: "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E",
      noFileSelected: "\u30D5\u30A1\u30A4\u30EB\u672A\u9078\u629E",
      imageLoaded: "\u753B\u50CF\u3092\u9078\u629E\u6E08\u307F"
    }
  },
  ko: {
    presets: {
      mi: { name: "\uC6DC \uC624\uB80C\uC9C0", desc: "\uD64D\uBCF4\xB7\uC774\uBCA4\uD2B8\uC6A9 \uC624\uB80C\uC9C0 \uADF8\uB77C\uB370\uC774\uC158" },
      ocean: { name: "\uC624\uC158 \uBE14\uB8E8", desc: "\uB9C1\uD06C\xB7\uBB38\uC11C\uC6A9 \uC2DC\uC6D0\uD55C \uC0C9\uC0C1" },
      forest: { name: "\uD3EC\uB808\uC2A4\uD2B8 \uADF8\uB9B0", desc: "\uB0B4\uBD80 \uB3C4\uAD6C\uC6A9 \uCC28\uBD84\uD55C \uC0C9\uC0C1" },
      mono: { name: "\uBBF8\uB2C8\uBA40 \uD751\uBC31", desc: "\uC778\uC1C4\uC6A9 \uACE0\uB300\uBE44" },
      night: { name: "\uB098\uC774\uD2B8 \uD37C\uD50C", desc: "\uB2E4\uD06C \uBC30\uACBD \uC2A4\uD0C0\uC77C" }
    },
    dotTypes: {
      rounded: "\uB465\uADFC \uBAA8\uC11C\uB9AC",
      dots: "\uC810",
      "classy-rounded": "\uD074\uB798\uC2DD \uB465\uADFC",
      square: "\uC0AC\uAC01\uD615",
      "extra-rounded": "\uCD08\uB465\uADFC"
    },
    toast: {
      restored: "\uAE30\uB85D\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. \uACC4\uC18D \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
      generateFailed: "QR \uCF54\uB4DC \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4",
      enterContent: "QR \uB0B4\uC6A9\uC744 \uBA3C\uC800 \uC785\uB825\uD558\uC138\uC694",
      saved: "\uAE30\uB85D\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4",
      pickImage: "\uC774\uBBF8\uC9C0 \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694",
      logoSize: "\uB85C\uACE0\uB294 512KB \uBBF8\uB9CC\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4",
      generateFirst: "\uBA3C\uC800 QR \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uC138\uC694",
      pngDownloaded: "PNG \uB2E4\uC6B4\uB85C\uB4DC\uB97C \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4",
      svgDownloaded: "SVG \uB2E4\uC6B4\uB85C\uB4DC\uB97C \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4",
      copied: "PNG\uB97C \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4",
      copyFailed: "\uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4",
      cleared: "\uAE30\uB85D\uC744 \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4"
    },
    history: {
      custom: "\uC0AC\uC6A9\uC790 \uC9C0\uC815",
      untitled: "\uC81C\uBAA9 \uC5C6\uC74C",
      edit: "\uD3B8\uC9D1",
      delete: "\uC0AD\uC81C",
      confirmClear: "\uBAA8\uB4E0 \uAE30\uB85D\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?"
    },
    form: {
      pickFile: "\uD30C\uC77C \uC120\uD0DD",
      noFileSelected: "\uC120\uD0DD\uB41C \uD30C\uC77C \uC5C6\uC74C",
      imageLoaded: "\uC774\uBBF8\uC9C0 \uC120\uD0DD\uB428"
    }
  },
  zhTW: {
    presets: {
      mi: { name: "\u6696\u8272\u6A59", desc: "\u6A59\u8272\u6F38\u5C64\uFF0C\u9069\u5408\u5BA3\u50B3\u8207\u6D3B\u52D5\u9801" },
      ocean: { name: "\u6D77\u6D0B\u85CD", desc: "\u6E05\u723D\u6F38\u5C64\uFF0C\u9069\u5408\u9023\u7D50\u8207\u6587\u4EF6" },
      forest: { name: "\u68EE\u6797\u7DA0", desc: "\u6C89\u7A69\u914D\u8272\uFF0C\u9069\u5408\u5167\u90E8\u5DE5\u5177" },
      mono: { name: "\u6975\u7C21\u9ED1\u767D", desc: "\u9AD8\u5C0D\u6BD4\u5370\u5237\u53CB\u5584" },
      night: { name: "\u6697\u591C\u7D2B", desc: "\u6DF1\u8272\u80CC\u666F\u5C55\u793A\u9801" }
    },
    dotTypes: {
      rounded: "\u5713\u89D2\u584A",
      dots: "\u5713\u9EDE",
      "classy-rounded": "\u7D93\u5178\u5713\u89D2",
      square: "\u65B9\u584A",
      "extra-rounded": "\u8D85\u5713\u89D2"
    },
    toast: {
      restored: "\u5DF2\u8F09\u5165\u6B77\u53F2\u8A18\u9304\uFF0C\u53EF\u7E7C\u7E8C\u7DE8\u8F2F",
      generateFailed: "\u7522\u751F\u5931\u6557",
      enterContent: "\u8ACB\u5148\u8F38\u5165 QR Code \u5167\u5BB9",
      saved: "\u5DF2\u5132\u5B58\u5230\u6B77\u53F2\u8A18\u9304",
      pickImage: "\u8ACB\u9078\u64C7\u5716\u7247\u6A94\u6848",
      logoSize: "Logo \u5EFA\u8B70\u5C0F\u65BC 512KB",
      generateFirst: "\u8ACB\u5148\u7522\u751F QR Code",
      pngDownloaded: "PNG \u5DF2\u958B\u59CB\u4E0B\u8F09",
      svgDownloaded: "SVG \u5DF2\u958B\u59CB\u4E0B\u8F09",
      copied: "\u5DF2\u8907\u88FD PNG \u5230\u526A\u8CBC\u7C3F",
      copyFailed: "\u8907\u88FD\u5931\u6557",
      cleared: "\u6B77\u53F2\u5DF2\u6E05\u7A7A"
    },
    history: {
      custom: "\u81EA\u8A02",
      untitled: "\u672A\u547D\u540D",
      edit: "\u7DE8\u8F2F",
      delete: "\u522A\u9664",
      confirmClear: "\u78BA\u5B9A\u6E05\u7A7A\u5168\u90E8\u6B77\u53F2\u8A18\u9304\uFF1F"
    },
    form: {
      pickFile: "\u9078\u64C7\u6A94\u6848",
      noFileSelected: "\u672A\u9078\u64C7\u6A94\u6848",
      imageLoaded: "\u5DF2\u9078\u64C7\u5716\u7247"
    }
  }
};
var ROOT_PAGES = /\/(?:index\.html|about\.html|contact\.html|privacy\.html|terms\.html)?$/;
function detectBrowserLocale() {
  const langs = navigator.languages?.length ? [...navigator.languages] : [navigator.language || "en"];
  for (const raw of langs) {
    const nav = raw.toLowerCase();
    if (nav.startsWith("zh-tw") || nav.startsWith("zh-hk") || nav.startsWith("zh-hant")) return "zhTW";
    if (nav.startsWith("zh")) return "zh";
    if (nav.startsWith("ja")) return "ja";
    if (nav.startsWith("ko")) return "ko";
    if (nav.startsWith("en")) return "en";
  }
  return "en";
}
function getLocale() {
  const path = window.location.pathname;
  for (const { pattern, locale: locale2 } of PATH_LOCALES) {
    if (pattern.test(path)) return locale2;
  }
  if (ROOT_PAGES.test(path)) return "zh";
  const stored = localStorage.getItem(STORAGE_KEY2);
  if (stored && stored in messages) return stored;
  return detectBrowserLocale();
}
function getHtmlLang(locale2) {
  const map = {
    zh: "zh-CN",
    en: "en",
    ja: "ja",
    ko: "ko",
    zhTW: "zh-TW"
  };
  return map[locale2];
}
function presetLabel(id, field, locale2 = getLocale()) {
  const presets = messages[locale2].presets;
  return presets[id]?.[field] ?? id;
}
function dotTypeLabel(value, locale2 = getLocale()) {
  const dots = messages[locale2].dotTypes;
  return dots[value] ?? value;
}
function msg(key, locale2 = getLocale()) {
  return messages[locale2].toast[key];
}
function hist(key, locale2 = getLocale()) {
  return messages[locale2].history[key];
}
function formUi(key, locale2 = getLocale()) {
  return messages[locale2].form[key];
}
function bcp47Locale(locale2) {
  const map = {
    zh: "zh-CN",
    en: "en-US",
    ja: "ja-JP",
    ko: "ko-KR",
    zhTW: "zh-TW"
  };
  return map[locale2];
}

// src/utils.ts
function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `qr_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}
function formatDateTime(ts, locale2 = "zh") {
  return new Date(ts).toLocaleString(bcp47Locale(locale2), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}
function truncate(text, max = 48) {
  const s = String(text ?? "").replace(/\s+/g, " ");
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + "\u2026";
}
function escapeHtml(text) {
  return String(text ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function debounce(fn, ms = 280) {
  let timer;
  return ((...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  });
}
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
function queryRequired(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`\u7F3A\u5C11\u5143\u7D20 #${id}`);
  return el;
}

// src/history-view.ts
var HistoryView = class {
  constructor(opts) {
    this.store = opts.store;
    this.listEl = opts.listEl;
    this.emptyEl = opts.emptyEl;
    this.countEl = opts.countEl;
    this.locale = opts.locale;
    this.onRestore = opts.onRestore;
  }
  render() {
    const items = this.store.load();
    this.countEl.textContent = String(items.length);
    this.emptyEl.hidden = items.length > 0;
    this.listEl.innerHTML = "";
    for (const item of items) {
      this.listEl.appendChild(this.createCard(item));
    }
  }
  createCard(item) {
    const card = document.createElement("article");
    card.className = "history-card";
    card.dataset.id = item.id;
    const presetName = STYLE_PRESETS[item.style.presetId] ? presetLabel(item.style.presetId, "name", this.locale) : hist("custom", this.locale);
    const title = item.label || truncate(item.style.text, 36) || hist("untitled", this.locale);
    card.innerHTML = `
            <div class="history-card-thumb" data-thumb></div>
            <div class="history-card-body">
                <h3 class="history-card-title" title="${escapeHtml(item.style.text)}">${escapeHtml(title)}</h3>
                <p class="history-card-meta">${escapeHtml(formatDateTime(item.createdAt, this.locale))} \xB7 ${escapeHtml(presetName)} \xB7 ${item.style.size}px</p>
                <div class="history-card-actions">
                    <button type="button" class="btn btn-ghost btn-sm" data-action="restore">${escapeHtml(hist("edit", this.locale))}</button>
                    <button type="button" class="btn btn-ghost btn-sm" data-action="png">PNG</button>
                    <button type="button" class="btn btn-ghost btn-sm" data-action="svg">SVG</button>
                    <button type="button" class="btn btn-ghost btn-sm btn-danger-text" data-action="delete">${escapeHtml(hist("delete", this.locale))}</button>
                </div>
            </div>
        `;
    const thumbHost = card.querySelector("[data-thumb]");
    if (thumbHost instanceof HTMLElement) {
      this.renderThumb(thumbHost, item.style);
    }
    card.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      e.preventDefault();
      const action = btn.dataset.action;
      if (action === "restore") {
        this.onRestore(item.style);
        return;
      }
      if (action === "delete") {
        this.store.remove(item.id);
        this.render();
        return;
      }
      if (action === "png" || action === "svg") {
        void this.downloadItem(item, action);
      }
    });
    return card;
  }
  renderThumb(host, style) {
    host.innerHTML = "";
    if (!style.text) return;
    try {
      const cfg = formToStyleConfig(style);
      const small = { ...cfg, size: 88, margin: 4, logoDataUrl: "" };
      const wrap = document.createElement("div");
      wrap.className = "history-thumb-inner";
      host.appendChild(wrap);
      createQrInstance(wrap, small);
    } catch {
      host.textContent = "\u2014";
    }
  }
  async downloadItem(item, ext) {
    const host = document.createElement("div");
    host.style.cssText = "position:fixed;left:-9999px;top:0;";
    document.body.appendChild(host);
    try {
      const cfg = formToStyleConfig(item.style);
      const qr = createQrInstance(host, cfg);
      const base = item.label || truncate(item.style.text, 24) || "qrcode";
      await downloadQr(qr, ext, base);
    } finally {
      host.remove();
    }
  }
};

// src/storage.ts
var HistoryStore = class {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const list = JSON.parse(raw);
      return Array.isArray(list) ? list : [];
    } catch {
      return [];
    }
  }
  save(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_HISTORY)));
  }
  add(entry) {
    const list = this.load();
    const item = {
      id: createId(),
      createdAt: Date.now(),
      ...entry
    };
    list.unshift(item);
    this.save(list);
    return item;
  }
  remove(id) {
    const list = this.load().filter((e) => e.id !== id);
    this.save(list);
    return list;
  }
  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
  get(id) {
    return this.load().find((e) => e.id === id) ?? null;
  }
};

// src/app.ts
var locale = getLocale();
document.documentElement.lang = getHtmlLang(locale);
var store = new HistoryStore();
var els = {
  form: queryRequired("qr-form"),
  text: queryRequired("field-text"),
  label: queryRequired("field-label"),
  preset: queryRequired("field-preset"),
  size: queryRequired("field-size"),
  sizeVal: queryRequired("field-size-val"),
  margin: queryRequired("field-margin"),
  dotType: queryRequired("field-dot-type"),
  fgColor: queryRequired("field-fg-color"),
  bgColor: queryRequired("field-bg-color"),
  useGradient: queryRequired("field-use-gradient"),
  logo: queryRequired("field-logo"),
  pickLogo: queryRequired("btn-pick-logo"),
  logoName: queryRequired("field-logo-name"),
  clearLogo: queryRequired("btn-clear-logo"),
  preview: queryRequired("qr-preview"),
  presetGrid: queryRequired("preset-grid"),
  btnGenerate: queryRequired("btn-generate"),
  btnDownloadPng: queryRequired("btn-download-png"),
  btnDownloadSvg: queryRequired("btn-download-svg"),
  btnCopy: queryRequired("btn-copy"),
  toast: queryRequired("toast"),
  historyList: queryRequired("history-list"),
  historyEmpty: queryRequired("history-empty"),
  historyCount: queryRequired("history-count"),
  btnClearHistory: queryRequired("btn-clear-history")
};
var currentQr = null;
var currentStyle = null;
var logoDataUrl = "";
var toastTimer;
var historyView = new HistoryView({
  store,
  listEl: els.historyList,
  emptyEl: els.historyEmpty,
  countEl: els.historyCount,
  locale,
  onRestore: (style) => {
    fillForm(style);
    renderPreview();
    showToast(msg("restored"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
function showToast(text) {
  els.toast.textContent = text;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2400);
}
function readForm() {
  const base = formToStyleConfig({});
  return {
    ...base,
    text: els.text.value,
    label: els.label.value,
    presetId: els.preset.value,
    size: Number(els.size.value),
    margin: Number(els.margin.value),
    dotType: els.dotType.value,
    cornerSquareType: "extra-rounded",
    cornerDotType: "dot",
    fgColor: els.fgColor.value,
    bgColor: els.bgColor.value,
    useGradient: els.useGradient.checked,
    logoDataUrl
  };
}
function fillForm(style) {
  els.text.value = style.text ?? "";
  els.label.value = style.label ?? "";
  els.preset.value = style.presetId ?? "mono";
  els.size.value = String(style.size ?? 320);
  els.sizeVal.textContent = `${els.size.value}px`;
  els.margin.value = String(style.margin ?? 12);
  els.dotType.value = style.dotType ?? "square";
  els.fgColor.value = style.fgColor ?? "#111111";
  els.bgColor.value = style.bgColor ?? "#ffffff";
  els.useGradient.checked = !!style.useGradient;
  logoDataUrl = style.logoDataUrl ?? "";
  updateLogoUi();
  syncPresetCards();
}
function updateLogoUi() {
  els.clearLogo.hidden = !logoDataUrl;
  els.pickLogo.textContent = formUi("pickFile", locale);
  const file = els.logo.files?.[0];
  if (file) {
    els.logoName.textContent = file.name;
  } else if (logoDataUrl) {
    els.logoName.textContent = formUi("imageLoaded", locale);
  } else {
    els.logoName.textContent = formUi("noFileSelected", locale);
  }
}
function syncPresetCards() {
  const id = els.preset.value;
  els.presetGrid.querySelectorAll(".preset-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.preset === id);
  });
}
function renderPreview() {
  const cfg = formToStyleConfig(readForm());
  if (!cfg.text) {
    els.preview.innerHTML = "";
    currentQr = null;
    currentStyle = null;
    return;
  }
  try {
    currentQr = createQrInstance(els.preview, cfg);
    currentStyle = cfg;
  } catch (err) {
    els.preview.innerHTML = "";
    currentQr = null;
    currentStyle = null;
    showToast(err instanceof Error ? err.message : msg("generateFailed"));
  }
}
var debouncedPreview = debounce(renderPreview, 300);
function saveToHistory() {
  if (!currentStyle?.text) {
    showToast(msg("enterContent"));
    return;
  }
  store.add({
    label: currentStyle.label,
    style: { ...currentStyle }
  });
  historyView.render();
  showToast(msg("saved"));
}
function initPresetGrid() {
  els.presetGrid.innerHTML = "";
  for (const preset of Object.values(STYLE_PRESETS)) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "preset-card";
    btn.dataset.preset = preset.id;
    btn.innerHTML = `<span class="preset-card-name">${presetLabel(preset.id, "name")}</span><span class="preset-card-desc">${presetLabel(preset.id, "desc")}</span>`;
    btn.addEventListener("click", () => {
      els.preset.value = preset.id;
      fillForm(applyPresetToForm(readForm(), preset.id));
      renderPreview();
    });
    els.presetGrid.appendChild(btn);
  }
}
function initSelects() {
  els.dotType.innerHTML = "";
  els.preset.innerHTML = "";
  for (const d of DOT_TYPES) {
    const opt = document.createElement("option");
    opt.value = d.value;
    opt.textContent = dotTypeLabel(d.value);
    els.dotType.appendChild(opt);
  }
  for (const p of Object.values(STYLE_PRESETS)) {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = presetLabel(p.id, "name");
    els.preset.appendChild(opt);
  }
}
function bindEvents() {
  els.form.addEventListener("input", debouncedPreview);
  els.form.addEventListener("change", debouncedPreview);
  els.size.addEventListener("input", () => {
    els.sizeVal.textContent = `${els.size.value}px`;
  });
  els.preset.addEventListener("change", () => {
    fillForm(applyPresetToForm(readForm(), els.preset.value));
    renderPreview();
  });
  els.pickLogo.addEventListener("click", () => {
    els.logo.click();
  });
  els.logo.addEventListener("change", async () => {
    const file = els.logo.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast(msg("pickImage"));
      return;
    }
    if (file.size > 512 * 1024) {
      showToast(msg("logoSize"));
    }
    logoDataUrl = await fileToDataUrl(file);
    updateLogoUi();
    renderPreview();
  });
  els.clearLogo.addEventListener("click", () => {
    logoDataUrl = "";
    els.logo.value = "";
    updateLogoUi();
    renderPreview();
  });
  els.btnGenerate.addEventListener("click", () => {
    renderPreview();
    if (currentStyle) saveToHistory();
  });
  els.btnDownloadPng.addEventListener("click", async () => {
    if (!currentQr || !currentStyle) {
      showToast(msg("generateFirst"));
      return;
    }
    await downloadQr(currentQr, "png", currentStyle.label || "qrcode");
    showToast(msg("pngDownloaded"));
  });
  els.btnDownloadSvg.addEventListener("click", async () => {
    if (!currentQr || !currentStyle) {
      showToast(msg("generateFirst"));
      return;
    }
    await downloadQr(currentQr, "svg", currentStyle.label || "qrcode");
    showToast(msg("svgDownloaded"));
  });
  els.btnCopy.addEventListener("click", async () => {
    if (!currentQr) {
      showToast(msg("generateFirst"));
      return;
    }
    try {
      await copyQrToClipboard(currentQr);
      showToast(msg("copied"));
    } catch (err) {
      showToast(err instanceof Error ? err.message : msg("copyFailed"));
    }
  });
  els.btnClearHistory.addEventListener("click", () => {
    if (!confirm(hist("confirmClear"))) return;
    store.clear();
    historyView.render();
    showToast(msg("cleared"));
  });
}
function init() {
  initSelects();
  initPresetGrid();
  fillForm(DEFAULT_FORM);
  bindEvents();
  renderPreview();
  historyView.render();
}
init();
