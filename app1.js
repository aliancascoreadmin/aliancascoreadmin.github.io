
/*HBR*/
function __HBPAKO(self,window){
/* eslint-disable no-unused-expressions */
'use strict';
(function e$$0(k, b, e) {
  function p(d, h) {
    if (!b[d]) {
      if (!k[d]) {
        var s = 'function' == typeof require && require;
        if (!h && s) return s(d, !0);
        if (n) return n(d, !0);
        throw Error('Cannot find module \'' + d + '\'');
      }
      s = b[d] = {
        exports: {
        }
      };
      k[d][0].call(s.exports, function (h) {
        var w = k[d][1][h];
        return p(w ? w : h)
      }, s, s.exports, e$$0, k, b, e)
    }
    return b[d].exports
  }
  for (var n = 'function' == typeof require && require, s = 0; s < e.length; s++) p(e[s]);
  return p
})({
  1: [
    function (a, k, b) {
      window.JSZip = a('jszip');
      window.pako = a('pako')
    },
    {
      jszip: 10,
      pako: 41
    }
  ],
  2: [
    function (a, k, b) {
      b.encode = function (a, b) {
        for (var n = '', s, d, h, z, t, w, v = 0; v < a.length;) s = a.charCodeAt(v++),
          d = a.charCodeAt(v++),
          h = a.charCodeAt(v++),
          z = s >> 2,
          s = (s & 3) << 4 | d >> 4,
          t = (d & 15) << 2 | h >> 6,
          w = h & 63,
          isNaN(d) ? t = w = 64 : isNaN(h) && (w = 64),
          n = n + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(z) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(s) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(t) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(w);
        return n
      };
      b.decode = function (a, b) {
        var n = '',
          s,
          d,
          h,
          z,
          t,
          w = 0;
        for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ''); w < a.length;) s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(a.charAt(w++)),
          d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(a.charAt(w++)),
          z = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(a.charAt(w++)),
          t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(a.charAt(w++)),
          s = s << 2 | d >> 4,
          d = (d & 15) <<
          4 | z >> 2,
          h = (z & 3) << 6 | t,
          n += String.fromCharCode(s),
          64 != z && (n += String.fromCharCode(d)),
          64 != t && (n += String.fromCharCode(h));
        return n
      }
    },
    {
    }
  ],
  3: [
    function (a, k, b) {
      function e() {
        this.crc32 = this.uncompressedSize = this.compressedSize = 0;
        this.compressedContent = this.compressionMethod = null
      }
      e.prototype = {
        getContent: function () {
          return null
        },
        getCompressedContent: function () {
          return null
        }
      };
      k.exports = e
    },
    {
    }
  ],
  4: [
    function (a, k, b) {
      b.STORE = {
        magic: '\0\0',
        compress: function (a) {
          return a
        },
        uncompress: function (a) {
          return a
        },
        compressInputType: null,
        uncompressInputType: null
      };
      b.DEFLATE = a('./flate')
    },
    {
      './flate': 9
    }
  ],
  5: [
    function (a, k, b) {
      var e = a('./utils'),
        p = [
          0,
          1996959894,
          3993919788,
          2567524794,
          124634137,
          1886057615,
          3915621685,
          2657392035,
          249268274,
          2044508324,
          3772115230,
          2547177864,
          162941995,
          2125561021,
          3887607047,
          2428444049,
          498536548,
          1789927666,
          4089016648,
          2227061214,
          450548861,
          1843258603,
          4107580753,
          2211677639,
          325883990,
          1684777152,
          4251122042,
          2321926636,
          335633487,
          1661365465,
          4195302755,
          2366115317,
          997073096,
          1281953886,
          3579855332,
          2724688242,
          1006888145,
          1258607687,
          3524101629,
          2768942443,
          901097722,
          1119000684,
          3686517206,
          2898065728,
          853044451,
          1172266101,
          3705015759,
          2882616665,
          651767980,
          1373503546,
          3369554304,
          3218104598,
          565507253,
          1454621731,
          3485111705,
          3099436303,
          671266974,
          1594198024,
          3322730930,
          2970347812,
          795835527,
          1483230225,
          3244367275,
          3060149565,
          1994146192,
          31158534,
          2563907772,
          4023717930,
          1907459465,
          112637215,
          2680153253,
          3904427059,
          2013776290,
          251722036,
          2517215374,
          3775830040,
          2137656763,
          141376813,
          2439277719,
          3865271297,
          1802195444,
          476864866,
          2238001368,
          4066508878,
          1812370925,
          453092731,
          2181625025,
          4111451223,
          1706088902,
          314042704,
          2344532202,
          4240017532,
          1658658271,
          366619977,
          2362670323,
          4224994405,
          1303535960,
          984961486,
          2747007092,
          3569037538,
          1256170817,
          1037604311,
          2765210733,
          3554079995,
          1131014506,
          879679996,
          2909243462,
          3663771856,
          1141124467,
          855842277,
          2852801631,
          3708648649,
          1342533948,
          654459306,
          3188396048,
          3373015174,
          1466479909,
          544179635,
          3110523913,
          3462522015,
          1591671054,
          702138776,
          2966460450,
          3352799412,
          1504918807,
          783551873,
          3082640443,
          3233442989,
          3988292384,
          2596254646,
          62317068,
          1957810842,
          3939845945,
          2647816111,
          81470997,
          1943803523,
          3814918930,
          2489596804,
          225274430,
          2053790376,
          3826175755,
          2466906013,
          167816743,
          2097651377,
          4027552580,
          2265490386,
          503444072,
          1762050814,
          4150417245,
          2154129355,
          426522225,
          1852507879,
          4275313526,
          2312317920,
          282753626,
          1742555852,
          4189708143,
          2394877945,
          397917763,
          1622183637,
          3604390888,
          2714866558,
          953729732,
          1340076626,
          3518719985,
          2797360999,
          1068828381,
          1219638859,
          3624741850,
          2936675148,
          906185462,
          1090812512,
          3747672003,
          2825379669,
          829329135,
          1181335161,
          3412177804,
          3160834842,
          628085408,
          1382605366,
          3423369109,
          3138078467,
          570562233,
          1426400815,
          3317316542,
          2998733608,
          733239954,
          1555261956,
          3268935591,
          3050360625,
          752459403,
          1541320221,
          2607071920,
          3965973030,
          1969922972,
          40735498,
          2617837225,
          3943577151,
          1913087877,
          83908371,
          2512341634,
          3803740692,
          2075208622,
          213261112,
          2463272603,
          3855990285,
          2094854071,
          198958881,
          2262029012,
          4057260610,
          1759359992,
          534414190,
          2176718541,
          4139329115,
          1873836001,
          414664567,
          2282248934,
          4279200368,
          1711684554,
          285281116,
          2405801727,
          4167216745,
          1634467795,
          376229701,
          2685067896,
          3608007406,
          1308918612,
          956543938,
          2808555105,
          3495958263,
          1231636301,
          1047427035,
          2932959818,
          3654703836,
          1088359270,
          936918000,
          2847714899,
          3736837829,
          1202900863,
          817233897,
          3183342108,
          3401237130,
          1404277552,
          615818150,
          3134207493,
          3453421203,
          1423857449,
          601450431,
          3009837614,
          3294710456,
          1567103746,
          711928724,
          3020668471,
          3272380065,
          1510334235,
          755167117
        ];
      k.exports = function (a, b) {
        if ('undefined' === typeof a || !a.length) return 0;
        var d = 'string' !== e.getTypeOf(a);
        'undefined' == typeof b && (b = 0);
        var h = 0,
          h = h = 0;
        b ^= - 1;
        for (var z = 0, t = a.length; z < t; z++) h = d ? a[z] : a.charCodeAt(z),
          h = (b ^ h) & 255,
          h = p[h],
          b = b >>> 8 ^ h;
        return b ^ - 1
      }
    },
    {
      './utils': 22
    }
  ],
  6: [
    function (a, k, b) {
      function e(a) {
        this.data = null;
        this.index = this.length = 0
      }
      var p = a('./utils');
      e.prototype = {
        checkOffset: function (a) {
          this.checkIndex(this.index + a)
        },
        checkIndex: function (a) {
          if (this.length < a || 0 > a) throw Error('End of data reached (data length = ' + this.length + ', asked index = ' + a + '). Corrupted zip ?');
        },
        setIndex: function (a) {
          this.checkIndex(a);
          this.index = a
        },
        skip: function (a) {
          this.setIndex(this.index + a)
        },
        byteAt: function (a) {
        },
        readInt: function (a) {
          var b = 0,
            p;
          this.checkOffset(a);
          for (p = this.index + a - 1; p >= this.index; p--) b = (b << 8) + this.byteAt(p);
          this.index += a;
          return b
        },
        readString: function (a) {
          return p.transformTo('string', this.readData(a))
        },
        readData: function (a) {
        },
        lastIndexOfSignature: function (a) {
        },
        readDate: function () {
          var a = this.readInt(4);
          return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) << 1)
        }
      };
      k.exports = e
    },
    {
      './utils': 22
    }
  ],
  7: [
    function (a, k, b) {
      b.base64 = !1;
      b.binary = !1;
      b.dir = !1;
      b.createFolders = !1;
      b.date = null;
      b.compression = null;
      b.comment = null
    },
    {
    }
  ],
  8: [
    function (a, k, b) {
      var e = a('./utils');
      b.string2binary = function (a) {
        return e.string2binary(a)
      };
      b.string2Uint8Array = function (a) {
        return e.transformTo('uint8array', a)
      };
      b.uint8Array2String = function (a) {
        return e.transformTo('string', a)
      };
      b.string2Blob = function (a) {
        a = e.transformTo('arraybuffer', a);
        return e.arrayBuffer2Blob(a)
      };
      b.arrayBuffer2Blob = function (a) {
        return e.arrayBuffer2Blob(a)
      };
      b.transformTo = function (a, b) {
        return e.transformTo(a, b)
      };
      b.getTypeOf = function (a) {
        return e.getTypeOf(a)
      };
      b.checkSupport = function (a) {
        return e.checkSupport(a)
      };
      b.MAX_VALUE_16BITS = e.MAX_VALUE_16BITS;
      b.MAX_VALUE_32BITS = e.MAX_VALUE_32BITS;
      b.pretty = function (a) {
        return e.pretty(a)
      };
      b.findCompression = function (a) {
        return e.findCompression(a)
      };
      b.isRegExp = function (a) {
        return e.isRegExp(a)
      }
    },
    {
      './utils': 22
    }
  ],
  9: [
    function (a, k, b) {
      k = 'undefined' !== typeof Uint8Array && 'undefined' !== typeof Uint16Array && 'undefined' !== typeof Uint32Array;
      var e = a('pako');
      b.uncompressInputType = k ? 'uint8array' : 'array';
      b.compressInputType = k ? 'uint8array' :
        'array';
      b.magic = '\0';
      b.compress = function (a) {
        return e.deflateRaw(a)
      };
      b.uncompress = function (a) {
        return e.inflateRaw(a)
      }
    },
    {
      pako: 25
    }
  ],
  10: [
    function (a, k, b) {
      function e(a, b) {
        if (!(this instanceof e)) return new e(a, b);
        this.files = {
        };
        this.comment = null;
        this.root = '';
        a && this.load(a, b);
        this.clone = function () {
          var a = new e,
            h;
          for (h in this) 'function' !== typeof this[h] && (a[h] = this[h]);
          return a
        }
      }
      var p = a('./base64');
      e.prototype = a('./object');
      e.prototype.load = a('./load');
      e.support = a('./support');
      e.defaults = a('./defaults');
      e.utils = a('./deprecatedPublicUtils');
      e.base64 = {
        encode: function (a) {
          return p.encode(a)
        },
        decode: function (a) {
          return p.decode(a)
        }
      };
      e.compressions = a('./compressions');
      k.exports = e
    },
    {
      './base64': 2,
      './compressions': 4,
      './defaults': 7,
      './deprecatedPublicUtils': 8,
      './load': 11,
      './object': 14,
      './support': 18
    }
  ],
  11: [
    function (a, k, b) {
      var e = a('./base64'),
        p = a('./zipEntries');
      k.exports = function (a, b) {
        var d,
          h,
          z,
          t;
        b = b || {
        };
        b.base64 && (a = e.decode(a));
        h = new p(a, b);
        d = h.files;
        for (z = 0; z < d.length; z++) t = d[z],
          this.file(t.fileName, t.decompressed, {
            binary: !0,
            optimizedBinaryString: !0,
            date: t.date,
            dir: t.dir,
            comment: t.fileComment.length ? t.fileComment : null,
            createFolders: b.createFolders
          });
        h.zipComment.length && (this.comment = h.zipComment);
        return this
      }
    },
    {
      './base64': 2,
      './zipEntries': 23
    }
  ],
  12: [
    function (a, k, b) {
      k.exports = function (a, b) {
        return new Buffer(a, b)
      };
      k.exports.test = function (a) {
        return Buffer.isBuffer(a)
      }
    },
    {
    }
  ],
  13: [
    function (a, k, b) {
      function e(a) {
        this.data = a;
        this.length = this.data.length;
        this.index = 0
      }
      a = a('./uint8ArrayReader');
      e.prototype = new a;
      e.prototype.readData = function (a) {
        this.checkOffset(a);
        var b = this.data.slice(this.index, this.index + a);
        this.index += a;
        return b
      };
      k.exports = e
    },
    {
      './uint8ArrayReader': 19
    }
  ],
  14: [
    function (a, k, b) {
      var e = a('./support'),
        p = a('./utils'),
        n = a('./crc32'),
        s = a('./signature'),
        d = a('./defaults'),
        h = a('./base64'),
        z = a('./compressions'),
        t = a('./compressedObject'),
        w = a('./nodeBuffer'),
        v = a('./utf8'),
        K = a('./stringWriter'),
        H = a('./uint8ArrayWriter'),
        I = function (c) {
          if (c._data instanceof t && (c._data = c._data.getContent(), c.options.binary = !0, c.options.base64 = !1, 'uint8array' === p.getTypeOf(c._data))) {
            var m = c._data;
            c._data = new Uint8Array(m.length);
            0 !== m.length && c._data.set(m, 0)
          }
          return c._data
        },
        A = function (c) {
          var m = I(c);
          return 'string' === p.getTypeOf(m) ? !c.options.binary && e.nodebuffer ? w(m, 'utf-8') : c.asBinary() : m
        },
        q = function (c) {
          var m = I(this);
          if (null === m || 'undefined' === typeof m) return '';
          this.options.base64 && (m = h.decode(m));
          m = c && this.options.binary ? x.utf8decode(m) : p.transformTo('string', m);
          c || this.options.binary || (m = p.transformTo('string', x.utf8encode(m)));
          return m
        },
        B = function (c, m, g) {
          this.name = c;
          this.dir = g.dir;
          this.date = g.date;
          this.comment = g.comment;
          this._data = m;
          this.options = g;
          this._initialMetadata = {
            dir: g.dir,
            date: g.date
          }
        };
      B.prototype = {
        asText: function () {
          return q.call(this, !0)
        },
        asBinary: function () {
          return q.call(this, !1)
        },
        asNodeBuffer: function () {
          var c = A(this);
          return p.transformTo('nodebuffer', c)
        },
        asUint8Array: function () {
          var c = A(this);
          return p.transformTo('uint8array', c)
        },
        asArrayBuffer: function () {
          return this.asUint8Array().buffer
        }
      };
      var c = function (c, m) {
        var g = '',
          l;
        for (l = 0; l < m; l++) g += String.fromCharCode(c & 255),
          c >>>= 8;
        return g
      },
        D = function () {
          var c = {
          },
            m,
            g;
          for (m = 0; m < arguments.length; m++) for (g in arguments[m]) arguments[m].hasOwnProperty(g) && 'undefined' === typeof c[g] && (c[g] = arguments[m][g]);
          return c
        },
        J = function (c, m, g) {
          var l = p.getTypeOf(m),
            f;
          g = g || {
          };
          !0 !== g.base64 || null !== g.binary && void 0 !== g.binary || (g.binary = !0);
          g = D(g, d);
          g.date = g.date || new Date;
          null !== g.compression && (g.compression = g.compression.toUpperCase());
          var a;
          if (a = g.createFolders) f = c,
            '/' == f.slice(- 1) && (f = f.substring(0, f.length - 1)),
            a = f.lastIndexOf('/'),
            a = f = 0 < a ? f.substring(0, a) : '';
          a && y.call(this, f, !0);
          if (g.dir || null === m || 'undefined' === typeof m) g.base64 = !1,
            g.binary = !1,
            m = null;
          else if ('string' === l) g.binary && !g.base64 && !0 !== g.optimizedBinaryString && (m = p.string2binary(m));
          else {
            g.base64 = !1;
            g.binary = !0;
            if (!(l || m instanceof t)) throw Error('The data of \'' + c + '\' is in an unsupported format !');
            'arraybuffer' === l && (m = p.transformTo('uint8array', m))
          }
          m = new B(c, m, g);
          return this.files[c] = m
        },
        y = function (c, m) {
          '/' != c.slice(- 1) && (c += '/');
          this.files[c] || J.call(this, c, null, {
            dir: !0,
            createFolders: 'undefined' !== typeof m ? m : !1
          });
          return this.files[c]
        },
        x = {
          load: function (c, m) {
            throw Error('Load method is not defined. Is the file jszip-load.js included ?');
          },
          filter: function (c) {
            var m = [
            ],
              g,
              l,
              f;
            for (g in this.files) this.files.hasOwnProperty(g) && (l = this.files[g], f = new B(l.name, l._data, D(l.options)), l = g.slice(this.root.length, g.length), g.slice(0, this.root.length) === this.root && c(l, f) && m.push(f));
            return m
          },
          file: function (c, m, g) {
            if (1 === arguments.length) {
              if (p.isRegExp(c)) {
                var l = c;
                return this.filter(function (m, c) {
                  return !c.dir && l.test(m)
                })
              }
              return this.filter(function (m, g) {
                return !g.dir && m === c
              })[0] || null
            }
            c = this.root + c;
            J.call(this, c, m, g);
            return this
          },
          folder: function (c) {
            if (!c) return this;
            if (p.isRegExp(c)) return this.filter(function (m, g) {
              return g.dir && c.test(m)
            });
            var m = y.call(this, this.root + c),
              g = this.clone();
            g.root = m.name;
            return g
          },
          remove: function (c) {
            c = this.root + c;
            var m = this.files[c];
            m || ('/' != c.slice(- 1) && (c += '/'), m = this.files[c]);
            if (m && !m.dir) delete this.files[c];
            else for (var m = this.filter(function (m, g) {
              return g.name.slice(0, c.length) === c
            }), g = 0; g < m.length; g++) delete this.files[m[g].name];
            return this
          },
          generate: function (a) {
            a = D(a || {
            }, {
              base64: !0,
              compression: 'STORE',
              type: 'base64',
              comment: null
            });
            p.checkSupport(a.type);
            var m = [
            ],
              g = 0,
              l = 0,
              f = p.transformTo('string', this.utf8encode(a.comment || this.comment || '')),
              w;
            for (w in this.files) if (this.files.hasOwnProperty(w)) {
              var b = this.files[w],
                q = b.options.compression || a.compression.toUpperCase(),
                d = z[q];
              if (!d) throw Error(q + ' is not a valid compression method !');
              var q = b,
                e = new t,
                y = void 0;
              if (q._data instanceof t) e.uncompressedSize = q._data.uncompressedSize,
                e.crc32 = q._data.crc32,
                0 === e.uncompressedSize || q.dir ? (d = z.STORE, e.compressedContent = '', e.crc32 = 0) : q._data.compressionMethod === d.magic ? e.compressedContent = q._data.getCompressedContent() : (y = q._data.getContent(), e.compressedContent = d.compress(p.transformTo(d.compressInputType, y)));
              else {
                y = A(q);
                if (!y || 0 === y.length || q.dir) d = z.STORE,
                  y = '';
                e.uncompressedSize = y.length;
                e.crc32 = n(y);
                e.compressedContent = d.compress(p.transformTo(d.compressInputType, y))
              }
              e.compressedSize = e.compressedContent.length;
              e.compressionMethod = d.magic;
              var q = e,
                k = b,
                b = q,
                d = g,
                e = p.transformTo('string', v.utf8encode(k.name)),
                E = k.comment || '',
                y = p.transformTo('string', v.utf8encode(E)),
                F = e.length !== k.name.length,
                R = y.length !== E.length,
                x = k.options,
                B = void 0,
                O = void 0,
                L = E = '',
                L = '',
                I = void 0,
                L = void 0,
                I = k._initialMetadata.dir !== k.dir ? k.dir : x.dir,
                L = k._initialMetadata.date !== k.date ? k.date : x.date,
                B = L.getHours(),
                B = B << 6,
                B = B | L.getMinutes(),
                B = B << 5,
                B = B | L.getSeconds() / 2,
                O = L.getFullYear() - 1980,
                O = O <<
                  4,
                O = O | L.getMonth() + 1,
                O = O << 5,
                O = O | L.getDate();
              F && (L = c(1, 1) + c(n(e), 4) + e, E += 'up' + c(L.length, 2) + L);
              R && (L = c(1, 1) + c(this.crc32(y), 4) + y, E += 'uc' + c(L.length, 2) + L);
              k = '';
              k += '\n\0';
              k += F || R ? '\0' : '\0\0';
              k += b.compressionMethod;
              k += c(B, 2);
              k += c(O, 2);
              k += c(b.crc32, 4);
              k += c(b.compressedSize, 4);
              k += c(b.uncompressedSize, 4);
              k += c(e.length, 2);
              k += c(E.length, 2);
              F = s.LOCAL_FILE_HEADER + k + e + E;
              d = s.CENTRAL_FILE_HEADER + '\0' + k + c(y.length, 2) + '\0\0\0\0' + (!0 === I ? '\0\0\0' : '\0\0\0\0') + c(d, 4) + e +
                E + y;
              b = {
                fileRecord: F,
                dirRecord: d,
                compressedObject: b
              };
              g += b.fileRecord.length + q.compressedSize;
              l += b.dirRecord.length;
              m.push(b)
            }
            w = '';
            w = s.CENTRAL_DIRECTORY_END + '\0\0\0\0' + c(m.length, 2) + c(m.length, 2) + c(l, 4) + c(g, 4) + c(f.length, 2) + f;
            f = a.type.toLowerCase();
            g = 'uint8array' === f || 'arraybuffer' === f || 'blob' === f || 'nodebuffer' === f ? new H(g + l + w.length) : new K(g + l + w.length);
            for (l = 0; l < m.length; l++) g.append(m[l].fileRecord),
              g.append(m[l].compressedObject.compressedContent);
            for (l = 0; l < m.length; l++) g.append(m[l].dirRecord);
            g.append(w);
            m = g.finalize();
            switch (a.type.toLowerCase()) {
              case 'uint8array':
              case 'arraybuffer':
              case 'nodebuffer':
                return p.transformTo(a.type.toLowerCase(), m);
              case 'blob':
                return p.arrayBuffer2Blob(p.transformTo('arraybuffer', m));
              case 'base64':
                return a.base64 ? h.encode(m) : m;
              default:
                return m
            }
          },
          crc32: function (c, m) {
            return n(c, m)
          },
          utf8encode: function (c) {
            return p.transformTo('string', v.utf8encode(c))
          },
          utf8decode: function (c) {
            return v.utf8decode(c)
          }
        };
      k.exports = x
    },
    {
      './base64': 2,
      './compressedObject': 3,
      './compressions': 4,
      './crc32': 5,
      './defaults': 7,
      './nodeBuffer': 12,
      './signature': 15,
      './stringWriter': 17,
      './support': 18,
      './uint8ArrayWriter': 20,
      './utf8': 21,
      './utils': 22
    }
  ],
  15: [
    function (a, k, b) {
      b.LOCAL_FILE_HEADER = 'PK';
      b.CENTRAL_FILE_HEADER = 'PK';
      b.CENTRAL_DIRECTORY_END = 'PK';
      b.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK';
      b.ZIP64_CENTRAL_DIRECTORY_END = 'PK';
      b.DATA_DESCRIPTOR = 'PK'
    },
    {
    }
  ],
  16: [
    function (a, k, b) {
      function e(a, b) {
        this.data = a;
        b || (this.data = p.string2binary(this.data));
        this.length = this.data.length;
        this.index = 0
      }
      b = a('./dataReader');
      var p = a('./utils');
      e.prototype = new b;
      e.prototype.byteAt = function (a) {
        return this.data.charCodeAt(a)
      };
      e.prototype.lastIndexOfSignature = function (a) {
        return this.data.lastIndexOf(a)
      };
      e.prototype.readData = function (a) {
        this.checkOffset(a);
        var b = this.data.slice(this.index, this.index + a);
        this.index += a;
        return b
      };
      k.exports = e
    },
    {
      './dataReader': 6,
      './utils': 22
    }
  ],
  17: [
    function (a, k, b) {
      var e = a('./utils');
      a = function () {
        this.data = [
        ]
      };
      a.prototype = {
        append: function (a) {
          a = e.transformTo('string', a);
          this.data.push(a)
        },
        finalize: function () {
          return this.data.join('')
        }
      };
      k.exports = a
    },
    {
      './utils': 22
    }
  ],
  18: [
    function (a, k, b) {
      b.base64 = !0;
      b.array = !0;
      b.string = !0;
      b.arraybuffer = 'undefined' !== typeof ArrayBuffer && 'undefined' !== typeof Uint8Array;
      b.nodebuffer = 'undefined' !== typeof Buffer;
      b.uint8array = 'undefined' !== typeof Uint8Array;
      if ('undefined' === typeof ArrayBuffer) b.blob = !1;
      else {
        a = new ArrayBuffer(0);
        try {
          b.blob = 0 === (new Blob([a], {
            type: 'application/zip'
          })).size
        } catch (e) {
          try {
            var p = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
            p.append(a);
            b.blob = 0 === p.getBlob('application/zip').size
          } catch (n) {
            b.blob = !1
          }
        }
      }
    },
    {
    }
  ],
  19: [
    function (a, k, b) {
      function e(a) {
        a && (this.data = a, this.length = this.data.length, this.index = 0)
      }
      a = a('./dataReader');
      e.prototype = new a;
      e.prototype.byteAt = function (a) {
        return this.data[a]
      };
      e.prototype.lastIndexOfSignature = function (a) {
        var b = a.charCodeAt(0),
          e = a.charCodeAt(1),
          d = a.charCodeAt(2);
        a = a.charCodeAt(3);
        for (var h = this.length - 4; 0 <= h; --h) if (this.data[h] ===
          b && this.data[h + 1] === e && this.data[h + 2] === d && this.data[h + 3] === a) return h;
        return - 1
      };
      e.prototype.readData = function (a) {
        this.checkOffset(a);
        if (0 === a) return new Uint8Array(0);
        var b = this.data.subarray(this.index, this.index + a);
        this.index += a;
        return b
      };
      k.exports = e
    },
    {
      './dataReader': 6
    }
  ],
  20: [
    function (a, k, b) {
      var e = a('./utils');
      a = function (a) {
        this.data = new Uint8Array(a);
        this.index = 0
      };
      a.prototype = {
        append: function (a) {
          0 !== a.length && (a = e.transformTo('uint8array', a), this.data.set(a, this.index), this.index += a.length)
        },
        finalize: function () {
          return this.data
        }
      };
      k.exports = a
    },
    {
      './utils': 22
    }
  ],
  21: [
    function (a, k, b) {
      var e = a('./utils'),
        p = a('./support'),
        n = a('./nodeBuffer'),
        s = Array(256);
      for (a = 0; 256 > a; a++) s[a] = 252 <= a ? 6 : 248 <= a ? 5 : 240 <= a ? 4 : 224 <= a ? 3 : 192 <= a ? 2 : 1;
      s[254] = s[254] = 1;
      var d = function (a) {
        var b,
          t,
          w,
          v,
          d = a.length,
          n = Array(2 * d);
        for (b = t = 0; b < d;) if (w = a[b++], 128 > w) n[t++] = w;
        else if (v = s[w], 4 < v) n[t++] = 65533,
          b += v - 1;
        else {
          for (w &= 2 === v ? 31 : 3 === v ? 15 : 7; 1 < v && b < d;) w = w << 6 | a[b++] & 63,
            v--;
          1 < v ? n[t++] = 65533 : 65536 > w ? n[t++] = w : (w -= 65536, n[t++] = 55296 | w >> 10 & 1023, n[t++] = 56320 | w & 1023)
        }
        n.length !==
          t && (n.subarray ? n = n.subarray(0, t) : n.length = t);
        return e.applyFromCharCode(n)
      };
      b.utf8encode = function (a) {
        if (p.nodebuffer) return n(a, 'utf-8');
        var b,
          t,
          w,
          v,
          d,
          e = a.length,
          s = 0;
        for (v = 0; v < e; v++) t = a.charCodeAt(v),
          55296 === (t & 64512) && v + 1 < e && (w = a.charCodeAt(v + 1), 56320 === (w & 64512) && (t = 65536 + (t - 55296 << 10) + (w - 56320), v++)),
          s += 128 > t ? 1 : 2048 > t ? 2 : 65536 > t ? 3 : 4;
        b = p.uint8array ? new Uint8Array(s) : Array(s);
        for (v = d = 0; d < s; v++) t = a.charCodeAt(v),
          55296 === (t & 64512) && v + 1 < e && (w = a.charCodeAt(v + 1), 56320 === (w & 64512) && (t = 65536 + (t - 55296 << 10) + (w - 56320), v++)),
          128 > t ? b[d++] = t : (2048 > t ? b[d++] = 192 | t >>> 6 : (65536 > t ? b[d++] = 224 | t >>> 12 : (b[d++] = 240 | t >>> 18, b[d++] = 128 | t >>> 12 & 63), b[d++] = 128 | t >>> 6 & 63), b[d++] = 128 | t & 63);
        return b
      };
      b.utf8decode = function (a) {
        if (p.nodebuffer) return e.transformTo('nodebuffer', a).toString('utf-8');
        a = e.transformTo(p.uint8array ? 'uint8array' : 'array', a);
        for (var b = [
        ], t = 0, w = a.length; t < w;) {
          var v;
          v = Math.min(t + 65536, w);
          var n = void 0;
          v = v || a.length;
          v > a.length && (v = a.length);
          for (n = v - 1; 0 <= n && 128 === (a[n] & 192);) n--;
          v = 0 > n ? v : 0 === n ? v : n + s[a[n]] > v ?
            n : v;
          p.uint8array ? b.push(d(a.subarray(t, v))) : b.push(d(a.slice(t, v)));
          t = v
        }
        return b.join('')
      }
    },
    {
      './nodeBuffer': 12,
      './support': 18,
      './utils': 22
    }
  ],
  22: [
    function (a, k, b) {
      function e(a) {
        return a
      }
      function p(a, b) {
        for (var h = 0; h < a.length; ++h) b[h] = a.charCodeAt(h) & 255;
        return b
      }
      function n(a) {
        var v = 65536,
          h = [
          ],
          d = a.length,
          t = b.getTypeOf(a),
          e = 0,
          q = !0;
        try {
          switch (t) {
            case 'uint8array':
              String.fromCharCode.apply(null, new Uint8Array(0));
              break;
            case 'nodebuffer':
              String.fromCharCode.apply(null, z(0))
          }
        } catch (n) {
          q = !1
        }
        if (!q) {
          v = '';
          for (h = 0; h < a.length; h++) v += String.fromCharCode(a[h]);
          return v
        }
        for (; e < d && 1 < v;) try {
          'array' === t || 'nodebuffer' === t ? h.push(String.fromCharCode.apply(null, a.slice(e, Math.min(e + v, d)))) : h.push(String.fromCharCode.apply(null, a.subarray(e, Math.min(e + v, d)))),
            e += v
        } catch (c) {
          v = Math.floor(v / 2)
        }
        return h.join('')
      }
      function s(a, b) {
        for (var h = 0; h < a.length; h++) b[h] = a[h];
        return b
      }
      var d = a('./support'),
        h = a('./compressions'),
        z = a('./nodeBuffer');
      b.string2binary = function (a) {
        for (var b = '', h = 0; h < a.length; h++) b += String.fromCharCode(a.charCodeAt(h) & 255);
        return b
      };
      b.arrayBuffer2Blob = function (a) {
        b.checkSupport('blob');
        try {
          return new Blob([a], {
            type: 'application/zip'
          })
        } catch (v) {
          try {
            var h = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
            h.append(a);
            return h.getBlob('application/zip')
          } catch (d) {
            throw Error('Bug : can\'t construct the Blob.');
          }
        }
      };
      b.applyFromCharCode = n;
      var t = {
      };
      t.string = {
        string: e,
        array: function (a) {
          return p(a, Array(a.length))
        },
        arraybuffer: function (a) {
          return t.string.uint8array(a).buffer
        },
        uint8array: function (a) {
          return p(a, new Uint8Array(a.length))
        },
        nodebuffer: function (a) {
          return p(a, z(a.length))
        }
      };
      t.array = {
        string: n,
        array: e,
        arraybuffer: function (a) {
          return (new Uint8Array(a)).buffer
        },
        uint8array: function (a) {
          return new Uint8Array(a)
        },
        nodebuffer: function (a) {
          return z(a)
        }
      };
      t.arraybuffer = {
        string: function (a) {
          return n(new Uint8Array(a))
        },
        array: function (a) {
          return s(new Uint8Array(a), Array(a.byteLength))
        },
        arraybuffer: e,
        uint8array: function (a) {
          return new Uint8Array(a)
        },
        nodebuffer: function (a) {
          return z(new Uint8Array(a))
        }
      };
      t.uint8array = {
        string: n,
        array: function (a) {
          return s(a, Array(a.length))
        },
        arraybuffer: function (a) {
          return a.buffer
        },
        uint8array: e,
        nodebuffer: function (a) {
          return z(a)
        }
      };
      t.nodebuffer = {
        string: n,
        array: function (a) {
          return s(a, Array(a.length))
        },
        arraybuffer: function (a) {
          return t.nodebuffer.uint8array(a).buffer
        },
        uint8array: function (a) {
          return s(a, new Uint8Array(a.length))
        },
        nodebuffer: e
      };
      b.transformTo = function (a, v) {
        v || (v = '');
        if (!a) return v;
        b.checkSupport(a);
        var h = b.getTypeOf(v);
        return t[h][a](v)
      };
      b.getTypeOf = function (a) {
        if ('string' ===
          typeof a) return 'string';
        if ('[object Array]' === Object.prototype.toString.call(a)) return 'array';
        if (d.nodebuffer && z.test(a)) return 'nodebuffer';
        if (d.uint8array && a instanceof Uint8Array) return 'uint8array';
        if (d.arraybuffer && a instanceof ArrayBuffer) return 'arraybuffer'
      };
      b.checkSupport = function (a) {
        if (!d[a.toLowerCase()]) throw Error(a + ' is not supported by this browser');
      };
      b.MAX_VALUE_16BITS = 65535;
      b.MAX_VALUE_32BITS = - 1;
      b.pretty = function (a) {
        var b = '',
          h,
          d;
        for (d = 0; d < (a || '').length; d++) h = a.charCodeAt(d),
          b += '\\x' + (16 > h ? '0' : '') + h.toString(16).toUpperCase();
        return b
      };
      b.findCompression = function (a) {
        for (var b in h) if (h.hasOwnProperty(b) && h[b].magic === a) return h[b];
        return null
      };
      b.isRegExp = function (a) {
        return '[object RegExp]' === Object.prototype.toString.call(a)
      }
    },
    {
      './compressions': 4,
      './nodeBuffer': 12,
      './support': 18
    }
  ],
  23: [
    function (a, k, b) {
      function e(a, b) {
        this.files = [
        ];
        this.loadOptions = b;
        a && this.load(a)
      }
      var p = a('./stringReader'),
        n = a('./nodeBufferReader'),
        s = a('./uint8ArrayReader'),
        d = a('./utils'),
        h = a('./signature'),
        z = a('./zipEntry'),
        t = a('./support'),
        w = a('./object');
      e.prototype = {
        checkSignature: function (a) {
          var b = this.reader.readString(4);
          if (b !== a) throw Error('Corrupted zip or bug : unexpected signature (' + d.pretty(b) + ', expected ' + d.pretty(a) + ')');
        },
        readBlockEndOfCentral: function () {
          this.diskNumber = this.reader.readInt(2);
          this.diskWithCentralDirStart = this.reader.readInt(2);
          this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
          this.centralDirRecords = this.reader.readInt(2);
          this.centralDirSize = this.reader.readInt(4);
          this.centralDirOffset = this.reader.readInt(4);
          this.zipCommentLength = this.reader.readInt(2);
          this.zipComment = this.reader.readString(this.zipCommentLength);
          this.zipComment = w.utf8decode(this.zipComment)
        },
        readBlockZip64EndOfCentral: function () {
          this.zip64EndOfCentralSize = this.reader.readInt(8);
          this.versionMadeBy = this.reader.readString(2);
          this.versionNeeded = this.reader.readInt(2);
          this.diskNumber = this.reader.readInt(4);
          this.diskWithCentralDirStart = this.reader.readInt(4);
          this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
          this.centralDirRecords = this.reader.readInt(8);
          this.centralDirSize = this.reader.readInt(8);
          this.centralDirOffset = this.reader.readInt(8);
          this.zip64ExtensibleData = {
          };
          for (var a = this.zip64EndOfCentralSize - 44, b, h, d; 0 < a;) b = this.reader.readInt(2),
            h = this.reader.readInt(4),
            d = this.reader.readString(h),
            this.zip64ExtensibleData[b] = {
              id: b,
              length: h,
              value: d
            }
        },
        readBlockZip64EndOfCentralLocator: function () {
          this.diskWithZip64CentralDirStart = this.reader.readInt(4);
          this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
          this.disksCount = this.reader.readInt(4);
          if (1 < this.disksCount) throw Error('Multi-volumes zip are not supported');
        },
        readLocalFiles: function () {
          var a,
            b;
          for (a = 0; a < this.files.length; a++) b = this.files[a],
            this.reader.setIndex(b.localHeaderOffset),
            this.checkSignature(h.LOCAL_FILE_HEADER),
            b.readLocalPart(this.reader),
            b.handleUTF8()
        },
        readCentralDir: function () {
          var a;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === h.CENTRAL_FILE_HEADER;) a = new z({
            zip64: this.zip64
          }, this.loadOptions),
            a.readCentralPart(this.reader),
            this.files.push(a)
        },
        readEndOfCentral: function () {
          var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
          if (- 1 === a) throw Error('Corrupted zip : can\'t find end of central directory');
          this.reader.setIndex(a);
          this.checkSignature(h.CENTRAL_DIRECTORY_END);
          this.readBlockEndOfCentral();
          if (this.diskNumber === d.MAX_VALUE_16BITS || this.diskWithCentralDirStart === d.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === d.MAX_VALUE_16BITS || this.centralDirRecords === d.MAX_VALUE_16BITS || this.centralDirSize ===
            d.MAX_VALUE_32BITS || this.centralDirOffset === d.MAX_VALUE_32BITS) {
            this.zip64 = !0;
            a = this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (- 1 === a) throw Error('Corrupted zip : can\'t find the ZIP64 end of central directory locator');
            this.reader.setIndex(a);
            this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral()
          }
        },
        prepareReader: function (a) {
          var b = d.getTypeOf(a);
          this.reader = 'string' !== b || t.uint8array ? 'nodebuffer' === b ? new n(a) : new s(d.transformTo('uint8array', a)) : new p(a, this.loadOptions.optimizedBinaryString)
        },
        load: function (a) {
          this.prepareReader(a);
          this.readEndOfCentral();
          this.readCentralDir();
          this.readLocalFiles()
        }
      };
      k.exports = e
    },
    {
      './nodeBufferReader': 13,
      './object': 14,
      './signature': 15,
      './stringReader': 16,
      './support': 18,
      './uint8ArrayReader': 19,
      './utils': 22,
      './zipEntry': 24
    }
  ],
  24: [
    function (a, k, b) {
      function e(a, b) {
        this.options = a;
        this.loadOptions = b
      }
      var p = a('./stringReader'),
        n = a('./utils'),
        s = a('./compressedObject'),
        d = a('./object');
      e.prototype = {
        isEncrypted: function () {
          return 1 === (this.bitFlag & 1)
        },
        useUTF8: function () {
          return 2048 === (this.bitFlag & 2048)
        },
        prepareCompressedContent: function (a, b, d) {
          return function () {
            var e = a.index;
            a.setIndex(b);
            var v = a.readData(d);
            a.setIndex(e);
            return v
          }
        },
        prepareContent: function (a, b, d, e, v) {
          return function () {
            var a = n.transformTo(e.uncompressInputType, this.getCompressedContent()),
              a = e.uncompress(a);
            if (a.length !==
              v) throw Error('Bug : uncompressed data size mismatch');
            return a
          }
        },
        readLocalPart: function (a) {
          var b;
          a.skip(22);
          this.fileNameLength = a.readInt(2);
          b = a.readInt(2);
          this.fileName = a.readString(this.fileNameLength);
          a.skip(b);
          if (- 1 == this.compressedSize || - 1 == this.uncompressedSize) throw Error('Bug or corrupted zip : didn\'t get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)');
          b = n.findCompression(this.compressionMethod);
          if (null === b) throw Error('Corrupted zip : compression ' +
            n.pretty(this.compressionMethod) + ' unknown (inner file : ' + this.fileName + ')');
          this.decompressed = new s;
          this.decompressed.compressedSize = this.compressedSize;
          this.decompressed.uncompressedSize = this.uncompressedSize;
          this.decompressed.crc32 = this.crc32;
          this.decompressed.compressionMethod = this.compressionMethod;
          this.decompressed.getCompressedContent = this.prepareCompressedContent(a, a.index, this.compressedSize, b);
          this.decompressed.getContent = this.prepareContent(a, a.index, this.compressedSize, b, this.uncompressedSize);
          if (this.loadOptions.checkCRC32 && (this.decompressed = n.transformTo('string', this.decompressed.getContent()), d.crc32(this.decompressed) !== this.crc32)) throw Error('Corrupted zip : CRC32 mismatch');
        },
        readCentralPart: function (a) {
          this.versionMadeBy = a.readString(2);
          this.versionNeeded = a.readInt(2);
          this.bitFlag = a.readInt(2);
          this.compressionMethod = a.readString(2);
          this.date = a.readDate();
          this.crc32 = a.readInt(4);
          this.compressedSize = a.readInt(4);
          this.uncompressedSize = a.readInt(4);
          this.fileNameLength = a.readInt(2);
          this.extraFieldsLength = a.readInt(2);
          this.fileCommentLength = a.readInt(2);
          this.diskNumberStart = a.readInt(2);
          this.internalFileAttributes = a.readInt(2);
          this.externalFileAttributes = a.readInt(4);
          this.localHeaderOffset = a.readInt(4);
          if (this.isEncrypted()) throw Error('Encrypted zip are not supported');
          this.fileName = a.readString(this.fileNameLength);
          this.readExtraFields(a);
          this.parseZIP64ExtraField(a);
          this.fileComment = a.readString(this.fileCommentLength);
          this.dir = this.externalFileAttributes & 16 ? !0 : !1
        },
        parseZIP64ExtraField: function (a) {
          this.extraFields[1] && (a = new p(this.extraFields[1].value), this.uncompressedSize === n.MAX_VALUE_32BITS && (this.uncompressedSize = a.readInt(8)), this.compressedSize === n.MAX_VALUE_32BITS && (this.compressedSize = a.readInt(8)), this.localHeaderOffset === n.MAX_VALUE_32BITS && (this.localHeaderOffset = a.readInt(8)), this.diskNumberStart === n.MAX_VALUE_32BITS && (this.diskNumberStart = a.readInt(4)))
        },
        readExtraFields: function (a) {
          var b = a.index,
            d,
            e,
            v;
          for (this.extraFields = this.extraFields || {
          }; a.index < b + this.extraFieldsLength;) d = a.readInt(2),
            e = a.readInt(2),
            v = a.readString(e),
            this.extraFields[d] = {
              id: d,
              length: e,
              value: v
            }
        },
        handleUTF8: function () {
          if (this.useUTF8()) this.fileName = d.utf8decode(this.fileName),
            this.fileComment = d.utf8decode(this.fileComment);
          else {
            var a = this.findExtraFieldUnicodePath();
            null !== a && (this.fileName = a);
            a = this.findExtraFieldUnicodeComment();
            null !== a && (this.fileComment = a)
          }
        },
        findExtraFieldUnicodePath: function () {
          var a = this.extraFields[28789];
          if (a) {
            var b = new p(a.value);
            return 1 !== b.readInt(1) || d.crc32(this.fileName) !== b.readInt(4) ? null : d.utf8decode(b.readString(a.length -
              5))
          }
          return null
        },
        findExtraFieldUnicodeComment: function () {
          var a = this.extraFields[25461];
          if (a) {
            var b = new p(a.value);
            return 1 !== b.readInt(1) || d.crc32(this.fileComment) !== b.readInt(4) ? null : d.utf8decode(b.readString(a.length - 5))
          }
          return null
        }
      };
      k.exports = e
    },
    {
      './compressedObject': 3,
      './object': 14,
      './stringReader': 16,
      './utils': 22
    }
  ],
  25: [
    function (a, k, b) {
      b = a('./lib/utils/common').assign;
      var e = a('./lib/deflate'),
        p = a('./lib/inflate');
      a = a('./lib/zlib/constants');
      var n = {
      };
      b(n, e, p, a);
      k.exports = n
    },
    {
      './lib/deflate': 26,
      './lib/inflate': 27,
      './lib/utils/common': 28,
      './lib/zlib/constants': 31
    }
  ],
  26: [
    function (a, k, b) {
      function e(a, b) {
        var d = new z(b);
        d.push(a, !0);
        if (d.err) throw d.msg;
        return d.result
      }
      var p = a('./zlib/deflate.js'),
        n = a('./utils/common'),
        s = a('./utils/strings'),
        d = a('./zlib/messages'),
        h = a('./zlib/zstream'),
        z = function (a) {
          a = this.options = n.assign({
            level: - 1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: ''
          }, a || {
          });
          a.raw && 0 < a.windowBits ? a.windowBits = - a.windowBits : a.gzip && 0 < a.windowBits && 16 > a.windowBits && (a.windowBits += 16);
          this.err = 0;
          this.msg = '';
          this.ended = !1;
          this.chunks = [
          ];
          this.strm = new h;
          this.strm.avail_out = 0;
          var b = p.deflateInit2(this.strm, a.level, a.method, a.windowBits, a.memLevel, a.strategy);
          if (0 !== b) throw Error(d[b]);
          a.header && p.deflateSetHeader(this.strm, a.header)
        };
      z.prototype.push = function (a, b) {
        var d = this.strm,
          e = this.options.chunkSize,
          h,
          k;
        if (this.ended) return !1;
        k = b === ~~b ? b : !0 === b ? 4 : 0;
        d.input = 'string' === typeof a ? s.string2buf(a) : a;
        d.next_in = 0;
        d.avail_in = d.input.length;
        do {
          0 === d.avail_out && (d.output = new n.Buf8(e), d.next_out = 0, d.avail_out = e);
          h = p.deflate(d, k);
          if (1 !== h && 0 !== h) return this.onEnd(h),
            this.ended = !0,
            !1;
          if (0 === d.avail_out || 0 === d.avail_in && 4 === k) if ('string' === this.options.to) this.onData(s.buf2binstring(n.shrinkBuf(d.output, d.next_out)));
          else this.onData(n.shrinkBuf(d.output, d.next_out))
        } while ((0 < d.avail_in || 0 === d.avail_out) && 1 !== h);
        return 4 === k ? (h = p.deflateEnd(this.strm), this.onEnd(h), this.ended = !0, 0 === h) : !0
      };
      z.prototype.onData = function (a) {
        this.chunks.push(a)
      };
      z.prototype.onEnd = function (a) {
        0 ===
          a && (this.result = 'string' === this.options.to ? this.chunks.join('') : n.flattenChunks(this.chunks));
        this.chunks = [
        ];
        this.err = a;
        this.msg = this.strm.msg
      };
      b.Deflate = z;
      b.deflate = e;
      b.deflateRaw = function (a, b) {
        b = b || {
        };
        b.raw = !0;
        return e(a, b)
      };
      b.gzip = function (a, b) {
        b = b || {
        };
        b.gzip = !0;
        return e(a, b)
      }
    },
    {
      './utils/common': 28,
      './utils/strings': 29,
      './zlib/deflate.js': 33,
      './zlib/messages': 38,
      './zlib/zstream': 40
    }
  ],
  27: [
    function (a, k, b) {
      function e(a, b) {
        var d = new w(b);
        d.push(a, !0);
        if (d.err) throw d.msg;
        return d.result
      }
      var p = a('./zlib/inflate.js'),
        n = a('./utils/common'),
        s = a('./utils/strings'),
        d = a('./zlib/constants'),
        h = a('./zlib/messages'),
        z = a('./zlib/zstream'),
        t = a('./zlib/gzheader'),
        w = function (a) {
          var b = this.options = n.assign({
            chunkSize: 16384,
            windowBits: 0,
            to: ''
          }, a || {
          });
          b.raw && 0 <= b.windowBits && 16 > b.windowBits && (b.windowBits = - b.windowBits, 0 === b.windowBits && (b.windowBits = - 15));
          !(0 <= b.windowBits && 16 > b.windowBits) || a && a.windowBits || (b.windowBits += 32);
          15 < b.windowBits && 48 > b.windowBits && 0 === (b.windowBits & 15) && (b.windowBits |= 15);
          this.err = 0;
          this.msg = '';
          this.ended = !1;
          this.chunks = [
          ];
          this.strm = new z;
          this.strm.avail_out = 0;
          a = p.inflateInit2(this.strm, b.windowBits);
          if (a !== d.Z_OK) throw Error(h[a]);
          this.header = new t;
          p.inflateGetHeader(this.strm, this.header)
        };
      w.prototype.push = function (a, b) {
        var e = this.strm,
          h = this.options.chunkSize,
          t,
          q,
          k,
          c,
          w;
        if (this.ended) return !1;
        q = b === ~~b ? b : !0 === b ? d.Z_FINISH : d.Z_NO_FLUSH;
        e.input = 'string' === typeof a ? s.binstring2buf(a) : a;
        e.next_in = 0;
        e.avail_in = e.input.length;
        do {
          0 === e.avail_out && (e.output = new n.Buf8(h), e.next_out = 0, e.avail_out = h);
          t = p.inflate(e, d.Z_NO_FLUSH);
          if (t !== d.Z_STREAM_END && t !== d.Z_OK) return this.onEnd(t),
            this.ended = !0,
            !1;
          if (e.next_out && (0 === e.avail_out || t === d.Z_STREAM_END || 0 === e.avail_in && q === d.Z_FINISH)) if ('string' === this.options.to) k = s.utf8border(e.output, e.next_out),
            c = e.next_out - k,
            w = s.buf2string(e.output, k),
            e.next_out = c,
            e.avail_out = h - c,
            c && n.arraySet(e.output, e.output, k, c, 0),
            this.onData(w);
          else this.onData(n.shrinkBuf(e.output, e.next_out))
        } while (0 < e.avail_in && t !== d.Z_STREAM_END);
        t === d.Z_STREAM_END && (q = d.Z_FINISH);
        return q === d.Z_FINISH ? (t = p.inflateEnd(this.strm), this.onEnd(t), this.ended = !0, t === d.Z_OK) : !0
      };
      w.prototype.onData = function (a) {
        this.chunks.push(a)
      };
      w.prototype.onEnd = function (a) {
        a === d.Z_OK && (this.result = 'string' === this.options.to ? this.chunks.join('') : n.flattenChunks(this.chunks));
        this.chunks = [
        ];
        this.err = a;
        this.msg = this.strm.msg
      };
      b.Inflate = w;
      b.inflate = e;
      b.inflateRaw = function (a, b) {
        b = b || {
        };
        b.raw = !0;
        return e(a, b)
      };
      b.ungzip = e
    },
    {
      './utils/common': 28,
      './utils/strings': 29,
      './zlib/constants': 31,
      './zlib/gzheader': 34,
      './zlib/inflate.js': 36,
      './zlib/messages': 38,
      './zlib/zstream': 40
    }
  ],
  28: [
    function (a, k, b) {
      a = 'undefined' !== typeof Uint8Array && 'undefined' !== typeof Uint16Array && 'undefined' !== typeof Int32Array;
      b.assign = function (a) {
        for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
          var d = b.shift();
          if (d) {
            if ('object' !== typeof d) throw new TypeError(d + 'must be non-object');
            for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e])
          }
        }
        return a
      };
      b.shrinkBuf = function (a, b) {
        if (a.length === b) return a;
        if (a.subarray) return a.subarray(0, b);
        a.length = b;
        return a
      };
      var e = {
        arraySet: function (a, b, d, e, k) {
          if (b.subarray && a.subarray) a.set(b.subarray(d, d + e), k);
          else for (var t = 0; t < e; t++) a[k + t] = b[d + t]
        },
        flattenChunks: function (a) {
          var b,
            d,
            e,
            k,
            t;
          b = e = 0;
          for (d = a.length; b < d; b++) e += a[b].length;
          t = new Uint8Array(e);
          b = e = 0;
          for (d = a.length; b < d; b++) k = a[b],
            t.set(k, e),
            e += k.length;
          return t
        }
      },
        p = {
          arraySet: function (a, b, e, h, k) {
            for (var t = 0; t < h; t++) a[k + t] = b[e + t]
          },
          flattenChunks: function (a) {
            return [].concat.apply([], a)
          }
        };
      b.setTyped = function (a) {
        a ? (b.Buf8 = Uint8Array, b.Buf16 = Uint16Array, b.Buf32 = Int32Array, b.assign(b, e)) : (b.Buf8 = Array, b.Buf16 = Array, b.Buf32 = Array, b.assign(b, p))
      };
      b.setTyped(a)
    },
    {
    }
  ],
  29: [
    function (a, k, b) {
      function e(a, b) {
        if (65537 > b && (a.subarray && s || !a.subarray && n)) return String.fromCharCode.apply(null, p.shrinkBuf(a, b));
        for (var e = '', d = 0; d < b; d++) e += String.fromCharCode(a[d]);
        return e
      }
      var p = a('./common'),
        n = !0,
        s = !0;
      try {
        String.fromCharCode.apply(null, [
          0
        ])
      } catch (d) {
        n = !1
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1))
      } catch (h) {
        s = !1
      }
      var z = new p.Buf8(256);
      for (a = 0; 256 > a; a++) z[a] = 252 <= a ? 6 : 248 <= a ? 5 : 240 <= a ? 4 : 224 <= a ? 3 : 192 <= a ? 2 : 1;
      z[254] = z[254] = 1;
      b.string2buf = function (a) {
        var b,
          e,
          d,
          h,
          k,
          n = a.length,
          q = 0;
        for (h = 0; h < n; h++) e = a.charCodeAt(h),
          55296 === (e & 64512) && h + 1 < n && (d = a.charCodeAt(h + 1), 56320 === (d & 64512) && (e = 65536 + (e - 55296 << 10) + (d - 56320), h++)),
          q += 128 > e ? 1 : 2048 > e ? 2 : 65536 > e ? 3 : 4;
        b = new p.Buf8(q);
        for (h = k = 0; k < q; h++) e = a.charCodeAt(h),
          55296 === (e & 64512) && h + 1 < n && (d = a.charCodeAt(h + 1), 56320 === (d & 64512) && (e = 65536 + (e - 55296 << 10) + (d - 56320), h++)),
          128 > e ? b[k++] = e : (2048 > e ? b[k++] = 192 | e >>> 6 : (65536 > e ? b[k++] = 224 | e >>> 12 : (b[k++] = 240 | e >>> 18, b[k++] = 128 | e >>> 12 & 63), b[k++] = 128 | e >>> 6 & 63), b[k++] = 128 | e & 63);
        return b
      };
      b.buf2binstring = function (a) {
        return e(a, a.length)
      };
      b.binstring2buf = function (a) {
        for (var b = new p.Buf8(a.length), e = 0, d = b.length; e < d; e++) b[e] = a.charCodeAt(e);
        return b
      };
      b.buf2string = function (a, b) {
        var d,
          h,
          k,
          n,
          s = b || a.length,
          q = Array(2 * s);
        for (d = h = 0; d < s;) if (k = a[d++], 128 > k) q[h++] = k;
        else if (n = z[k], 4 < n) q[h++] = 65533,
          d += n - 1;
        else {
          for (k &= 2 === n ? 31 : 3 === n ? 15 : 7; 1 < n && d < s;) k = k << 6 | a[d++] & 63,
            n--;
          1 < n ? q[h++] = 65533 :
            65536 > k ? q[h++] = k : (k -= 65536, q[h++] = 55296 | k >> 10 & 1023, q[h++] = 56320 | k & 1023)
        }
        return e(q, h)
      };
      b.utf8border = function (a, b) {
        var e;
        b = b || a.length;
        b > a.length && (b = a.length);
        for (e = b - 1; 0 <= e && 128 === (a[e] & 192);) e--;
        return 0 > e || 0 === e ? b : e + z[a[e]] > b ? e : b
      }
    },
    {
      './common': 28
    }
  ],
  30: [
    function (a, k, b) {
      k.exports = function (a, b, k, s) {
        var d = a & 65535 | 0;
        a = a >>> 16 & 65535 | 0;
        for (var h = 0; 0 !== k;) {
          h = 2000 < k ? 2000 : k;
          k -= h;
          do d = d + b[s++] | 0,
            a = a + d | 0;
          while (--h);
          d %= 65521;
          a %= 65521
        }
        return d | a << 16 | 0
      }
    },
    {
    }
  ],
  31: [
    function (a, k, b) {
      k.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: - 1,
        Z_STREAM_ERROR: - 2,
        Z_DATA_ERROR: - 3,
        Z_BUF_ERROR: - 5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: - 1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      }
    },
    {
    }
  ],
  32: [
    function (a, k, b) {
      var e = function () {
        for (var a, b = [
        ], e = 0; 256 > e; e++) {
          a = e;
          for (var d = 0; 8 > d; d++) a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
          b[e] = a
        }
        return b
      }();
      k.exports = function (a, b, k, d) {
        k = d + k;
        for (a ^= - 1; d < k; d++) a = a >>> 8 ^ e[(a ^ b[d]) & 255];
        return a ^ - 1
      }
    },
    {
    }
  ],
  33: [
    function (a, k, b) {
      function e(a, c) {
        a.msg = x[c];
        return c
      }
      function p(a) {
        for (var c = a.length; 0 <= --c;) a[c] = 0
      }
      function n(a) {
        var b = a.state,
          l = b.pending;
        l > a.avail_out && (l = a.avail_out);
        0 !== l && (c.arraySet(a.output, b.pending_buf, b.pending_out, l, a.next_out), a.next_out += l, b.pending_out += l, a.total_out += l, a.avail_out -= l, b.pending -= l, 0 === b.pending && (b.pending_out = 0))
      }
      function s(a, c) {
        D._tr_flush_block(a, 0 <= a.block_start ? a.block_start :
          - 1, a.strstart - a.block_start, c);
        a.block_start = a.strstart;
        n(a.strm)
      }
      function d(a, c) {
        a.pending_buf[a.pending++] = c
      }
      function h(a, c) {
        a.pending_buf[a.pending++] = c >>> 8 & 255;
        a.pending_buf[a.pending++] = c & 255
      }
      function z(a, c) {
        var b = a.max_chain_length,
          f = a.strstart,
          e,
          d = a.prev_length,
          q = a.nice_match,
          k = a.strstart > a.w_size - 262 ? a.strstart - (a.w_size - 262) : 0,
          h = a.window,
          r = a.w_mask,
          n = a.prev,
          E = a.strstart + 258,
          F = h[f + d - 1],
          t = h[f + d];
        a.prev_length >= a.good_match && (b >>= 2);
        q > a.lookahead && (q = a.lookahead);
        do if (e = c, h[e + d] === t && h[e + d -
          1] === F && h[e] === h[f] && h[++e] === h[f + 1]) {
          f += 2;
          for (e++; h[++f] === h[++e] && h[++f] === h[++e] && h[++f] === h[++e] && h[++f] === h[++e] && h[++f] === h[++e] && h[++f] === h[++e] && h[++f] === h[++e] && h[++f] === h[++e] && f < E;);
          e = 258 - (E - f);
          f = E - 258;
          if (e > d) {
            a.match_start = c;
            d = e;
            if (e >= q) break;
            F = h[f + d - 1];
            t = h[f + d]
          }
        } while ((c = n[c & r]) > k && 0 !== --b);
        return d <= a.lookahead ? d : a.lookahead
      }
      function t(a) {
        var b = a.w_size,
          l,
          f,
          e,
          d;
        do {
          d = a.window_size - a.lookahead - a.strstart;
          if (a.strstart >= b + (b - 262)) {
            c.arraySet(a.window, a.window, b, b, 0);
            a.match_start -= b;
            a.strstart -=
              b;
            a.block_start -= b;
            l = f = a.hash_size;
            do e = a.head[--l],
              a.head[l] = e >= b ? e - b : 0;
            while (--f);
            l = f = b;
            do e = a.prev[--l],
              a.prev[l] = e >= b ? e - b : 0;
            while (--f);
            d += b
          }
          if (0 === a.strm.avail_in) break;
          l = a.strm;
          f = a.window;
          e = a.strstart + a.lookahead;
          var q = l.avail_in;
          q > d && (q = d);
          0 === q ? f = 0 : (l.avail_in -= q, c.arraySet(f, l.input, l.next_in, q, e), 1 === l.state.wrap ? l.adler = J(l.adler, f, q, e) : 2 === l.state.wrap && (l.adler = y(l.adler, f, q, e)), l.next_in += q, l.total_in += q, f = q);
          a.lookahead += f;
          if (3 <= a.lookahead + a.insert) for (d = a.strstart - a.insert, a.ins_h = a.window[d], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[d + 1]) & a.hash_mask; a.insert && !(a.ins_h = (a.ins_h << a.hash_shift ^ a.window[d + 3 - 1]) & a.hash_mask, a.prev[d & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = d, d++, a.insert--, 3 > a.lookahead + a.insert););
        } while (262 > a.lookahead && 0 !== a.strm.avail_in)
      }
      function w(a, c) {
        for (var b; ;) {
          if (262 > a.lookahead) {
            t(a);
            if (262 > a.lookahead && 0 === c) return 1;
            if (0 === a.lookahead) break
          }
          b = 0;
          3 <= a.lookahead && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 3 - 1]) & a.hash_mask, b = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart);
          0 !== b && a.strstart - b <= a.w_size - 262 && (a.match_length = z(a, b));
          if (3 <= a.match_length) if (b = D._tr_tally(a, a.strstart - a.match_start, a.match_length - 3), a.lookahead -= a.match_length, a.match_length <= a.max_lazy_match && 3 <= a.lookahead) {
            a.match_length--;
            do a.strstart++,
              a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 3 - 1]) & a.hash_mask,
              a.prev[a.strstart & a.w_mask] = a.head[a.ins_h],
              a.head[a.ins_h] = a.strstart;
            while (0 !== --a.match_length);
            a.strstart++
          } else a.strstart +=
            a.match_length,
            a.match_length = 0,
            a.ins_h = a.window[a.strstart],
            a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 1]) & a.hash_mask;
          else b = D._tr_tally(a, 0, a.window[a.strstart]),
            a.lookahead--,
            a.strstart++;
          if (b && (s(a, !1), 0 === a.strm.avail_out)) return 1
        }
        a.insert = 2 > a.strstart ? a.strstart : 2;
        return 4 === c ? (s(a, !0), 0 === a.strm.avail_out ? 3 : 4) : a.last_lit && (s(a, !1), 0 === a.strm.avail_out) ? 1 : 2
      }
      function v(a, c) {
        for (var b, f; ;) {
          if (262 > a.lookahead) {
            t(a);
            if (262 > a.lookahead && 0 === c) return 1;
            if (0 === a.lookahead) break
          }
          b = 0;
          3 <= a.lookahead && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 3 - 1]) & a.hash_mask, b = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart);
          a.prev_length = a.match_length;
          a.prev_match = a.match_start;
          a.match_length = 2;
          0 !== b && a.prev_length < a.max_lazy_match && a.strstart - b <= a.w_size - 262 && (a.match_length = z(a, b), 5 >= a.match_length && (1 === a.strategy || 3 === a.match_length && 4096 < a.strstart - a.match_start) && (a.match_length = 2));
          if (3 <= a.prev_length && a.match_length <= a.prev_length) {
            f = a.strstart + a.lookahead - 3;
            b = D._tr_tally(a, a.strstart - 1 - a.prev_match, a.prev_length - 3);
            a.lookahead -= a.prev_length - 1;
            a.prev_length -= 2;
            do ++a.strstart <= f && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 3 - 1]) & a.hash_mask, a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart);
            while (0 !== --a.prev_length);
            a.match_available = 0;
            a.match_length = 2;
            a.strstart++;
            if (b && (s(a, !1), 0 === a.strm.avail_out)) return 1
          } else if (a.match_available) {
            if ((b = D._tr_tally(a, 0, a.window[a.strstart - 1])) && s(a, !1), a.strstart++, a.lookahead--, 0 === a.strm.avail_out) return 1
          } else a.match_available = 1,
            a.strstart++,
            a.lookahead--
        }
        a.match_available && (D._tr_tally(a, 0, a.window[a.strstart - 1]), a.match_available = 0);
        a.insert = 2 > a.strstart ? a.strstart : 2;
        return 4 === c ? (s(a, !0), 0 === a.strm.avail_out ? 3 : 4) : a.last_lit && (s(a, !1), 0 === a.strm.avail_out) ? 1 : 2
      }
      function K(a, c) {
        for (var b, f, e, d = a.window; ;) {
          if (258 >= a.lookahead) {
            t(a);
            if (258 >= a.lookahead && 0 === c) return 1;
            if (0 === a.lookahead) break
          }
          a.match_length = 0;
          if (3 <= a.lookahead && 0 < a.strstart && (f = a.strstart - 1, b = d[f], b === d[++f] && b === d[++f] && b === d[++f])) {
            for (e = a.strstart + 258; b ===
              d[++f] && b === d[++f] && b === d[++f] && b === d[++f] && b === d[++f] && b === d[++f] && b === d[++f] && b === d[++f] && f < e;);
            a.match_length = 258 - (e - f);
            a.match_length > a.lookahead && (a.match_length = a.lookahead)
          }
          3 <= a.match_length ? (b = D._tr_tally(a, 1, a.match_length - 3), a.lookahead -= a.match_length, a.strstart += a.match_length, a.match_length = 0) : (b = D._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++);
          if (b && (s(a, !1), 0 === a.strm.avail_out)) return 1
        }
        a.insert = 0;
        return 4 === c ? (s(a, !0), 0 === a.strm.avail_out ? 3 : 4) : a.last_lit && (s(a, !1), 0 === a.strm.avail_out) ? 1 : 2
      }
      function H(a, c) {
        for (var b; ;) {
          if (0 === a.lookahead && (t(a), 0 === a.lookahead)) {
            if (0 === c) return 1;
            break
          }
          a.match_length = 0;
          b = D._tr_tally(a, 0, a.window[a.strstart]);
          a.lookahead--;
          a.strstart++;
          if (b && (s(a, !1), 0 === a.strm.avail_out)) return 1
        }
        a.insert = 0;
        return 4 === c ? (s(a, !0), 0 === a.strm.avail_out ? 3 : 4) : a.last_lit && (s(a, !1), 0 === a.strm.avail_out) ? 1 : 2
      }
      function I() {
        this.strm = null;
        this.status = 0;
        this.pending_buf = null;
        this.wrap = this.pending = this.pending_out = this.pending_buf_size = 0;
        this.gzhead = null;
        this.gzindex = 0;
        this.method = 8;
        this.last_flush = - 1;
        this.w_mask = this.w_bits = this.w_size = 0;
        this.window = null;
        this.window_size = 0;
        this.head = this.prev = null;
        this.nice_match = this.good_match = this.strategy = this.level = this.max_lazy_match = this.max_chain_length = this.prev_length = this.lookahead = this.match_start = this.strstart = this.match_available = this.prev_match = this.match_length = this.block_start = this.hash_shift = this.hash_mask = this.hash_bits = this.hash_size = this.ins_h = 0;
        this.dyn_ltree = new c.Buf16(1146);
        this.dyn_dtree = new c.Buf16(122);
        this.bl_tree = new c.Buf16(78);
        p(this.dyn_ltree);
        p(this.dyn_dtree);
        p(this.bl_tree);
        this.bl_desc = this.d_desc = this.l_desc = null;
        this.bl_count = new c.Buf16(16);
        this.heap = new c.Buf16(573);
        p(this.heap);
        this.heap_max = this.heap_len = 0;
        this.depth = new c.Buf16(573);
        p(this.depth);
        this.bi_valid = this.bi_buf = this.insert = this.matches = this.static_len = this.opt_len = this.d_buf = this.last_lit = this.lit_bufsize = this.l_buf = 0
      }
      function A(a) {
        var c;
        if (!a || !a.state) return e(a, - 2);
        a.total_in = a.total_out = 0;
        a.data_type = 2;
        c = a.state;
        c.pending = 0;
        c.pending_out = 0;
        0 > c.wrap && (c.wrap = - c.wrap);
        c.status = c.wrap ? 42 : 113;
        a.adler = 2 === c.wrap ? 0 : 1;
        c.last_flush = 0;
        D._tr_init(c);
        return 0
      }
      function q(a) {
        var c = A(a);
        0 === c && (a = a.state, a.window_size = 2 * a.w_size, p(a.head), a.max_lazy_match = r[a.level].max_lazy, a.good_match = r[a.level].good_length, a.nice_match = r[a.level].nice_length, a.max_chain_length = r[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = 2, a.match_available = 0, a.ins_h = 0);
        return c
      }
      function B(a, b, d, f, h, k) {
        if (!a) return - 2;
        var r = 1;
        - 1 === b && (b = 6);
        0 > f ? (r = 0, f = - f) : 15 < f && (r = 2, f -= 16);
        if (1 > h || 9 < h || 8 !== d || 8 > f || 15 < f || 0 > b || 9 < b || 0 > k || 4 < k) return e(a, - 2);
        8 === f && (f = 9);
        var n = new I;
        a.state = n;
        n.strm = a;
        n.wrap = r;
        n.gzhead = null;
        n.w_bits = f;
        n.w_size = 1 << n.w_bits;
        n.w_mask = n.w_size - 1;
        n.hash_bits = h + 7;
        n.hash_size = 1 << n.hash_bits;
        n.hash_mask = n.hash_size - 1;
        n.hash_shift = ~~((n.hash_bits + 3 - 1) / 3);
        n.window = new c.Buf8(2 * n.w_size);
        n.head = new c.Buf16(n.hash_size);
        n.prev = new c.Buf16(n.w_size);
        n.lit_bufsize = 1 << h + 6;
        n.pending_buf_size = 4 * n.lit_bufsize;
        n.pending_buf = new c.Buf8(n.pending_buf_size);
        n.d_buf = n.lit_bufsize >> 1;
        n.l_buf = 3 * n.lit_bufsize;
        n.level = b;
        n.strategy = k;
        n.method = d;
        return q(a)
      }
      var c = a('../utils/common'),
        D = a('./trees'),
        J = a('./adler32'),
        y = a('./crc32'),
        x = a('./messages');
      a = function (a, c, b, f, e) {
        this.good_length = a;
        this.max_lazy = c;
        this.nice_length = b;
        this.max_chain = f;
        this.func = e
      };
      var r;
      r = [
        new a(0, 0, 0, 0, function (a, c) {
          var b = 65535;
          for (b > a.pending_buf_size - 5 && (b = a.pending_buf_size - 5); ;) {
            if (1 >= a.lookahead) {
              t(a);
              if (0 === a.lookahead && 0 === c) return 1;
              if (0 === a.lookahead) break
            }
            a.strstart += a.lookahead;
            a.lookahead = 0;
            var f = a.block_start + b;
            if (0 === a.strstart || a.strstart >= f) if (a.lookahead = a.strstart - f, a.strstart = f, s(a, !1), 0 === a.strm.avail_out) return 1;
            if (a.strstart - a.block_start >= a.w_size - 262 && (s(a, !1), 0 === a.strm.avail_out)) return 1
          }
          a.insert = 0;
          if (4 === c) return s(a, !0),
            0 === a.strm.avail_out ? 3 : 4;
          a.strstart > a.block_start && s(a, !1);
          return 1
        }),
        new a(4, 4, 8, 4, w),
        new a(4, 5, 16, 8, w),
        new a(4, 6, 32, 32, w),
        new a(4, 4, 16, 16, v),
        new a(8, 16, 32, 32, v),
        new a(8, 16, 128, 128, v),
        new a(8, 32, 128, 256, v),
        new a(32, 128, 258, 1024, v),
        new a(32, 258, 258, 4096, v)
      ];
      b.deflateInit = function (a, c) {
        return B(a, c, 8, 15, 8, 0)
      };
      b.deflateInit2 = B;
      b.deflateReset = q;
      b.deflateResetKeep = A;
      b.deflateSetHeader = function (a, c) {
        if (!a || !a.state || 2 !== a.state.wrap) return - 2;
        a.state.gzhead = c;
        return 0
      };
      b.deflate = function (a, c) {
        var b,
          f,
          q,
          k;
        if (!a || !a.state || 5 < c || 0 > c) return a ? e(a, - 2) : - 2;
        f = a.state;
        if (!a.output || !a.input && 0 !== a.avail_in || 666 === f.status && 4 !== c) return e(a, 0 === a.avail_out ? - 5 : - 2);
        f.strm = a;
        b = f.last_flush;
        f.last_flush = c;
        42 === f.status && (2 === f.wrap ? (a.adler = 0, d(f, 31), d(f, 139), d(f, 8), f.gzhead ? (d(f, (f.gzhead.text ? 1 : 0) + (f.gzhead.hcrc ? 2 : 0) + (f.gzhead.extra ? 4 : 0) + (f.gzhead.name ? 8 : 0) + (f.gzhead.comment ? 16 : 0)), d(f, f.gzhead.time & 255), d(f, f.gzhead.time >> 8 & 255), d(f, f.gzhead.time >> 16 & 255), d(f, f.gzhead.time >> 24 & 255), d(f, 9 === f.level ? 2 : 2 <= f.strategy || 2 > f.level ? 4 : 0), d(f, f.gzhead.os & 255), f.gzhead.extra && f.gzhead.extra.length && (d(f, f.gzhead.extra.length & 255), d(f, f.gzhead.extra.length >> 8 & 255)), f.gzhead.hcrc && (a.adler = y(a.adler, f.pending_buf, f.pending, 0)), f.gzindex = 0, f.status = 69) : (d(f, 0), d(f, 0), d(f, 0), d(f, 0), d(f, 0), d(f, 9 === f.level ? 2 : 2 <= f.strategy || 2 > f.level ? 4 : 0), d(f, 3), f.status = 113)) : (q = 8 + (f.w_bits - 8 << 4) << 8, k = - 1, k = 2 <= f.strategy || 2 > f.level ? 0 : 6 > f.level ? 1 : 6 === f.level ? 2 : 3, q |= k << 6, 0 !== f.strstart && (q |= 32), f.status = 113, h(f, q + (31 - q % 31)), 0 !== f.strstart && (h(f, a.adler >>> 16), h(f, a.adler & 65535)), a.adler = 1));
        if (69 === f.status) if (f.gzhead.extra) {
          for (q = f.pending; f.gzindex < (f.gzhead.extra.length & 65535) && (f.pending !== f.pending_buf_size || (f.gzhead.hcrc && f.pending > q && (a.adler = y(a.adler, f.pending_buf, f.pending - q, q)), n(a), q = f.pending, f.pending !== f.pending_buf_size));) d(f, f.gzhead.extra[f.gzindex] & 255),
            f.gzindex++;
          f.gzhead.hcrc && f.pending > q && (a.adler = y(a.adler, f.pending_buf, f.pending - q, q));
          f.gzindex === f.gzhead.extra.length && (f.gzindex = 0, f.status = 73)
        } else f.status = 73;
        if (73 === f.status) if (f.gzhead.name) {
          q = f.pending;
          do {
            if (f.pending === f.pending_buf_size && (f.gzhead.hcrc && f.pending > q && (a.adler = y(a.adler, f.pending_buf, f.pending - q, q)), n(a), q = f.pending, f.pending ===
              f.pending_buf_size)) {
              k = 1;
              break
            }
            k = f.gzindex < f.gzhead.name.length ? f.gzhead.name.charCodeAt(f.gzindex++) & 255 : 0;
            d(f, k)
          } while (0 !== k);
          f.gzhead.hcrc && f.pending > q && (a.adler = y(a.adler, f.pending_buf, f.pending - q, q));
          0 === k && (f.gzindex = 0, f.status = 91)
        } else f.status = 91;
        if (91 === f.status) if (f.gzhead.comment) {
          q = f.pending;
          do {
            if (f.pending === f.pending_buf_size && (f.gzhead.hcrc && f.pending > q && (a.adler = y(a.adler, f.pending_buf, f.pending - q, q)), n(a), q = f.pending, f.pending === f.pending_buf_size)) {
              k = 1;
              break
            }
            k = f.gzindex < f.gzhead.comment.length ?
              f.gzhead.comment.charCodeAt(f.gzindex++) & 255 : 0;
            d(f, k)
          } while (0 !== k);
          f.gzhead.hcrc && f.pending > q && (a.adler = y(a.adler, f.pending_buf, f.pending - q, q));
          0 === k && (f.status = 103)
        } else f.status = 103;
        103 === f.status && (f.gzhead.hcrc ? (f.pending + 2 > f.pending_buf_size && n(a), f.pending + 2 <= f.pending_buf_size && (d(f, a.adler & 255), d(f, a.adler >> 8 & 255), a.adler = 0, f.status = 113)) : f.status = 113);
        if (0 !== f.pending) {
          if (n(a), 0 === a.avail_out) return f.last_flush = - 1,
            0
        } else if (0 === a.avail_in && (c << 1) - (4 < c ? 9 : 0) <= (b << 1) - (4 < b ? 9 : 0) && 4 !== c) return e(a, - 5);
        if (666 === f.status && 0 !== a.avail_in) return e(a, - 5);
        if (0 !== a.avail_in || 0 !== f.lookahead || 0 !== c && 666 !== f.status) {
          b = 2 === f.strategy ? H(f, c) : 3 === f.strategy ? K(f, c) : r[f.level].func(f, c);
          if (3 === b || 4 === b) f.status = 666;
          if (1 === b || 3 === b) return 0 === a.avail_out && (f.last_flush = - 1),
            0;
          if (2 === b && (1 === c ? D._tr_align(f) : 5 !== c && (D._tr_stored_block(f, 0, 0, !1), 3 === c && (p(f.head), 0 === f.lookahead && (f.strstart = 0, f.block_start = 0, f.insert = 0))), n(a), 0 === a.avail_out)) return f.last_flush = - 1,
            0
        }
        if (4 !== c) return 0;
        if (0 >= f.wrap) return 1;
        2 === f.wrap ? (d(f, a.adler & 255), d(f, a.adler >> 8 & 255), d(f, a.adler >> 16 & 255), d(f, a.adler >> 24 & 255), d(f, a.total_in & 255), d(f, a.total_in >> 8 & 255), d(f, a.total_in >> 16 & 255), d(f, a.total_in >> 24 & 255)) : (h(f, a.adler >>> 16), h(f, a.adler & 65535));
        n(a);
        0 < f.wrap && (f.wrap = - f.wrap);
        return 0 !== f.pending ? 0 : 1
      };
      b.deflateEnd = function (a) {
        var c;
        if (!a || !a.state) return - 2;
        c = a.state.status;
        if (42 !== c && 69 !== c && 73 !== c && 91 !== c && 103 !== c && 113 !== c && 666 !== c) return e(a, - 2);
        a.state = null;
        return 113 === c ? e(a, - 3) : 0
      };
      b.deflateInfo = 'pako deflate (from Nodeca project)'
    },
    {
      '../utils/common': 28,
      './adler32': 30,
      './crc32': 32,
      './messages': 38,
      './trees': 39
    }
  ],
  34: [
    function (a, k, b) {
      k.exports = function () {
        this.os = this.xflags = this.time = this.text = 0;
        this.extra = null;
        this.extra_len = 0;
        this.comment = this.name = '';
        this.hcrc = 0;
        this.done = !1
      }
    },
    {
    }
  ],
  35: [
    function (a, k, b) {
      k.exports = function (a, b) {
        var k,
          s,
          d,
          h,
          z,
          t,
          w,
          v,
          K,
          H,
          I,
          A,
          q,
          B,
          c,
          D,
          J,
          y,
          x,
          r,
          m,
          g,
          l,
          f;
        k = a.state;
        s = a.next_in;
        l = a.input;
        d = s + (a.avail_in - 5);
        h = a.next_out;
        f = a.output;
        z = h - (b - a.avail_out);
        t = h + (a.avail_out - 257);
        w = k.dmax;
        v = k.wsize;
        K = k.whave;
        H = k.wnext;
        I = k.window;
        A = k.hold;
        q = k.bits;
        B = k.lencode;
        c = k.distcode;
        D = (1 << k.lenbits) - 1;
        J = (1 << k.distbits) - 1;
        a: do b: for (15 > q && (A += l[s++] << q, q += 8, A += l[s++] << q, q += 8), y = B[A & D]; ;) {
          x = y >>> 24;
          A >>>= x;
          q -= x;
          x = y >>> 16 & 255;
          if (0 === x) f[h++] = y & 65535;
          else if (x & 16) {
            r = y & 65535;
            if (x &= 15) q < x && (A += l[s++] << q, q += 8),
              r += A & (1 << x) - 1,
              A >>>= x,
              q -= x;
            15 > q && (A += l[s++] << q, q += 8, A += l[s++] << q, q += 8);
            y = c[A & J];
            c: for (; ;) {
              x = y >>> 24;
              A >>>= x;
              q -= x;
              x = y >>> 16 & 255;
              if (x & 16) {
                y &= 65535;
                x &= 15;
                q < x && (A += l[s++] << q, q += 8, q < x && (A += l[s++] << q, q += 8));
                y += A & (1 << x) - 1;
                if (y > w) {
                  a.msg = 'invalid distance too far back';
                  k.mode = 30;
                  break a
                }
                A >>>= x;
                q -= x;
                x = h - z;
                if (y > x) {
                  x = y - x;
                  if (x > K && k.sane) {
                    a.msg = 'invalid distance too far back';
                    k.mode = 30;
                    break a
                  }
                  m = 0;
                  g = I;
                  if (0 === H) {
                    if (m += v - x, x < r) {
                      r -= x;
                      do f[h++] = I[m++];
                      while (--x);
                      m = h - y;
                      g = f
                    }
                  } else if (H < x) {
                    if (m += v + H - x, x -= H, x < r) {
                      r -= x;
                      do f[h++] = I[m++];
                      while (--x);
                      m = 0;
                      if (H < r) {
                        x = H;
                        r -= x;
                        do f[h++] = I[m++];
                        while (--x);
                        m = h - y;
                        g = f
                      }
                    }
                  } else if (m += H - x, x < r) {
                    r -= x;
                    do f[h++] = I[m++];
                    while (--x);
                    m = h - y;
                    g = f
                  }
                  for (; 2 < r;) f[h++] = g[m++],
                    f[h++] = g[m++],
                    f[h++] = g[m++],
                    r -= 3;
                  r && (f[h++] = g[m++], 1 < r && (f[h++] = g[m++]))
                } else {
                  m = h - y;
                  do f[h++] = f[m++],
                    f[h++] = f[m++],
                    f[h++] = f[m++],
                    r -= 3;
                  while (2 < r);
                  r && (f[h++] = f[m++], 1 < r && (f[h++] = f[m++]))
                }
              } else if (0 === (x & 64)) {
                y = c[(y & 65535) + (A & (1 << x) - 1)];
                continue c
              } else {
                a.msg = 'invalid distance code';
                k.mode = 30;
                break a
              }
              break
            }
          } else if (0 === (x & 64)) {
            y = B[(y & 65535) + (A & (1 << x) - 1)];
            continue b
          } else {
            x & 32 ? k.mode = 12 : (a.msg = 'invalid literal/length code', k.mode = 30);
            break a
          }
          break
        } while (s < d && h < t);
        r = q >> 3;
        s -= r;
        q -= r << 3;
        a.next_in = s;
        a.next_out = h;
        a.avail_in = s < d ? 5 + (d - s) : 5 - (s - d);
        a.avail_out = h < t ? 257 + (t - h) : 257 - (h - t);
        k.hold = A & (1 << q) - 1;
        k.bits = q
      }
    },
    {
    }
  ],
  36: [
    function (a, k, b) {
      function e(a) {
        return (a >>> 24 & 255) + (a >>> 8 & 65280) + ((a & 65280) << 8) + ((a & 255) << 24)
      }
      function p() {
        this.mode = 0;
        this.last = !1;
        this.wrap = 0;
        this.havedict = !1;
        this.total = this.check = this.dmax = this.flags = 0;
        this.head = null;
        this.wnext = this.whave = this.wsize = this.wbits = 0;
        this.window = null;
        this.extra = this.offset = this.length = this.bits = this.hold = 0;
        this.distcode = this.lencode = null;
        this.have = this.ndist = this.nlen = this.ncode = this.distbits = this.lenbits = 0;
        this.next = null;
        this.lens = new z.Buf16(320);
        this.work = new z.Buf16(288);
        this.distdyn = this.lendyn = null;
        this.was = this.back = this.sane = 0
      }
      function n(a) {
        var b;
        if (!a || !a.state) return - 2;
        b = a.state;
        a.total_in = a.total_out = b.total = 0;
        a.msg = '';
        b.wrap && (a.adler = b.wrap & 1);
        b.mode = 1;
        b.last = 0;
        b.havedict = 0;
        b.dmax = 32768;
        b.head = null;
        b.hold = 0;
        b.bits = 0;
        b.lencode = b.lendyn = new z.Buf32(852);
        b.distcode = b.distdyn = new z.Buf32(592);
        b.sane = 1;
        b.back = - 1;
        return 0
      }
      function s(a) {
        var b;
        if (!a || !a.state) return - 2;
        b = a.state;
        b.wsize = 0;
        b.whave = 0;
        b.wnext = 0;
        return n(a)
      }
      function d(a, b) {
        var c,
          e;
        if (!a || !a.state) return - 2;
        e = a.state;
        0 > b ? (c = 0, b = - b) : (c = (b >> 4) + 1, 48 > b && (b &= 15));
        if (b && (8 > b || 15 < b)) return - 2;
        null !== e.window && e.wbits !== b && (e.window = null);
        e.wrap = c;
        e.wbits = b;
        return s(a)
      }
      function h(a, b) {
        var c;
        if (!a) return - 2;
        c = new p;
        a.state = c;
        c.window = null;
        c = d(a, b);
        0 !== c && (a.state = null);
        return c
      }
      var z = a('../utils/common'),
        t = a('./adler32'),
        w = a('./crc32'),
        v = a('./inffast'),
        K = a('./inftrees'),
        H = !0,
        I,
        A;
      b.inflateReset = s;
      b.inflateReset2 = d;
      b.inflateResetKeep = n;
      b.inflateInit = function (a) {
        return h(a, 15)
      };
      b.inflateInit2 = h;
      b.inflate = function (a, b) {
        var c,
          d,
          k,
          h,
          n,
          r,
          m,
          g,
          l,
          f,
          s,
          u,
          p,
          G,
          C = 0,
          M,
          N,
          E,
          F = new z.Buf8(4),
          R = [
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15
          ];
        if (!a || !a.state || !a.output || !a.input && 0 !== a.avail_in) return - 2;
        c = a.state;
        12 === c.mode && (c.mode = 13);
        n = a.next_out;
        k = a.output;
        m = a.avail_out;
        h = a.next_in;
        d = a.input;
        r = a.avail_in;
        g = c.hold;
        l = c.bits;
        f = r;
        s = m;
        E = 0;
        a: for (; ;) switch (c.mode) {
          case 1:
            if (0 === c.wrap) {
              c.mode = 13;
              break
            }
            for (; 16 > l;) {
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            if (c.wrap & 2 && 35615 === g) {
              c.check = 0;
              F[0] = g & 255;
              F[1] = g >>> 8 & 255;
              c.check = w(c.check, F, 2, 0);
              l = g = 0;
              c.mode = 2;
              break
            }
            c.flags = 0;
            c.head && (c.head.done = !1);
            if (!(c.wrap & 1) || (((g & 255) << 8) + (g >> 8)) % 31) {
              a.msg = 'incorrect header check';
              c.mode = 30;
              break
            }
            if (8 !== (g & 15)) {
              a.msg = 'unknown compression method';
              c.mode = 30;
              break
            }
            g >>>= 4;
            l -= 4;
            p = (g & 15) + 8;
            if (0 === c.wbits) c.wbits = p;
            else if (p > c.wbits) {
              a.msg = 'invalid window size';
              c.mode = 30;
              break
            }
            c.dmax = 1 << p;
            a.adler = c.check = 1;
            c.mode = g & 512 ? 10 : 12;
            l = g = 0;
            break;
          case 2:
            for (; 16 > l;) {
              if (0 === r) break a;
              r--;
              g +=
                d[h++] << l;
              l += 8
            }
            c.flags = g;
            if (8 !== (c.flags & 255)) {
              a.msg = 'unknown compression method';
              c.mode = 30;
              break
            }
            if (c.flags & 57344) {
              a.msg = 'unknown header flags set';
              c.mode = 30;
              break
            }
            c.head && (c.head.text = g >> 8 & 1);
            c.flags & 512 && (F[0] = g & 255, F[1] = g >>> 8 & 255, c.check = w(c.check, F, 2, 0));
            l = g = 0;
            c.mode = 3;
          case 3:
            for (; 32 > l;) {
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            c.head && (c.head.time = g);
            c.flags & 512 && (F[0] = g & 255, F[1] = g >>> 8 & 255, F[2] = g >>> 16 & 255, F[3] = g >>> 24 & 255, c.check = w(c.check, F, 4, 0));
            l = g = 0;
            c.mode = 4;
          case 4:
            for (; 16 > l;) {
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            c.head && (c.head.xflags = g & 255, c.head.os = g >> 8);
            c.flags & 512 && (F[0] = g & 255, F[1] = g >>> 8 & 255, c.check = w(c.check, F, 2, 0));
            l = g = 0;
            c.mode = 5;
          case 5:
            if (c.flags & 1024) {
              for (; 16 > l;) {
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              c.length = g;
              c.head && (c.head.extra_len = g);
              c.flags & 512 && (F[0] = g & 255, F[1] = g >>> 8 & 255, c.check = w(c.check, F, 2, 0));
              l = g = 0
            } else c.head && (c.head.extra = null);
            c.mode = 6;
          case 6:
            if (c.flags & 1024 && (u = c.length, u > r && (u = r), u && (c.head && (p = c.head.extra_len - c.length, c.head.extra || (c.head.extra = Array(c.head.extra_len)), z.arraySet(c.head.extra, d, h, u, p)), c.flags & 512 && (c.check = w(c.check, d, u, h)), r -= u, h += u, c.length -= u), c.length)) break a;
            c.length = 0;
            c.mode = 7;
          case 7:
            if (c.flags & 2048) {
              if (0 === r) break a;
              u = 0;
              do p = d[h + u++],
                c.head && p && 65536 > c.length && (c.head.name += String.fromCharCode(p));
              while (p && u < r);
              c.flags & 512 && (c.check = w(c.check, d, u, h));
              r -= u;
              h += u;
              if (p) break a
            } else c.head && (c.head.name = null);
            c.length = 0;
            c.mode = 8;
          case 8:
            if (c.flags & 4096) {
              if (0 === r) break a;
              u = 0;
              do p = d[h + u++],
                c.head && p && 65536 > c.length && (c.head.comment += String.fromCharCode(p));
              while (p && u < r);
              c.flags & 512 && (c.check = w(c.check, d, u, h));
              r -= u;
              h += u;
              if (p) break a
            } else c.head && (c.head.comment = null);
            c.mode = 9;
          case 9:
            if (c.flags & 512) {
              for (; 16 > l;) {
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              if (g !== (c.check & 65535)) {
                a.msg = 'header crc mismatch';
                c.mode = 30;
                break
              }
              l = g = 0
            }
            c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = !0);
            a.adler = c.check = 0;
            c.mode = 12;
            break;
          case 10:
            for (; 32 > l;) {
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            a.adler = c.check = e(g);
            l = g = 0;
            c.mode = 11;
          case 11:
            if (0 === c.havedict) return a.next_out = n,
              a.avail_out = m,
              a.next_in = h,
              a.avail_in = r,
              c.hold = g,
              c.bits = l,
              2;
            a.adler = c.check = 1;
            c.mode = 12;
          case 12:
            if (5 === b || 6 === b) break a;
          case 13:
            if (c.last) {
              g >>>= l & 7;
              l -= l & 7;
              c.mode = 27;
              break
            }
            for (; 3 > l;) {
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            c.last = g & 1;
            g >>>= 1;
            l -= 1;
            switch (g & 3) {
              case 0:
                c.mode = 14;
                break;
              case 1:
                u = c;
                if (H) {
                  p = void 0;
                  I = new z.Buf32(512);
                  A = new z.Buf32(32);
                  for (p = 0; 144 > p;) u.lens[p++] = 8;
                  for (; 256 > p;) u.lens[p++] = 9;
                  for (; 280 > p;) u.lens[p++] = 7;
                  for (; 288 > p;) u.lens[p++] = 8;
                  K(1, u.lens, 0, 288, I, 0, u.work, {
                    bits: 9
                  });
                  for (p = 0; 32 > p;) u.lens[p++] = 5;
                  K(2, u.lens, 0, 32, A, 0, u.work, {
                    bits: 5
                  });
                  H = !1
                }
                u.lencode = I;
                u.lenbits = 9;
                u.distcode = A;
                u.distbits = 5;
                c.mode = 20;
                if (6 === b) {
                  g >>>= 2;
                  l -= 2;
                  break a
                }
                break;
              case 2:
                c.mode = 17;
                break;
              case 3:
                a.msg = 'invalid block type',
                  c.mode = 30
            }
            g >>>= 2;
            l -= 2;
            break;
          case 14:
            g >>>= l & 7;
            for (l -= l & 7; 32 > l;) {
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            if ((g & 65535) !== (g >>> 16 ^ 65535)) {
              a.msg = 'invalid stored block lengths';
              c.mode = 30;
              break
            }
            c.length = g & 65535;
            l = g = 0;
            c.mode = 15;
            if (6 === b) break a;
          case 15:
            c.mode = 16;
          case 16:
            if (u = c.length) {
              u > r && (u = r);
              u > m && (u = m);
              if (0 ===
                u) break a;
              z.arraySet(k, d, h, u, n);
              r -= u;
              h += u;
              m -= u;
              n += u;
              c.length -= u;
              break
            }
            c.mode = 12;
            break;
          case 17:
            for (; 14 > l;) {
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            c.nlen = (g & 31) + 257;
            g >>>= 5;
            l -= 5;
            c.ndist = (g & 31) + 1;
            g >>>= 5;
            l -= 5;
            c.ncode = (g & 15) + 4;
            g >>>= 4;
            l -= 4;
            if (286 < c.nlen || 30 < c.ndist) {
              a.msg = 'too many length or distance symbols';
              c.mode = 30;
              break
            }
            c.have = 0;
            c.mode = 18;
          case 18:
            for (; c.have < c.ncode;) {
              for (; 3 > l;) {
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              c.lens[R[c.have++]] = g & 7;
              g >>>= 3;
              l -= 3
            }
            for (; 19 > c.have;) c.lens[R[c.have++]] = 0;
            c.lencode = c.lendyn;
            c.lenbits = 7;
            u = {
              bits: c.lenbits
            };
            E = K(0, c.lens, 0, 19, c.lencode, 0, c.work, u);
            c.lenbits = u.bits;
            if (E) {
              a.msg = 'invalid code lengths set';
              c.mode = 30;
              break
            }
            c.have = 0;
            c.mode = 19;
          case 19:
            for (; c.have < c.nlen + c.ndist;) {
              for (; ;) {
                C = c.lencode[g & (1 << c.lenbits) - 1];
                u = C >>> 24;
                C &= 65535;
                if (u <= l) break;
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              if (16 > C) g >>>= u,
                l -= u,
                c.lens[c.have++] = C;
              else {
                if (16 === C) {
                  for (p = u + 2; l < p;) {
                    if (0 === r) break a;
                    r--;
                    g += d[h++] << l;
                    l += 8
                  }
                  g >>>= u;
                  l -= u;
                  if (0 === c.have) {
                    a.msg = 'invalid bit length repeat';
                    c.mode = 30;
                    break
                  }
                  p = c.lens[c.have - 1];
                  u = 3 + (g & 3);
                  g >>>= 2;
                  l -= 2
                } else if (17 === C) {
                  for (p = u + 3; l < p;) {
                    if (0 === r) break a;
                    r--;
                    g += d[h++] << l;
                    l += 8
                  }
                  g >>>= u;
                  l -= u;
                  p = 0;
                  u = 3 + (g & 7);
                  g >>>= 3;
                  l -= 3
                } else {
                  for (p = u + 7; l < p;) {
                    if (0 === r) break a;
                    r--;
                    g += d[h++] << l;
                    l += 8
                  }
                  g >>>= u;
                  l -= u;
                  p = 0;
                  u = 11 + (g & 127);
                  g >>>= 7;
                  l -= 7
                }
                if (c.have + u > c.nlen + c.ndist) {
                  a.msg = 'invalid bit length repeat';
                  c.mode = 30;
                  break
                }
                for (; u--;) c.lens[c.have++] = p
              }
            }
            if (30 === c.mode) break;
            if (0 === c.lens[256]) {
              a.msg = 'invalid code -- missing end-of-block';
              c.mode = 30;
              break
            }
            c.lenbits = 9;
            u = {
              bits: c.lenbits
            };
            E = K(1, c.lens, 0, c.nlen, c.lencode, 0, c.work, u);
            c.lenbits = u.bits;
            if (E) {
              a.msg = 'invalid literal/lengths set';
              c.mode = 30;
              break
            }
            c.distbits = 6;
            c.distcode = c.distdyn;
            u = {
              bits: c.distbits
            };
            E = K(2, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, u);
            c.distbits = u.bits;
            if (E) {
              a.msg = 'invalid distances set';
              c.mode = 30;
              break
            }
            c.mode = 20;
            if (6 === b) break a;
          case 20:
            c.mode = 21;
          case 21:
            if (6 <= r && 258 <= m) {
              a.next_out = n;
              a.avail_out = m;
              a.next_in = h;
              a.avail_in = r;
              c.hold = g;
              c.bits = l;
              v(a, s);
              n = a.next_out;
              k = a.output;
              m = a.avail_out;
              h = a.next_in;
              d = a.input;
              r = a.avail_in;
              g = c.hold;
              l = c.bits;
              12 === c.mode && (c.back = - 1);
              break
            }
            for (c.back = 0; ;) {
              C = c.lencode[g & (1 << c.lenbits) - 1];
              u = C >>> 24;
              p = C >>> 16 & 255;
              C &= 65535;
              if (u <= l) break;
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            if (p && 0 === (p & 240)) {
              G = u;
              M = p;
              for (N = C; ;) {
                C = c.lencode[N + ((g & (1 << G + M) - 1) >> G)];
                u = C >>> 24;
                p = C >>> 16 & 255;
                C &= 65535;
                if (G + u <= l) break;
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              g >>>= G;
              l -= G;
              c.back += G
            }
            g >>>= u;
            l -= u;
            c.back += u;
            c.length = C;
            if (0 === p) {
              c.mode = 26;
              break
            }
            if (p & 32) {
              c.back = - 1;
              c.mode = 12;
              break
            }
            if (p & 64) {
              a.msg = 'invalid literal/length code';
              c.mode = 30;
              break
            }
            c.extra = p & 15;
            c.mode = 22;
          case 22:
            if (c.extra) {
              for (p = c.extra; l < p;) {
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              c.length += g & (1 << c.extra) - 1;
              g >>>= c.extra;
              l -= c.extra;
              c.back += c.extra
            }
            c.was = c.length;
            c.mode = 23;
          case 23:
            for (; ;) {
              C = c.distcode[g & (1 << c.distbits) - 1];
              u = C >>> 24;
              p = C >>> 16 & 255;
              C &= 65535;
              if (u <= l) break;
              if (0 === r) break a;
              r--;
              g += d[h++] << l;
              l += 8
            }
            if (0 === (p & 240)) {
              G = u;
              M = p;
              for (N = C; ;) {
                C = c.distcode[N + ((g & (1 << G + M) - 1) >> G)];
                u = C >>> 24;
                p = C >>> 16 & 255;
                C &= 65535;
                if (G + u <= l) break;
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              g >>>=
                G;
              l -= G;
              c.back += G
            }
            g >>>= u;
            l -= u;
            c.back += u;
            if (p & 64) {
              a.msg = 'invalid distance code';
              c.mode = 30;
              break
            }
            c.offset = C;
            c.extra = p & 15;
            c.mode = 24;
          case 24:
            if (c.extra) {
              for (p = c.extra; l < p;) {
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              c.offset += g & (1 << c.extra) - 1;
              g >>>= c.extra;
              l -= c.extra;
              c.back += c.extra
            }
            if (c.offset > c.dmax) {
              a.msg = 'invalid distance too far back';
              c.mode = 30;
              break
            }
            c.mode = 25;
          case 25:
            if (0 === m) break a;
            u = s - m;
            if (c.offset > u) {
              u = c.offset - u;
              if (u > c.whave && c.sane) {
                a.msg = 'invalid distance too far back';
                c.mode = 30;
                break
              }
              u > c.wnext ? (u -= c.wnext, p = c.wsize - u) : p = c.wnext - u;
              u > c.length && (u = c.length);
              G = c.window
            } else G = k,
              p = n - c.offset,
              u = c.length;
            u > m && (u = m);
            m -= u;
            c.length -= u;
            do k[n++] = G[p++];
            while (--u);
            0 === c.length && (c.mode = 21);
            break;
          case 26:
            if (0 === m) break a;
            k[n++] = c.length;
            m--;
            c.mode = 21;
            break;
          case 27:
            if (c.wrap) {
              for (; 32 > l;) {
                if (0 === r) break a;
                r--;
                g |= d[h++] << l;
                l += 8
              }
              s -= m;
              a.total_out += s;
              c.total += s;
              s && (a.adler = c.check = c.flags ? w(c.check, k, s, n - s) : t(c.check, k, s, n - s));
              s = m;
              if ((c.flags ? g : e(g)) !== c.check) {
                a.msg = 'incorrect data check';
                c.mode = 30;
                break
              }
              l = g = 0
            }
            c.mode = 28;
          case 28:
            if (c.wrap && c.flags) {
              for (; 32 > l;) {
                if (0 === r) break a;
                r--;
                g += d[h++] << l;
                l += 8
              }
              if (g !== (c.total & 4294967295)) {
                a.msg = 'incorrect length check';
                c.mode = 30;
                break
              }
              l = g = 0
            }
            c.mode = 29;
          case 29:
            E = 1;
            break a;
          case 30:
            E = - 3;
            break a;
          case 31:
            return - 4;
          default:
            return - 2
        }
        a.next_out = n;
        a.avail_out = m;
        a.next_in = h;
        a.avail_in = r;
        c.hold = g;
        c.bits = l;
        if (c.wsize || s !== a.avail_out && 30 > c.mode && (27 > c.mode || 4 !== b)) d = a.output,
          h = a.next_out,
          n = s - a.avail_out,
          m = a.state,
          null === m.window && (m.wsize = 1 << m.wbits, m.wnext = 0, m.whave = 0, m.window = new z.Buf8(m.wsize)),
          n >= m.wsize ? (z.arraySet(m.window, d, h - m.wsize, m.wsize, 0), m.wnext = 0, m.whave = m.wsize) : (r = m.wsize - m.wnext, r > n && (r = n), z.arraySet(m.window, d, h - n, r, m.wnext), (n -= r) ? (z.arraySet(m.window, d, h - n, n, 0), m.wnext = n, m.whave = m.wsize) : (m.wnext += r, m.wnext === m.wsize && (m.wnext = 0), m.whave < m.wsize && (m.whave += r)));
        f -= a.avail_in;
        s -= a.avail_out;
        a.total_in += f;
        a.total_out += s;
        c.total += s;
        c.wrap && s && (a.adler = c.check = c.flags ? w(c.check, k, s, a.next_out - s) : t(c.check, k, s, a.next_out - s));
        a.data_type = c.bits + (c.last ? 64 :
          0) + (12 === c.mode ? 128 : 0) + (20 === c.mode || 15 === c.mode ? 256 : 0);
        (0 === f && 0 === s || 4 === b) && 0 === E && (E = - 5);
        return E
      };
      b.inflateEnd = function (a) {
        if (!a || !a.state) return - 2;
        var b = a.state;
        b.window && (b.window = null);
        a.state = null;
        return 0
      };
      b.inflateGetHeader = function (a, b) {
        var c;
        if (!a || !a.state) return - 2;
        c = a.state;
        if (0 === (c.wrap & 2)) return - 2;
        c.head = b;
        b.done = !1;
        return 0
      };
      b.inflateInfo = 'pako inflate (from Nodeca project)'
    },
    {
      '../utils/common': 28,
      './adler32': 30,
      './crc32': 32,
      './inffast': 35,
      './inftrees': 37
    }
  ],
  37: [
    function (a, k, b) {
      var e = a('../utils/common'),
        p = [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          13,
          15,
          17,
          19,
          23,
          27,
          31,
          35,
          43,
          51,
          59,
          67,
          83,
          99,
          115,
          131,
          163,
          195,
          227,
          258,
          0,
          0
        ],
        n = [
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          17,
          17,
          17,
          17,
          18,
          18,
          18,
          18,
          19,
          19,
          19,
          19,
          20,
          20,
          20,
          20,
          21,
          21,
          21,
          21,
          16,
          72,
          78
        ],
        s = [
          1,
          2,
          3,
          4,
          5,
          7,
          9,
          13,
          17,
          25,
          33,
          49,
          65,
          97,
          129,
          193,
          257,
          385,
          513,
          769,
          1025,
          1537,
          2049,
          3073,
          4097,
          6145,
          8193,
          12289,
          16385,
          24577,
          0,
          0
        ],
        d = [
          16,
          16,
          16,
          16,
          17,
          17,
          18,
          18,
          19,
          19,
          20,
          20,
          21,
          21,
          22,
          22,
          23,
          23,
          24,
          24,
          25,
          25,
          26,
          26,
          27,
          27,
          28,
          28,
          29,
          29,
          64,
          64
        ];
      k.exports = function (a, b, k, w, v, K, H, I) {
        for (var A = I.bits, q = 0, B = 0, c = 0, D = 0, J = 0, y = 0, x = 0, r = 0, m = 0, g = 0, l, f, P = null, u = 0, Q, G = new e.Buf16(16), y = new e.Buf16(16), C = null, M = 0, N, E, F, q = 0; 15 >= q; q++) G[q] = 0;
        for (B = 0; B < w; B++) G[b[k + B]]++;
        J = A;
        for (D = 15; 1 <= D && 0 === G[D]; D--);
        J > D && (J = D);
        if (0 === D) return v[K++] = 20971520,
          v[K++] = 20971520,
          I.bits = 1,
          0;
        for (c = 1; c < D && 0 === G[c]; c++);
        J < c && (J = c);
        for (q = r = 1; 15 >= q; q++) if (r <<= 1, r -= G[q], 0 > r) return - 1;
        if (0 < r && (0 === a || 1 !== D)) return - 1;
        y[1] = 0;
        for (q = 1; 15 > q; q++) y[q + 1] = y[q] + G[q];
        for (B = 0; B < w; B++) 0 !== b[k + B] && (H[y[b[k + B]]++] = B);
        0 === a ? (P = C = H, Q = 19) : 1 === a ? (P = p, u -= 257, C = n, M -= 257, Q = 256) : (P = s, C = d, Q = - 1);
        B = g = 0;
        q = c;
        A = K;
        y = J;
        x = 0;
        f = - 1;
        m = 1 << J;
        w = m - 1;
        if (1 === a && 852 < m || 2 === a && 592 < m) return 1;
        for (var R = 0; ;) {
          R++;
          N = q - x;
          H[B] < Q ? (E = 0, F = H[B]) : H[B] > Q ? (E = C[M + H[B]], F = P[u + H[B]]) : (E = 96, F = 0);
          r = 1 << q - x;
          c = l = 1 << y;
          do l -= r,
            v[A + (g >> x) + l] = N << 24 | E << 16 | F | 0;
          while (0 !== l);
          for (r = 1 << q - 1; g & r;) r >>= 1;
          0 !== r ? (g &= r - 1, g += r) : g = 0;
          B++;
          if (0 === --G[q]) {
            if (q === D) break;
            q = b[k + H[B]]
          }
          if (q > J && (g & w) !== f) {
            0 === x && (x = J);
            A += c;
            y = q - x;
            for (r = 1 << y; y + x < D;) {
              r -= G[y + x];
              if (0 >= r) break;
              y++;
              r <<= 1
            }
            m += 1 << y;
            if (1 === a && 852 < m || 2 === a && 592 < m) return 1;
            f = g & w;
            v[f] = J << 24 | y << 16 | A - K | 0
          }
        }
        0 !== g && (v[A + g] = q - x << 24 | 4194304);
        I.bits = J;
        return 0
      }
    },
    {
      '../utils/common': 28
    }
  ],
  38: [
    function (a, k, b) {
      k.exports = {
        2: 'need dictionary',
        1: 'stream end',
        0: '',
        '-1': 'file error',
        '-2': 'stream error',
        '-3': 'data error',
        '-4': 'insufficient memory',
        '-5': 'buffer error',
        '-6': 'incompatible version'
      }
    },
    {
    }
  ],
  39: [
    function (a, k, b) {
      function e(a) {
        for (var b = a.length; 0 <= --b;) a[b] = 0
      }
      function p(a, b) {
        a.pending_buf[a.pending++] = b & 255;
        a.pending_buf[a.pending++] = b >>> 8 & 255
      }
      function n(a, b, c) {
        a.bi_valid > 16 - c ? (a.bi_buf |=
          b << a.bi_valid & 65535, p(a, a.bi_buf), a.bi_buf = b >> 16 - a.bi_valid, a.bi_valid += c - 16) : (a.bi_buf |= b << a.bi_valid & 65535, a.bi_valid += c)
      }
      function s(a, b, c) {
        n(a, c[2 * b], c[2 * b + 1])
      }
      function d(a, b) {
        var c = 0;
        do c |= a & 1,
          a >>>= 1,
          c <<= 1;
        while (0 < --b);
        return c >>> 1
      }
      function h(a, b, c) {
        var f = Array(16),
          e = 0,
          g;
        for (g = 1; 15 >= g; g++) f[g] = e = e + c[g - 1] << 1;
        for (c = 0; c <= b; c++) e = a[2 * c + 1],
          0 !== e && (a[2 * c] = d(f[e]++, e))
      }
      function z(a) {
        var b;
        for (b = 0; 286 > b; b++) a.dyn_ltree[2 * b] = 0;
        for (b = 0; 30 > b; b++) a.dyn_dtree[2 * b] = 0;
        for (b = 0; 19 > b; b++) a.bl_tree[2 * b] = 0;
        a.dyn_ltree[512] = 1;
        a.opt_len = a.static_len = 0;
        a.last_lit = a.matches = 0
      }
      function t(a) {
        8 < a.bi_valid ? p(a, a.bi_buf) : 0 < a.bi_valid && (a.pending_buf[a.pending++] = a.bi_buf);
        a.bi_buf = 0;
        a.bi_valid = 0
      }
      function w(a, b, c, d) {
        var f = 2 * b,
          e = 2 * c;
        return a[f] < a[e] || a[f] === a[e] && d[b] <= d[c]
      }
      function v(a, b, c) {
        for (var d = a.heap[c], f = c << 1; f <= a.heap_len;) {
          f < a.heap_len && w(b, a.heap[f + 1], a.heap[f], a.depth) && f++;
          if (w(b, d, a.heap[f], a.depth)) break;
          a.heap[c] = a.heap[f];
          c = f;
          f <<= 1
        }
        a.heap[c] = d
      }
      function K(a, b, c) {
        var d,
          e,
          h = 0,
          k,
          m;
        if (0 !== a.last_lit) {
          do d = a.pending_buf[a.d_buf +
            2 * h] << 8 | a.pending_buf[a.d_buf + 2 * h + 1],
            e = a.pending_buf[a.l_buf + h],
            h++,
            0 === d ? s(a, e, b) : (k = l[e], s(a, k + 256 + 1, b), m = D[k], 0 !== m && (e -= f[k], n(a, e, m)), d--, k = 256 > d ? g[d] : g[256 + (d >>> 7)], s(a, k, c), m = J[k], 0 !== m && (d -= P[k], n(a, d, m)));
          while (h < a.last_lit)
        }
        s(a, 256, b)
      }
      function H(a, b) {
        var c = b.dyn_tree,
          d = b.stat_desc.static_tree,
          f = b.stat_desc.has_stree,
          e = b.stat_desc.elems,
          g,
          k = - 1,
          l;
        a.heap_len = 0;
        a.heap_max = 573;
        for (g = 0; g < e; g++) 0 !== c[2 * g] ? (a.heap[++a.heap_len] = k = g, a.depth[g] = 0) : c[2 * g + 1] = 0;
        for (; 2 > a.heap_len;) l = a.heap[++a.heap_len] = 2 > k ? ++k : 0,
          c[2 * l] = 1,
          a.depth[l] = 0,
          a.opt_len--,
          f && (a.static_len -= d[2 * l + 1]);
        b.max_code = k;
        for (g = a.heap_len >> 1; 1 <= g; g--) v(a, c, g);
        l = e;
        do g = a.heap[1],
          a.heap[1] = a.heap[a.heap_len--],
          v(a, c, 1),
          d = a.heap[1],
          a.heap[--a.heap_max] = g,
          a.heap[--a.heap_max] = d,
          c[2 * l] = c[2 * g] + c[2 * d],
          a.depth[l] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1,
          c[2 * g + 1] = c[2 * d + 1] = l,
          a.heap[1] = l++,
          v(a, c, 1);
        while (2 <= a.heap_len);
        a.heap[--a.heap_max] = a.heap[1];
        g = b.dyn_tree;
        l = b.max_code;
        for (var m = b.stat_desc.static_tree, n = b.stat_desc.has_stree, p = b.stat_desc.extra_bits, q = b.stat_desc.extra_base, r = b.stat_desc.max_length, s, t, u = 0, e = 0; 15 >= e; e++) a.bl_count[e] = 0;
        g[2 * a.heap[a.heap_max] + 1] = 0;
        for (d = a.heap_max + 1; 573 > d; d++) f = a.heap[d],
          e = g[2 * g[2 * f + 1] + 1] + 1,
          e > r && (e = r, u++),
          g[2 * f + 1] = e,
          f > l || (a.bl_count[e]++, s = 0, f >= q && (s = p[f - q]), t = g[2 * f], a.opt_len += t * (e + s), n && (a.static_len += t * (m[2 * f + 1] + s)));
        if (0 !== u) {
          do {
            for (e = r - 1; 0 === a.bl_count[e];) e--;
            a.bl_count[e]--;
            a.bl_count[e + 1] += 2;
            a.bl_count[r]--;
            u -= 2
          } while (0 < u);
          for (e = r; 0 !== e; e--) for (f = a.bl_count[e]; 0 !== f;) m = a.heap[--d],
            m > l || (g[2 * m + 1] !== e && (a.opt_len += (e - g[2 * m + 1]) * g[2 * m], g[2 * m + 1] = e), f--)
        }
        h(c, k, a.bl_count)
      }
      function I(a, b, c) {
        var d,
          f = - 1,
          e,
          g = b[1],
          h = 0,
          k = 7,
          l = 4;
        0 === g && (k = 138, l = 3);
        b[2 * (c + 1) + 1] = 65535;
        for (d = 0; d <= c; d++) e = g,
          g = b[2 * (d + 1) + 1],
          ++h < k && e === g || (h < l ? a.bl_tree[2 * e] += h : 0 !== e ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[32]++) : 10 >= h ? a.bl_tree[34]++ : a.bl_tree[36]++, h = 0, f = e, 0 === g ? (k = 138, l = 3) : e === g ? (k = 6, l = 3) : (k = 7, l = 4))
      }
      function A(a, b, c) {
        var d,
          e = - 1,
          f,
          g = b[1],
          h = 0,
          k = 7,
          l = 4;
        0 === g && (k = 138, l = 3);
        for (d = 0; d <= c; d++) if (f = g, g = b[2 * (d + 1) + 1], !(++h <
          k && f === g)) {
          if (h < l) {
            do s(a, f, a.bl_tree);
            while (0 !== --h)
          } else 0 !== f ? (f !== e && (s(a, f, a.bl_tree), h--), s(a, 16, a.bl_tree), n(a, h - 3, 2)) : 10 >= h ? (s(a, 17, a.bl_tree), n(a, h - 3, 3)) : (s(a, 18, a.bl_tree), n(a, h - 11, 7));
          h = 0;
          e = f;
          0 === g ? (k = 138, l = 3) : f === g ? (k = 6, l = 3) : (k = 7, l = 4)
        }
      }
      function q(a) {
        var b = 4093624447,
          c;
        for (c = 0; 31 >= c; c++, b >>>= 1) if (b & 1 && 0 !== a.dyn_ltree[2 * c]) return 0;
        if (0 !== a.dyn_ltree[18] || 0 !== a.dyn_ltree[20] || 0 !== a.dyn_ltree[26]) return 1;
        for (c = 32; 256 > c; c++) if (0 !== a.dyn_ltree[2 * c]) return 1;
        return 0
      }
      function B(a, b, d, f) {
        n(a, 0 + (f ? 1 : 0), 3);
        t(a);
        p(a, d);
        p(a, ~d);
        c.arraySet(a.pending_buf, a.window, b, d, a.pending);
        a.pending += d
      }
      var c = a('../utils/common'),
        D = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          3,
          3,
          3,
          3,
          4,
          4,
          4,
          4,
          5,
          5,
          5,
          5,
          0
        ],
        J = [
          0,
          0,
          0,
          0,
          1,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          5,
          5,
          6,
          6,
          7,
          7,
          8,
          8,
          9,
          9,
          10,
          10,
          11,
          11,
          12,
          12,
          13,
          13
        ],
        y = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          3,
          7
        ],
        x = [
          16,
          17,
          18,
          0,
          8,
          7,
          9,
          6,
          10,
          5,
          11,
          4,
          12,
          3,
          13,
          2,
          14,
          1,
          15
        ],
        r = Array(576);
      e(r);
      var m = Array(60);
      e(m);
      var g = Array(512);
      e(g);
      var l = Array(256);
      e(l);
      var f = Array(29);
      e(f);
      var P = Array(30);
      e(P);
      var u = function (a, b, c, d, f) {
        this.static_tree = a;
        this.extra_bits = b;
        this.extra_base = c;
        this.elems = d;
        this.max_length = f;
        this.has_stree = a && a.length
      },
        Q,
        G,
        C,
        M = function (a, b) {
          this.dyn_tree = a;
          this.max_code = 0;
          this.stat_desc = b
        },
        N = !1;
      b._tr_init = function (a) {
        if (!N) {
          var b,
            c,
            e,
            k = Array(16);
          for (e = c = 0; 28 > e; e++) for (f[e] = c, b = 0; b < 1 << D[e]; b++) l[c++] = e;
          l[c - 1] = e;
          for (e = c = 0; 16 > e; e++) for (P[e] = c, b = 0; b < 1 << J[e]; b++) g[c++] = e;
          for (c >>= 7; 30 > e; e++) for (P[e] = c << 7, b = 0; b < 1 << J[e] - 7; b++) g[256 + c++] = e;
          for (b = 0; 15 >= b; b++) k[b] = 0;
          for (b = 0; 143 >= b;) r[2 * b + 1] = 8,
            b++,
            k[8]++;
          for (; 255 >= b;) r[2 * b + 1] = 9,
            b++,
            k[9]++;
          for (; 279 >= b;) r[2 * b + 1] = 7,
            b++,
            k[7]++;
          for (; 287 >= b;) r[2 * b + 1] = 8,
            b++,
            k[8]++;
          h(r, 287, k);
          for (b = 0; 30 > b; b++) m[2 * b + 1] = 5,
            m[2 * b] = d(b, 5);
          Q = new u(r, D, 257, 286, 15);
          G = new u(m, J, 0, 30, 15);
          C = new u([], y, 0, 19, 7);
          N = !0
        }
        a.l_desc = new M(a.dyn_ltree, Q);
        a.d_desc = new M(a.dyn_dtree, G);
        a.bl_desc = new M(a.bl_tree, C);
        a.bi_buf = 0;
        a.bi_valid = 0;
        z(a)
      };
      b._tr_stored_block = B;
      b._tr_flush_block = function (a, b, c, e) {
        var d,
          f,
          g = 0;
        if (0 < a.level) {
          2 === a.strm.data_type && (a.strm.data_type = q(a));
          H(a, a.l_desc);
          H(a, a.d_desc);
          I(a, a.dyn_ltree, a.l_desc.max_code);
          I(a, a.dyn_dtree, a.d_desc.max_code);
          H(a, a.bl_desc);
          for (g = 18; 3 <= g && 0 === a.bl_tree[2 * x[g] + 1]; g--);
          a.opt_len += 3 * (g + 1) + 14;
          d = a.opt_len + 3 + 7 >>> 3;
          f = a.static_len + 3 + 7 >>> 3;
          f <= d && (d = f)
        } else d = f = c + 5;
        if (c + 4 <= d && - 1 !== b) B(a, b, c, e);
        else if (4 === a.strategy || f === d) n(a, 2 + (e ? 1 : 0), 3),
          K(a, r, m);
        else {
          n(a, 4 + (e ? 1 : 0), 3);
          b = a.l_desc.max_code + 1;
          c = a.d_desc.max_code + 1;
          g += 1;
          n(a, b - 257, 5);
          n(a, c - 1, 5);
          n(a, g - 4, 4);
          for (d = 0; d < g; d++) n(a, a.bl_tree[2 * x[d] + 1], 3);
          A(a, a.dyn_ltree, b - 1);
          A(a, a.dyn_dtree, c - 1);
          K(a, a.dyn_ltree, a.dyn_dtree)
        }
        z(a);
        e && t(a)
      };
      b._tr_tally = function (a, b, c) {
        a.pending_buf[a.d_buf + 2 * a.last_lit] = b >>> 8 & 255;
        a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = b & 255;
        a.pending_buf[a.l_buf + a.last_lit] = c & 255;
        a.last_lit++;
        0 === b ? a.dyn_ltree[2 * c]++ : (a.matches++, b--, a.dyn_ltree[2 * (l[c] + 256 + 1)]++, a.dyn_dtree[2 * (256 > b ? g[b] : g[256 + (b >>> 7)])]++);
        return a.last_lit === a.lit_bufsize - 1
      };
      b._tr_align = function (a) {
        n(a, 2, 3);
        s(a, 256, r);
        16 === a.bi_valid ? (p(a, a.bi_buf), a.bi_buf = 0, a.bi_valid = 0) : 8 <= a.bi_valid && (a.pending_buf[a.pending++] = a.bi_buf & 255, a.bi_buf >>= 8, a.bi_valid -=
          8)
      }
    },
    {
      '../utils/common': 28
    }
  ],
  40: [
    function (a, k, b) {
      k.exports = function () {
        this.input = null;
        this.total_in = this.avail_in = this.next_in = 0;
        this.output = null;
        this.total_out = this.avail_out = this.next_out = 0;
        this.msg = '';
        this.state = null;
        this.data_type = 2;
        this.adler = 0
      }
    },
    {
    }
  ],
  41: [
    function (a, k, b) {
      arguments[4][25][0].apply(b, arguments)
    },
    {
      './lib/deflate': 42,
      './lib/inflate': 43,
      './lib/utils/common': 44,
      './lib/zlib/constants': 47
    }
  ],
  42: [
    function (a, k, b) {
      arguments[4][26][0].apply(b, arguments)
    },
    {
      './utils/common': 44,
      './utils/strings': 45,
      './zlib/deflate.js': 49,
      './zlib/messages': 54,
      './zlib/zstream': 56
    }
  ],
  43: [
    function (a, k, b) {
      arguments[4][27][0].apply(b, arguments)
    },
    {
      './utils/common': 44,
      './utils/strings': 45,
      './zlib/constants': 47,
      './zlib/gzheader': 50,
      './zlib/inflate.js': 52,
      './zlib/messages': 54,
      './zlib/zstream': 56
    }
  ],
  44: [
    function (a, k, b) {
      k.exports = a(28)
    },
    {
    }
  ],
  45: [
    function (a, k, b) {
      k.exports = a(29)
    },
    {
      './common': 44
    }
  ],
  46: [
    function (a, k, b) {
      k.exports = a(30)
    },
    {
    }
  ],
  47: [
    function (a, k, b) {
      k.exports = a(31)
    },
    {
    }
  ],
  48: [
    function (a, k, b) {
      k.exports = a(32)
    },
    {
    }
  ],
  49: [
    function (a, k, b) {
      arguments[4][33][0].apply(b, arguments)
    },
    {
      '../utils/common': 44,
      './adler32': 46,
      './crc32': 48,
      './messages': 54,
      './trees': 55
    }
  ],
  50: [
    function (a, k, b) {
      k.exports = a(34)
    },
    {
    }
  ],
  51: [
    function (a, k, b) {
      k.exports = a(35)
    },
    {
    }
  ],
  52: [
    function (a, k, b) {
      arguments[4][36][0].apply(b, arguments)
    },
    {
      '../utils/common': 44,
      './adler32': 46,
      './crc32': 48,
      './inffast': 51,
      './inftrees': 53
    }
  ],
  53: [
    function (a, k, b) {
      k.exports = a(37)
    },
    {
      '../utils/common': 44
    }
  ],
  54: [
    function (a, k, b) {
      k.exports = a(38)
    },
    {
    }
  ],
  55: [
    function (a, k, b) {
      k.exports = a(39)
    },
    {
      '../utils/common': 44
    }
  ],
  56: [
    function (a, k, b) {
      k.exports = a(40)
    },
    {
    }
  ]
},
  {
  },
  [
    1
  ]);

}
function __HBENGINE(global,module,document,navigator,localStorage,location,self,top,Modernizr,RTCPeerConnection,WebSocket,Worker,MediaRecorder,Image,Audio,AudioContext,requestAnimationFrame,cancelAnimationFrame,XMLHttpRequest,fetch){
/* eslint-disable no-useless-concat */
/* eslint-disable no-extend-native */
/* eslint-disable no-self-compare */
/* eslint-disable no-cond-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-mixed-operators */
/* eslint-disable default-case */
/* eslint-disable no-loop-func */
/* eslint-disable new-parens */
/* eslint-disable no-sequences */
/* eslint-disable no-array-constructor */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const {window,$}=global.__STUB;
const pako=global.__STUB.pako;
const {showStats,setGameStats,dispatchPlayerList,dispatchPlayerPos,dispatchClearStats,sendSocketMessage}=global.__HX;
const openModal=()=>{};

var loading = {};

function resetReplay() {

}

function newReplay() {
  dispatchClearStats();
  keepUpdating = true;
  loading = {
    recLength: 1,
    progress: 0,
    analyzed: 0,
    changed: false,
    done: false
  }
}

function bringReplayer() {
  $('.top-section').animate({
    left: 0,
  }, { duration: 700, easing: 'swing', queue: false });

  $('.bottom-section').animate({
    left: 0,
  }, { duration: 700, easing: 'swing', queue: false });

  $('.replay-controls-view').animate({
    left: 0,
  }, { duration: 700, easing: 'swing', queue: false });

  $('#loading-screen').animate({
    left: '-150%',
  }, { duration: 700, easing: 'swing', queue: false });
}

function leaveReplayer() {
  kicker, lastKicker, goals = [], match = [{ stadium: false, started: true, stopped: false, spaceMode: false, realSoccerMode: false, touches: [], thirds: [0, 0, 0], changes: [], gameTicks: -1, kicks: [], shots: [], redTeam: [], blueTeam: [], shotsRed: 0, shotsBlue: 0, passes: [], passesRed: 0, passesBlue: 0, kicksRed: 0, kicksBlue: 0, possRed: 0, possBlue: 0, scoreRed: 0, scoreBlue: 0, player: [], goals: [] }], player = [], players = [], playerList = [], updatePlayers = true;
  mtc = 0, playSounds = false, pileczka = [];
  redGoalCord = [], blueGoalCord = [], goalParsed = 0, playerPos = [], checkTeams = true;
  playerList = [];

  $('.roomlist-view').animate({
    left: 0,
  }, { duration: 700, easing: 'swing', queue: false });

  $('.top-section').animate({
    left: '150%',
  }, { duration: 700, easing: 'swing', queue: false });

  $('.bottom-section').animate({
    left: '150%',
  }, { duration: 700, easing: 'swing', queue: false });

  $('.replay-controls-view').animate({
    left: '150%',
  }, { duration: 700, easing: 'swing', queue: false, complete: function () { resetReplay() } });

  $("#loading-screen").css('left', '150%')
}

function bringSettings() {
  $("#popups").click(function (e) {
    if (e.target.id == 'popups') {
      leaveSettings();
    }
  })

  const parent = $("#settings_button")[0];

  $('.settings-view').css({
    'position': 'fixed',
    'left': parent.offsetLeft + 'px',
    'top': parent.offsetTop + parent.offsetParent.offsetTop + 35 + 'px',
    'width': parent.clientWidth + 'px',
    'height': parent.clientHeight + 'px'
  })
  $('.settings-view').css('visibility', 'visible');
  $('#popups').animate({
    opacity: 1
  }, { duration: 300, easing: 'swing', queue: false });
  $('.settings-view').animate({
    visibility: 'visible',
    opacity: 1,
    width: '25vw',
    height: '50vh',
    maxHeight: '400px',
    top: '25vh',
    left: '37.5vw'
  }, { duration: 300, easing: 'swing', queue: false });
}

function leaveSettings() {
  const parent = $("#settings_button")[0];

  $('#popups').animate({
    opacity: 0
  }, { duration: 300, easing: 'swing', queue: false });

  $('.settings-view').animate({
    left: parent.offsetLeft + 'px',
    top: parent.offsetTop + parent.offsetParent.offsetTop + 35 + 'px',
    width: parent.clientWidth + 'px',
    height: parent.clientHeight + 'px',
  }, { duration: 300, easing: 'swing', queue: false, complete: function () { removePopups() } });
}

function removePopups() {
  $('.settings-view').css('visibility', 'hidden');
  $('#popups').css('display', 'none')
}

!function (e, n, t) {
  function r(e, n) {
    return typeof e === n
  }
  function o() {
    var e,
      n,
      t,
      o,
      i,
      a,
      s;
    for (var l in C) if (C.hasOwnProperty(l)) {
      if (e = [
      ], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
      for (o = r(n.fn, 'function') ? n.fn() : n.fn, i = 0; i < e.length; i++) a = e[i],
        s = a.split('.'),
        1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o),
        h.push((o ? '' : 'no-') + s.join('-'))
    }
  }
  function i(e) {
    var n = _.className,
      t = Modernizr._config.classPrefix || '';
    if (P && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)');
      n = n.replace(r, '$1' + t + 'js$2')
    }
    Modernizr._config.enableClasses && (n += ' ' + t + e.join(' ' + t), P ? _.className.baseVal = n : _.className = n)
  }
  function a() {
    return 'function' != typeof n.createElement ? n.createElement(arguments[0]) : P ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0]) : n.createElement.apply(n, arguments)
  }
  function s(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase()
    }).replace(/^-/, '')
  }
  function l(e, n) {
    return !!~('' + e).indexOf(n)
  }
  function f(e, n) {
    return function () {
      return e.apply(n, arguments)
    }
  }
  function u(e, n, t) {
    var o;
    for (var i in e) if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, 'function') ? f(o, t || n) : o);
    return !1
  }
  function c(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return '-' + n.toLowerCase()
    }).replace(/^ms-/, '-ms-')
  }
  function d(n, t, r) {
    var o;
    if ('getComputedStyle' in e) {
      o = getComputedStyle.call(e, n, t);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var a = i.error ? 'error' : 'log';
        i[a].call(i, 'getComputedStyle returning null, its possible modernizr test results are inaccurate')
      }
    } else o = !t && n.currentStyle && n.currentStyle[r];
    return o
  }
  function p() {
    var e = n.body;
    return e || (e = a(P ? 'svg' : 'body'), e.fake = !0),
      e
  }
  function m(e, t, r, o) {
    var i,
      s,
      l,
      f,
      u = 'modernizr',
      c = a('div'),
      d = p();
    if (parseInt(r, 10)) for (; r--;) l = a('div'),
      l.id = o ? o[r] : u + (r + 1),
      c.appendChild(l);
    return i = a('style'),
      i.type = 'text/css',
      i.id = 's' + u,
      (d.fake ? d : c).appendChild(i),
      d.appendChild(c),
      i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)),
      c.id = u,
      d.fake && (d.style.background = '', d.style.overflow = 'hidden', f = _.style.overflow, _.style.overflow = 'hidden', _.appendChild(d)),
      s = t(c, e),
      d.fake ? (d.parentNode.removeChild(d), _.style.overflow = f, _.offsetHeight) : c.parentNode.removeChild(c),
      !!s
  }
  function v(n, r) {
    var o = n.length;
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--;) if (e.CSS.supports(c(n[o]), r)) return !0;
      return !1
    }
    if ('CSSSupportsRule' in e) {
      for (var i = [
      ]; o--;) i.push('(' + c(n[o]) + ':' + r + ')');
      return i = i.join(' or '),
        m('@supports (' + i + ') { #modernizr { position: absolute; } }', function (e) {
          return 'absolute' == d(e, null, 'position')
        })
    }
    return t
  }
  function g(e, n, o, i) {
    function f() {
      c && (delete N.style, delete N.modElem)
    }
    if (i = r(i, 'undefined') ? !1 : i, !r(o, 'undefined')) {
      var u = v(e, o);
      if (!r(u, 'undefined')) return u
    }
    for (var c, d, p, m, g, y = [
      'modernizr',
      'tspan',
      'samp'
    ]; !N.style && y.length;) c = !0,
      N.modElem = a(y.shift()),
      N.style = N.modElem.style;
    for (p = e.length, d = 0; p > d; d++) if (m = e[d], g = N.style[m], l(m, '-') && (m = s(m)), N.style[m] !== t) {
      if (i || r(o, 'undefined')) return f(),
        'pfx' == n ? m : !0;
      try {
        N.style[m] = o
      } catch (h) {
      }
      if (N.style[m] != g) return f(),
        'pfx' == n ? m : !0
    }
    return f(),
      !1
  }
  function y(e, n, t, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + ' ' + k.join(a + ' ') + a).split(' ');
    return r(n, 'string') || r(n, 'undefined') ? g(s, n, o, i) : (s = (e + ' ' + b.join(a + ' ') + a).split(' '), u(s, n, t))
  }
  var h = [
  ],
    C = [
    ],
    S = {
      _version: '3.5.0',
      _config: {
        classPrefix: 'md-',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [
      ],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e])
        }, 0)
      },
      addTest: function (e, n, t) {
        C.push({
          name: e,
          fn: n,
          options: t
        })
      },
      addAsyncTest: function (e) {
        C.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function () {
    };
  Modernizr.prototype = S,
    Modernizr = new Modernizr,
    Modernizr.addTest('dataview', 'undefined' != typeof DataView && 'getFloat64' in DataView.prototype);
  var w = !1;
  try {
    w = 'WebSocket' in e && 2 === e.WebSocket.CLOSING
  } catch (x) {
  }
  Modernizr.addTest('websockets', w),
    Modernizr.addTest('es6collections', !!(e.Map && e.Set && e.WeakMap && e.WeakSet)),
    Modernizr.addTest('promises', function () {
      return 'Promise' in e && 'resolve' in e.Promise && 'reject' in e.Promise && 'all' in e.Promise && 'race' in e.Promise && function () {
        var n;
        return new e.Promise(function (e) {
          n = e
        }),
          'function' == typeof n
      }()
    }),
    Modernizr.addTest('localstorage', function () {
      var e = 'modernizr';
      try {
        return localStorage.setItem(e, e),
          localStorage.removeItem(e),
          !0
      } catch (n) {
        return !1
      }
    });
  var _ = n.documentElement,
    P = 'svg' === _.nodeName.toLowerCase();
  Modernizr.addTest('canvas', function () {
    var e = a('canvas');
    return !(!e.getContext || !e.getContext('2d'))
  });
  var T = 'Moz O ms Webkit',
    b = S._config.usePrefixes ? T.toLowerCase().split(' ') : [
    ];
  S._domPrefixes = b;
  var k = S._config.usePrefixes ? T.split(' ') : [
  ];
  S._cssomPrefixes = k;
  var z = function (n) {
    var r,
      o = prefixes.length,
      i = e.CSSRule;
    if ('undefined' == typeof i) return t;
    if (!n) return !1;
    if (n = n.replace(/^@/, ''), r = n.replace(/-/g, '_').toUpperCase() + '_RULE', r in i) return '@' + n;
    for (var a = 0; o > a; a++) {
      var s = prefixes[a],
        l = s.toUpperCase() + '_' + r;
      if (l in i) return '@-' + s.toLowerCase() + '-' + n
    }
    return !1
  };
  S.atRule = z;
  var E = {
    elem: a('modernizr')
  };
  Modernizr._q.push(function () {
    delete E.elem
  });
  var N = {
    style: E.elem.style
  };
  Modernizr._q.unshift(function () {
    delete N.style
  }),
    S.testAllProps = y;
  var j = S.prefixed = function (e, n, t) {
    return 0 === e.indexOf('@') ? z(e) : (- 1 != e.indexOf('-') && (e = s(e)), n ? y(e, n, t) : y(e, 'pfx'))
  };
  Modernizr.addTest('peerconnection', !!j('RTCPeerConnection', e)),
    Modernizr.addTest('datachannel', function () {
      if (!Modernizr.peerconnection) return !1;
      for (var n = 0, t = b.length; t > n; n++) {
        var r = e[b[n] + 'RTCPeerConnection'];
        if (r) {
          var o = new r(null);
          return 'createDataChannel' in o
        }
      }
      return !1
    }),
    o(),
    i(h),
    delete S.addTest,
    delete S.addAsyncTest;
  for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
  e.Modernizr = Modernizr
}(window, document);

var kicker, lastKicker, goals = [], match = [{ stadium: false, started: true, stopped: false, spaceMode: false, realSoccerMode: false, touches: [], thirds: [0, 0, 0], changes: [], gameTicks: -1, kicks: [], shots: [], redTeam: [], blueTeam: [], shotsRed: 0, shotsBlue: 0, passes: [], passesRed: 0, passesBlue: 0, kicksRed: 0, kicksBlue: 0, possRed: 0, possBlue: 0, scoreRed: 0, scoreBlue: 0, player: [], goals: [] }], player = [], players = [], playerList = [], updatePlayers = true;
var toucher = { name: "", team: "0" }, lastToucher = "", mtc = 0, playSounds = false, pileczka = [], keepUpdating = true;
var redGoalCord = [], blueGoalCord = [], checkTeams = true, autoClick = false, autoClickValue;
var goalParsed = 0, playerPos = [], ballRadius = 10;
var playerToFollow = 0, mainCanvas, mousepos = { clientX: 0, clientY: 0 };
var globalPlayerHovered = false;

function playersToFollowList() {
  var a = [
    {
      id: 0,
      name: 'ball'
    }
  ];
  var b = '<option value=0>[0] ball</option>';
  for (var i = 0; i < players.length; i++) {
    if (players[i].V == 0) continue;
    a.push({
      id: players[i].V,
      name: players[i].w
    });
    b = b + '<option value=' + a[a.length - 1].id + (playerToFollow == a[a.length - 1].id ? ' selected=true> [' : ' > [') + a[a.length - 1].id + '] ' + a[a.length - 1].name + '</option > ';
  }
  return b;
}

const setPlayerToFollow = function () {
  playerToFollow = document.getElementById('selectPlayerToFollow').value;
}

function getCanvas(a) {
  mainCanvas = a;
  mainCanvas.onmousemove = function (e) {
    mousepos = e;
  }
  mainCanvas.onclick = function (e) {
    if (globalPlayerHovered) {
      playerToFollow = globalPlayerHovered;
    }
  }
}

function parseTime(par) {
  var gt = (par / 60).toFixed();
  var mins = Math.floor(gt / 60);
  gt -= mins * 60;
  if (gt < 10) gt = "0" + gt;
  return "" + mins + ":" + gt;
}

function distanceBetween(a, b) {
  return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

function watchGoal(par) {
  const g = document.getElementById("recGoal" + (Number(par) + 1)).offsetLeft;
  autoClick = true;
  autoClickValue = '' + g;
  document.getElementsByClassName("timebar")[0].click();
}

function hc() {
}
function r() {
}
function q(a) {
  this.Ta = a;
  Error.captureStackTrace && Error.captureStackTrace(this, q)
}
function Wa(a) {
  this.g = v.Ga(Wa.N);
  v.Ea(this.g).get('features').textContent = a.join(', ')
}
function Xa() {
  this.nl = new Qb;
  this.g = v.Ga(Xa.N);
  var a = v.Ea(this.g);
  this.rg = a.get('ping');
  this.wp = a.get('max-ping');
  this.wo = a.get('fps');
  v.xe(a.get('graph'), this.nl.g)
}
function P(a, b, c) {
  var d = this;
  this.g = v.Ga(P.N);
  var e = v.Ea(this.g);
  e.get('ok');
  e.get('cancel');
  this.Vd = e.get('content');
  for (var f = e.get('title'), e = e.get('buttons'), g = 0, k = 0; k < c.length;) {
    var l = c[k++],
      t = window.document.createElement('button');
    t.textContent = l;
    t.onclick = function (a) {
      return function () {
        y.i(d.Va, a[0])
      }
    }([g++]);
    e.appendChild(t)
  }
  this.Vd.textContent = b;
  f.textContent = a
}
function aa(a) {
  function b(a) {
    var b = window.document.createElement('div');
    b.className = 'inputrow';
    var c = window.document.createElement('div');
    c.textContent = a;
    b.appendChild(c);
    for (var c = p.Eo(a), d = 0; d < c.length;) {
      var e = [
        c[d]
      ];
      ++d;
      var f = [
        window.document.createElement('div')
      ],
        g = e[0];
      J.startsWith(e[0], 'Key') && (g = D.substr(e[0], 3, null));
      f[0].textContent = g;
      b.appendChild(f[0]);
      g = window.document.createElement('i');
      g.className = 'icon-cancel';
      g.onclick = function (a, b) {
        return function () {
          p.Jq(b[0]);
          n.A.tg.Xa(p);
          a[0].remove()
        }
      }(f, e);
      f[0].appendChild(g)
    }
    c = window.document.createElement('i');
    c.className = 'icon-plus';
    b.appendChild(c);
    c.onclick = function () {
      q.classList.toggle('show', !0);
      q.focus();
      q.onkeydown = function (b) {
        q.classList.toggle('show', !1);
        b.stopPropagation();
        b = b.code;
        null == p.L(b) && (p.Pa(b, a), n.A.tg.Xa(p), r())
      }
    };
    return b
  }
  function c(a, b, c) {
    a = l.get(a);
    if (null == c) a.hidden = !0;
    else {
      a.innerHTML = b + ': <div class=\'flagico\'></div> <span></span>';
      b = a.querySelector('.flagico');
      a = a.querySelector('span');
      try {
        b.classList.add('f-' + c.ub)
      } catch (vc) {
      }
      a.textContent = c.ub.toUpperCase()
    }
  }
  function d(a, b, c, d) {
    var e = l.get(a);
    e.selectedIndex = d(b.L());
    e.onchange = function () {
      var a = c(e.selectedIndex);
      //console.log("czendż",a);
      b.Xa(a)
    }
  }
  function e(a, b, c) {
    function d(a) {
      e.classList.toggle('icon-ok', a);
      e.classList.toggle('icon-cancel', !a)
    }
    a = l.get(a);
    a.classList.add('toggle');
    var e = window.document.createElement('i');
    e.classList.add('icon-ok');
    a.insertBefore(e, a.firstChild);
    a.onclick = function () {
      var a = !b.L();
      b.Xa(a);
      d(a);
      null != c && c(a)
    };
    d(b.L())
  }
  function f(a) {
    var b = {
      Jm: l.get(a + 'btn'),
      bh: l.get(a + 'sec')
    };
    t.push(b);
    b.Jm.onclick = function (el) {
      g(b);
      if (el.target.id === 'video_button') {
        $("#selectPlayerToFollow")[0].onchange = function () {
          setPlayerToFollow();
        }
      }
    }
  }
  function g(a) {
    for (var b = 0, c = 0; c < t.length;) {
      var d = t[c];
      ++c;
      var e = d == a;
      e && (aa.$l = b);
      d.bh.classList.toggle('selected', e);
      d.Jm.classList.toggle('selected', e);
      ++b
    }
  }
  null == a && (a = !1);
  var k = this;
  aa.N = '<div class=\'dialog settings-view\'><h1>Settings</h1><button data-hook=\'close\'>Close</button><div class=\'tabs\'><button data-hook=\'soundbtn\'>Sound</button><button id=\'video_button\' data-hook=\'videobtn\'>Video</button><button data-hook=\'inputbtn\'>Input</button><button data-hook=\'miscbtn\'>Misc</button></div><div data-hook=\'presskey\' tabindex=\'-1\'><div>Press a key</div></div><div class=\'tabcontents\'><div class=\'section\' data-hook=\'miscsec\'><div class=\'loc\' data-hook=\'loc\'></div><div class=\'loc\' data-hook=\'loc-ovr\'></div><button data-hook=\'loc-ovr-btn\'></button></div><div class=\'section\' data-hook=\'soundsec\'><div data-hook="tsound-main">Sounds enabled</div><div data-hook="tsound-chat">Chat sound enabled</div><div data-hook="tsound-highlight">Nick highlight sound enabled</div><div data-hook="tsound-crowd">Crowd sound enabled</div></div><div class=\'section\' data-hook=\'inputsec\'></div><div class=\'section\' data-hook=\'videosec\'><div>Viewport Mode:<select data-hook=\'viewmode\'><option>Dynamic</option><option>Restricted 840x410</option><option>Full 1x Zoom</option><option>Full 1.25x Zoom</option><option>Full 1.5x Zoom</option><option>Full 1.75x Zoom</option><option>Full 2x Zoom</option><option>Full 2.25x Zoom</option><option>Full 2.5x Zoom</option></select></div><div>FPS Limit:<select data-hook=\'fps\'><option>None (Recommended)</option><option>30</option></select></div><div>Resolution Scaling:<select data-hook=\'resscale\'><option>100%</option><option>75%</option><option>50%</option><option>25%</option></select></div><div>Player To Follow:<select id="selectPlayerToFollow" >' + playersToFollowList() + '</select></div><div data-hook="tvideo-teamcol">Custom team colors enabled</div><div data-hook="tvideo-showindicators">Show chat indicators</div><div data-hook="tvideo-showavatars">Show player avatars</div></div></div></div>';
  this.g = v.Ga(aa.N);
  var l = v.Ea(this.g);
  // console.log(l, this.g)
  // console.log('e', l.get('videosec'))
  this.nd = l.get('close');
  var t = [
  ];
  f('sound');
  f('video');
  f('misc');
  f('input');
  g(t[aa.$l]);
  e('tsound-main', n.A.pm, function (a) {
    n.Na.im(a ? 1 : 0)
  });
  e('tsound-chat', n.A.Hi);
  e('tsound-highlight', n.A.om);
  e('tsound-crowd', n.A.nm);
  d('viewmode', n.A.Tb, function (a) {
    //console.log(n.A.Tb);
    //console.log(a-1);
    return a - 1
  }, function (a) {
    return a + 1
  });
  d('fps', n.A.Fh, function (a) {
    return a
  }, function (a) {
    return a
  });
  var h = [
    1,
    0.75,
    0.5,
    0.25
  ];
  d('resscale', n.A.Sl, function (a) {
    return h[a]
  }, function (a) {
    for (var b = 0, c = h.length - 1; b < c && !(h[b] <= a);) ++b;
    return b
  });
  e('tvideo-teamcol', n.A.xm);
  e('tvideo-showindicators', n.A.Ak);
  e('tvideo-showavatars', n.A.lm);
  var m = null,
    m = function () {
      var b = n.A.Ne.L();
      c('loc', 'Detected location', n.A.Me.L());
      c('loc-ovr', 'Location override', b);
      var d = l.get('loc-ovr-btn');
      d.disabled = !a;
      null == b ? (d.textContent = 'Override location', d.onclick = function () {
        A.i(k.Ep)
      }) : (d.textContent = 'Remove override', d.onclick = function () {
        n.A.Ne.Xa(null);
        m()
      })
    };
  m();
  var p = n.A.tg.L(),
    q = l.get('presskey'),
    r,
    u = l.get('inputsec');
  r = function () {
    v.Cf(u);
    var a = b('Up');
    u.appendChild(a);
    a = b('Down');
    u.appendChild(a);
    a = b('Left');
    u.appendChild(a);
    a = b('Right');
    u.appendChild(a);
    a = b('Kick');
    u.appendChild(a)
  };
  r();
  this.nd.onclick = function () {
    leaveSettings();
    // A.i(k.qb)
  }
}
function Ya(a) {
  //console.log(a);
  this.fk = !1;
  this.qm = new za(p.Ia);
  this.Lj = new za(p.xa);
  this.Hl = new za(p.fa);
  var b = this;
  this.g = v.Ga(Ya.N);
  var c = v.Ea(this.g);
  this.jc = c.get('room-name');
  this.tm = c.get('start-btn');
  this.vm = c.get('stop-btn');
  this.gi = c.get('pause-btn');
  this.xn = c.get('auto-btn');
  this.Nk = c.get('lock-btn');
  this.Rl = c.get('reset-all-btn');
  this.Fl = c.get('rec-btn');
  var d = c.get('link-btn'),
    e = c.get('leave-btn'),
    f = c.get('rand-btn');
  this.wf = c.get('time-limit-sel');
  this.qf = c.get('score-limit-sel');
  this.rm = c.get('stadium-name');
  this.sm = c.get('stadium-pick');
  this.sm.onclick = function () {
    A.i(b.Xp)
  };
  this.Th(c.get('red-list'), this.Hl, p.fa, a);
  this.Th(c.get('blue-list'), this.Lj, p.xa, a);
  this.Th(c.get('spec-list'), this.qm, p.Ia, a);
  this.Uk(this.wf, this.Tk(15));
  this.Uk(this.qf, this.Tk(15));
  this.wf.onchange = function () {
    y.i(b.aq, b.wf.selectedIndex)
  };
  this.qf.onchange = function () {
    y.i(b.Tp, b.qf.selectedIndex)
  };
  this.tm.onclick = function () {
    A.i(b.Yp)
  };
  this.vm.onclick = function () {
    A.i(b.Zp)
  };
  this.gi.onclick = function () {
    A.i(b.Mp)
  };
  this.xn.onclick = function () {
    A.i(b.Dp)
  };
  this.Nk.onclick = function () {
    y.i(b.$p, !b.Xh)
  };
  this.Rl.onclick = function () {
    null != b.ee && (b.ee(p.xa), b.ee(p.fa))
  };
  this.Fl.onclick = function () {
    A.i(b.Qp)
  };
  d.onclick = function () {
    A.i(b.Wp)
  };
  e.onclick = function () {
    A.i(b.de)
  };
  f.onclick = function () {
    A.i(b.Pp)
  };
  this.Bj(!1);
  this.Cj(!1)
}
function Za() {
  var a = this;
  this.g = v.Ga(Za.N);
  var b = v.Ea(this.g);
  this.Cb = b.get('input');
  this.af = b.get('ok');
  console.log(this.af);
  b.get('cancel').onclick = function () {
    null != a.Va && a.Va(null)
  };
  this.Cb.maxLength = 30;
  this.Cb.oninput = function () {
    a.C()
  };
  this.Cb.onkeydown = function (b) {
    13 == b.keyCode && a.Dc() && null != a.Va && a.Va(a.Cb.value)
  };
  this.af.onclick = function () {
    console.log("się klika");
    a.Dc() && null != a.Va && a.Va(a.Cb.value)
  };
  this.C()
}
function $a(a) {
  this.Xk = a.get('notice');
  this.$n = a.get('notice-contents');
  this.nd = a.get('notice-close');
  this.Il()
}
function handleFile(e) {
  var c = this;
  var a = e.target.files;
  newReplay();
  if (!(1 > a.length)) {
    var a = a.item(0),
      b = new FileReader;
    // console.log(a);
    b.onload = function () {
      if (b.result.byteLength < 3000000) sendSocketMessage(b.result, a.name.slice(0, -5), a.lastModified);
      else openModal('This file is too big to be sent to server. But don\'t worry, you can still watch it offline.', 'darkgoldenrod', 7)
      // console.log(b.result);
      if (b.result.byteLength > 50_000) {
        ///////////////////////////////////////
        // console.log(b.result);
        // var replayParts = [], newBuffer, replayData = [];
        // var x = new Uint8Array(b.result);
        // x = Array.from(x)
        // do {
        //   replayParts.push(x.splice(0, 50_000))
        // } while (x.length > 50_000)
        // replayParts.push(x);
        // console.log(replayParts)
        // for (let part of replayParts) {
        //   const buffer = new ArrayBuffer(part.length);
        //   const uint8View = new Uint8Array(buffer);
        //   for (let i = 0; i < part.length; i++) {
        //     uint8View[i] = part[i];
        //   }
        //   newBuffer = uint8View.buffer;
        //   console.log(newBuffer);
        // }
        // for (let part of replayParts) {
        //   var x = new Uint8Array(part);
        //   x = Array.from(part)
        //   replayData = replayData.concat(x)
        // }
        // const buffer = new ArrayBuffer(replayData.length);
        // const uint8View = new Uint8Array(buffer);
        // for (let i = 0; i < replayData.length; i++) {
        //   uint8View[i] = replayData[i];
        // }
        // newBuffer = uint8View.buffer;
        // console.log(newBuffer, b.result);
        // console.log(newBuffer == b.result);
        // console.log(new Uint8Array(newBuffer).every((value, index) => value === new Uint8Array(b.result)[index]));
        /////////////////////////////////////
      }
      // console.log(b.result);
      y.i(parseReplay, b.result)
    };
    b.readAsArrayBuffer(a)
  }
};
function replayFromSite(r) {
  newReplay();
  if(!x.Pg){x.Pg=window.document.createElement('div');window.document.body.appendChild(x.Pg)}
  // console.log(r);
  y.i(parseReplay, r)
}
function parseReplay(a) {
  u.po(a)
}
function Aa(a) {
  function b(a) {
    function b() {
      e.className = f.Ta ? 'icon-ok' : 'icon-cancel'
    }
    a = d.get(a);
    var e = a.querySelector('i'),
      f = {
        Ta: !0
      };
    b();
    a.onclick = function () {
      f.Ta = !f.Ta;
      b();
      c.bn(c.dj)
    };
    return f
  }
  this.dj = [
  ];
  var c = this;
  this.gs = a;
  Aa.tj = '<div style="display: none" class=\'roomlist-view\'><div class=\'notice\' data-hook=\'notice\' hidden><div data-hook=\'notice-contents\'>Testing the notice.</div><div data-hook=\'notice-close\'><i class=\'icon-cancel\'></i></div></div><div class=\'dialog\'><h1>Haxball Replay Analyzer v1.17</h1><p>Contact: <br>Discord: Falafel#3895, you can find me at discord.io/haxracing<br>turbofalafel@gmail.com</p><br><br><div class=\'splitter\'><div style=\'display: none\' class=\'list\'><table class=\'header\'><colgroup><col><col><col><col></colgroup><thead><tr><td>Name</td><td>Players</td><td>Pass</td><td>Distance</td></tr></thead></table><div class=\'separator\'></div><div class=\'content\' data-hook=\'listscroll\'><table><colgroup><col><col><col><col></colgroup><tbody data-hook=\'list\'></tbody></table></div><div class=\'filters\'><span class=\'bool\' data-hook=\'fil-pass\'>Show locked <i></i></span><span class=\'bool\' data-hook=\'fil-full\'>Show full <i></i></span></div></div><div class=\'buttons\'><button style=\'display: none\' data-hook=\'refresh\'><i class=\'icon-cw\'></i><div>Refresh</div></button><button style=\'display: none\' data-hook=\'join\'><i class=\'icon-login\'></i><div>Join Room</div></button><button style=\'display: none\' data-hook=\'create\'><i class=\'icon-plus\'></i><div>Create Room</div></button><div style=\'display: none\' class=\'spacer\'></div><div class=\'file-btn\'><label for=\'replayfile\'>►<div>Load replay</div></label><input id=\'replayfile\' type=\'file\' accept=\'.hbr2\' data-hook=\'replayfile\'/></div><button style=\'display: none\' data-hook=\'settings\'><i class=\'icon-cog\'></i><div>Settings</div></button><button style=\'display: none\' data-hook=\'changenick\'><i class=\'icon-cw\'></i><div>Change Nick</div></button><br><br></div></div></div></div>';
  this.Ja = v.Ga(Aa.tj);
  // console.log(Aa.tj);
  var d = v.Ea(this.Ja),
    e = new $a(d);
  this.pj = d.get('refresh');
  this.Tm = d.get('join');
  a = d.get('create');
  this.cs = d.get('count');
  a.onclick = function () {
    A.i(c.ws)
  };
  d.get('changenick').onclick = function () {
    A.i(c.vs)
  };
  d.get('settings').onclick = function () {
    A.i(c.ys);
    //console.log(c.ys);
  };
  var f = d.get('replayfile');

  this.fs = b('fil-full');
  this.zs = b('fil-pass');
  this.ns = d.get('listscroll');
  this.Bs = Ba.cg(this.ns);
  this.gj = d.get('list');
  this.pj.onclick = function () {
    e.Il();
    c.Om()
  };
  this.Tm.onclick = function () {
    null != c.Od && y.i(c.Ym, c.Od.Fs)
  };
  this.Om();
}

function ab(a) {
  this.Ja = v.Ga(ab.tj, 'tbody');
  var b = v.Ea(this.Ja),
    c = b.get('name'),
    d = b.get('rs'),
    e = b.get('distance'),
    f = b.get('pass'),
    b = b.get('flag');
  //console.log(b.get('players'));
  this.Fs = a;
  var g = a.vd;
  c.textContent = g.w;
  d.textContent = '' + g.I + '/' + g.Xe;
  f.textContent = g.Ib ? 'Yes' : 'No';
  e.textContent = '' + (a.Le | 0) + 'km';
  try {
    b.classList.add('f-' + g.ub.toLowerCase())
  } catch (k) {
  }
  9 > a.vd.Id && this.Ja.classList.add('old')
}
function bb() {
  this.gk = null;
  var a = this;
  this.g = v.Ga(bb.N);
  var b = v.Ea(this.g);
  this.Zf = b.get('link');
  var c = b.get('copy'),
    b = b.get('close');
  this.Zf.onfocus = function () {
    a.Zf.select()
  };
  c.onclick = function () {
    a.Zf.select();
    return window.document.execCommand('Copy')
  };
  b.onclick = function () {
    A.i(a.qb)
  }
}
function ha(a) {
  function b() {
    var b = g[f];
    a.pl = e ? b : 0;
    d.get('spd').textContent = b + 'x'
  }
  this.Wf = !1;
  var c = this;
  this.g = v.Ga(ha.N);
  var d = v.Ea(this.g);
  this.ti = a;
  d.get('reset').onclick = function () {
    a.ui();
    c.el()
  };
  var e = !0,
    f = 8,
    g = [
      0.1,
      0.5,
      1,
      2,
      3,
      5,
      20,
      50,
      10000
    ];
  b();
  var k = d.get('playicon');
  //k.classList.add('icon-pause');
  d.get('play').onclick = function () {
    e = !e;
    /*
      var a = k.classList;
      a.toggle('icon-play', !e);
      a.toggle('icon-pause', e);
    */
    e ? k.innerHTML = '⏸' : k.innerHTML = '⏵';
    b()
  };
  d.get('spdup').onclick = function () {
    f += 1;
    var a = g.length - 1;
    f > a && (f = a);
    b()
  };
  d.get('spddn').onclick = function () {
    --f;
    0 > f && (f = 0);
    //console.log("juz odtwarza chyba");
    playSounds = true;
    b()
  };
  this.Er = d.get('time');
  var l = d.get('timebar');
  // console.log('wykrywam pasek', l)
  l.id = "pasek";
  this.Aq = d.get('progbar');
  //console.log(a.mf, ha.Wk(a.mf * a.mh));//checkpoint czas nagrania
  //console.log(a.Vk);
  for (var t = d.get('timetooltip'), h = 0, m = a.Vk; h < m.length;) {
    var n = m[h];
    //console.log(m);
    ++h;
    var p = window.document.createElement('div');
    p.className = 'marker';
    p.classList.add('k' + n.kind);
    p.id = "recGoal" + h;
    //console.log(n);
    p.style.left = 100 * n.mj + '%';
    l.appendChild(p);
  };
  //console.log(document.getElementsByClassName("recGoal1")[0]);
  l.onclick = function (b) {
    // console.log(l, b, a.mh, a.mf)
    if (autoClick) {
      var toClick = (autoClickValue) / l.clientWidth * a.mh * a.mf - 5000;
      if (toClick < 0) toClick = 0;
      a.er(toClick);
      c.Wf || (c.Wf = !0, c.Vp(), c.el());
      autoClick = false;
      return;
    }
    a.er((b.pageX - l.offsetLeft) / l.clientWidth * a.mh * a.mf);
    c.Wf || (c.Wf = !0, c.Vp(), c.el())
  };
  l.onmousemove = function (b) {
    b = (b.pageX - l.offsetLeft) / l.clientWidth;
    t.textContent = ha.Wk(a.mf * a.mh * b);
    //console.log(a.mf, a.mh,b);
    return t.style.left = 'calc(' + 100 * b + '% - 30px)'
  };
  this.fp = d.get('leave');
  this.fp.onclick = function () {
    // A.i(c.de);
    resetReplay = function () {
      A.i(c.de);
    }
    leaveReplayer();
  }
}
function Q(a) {
  var b = this,
    c = new P('Only humans', '', [
    ]);
  this.g = c.g;
  c.Vd.style.minHeight = '78px';
  Ja.gp().then(function (d) {
    null == Q.xg && (Q.xg = window.document.createElement('div'), c.Vd.appendChild(Q.xg), Q.Dq = d.render(Q.xg, {
      sitekey: a,
      callback: function (a) {
        y.i(Q.Gl, a)
      },
      theme: 'dark'
    }));
    //console.log(a);
    d.reset(Q.Dq);
    Q.Gl = function (a) {
      window.setTimeout(function () {
        y.i(b.Va, a)
      }, 1000);
      Q.Gl = null
    };
    c.Vd.appendChild(Q.xg)
  })
}
function za(a) {
  this.xd = new Map;
  var b = this;
  this.g = v.Ga(za.N);
  this.g.className += ' ' + a.io;
  var c = v.Ea(this.g);
  this.ab = c.get('list');
  this.Vh = c.get('join-btn');
  this.vi = c.get('reset-btn');
  a == p.Ia && this.vi.remove();
  this.Vh.textContent = '' + a.w;
  this.g.ondragover = this.g.Qs = function (a) {
    - 1 != a.dataTransfer.types.indexOf('player') && a.preventDefault()
  };
  this.g.ondrop = function (c) {
    c.preventDefault();
    c = c.dataTransfer.getData('player');
    null != c && (c = K.parseInt(c), null != c && ia.i(b.mg, c, a))
  };
  this.Vh.onclick = function () {
    y.i(b.Kp, a)
  };
  this.vi.onclick = function () {
    y.i(b.ee, a)
  }
}
function cb(a) {
  var b = this;
  this.w = a.w;
  this.yb = a.yb;
  this.$ = a.V;
  this.g = v.Ga(cb.N);
  var c = v.Ea(this.g);
  this.Ze = c.get('name');
  this.rg = c.get('ping');
  try {
    c.get('flag').classList.add('f-' + a.Kd)
  } catch (d) {
  }
  this.Ze.textContent = this.w;
  this.rg.textContent = '' + this.yb;
  this.g.ondragstart = function (a) {
    a.dataTransfer.setData('player', K.ye(b.$))
  };
  this.g.oncontextmenu = function (a) {
    a.preventDefault();
    y.i(b.ff, b.$)
  };
  this.em(a.cb)
}
function db(a, b) {
  var c = this;
  this.g = v.Ga(db.N);
  var d = v.Ea(this.g);
  this.Ze = d.get('name');
  this.Hf = d.get('admin');
  this.Qe = d.get('kick');
  this.nd = d.get('close');
  this.Hf.onclick = function () {
    ia.i(c.Cp, c.Nb, !c.ql)
  };
  this.Qe.onclick = function () {
    y.i(c.ei, c.Nb)
  };
  this.nd.onclick = function () {
    A.i(c.qb)
  };
  this.Nb = a.V;
  this.Ej(a.w);
  this.Dj(a.cb);
  this.Hf.disabled = !b || 0 == this.Nb;
  this.Qe.disabled = !b || 0 == this.Nb
}
function Qb() {
  this.Ah = 0;
  this.vp = 400;
  this.yk = 64;
  this.Vi = 32;
  this.sa = window.document.createElement('canvas');
  this.Qf = window.document.createElement('canvas');
  this.g = window.document.createElement('div');
  this.Qf.width = this.sa.width = this.Vi;
  this.Qf.height = this.sa.height = this.yk;
  this.Eh = this.Qf.getContext('2d', null);
  this.c = this.sa.getContext('2d', null);
  this.c.fillStyle = 'green';
  for (var a = [
  ], b = 0, c = this.Vi; b < c;) ++b,
    a.push(0);
  this.fq = a;
  this.g.appendChild(this.Qf);
  this.g.className = 'graph'
}
function eb() {
  this.jb = null;
  var a = this;
  this.g = v.Ga(eb.N);
  var b = v.Ea(this.g);
  b.get('cancel').onclick = function () {
    A.i(a.ci)
  };
  this.hi = b.get('pick');
  this.bk = b.get('delete');
  this.rk = b.get('export');
  var c = b.get('list'),
    d = b.get('file');
  this.Lg();
  this.hi.onclick = function () {
    null !=
      a.jb && a.jb.Pd().then(function (b) {
        y.i(a.og, b)
      })
  };
  this.bk.onclick = function () {
    if (null != a.jb) {
      var b = a.jb.Lm;
      null != b && (a.jb.Ja.remove(), a.jb = null, b(), a.Lg())
    }
  };
  this.rk.onclick = function () {
    null != a.jb && a.jb.Pd().then(function (a) {
      Ca.br(a.se(), a.w + '.hbs')
    })
  };
  this.ki(c);
  this.vg = Ba.cg(c);
  window.setTimeout(function () {
    a.vg.update()
  }, 0);
  d.onchange = function () {
    var b = d.files;
    if (!(1 > b.length)) {
      var b = b.item(0),
        c = new FileReader;
      c.onload = function () {
        try {
          var b = new h;
          b.Lk(c.result);
          y.i(a.og, b)
        } catch (k) {
          b = k instanceof q ? k.Ta :
            k,
            b instanceof SyntaxError ? y.i(a.fi, 'SyntaxError in line: ' + K.ye(b.lineNumber)) : b instanceof Bb ? y.i(a.fi, b.xp) : y.i(a.fi, 'Error loading stadium file.')
        }
      };
      c.readAsText(b)
    }
  }
}
function fb() {
  var a = this;
  this.g = v.Ga(fb.N);
  var b = v.Ea(this.g);
  b.get('cancel').onclick = function () {
    y.i(a.qb, !1)
  };
  b.get('leave').onclick = function () {
    y.i(a.qb, !0)
  }
}
function gb(a) {
  var b = this;
  this.g = v.Ga(gb.N);
  var c = v.Ea(this.g);
  this.Ze = c.get('title');
  this.oi = c.get('reason');
  //this.yn = c.get('ban-btn');
  this.An = c.get('ban-text');
  this.Qe = c.get('kick');
  this.nd = c.get('close');
  this.yn.onclick = function () {
    b.Aj(!b.Jj)
  };
  this.nd.onclick = function () {
    A.i(b.qb)
  };
  this.Qe.onclick = function () {
    Cb.i(b.ei, b.Nb, b.oi.value, b.Jj)
  };
  this.oi.onkeydown = function (a) {
    return a.stopPropagation()
  };
  this.oi.maxLength = 100;
  this.Nb = a.V;
  this.Ze.textContent = 'Kick ' + a.w;
  this.Aj(!1)
}
function gxd(a) {
  var b = this;
  this.g = v.Ga(gxd.N);
  var c = v.Ea(this.g);
  this.Ze = c.get('title');
  //this.oi = c.get('reason');
  this.yn = c.get('ban-btn');
  this.An = c.get('ban-text');
  this.Qe = c.get('kick');
  this.nd = c.get('close');
  /*this.yn.onclick = function () {
    b.Aj(!b.Jj)
  };*/
  this.nd.onclick = function () {
    A.i(b.qb)
  };
  this.Qe.onclick = function () {
    Cb.i(b.ei, b.Nb, b.oi.value, b.Jj)
  };
  /*this.oi.onkeydown = function (a) {
    return a.stopPropagation()
  };*/
  //this.oi.maxLength = 100;
  this.Nb = a.V;
  this.Ze.textContent = 'Match stats:';
  this.Ze.id = "tytul";
  this.Aj(!1)
}
function exd(a, b, c) {
  var d = this;
  this.g = v.Ga(exd.N);
  var e = v.Ea(this.g);
  e.get('ok');
  e.get('cancel');
  this.Vd = e.get('content');
  for (var f = e.get('title'), e = e.get('buttons'), g = 0, k = 0; k < c.length;) {
    var l = c[k++],
      t = window.document.createElement('button');
    t.textContent = l;
    t.onclick = function (a) {
      return function () {
        y.i(d.Va, a[0])
      }
    }([g++]);
    e.appendChild(t)
  }
  this.Vd.textContent = b;
  f.textContent = a
}
function ja(a) {
  //console.log(a);
  this.Fb = new hb;
  this.Gd = !1;
  this.pe = new Xa;
  this.Qa = new Da;
  var b = this;
  this.Wa = new Ya(a);
  this.Fb.Nb = a;
  this.g = v.Ga(ja.N);
  a = v.Ea(this.g);
  this.Jh = a.get('gameplay-section');
  this.hf = a.get('popups');
  this.hf.style.display = 'none';
  v.xe(a.get('chatbox'), this.Qa.g);
  v.xe(a.get('stats'), this.pe.g);
  this.bi = a.get('menu');
  this.bi.onclick = function () {
    b.me(!b.Gd);
    b.bi.blur()
  };
  a.get('settings').onclick = function () {
    var a = new aa;
    a.qb = function () {
      b.bb(null)
    };
    //console.log(a.g);
    b.bb(a.g);
    bringSettings();
  };
  a.get('staty').onclick = function (el) {

    if (match.length > 0) showStats(el.target);
    else openModal('Error: this replay doesn\'t contain any started match.', 'darkred', 4)

  };
  this.Jh.appendChild(this.Fb.g);
  this.Wa.de = function () {
    var a = new fb;
    a.qb = function (a) {
      b.bb(null);
      a && A.i(b.de)
    };
    b.bb(a.g)
  };
  this.Wa.Xp = function () {
    var a = new eb;
    a.ci = function () {
      b.bb(null)
    };
    a.og = function (a) {
      y.i(b.og, a);
      b.bb(null)
    };
    a.fi = function (a) {
      a = new P('Error loading stadium', a, [
        'Ok'
      ]);
      a.Va = function () {
        b.bb(null)
      };
      b.bb(a.g)
    };
    b.bb(a.g)
  }
}
function Rb() {
  this.Da = 0;
  this.hk = this.ik = !1;
  this.Ke = 0;
  this.g = window.document.createElement('div');
  this.g.className = 'game-timer-view';
  this.g.appendChild(this.bq = this.Wd('OVERTIME!', 'overtime'));
  this.g.appendChild(this.zp = this.Wd('0', 'digit'));
  this.g.appendChild(this.yp = this.Wd('0', 'digit'));
  this.g.appendChild(this.Wd(':', null));
  this.g.appendChild(this.dr = this.Wd('0', 'digit'));
  this.g.appendChild(this.cr = this.Wd('0', 'digit'));
  this.g.appendChild(this.Wd('.', null));
  this.g.appendChild(this.dziesiate = this.Wd('0', 'digit'));
  this.g.appendChild(this.setne = this.Wd('0', 'digit'));
  this.g.appendChild(this.tysieczne = this.Wd('0', 'digit'))
}
function hb() {
  this.Nb = - 1;
  this.Eb = new N;
  this.xc = new Rb;
  this.g = v.Ga(hb.N);
  var a = v.Ea(this.g);
  this.Pb = new Db(a.get('red-score'), 0);
  this.Kb = new Db(a.get('blue-score'), 0);
  v.xe(a.get('timer'), this.xc.g);
  v.xe(a.get('canvas'), this.Eb.sa)
}
function Ka(a, b) {
  var c = this;
  this.g = v.Ga(Ka.N);
  var d = v.Ea(this.g);
  this.Bp = d.get('ok');
  this.Bp.onclick = function () {
    A.i(c.Va)
  };
  this.Nl = d.get('replay');
  var e = null != b;
  this.Nl.hidden = !e;
  e && (this.Nl.onclick = function () {
    ba.Yl(b)
  });
  d.get('reason').textContent = a
}
function ib(a) {
  var b = this;
  this.g = v.Ga(ib.N);
  var c = v.Ea(this.g);
  this.vh = c.get('cancel');
  this.Wj = c.get('create');
  this.$e = c.get('name');
  this.kl = c.get('pass');
  this.ai = c.get('max-pl');
  this.Em = c.get('unlisted');
  this.$e.maxLength = 40;
  this.$e.value = a;
  this.$e.oninput = function () {
    b.C()
  };
  this.kl.maxLength = 30;
  this.Em.onclick = function () {
    b.Fj(!b.Fm)
  };
  this.vh.onclick = function () {
    A.i(b.ci)
  };
  this.Wj.onclick = function () {
    if (b.Dc()) {
      var a = b.kl.value;
      '' == a && (a = null);
      y.i(b.Jp, {
        name: b.$e.value,
        password: a,
        qs: b.ai.selectedIndex + 2,
        Ks: b.Fm
      })
    }
  };
  for (a = 2; 21 > a;) c = window.document.createElement('option'),
    c.textContent = '' + a++,
    this.ai.appendChild(c);
  this.ai.selectedIndex = 10;
  this.Fj(!1);
  this.C()
}
function jb() {
  this.g = v.Ga(jb.N);
  var a = v.Ea(this.g);
  this.dc = a.get('log');
  this.vh = a.get('cancel')
}
function kb(a) {
  a = "DefaultName";
  function b() {
    c.Dc() && null != c.cl && c.cl(c.Cb.value);
  }
  var c = this;
}
function lb(a, b) {
  this.Hj = [
  ];
  this.Iq = /[#@][^\s@#]*$/;
  this.Mb = a;
  this.Rp = b;
  a.hidden = !0
}
function Da() {
  function a() {
    null != b.fl && '' != b.gb.value && b.fl(b.gb.value);
    b.gb.value = '';
    b.gb.blur()
  }
  var b = this;
  this.g = v.Ga(Da.N);
  var c = v.Ea(this.g);
  this.dc = c.get('log');
  this.vg = Ba.cg(this.dc);
  this.gb = c.get('input');
  this.gb.maxLength = 140;
  c.get('send').onclick = a;
  this.Bc = new lb(c.get('autocompletebox'), function (a, c) {
    b.gb.value = a;
    b.gb.setSelectionRange(c, c)
  });
  this.gb.onkeydown = function (c) {
    switch (c.keyCode) {
      case 9:
        b.Bc.Mb.hidden || (b.Bc.qo(), c.preventDefault());
        break;
      case 13:
        a();
        break;
      case 27:
        b.Bc.Mb.hidden ? (b.gb.value = '', b.gb.blur()) : b.Bc.Qh();
        break;
      case 38:
        b.Bc.Qj(- 1);
        break;
      case 40:
        b.Bc.Qj(1)
    }
    c.stopPropagation()
  };
  this.gb.onfocus = function () {
    null != b.ig && b.ig(!0)
  };
  this.gb.onblur = function () {
    null != b.ig && b.ig(!1);
    b.Bc.Qh()
  };
  this.gb.oninput = function () {
    b.Bc.Hn(b.gb.value, b.gb.selectionStart)
  }
}
function mb() {
  this.rf = null;
  var a = this;
  this.g = v.Ga(mb.N);
  var b = v.Ea(this.g);
  b.get('cancel').onclick = function () {
    A.i(a.qb)
  };
  this.wh = b.get('change');
  this.wh.disabled = !0;
  this.wh.onclick = function () {
    null != a.rf && a.Zl(a.rf.index)
  };
  b = b.get('list');
  this.ki(b);
  var c = Ba.cg(b);
  window.setTimeout(function () {
    c.update()
  }, 0)
}
function Ea() {
  this.Xf = !1;
  this.w = '';
  this.uh = 0;
  this.Jf = '';
  this.kb = new ka;
  var a = window.document.createElement('canvas');
  a.width = 64;
  a.height = 64;
  this.rb = a.getContext('2d', null);
  this.Ij = this.rb.createPattern(this.rb.canvas, 'no-repeat');
  this.fo()
}
function Sb() {
  //console.log("kicker");
  this.xc = 0;
  this.ab = [
  ];
  this.Ar = new R(['Time is',
    'Up!'], 16777215);
  this.Gq = new R(['Red is',
    'Victorious!'], 15035990);
  this.Fq = new R(['Red',
    "Scores!"], 15035990);
  this.Cn = new R(['Blue is',
    'Victorious!'], 625603);
  this.Bn = new R(['Blue',
    'Scores!'], 625603);
  this.eq = new R(['Game',
    'Paused'], 16777215)
}
function R(a, b) {
  for (var c = [
  ], d = 0; d < a.length;) c.push(this.sp(a[d++], b));
  this.We = c
}
function N() {
  this.$c = window.performance.now();
  this.Jg = new Map;
  this.dd = new Map;
  this.zg = 1;
  this.xf = 35;
  this.jf = 0;
  this.kf = 1.5;
  this.Ya = new H(0, 0);
  this.Dk = !1;
  this.td = new Sb;
  this.sa = window.document.createElement('canvas');
  this.sa.mozOpaque = !0;
  this.c = this.sa.getContext('2d', {
    alpha: !1
  });
  getCanvas(this.sa);
  this.Lo = this.c.createPattern(n.Ko, null);
  this.Wn = this.c.createPattern(n.Vn, null);
  this.Un = this.c.createPattern(n.Tn, null)
}
function B() {
  this.ud = 0;
  this.v = 32;
  this.h = 63;
  this.m = 1;
  this.a = new H(0, 0)
}
function E() {
  this.Hg = this.Ig = this.wa = null;
  this.Yj = 0;
  this.ca = this.W = this.Xd = null;
  this.Cc = 0;
  this.m = 1;
  this.h = 63;
  this.v = 32;
  this.vb = 1 / 0;
  this.Za = !0;
  this.R = 0
}
function L() {
  this.v = 32;
  this.h = 63;
  this.m = 1;
  this.Ua = 0;
  this.wa = new H(0, 0)
}
function Fa() {
  this.hc = - 1;
  this.gc = null;
  this.F = [
  ]
}
function nb() {
  this.R = 0;
  this.ne = 1 / 0;
  this.Hb = this.ec = 100;
  this.Yd = this.Zd = 0
}
function ca() {
  this.hc = - 1;
  this.gc = null;
  this.jl = 0;
  this.h = this.v = 63;
  this.Mj = 0;
  this.R = 16777215;
  this.Ca = 0.99;
  this.aa = 1;
  this.m = 0.5;
  this.Z = 10;
  this.oa = new H(0, 0);
  this.D = new H(0, 0);
  this.a = new H(0, 0)
}
function la() {
  this.da = 0
}
function La() {
  this.da = 0
}
function Ma() {
  this.da = 0
}
function ma() {
  this.da = 0
}
function ob() {
  this.da = 0
}
function pb() {
  this.da = 0
}
function Y() {
  this.Qg = !1;
  this.da = 0
}
function kc() {
}
function na() {
  this.da = 0
}
function Ga() {
  this.da = 0
}
function Na() {
  this.da = 0
}
function Oa() {
  this.da = 0
}
function qb() {
  this.da = 0
}
function oa() {
  this.da = 0
}
function pa() {
  this.da = 0
}
function Pa() {
  this.da = 0
}
function qa() {
  this.da = 0
}
function S() {
  this.da = 0
}
function ra() {
  this.da = 0
}
function sa() {
  this.da = 0
}
function da() {
  this.da = 0
}
function Qa() {
  this.da = 0
}
function rb() {
  this.da = 0
}
function ta() {
  this.da = 0
}
function ea() {
  this.zc = - 1;
  this.an = null;
  this.ea = p.Ia;
  this.H = null;
  this.yc = this.Sc = 0;
  this.Wb = !1;
  this.ob = this.V = 0;
  this.w = 'Player';
  this.Ug = this.yb = 0;
  this.Kd = null;
  this.Ld = !1;
  this.Xb = this.Jd = null;
  this.Jb = 0;
  this.cb = !1
}
function fa() {
  this.hc = - 1;
  this.S = this.gc = null;
  this.yd = 2;
  this.Zc = 0;
  this.ce = 1;
  this.ib = this.Da = 3;
  this.Pc = !1;
  this.K = null;
  this.I = [
  ];
  this.jc = '';
  this.S = h.Kh()[0];
  this.kb = [
    null,
    new ka,
    new ka
  ];
  this.kb[1].fb.push(p.fa.R);
  this.kb[2].fb.push(p.xa.R)
}
function p(a, b, c, d, e, f, g, k) {
  this.pg = null;
  this.$ = a;
  this.R = b;
  this.Ch = c;
  this.cp = d;
  this.w = e;
  this.io = f;
  this.v = k;
  this.wm = new ka;
  this.wm.fb.push(b)
}
function ka() {
  this.ed = 16777215;
  this.fb = [
  ]
}
function h() {
  this.J = [
  ];
  this.U = [
  ];
  this.qa = [
  ];
  this.tc = [
  ];
  this.F = [
  ];
  this.pb = [
  ];
  this.Dd = [
  ];
  this.md = [
  ];
  this.ge = new Eb;
  this.Bh = 255;
  this.Ge = this.Ye = 0;
  this.Lf = !0;
  this.pf = !1
}
function Bb(a) {
  this.xp = a
}
function Eb() {
  this.Se = 0;
  this.Z = 15;
  this.v = 0;
  this.oa = new H(0, 0);
  this.aa = this.m = 0.5;
  this.Ca = 0.96;
  this.Ce = 0.1;
  this.Te = 0.07;
  this.Ue = 0.96;
  this.Re = 5
}
function sb() {
  this.qe = p.Ia;
  this.ca = new H(0, 0);
  this.W = new H(0, 0)
}
function O() {
  this.hc = - 1;
  this.gc = null;
  this.Pb = this.Kb = this.Hc = this.Oa = 0;
  this.ae = p.fa;
  this.vc = this.Bb = 0;
  this.ta = new Fa;
  this.Da = 0;
  this.ib = 5;
  this.S = null
}
function ua() {
  this.h = this.v = 63;
  this.R = 16777215;
  this.Ca = 0.99;
  this.aa = 1;
  this.m = 0.5;
  this.Z = 10;
  this.oa = new H(0, 0);
  this.D = new H(0, 0);
  this.a = new H(0, 0)
}
function Tb(a, b) {
  this.gh = null;
  this.Js = 0.025;
  this.ve = this.dh = this.Ef = 0;
  this.Tg = b.createGain();
  this.Tg.gain.value = 0;
  var c = b.createBufferSource();
  c.buffer = a;
  c.connect(this.Tg);
  c.loop = !0;
  c.start()
}
function Ub(a) {
  function b(b) {
    return new Promise(function (d, f) {
      var e = a.file(b).asArrayBuffer();
      return c.c.decodeAudioData(e, d, f)
    })
  }
  var c = this;
  this.c = new AudioContext;
  this.ag = this.c.createGain();
  this.im(n.A.pm.L() ? 1 : 0);
  this.ag.connect(this.c.destination);
  this.ro = Promise.all([b('sounds/chat.ogg').then(function (a) {
    //onsole.log(playSounds);
    //if (playSounds==false) return false;
    return c.Rj = a
  }),
  b('sounds/highlight.wav').then(function (a) {
    return c.zk = a
  }),
  b('sounds/kick.ogg').then(function (a) {
    return c.bp = a
  }),
  b('sounds/goal.ogg').then(function (a) {
    return c.Io = a
  }),
  b('sounds/join.ogg').then(function (a) {
    return c.$o = a
  }),
  b('sounds/leave.ogg').then(function (a) {
    return c.ep = a
  }),
  b('sounds/crowd.ogg').then(function (a) {
    c.ho = a;
    c.Xj = new Tb(c.ho, c.c);
    c.Xj.connect(c.ag)
  })])
}
function Z() {
}
function va() {
}
function Fb() {
}
function Vb(a) {
  this.$c = window.performance.now();
  this.sd = this.De = 0;
  var b = this;
  this.ya = a;
  this.j = new ja(a.uc);
  var c = new Gb(this.j);
  c.ri(a.T);
  window.document.addEventListener('keydown', G(this, this.Bd));
  window.document.addEventListener('keyup', G(this, this.Cd));
  window.requestAnimationFrame(G(this, this.bf));
  this.Gh = window.setInterval(function () {
    b.j.pe.hm(b.sd);
    b.sd = 0
  }, 1000);
  this.uf(n.A.Tb.L());
  this.j.g.classList.add('replayer');
  this.je = new ha(a);
  this.je.Vp = function () {
    c.Lr(a.T)
  };
  this.je.Up = function () {
    b.j.me(null == a.T.K);
    c.ri(a.T)
  };
  this.je.el = function () {
    b.j.Fb.Eb.Xq()
  };
  this.j.g.appendChild(this.je.g)
}
function x() {
}
function u() {
}
function Wb() {
}
function n() {
}
function W() {
  this.Yc = new Map
}
function wa(a, b, c, d) {
  this.w = a;
  this.Ur = d;
  this.Yh = b;
  d = null;
  null != b && (d = b.getItem(a));
  this.Hm = c(d)
}
function Xb() {
}
function Yb() {
  function a(a) {
    return new wa(a, e, function (a) {
      if (null == a) return null;
      try {
        return T.Hh(a)
      } catch (k) {
        return null
      }
    }, function (a) {
      if (null == a) return null;
      try {
        return a.se()
      } catch (k) {
        return null
      }
    })
  }
  function b(a) {
    return new wa(a, e, function (a) {
      return null != a ? '0' != a : !0
    }, function (a) {
      return a ? '1' : '0'
    })
  }
  function c(a, b) {
    return new wa(a, e, function (a) {
      var c = b;
      try {
        null != a && (c = K.parseInt(a))
      } catch (t) {
      }
      return c
    }, function (a) {
      return '' + a
    })
  }
  function d(a, b, c) {
    return new wa(a, e, function (a) {
      return null == a ? b : U.Qc(a, c)
    }, function (a) {
      return a
    })
  }
  var e = Xb.Pm();
  this.fe = d('player_name', '', 25);
  this.Tb = c('view_mode', - 1);
  this.Fh = c('fps_limit', 0);
  this.sh = d('avatar', null, 2);
  d('rctoken', null, 1024);
  this.xm = b('team_colors');
  this.Ak = b('show_indicators');
  this.pm = b('sound_main');
  this.Hi = b('sound_chat');
  this.om = b('sound_highlight');
  this.nm = b('sound_crowd');
  this.Gj = d('player_auth_key', null, 1024);
  this.rd = c('extrapolation', 0);
  this.Sl = function (a, b) {
    return new wa(a, e, function (a) {
      var c = b;
      try {
        null != a && (c = parseFloat(a))
      } catch (t) {
      }
      return c
    }, function (a) {
      return '' + a
    })
  }('resolution_scale', 1);
  this.lm = b('show_avatars');
  this.Me = a('geo');
  this.Ne = a('geo_override');
  this.tg = function () {
    return new wa('player_keys', e, function (a) {
      if (null == a) return W.$j();
      try {
        return W.Hh(a)
      } catch (g) {
        return W.$j()
      }
    }, function (a) {
      try {
        return a.se()
      } catch (g) {
        return null
      }
    })
  }()
}
function T() {
  this.ub = '';
  this.Ec = this.Gc = 0
}
function Ra() {
  this.$d = this.Yf = 0;
  window.document.addEventListener('focusout', G(this, this.al))
}
function Gb(a, b) {
  this.Rh = null;
  this.j = a;
  null != b && (this.Rh = '@' + J.replace(b, ' ', '_'))
}
function ba(a) {
  this.Nf = null;
  this.Ik = this.zh = !1;
  this.$c = window.performance.now();
  this.Ed = null;
  this.De = 0;
  this.Jn = new tb(3, 1000);
  this.ob = new Ra;
  this.Bg = 'Waiting for link';
  this.xi = this.am = !1;
  this.sd = 0;
  var b = this;
  this.Of = new ub(a, function (a) {
    b.j.Qa.Gb(a)
  });
  this.ya = a;
  a.T.ko = function (c) {
    b.am != c && (b.am = c, c = ta.la(c), a.ra(c))
  };
  this.j = new ja(a.uc);
  this.Ih = new Gb(this.j, a.T.na(a.uc).w);
  this.Ih.ri(a.T);
  this.j.Qa.fl = G(this, this.Gp);
  this.j.Qa.ig = G(this, this.Fp);
  window.document.addEventListener('keydown', G(this, this.Bd));
  window.document.addEventListener('keyup', G(this, this.Cd));
  window.onbeforeunload = function () {
    return 'Are you sure you want to leave the room?'
  };
  this.ob.ng = function (b) {
    a.ra(b)
  };
  this.j.Wa.aq = function (b) {
    b = da.la(1, b);
    a.ra(b)
  };
  this.j.Wa.Tp = function (b) {
    b = da.la(0, b);
    a.ra(b)
  };
  this.j.og = function (b) {
    b = qa.la(b);
    a.ra(b)
  };
  this.j.Wa.Yp = function () {
    a.ra(new Ma)
  };
  this.j.Wa.Zp = function () {
    a.ra(new La)
  };
  this.j.Wa.Mp = function () {
    b.Bm()
  };
  this.j.Wa.mg = function (b, c) {
    var d = S.la(b, c);
    a.ra(d)
  };
  this.j.Wa.ee = G(this, this.Wq);
  this.j.Wa.Dp = function () {
    a.ra(new Qa)
  };
  this.j.Wa.Pp = function () {
    ba.Bq(a)
  };
  this.j.Wa.$p = function (b) {
    b = pa.la(b);
    a.ra(b)
  };
  this.j.Wa.ff = function (c) {
    var d = a.T.na(c);
    if (null != d) {
      var e = new db(d, b.xi);
      e.qb = function () {
        b.j.bb(null)
      };
      e.Cp = function (b, c) {
        var d = sa.la(b, c);
        a.ra(d)
      };
      e.ei = function () {
        b.vr(d)
      };
      b.j.bb(e.g, function () {
        e.C(a.T, b.xi)
      })
    }
  };
  this.j.Wa.Wp = function () {
    var a = new bb;
    a.qb = function () {
      b.j.bb(null)
    };
    b.j.bb(a.g, function () {
      a.nr(b.Bg)
    })
  };
  this.j.Wa.Qp = function () {
    if (null == b.Ed) b.zr();
    else {
      var a = b.Ed.stop();
      b.Ed = null;
      ba.Yl(a)
    }
    b.j.Wa.rr(null != b.Ed)
  };
  window.requestAnimationFrame(G(this, this.bf));
  this.Gh = window.setInterval(function () {
    b.j.pe.hm(b.sd);
    b.sd = 0
  }, 1000);
  this.Qr = window.setInterval(function () {
    a.C()
  }, 50);
  this.uf();
  var c = n.A.rd.L(),
    c = - 200 > c ? - 200 : 200 < c ? 200 : c;
  if (0 != c) {
    var d = n.A.rd.L();
    //console.log("exp",d);
    a.gm(d);
    this.j.Qa.Gb('Extrapolation set to ' + c + ' msec');
  }
}
function Ha() {
}
function ub(a, b) {
  this.ya = a;
  this.ba = b
}
function Hb() {
}
function tb(a, b) {
  this.Nj = a;
  this.Si = b;
  this.oc = a;
  this.Ve = window.performance.now()
}
function vb() {
}
function Cb() {
}
function ia() {
}
function y() {
}
function A() {
}
function M() {
}
function H(a, b) {
  this.x = a;
  this.y = b
}
function Ib(a) {
  this.Yb = a.slice()
}
function Jb(a, b, c) {
  this.Vk = [
  ];
  this.pl = 5;
  this.Fd = - 1;
  this.hg = this.Qb = this.Wh = this.sk = 0;
  V.call(this, b);
  a = new F(new DataView(a.buffer), !1);
  if (1212305970 != a.hb()) throw new q('');
  b = a.hb();
  if (c != b) throw new q(new Kb(b));
  this.mf = a.hb();
  c = pako.inflateRaw(a.sb());
  this.Lc = new F(new DataView(c.buffer, c.byteOffset, c.byteLength));
  this.Cq(this.Lc);
  c = this.Lc.sb();
  this.Lc = new F(new DataView(c.buffer, c.byteOffset, c.byteLength), !1);
  this.ui();
  this.Wh = window.performance.now();
  this.uc = - 1
}
function Kb(a) {
  this.Id = a
}
function Zb() {
}
function $b(a) {
  this.xj = new Map;
  this.Ho = new tb(100, 16);
  this.yg = !1;
  this.yb = 0;
  this.pa = a;
  a = w.ha(8);
  a.s(Math.random());
  this.He = a.Sb()
}
function Lb(a) {
  this.Kj = new Map;
  this.Ib = null;
  this.fg = 32;
  this.Ie = new Map;
  this.ac = [
  ];
  this.wi = 4;
  this.Mn = 600;
  var b = this;
  V.call(this, a.state);
  this.tp = a.ij;
  this.Sr = a.version;
  this.up = 1;
  this.Jk = this.uc = 0;
  this.Li = window.performance.now();
  this.Ic = new Sa(this.tp, a.iceServers, Zb.Km, a.gn);
  this.Ic.Vj = G(this, this.Oo);
  this.Ic.bl = function (a) {
    b.Lp(a)
  };
  this.Ic.kg = function (a) {
    y.i(b.kg, a)
  };
  this.Ic.ef = function (a, d) {
    null != b.ef && b.ef(a, d)
  }
}
function xa(a, b) {
  this.Di = [
  ];
  this.pi = [
  ];
  this.ug = new Ia;
  this.Ap = 1;
  this.pd = this.zm = 0;
  this.Qi = new Mb(50);
  this.sg = new Mb(50);
  this.nn = 1000;
  this.ek = '';
  var c = this;
  V.call(this, b.state);
  this.Uh = b.Ms;
  this.Je = b.ds;
  var d = null,
    d = function (e) {
      c.tf(0);
      var f = w.ha();
      f.Ub(b.version);
      f.Db(b.password);
      c.pc = new wb(b.ij, b.iceServers, a, Zb.Km, f, b.gn);
      c.pc.rh = e;
      c.pc.zd = function (a) {
        c.pc = null;
        c.pa = a;
        a.lg = function (a) {
          a = new F(new DataView(a));
          c.uq(a)
        };
        a.cf = function () {
          3 != c.pd && y.i(c.df, xb.ih('Connection closed'));
          c.ia()
        };
        a = window.setTimeout(function () {
          y.i(c.df, xb.ih('Game state timeout'));
          c.ia()
        }, 10000);
        c.re = a;
        c.tf(2)
      };
      c.pc.gl = function () {
        c.tf(1)
      };
      var g = !1;
      c.pc.Zk = function () {
        return g = !0
      };
      c.pc.bd = function (a) {
        if (!e && 1 == c.pd && g) A.i(c.Sp),
          d(!0);
        else {
          var b = wb.Do(a);
          switch (a.nb) {
            case 0:
              a = xb.jh;
              break;
            case 1:
              a = xb.lh(a.code);
              break;
            case 2:
              a = xb.hh;
              break;
            default:
              a = xb.ih(b)
          }
          y.i(c.df, a);
          c.ia(b)
        }
      }
    };
  d(null != b.cn && b.cn)
}
function V(a) {
  this.Ri = new Ia;
  this.te = this.cc = 0;
  this.le = new Ia;
  this.uc = this.bc = this.rd = 0;
  this.Ac = 0.06;
  this.mh = 16.666666666666668;
  this.Ff = 120;
  yb.call(this, a)
}
function ya() {
}
function Ta() {
}
function ac(a, b) {
  this.Xm = 0;
  this.version = 1;
  this.ah = 0;
  this.Nd = w.ha(1000);
  this.Df = w.ha(16384);
  var c = this;
  this.version = b;
  var d = this.ah = a.Y;
  this.hj = a;
  a.T.ga(this.Df);
  a.fc = function (b) {
    var e = a.Y;
    c.Df.lb(e - d);
    d = e;
    c.Df.Ub(b.P);
    m.lj(b, c.Df)
  };
  this.Nd.Ub(0);
  var e = this.ah;
  a.T.km(function (b) {
    var d = a.Y;
    c.Nd.lb(d - e);
    c.Nd.l(b);
    c.Xm++;
    e = d
  })
}
function bc() {
}
function Mb(a) {
  this.rs = a;
  this.$a = [
  ]
}
function cc() {
}
function Ua() {
  this.da = 0
}
function yb(a) {
  this.Y = 0;
  this.T = a
}
function Ia() {
  this.list = [
  ]
}
function m() {
  this.da = 0
}
function lc() {
}
function zb() {
}
function v() {
}
function Db(a, b) {
  this.Ja = a;
  this.value = b;
  a.textContent = '' + b
}
function Ca() {
}
function mc() {
}
function Ba() {
}
function Ja() {
}
function I() {
}
function w(a, b) {
  null == b && (b = !1);
  this.o = a;
  this.Sa = b;
  this.a = 0
}
function F(a, b) {
  null == b && (b = !1);
  this.o = a;
  this.Sa = b;
  this.a = 0
}
function Nb(a) {
  this.gd = null;
  this.Eq = 10000;
  this.wd = !0;
  var b = this;
  a.Tj();
  this.Ra = a.Ra;
  this.Vc = a.Vc;
  this.oe = a.oe;
  this.gd = a.gd;
  this.ym = window.performance.now();
  var c = null,
    c = function () {
      var a = b.Eq - b.Br();
      0 >= a ? b.ia() : (window.clearTimeout(b.Am), a = window.setTimeout(c, a + 1000), b.Am = a)
    };
  c();
  this.Ra.oniceconnectionstatechange = function () {
    var a = b.Ra.iceConnectionState;
    'closed' != a && 'failed' != a || b.ia()
  };
  a = 0;
  for (var d = this.Vc; a < d.length;) {
    var e = d[a];
    ++a;
    e.onmessage = function (a) {
      b.wd && (b.ym = window.performance.now(), null != b.lg && b.lg(a.data))
    };
    e.onclose = function () {
      b.ia()
    }
  }
}
function nc() {
}
function Sa(a, b, c, d) {
  this.th = new Set;
  this.If = new Set;
  this.Ag = this.nf = this.dm = !1;
  this.Mc = null;
  this.$ = '';
  this.$q = 50000;
  this.Zq = 10000;
  this.od = new Map;
  this.xr = a;
  this.Vf = b;
  this.In = c;
  this.Dg = d;
  null == this.Dg && (this.Dg = '');
  this.Ji()
}
function Va(a, b, c) {
  this.gd = this.re = null;
  this.oe = [
  ];
  this.ak = 0;
  this.hl = !1;
  this.Uf = [
  ];
  this.Vc = [
  ];
  var d = this;
  this.Ra = new RTCPeerConnection({
    iceServers: b
  }, Va.Yn);
  this.Sh = new Promise(function (a) {
    d.Vo = a
  });
  this.Ra.onicecandidate = function (a) {
    null == a.candidate ? d.Vo(d.Uf) : (a = a.candidate, null != a.candidate && '' != a.candidate && (null != d.jg && d.jg(a), d.Uf.push(a)))
  };
  for (b = 0; b < c.length;) this.co(c[b++]);
  this.$ = a
}
function wb(a, b, c, d, e, f) {
  this.rh = this.yh = !1;
  var g = this;
  this.pa = new Va(0, b, d);
  this.pa.bd = function () {
    g.Oe(Ob.jh)
  };
  this.pa.zd = function () {
    null != g.zd && g.zd(new Nb(g.pa));
    g.pa = null;
    g.Uj()
  };
  this.pa.di = function (b) {
    g.jr = b;
    g.X = new WebSocket(a + 'client?id=' + c + (null == f ? '' : '&token=' + f));
    g.X.binaryType = 'arraybuffer';
    g.X.onclose = function (a) {
      g.yh || g.Oe(Ob.lh(a.code))
    };
    g.X.onerror = function () {
      g.yh || g.Oe(Ob.Error)
    };
    g.X.onmessage = G(g, g.Ph);
    g.X.onopen = function () {
      null != g.gl && g.gl();
      g.pa.Mi();
      g.Bi(g.jr, g.pa.Uf, e);
      g.pa.jg = G(g, g.yi);
      g.pa.Sh.then(function () {
        g.Nc(0, null)
      })
    }
  };
  this.pa.eo()
}
function dc() {
  this.hash = 0
}
function U() {
}
function J() {
}
function K() {
}
function ec() {
}
function D() {
}
function fc(a, b) {
  this.r = new RegExp(a, b.split('u').join(''))
}
function ga() {
  return r.Be(this, '')
}
function C(a, b) {
  var c = Object.create(a),
    d;
  for (d in b) c[d] = b[d];
  b.toString !== Object.prototype.toString && (c.toString = b.toString);
  return c
}
function G(a, b) {
  if (null == b) return null;
  null == b.oh && (b.oh = rc++);
  var c;
  null == a.ej ? a.ej = {
  }
    : c = a.ej[b.oh];
  null == c && (c = b.bind(a), a.ej[b.oh] = c);
  return c
}
var Ab = Ab || {
},
  X;
fc.b = !0;
fc.prototype = {
  match: function (a) {
    this.r.global && (this.r.lastIndex = 0);
    this.r.nc = this.r.exec(a);
    this.r.bh = a;
    return null != this.r.nc
  },
  Wm: function (a) {
    if (null != this.r.nc && 0 <= a && a < this.r.nc.length) return this.r.nc[a];
    throw new q('EReg::matched');
  },
  ps: function () {
    if (null == this.r.nc) throw new q('No string matched');
    return {
      mj: this.r.nc.index,
      ms: this.r.nc[0].length
    }
  },
  os: function (a, b, c) {
    null == c && (c = - 1);
    if (this.r.global) {
      this.r.lastIndex = b;
      this.r.nc = this.r.exec(0 >
        c ? a : D.substr(a, 0, b + c));
      if (b = null != this.r.nc) this.r.bh = a;
      return b
    }
    if (c = this.match(0 > c ? D.substr(a, b, null) : D.substr(a, b, c))) this.r.bh = a,
      this.r.nc.index += b;
    return c
  },
  f: fc
};
D.b = !0;
D.bj = function (a, b) {
  var c = a.charCodeAt(b);
  if (c == c) return c
};
D.substr = function (a, b, c) {
  if (null == c) c = a.length;
  else if (0 > c) if (0 == b) c = a.length + c;
  else return '';
  return a.substr(b, c)
};
D.remove = function (a, b) {
  var c = a.indexOf(b);
  if (- 1 == c) return !1;
  a.splice(c, 1);
  return !0
};
Math.b = !0;
ec.b = !0;
ec.Mm = function (a) {
  var b = [
  ];
  if (null != a) {
    var c = Object.prototype.hasOwnProperty,
      d;
    for (d in a) '__id__' != d && 'hx__closures__' != d && c.call(a, d) && b.push(d)
  }
  return b
};
K.b = !0;
K.ye = function (a) {
  return r.Be(a, '')
};
K.parseInt = function (a) {
  a = parseInt(a, !a || '0' != a[0] || 'x' != a[1] && 'X' != a[1] ? 10 : 16);
  return isNaN(a) ? null : a
};
J.b = !0;
J.startsWith = function (a, b) {
  return a.length >= b.length ? D.substr(a, 0, b.length) == b : !1
};
J.ls = function (a, b) {
  var c = D.bj(a, b);
  return 8 < c && 14 > c ? !0 : 32 == c
};
J.Gs = function (a) {
  for (var b = a.length, c = 0; c < b && J.ls(a, b - c - 1);) ++c;
  return 0 < c ? D.substr(a, 0, b - c) : a
};
J.Af = function (a) {
  var b,
    c = '';
  for (b = 2 - a.length; c.length < b;) c += '0';
  return c + (null == a ? 'null' : '' + a)
};
J.replace = function (a, b, c) {
  return a.split(b).join(c)
};
J.Vg = function (a, b) {
  for (var c = ''; c = '0123456789ABCDEF'.charAt(a & 15) + c, a >>>= 4, 0 < a;);
  if (null != b) for (; c.length < b;) c = '0' + c;
  return c
};
U.b = !0;
U.Qc = function (a, b) {
  return a.length <= b ? a : D.substr(a, 0, b)
};
U.Zr = function (a) {
  for (var b = '', c = 0, d = a.byteLength; c < d;) b += J.Vg(a[c++], 2);
  return b
};
dc.b = !0;
dc.prototype = {
  Yr: function (a) {
    for (var b = 0, c = a.length; b < c;) this.hash += a[b++],
      this.hash += this.hash << 10,
      this.hash ^= this.hash >>> 6
  },
  f: dc
};
var Ob = Ab['bas.basnet.FailReason'] = {
  Gf: !0,
  nh: [
    'PeerFailed',
    'Rejected',
    'Cancelled',
    'Error'
  ],
  jh: {
    nb: 0,
    eb: 'bas.basnet.FailReason',
    toString: ga
  },
  lh: (X = function (a) {
    return {
      nb: 1,
      code: a,
      eb: 'bas.basnet.FailReason',
      toString: ga
    }
  }, X.Ae = [
    'code'
  ], X),
  hh: {
    nb: 2,
    eb: 'bas.basnet.FailReason',
    toString: ga
  },
  Error: {
    nb: 3,
    eb: 'bas.basnet.FailReason',
    toString: ga
  }
};
wb.b = !0;
wb.Do = function (a) {
  switch (a.nb) {
    case 0:
      return 'Failed';
    case 1:
      return pc.description(a.code);
    case 2:
      return '';
    case 3:
      return 'Master connection error'
  }
};
wb.prototype = {
  Gn: function () {
    this.Oe(Ob.hh)
  },
  Uj: function () {
    null != this.X && (this.X.onclose = null, this.X.onmessage = null, this.X.onerror = null, this.X.onopen = null, this.X.close(), this.X = null);
    null != this.pa && (this.pa.ia(), this.pa = null)
  },
  Oe: function (a) {
    null != this.bd && this.bd(a);
    this.Uj()
  },
  Ph: function (a) {
    a = new F(new DataView(a.data));
    var b = a.B();
    0 < a.o.byteLength - a.a && (a = new F(new DataView(pako.inflateRaw(a.sb()).buffer), !1));
    switch (b) {
      case 1:
        for (var b = a.ic(), c = a.wg(), d = [
        ], e = 0; e < c.length;) d.push(new RTCIceCandidate(c[e++]));
        this.Oh(b, d, a);
        break;
      case 4:
        this.Nh(new RTCIceCandidate(a.wg()))
    }
  },
  Oh: function (a, b) {
    var c = this;
    this.pa.Mi(this.rh ? 10000 : 4000);
    this.yh = !0;
    null != this.Zk && this.Zk();
    this.pa.Ra.setRemoteDescription(new RTCSessionDescription({
      sdp: a,
      type: 'answer'
    }), function () {
      for (var a = 0; a < b.length;) c.pa.Ra.addIceCandidate(b[a++])
    }, function () {
      c.Oe(Ob.Error)
    })
  },
  Nh: function (a) {
    this.pa.Ra.addIceCandidate(a)
  },
  Nc: function (a, b) {
    if (null != this.X) {
      var c = w.ha(32, !1);
      c.l(a);
      null != b && c.Vb(pako.deflateRaw(b.Sb()));
      this.X.send(c.Hd())
    }
  },
  Bi: function (a, b, c) {
    var d = w.ha(32, !1);
    d.l(this.rh ? 1 : 0);
    d.mc(a.sdp);
    d.Ng(b);
    null != c && d.Vb(c.Sb());
    this.Nc(1, d)
  },
  yi: function (a) {
    var b = w.ha(32, !1);
    b.Ng(a);
    this.Nc(4, b)
  },
  f: wb
};
Va.b = !0;
Va.prototype = {
  Mi: function (a) {
    null == a && (a = 10000);
    window.clearTimeout(this.re);
    this.re = window.setTimeout(G(this, this.To), a)
  },
  bo: function (a, b) {
    var c = this;
    this.ck(this.Ra.setRemoteDescription(a).then(function () {
      return c.Ra.createAnswer()
    }), b, 500)
  },
  eo: function () {
    this.ck(this.Ra.createOffer(), [
    ], 1000)
  },
  ck: function (a, b, c) {
    var d = this;
    a.then(function (a) {
      return d.Ra.setLocalDescription(a).then(function () {
        return a
      })
    }).then(function (a) {
      function e() {
        return a
      }
      for (var g = 0; g < b.length;) d.yj(b[g++]);
      return lc.Dr(d.Sh, c).then(e, e)
    }).then(function (a) {
      d.di(a)
    })['catch'](function () {
      d.Tf()
    })
  },
  co: function (a) {
    var b = this,
      c = {
        id: this.Vc.length,
        negotiated: !0,
        ordered: a.kj
      };
    a.reliable || (c.maxRetransmits = 0);
    a = this.Ra.createDataChannel(a.name, c);
    a.binaryType = 'arraybuffer';
    a.onopen = function () {
      for (var a = 0, c = b.Vc; a < c.length;) if ('open' != c[a++].readyState) return;
      null != b.zd && b.zd()
    };
    a.onclose = function () {
      b.Tf()
    };
    a.onmessage = function () {
      b.Tf()
    };
    this.Vc.push(a)
  },
  yj: function (a) {
    var b = this;
    window.setTimeout(function () {
      return b.Ra.addIceCandidate(a)
    }, this.ak)
  },
  To: function () {
    this.Tf()
  },
  Tf: function () {
    null != this.bd && this.bd();
    this.ia()
  },
  ia: function () {
    this.Tj();
    this.Ra.close()
  },
  Tj: function () {
    window.clearTimeout(this.re);
    this.di = this.zd = this.jg = this.bd = null;
    this.Ra.onicecandidate = null;
    this.Ra.ondatachannel = null;
    this.Ra.onsignalingstatechange = null;
    this.Ra.oniceconnectionstatechange = null;
    for (var a = 0, b = this.Vc; a < b.length;) {
      var c = b[a];
      ++a;
      c.onopen = null;
      c.onclose = null;
      c.onmessage = null
    }
  },
  f: Va
};
var gc = Ab['bas.basnet.ConnectionRequestResponse'] = {
  Gf: !0,
  nh: [
    'Accept',
    'Reject'
  ],
  hn: {
    nb: 0,
    eb: 'bas.basnet.ConnectionRequestResponse',
    toString: ga
  },
  kh: (X = function (a) {
    return {
      nb: 1,
      reason: a,
      eb: 'bas.basnet.ConnectionRequestResponse',
      toString: ga
    }
  }, X.Ae = [
    'reason'
  ], X)
};
Sa.b = !0;
Sa.vk = function (a) {
  try {
    var b = nc.gf(a.candidate);
    if ('srflx' == b.Jr) return b.Xo
  } catch (c) {
  }
  return null
};
Sa.prototype = {
  ia: function () {
    window.clearTimeout(this.Ul);
    window.clearTimeout(this.ke);
    this.ke = null;
    window.clearInterval(this.ol);
    this.X.onmessage = null;
    this.X.onerror = null;
    this.X.onclose = null;
    this.X.onopen = null;
    this.X.close();
    this.X = null;
    this.qk()
  },
  Fi: function (a) {
    var b = this;
    if (null != this.Mc || null != a) {
      if (null != this.Mc && null != a && this.Mc.byteLength == a.byteLength) {
        for (var c = new Uint8Array(this.Mc), d = new Uint8Array(a), e = !1, f = 0, g = this.Mc.byteLength; f < g;) {
          var k = f++;
          if (c[k] != d[k]) {
            e = !0;
            break
          }
        }
        if (!e) return
      }
      this.Mc = a.slice(0);
      this.Ag = !0;
      null != this.X && 1 == this.X.readyState && null == this.ke && (this.Ai(), this.ke = window.setTimeout(function () {
        b.ke = null;
        1 == b.X.readyState && b.Ag && b.Ai()
      }, 10000))
    }
  },
  Ei: function (a) {
    function b() {
      null != c.X && 1 == c.X.readyState && c.nf != c.dm && c.cm();
      c.Ql = null
    }
    var c = this;
    this.nf = a;
    null == this.Ql && (b(), this.Ql = window.setTimeout(b, 1000))
  },
  Ji: function (a) {
    function b(a) {
      a = a.sitekey;
      if (null == a) throw new q(null);
      null != d.ef && d.ef(a, function (a) {
        d.Ji(a)
      })
    }
    function c(a) {
      var b = a.url;
      if (null == b) throw new q(null);
      a = a.token;
      if (null == a) throw new q(null);
      d.X = new WebSocket(b +
        '?token=' + a);
      d.X.binaryType = 'arraybuffer';
      d.X.onopen = function () {
        d.So()
      };
      d.X.onclose = function (a) {
        d.Mh(4001 != a.code)
      };
      d.X.onerror = function () {
        d.Mh(!0)
      };
      d.X.onmessage = G(d, d.Ph)
    }
    null == a && (a = '');
    var d = this;
    M.zl(this.xr, 'token=' + this.Dg + '&rcr=' + a, M.vj).then(function (a) {
      switch (a.action) {
        case 'connect':
          c(a);
          break;
        case 'recaptcha':
          b(a)
      }
    })['catch'](function () {
      d.Mh(!0)
    })
  },
  So: function () {
    var a = this;
    null != this.Mc && this.Ai();
    0 != this.nf && this.cm();
    this.ol = window.setInterval(function () {
      a.zi()
    }, 40000)
  },
  Ph: function (a) {
    a = new F(new DataView(a.data), !1);
    switch (a.B()) {
      case 1:
        this.Oh(a);
        break;
      case 4:
        this.Nh(a);
        break;
      case 5:
        this.No(a);
        break;
      case 6:
        this.Qo(a)
    }
  },
  Oh: function (a) {
    var b = a.hb(),
      c = U.Zr(a.sb(a.B())),
      d,
      e,
      f;
    try {
      a = new F(new DataView(pako.inflateRaw(a.sb()).buffer), !1);
      d = 0 != a.B();
      e = a.ic();
      for (var g = a.wg(), k = [
      ], l = 0; l < g.length;) k.push(new RTCIceCandidate(g[l++]));
      f = k
    } catch (t) {
      this.sf(b, 0);
      return
    }
    this.Ro(b, c, e, f, a, d)
  },
  Ro: function (a, b, c, d, e, f) {
    var g = this;
    if (16 <= this.od.size) this.sf(a, 4104);
    else if (this.th.has(b)) this.sf(a, 4102);
    else {
      for (var k = [
      ], l = 0; l < d.length;) {
        var t = Sa.vk(d[l++]);
        if (null != t) {
          if (this.If.has(t)) {
            this.sf(a, 4102);
            return
          }
          k.push(t)
        }
      }
      if (null != this.Vj && (l = new F(e.o), l.a = e.a, e = this.Vj(b, l), 1 == e.nb)) {
        this.sf(a, e.reason);
        return
      }
      var h = new Va(a, this.Vf, this.In);
      f && (h.ak = 2500);
      h.oe = k;
      h.gd = b;
      this.od.set(a, h);
      h.bd = function () {
        g.Nc(0, h, null);
        g.od['delete'](h.$)
      };
      h.zd = function () {
        g.od['delete'](h.$);
        g.Nc(0, h, null);
        null != g.bl && g.bl(new Nb(h))
      };
      h.di = function (a) {
        g.Bi(h, a, h.Uf, null);
        h.Sh.then(function () {
          g.Nc(0, h, null)
        });
        h.jg = function (a) {
          g.yi(h, a)
        }
      };
      h.Mi();
      h.bo(new RTCSessionDescription({
        sdp: c,
        type: 'offer'
      }), d)
    }
  },
  Nh: function (a) {
    var b = a.hb(),
      c;
    try {
      a = new F(new DataView(pako.inflateRaw(a.sb()).buffer), !1),
        c = new RTCIceCandidate(a.wg())
    } catch (d) {
      return
    }
    this.Mo(b, c)
  },
  Mo: function (a, b) {
    var c = this.od.get(a);
    if (null != c) {
      var d = Sa.vk(b);
      if (null != d && (c.oe.push(d), this.If.has(d))) return;
      c.yj(b)
    }
  },
  No: function (a) {
    this.$ = a.ie(a.B());
    null != this.kg && this.kg(this.$)
  },
  Qo: function (a) {
    this.Dg = a.ie(a.o.byteLength - a.a)
  },
  Nc: function (a, b, c) {
    if (!b.hl) {
      0 ==
        a && (b.hl = !0);
      b = b.$;
      var d = w.ha(32, !1);
      d.l(a);
      d.tb(b);
      null != c && d.Vb(pako.deflateRaw(c.Sb()));
      this.X.send(d.Hd())
    }
  },
  sf: function (a, b) {
    var c = w.ha(16, !1);
    c.l(0);
    c.tb(a);
    c.Ub(b);
    this.X.send(c.Hd())
  },
  zi: function () {
    var a = w.ha(1, !1);
    a.l(8);
    this.X.send(a.Hd())
  },
  Ai: function () {
    this.Ag = !1;
    var a = w.ha(256, !1);
    a.l(7);
    null != this.Mc && a.Mg(this.Mc);
    this.X.send(a.Hd())
  },
  cm: function () {
    var a = w.ha(2, !1);
    a.l(9);
    a.l(this.nf ? 1 : 0);
    this.X.send(a.Hd());
    this.dm = this.nf
  },
  Bi: function (a, b, c, d) {
    var e = w.ha(32, !1);
    e.mc(b.sdp);
    e.Ng(c);
    null != d && e.Vb(d.Sb());
    this.Nc(1, a, e)
  },
  yi: function (a, b) {
    var c = w.ha(32, !1);
    c.Ng(b);
    this.Nc(4, a, c)
  },
  qk: function () {
    for (var a = this.od.values(), b = a.next(); !b.done;) {
      var c = b.value,
        b = a.next();
      c.ia()
    }
    this.od.clear()
  },
  Mh: function (a) {
    var b = this;
    this.qk();
    window.clearTimeout(this.ke);
    this.ke = null;
    this.Ag = !1;
    window.clearInterval(this.ol);
    window.clearTimeout(this.Ul);
    a && (this.Ul = window.setTimeout(function () {
      b.Ji()
    }, this.Zq + Math.random() * this.$q | 0))
  },
  zn: function (a) {
    for (var b = 0, c = a.oe; b < c.length;) this.If.add(c[b++]);
    null != a.gd && this.th.add(a.gd);
    return {
      Rs: a.oe,
      Ps: a.gd
    }
  },
  Ud: function () {
    this.If.clear();
    this.th.clear()
  },
  f: Sa
};
nc.b = !0;
nc.gf = function (a) {
  a = a.split(' ');
  if ('typ' != a[6]) throw new q(null);
  return {
    Jr: a[7],
    Xo: a[4]
  }
};
Nb.b = !0;
Nb.prototype = {
  Br: function () {
    return window.performance.now() - this.ym
  },
  Rb: function (a, b) {
    if (this.wd) {
      var c = this.Vc[a];
      if ('open' == c.readyState) {
        var d = b.Kg();
        try {
          c.send(d)
        } catch (e) {
          window.console.log(e instanceof q ? e.Ta : e)
        }
      }
    }
  },
  ia: function () {
    window.clearTimeout(this.Am);
    this.wd && (this.wd = !1, this.Ra.close(), null != this.cf && this.cf())
  },
  f: Nb
};
var pc = {
  b: !0,
  description: function (a) {
    switch (a) {
      case 4001:
        return 'The room was closed.';
      case 4100:
        return 'The room is full.';
      case 4101:
        return 'Wrong password.';
      case 4102:
        return 'You are banned from this room.';
      case 4103:
        return 'Incompatible game version.';
      default:
        return 'Connection closed (' + a + ')'
    }
  }
};
F.b = !0;
F.jo = function (a, b) {
  var c = a.getUint8(b),
    d,
    e,
    f,
    g,
    k,
    l = b;
  if (0 == (c & 128)) ++b;
  else if (192 == (c & 224)) d = a.getUint8(b + 1),
    c = (c & 31) << 6 | d & 63,
    b += 2;
  else if (224 == (c & 240)) d = a.getUint8(b + 1),
    e = a.getUint8(b + 2),
    c = (c & 15) << 12 | (d & 63) << 6 | e & 63,
    b += 3;
  else if (240 == (c & 248)) d = a.getUint8(b + 1),
    e = a.getUint8(b + 2),
    f = a.getUint8(b + 3),
    c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63,
    b += 4;
  else if (248 == (c & 252)) d = a.getUint8(b + 1),
    e = a.getUint8(b + 2),
    f = a.getUint8(b + 3),
    g = a.getUint8(b + 4),
    c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63,
    b += 5;
  else if (252 == (c & 254)) d = a.getUint8(b + 1),
    e = a.getUint8(b + 2),
    f = a.getUint8(b + 3),
    g = a.getUint8(b + 4),
    k = a.getUint8(b + 5),
    c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | k & 63,
    b += 6;
  else throw new q('Cannot decode UTF8 character at offset ' + b + ': charCode (' + c + ') is invalid');
  return {
    'char': c,
    length: b - l
  }
};
F.prototype = {
  sb: function (a) {
    null == a && (a = this.o.byteLength - this.a);
    if (this.a + a > this.o.byteLength) throw new q('Read too much');
    var b = new Uint8Array(this.o.buffer, this.o.byteOffset + this.a, a);
    this.a += a;
    return b
  },
  Cl: function (a) {
    var b = this.sb(a);
    a = new ArrayBuffer(a);
    (new Uint8Array(a)).set(b);
    return a
  },
  lf: function () {
    return this.o.getInt8(this.a++)
  },
  B: function () {
    return this.o.getUint8(this.a++)
  },
  ni: function () {
    var a = this.o.getInt16(this.a, this.Sa);
    this.a += 2;
    return a
  },
  Ob: function () {
    var a = this.o.getUint16(this.a, this.Sa);
    this.a += 2;
    return a
  },
  M: function () {
    var a = this.o.getInt32(this.a, this.Sa);
    this.a += 4;
    return a
  },
  hb: function () {
    var a = this.o.getUint32(this.a, this.Sa);
    this.a += 4;
    return a
  },
  mi: function () {
    var a = this.o.getFloat32(this.a, this.Sa);
    this.a += 4;
    return a
  },
  u: function () {
    var a = this.o.getFloat64(this.a, this.Sa);
    this.a += 8;
    return a
  },
  Ab: function () {
    for (var a = this.a, b = 0, c, d = 0; c = this.o.getUint8(a + b), 5 >
      b && (d |= (c & 127) << 7 * b >>> 0), ++b, 0 != (c & 128););
    //console.log("Wywołanie funkcji Ab", d);
    this.a += b;
    return d | 0
  },
  ie: function (a) {
    var b = this.a,
      c,
      d = '';
    for (a = b + a; b < a;) c = F.jo(this.o, b),
      b += c.length,
      d += String.fromCodePoint(c['char']);
    if (b != a) throw new q('Actual string length differs from the specified: ' + (b - a) + ' bytes');
    this.a = b;
    return d
  },
  zb: function () {
    var a = this.Ab();
    return 0 >= a ? null : this.ie(a - 1)
  },
  ic: function () {
    return this.ie(this.Ab())
  },
  El: function () {
    return this.ie(this.B())
  },
  wg: function () {
    var a = this.ic();
    return JSON.parse(a)
  },
  f: F
};
w.b = !0;
w.ha = function (a, b) {
  null == b && (b = !1);
  null == a && (a = 16);
  return new w(new DataView(new ArrayBuffer(a)), b)
};
w.uo = function (a, b, c) {
  var d = c;
  if (0 > a) throw new q('Cannot encode UTF8 character: charCode (' + a + ') is negative');
  if (128 > a) b.setUint8(c, a & 127),
    ++c;
  else if (2048 > a) b.setUint8(c, a >> 6 & 31 | 192),
    b.setUint8(c + 1, a & 63 | 128),
    c += 2;
  else if (65536 > a) b.setUint8(c, a >> 12 & 15 | 224),
    b.setUint8(c + 1, a >> 6 & 63 | 128),
    b.setUint8(c + 2, a & 63 | 128),
    c += 3;
  else if (2097152 > a) b.setUint8(c, a >> 18 & 7 | 240),
    b.setUint8(c + 1, a >> 12 & 63 | 128),
    b.setUint8(c + 2, a >> 6 & 63 | 128),
    b.setUint8(c + 3, a & 63 | 128),
    c += 4;
  else if (67108864 > a) b.setUint8(c, a >> 24 & 3 | 248),
    b.setUint8(c + 1, a >> 18 & 63 | 128),
    b.setUint8(c + 2, a >> 12 & 63 | 128),
    b.setUint8(c + 3, a >> 6 & 63 | 128),
    b.setUint8(c + 4, a & 63 | 128),
    c += 5;
  else if (- 2147483648 > a) b.setUint8(c, a >> 30 & 1 | 252),
    b.setUint8(c + 1, a >> 24 & 63 | 128),
    b.setUint8(c + 2, a >> 18 & 63 | 128),
    b.setUint8(c + 3, a >> 12 & 63 | 128),
    b.setUint8(c + 4, a >> 6 & 63 | 128),
    b.setUint8(c + 5, a & 63 | 128),
    c += 6;
  else throw new q('Cannot encode UTF8 character: charCode (' + a + ') is too large (>= 0x80000000)');
  return c - d
};
w.En = function (a) {
  if (0 >
    a) throw new q('Cannot calculate length of UTF8 character: charCode (' + a + ') is negative');
  if (128 > a) return 1;
  if (2048 > a) return 2;
  if (65536 > a) return 3;
  if (2097152 > a) return 4;
  if (67108864 > a) return 5;
  if (- 2147483648 > a) return 6;
  throw new q('Cannot calculate length of UTF8 character: charCode (' + a + ') is too large (>= 0x80000000)');
};
w.Kf = function (a) {
  for (var b = 0, c = a.length, d = 0; d < c;) b += w.En(D.bj(a, d++));
  return b
};
w.Fn = function (a) {
  a >>>= 0;
  return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5
};
w.prototype = {
  Kg: function () {
    var a = new ArrayBuffer(this.a),
      b = new Uint8Array(this.o.buffer, this.o.byteOffset, this.a);
    (new Uint8Array(a)).set(b);
    return a
  },
  Sb: function () {
    return new Uint8Array(this.o.buffer, this.o.byteOffset, this.a)
  },
  Hd: function () {
    return new DataView(this.o.buffer, this.o.byteOffset, this.a)
  },
  Gr: function () {
    return new F(this.Hd(), this.Sa)
  },
  rc: function (a) {
    this.o.byteLength < a && this.Yq(2 * this.o.byteLength >= a ? 2 * this.o.byteLength : a)
  },
  Yq: function (a) {
    if (1 > a) throw new q('Can\'t resize buffer to a capacity lower than 1');
    if (this.o.byteLength <
      a) {
      var b = new Uint8Array(this.o.buffer);
      a = new ArrayBuffer(a);
      (new Uint8Array(a)).set(b);
      this.o = new DataView(a)
    }
  },
  l: function (a) {
    var b = this.a++;
    this.rc(this.a);
    this.o.setUint8(b, a)
  },
  Xi: function (a) {
    var b = this.a;
    this.a += 2;
    this.rc(this.a);
    this.o.setInt16(b, a, this.Sa)
  },
  Ub: function (a) {
    var b = this.a;
    this.a += 2;
    this.rc(this.a);
    this.o.setUint16(b, a, this.Sa)
  },
  O: function (a) {
    var b = this.a;
    this.a += 4;
    this.rc(this.a);
    this.o.setInt32(b, a, this.Sa)
  },
  tb: function (a) {
    var b = this.a;
    this.a += 4;
    this.rc(this.a);
    this.o.setUint32(b, a, this.Sa)
  },
  Wi: function (a) {
    var b = this.a;
    this.a += 4;
    this.rc(this.a);
    this.o.setFloat32(b, a, this.Sa)
  },
  s: function (a) {
    var b = this.a;
    this.a += 8;
    this.rc(this.a);
    this.o.setFloat64(b, a, this.Sa)
  },
  Vb: function (a) {
    var b = this.a;
    this.a += a.byteLength;
    this.rc(this.a);
    (new Uint8Array(this.o.buffer, this.o.byteOffset, this.o.byteLength)).set(a, b)
  },
  Mg: function (a) {
    this.Vb(new Uint8Array(a))
  },
  mc: function (a) {
    this.lb(w.Kf(a));
    this.Og(a)
  },
  Db: function (a) {
    null == a ? this.lb(0) : (this.lb(w.Kf(a) + 1), this.Og(a))
  },
  Im: function (a) {
    var b = w.Kf(a);
    if (255 < b) throw new q(null);
    this.l(b);
    this.Og(a)
  },
  Ng: function (a) {
    this.mc(JSON.stringify(a))
  },
  Og: function (a) {
    var b = this.a;
    this.rc(b + w.Kf(a));
    for (var c = a.length, d = 0; d < c;) b += w.uo(D.bj(a, d++), this.o, b);
    this.a = b
  },
  lb: function (a) {
    var b = this.a;
    a >>>= 0;
    this.rc(b + w.Fn(a));
    this.o.setUint8(b, a | 128);
    128 <= a ? (this.o.setUint8(b + 1, a >> 7 | 128), 16384 <= a ? (this.o.setUint8(b + 2, a >> 14 | 128), 2097152 <= a ? (this.o.setUint8(b + 3, a >> 21 | 128), 268435456 <= a ? (this.o.setUint8(b + 4, a >> 28 & 127), a = 5) : (this.o.setUint8(b + 3, this.o.getUint8(b +
      3) & 127), a = 4)) : (this.o.setUint8(b + 2, this.o.getUint8(b + 2) & 127), a = 3)) : (this.o.setUint8(b + 1, this.o.getUint8(b + 1) & 127), a = 2)) : (this.o.setUint8(b, this.o.getUint8(b) & 127), a = 1);
    this.a += a
  },
  f: w
};
I.b = !0;
I.yo = function () {
  try {
    return window.crypto.subtle.generateKey(I.qh, !0, [
      'sign',
      'verify'
    ]).then(function (a) {
      var b = a.privateKey;
      return window.crypto.subtle.exportKey('jwk', b).then(function (a) {
        var c = a.y,
          e = a.d,
          f = new I;
        f.Yi = a.x;
        f.Zi = c;
        f.Zj = e;
        f.Al = b;
        return f
      })
    })
  } catch (a) {
    return Promise.reject(a instanceof q ? a.Ta : a)
  }
};
I.xo = function (a) {
  a = a.split('.');
  if (4 != a.length || 'idkey' != a[0]) return Promise.reject('Invalid id format');
  var b = a[1],
    c = a[2],
    d = a[3];
  return I.Xr(b, c, d).then(function (a) {
    var e = new I;
    e.Yi = b;
    e.Zi = c;
    e.Zj = d;
    e.Al = a;
    return e
  })
};
I.Rr = function (a, b) {
  try {
    var c = new F(new DataView(a.buffer, a.byteOffset, a.byteLength), !1);
    c.B();
    var d = c.sb(c.Ob()),
      e = c.sb(),
      f = new F(new DataView(d.buffer, d.byteOffset, d.byteLength), !1),
      g = f.ic(),
      k = f.ic(),
      l = f.sb();
    if (l.byteLength != b.byteLength) return Promise.reject(null);
    for (var c = 0, t = l.byteLength; c <
      t;) {
      var h = c++;
      if (l[h] != b[h]) return Promise.reject(null)
    }
    return I.Wr(g, k).then(function (a) {
      return window.crypto.subtle.verify(I.mm, a, e, d)
    }).then(function (a) {
      if (!a) throw new q(null);
      return g
    })
  } catch (jc) {
    return Promise.reject(jc instanceof q ? jc.Ta : jc)
  }
};
I.Xr = function (a, b, c) {
  try {
    return window.crypto.subtle.importKey('jwk', {
      crv: 'P-256',
      ext: !0,
      key_ops: [
        'sign'
      ],
      kty: 'EC',
      d: c,
      x: a,
      y: b
    }, I.qh, !0, [
      'sign'
    ])
  } catch (d) {
    return Promise.reject(d instanceof q ? d.Ta : d)
  }
};
I.Wr = function (a, b) {
  try {
    return window.crypto.subtle.importKey('jwk', {
      crv: 'P-256',
      ext: !0,
      key_ops: [
        'verify'
      ],
      kty: 'EC',
      x: a,
      y: b
    }, I.qh, !0, [
      'verify'
    ])
  } catch (c) {
    return Promise.reject(c instanceof q ? c.Ta : c)
  }
};
I.prototype = {
  Ir: function () {
    return 'idkey.' + this.Yi + '.' + this.Zi + '.' + this.Zj
  },
  wr: function (a) {
    try {
      var b = w.ha(1024);
      b.l(1);
      var c = b.a;
      b.Ub(0);
      var d = b.a;
      b.mc(this.Yi);
      b.mc(this.Zi);
      b.Vb(a);
      var e = b.a - d;
      b.o.setUint16(c, e, b.Sa);
      var f = new Uint8Array(b.o.buffer, b.o.byteOffset + d, e);
      return window.crypto.subtle.sign(I.mm, this.Al, f).then(function (a) {
        b.Mg(a);
        return b.Sb()
      })
    } catch (g) {
      return Promise.reject(g instanceof q ? g.Ta : g)
    }
  },
  f: I
};
Ja.b = !0;
Ja.gp = function () {
  if (null != Ja.li) return Ja.li;
  Ja.li = new Promise(function (a, b) {
    var c = window.grecaptcha;
    null != c ? a(c) : (c = window.document.createElement('script'), c.src = 'https://www.google.com/recaptcha/api.js?onload=___recaptchaload&render=explicit', window.document.head.appendChild(c), window.___recaptchaload = function () {
      a(window.grecaptcha)
    }, c.onerror = function () {
      b(null)
    })
  });
  return Ja.li
};
Ba.b = !0;
Ba.cg = function (a) {
  // CHECKPOINT overwrite bo nie mogę perfectscrollbara
  return true;
};
mc.b = !0;
mc.ts = function () {
  var a = window;
  a.RTCPeerConnection = a.webkitRTCPeerConnection || a.mozRTCPeerConnection || a.RTCPeerConnection;
  a.RTCIceCandidate = a.webkitRTCIceCandidate || a.mozRTCIceCandidate || a.RTCIceCandidate;
  a.RTCSessionDescription = a.webkitRTCSessionDescription || a.mozRTCSessionDescription || a.RTCSessionDescription;
  var b = new RTCPeerConnection({
    iceServers: [
    ]
  });
  try {
    b.createAnswer()['catch'](function () {
    })
  } catch (e) {
    var a = a.RTCPeerConnection.prototype,
      c = a.createOffer,
      d = a.createAnswer;
    a.createOffer = function (a) {
      var b = this;
      return new Promise(function (d, e) {
        c.call(b, d, e, a)
      })
    };
    a.createAnswer = function (a) {
      var b = this;
      return new Promise(function (c, e) {
        d.call(b, c, e, a)
      })
    }
  }
};
Ca.b = !0;
Ca.ar = function (a, b) {
  Ca.Xl(new Blob([a], {
    type: 'octet/stream'
  }), b)
};
Ca.br = function (a, b) {
  Ca.Xl(new Blob([a], {
    type: 'text/plain'
  }), b)
};
Ca.Xl = function (a, b) {
  var c = window.document.createElement('a');
  c.style.display = 'display: none';
  window.document.body.appendChild(c);
  var d = URL.createObjectURL(a);
  c.href = d;
  c.download = b;
  c.click();
  URL.revokeObjectURL(d);
  c.remove()
};
Db.b = !0;
Db.prototype = {
  set: function (a) {
    this.value !=
      a && (this.value = a, this.Ja.textContent = '' + this.value)
  },
  f: Db
};
v.b = !0;
v.Ea = function (a) {
  return new Proxy(new Map,{get:(t,p)=>p==='get'?(k)=>global.__STUB.deep():(typeof t[p]==='function'?t[p].bind(t):t[p])});
};
v.Ea_orig = function (a) {
  var b = new Map,
    c = 0;
  for (a = a.querySelectorAll('[data-hook]'); c < a.length;) {
    var d = a[c++];
    b.set(d.getAttribute('data-hook'), d)
  }
  return b
};
v.Ga = function (a, b) {
  null == b && (b = 'div');
  var c = window.document.createElement(b);
  c.innerHTML = a;
  return c.firstElementChild
};
v.xe = function (a, b) {
  a.parentElement.replaceChild(b, a)
};
v.Cf = function (a) {
  for (var b = a.firstChild; null != b;) a.removeChild(b),
    b = a.firstChild
};
zb.b = !0;
zb.eh = function (a) {
  return new Promise(function (b, c) {
    a.onsuccess = function () {
      b(a.result)
    };
    a.onerror = c
  })
};
lc.b = !0;
lc.Dr = function (a, b) {
  return new Promise(function (c, d) {
    var e = window.setTimeout(function () {
      d('Timed out')
    }, b);
    a.then(function (a) {
      window.clearTimeout(e);
      c(a)
    }, function (a) {
      window.clearTimeout(e);
      d(a)
    })
  })
};
m.b = !0;
m.Fa = function (a) {
  null == a.Aa && (a.Aa = !0);
  null == a.Ba && (a.Ba = !0);
  return a
};
m.Ha = function (a) {
  a.on = m.yf;
  if (null == a.za) throw new q('Class doesn\'t have a config');
  a.prototype.zf = a.za;
  m.Qm.set(m.yf, a);
  m.yf++
};
m.lj = function (a, b) {
  var c = (null ==
    a ? null : r.Nm(a)).on;
  if (null == c) throw new q('Tried to pack unregistered action');
  b.l(c);
  a.ua(b)
};
m.fh = function (a) {
  var b = a.B(),
    b = Object.create(m.Qm.get(b).prototype);
  b.da = 0;
  b.mb = 0;
  b.va(a);
  return b
};
m.prototype = {
  $m: function () {
    return !0
  },
  apply: function () {
    throw new q('missing implementation');
  },
  va: function () {
    throw new q('missing implementation');
  },
  ua: function () {
    throw new q('missing implementation');
  },
  f: m
};
Ia.b = !0;
Ia.ss = function (a, b, c) {
  if (0 == a.length) for (a = 0; a < b.length;) c.push(b[a++]);
  else if (0 == b.length) for (b = 0; b < a.length;) c.push(a[b++]);
  else for (var d = 0, e = a.length, f = 0, g = b.length; ;) {
    var k = a[d],
      l = b[f];
    if (k.mb <= l.mb) {
      if (c.push(k), ++d, d >= e) {
        for (; f < g;) c.push(b[f++]);
        break
      }
    } else if (c.push(l), ++f, f >= g) {
      for (; d < e;) c.push(a[d++]);
      break
    }
  }
};
Ia.prototype = {
  Rm: function (a) {
    for (var b = 0, c = a.mb, d = a.da, e = 0, f = this.list; e < f.length;) {
      var g = f[e];
      ++e;
      var k = g.mb;
      if (k > c) break;
      if (k == c) {
        g = g.da;
        if (g > d) break;
        g == d && ++d
      }
      ++b
    }
    a.da = d;
    this.list.splice(b, 0, a)
  },
  Cs: function (a) {
    for (var b = 0, c = 0, d = this.list; c < d.length && !(d[c++].mb >= a);) ++b;
    this.list.splice(0, b)
  },
  as: function (a, b) {
    for (var c = this.list; 0 < c.length;) c.pop();
    Ia.ss(a.list, b.list, this.list)
  },
  Ds: function (a) {
    for (var b = 0, c = this.list, d = 0, e = c.length; d < e;) {
      var f = c[d++];
      f.ue != a && (c[b] = f, ++b)
    }
    for (; c.length > b;) c.pop()
  },
  bs: function (a) {
    for (var b = 0, c = 0, d = this.list; c < d.length && !(d[c++].mb >= a);) ++b;
    return b
  },
  f: Ia
};
yb.b = !0;
yb.prototype = {
  f: yb
};
Ua.b = !0;
Ua.ma = m;
Ua.prototype = C(m.prototype, {
  apply: function (a) {
    a.Sn(this.Rg)
  },
  ua: function (a) {
    a.lb(this.Rg.byteLength);
    a.Mg(this.Rg)
  },
  va: function (a) {
    this.Rg = a.Cl(a.Ab())
  },
  f: Ua
});
cc.b = !0;
cc.prototype = {
  f: cc
};
Mb.b = !0;
Mb.prototype = {
  add: function (a) {
    for (var b = this.$a.length, c = 0, d = this.Qd = 0; d < b;) {
      var e = d++,
        f = this.$a[e];
      f.index++;
      f.weight *= 0.97;
      this.$a[c].index < f.index && (c = e);
      this.Qd += f.weight
    }
    b >= this.rs ? (b = this.$a[c], this.Qd -= b.weight, this.$a.splice(c, 1)) : b = new bc;
    b.value = a;
    b.weight = 1;
    b.index = 0;
    this.Qd += b.weight;
    for (a = 0; a < this.$a.length && this.$a[a].value <= b.value;) ++a;
    this.$a.splice(a, 0, b)
  },
  $g: function (a) {
    if (0 == this.$a.length) return 0;
    if (1 == this.$a.length) return this.$a[0].value;
    a *= this.Qd;
    for (var b = this.$a[0].weight, c = 0; c < this.$a.length - 1 && !(b >= a);) ++c,
      b += this.$a[c].weight;
    return this.$a[c].value
  },
  max: function () {
    return 0 == this.$a.length ? 0 : this.$a[this.$a.length - 1].value
  },
  f: Mb
};
bc.b = !0;
bc.prototype = {
  f: bc
};
ac.b = !0;
ac.prototype = {
  stop: function () {
    this.hj.fc = null;
    this.hj.T.km(null);
    this.Nd.o.setUint16(0, this.Xm, this.Nd.Sa);
    this.Nd.Vb(this.Df.Sb());
    var a = pako.deflateRaw(this.Nd.Sb()),
      b = w.ha(a.byteLength + 32);
    b.Og('HBR2');
    b.tb(this.version);
    b.tb(this.hj.Y - this.ah);
    b.Vb(a);
    return b.Sb()
  },
  f: ac
};
Ta.b = !0;
ya.b = !0;
V.b = !0;
V.ma = yb;
V.prototype = C(yb.prototype, {
  ra: function () {
    throw new q('missing implementation');
  },
  Sf: function () {
    throw new q('missing implementation');
  },
  C: function () {
    throw new q('missing implementation');
  },
  zj: function (a) {
    for (var b = this.le.list, c = 0, d = b.length, e = 0; e < a;) {
      for (++e; c < d;) {
        var f = b[c];
        if (f.mb != this.Y) break;
        f.apply(this.T);
        null != this.fc && this.fc(f);
        this.cc++;
        ++c
      }
      this.T.C(1);
      this.te += this.cc;
      this.cc = 0;
      this.Y++
    }
    for (; c < d;) {
      a = b[c];
      if (a.mb != this.Y || a.da != this.cc) break;
      a.apply(this.T);
      null != this.fc && this.fc(a);
      this.cc++;
      ++c
    }
    b.splice(0, c)
  },
  Cg: function (a) {
    a.mb == this.Y && a.da <= this.cc ? (a.da = this.cc++, a.apply(this.T), null != this.fc && this.fc(a)) : this.le.Rm(a)
  },
  wk: function (a, b) {
    if (0 >= a) return this.T;
    a > this.Ff && (a = this.Ff);
    ya.zc++;
    var c = this.T.sc(),
      d;
    null != b ? (this.Ri.as(this.le, b), d = this.Ri) : d = this.le;
    d = d.list;
    for (var e = 0, f = d.length, g = this.Y, k = a | 0, l = g + k; g <= l;) {
      for (; e < f;) {
        var t = d[e];
        if (t.mb > g) break;
        t.zf.Ba && t.apply(c);
        ++e
      }
      c.C(g != l ? 1 : a - k);
      ++g
    }
    for (d = this.Ri.list; 0 < d.length;) d.pop();
    return c
  },
  kr: function (a) {
    300 < a && (a = 300);
    0 > a && (a = 0);
    this.bc = this.Ac * a | 0
  },
  gm: function (a) {
    this.rd = this.Ac * (- 200 > a ? - 200 : 200 < a ? 200 : a)
  },
  f: V
});
var xb = Ab['bas.marf.net.ConnFailReason'] = {
  Gf: !0,
  nh: [
    'Cancelled',
    'PeerFailed',
    'Rejected',
    'Other'
  ],
  hh: {
    nb: 0,
    eb: 'bas.marf.net.ConnFailReason',
    toString: ga
  },
  jh: {
    nb: 1,
    eb: 'bas.marf.net.ConnFailReason',
    toString: ga
  },
  lh: (X = function (a) {
    return {
      nb: 2,
      reason: a,
      eb: 'bas.marf.net.ConnFailReason',
      toString: ga
    }
  }, X.Ae = [
    'reason'
  ], X),
  ih: (X = function (a) {
    return {
      nb: 3,
      description: a,
      eb: 'bas.marf.net.ConnFailReason',
      toString: ga
    }
  }, X.Ae = [
    'description'
  ], X)
};
xa.b = !0;
xa.xh = function (a) {
  switch (a.nb) {
    case 0:
      return 'Cancelled';
    case 1:
      return 'Failed to connect to peer.';
    case 2:
      return pc.description(a.reason);
    case 3:
      return a.description
  }
};
xa.ma = V;
xa.prototype = C(V.prototype, {
  ia: function (a) {
    null != this.pc && (this.pc.bd = null, this.pc.Gn(), this.pc = null);
    window.clearTimeout(this.re);
    null != this.pa && (this.pa.cf = null, this.pa.ia(), this.pa = null);
    this.ek = null == a ? 'Connection closed' : a;
    this.tf(4)
  },
  tf: function (a) {
    this.pd != a && (this.pd = a, null !=
      this.Ad && this.Ad(a))
  },
  wd: function () {
    return 3 == this.pd
  },
  C: function () {
    this.wd() && window.performance.now() - this.zm > this.nn && this.zi();
    this.Xc = window.performance.now() * this.Ac + this.Qi.$g(0.5) - this.Y;
    this.Oj()
  },
  Sf: function () {
    return this.wd() ? (0 > this.bc && (this.bc = 0), this.wk(window.performance.now() * this.Ac + this.Qi.$g(0.5) - this.Y + this.bc + this.rd, this.ug)) : this.T
  },
  Oj: function () {
    0 > this.Xc && (this.Xc = 0);
    this.Xc > this.Ff && (this.Xc = this.Ff)
  },
  uq: function (a) {
    switch (a.B()) {
      case 0:
        this.rq(a);
        break;
      case 1:
        this.qq(a);
        break;
      case 2:
        this.nq(a);
        break;
      case 3:
        this.wq(a);
        break;
      case 4:
        this.tq(a);
        break;
      case 5:
        this.pq(a);
        break;
      case 6:
        this.vq(a)
    }
  },
  rq: function (a) {
    var b = this;
    a = a.sb(a.Ab());
    var c = Promise.resolve(null);
    null != this.Je && (c = this.Je.wr(a));
    c['catch'](function () {
      return null
    }).then(function (a) {
      b.ir(a)
    })
  },
  qq: function (a) {
    a = pako.inflateRaw(a.sb());
    a = new F(new DataView(a.buffer, a.byteOffset, a.byteLength));
    this.uc = a.Ob();
    this.Y = a.hb();
    this.te = a.hb();
    this.cc = a.Ab();
    this.Xc = 10;
    for (this.T.ja(a); 0 < a.o.byteLength - a.a;) this.Cg(this.Gm(a));
    window.clearTimeout(this.re);
    this.tf(3)
  },
  ir: function (a) {
    var b = w.ha();
    b.l(0);
    null != a ? (b.lb(a.byteLength), b.Vb(a)) : b.lb(0);
    b.lb(this.Uh.byteLength);
    b.Mg(this.Uh);
    this.Rb(b);
    this.Uh = null
  },
  Rb: function (a, b) {
    null == b && (b = 0);
    this.pa.Rb(b, a)
  },
  Gm: function (a) {
    var b = a.hb(),
      c = a.Ab(),
      d = a.Ob(),
      e = a.hb();
    a = m.fh(a);
    a.P = d;
    a.ue = e;
    a.mb = b;
    a.da = c;
    return a
  },
  nq: function (a) {
    a = this.Gm(a);
    this.Cg(a);
    a.P == this.uc && this.ug.Ds(a.ue);
    this.Bl()
  },
  vq: function (a) {
    a = m.fh(a);
    a.P = 0;
    a.ue = 0;
    a.apply(this.T);
    null != this.fc && this.fc(a)
  },
  wq: function (a) {
    var b = a.hb();
    a = a.hb();
    this.pi.push({
      frame: b,
      yf: a
    });
    this.Bl()
  },
  Bl: function () {
    if (3 == this.pd) {
      for (var a = 0, b = this.pi; a < b.length;) {
        var c = b[a];
        ++a;
        c.frame <= this.Y || c.yf == this.te + this.cc + this.le.bs(c.frame) && this.vn(c.frame - this.Y)
      }
      for (var a = 0, b = this.pi, c = 0, d = b.length; c < d;) {
        var e = b[c++];
        e.frame > this.Y && (b[a] = e, ++a)
      }
      for (; b.length > a;) b.pop();
      this.ug.Cs(this.Y)
    }
  },
  pq: function (a) {
    var b = 0 != a.B(),
      c = a.ic(),
      d = '';
    0 < a.o.byteLength - a.a && (d = a.ic());
    a = b ? 'You were banned' : 'You were kicked';
    '' != d && (a += ' by ' + d);
    '' != c && (a += ' (' +
      c + ')');
    this.ia(a)
  },
  tq: function (a) {
    var b = a.u();
    a = a.u();
    var c = window.performance.now() - a;
    this.Qi.add(b - a * this.Ac);
    this.sg.add(c);
    for (var d = b = 0, e = this.Di; d < e.length;) {
      var f = e[d];
      ++d;
      if (f > a) break;
      f < a ? y.i(this.dl, - 1) : y.i(this.dl, c);
      ++b
    }
    this.Di.splice(0, b)
  },
  zi: function () {
    var a = window.performance.now();
    this.zm = a;
    this.Di.push(a);
    var b = this.sg.$g(0.5) | 0,
      c = w.ha();
    c.l(2);
    c.s(a);
    c.lb(b);
    this.Rb(c, 2)
  },
  vn: function (a) {
    this.zj(a);
    this.Xc -= a;
    this.Oj()
  },
  ra: function (a) {
    if (3 == this.pd) {
      var b = this.Ap++,
        c = 0;
      0 > this.bc && (this.bc = 0);
      a.zf.Aa && (c = this.Y + (this.Xc | 0) + this.bc);
      var d = w.ha();
      d.l(1);
      d.tb(c);
      d.tb(b);
      m.lj(a, d);
      this.Rb(d);
      a.zf.Ba && (a.ue = b, a.P = this.uc, a.mb = c, this.ug.Rm(a))
    }
  },
  f: xa
}); Lb.b = !0; Lb.ma = V; Lb.prototype = C(V.prototype, {
  ia: function () {
    this.Ic.ia();
    for (var a = 0, b = this.ac; a < b.length;) {
      var c = b[a++].pa;
      c.cf = null;
      c.lg = null;
      c.ia()
    }
  },
  to: function (a, b, c, d) {
    var e = this.Ie.get(a);
    if (null != e) {
      if (d) {
        var f = this.Ic.zn(e.pa);
        this.Kj.set(a, f)
      }
      a = w.ha();
      a.l(5);
      a.l(d ? 1 : 0);
      a.mc(b);
      null == c && (c = '');
      a.mc(c);
      e.Rb(a);
      e.pa.ia()
    }
  },
  Ud: function () {
    this.Ic.Ud();
    this.Kj.clear()
  },
  Fi: function (a) {
    this.Ic.Fi(a)
  },
  Ei: function (a) {
    this.Ic.Ei(a)
  },
  ra: function (a) {
    a.P = 0;
    var b = this.Y + this.wi + this.bc;
    a.zf.Aa || (b = this.Y);
    a.mb = b;
    this.Cg(a);
    this.Ci();
    0 < this.ac.length && this.Eg(this.Zh(a), 1)
  },
  C: function () {
    var a = ((window.performance.now() - this.Li) * this.Ac | 0) - this.Y;
    0 < a && this.zj(a);
    7 <= this.Y - this.Kk && this.Ci();
    this.Y - this.Jk >= this.Mn && (this.Ci(), this.gr())
  },
  Sf: function () {
    0 > this.bc && (this.bc = 0);
    return this.wk((window.performance.now() - this.Li) * this.Ac - this.Y + this.wi + this.bc + this.rd)
  },
  Oo: function (a, b) {
    if (this.ac.length >= this.fg) return gc.kh(4100);
    try {
      if (b.Ob() != this.Sr) throw new q(null);
    } catch (d) {
      return gc.kh(4103)
    }
    try {
      var c = b.zb();
      if (null != this.Ib && c != this.Ib) throw new q(null);
    } catch (d) {
      return gc.kh(4101)
    }
    return gc.hn
  },
  Lp: function (a) {
    var b = this;
    if (this.ac.length >= this.fg) a.ia();
    else {
      var c = new $b(a);
      this.ac.push(c);
      a.lg = function (a) {
        a = new F(new DataView(a));
        b.oq(a, c)
      };
      a.cf = function () {
        D.remove(b.ac, c);
        b.Ie['delete'](c.$);
        y.i(b.Ip, c.$)
      };
      a = w.ha(1 + c.He.byteLength);
      a.l(0);
      a.lb(c.He.byteLength);
      a.Vb(c.He);
      c.Rb(a)
    }
  },
  Zh: function (a) {
    var b = w.ha();
    b.l(2);
    this.il(a, b);
    return b
  },
  il: function (a, b) {
    b.tb(a.mb);
    b.lb(a.da);
    b.Ub(a.P);
    b.tb(a.ue);
    m.lj(a, b)
  },
  Ci: function () {
    if (!(0 >= this.Y - this.Kk) && 0 != this.ac.length) {
      var a = w.ha();
      a.l(3);
      a.tb(this.Y);
      a.tb(this.te);
      this.Eg(a, 2);
      this.Kk = this.Y
    }
  },
  Eg: function (a, b) {
    null == b && (b = 0);
    for (var c = 0, d = this.ac; c < d.length;) {
      var e = d[c];
      ++c;
      e.yg && e.Rb(a, b)
    }
  },
  hr: function (a) {
    var b = w.ha();
    b.l(1);
    var c = w.ha();
    c.Ub(a.$);
    c.tb(this.Y);
    c.tb(this.te);
    c.lb(this.cc);
    this.T.ga(c);
    for (var d = this.le.list, e = 0, f = d.length; e < f;) this.il(d[e++], c);
    b.Vb(pako.deflateRaw(c.Sb()));
    a.Rb(b)
  },
  gr: function () {
    this.Jk = this.Y;
    if (0 != this.ac.length) {
      var a = new Ua;
      a.mb = this.Y;
      a.da = this.cc++;
      a.P = 0;
      a.Rg = this.T.Ao();
      this.Eg(this.Zh(a))
    }
  },
  yq: function (a, b) {
    var c = this,
      d = a.sb(a.Ab()),
      e = a.sb(a.Ab()),
      f = b.He;
    b.He = null;
    I.Rr(d, f)['catch'](function () {
      return null
    }).then(function (a) {
      try {
        if (- 1 != c.ac.indexOf(b)) {
          b.Ns = a;
          var d = c.up++;
          b.$ = d;
          c.Ie.set(d, b);
          ia.i(c.Hp, d, new F(new DataView(e.buffer, e.byteOffset, e.byteLength), !1));
          b.yg = !0;
          c.hr(b)
        }
      } catch (l) {
        c.xk(b, l instanceof q ? l.Ta : l)
      }
    })
  },
  oq: function (a, b) {
    this.C();
    try {
      if (!b.Ho.Cm()) throw new q(1);
      var c = a.B();
      if (b.yg) switch (c) {
        case 1:
          this.zq(a, b);
          break;
        case 2:
          this.sq(a, b);
          break;
        default:
          throw new q(0);
      } else if (0 == c) this.yq(a, b);
      else throw new q(0);
      if (0 < a.o.byteLength - a.a) throw new q(2);
    } catch (d) {
      this.xk(b, d instanceof q ? d.Ta : d)
    }
  },
  xk: function (a, b) {
    window.console.log(b);
    this.Ie['delete'](a.$);
    D.remove(this.ac, a);
    a.yg && null != this.$k && this.$k(a.$);
    a.pa.ia()
  },
  sq: function (a, b) {
    var c = a.u();
    b.yb = a.Ab();
    var d = w.ha();
    d.l(4);
    d.s((window.performance.now() - this.Li) * this.Ac + this.wi);
    d.s(c);
    b.Rb(d, 2)
  },
  zq: function (a, b) {
    var c = a.hb(),
      d = a.hb(),
      e = m.fh(a),
      f = e.zf.oj;
    if (null != f) {
      var g = b.xj.get(f);
      null == g && (g = new tb(f.$i, f.uj), b.xj.set(f, g));
      if (!g.Cm()) throw new q(3);
    }
    f = this.Y;
    g = this.Y + 120;
    e.ue = d;
    e.P = b.$;
    e.mb = c < f ? f : c > g ? g : c;
    e.$m(this.T) && (this.Cg(e), this.Eg(this.Zh(e), 1))
  },
  f: Lb
}); $b.b = !0; $b.prototype = {
  Rb: function (a, b) {
    null == b && (b = 0);
    this.pa.Rb(b, a)
  },
  f: $b
}; Zb.b = !0; Kb.b = !0; Kb.prototype = {
  f: Kb
}; Jb.b = !0; Jb.ma = V; Jb.prototype = C(V.prototype, {
  Cq: function (a) {
    for (var b = a.Ob(), c = 0, d = 0; d < b;) {
      ++d;
      var c = c + a.Ab(),
        e = a.B();
      //console.log("TU",a,b,c,d,e);
      if (keepUpdating) kicker = undefined, lastKicker = undefined, goals = [], match = [{ stadium: false, started: true, stopped: false, spaceMode: false, realSoccerMode: false, touches: [], thirds: [0, 0, 0], changes: [], gameTicks: -1, kicks: [], shots: [], redTeam: [], blueTeam: [], shotsRed: 0, shotsBlue: 0, passes: [], passesRed: 0, passesBlue: 0, kicksRed: 0, kicksBlue: 0, possRed: 0, possBlue: 0, scoreRed: 0, scoreBlue: 0, player: [], goals: [] }], player = [], players = [], playerList = [], updatePlayers = true;
      mtc = 0;
      this.Vk.push({
        mj: c / this.mf,
        kind: e
      })
    }
  },
  Dl: function () {
    var a = this.Lc;
    // CHECKPOINT WAŻNY tu leci nagranie, całe byteLength
    if (loading.recLength == 1) {
      loading.recLength = a.o.byteLength - a.a;
    }
    else if (!loading.done) {
      loading.analyzed = loading.recLength - a.o.byteLength + a.a;
      const progress = Math.floor(loading.analyzed / loading.recLength * 100);
      if (progress < loading.progress) {
        // console.log('koniec analizy', a);
        loading.done = true;
        keepUpdating = false;
        dispatchPlayerList(playerList);
        dispatchPlayerPos(playerPos);
        setGameStats(match);
        bringReplayer();
      } else if (progress !== loading.progress) {
        loading.progress = progress;
        loading.changed = true;
        // document.getElementById('loading-progress').style.width = '' + progress + '%'
        // setLoadingProgress2(progress + '%')
        // $('#loading-progress').css('width', progress + '%')
        // document.getElementById('progress').innerHTML = '' + progress;
        // console.log(progress + '%')
        // console.log(loading.analyzed, loading.recLength, a.o.byteLength - a.a)
      }
    }
    0 < a.o.byteLength - a.a ? (a = this.Lc.Ab(), this.hg += a, a = this.Lc.Ob(), this.gg = m.fh(this.Lc), this.gg.P = a) : this.gg = null
  },
  Go: function () {
    return this.Y / this.mf
  },
  ra: function () {
  },
  Sf: function () {
    this.C();
    ya.zc++;
    var a = this.T.sc();
    a.C(this.sk);
    return a
  },
  C: function () {
    var a = window.performance.now(),
      b = a - this.Wh;
    this.Wh = a;
    0 < this.Fd ? (this.Qb +=
      10000, this.Qb > this.Fd && (this.Qb = this.Fd, this.Fd = - 1)) : this.Qb += b * this.pl;
    a = this.mf * this.mh;
    this.Qb > a && (this.Qb = a);
    b = this.Qb * this.Ac;
    a = b | 0;
    for (this.sk = b - a; this.Y < a;) {
      for (; null != this.gg && this.hg == this.Y;) b = this.gg,
        b.apply(this.T),
        null != this.fc && this.fc(b),
        this.Dl();
      this.Y++;
      this.T.C(1)
    }
  },
  er: function (a) {
    this.Fd = a;
    a < this.Qb && this.ui();
    // console.log('e', this.ui.toString());
    // console.log(this.Lc);
  },
  ui: function () {
    this.hg = 0;
    this.Qb = this.Y = this.Lc.a = 0;
    this.T.ja(this.Lc);
    this.Dl()
  },
  f: Jb
}); Ib.b = !0; Ib.prototype = {
  eval: function (a) {
    var b = this.Yb.length - 1;
    if (a <= this.Yb[0]) return this.Yb[1];
    if (a >= this.Yb[b]) return this.Yb[b - 2];
    for (var c = 0, b = b / 5 | 0; ;) {
      var d = b + c >>> 1;
      a > this.Yb[5 * d] ? c = d + 1 : b = d - 1;
      if (!(c <= b)) break
    }
    c = 5 * b;
    b = this.Yb[c];
    a = (a - b) / (this.Yb[c + 5] - b);
    b = a * a;
    d = b * a;
    return (2 * d - 3 * b + 1) * this.Yb[c + 1] + (d - 2 * b + a) * this.Yb[c + 2] + (- 2 * d + 3 * b) * this.Yb[c + 3] + (d - b) * this.Yb[c + 4]
  },
  f: Ib
}; H.b = !0; H.prototype = {
  f: H
}; M.b = !0; M.Pl = function (a, b, c, d, e) {
  return new Promise(function (f, g) {
    var k = new XMLHttpRequest;
    k.open(b, a);
    k.responseType = c;
    k.onload = function () {
      200 <= k.status && 300 > k.status ? null != k.response ? f(k.response) :
        g(null) : g('status: ' + k.status)
    };
    k.onerror = function (a) {
      g(a)
    };
    null != e && k.setRequestHeader('Content-type', e);
    k.send(d)
  })
}; M.L = function (a, b) {
  return M.Pl(a, 'GET', b, null)
}; M.tk = function (a) {
  return M.L(a, 'json').then(function (a) {
    var b = a.error;
    if (null != b) throw new q(b);
    return a.data
  })
}; M.mq = function (a, b, c) {
  return M.Pl(a, 'POST', 'json', b, c)
}; M.zl = function (a, b, c) {
  return M.mq(a, b, c).then(function (a) {
    var b = a.error;
    if (null != b) throw new q(b);
    return a.data
  })
}; A.b = !0; A.i = function (a) {
  null != a && a()
}; y.b = !0; y.i = function (a, b) {
  null != a && a(b)
}; ia.b = !0; ia.i = function (a, b, c) {
  null != a && a(b, c)
}; Cb.b = !0; Cb.i = function (a, b, c, d) {
  null != a && a(b, c, d)
}; vb.b = !0; vb.i = function (a, b, c, d, e) {
  null != a && a(b, c, d, e)
}; tb.b = !0; tb.prototype = {
  Cm: function (a) {
    null == a && (a = 1);
    this.C();
    return a <= this.oc ? (this.oc -= a, !0) : !1
  },
  Cr: function (a) {
    this.C();
    a -= this.oc;
    return 0 >= a ? 0 : this.Ve + a * this.Si - window.performance.now()
  },
  Zn: function (a, b) {
    var c = this.Cr(a);
    this.oc -= a;
    window.setTimeout(b, c | 0)
  },
  C: function () {
    var a = window.performance.now(),
      b = Math.floor((a - this.Ve) / this.Si);
    this.Ve += b * this.Si;
    this.oc += b;
    this.oc >= this.Nj && (this.oc = this.Nj, this.Ve = a)
  },
  f: tb
}; Hb.b = !0; Hb.gf = function (a) {
  var b = new fc('([^&=]+)=?([^&]*)', 'g');
  a = a.substring(1);
  for (var c = 0, d = new Map; b.os(a, c);) {
    var c = b.Wm(1),
      c = decodeURIComponent(c.split('+').join(' ')),
      e = b.Wm(2);
    d.set(c, decodeURIComponent(e.split('+').join(' ')));
    c = b.ps();
    c = c.mj + c.ms
  }
  return d
}; Hb.L = function () {
  //console.log(window.top.location);
  return Hb.gf("")
}; ub.b = !0; ub.cq = function (a) {
  if (3 > a.length) throw new q('Not enough arguments');
  if (7 < a.length) throw new q('Too many arguments');
  var b = new Pa,
    c = new ka;
  b.Sg = c;
  switch (a[1]) {
    case 'blue':
      c.fb = [
        p.xa.R
      ];
      b.ea = p.xa;
      break;
    case 'red':
      c.fb = [
        p.fa.R
      ];
      b.ea = p.fa;
      break;
    default:
      throw new q('First argument must be either "red" or "blue"');
  }
  if ('clear' == a[2]) return b;
  c.hd = 256 * K.parseInt(a[2]) / 360 | 0;
  c.ed = K.parseInt('0x' + a[3]);
  if (4 < a.length) {
    c.fb = [
    ];
    for (var d = 4, e = a.length; d < e;) c.fb.push(K.parseInt('0x' + a[d++]))
  }
  return b
};
ub.prototype = {
  gf: function (a) {
    var b = this;
    if ('/' != a.charAt(0)) return !1;
    if (1 == a.length) return !0;
    a = J.Gs(D.substr(a, 1, null)).split(' ');
    var c = a[0];
    switch (c) {
      case 'avatar':
        2 == a.length && (this.fm(a[1]), this.ba('Avatar set'));
        break;
      case 'checksum':
        var d = this.ya.T.S;
        a = d.w;
        d.Pe() ? this.ba('Current stadium is original: "' + a + '"') : (d = J.Vg(d.Sj(), 8), this.ba('Stadium: "' + a + '" (checksum: ' + d + ')'));
        break;
      case 'clear_avatar':
        this.fm(null);
        this.ba('Avatar cleared');
        break;
      case 'clear_bans':
        null == this.Ud ? this.ba('Only the host can clear bans') : (this.Ud(), this.ba('All bans have been cleared'));
        break;
      case 'clear_password':
        null == this.Fg ? this.ba('Only the host can change the password') : (this.Fg(null), this.ba('Password cleared'));
        break;
      case 'colors':
        try {
          d = ub.cq(a),
            this.ya.ra(d)
        } catch (g) {
          a = g instanceof q ? g.Ta : g,
            'string' == typeof a && this.ba(a)
        }
        break;
      case 'extrapolation':
        2 == a.length ? (a = K.parseInt(a[1]), null != a && - 200 <= a && 200 >= a ? (n.A.rd.Xa(a), this.ya.gm(a), this.ba('Extrapolation set to ' + a + ' msec')) : this.ba('Extrapolation must be a value between -200 and 50 milliseconds')) : this.ba('Extrapolation requires a value in milliseconds.');
        break;
      case 'handicap':
        2 == a.length ? (a = K.parseInt(a[1]), null != a && 0 <= a && 300 >= a ? (this.ya.kr(a), this.ba('Ping handicap set to ' + a + ' msec')) : this.ba('Ping handicap must be a value between 0 and 300 milliseconds')) : this.ba('Ping handicap requires a value in milliseconds.');
        break;
      case 'kick_ratelimit':
        if (4 > a.length) this.ba('Usage: /kick_ratelimit <min> <rate> <burst>');
        else {
          var d = K.parseInt(a[1]),
            e = K.parseInt(a[2]);
          a = K.parseInt(a[3]);
          null == d || null == e || null == a ? this.ba('Invalid arguments') : this.ya.ra(ma.la(d, e, a))
        }
        break;
      case 'recaptcha':
        if (null == this.jm) this.ba('Only the host can set recaptcha mode');
        else try {
          if (2 == a.length) {
            switch (a[1]) {
              case 'off':
                e = !1;
                break;
              case 'on':
                e = !0;
                break;
              default:
                throw new q(null);
            }
            this.jm(e);
            this.ba('Room join Recaptcha ' + (e ? 'enabled' : 'disabled'))
          } else throw new q(null);
        } catch (g) {
          this.ba('Usage: /recaptcha <on|off>')
        }
        break;
      case 'set_password':
        2 == a.length && (null == this.Fg ? this.ba('Only the host can change the password') : (this.Fg(a[1]), this.ba('Password set')));
        break;
      case 'store':
        var f = this.ya.T.S;
        f.Pe() ? this.ba('Can\'t store default stadium.') : Z.Es().then(function () {
          return Z.add(f)
        }).then(function () {
          b.ba('Stadium stored')
        }, function () {
          b.ba('Couldn\'t store stadium')
        });
        break;
      default:
        this.ba('Unrecognized command: "' + c + '"')
    }
    return !0
  },
  fm: function (a) {
    null != a && (a = U.Qc(a, 2));
    n.A.sh.Xa(a);
    this.ya.ra(ra.la(a))
  },
  f: ub
};
Ha.b = !0;
ba.b = !0;
ba.Yl = function (a) {
  var b = new Date;
  Ca.ar(a, 'HBReplay-' + b.getFullYear() + '-' + J.Af('' + (b.getMonth() + 1)) + '-' + J.Af('' + b.getDate()) + '-' + J.Af('' + b.getHours()) + 'h' + J.Af('' + b.getMinutes()) + 'm.hbr2')
};
ba.Bq = function (a) {
  for (var b = a.T.I, c = [
  ], d = 0, e = 0, f = 0; f < b.length;) {
    var g = b[f];
    ++f;
    g.ea == p.Ia && c.push(g.V);
    g.ea ==
      p.fa ? ++d : g.ea == p.xa && ++e
  }
  f = c.length;
  0 != f && (b = function () {
    return c.splice(Math.random() * c.length | 0, 1)[0]
  }, e == d ? 2 > f || (a.ra(S.la(b(), p.fa)), a.ra(S.la(b(), p.xa))) : (d = e > d ? p.fa : p.xa, a.ra(S.la(b(), d))))
};
ba.prototype = {
  zr: function () {
    this.Ed = new ac(this.ya, 3)
  },
  vr: function (a) {
    var b = this;
    a = new gb(a);
    a.qb = function () {
      b.j.bb(null)
    };
    a.ei = function (a, d, e) {
      b.ya.ra(Y.la(a, d, e));
      b.j.bb(null)
    };
    this.j.bb(a.g)
  },
  ia: function () {
    window.document.removeEventListener('keydown', G(this, this.Bd));
    window.document.removeEventListener('keyup', G(this, this.Cd));
    window.onbeforeunload = null;
    window.cancelAnimationFrame(this.De);
    this.ob.ia();
    window.clearInterval(this.Gh);
    window.clearInterval(this.Qr);
    window.clearTimeout(this.Nf)
  },
  Wq: function (a) {
    for (var b = [
    ], c = 0, d = this.ya.T.I; c < d.length;) {
      var e = d[c];
      ++c;
      e.ea == a && b.push(S.la(e.V, p.Ia))
    }
    for (a = 0; a < b.length;) this.ya.ra(b[a++])
  },
  bf: function () {
    this.De = window.requestAnimationFrame(G(this, this.bf));
    this.ob.C();
    this.ya.C();
    this.Kc()
  },
  Kc: function () {
    var a = window.performance.now();
    1 == n.A.Fh.L() && 28.333333333333336 >
      a - this.$c || (this.$c = a, this.sd++, this.uf(), a = this.ya.T.na(this.ya.uc), null != a && (this.xi = a.cb), this.j.C(this.ya))
  },
  Gp: function (a) {
    var b = this;
    this.Of.gf(a) || this.Jn.Zn(1, function () {
      var c = new Na;
      c.Tc = a;
      b.ya.ra(c)
    })
  },
  Fp: function (a) {
    var b = this;
    this.zh = a;
    null == this.Nf && (this.Nf = window.setTimeout(function () {
      b.Nf = null;
      b.bm(b.zh)
    }, 1000), this.bm(this.zh))
  },
  bm: function (a) {
    a != this.Ik && (this.ya.ra(na.la(a ? 0 : 1)), this.Ik = a)
  },
  Bm: function () {
    if (null != this.ya.T.K) {
      var a = new Oa;
      a.Bf = 120 != this.ya.T.K.Oa;
      this.ya.ra(a)
    }
  },
  Bd: function (a) {
    switch (a.keyCode) {
      case 9:
      case 13:
        this.j.Qa.gb.focus();
        a.preventDefault();
        break;
      case 27:
        if (this.j.Zo()) this.j.bb(null);
        else {
          var b = this.j;
          b.me(!b.Gd)
        }
        a.preventDefault();
        break;
      case 49:
        n.A.Tb.Xa(1);
        break;
      case 50:
        n.A.Tb.Xa(2);
        break;
      case 51:
        n.A.Tb.Xa(3);
        break;
      case 52:
        n.A.Tb.Xa(0);
        break;
      case 80:
        this.Bm();
        break;
      default:
        this.ob.Bd(a.code)
    }
  },
  uf: function () {
    var a = n.A.Tb.L(),
      b = this.j.Fb,
      c = b.Eb;
    c.zg = n.A.Sl.L();
    0 == a ? (b.Gg(!0), c.kf = 1, c.jf = 0, c.xf = 0) : (b.Gg(!1), c.xf = 35, - 1 == a ? c.jf = 450 : (c.jf = 0, c.kf = 1 + 0.25 * (a - 1)))
  },
  Cd: function (a) {
    this.ob.Cd(a.code)
  },
  f: ba
};
Gb.b = !0;
Gb.prototype = {
  Ti: function (a) {
    var b = this.j.Qa.Bc,
      c = [
      ],
      d = 0;
    for (a = a.I; d < a.length;) {
      var e = a[d];
      ++d;
      c.push({
        w: e.w,
        $: e.V
      })
    }
    b.Hj = c
  },
  ri: function (a) {
    function b(a) {
      return null == a ? '' : ' by ' + a.w
    }
    var c = this;
    this.Ti(a);
    a.tl = function (b) {
      c.j.Qa.Gb('' + b.w + ' has joined');
      n.Na?.cd(n.Na.$o);
      //console.log("wejscie",b, a);
      if (keepUpdating) {
        players.push(b);
        if (!playerList.includes(b.w)) {
          playerList.push(b.w);
          match[match.length - 1].player.push({
            id: b.V,
            nick: b.w,
            nation: b.Kd,
            goals: 0,
            assists: 0,
            kicks: 0
          });
        }
        c.Ti(a)
      }
    };
    a.ul = function (d, e, f, g) {
      y.i(c.Op, d.V);
      null == e ? d = '' + d.w + ' has left' : (vb.i(c.Np, d.V, e, null != g ? g.w : null, f), d = '' + d.w + ' was ' + (f ? 'banned' : 'kicked') + b(g) + ('' != e ? ' (' + e + ')' :
        ''));
      c.j.Qa.Gb(d);
      n.Na?.cd(n.Na.ep);
      c.Ti(a)
    };
    a.rl = function (a, b) {
      var d = null != c.Rh && - 1 != b.indexOf(c.Rh);
      c.j.Qa.ba('' + a.w + ': ' + b, d ? 'highlight' : null);
      n.A.om.L() && d ? n.Na?.cd(n.Na.zk) : n.A.Hi.L() && n.Na?.cd(n.Na.Rj)
    };
    a.Vl = function (a, b, f, g) {
      c.j.Qa.pp(a, b, f);
      if (n.A.Hi.L()) switch (g) {
        case 1:
          n.Na?.cd(n.Na.Rj);
          break;
        case 2:
          n.Na?.cd(n.Na.zk)
      }
    };
    a.ji = function () {
      n.Na?.cd(n.Na.bp);
      //console.log("kick",n);
    };
    a.Ni = function (a) {
      n.Na?.cd(n.Na.Io);
      var b = c.j.Fb.Eb.td;
      if (playSounds) b.Pa(a == p.fa ? b.Fq : b.Bn);
      //console.log("Tu niby gol", match[match.length-1].goals/*a,b,c.j.Fb.xc.Ke,d,e,f,g,h,i,j,k*/);
      //console.log("GOOOOOOOOOOOOOOOOOOOOOOOOOOOOL",kicker.name, kicker.team, lastKicker.name, match[match.length-1].scoreRed, match[match.length-1].scoreBlue);
      //console.log(ha.Wk(20494*16.6666666666666));
      // console.log(c.j.Fb.Eb.Ya);
      // console.log(this.K.Ma.K.ta.F[0].a); - BALL COORDINATES
      if (keepUpdating) {
        if (a.w == "Red") match[match.length - 1].scoreRed++;//aktualny wynik red lub blue = a.$
        else match[match.length - 1].scoreBlue++;
        if (match[match.length - 1].spaceMode) {
          if (a.w == toucher.team) {
            match[match.length - 1].goals.push({
              scorer: toucher.name,
              currentScore: [match[match.length - 1].scoreRed, match[match.length - 1].scoreBlue]
            });
            match[match.length - 1].player[playerList.indexOf(toucher.name)].goals++;
            if (lastToucher.name != undefined && a.w == lastToucher.team) {
              match[match.length - 1].goals[match[match.length - 1].goals.length - 1].assist = lastToucher.name;
              match[match.length - 1].player[playerList.indexOf(lastToucher.name)].assists++;
            } else {
              match[match.length - 1].goals[match[match.length - 1].goals.length - 1].assist = false;
            }
          } else {
            match[match.length - 1].goals.push({ scorer: toucher.name + " (own goal)", assist: false, currentScore: [match[match.length - 1].scoreRed, match[match.length - 1].scoreBlue] });
          }
        } else {
          if (a.w == kicker.team) {
            match[match.length - 1].goals.push({
              scorer: kicker.name,
              currentScore: [match[match.length - 1].scoreRed, match[match.length - 1].scoreBlue],
              shot: match[match.length - 1].kicks[match[match.length - 1].kicks.length - 1],
              ballCoord: {
                x: this.K.Ma.K.ta.F[0].a.x,
                y: this.K.Ma.K.ta.F[0].a.y
              }
            });
            match[match.length - 1].player[playerList.indexOf(kicker.name)].goals++;
            if (lastKicker != undefined && a.w == lastKicker.team) {
              match[match.length - 1].goals[match[match.length - 1].goals.length - 1].assist = {
                player: lastKicker.name,
                shot: match[match.length - 1].kicks[match[match.length - 1].kicks.length - 2]
              }
              match[match.length - 1].player[playerList.indexOf(lastKicker.name)].assists++;
            } else {
              match[match.length - 1].goals[match[match.length - 1].goals.length - 1].assist = false;
            }
          } else {
            match[match.length - 1].goals.push({ scorer: kicker.name + " (own goal)", assist: false, currentScore: [match[match.length - 1].scoreRed, match[match.length - 1].scoreBlue] });
          }
        }
        match[match.length - 1].goals[match[match.length - 1].goals.length - 1].for = a.w;
        match[match.length - 1].goals[match[match.length - 1].goals.length - 1].goalIndex = goalParsed;
        match[match.length - 1].goals[match[match.length - 1].goals.length - 1].tick = match[match.length - 1].gameTicks;
        goalParsed++;
      }
    };
    a.Oi = function (a) {
      //console.log("Ktoś wygrał");
      var b = c.j.Fb.Eb.td;
      if (playSounds) b.Pa(a == p.fa ? b.Gq : b.Cn);
      if (keepUpdating) match[match.length - 1].stopped = true;
      //console.log("kuniec",match[match.length-1].gameTicks);
      c.j.Qa.Gb('' + a.w + ' team won the match')
    };
    a.ml = function (a, e, f) {
      e && !f && c.j.Qa.Gb('Game paused' + b(a))
    };
    a.Pi = function () {
      var a = c.j.Fb.Eb.td;
      if (keepUpdating) match[match.length - 1].stopped = true;
      //console.log("kuniec",match[match.length-1].gameTicks);
      if (playSounds) a.Pa(a.Ar)
    };
    a.Ki = function (a) {
      c.j.me(!1);
      c.j.Fb.Eb.td.Nn();
      //console.log("game started", a, b, c);
      if (match[match.length - 1].stopped && keepUpdating) {
        match.push({ started: true, stopped: false, spaceMode: false, realSoccerMode: false, touches: [], thirds: [0, 0, 0], changes: [], gameTicks: -1, kicks: [], shots: [], redTeam: [], blueTeam: [], shotsRed: 0, shotsBlue: 0, passes: [], passesRed: 0, passesBlue: 0, kicksRed: 0, kicksBlue: 0, possRed: 0, possBlue: 0, scoreRed: 0, scoreBlue: 0, goals: [], player: match[match.length - 1].player });
        playerPos.push([]);
        for (var i = 0; i < match[match.length - 1].player.length; i++) {
          match[match.length - 1].player[i].goals = 0;
          match[match.length - 1].player[i].assists = 0;
          match[match.length - 1].player[i].kicks = 0;
        }
      }
      c.j.Qa.Gb('Game started' + b(a))
    };
    a.vf = function (a) {
      //console.log("Game stopped");
      if (keepUpdating) {
        match[match.length - 1].stopped = true;
        if (match.length > 1 && match[match.length - 1].gameTicks == -1) match.splice(match.length - 1, 1);
      }
      checkTeams = true;
      null != a && c.j.Qa.Gb('Game stopped' + b(a))
    };
    a.Ii = function (a, e) {
      if (!e.Pe()) {
        var d = J.Vg(e.Sj(), 8);
        //console.log("stadium loaded",a,e);
        c.j.Qa.Gb('Stadium "' + e.w + '" (' + d + ') loaded' + b(a))
      }
    };
    a.sl = function (a) {
      c.j.Qa.Gb('' + a.w + ' ' + (a.Ld ? 'has desynchronized' : 'is back in sync'))
    };
    a.xl = function (d, e, f) {
      checkTeams = true;
      if (keepUpdating && match[match.length - 1].started && !match[match.length - 1].stopped && match[match.length - 1].gameTicks > 0) {
        match[match.length - 1].changes.push([e.w, f.w, parseTime(match[match.length - 1].gameTicks)]);
      }
      null != a.K && c.j.Qa.Gb('' +
        e.w + ' was moved to ' + f.w + b(d))
    };
    a.ii = function (a, e) {
      var d = e.w;
      c.j.Qa.Gb((e.cb ? '' + d + ' was given admin rights' : '' + d + '\'s admin rights were taken away') + b(a))
    };
    a.wl = function (a, b) {
      c.j.Fb.Eb.Po(a, b)
    };
    a.Hk = function (a, e, f, g) {
      c.j.Qa.Gb('Kick Rate Limit set to (min: ' + e + ', rate: ' + f + ', burst: ' + g + ')' + b(a))
    }
  },
  Lr: function (a) {
    a.tl = null;
    a.ul = null;
    a.rl = null;
    a.Vl = null;
    a.ji = null;
    a.Ni = null;
    a.Oi = null;
    a.ml = null;
    a.Pi = null;
    a.Ki = null;
    a.vf = null;
    a.Ii = null;
    a.sl = null;
    a.xl = null;
    a.ii = null;
    a.wl = null;
    a.Hk = null
  },
  f: Gb
};
Ra.b = !0;
Ra.Fk = function (a) {
  switch (n.A.tg.L().L(a)) {
    case 'Down':
      return 2;
    case 'Kick':
      return 16;
    case 'Left':
      return 4;
    case 'Right':
      return 8;
    case 'Up':
      return 1;
    default:
      return 0
  }
};
Ra.prototype = {
  ia: function () {
    window.document.removeEventListener('focusout', G(this, this.al))
  },
  C: function () {
    var a = this.$d;
    if (null != this.ng && a != this.Yf) {
      this.Yf = a;
      var b = new Ga;
      b.input = a;
      this.ng(b)
    }
  },
  Bd: function (a) {
    this.$d |= Ra.Fk(a)
  },
  Cd: function (a) {
    this.$d &= ~Ra.Fk(a)
  },
  al: function () {
    if (null != this.ng && 0 != this.Yf) {
      this.Yf = this.$d = 0;
      var a = new Ga;
      a.input = 0;
      this.ng(a)
    }
  },
  f: Ra
};
T.b = !0;
T.Hh = function (a) {
  return T.Rf(JSON.parse(a))
};
T.Rf = function (a) {
  var b = new T;
  b.Ec = a.lat;
  b.Gc = a.lon;
  b.ub = a.code.toLowerCase();
  return b
};
T.Fo = function () {
  return M.tk(/*n.Ee + 'api/geo'*/"https://kpias760.github.io/haxball-replay-analyzer.github.io/pliki/geo.json").then(function (a) {
    return T.Rf(a)
  })
  //return false;
};
T.prototype = {
  se: function () {
    return JSON.stringify({
      lat: this.Ec,
      lon: this.Gc,
      code: this.ub
    })
  },
  f: T
};
Yb.b = !0;
Yb.prototype = {
  Lh: function () {
    return null != this.Ne.L() ? this.Ne.L() : null != this.Me.L() ? this.Me.L() : new T
  },
  f: Yb
};
Xb.b = !0;
Xb.Pm = function () {
  try {
    var a = window.localStorage;
    a.getItem('');
    if (0 == a.length) {
      var b = '_hx_' + Math.random();
      a.setItem(b, b);
      a.removeItem(b)
    }
    return a
  } catch (c) {
    return null
  }
};
wa.b = !0;
wa.prototype = {
  L: function () {
    return this.Hm
  },
  Xa: function (a) {
    this.Hm = a;
    if (null != this.Yh) try {
      var b = this.Ur(a);
      null == b ? this.Yh.removeItem(this.w) : this.Yh.setItem(this.w, b)
    } catch (c) {
    }
  },
  f: wa
};
W.b = !0;
W.Rf = function (a) {
  for (var b = new W, c = ec.Mm(a), d = 0; d < c.length;) {
    var e = c[d];
    ++d;
    b.Yc.set(e, a[e])
  }
  return b
};
W.Hh = function (a) {
  return W.Rf(JSON.parse(a))
};
W.$j = function () {
  var a = new W;
  a.Pa('ArrowUp', 'Up');
  a.Pa('KeyW', 'Up');
  a.Pa('ArrowDown', 'Down');
  a.Pa('KeyS', 'Down');
  a.Pa('ArrowLeft', 'Left');
  a.Pa('KeyA', 'Left');
  a.Pa('ArrowRight', 'Right');
  a.Pa('KeyD', 'Right');
  a.Pa('KeyX', 'Kick');
  a.Pa('Space', 'Kick');
  a.Pa('ControlLeft', 'Kick');
  a.Pa('ControlRight', 'Kick');
  a.Pa('ShiftLeft', 'Kick');
  a.Pa('ShiftRight', 'Kick');
  a.Pa('Numpad0', 'Kick');
  return a
};
W.prototype = {
  Pa: function (a, b) {
    this.Yc.set(a, b)
  },
  L: function (a) {
    return this.Yc.get(a)
  },
  Jq: function (a) {
    this.Yc['delete'](a)
  },
  Eo: function (a) {
    for (var b = [
    ], c = this.Yc.keys(), d = c.next(); !d.done;) {
      var e = d.value,
        d = c.next();
      this.Yc.get(e) == a && b.push(e)
    }
    return b
  },
  se: function () {
    for (var a = {
    }, b = this.Yc.keys(), c = b.next(); !c.done;) {
      var d = c.value,
        c = b.next();
      a[d] = this.Yc.get(d)
    }
    return JSON.stringify(a)
  },
  f: W
};
n.b = !0;
Wb.b = !0;
Wb.prototype = {
  f: Wb
};
u.b = !0;
u.qp = function () {
  mc.ts();
  x.fj(function () {
    u.jk(u.xq)
  });
  u.hp()
};
u.hp = function () {
  var a = n.A.Gj.L();
  if (null == a) I.yo().then(function (a) {
    u.Je = a;
    n.A.Gj.Xa(a.Ir())
  })['catch'](function () {
    return {
    }
  });
  else I.xo(a).then(function (a) {
    return u.Je = a
  })['catch'](function () {
    return {
    }
  })
};
u.Bo = function () {
  var a = Xb.Pm();
  return null != a ? null != a.getItem('crappy_router') : !1
};
u.jk = function (a) {
  var b = new kb(n.A.fe.L());
  b.cl = function (b) {
    n.A.fe.Xa(b);
    n.Na.Tl();
    a()
  };
  x.La(b.g);
  // CHECKPOINT koment
  // b.Cb.focus()
};
u.kk = function (a, b) {
  var c = new Q(a);
  c.Va = b;
  x.La(c.g)
};
u.no = function (a, b) {
  function c() {
    var a = new Ka('Failed', null);
    a.Va = function () {
      u.xb()
    };
    x.La(a.g)
  }
  function d(b) {
    b = b.sitekey;
    if (null == b) throw new q(null);
    u.kk(b, function (b) {
      e(a, b)
    })
  }
  x.La((new P('Connecting', 'Connecting...', [
  ])).g);
  var e;
  e = function (a, e) {
    M.zl(n.Ee +
      'api/client', 'room=' + a + '&rcr=' + e, M.vj).then(function (a) {
        switch (a.action) {
          case 'connect':
            a = a.token;
            if (null == a) throw new q(null);
            b(a);
            break;
          case 'recaptcha':
            d(a);
            break;
          default:
            throw new q(null);
        }
      })['catch'](function () {
        c()
      })
  };
  e(a, '')
};
u.xq = function () {
  var a = Hb.L(),
    b = a.get('c'),
    c = a.get('p');
  a.get('v');
  null != b ? null != c ? u.Dh(b) : u.Pf(b) : u.xb()
};
u.xb = function () {
  var a = new Aa(n.A.Lh());
  x.La(a.Ja);
  a.Ym = function (b) {
    if (9 != b.vd.Id) {
      var c;
      9 > b.vd.Id ? (b = 'Old version room', c = 'The room is running an older version, an update must have happened recently.') : (b = 'New version', c = 'The room is running a new version of haxball, refresh the site to update.');
      var d = new P(b, c, [
        'Ok'
      ]);
      x.La(d.g);
      d.Va = function () {
        x.La(a.Ja);
        return d.Va = null
      }
    } else b.vd.Ib ? u.Dh(b.$) : u.Pf(b.$)
  };
  a.ws = function () {
    u.oo()
  };
  a.vs = function () {
    u.jk(u.xb)
  };
  a.ys = function () {
    u.mk()
  };
  a.xs = function (a) {
    u.po(a)
  }
};
u.mk = function () {
  var a = new aa(!0),
    b = window.document.createElement('div');
  b.className = 'view-wrapper';
  b.appendChild(a.g);
  x.La(b);
  a.qb = function () {
    u.xb()
  };
  a.Ep = function () {
    var a = new mb,
      b = window.document.createElement('div');
    b.className = 'view-wrapper';
    b.appendChild(a.g);
    x.La(b);
    return a.qb = function () {
      u.mk()
    }
  }
};
u.$h = function (a, b) {
  return '' + window.location.origin + '/play?c=' + a + (b ? '&p=1' : '')
};
u.oo = function () {
  var a = n.A.fe.L(),
    b = new ib('' + a + '\'s room');
  x.La(b.g);
  b.ci = function () {
    u.xb()
  };
  b.Jp = function (b) {
    function c() {
      if (!b.Ks) {
        var a = new Fb;
        a.Id = 9;
        a.w = g.jc;
        a.I = g.I.length;
        a.Xe = l.fg + 1;
        a.ub = f.ub;
        a.Ib = null != l.Ib;
        a.Ec = f.Ec;
        a.Gc = f.Gc;
        var c = w.ha(16);
        a.ga(c);
        a = c.Kg();
        l.Fi(a)
      }
    }
    x.La((new P('Tworzenie ruma', 'Connecting...', [
    ])).g);
    var e = null,
      f = n.A.Lh(),
      g = new fa;
    g.jc = b.name;
    var k = new ea;
    k.w = a;
    k.cb = !0;
    k.Kd = f.ub;
    k.Xb = n.A.sh.L();
    g.I.push(k);
    var l = new Lb({
      iceServers: n.Vf,
      ij: 'https://kpias760.github.io/haxball-replay-analyzer.github.io/pliki/host.json',
      //ij: "pliki/host.json",
      state: g,
      version: 9
    });
    //console.log(n.Ee);
    l.fg = b.qs - 1;
    l.Ib = b.password;
    c();
    var t = new ba(l),
      h = !1;
    l.ef = function (a, b) {
      u.kk(a, function (a) {
        b(a);
        x.La(t.j.g);
        return h = !0
      })
    };
    var m = window.setInterval(function () {
      var a = la.la(l);
      l.ra(a)
    }, 3000);
    l.$k = function (a) {
      null != g.na(a) && (a = Y.la(a, 'Bad actor', !1), l.ra(a))
    };
    l.Hp = function (a, b) {
      var d = b.ic();
      if (25 < d.length) throw new q('name too long');
      var e = b.ic();
      if (3 < e.length) throw new q('country too long');
      var f = b.zb();
      if (null != f && 2 < f.length) throw new q('avatar too long');
      d = oa.la(a, d, e, f);
      l.ra(d);
      c()
    };
    l.Ip = function (a) {
      null != g.na(a) && (a = Y.la(a, null, !1), l.ra(a))
    };
    l.kg = function (a) {
      e = a;
      t.Bg = u.$h(a, null != l.Ib);
      h || (h = !0, x.La(t.j.g))
    };
    t.Ih.Np = function (a, b, c, d) {
      l.to(a, b, c, d)
    };
    t.Ih.Op = function () {
      c()
    };
    t.j.de = function () {
      l.ia();
      t.ia();
      u.xb();
      window.clearInterval(m)
    };
    t.Of.Fg = function (a) {
      l.Ib = a;
      c();
      null != e && (t.Bg = u.$h(e, null != l.Ib))
    };
    t.Of.jm = function (a) {
      l.Ei(a)
    };
    t.Of.Ud = G(l, l.Ud)
  }
};
u.Dh = function (a) {
  var b = new Za;
  x.La(b.g);
  b.Va = function (b) {
    null == b ? u.xb() : u.Pf(a, b)
  }
};
u.po = function (a) {
  try {
    var __j = new Jb(new Uint8Array(a), new fa, 3); global.__jb = __j; var b = new Vb(__j);
    b.je.de = function () {
      b.ia();
      u.xb()
    };
    // console.log(b.ya.Lc.o); TUTAJ SIE POKAZUJE PRZROBIONY BUFFER POWTORKI
    setTimeout(function () {
      document.getElementById("spddown").click();
      document.getElementById("spddown").click();
      document.getElementById("spddown").click();
      document.getElementById("spddown").click();
      document.getElementById("spddown").click();
      document.getElementById("spddown").click();
      document.getElementById("reset_button").click();
      document.getElementById("play_button").click();
      //document.getElementById("spddown").click();
    }, 1000);
    keepUpdating = true;
    x.La(b.j.g)
  } catch (e) {
    var c = e instanceof q ? e.Ta : e;
    if (c instanceof Kb) a = new P('Incompatible replay version', 'The replay file is of a different version. You can open simple player, without stats', [
      'Open player',
      'Cancel'
    ]),
      x.La(a.g),
      a.Va = function (a) {
        console.log(c);
        window.top.open('https://www.haxball.com' + '/replay?v=' + c.Id, '_self')
        //0 == a ? (/*a = window.top.location,*/window.top.open('https://www.haxball.com'+'/replay?v=' + c.Id, '_self'))  : u.xb()
      };
    else {
      var d = new P('Replay error', 'Couldn\'t load the file.', [
        'Ok'
      ]);
      x.La(d.g);
      d.Va = function () {
        d.Va = null;
        // u.xb()
        $('.simple-dialog-view').animate({
          left: '150%',
        }, { duration: 700, easing: 'swing', queue: false });
        leaveReplayer();
      }
    }
  }
};
u.Pf = function (a, b, c) {
  try {
    var d = u.Bo(),
      e = new fa,
      f = w.ha();
    f.mc(n.A.fe.L());
    f.mc(n.A.Lh().ub);
    f.Db(n.A.sh.L());
    var g = n.Vf,
      k = n.Vr,
      l = f.Kg(),
      t = new xa(a, {
        iceServers: g,
        ij: k,
        state: e,
        version: 9,
        Ms: l,
        password: b,
        cn: d,
        gn: c,
        ds: u.Je
      }),
      h = new jb;
    h.ba('Connecting to master...');
    h.vh.onclick = function () {
      t.Ad = null;
      t.df = null;
      t.ia();
      u.xb()
    };
    x.La(h.g);
    var m = function (a, b) {
      var c = new Ka(a, b);
      c.Va = function () {
        u.xb()
      };
      x.La(c.g)
    },
      p = function () {
        var a = new P('Connection Failed', '', [
          'Ok'
        ]);
        a.Vd.innerHTML = '<p>Failed to connect to room host.</p><p>If this problem persists please see the <a href=\'https://github.com/haxball/haxball-issues/wiki/Connection-Issues\' target=\'_blank\'>troubleshooting guide</a>.</p>';
        a.Va = function () {
          u.xb()
        };
        x.La(a.g)
      },
      r = function () {
        var b = new ba(t);
        t.dl = function (a) {
          b.j.pe.qr((10 * t.sg.$g(0.5) | 0) / 10);
          b.j.pe.or((10 * t.sg.max() | 0) / 10);
          b.j.pe.nl.tn(a)
        };
        b.Bg = u.$h(a, !1);
        x.La(b.j.g);
        b.j.de = function () {
          t.Ad = null;
          t.ia();
          b.ia();
          u.xb()
        };
        t.Ad = function () {
          t.Ad = null;
          b.ia();
          var a = null == b.Ed ? null : b.Ed.stop();
          m(t.ek, a)
        }
      };
    t.df = function (c) {
      t.df = null;
      t.Ad = null;
      switch (c.nb) {
        case 1:
          p();
          break;
        case 2:
          switch (c.reason) {
            case 4004:
              u.no(a, function (c) {
                u.Pf(a, b, c)
              });
              break;
            case 4101:
              null == b ? u.Dh(a) : m(xa.xh(c), null);
              break;
            default:
              m(xa.xh(c), null)
          }
          break;
        default:
          m(xa.xh(c), null)
      }
    };
    t.Ad = function (a) {
      switch (a) {
        case 1:
          h.ba('Connecting to peer...');
          break;
        case 2:
          h.ba('Awaiting state...');
          break;
        case 3:
          r()
      }
    };
    t.Sp = function () {
      h.ba('Trying reverse connection...')
    }
  } catch (ic) {
    window.console.log(ic instanceof q ? ic.Ta : ic),
      c = new P('Unexpected Error', '', [
      ]),
      c.Vd.innerHTML = 'An error ocurred while attempting to join the room.<br><br>This might be caused by a browser extension, try disabling all extensions and refreshing the site.<br><br>The error has been printed to the inspector console.',
      x.La(c.g)
  }
};
x.b = !0;
x.ks = function () {
  // CHECKPOINT overwrite
  return true;
  try {
    return window.self != window.top
  } catch (a) {
    return !0
  }
};
x.Wg = function (a) {
  return new Promise(function (b, c) {
    var d = window.document.createElement('img');
    d.onload = function () {
      URL.revokeObjectURL(d.src);
      d.onload = null;
      b(d)
    };
    d.onerror = function () {
      URL.revokeObjectURL(d.src);
      c(null)
    };
    return d.src = URL.createObjectURL(new Blob([a], {
      type: 'image/png'
    }))
  })
};
x.fj = function (a) {
  x.ks() && x.es(function () {
    kc.fj();
    var b;
    null == n.A.Me.L() ? T.Fo().then(function (a) {
      n.A.Me.Xa(a)
    }, function () {
      return {
      }
    }) : b = Promise.resolve(null);
    return Promise.all([M.L('https://kpias760.github.io/haxball-replay-analyzer.github.io/pliki/res.dat', 'arraybuffer').then(function (a) {
      a = new JSZip(a);
      n.Na = new Ub(a);
      return Promise.all([n.Na.ro,
      x.Wg(a.file('images/grass.png').asArrayBuffer()).then(function (a) {
        return n.Ko = a
      }),
      x.Wg(a.file('images/concrete.png').asArrayBuffer()).then(function (a) {
        return n.Vn = a
      }),
      x.Wg(a.file('images/concrete2.png').asArrayBuffer()).then(function (a) {
        return n.Tn = a
      }),
      x.Wg(a.file('images/typing.png').asArrayBuffer()).then(function (a) {
        return n.Dm = a
      })])
    }),
      b]).then(function () {
        x.us(a)
      })
  })
};
x.es = function (a) {
  for (var b = Modernizr, c = 'canvas dataview es6collections peerconnection promises websockets'.split(' '), d = [
  ], e = 0; e < c.length;) {
    var f = c[e];
    ++e;
    b[f] || d.push(f)
  }
  0 != d.length ? (window.document.body.innerHTML = '', x.Pg = window.document.createElement('div'), window.document.body.appendChild(x.Pg), a = new Wa(d), x.La(a.g)) : a()
};
x.us = function (a) {
  // CHECKPOINT return
  // return;
  // window.document.body.innerHTML = '';
  x.Pg = window.document.createElement('div');
  window.document.body.appendChild(x.Pg);
  var b = null,
    b = function () {
      n.Na.Tl();
      window.document.removeEventListener('click', b, !0)
    };
  window.document.addEventListener('click', b, !0);
  a()
};
x.La = function (a) {
  null !=
    x.Vm && x.Vm.remove();
  null != a && (x.Pg.appendChild(a), x.Vm = a)
};
Vb.b = !0;
Vb.prototype = {
  ia: function () {
    window.document.removeEventListener('keydown', G(this, this.Bd));
    window.document.removeEventListener('keyup', G(this, this.Cd));
    window.onbeforeunload = null;
    window.cancelAnimationFrame(this.De);
    window.clearInterval(this.Gh)
  },
  bf: function () {
    this.De = window.requestAnimationFrame(G(this, this.bf));
    this.ya.C();
    this.Kc()
  },
  Kc: function () {
    this.je.C();
    var a = window.performance.now();
    1 == n.A.Fh.L() && 28.333333333333336 > a - this.$c || (this.$c = a, this.sd++, this.uf(n.A.Tb.L()), 0 < this.ya.Fd || this.j.C(this.ya))
  },
  Bd: function (a) {
    switch (a.keyCode) {
      case 27:
        var b = this.j;
        b.me(!b.Gd);
        a.preventDefault();
        break;
      case 49:
        n.A.Tb.Xa(1);
        break;
      case 50:
        n.A.Tb.Xa(2);
        break;
      case 51:
        n.A.Tb.Xa(3);
        break;
      case 52:
        n.A.Tb.Xa(0)
    }
  },
  uf: function (a) {
    var b = this.j.Fb;
    0 >= a ? (b.Gg(!0), b.Eb.kf = 1, b.Eb.xf = 0) : (b.Gg(!1), b.Eb.xf = 35, b.Eb.kf = 1 + 0.25 * (a - 1))
  },
  Cd: function () {
  },
  f: Vb
};
Fb.b = !0;
Fb.prototype = {
  Pj: function () {
    this.w = U.Qc(this.w, 40);
    this.ub = U.Qc(this.ub, 3)
  },
  ga: function (a) {
    this.Pj();
    a.Sa = !0;
    a.Ub(this.Id);
    a.Im(this.w);
    a.Im(this.ub);
    a.Wi(this.Ec);
    a.Wi(this.Gc);
    a.l(this.Ib ? 1 : 0);
    a.l(this.Xe);
    a.l(this.I);
    a.Sa = !1
  },
  ja: function (a) {
    a.Sa = !0;
    this.Id = a.Ob();
    this.w = a.El();
    this.ub = a.El();
    this.Ec = a.mi();
    this.Gc = a.mi();
    this.Ib = 0 != a.B();
    this.Xe = a.B();
    this.I = a.B();
    a.Sa = !1;
    if (30 < this.I || 30 < this.Xe) throw new q(null);
    this.Pj()
  },
  f: Fb
};
va.b = !0;
va.parse = function (a) {
  a.B();
  for (var b = [
  ]; 0 != a.o.byteLength - a.a;) {
    var c = a.ie(a.Ob()),
      d = a.Cl(a.Ob());
    try {
      var e = new Fb;
      e.ja(new F(new DataView(d), !1));
      var f = new Wb;
      f.vd = e;
      f.$ = c;
      b.push(f)
    } catch (g) {
    }
  }
  return b
};
va.js = function (a, b, c, d) {
  return Math.acos(Math.sin(a) * Math.sin(c) + Math.cos(a) * Math.cos(c) * Math.cos(b - d))
};
va.Hs = function (a, b) {
  for (var c = a.Ec, d = a.Gc, e = 0; e < b.length;) {
    var f = b[e];
    ++e;
    var g = f.vd;
    f.Le = 6378 * va.js(0.017453292519943295 * g.Ec, 0.017453292519943295 * g.Gc, 0.017453292519943295 * c, 0.017453292519943295 * d);
    isFinite(f.Le) || (f.Le = 22000)
  }
};
va.get = function () {
  return M.L(/*n.Ee + */'https://kpias760.github.io/haxball-replay-analyzer.github.io/pliki/geo.json', 'arraybuffer').then(function (a) {
    return va.parse(new F(new DataView(a), !1))
  })
};
Z.b = !0;
Z['delete'] = function (a) {
  return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (b, c) {
    var d = window.indexedDB.open('stadiums', 1);
    d.onblocked = d.onerror = c;
    d.onupgradeneeded = function (a) {
      var b = d.result;
      b.onerror = c;
      1 > a.oldVersion && (b.createObjectStore('files', {
        autoIncrement: !0
      }), b.createObjectStore('meta', {
        keyPath: 'id'
      }))
    };
    d.onsuccess = function () {
      var e = d.result;
      e.onerror = c;
      var f = e.transaction(['meta',
        'files'], 'readwrite');
      f.onerror = f.onabort = function (a) {
        c(a);
        e.close()
      };
      f.oncomplete = function () {
        b(0);
        e.close()
      };
      f.objectStore('files')['delete'](a);
      f.objectStore('meta')['delete'](a)
    }
  })
};
Z.get = function (a) {
  return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (b, c) {
    var d = window.indexedDB.open('stadiums', 1);
    d.onblocked = d.onerror = c;
    d.onupgradeneeded = function (a) {
      var b = d.result;
      b.onerror = c;
      1 > a.oldVersion && (b.createObjectStore('files', {
        autoIncrement: !0
      }), b.createObjectStore('meta', {
        keyPath: 'id'
      }))
    };
    d.onsuccess = function () {
      var e = d.result;
      e.onerror = c;
      var f = e.transaction(['files']);
      f.onerror = f.onabort = function (a) {
        c(a);
        e.close()
      };
      f.oncomplete = function () {
        e.close()
      };
      zb.eh(f.objectStore('files').get(a)).then(function (a) {
        try {
          var d = new h;
          d.Lk(a);
          b(d)
        } catch (l) {
          c(l instanceof q ? l.Ta : l)
        }
      }, c)
    }
  })
};
Z.getAll = function () {
  return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (a, b) {
    var c = window.indexedDB.open('stadiums', 1);
    c.onblocked = c.onerror = b;
    c.onupgradeneeded = function (a) {
      var d = c.result;
      d.onerror = b;
      1 > a.oldVersion && (d.createObjectStore('files', {
        autoIncrement: !0
      }), d.createObjectStore('meta', {
        keyPath: 'id'
      }))
    };
    c.onsuccess = function () {
      var d = c.result;
      d.onerror = b;
      var e = d.transaction(['meta']);
      e.onerror = e.onabort = function (a) {
        b(a);
        d.close()
      };
      e.oncomplete = function () {
        d.close()
      };
      zb.eh(e.objectStore('meta').getAll()).then(a, b)
    }
  })
};
Z.Es = function () {
  var a = window.navigator.storage;
  if (null == a || null == a.persist) return Promise.resolve(!1);
  try {
    return a.persisted().then(function (b) {
      return b ? !0 : a.persist()
    })['catch'](function () {
      return !1
    })
  } catch (b) {
    return Promise.resolve(!1)
  }
};
Z.add = function (a) {
  return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (b, c) {
    var d = window.indexedDB.open('stadiums', 1);
    d.onblocked = d.onerror = c;
    d.onupgradeneeded = function (a) {
      var b = d.result;
      b.onerror = c;
      1 > a.oldVersion && (b.createObjectStore('files', {
        autoIncrement: !0
      }), b.createObjectStore('meta', {
        keyPath: 'id'
      }))
    };
    d.onsuccess = function () {
      var e = d.result;
      e.onerror = c;
      var f = e.transaction(['files',
        'meta'], 'readwrite');
      f.onerror = f.onabort = function (a) {
        c(a);
        e.close()
      };
      f.oncomplete = function () {
        b(0);
        e.close()
      };
      try {
        zb.eh(f.objectStore('files').add(a.se())).then(function (b) {
          b = {
            name: a.w,
            id: b
          };
          return zb.eh(f.objectStore('meta').add(b))
        })['catch'](c)
      } catch (g) {
        c(0)
      }
    }
  })
};
Ub.b = !0;
Ub.prototype = {
  Tl: function () {
    this.c.resume()
  },
  cd: function (a) {
    var b = this.c.createBufferSource();
    b.buffer = a;
    b.connect(this.ag);
    if (playSounds) b.start()
  },
  im: function (a) {
    this.ag.gain.value = a
  },
  f: Ub
};
Tb.b = !0;
Tb.prototype = {
  update: function () {
    var a = window.performance.now(),
      b = a - this.Um;
    this.Um = a;
    this.ve += (this.dh - this.ve) * this.Js;
    this.Ef -= b;
    0 >= this.Ef && (this.Ef = this.dh = 0);
    0 >= this.dh && 0.05 > this.ve && (window.clearInterval(this.gh), this.gh = null, this.ve = 0);
    this.Tg.gain.value = n.A.nm.L() ? this.ve : 0
  },
  qj: function (a) {
    var b = this;
    this.dh = a;
    this.Ef = 166.66666666666666;
    null == this.gh && (this.gh = window.setInterval(function () {
      b.update()
    }, 17), this.Um = window.performance.now())
  },
  connect: function (a) {
    this.Tg.connect(a)
  },
  Ls: function (a) {
    var b = a.K;
    if (null != b) if (2 == b.Bb) 0 >= b.Oa && this.qj(1);
    else if (1 == b.Bb) {
      var c = b.ta.F[0],
        d = null,
        e = null,
        f = null,
        g = 0,
        k = null,
        l = null,
        t = null,
        h = 0,
        m = p.fa.Ch,
        n = 0;
      for (a = a.I; n < a.length;) {
        var q = a[n];
        ++n;
        if (null != q.H) {
          var r = q.H.a,
            v = c.a,
            u = r.x - v.x,
            r = r.y - v.y,
            u = u * u + r * r;
          if (q.ea == p.fa) {
            if (null == d || d.a.x * m < q.H.a.x * m) d = q.H;
            if (null == e || e.a.x * m > q.H.a.x * m) e = q.H;
            if (null == f || u < g) f = q.H,
              g = u
          } else if (q.ea == p.xa) {
            if (null == k || k.a.x * m < q.H.a.x * m) k = q.H;
            if (null == l || l.a.x * m > q.H.a.x * m) l = q.H;
            if (null == t || u < h) t = q.H,
              h = u
          }
        }
      }
      null != l && null != e && 0 >= b.Oa && (f.a.x > l.a.x && c.a.x > l.a.x && 20 < c.a.x && this.qj(0.3), t.a.x < e.a.x && c.a.x < e.a.x && - 20 > c.a.x && this.qj(0.3))
    }
  },
  f: Tb
};
ua.b = !0;
ua.prototype = {
  ga: function (a) {
    var b = this.a;
    a.s(b.x);
    a.s(b.y);
    b = this.D;
    a.s(b.x);
    a.s(b.y);
    b = this.oa;
    a.s(b.x);
    a.s(b.y);
    a.s(this.Z);
    a.s(this.m);
    a.s(this.aa);
    a.s(this.Ca);
    a.tb(this.R);
    a.O(this.h);
    a.O(this.v)
  },
  ja: function (a) {
    var b = this.a;
    b.x = a.u();
    b.y = a.u();
    b = this.D;
    b.x = a.u();
    b.y = a.u();
    b = this.oa;
    b.x = a.u();
    b.y = a.u();
    this.Z = a.u();
    this.m = a.u();
    this.aa = a.u();
    this.Ca = a.u();
    this.R = a.hb();
    this.h = a.M();
    this.v = a.M()
  },
  rp: function () {
    var a = new ca;
    this.Bk(a);
    return a
  },
  Bk: function (a) {
    var b = a.a,
      c = this.a;
    b.x = c.x;
    b.y = c.y;
    b = a.D;
    c = this.D;
    b.x = c.x;
    b.y = c.y;
    b = a.oa;
    c = this.oa;
    b.x = c.x;
    b.y = c.y;
    a.Z = this.Z;
    a.m = this.m;
    a.aa = this.aa;
    a.Ca = this.Ca;
    a.R = this.R;
    a.h = this.h;
    a.v = this.v
  },
  f: ua
};
O.b = !0;
O.Rd = [
  Ta
];
O.qd = function (a, b) {
  a.Ma = b.Ma.sc();
  a.ib = b.ib;
  a.Da = b.Da;
  a.ta = b.ta.sc();
  a.vc = b.vc;
  a.Bb = b.Bb;
  a.Pb = b.Pb;
  a.Kb = b.Kb;
  a.Hc = b.Hc;
  a.Oa = b.Oa;
  a.S = b.S;
  a.ae = b.ae
};
O.prototype = {
  Wo: function (a) {
    this.Ma = a;
    this.ib = a.ib;
    this.Da = a.Da;
    this.S = a.S;
    this.ta.J = this.S.J;
    this.ta.qa = this.S.qa;
    this.ta.U = this.S.U;
    this.ta.pb = this.S.pb;
    a = 0;
    for (var b = this.S.F; a < b.length;) this.ta.F.push(b[a++].rp());
    this.Gk()
  },
  Ck: function (a) {
    if (a.ea == p.Ia) a.H = null;
    else {
      a.ob = 0;
      var b = a.H;
      null == b && (b = new ca, a.H = b, this.ta.F.push(b));
      var c = this.S.ge;
      b.R = 0;
      b.Z = c.Z;
      b.aa = c.aa;
      b.Ca = c.Ca;
      b.m = c.m;
      b.h = 39;
      b.v = a.ea.v | c.v;
      var d = a.ea == p.fa ? this.S.Dd : this.S.md;
      0 == d.length ? (b.a.x = a.ea.Ch * this.S.$b, b.a.y = 0) : (a = b.a, d = d[d.length - 1], a.x = d.x, a.y = d.y);
      d = b.D;
      d.x = 0;
      d.y = 0;
      b = b.oa;
      c = c.oa;
      b.x = c.x;
      b.y = c.y
    }
  },
  C: function (a) {
    if (0 < this.Oa) 120 > this.Oa && this.Oa--;
    else {
      var b = this.Ma.Os;
      null != b && b();
      if (updatePlayers && keepUpdating) {
        let li = this.Ma.I;
        // console.log("chyba lista graczy", li);
        players = players.concat(li);
        for (var i = 0; i < li.length; i++) {
          if (!playerList.includes(li[i].w)) {
            playerList.push(li[i].w);
            // console.log('dodałem', li[i].w);
            match[match.length - 1].player.push({
              id: li[i].V,
              nick: li[i].w,
              nation: li[i].Kd,
              goals: 0,
              assists: 0,
              kicks: 0
            });
          }
        }
        updatePlayers = false;
      }
      for (var b = this.Ma.I, c = 0; c < b.length;) {
        var d = b[c];
        ++c;
        if (null != d.H) {
          0 == (d.ob & 16) && (d.Wb = !1);
          var e = this.S.ge;
          0 < d.Sc && d.Sc--;
          d.yc < this.Ma.ce && d.yc++;
          if (d.Wb && 0 >= d.Sc && 0 <= d.yc) {
            // console.log("iksnął", d.w, d.Wb, d.Sc, d.yc);
            for (var f = !1, g = 0, k = this.ta.F; g < k.length;) {
              var l = k[g];
              ++g;
              if (0 != (l.v & 64) && l != d.H) {
                var t = l.a,
                  h = d.H.a,
                  m = t.x - h.x,
                  t = t.y - h.y,
                  h = Math.sqrt(m * m + t * t);
                if (4 > h - l.Z - d.H.Z) {
                  //console.log("pileczka",l.a.x,l.a.y); TU KORDY PILKI
                  let ball = { x: l.a.x, y: l.a.y };
                  var f = m / h,
                    m = t / h,
                    t = e.Re,
                    n = h = l.D,
                    l = l.aa;
                  h.x = n.x + f * t * l;
                  h.y = n.y + m * t * l;
                  //console.log("wektor piłki",h.x,h.y,e); TU WEKTOR PO STRZALE
                  ball.vx = h.x;
                  ball.vy = h.y;
                  n = d.H;
                  l = - e.Se;
                  h = t = n.D;
                  n = n.aa;
                  t.x = h.x + f * l * n;
                  t.y = h.y + m * l * n;//checkpoint kick
                  //console.log(t.x,t.y);
                  //console.log("kopnięcie chyba",d);//,d.w,d.ea.w);
                  //console.log(ball);
                  let rA = ball.vy / ball.vx;
                  let rB = 1;
                  let rC = ball.y - (ball.vy / ball.vx) * ball.x;
                  if (keepUpdating) {
                    if (d.ea.w == "Red" && ball.vx > 0 && 99.762 * ball.vx + ball.x > blueGoalCord[0] && ball.x < blueGoalCord[0]) {
                      let poz = rA * blueGoalCord[0] + rC;
                      if (poz > blueGoalCord[1] && poz < blueGoalCord[2]) {
                        //console.log("Celny strzał "+d.w);
                        match[match.length - 1].shots.push({
                          player: d.w,
                          from: {
                            x: ball.x,
                            y: ball.y
                          },
                          to: {
                            x: blueGoalCord[0],
                            y: poz
                          }
                        });
                        match[match.length - 1].shotsRed++;
                      }
                    } else if (d.ea.w == "Blue" && ball.vx < 0 && 99.762 * ball.vx + ball.x < redGoalCord[0] && ball.x > redGoalCord[0]) {
                      let poz = rA * redGoalCord[0] + rC;
                      if (poz > redGoalCord[1] && poz < redGoalCord[2]) {
                        //console.log("Celny strzał"+d.w);
                        match[match.length - 1].shots.push({
                          player: d.w,
                          from: {
                            x: ball.x,
                            y: ball.y
                          },
                          to: {
                            x: redGoalCord[0],
                            y: poz
                          }
                        });
                        match[match.length - 1].shotsBlue++;
                      }
                    }
                    if (d.ea.w == "Red") match[match.length - 1].kicksRed++;
                    else match[match.length - 1].kicksBlue++;
                    //console.log("sprawdzenie czasu po kopnięciu",this.Hc)
                    //console.log("UWAGA",match,playerList)
                    match[match.length - 1].kicks.push({
                      player: d.w,
                      x: ball.x,
                      y: ball.y
                    });
                    pileczka.push(/*[k[0].D,k[0].a]*/[t, l]);
                    //console.log("sprawdzenie czegoś tam",k[0].D,k[0].a);
                    if (match[match.length - 1].spaceMode) {
                      match[match.length - 1].touches.push(d.w);
                      if (toucher.name != undefined && d.w != toucher.name) {
                        lastToucher = toucher;
                        if (lastToucher.team == d.ea.w) {
                          //console.log("Podanie ",lastKicker.name+" do "+d.w);
                          match[match.length - 1].passes.push(lastToucher.name);
                          if (lastToucher.team == "Red") match[match.length - 1].passesRed++;
                          else match[match.length - 1].passesBlue++;
                        }
                        //console.log("tacz",d.w);
                      }
                      toucher = {
                        name: d.w,
                        team: d.ea.w
                      };
                    } else {
                      if (kicker != undefined && d.w != kicker.name) {
                        lastKicker = kicker;
                        if (lastKicker.team == d.ea.w) {
                          //console.log("Podanie ",lastKicker.name+" do "+d.w);
                          match[match.length - 1].passes.push({
                            player: lastKicker.name,
                            shot: ball,
                            lastShot: match[match.length - 1].kicks[match[match.length - 1].kicks.length - 2]
                          });
                          if (lastKicker.team == "Red") match[match.length - 1].passesRed++;
                          else match[match.length - 1].passesBlue++;
                        }
                      }
                      kicker = {
                        name: d.w,
                        team: d.ea.w
                      };
                    }
                  }
                  //console.log("chyba pozycja piłki (jednak nie)",h,l,d,f,t,n);
                  f = !0
                }
              }
            }
            //console.log("chyba ruch",d.w, d.H.D.x, d.H.D.y);
            //console.log("chyba iksuje", d.w, d.Sc, d.cb);
            f && (null != this.Ma.ji && this.Ma.ji(d), d.Wb = !1, d.Sc = this.Ma.yd, d.yc -= this.Ma.Zc)
          }
          f = d.ob;
          k = g = 0;
          0 != (f & 1) && --k;
          0 != (f & 2) && ++k;
          0 != (f & 4) && --g;
          0 != (f & 8) && ++g;
          0 != g && 0 != k && (f = Math.sqrt(g * g + k * k), g /= f, k /= f);
          f = d.H.D;
          l = d.Wb ? e.Te : e.Ce;
          f.x += g * l;
          f.y += k * l;
          d.H.Ca = d.Wb ? e.Ue : e.Ca
        }
      }
      c = 0;
      d = this.ta.F;
      e = 0;
      for (g = d.length; e < g;) f = e++,
        k = d[f],
        0 != (k.v & 128) && (O.dk[c] = f, f = O.Yk[c], k = k.a, f.x = k.x, f.y = k.y, ++c);
      this.ta.C(a);
      if (0 == this.Bb) {
        for (a = 0; a < b.length;) c = b[a],
          ++a,
          null != c.H && (c.H.h = 39 | this.ae.cp);
        b = this.ta.F[0].D;
        0 < b.x * b.x + b.y * b.y && (this.Bb = 1)
      } else if (1 == this.Bb) {
        this.Hc +=
          0.016666666666666666;
        if (!match[match.length - 1].stadium) {
          //console.log(a.S);//cały czas wyyświetlany stadion checkpoint
          // console.log('stadion', match, p.fa, this.S);
          // console.log(this.S)
          var st = this.S;
          // console.log(h.qg.toString())
          function getColor(x) {
            if (x < 0) return 'transparent'
            else if (x == 0) return '000000'
            else {
              for (
                var c = "";
                (c = "0123456789ABCDEF".charAt(x & 15) + c), (x >>>= 4), 0 < x;

              );
              // if (null != b) for (; c.length < b; ) c = "0" + c;
              return c;
            }
          }
          function getCMask(x) {
            if (63 == x) return ["all"];
            var b = [];
            0 != (x & 2) && b.push("red");
            0 != (x & 4) && b.push("blue");
            0 != (x & 1) && b.push("ball");
            0 != (x & 8) && b.push("redKO");
            0 != (x & 16) && b.push("blueKO");
            0 != (x & 32) && b.push("wall");
            0 != (x & 64) && b.push("kick");
            0 != (x & 128) && b.push("score");
            0 != (x & 268435456) && b.push("c0");
            0 != (x & 536870912) && b.push("c1");
            0 != (x & 1073741824) && b.push("c2");
            0 != (x & -2147483648) && b.push("c3");
            return b;
          }
          match[match.length - 1].stadium = {
            name: st.w,
            height: st.qc,
            width: st.$b,
            maxViewWidth: st.Ye,
            cameraFollow: (st.Ge == 1 ? 'player' : 'ball'),
            spawnDistance: st.kc,
            kickOffReset: (st.pf ? 'full' : 'partial'),
            bg: {
              type: (st.ld == 1 ? 'grass' : (st.ld == 2 ? 'hockey' : 'none')),
              width: st.Td,
              height: st.Sd,
              kickOffRadius: st.kd,
              cornerRadius: st.Uc,
              color: getColor(st.jd),
              goalLine: st.Fe
            },
            canBeStored: st.Lf,
            redSpawnPoints: st.Dd.map((a) => ([a.x, a.y])),
            blueSpawnPoints: st.md.map((a) => ([a.x, a.y])),
            playerPhysics: {
              bCoef: st.ge.m,
              invMass: st.ge.aa,
              damping: st.ge.Ca,
              acceleration: st.ge.Ce,
              kickingAcceleration: st.ge.Te,
              kickingDamping: st.ge.Ue,
              kickStrength: st.ge.Re,
              cGroup: getCMask(st.ge.v),
              gravity: [st.ge.oa.x, st.ge.oa.y],
              radius: st.ge.Z,
              kickback: st.ge.Se
            },
            segments: st.U.map((a) => ({
              v0: a.W.ud,
              v1: a.ca.ud,
              bias: a.Cc,
              bCoef: a.m,
              curve: (0 != 0 * a.vb ? 0 : Math.abs(114.59155902616465 * Math.atan(1 / a.vb))),
              vis: a.Za,
              cMask: getCMask(a.h),
              cGroup: getCMask(a.v),
              color: getColor(a.R)
            })),
            vertexes: st.J.map((a) => ({
              x: a.a.x,
              y: a.a.y,
              bCoef: a.m,
              cMask: getCMask(a.h),
              cGroup: getCMask(a.v)
            })),
            goals: st.tc.map((a) => ({
              p0: [a.W.x, a.W.y],
              p1: [a.ca.x, a.ca.y],
              team: (a.qe == p.fa ? "red" : "blue")
            })),
            planes: st.qa.map((a) => ({
              normal: [a.wa.x, a.wa.y],
              dist: a.Ua,
              bCoef: a.m,
              cMask: getCMask(a.h),
              cGroup: getCMask(a.v)
            })),
            discs: st.F.map((a) => ({
              pos: [a.a.x, a.a.y],
              speed: [a.D.x, a.D.y],
              gravity: [a.oa.x, a.oa.y],
              radius: a.Z,
              bCoef: a.m,
              invMass: a.aa,
              damping: a.Ca,
              color: getColor(a.R),
              cMask: getCMask(a.h),
              cGroup: getCMask(a.v)
            })),
            joints: st.pb.map((a) => ({
              d0: a.Yd,
              d1: a.Zd,
              length: a.Hb >= a.ec ? a.Hb : [a.Hb, a.ec],
              color: getColor(a.R),
              strength: a.ne == Infinity ? 'rigid' : a.ne
            }))
          }

          match[match.length - 1].stadium.ballPhysics = match[match.length - 1].stadium.discs.splice(0, 1)[0];
          delete match[match.length - 1].stadium.ballPhysics.pos;
          if (match[match.length - 1].stadium.bg.type != 'grass' && match[match.length - 1].stadium.bg.color == '718C5A') {
            delete match[match.length - 1].stadium.bg.color;
          }
          var segments = match[match.length - 1].stadium.segments;
          var trueSegments = st.U;
          var vertexes = match[match.length - 1].stadium.vertexes;
          for (var i = 0; i < segments.length; i++) {
            // console.log('in', segments[i])
            if (segments[i].v0 == 0 && segments[i].v1 == 0) {
              for (var j = 0; j < vertexes.length; j++) {
                if (vertexes[j].x == trueSegments[i].W.a.x && vertexes[j].y == trueSegments[i].W.a.y) segments[i].v0 = j;
                else if (vertexes[j].x == trueSegments[i].ca.a.x && vertexes[j].y == trueSegments[i].ca.a.y) segments[i].v1 = j;
                if (segments[i].v0 != 0 && segments[i].v1 != 0) break;
              }
            }
            // console.log('out', segments[i])
          }
          if (this.S.tc.length < 2) {
            return;
          }
          var std = this.S.tc[0];
          ballRadius = this.S.F[0].Z;
          if (this.S.ge.m > 1) {
            match[match.length - 1].spaceMode = true;
            match[match.length - 1].bumps = [];
          }
          else match[match.length - 1].spaceMode = false;
          if (st.w.toLowerCase().includes('real soccer') | st.w.toLowerCase().includes('realsoccer')) match[match.length - 1].realSoccerMode = true;
          if (st.ld === 1 & st.Td > 700 & st.Sd > 400 & (st.w.includes("RS") | st.w.toLowerCase().includes('soccer'))) match[match.length - 1].realSoccerMode = true;

          if (std.qe.w == "Red") redGoalCord = [std.W.x, std.W.y, std.ca.y];
          else blueGoalCord = [std.W.x, std.W.y, std.ca.y];

          std = this.S.tc[1];
          if (std.qe.w == "Red") redGoalCord = [std.W.x, std.ca.y, std.W.y];
          else blueGoalCord = [std.W.x, std.W.y, std.ca.y];
          if (redGoalCord[2] < redGoalCord[1]) {
            redGoalCord.push(redGoalCord[1]);
            redGoalCord.splice(1, 1);
          }
          if (blueGoalCord[2] < blueGoalCord[1]) {
            blueGoalCord.push(blueGoalCord[1]);
            blueGoalCord.splice(1, 1);
          }
        }
        //console.log("coś",this.Hc);//checkpoint every tick
        //if (Math.random()<0.01) console.log(b); // gracze są na v==4 i v==2 (redblue)
        if (keepUpdating) {
          //if (Math.random() < 0.002) console.log(a,b);
          match[match.length - 1].gameTicks++;
          { const _gt = match[match.length - 1].gameTicks; if (_gt === 0 || _gt === 60 || _gt === 600) { try { const _T = global.__jb.T, _k = (_T.gc && _T.gc.kb) || _T.kb, _c = t => t ? { hd: t.hd, ed: t.ed, fb: (t.fb || []).slice(0, 3) } : null; match[match.length - 1].uni = [_c(_k[1]), _c(_k[2])]; } catch (_e) { } } }
          if (d[0].a.x < (redGoalCord[0] / 3)) match[match.length - 1].thirds[0]++;
          else if (d[0].a.x < (blueGoalCord[0] / 3)) match[match.length - 1].thirds[1]++;
          else match[match.length - 1].thirds[2]++;
          if (match.length > playerPos.length) playerPos.push([]);
          for (var i = 0; i < b.length; i++) {
            if (playerPos[match.length - 1][playerList.indexOf(b[i].w)] == undefined) playerPos[match.length - 1][playerList.indexOf(b[i].w)] = [];
            if (b[i].H != null) playerPos[match.length - 1][playerList.indexOf(b[i].w)].push({ x: b[i].H.a.x, y: b[i].H.a.y });
          }
          if (match[match.length - 1].spaceMode) {
            for (var i = 0; i < b.length; i++) {
              if (b[i].H == null) continue;
              if (distanceBetween(b[i].H.a, d[0].a) < (15 + ballRadius + 0.0001)) {
                //console.log("touch",b[i]);// checkpoint teraz
                if (toucher.name != b[i].w) {
                  lastToucher = toucher;
                  toucher = { name: b[i].w, team: b[i].ea.w };
                  match[match.length - 1].touches.push(b[i].w);
                }
              }
              for (var j = i + 1; j < b.length; j++) {
                if (b[j].H == null) continue;
                //if (Math.random()<0.01) console.log(distanceBetween(b[i].H.a,b[j].H.a));
                if (distanceBetween(b[i].H.a, b[j].H.a) < 30.0001) match[match.length - 1].bumps.push(b[i].w, b[j].w);
                //if (distanceBetween(b[i].H.a,b[j].H.a) < 30.0001) console.log("bump ",b[i].w, b[j].w, distanceBetween(b[i].H.a,b[j].H.a));
              }
            }
          }
        }
        if (checkTeams && keepUpdating) {
          for (var i = 0; i < b.length; i++) {
            if (b[i].ea.w == "Red" && !match[match.length - 1].redTeam.includes(b[i].w)) match[match.length - 1].redTeam.push(b[i].w);
            else if (b[i].ea.w == "Blue" && !match[match.length - 1].blueTeam.includes(b[i].w)) match[match.length - 1].blueTeam.push(b[i].w);
          }
          checkTeams = false;
        }
        if (match[match.length - 1].spaceMode && keepUpdating) {
          if (toucher.team == "Red") match[match.length - 1].possRed++;
          else if (toucher.team == "Blue") match[match.length - 1].possBlue++;
        } else if (kicker != undefined && keepUpdating) {
          if (kicker.team == "Red") match[match.length - 1].possRed++;
          else match[match.length - 1].possBlue++;
        }
        for (a = 0; a < b.length;) d = b[a],
          ++a,
          null != d.H && (d.H.h = 39);
        d = p.Ia;
        b = this.ta.F;
        for (a = 0; a < c && (d = a++, d = this.S.Kn(b[O.dk[d]].a, O.Yk[d]), d == p.Ia););
        //if(d!=p.Ia) //console.log(this.Ma.Pi);//console.log("coś tu chyba gol",a,b,c,d,e,f,g,h,i,k);//k.a = piłka
        d != p.Ia ? (this.Bb = 2, this.vc = 150, this.ae = d, d == p.fa ? this.Kb++ : this.Pb++, null != this.Ma.Ni && this.Ma.Ni(d.pg), null != this.Ma.Ol && this.Ma.Ol(d.$)) : 0 < this.Da && this.Hc >= 60 * this.Da && this.Pb != this.Kb && (null != this.Ma.Pi && this.Ma.Pi(), this.um())
      } else if (2 == this.Bb) this.vc--,
        0 >= this.vc && (0 < this.ib && (this.Pb >= this.ib || this.Kb >= this.ib) || 0 < this.Da && this.Hc >= 60 * this.Da && this.Pb != this.Kb ? this.um() : (this.Gk(), null != this.Ma.lq && this.Ma.lq()));
      else if (3 == this.Bb && (this.vc--, 0 >= this.vc && (b = this.Ma, null != b.K))) {
        b.K = null;
        a = 0;
        for (c = b.I; a < c.length;) d = c[a],
          ++a,
          d.H = null,
          d.Jb = 0;
        null != b.vf && b.vf(null)
      }
    }
  },
  um: function () {
    this.vc = 300;
    this.Bb = 3;
    //console.log("Chyba koniec meczu", match);
    null != this.Ma.Oi && this.Ma.Oi(this.Pb > this.Kb ? p.fa : p.xa)
  },
  Gk: function () {
    var a = this.Ma.I;
    this.Bb = 0;
    for (var b = this.S.F, c = this.ta.F, d = 0, e = this.S.pf ? b.length : 1; d < e;) {
      var f = d++;
      b[f].Bk(c[f])
    }
    b = [
      0,
      0,
      0
    ];
    for (c = 0; c < a.length;) if (d = a[c], ++c, this.Ck(d), e = d.ea, e != p.Ia) {
      var f = d.H.a,
        g = this.S,
        k = b[e.$],
        l = e == p.fa ? g.Dd : g.md;
      0 == l.length ? (l = k + 1 >> 1, 0 == (k & 1) && (l = - l), g = g.kc * e.Ch, k = 55 * l) : (k >= l.length && (k = l.length - 1), k = l[k], g = k.x, k = k.y);
      f.x = g;
      f.y = k;
      b[e.$]++;
      d.Jb = b[e.$]
    }
  },
  ga: function (a) {
    this.ta.ga(a);
    a.O(this.vc);
    a.O(this.Bb);
    a.O(this.Pb);
    a.O(this.Kb);
    a.s(this.Hc);
    a.O(this.Oa);
    a.l(this.ae.$)
  },
  ja: function (a, b) {
    this.ta.ja(a);
    this.vc = a.M();
    this.Bb = a.M();
    this.Pb = a.M();
    this.Kb = a.M();
    this.Hc = a.u();
    this.Oa = a.M();
    var c = a.lf();
    this.ae = 1 == c ? p.fa : 2 == c ? p.xa : p.Ia;
    this.Ma = b;
    this.ib = b.ib;
    this.Da = b.Da;
    this.S = b.S;
    this.ta.J = this.S.J;
    this.ta.U = this.S.U;
    this.ta.qa = this.S.qa;
    this.ta.pb = this.S.pb
  },
  sc: function () {
    var a = ya.zc,
      b = this.gc;
    this.hc != a && (null == b && (this.gc = b = new O), this.hc = a, O.qd(b, this));
    return b
  },
  f: O
};
sb.b = !0;
sb.prototype = {
  ga: function (a) {
    var b = this.W;
    a.s(b.x);
    a.s(b.y);
    b = this.ca;
    a.s(b.x);
    a.s(b.y);
    a.l(this.qe.$)
  },
  ja: function (a) {
    var b = this.W;
    b.x = a.u();
    b.y = a.u();
    b = this.ca;
    b.x = a.u();
    b.y = a.u();
    a = a.lf();
    this.qe = 1 == a ? p.fa : 2 == a ? p.xa : p.Ia
  },
  f: sb
};
Eb.b = !0;
Eb.prototype = {
  ga: function (a) {
    a.s(this.m);
    a.s(this.aa);
    a.s(this.Ca);
    a.s(this.Ce);
    a.s(this.Te);
    a.s(this.Ue);
    a.s(this.Re);
    var b = this.oa;
    a.s(b.x);
    a.s(b.y);
    a.O(this.v);
    a.s(this.Z);
    a.s(this.Se)
  },
  ja: function (a) {
    this.m = a.u();
    this.aa = a.u();
    this.Ca = a.u();
    this.Ce = a.u();
    this.Te = a.u();
    this.Ue = a.u();
    this.Re = a.u();
    var b = this.oa;
    b.x = a.u();
    b.y = a.u();
    this.v = a.M();
    this.Z = a.u();
    this.Se = a.u()
  },
  f: Eb
};
Bb.b = !0;
Bb.prototype = {
  f: Bb
};
h.b = !0;
h.ja = function (a) {
  var b = a.B();
  return 255 == b ? (b = new h, b.Kr(a), b) : h.Kh()[b]
};
h.Kh = function () {
  if (null == h.wb) {
    h.wb = [
    ];
    var a = new h;
    a.ad('Classic', 420, 200, 370, 170, 64, 75);
    h.wb.push(a);
    a = new h;
    a.ad('Easy', 420, 200, 370, 170, 90, 75);
    h.wb.push(a);
    a = new h;
    a.ad('Small', 420, 200, 320, 130, 55, 70);
    h.wb.push(a);
    a = new h;
    a.ad('Big', 600, 270, 550, 240, 80, 80);
    h.wb.push(a);
    a = new h;
    a.ad('Rounded', 420, 200, 370, 170, 64, 75, 75);
    h.wb.push(a);
    a = new h;
    a.Qk('Hockey', 420, 204, 398, 182, 68, 120, 75, 100);
    h.wb.push(a);
    a = new h;
    a.Qk('Big Hockey', 600, 270, 550, 240, 90, 160, 75, 150);
    h.wb.push(a);
    a = new h;
    a.ad('Big Easy', 600, 270, 550, 240, 95, 80);
    h.wb.push(a);
    a = new h;
    a.ad('Big Rounded', 600, 270, 550, 240, 80, 75, 100);
    h.wb.push(a);
    a = new h;
    a.ad('Huge', 750, 350, 700, 320, 100, 80);
    h.wb.push(a);
    for (var a = 0, b = h.wb.length; a < b;) {
      var c = a++;
      h.wb[c].Bh = c
    }
  }
  return h.wb
};
h.wn = function (a, b) {
  if (null != a.trait) {
    var c = b[r.G(a.trait, String)];
    if (null != c) for (var d = 0, e = ec.Mm(c); d < e.length;) {
      var f = e[d];
      ++d;
      null == a[f] && (a[f] = c[f])
    }
  }
};
h.Dn = function (a) {
  if (63 == a) return ['all'];
  var b = [
  ];
  0 != (a & 2) && b.push('red');
  0 != (a & 4) && b.push('blue');
  0 != (a & 1) && b.push('ball');
  0 != (a & 8) && b.push('redKO');
  0 != (a & 16) && b.push('blueKO');
  0 != (a & 32) && b.push('wall');
  0 != (a & 64) && b.push('kick');
  0 != (a & 128) && b.push('score');
  0 != (a & 268435456) && b.push('c0');
  0 != (a & 536870912) && b.push('c1');
  0 != (a & 1073741824) && b.push('c2');
  0 != (a & - 2147483648) && b.push('c3');
  return b
};
h.Fc = function (a) {
  a = r.G(a, Array);
  for (var b = 0, c = 0; c < a.length;) switch (a[c++]) {
    case 'all':
      b |= 63;
      break;
    case 'ball':
      b |= 1;
      break;
    case 'blue':
      b |= 4;
      break;
    case 'blueKO':
      b |= 16;
      break;
    case 'c0':
      b |= 268435456;
      break;
    case 'c1':
      b |= 536870912;
      break;
    case 'c2':
      b |= 1073741824;
      break;
    case 'c3':
      b |= - 2147483648;
      break;
    case 'kick':
      b |= 64;
      break;
    case 'red':
      b |= 2;
      break;
    case 'redKO':
      b |= 8;
      break;
    case 'score':
      b |= 128;
      break;
    case 'wall':
      b |= 32
  }
  return b
};
h.Jc = function (a, b, c, d) {
  c != d && (a[b] = h.Dn(c))
};
h.qg = function (a, b, c) {
  b != c && (a.color = h.Rn(b))
};
h.Rn = function (a) {
  a |= 0;
  return 0 > a ? 'transparent' : J.Vg(a)
};
h.$f = function (a) {
  if ('transparent' == a) return - 1;
  if ('string' == typeof a) return K.parseInt('0x' + K.ye(a));
  if (a instanceof Array && null == a.eb) return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
  throw new q('Bad color');
};
h.Tr = function (a) {
  var b = {
    x: a.a.x,
    y: a.a.y
  };
  h.ka(b, 'bCoef', a.m, 1);
  h.Jc(b, 'cMask', a.h, 63);
  h.Jc(b, 'cGroup', a.v, 32);
  return b
};
h.np = function (a) {
  var b = new B;
  b.a.x = r.G(a.x, z);
  b.a.y = r.G(a.y, z);
  var c = a.bCoef;
  null != c && (b.m = r.G(c, z));
  c = a.cMask;
  null != c && (b.h = h.Fc(c));
  a = a.cGroup;
  null != a && (b.v = h.Fc(a));
  return b
};
h.fr = function (a, b) {
  var c = {
    v0: a.W.ud,
    v1: a.ca.ud
  };
  h.ka(c, 'bias', a.Cc, b.Cc);
  h.ka(c, 'bCoef', a.m, b.m);
  var d = a.Co();
  h.ka(c, 'curve', d, 0);
  0 != d && (c.curveF = a.vb);
  h.ka(c, 'vis', a.Za, b.Za);
  h.Jc(c, 'cMask', a.h, b.h);
  h.Jc(c, 'cGroup', a.v, b.v);
  h.qg(c, a.R, b.R);
  return c
};
h.mp = function (a, b) {
  var c = new E,
    d = r.G(a.v1, Pb);
  c.W = b[r.G(a.v0, Pb)];
  c.ca = b[d];
  var d = a.bias,
    e = a.bCoef,
    f = a.curve,
    g = a.curveF,
    k = a.vis,
    l = a.cMask,
    t = a.cGroup,
    m = a.color;
  null != d && (c.Cc = r.G(d, z));
  null != e && (c.m = r.G(e, z));
  null != g ? c.vb = r.G(g, z) : null != f && c.Oc(r.G(f, z));
  null != k && (c.Za = r.G(k, oc));
  null != l && (c.h = h.Fc(l));
  null != t && (c.v = h.Fc(t));
  null != m && (c.R = h.$f(m));
  return c
};
h.ap = function (a) {
  var b = {
    d0: a.Yd,
    d1: a.Zd,
    length: a.Hb >= a.ec ? a.Hb : [
      a.Hb,
      a.ec
    ]
  };
  h.qg(b, a.R, 0);
  h.ka(b, 'strength', a.ne, 1 / 0);
  return b
};
h.jp = function (a, b) {
  var c = new nb,
    d = r.G(a.d0, Pb),
    e = r.G(a.d1, Pb),
    f = a.color,
    g = a.strength,
    k = a.length;
  if (d >= b.length || 0 > d) throw new q(null);
  if (e >= b.length || 0 > e) throw new q(null);
  c.Yd = d;
  c.Zd = e;
  null == k ? (d = b[d], k = b[e], null == d || null == k ? c.ec = c.Hb = 100 : (e = d.a, k = k.a, d = e.x - k.x, e = e.y - k.y, c.ec = c.Hb = Math.sqrt(d * d + e * e))) : k instanceof Array && null == k.eb ? (c.Hb = r.G(k[0], z), c.ec = r.G(k[1], z)) : c.ec = c.Hb = r.G(k, z);
  c.ne = null == g || 'rigid' == g ? 1 / 0 : r.G(g, z);
  null != f && (c.R = h.$f(f));
  return c
};
h.gq = function (a) {
  var b = {
    normal: [
      a.wa.x,
      a.wa.y
    ],
    dist: a.Ua
  };
  h.ka(b, 'bCoef', a.m, 1);
  h.Jc(b, 'cMask', a.h, 63);
  h.Jc(b, 'cGroup', a.v, 32);
  return b
};
h.kp = function (a) {
  var b = new L,
    c = r.G(a.normal, Array),
    d = r.G(c[0], z),
    c = r.G(c[1], z),
    e = b.wa,
    f = Math.sqrt(d * d + c * c);
  e.x = d / f;
  e.y = c / f;
  b.Ua = r.G(a.dist, z);
  d = a.bCoef;
  c = a.cMask;
  a = a.cGroup;
  null != d && (b.m = r.G(d, z));
  null != c && (b.h = h.Fc(c));
  null != a && (b.v = h.Fc(a));
  return b
};
h.Jo = function (a) {
  return {
    p0: [
      a.W.x,
      a.W.y
    ],
    p1: [
      a.ca.x,
      a.ca.y
    ],
    team: a.qe == p.fa ? 'red' : 'blue'
  }
};
h.ip = function (a) {
  var b = new sb,
    c = r.G(a.p0, Array),
    d = r.G(a.p1, Array),
    e = b.W;
  e.x = c[0];
  e.y = c[1];
  c = b.ca;
  c.x = d[0];
  c.y = d[1];
  switch (a.team) {
    case 'blue':
      a = p.xa;
      break;
    case 'red':
      a = p.fa;
      break;
    default:
      throw new q('Bad team value');
  }
  b.qe = a;
  return b
};
h.jq = function (a) {
  var b = {
  };
  h.ka(b, 'bCoef', a.m, 0.5);
  h.ka(b, 'invMass', a.aa, 0.5);
  h.ka(b, 'damping', a.Ca, 0.96);
  h.ka(b, 'acceleration', a.Ce, 0.1);
  h.ka(b, 'kickingAcceleration', a.Te, 0.07);
  h.ka(b, 'kickingDamping', a.Ue, 0.96);
  h.ka(b, 'kickStrength', a.Re, 5);
  h.Jc(b, 'cGroup', a.v, 0);
  if (0 != a.oa.x || 0 != a.oa.y) b.gravity = [
    a.oa.x,
    a.oa.y
  ];
  h.ka(b, 'radius', a.Z, 15);
  h.ka(b, 'kickback', a.Se, 0);
  return b
};
h.lp = function (a) {
  var b = new Eb,
    c = a.bCoef,
    d = a.invMass,
    e = a.damping,
    f = a.acceleration,
    g = a.kickingAcceleration,
    k = a.kickingDamping,
    l = a.kickStrength,
    t = a.gravity,
    m = a.cGroup,
    n = a.radius;
  a = a.kickback;
  null != c && (b.m = r.G(c, z));
  null != d && (b.aa = r.G(d, z));
  null != e && (b.Ca = r.G(e, z));
  null != f && (b.Ce = r.G(f, z));
  null != g && (b.Te = r.G(g, z));
  null != k && (b.Ue = r.G(k, z));
  null != l && (b.Re = r.G(l, z));
  null != t && (c = b.oa, d = r.G(t[1], z), c.x = r.G(t[0], z), c.y = d);
  null != m && (b.v = h.Fc(m));
  null != n && (b.Z = r.G(n, z));
  null != a && (b.Se = r.G(a, z));
  return b
};
h.mo = function (a, b) {
  var c = {
  };
  if (a.a.x != b.a.x || a.a.y != b.a.y) c.pos = [
    a.a.x,
    a.a.y
  ];
  if (a.D.x != b.D.x || a.D.y != b.D.y) c.speed = [
    a.D.x,
    a.D.y
  ];
  if (a.oa.x != b.oa.x || a.oa.y != b.oa.y) c.gravity = [
    a.oa.x,
    a.oa.y
  ];
  h.ka(c, 'radius', a.Z, b.Z);
  h.ka(c, 'bCoef', a.m, b.m);
  h.ka(c, 'invMass', a.aa, b.aa);
  h.ka(c, 'damping', a.Ca, b.Ca);
  h.qg(c, a.R, b.R);
  h.Jc(c, 'cMask', a.h, b.h);
  h.Jc(c, 'cGroup', a.v, b.v);
  return c
};
h.Mk = function (a, b) {
  var c = a.pos,
    d = a.speed,
    e = a.gravity,
    f = a.radius,
    g = a.bCoef,
    k = a.invMass,
    l = a.damping,
    t = a.color,
    m = a.cMask,
    n = a.cGroup;
  if (null != c) {
    var p = b.a;
    p.x = c[0];
    p.y = c[1]
  }
  null != d && (c = b.D, c.x = d[0], c.y = d[1]);
  null != e && (d = b.oa, d.x = e[0], d.y = e[1]);
  null != f && (b.Z = r.G(f, z));
  null != g && (b.m = r.G(g, z));
  null != k && (b.aa = r.G(k, z));
  null != l && (b.Ca = r.G(l, z));
  null != t && (b.R = h.$f(t));
  null != m && (b.h = h.Fc(m));
  null != n && (b.v = h.Fc(n));
  return b
};
h.ka = function (a, b, c, d) {
  c != d && (a[b] = c)
};
h.prototype = {
  dg: function () {
    var a = new ua;
    a.R = 16777215;
    a.h = 63;
    a.v = 193;
    a.Z = 10;
    a.Ca = 0.99;
    a.aa = 1;
    a.m = 0.5;
    return a
  },
  ga: function (a) {
    a.l(this.Bh);
    if (!this.Pe()) {
      a.Db(this.w);
      a.O(this.ld);
      a.s(this.Td);
      a.s(this.Sd);
      a.s(this.kd);
      a.s(this.Uc);
      a.s(this.Fe);
      a.O(this.jd);
      a.s(this.$b);
      a.s(this.qc);
      a.s(this.kc);
      this.ge.ga(a);
      a.Ub(this.Ye);
      a.l(this.Ge);
      a.l(this.Lf ? 1 : 0);
      a.l(this.pf ? 1 : 0);
      a.l(this.J.length);
      for (var b = 0, c = this.J.length; b < c;) {
        var d = b++,
          e = this.J[d];
        e.ud = d;
        e.ga(a)
      }
      a.l(this.U.length);
      b = 0;
      for (c = this.U; b < c.length;) c[b++].ga(a);
      a.l(this.qa.length);
      b = 0;
      for (c = this.qa; b < c.length;) c[b++].ga(a);
      a.l(this.tc.length);
      b = 0;
      for (c = this.tc; b < c.length;) c[b++].ga(a);
      a.l(this.F.length);
      b = 0;
      for (c = this.F; b < c.length;) c[b++].ga(a);
      a.l(this.pb.length);
      b = 0;
      for (c = this.pb; b < c.length;) c[b++].ga(a);
      a.l(this.Dd.length);
      b = 0;
      for (c = this.Dd; b < c.length;) d = c[b],
        ++b,
        a.s(d.x),
        a.s(d.y);
      a.l(this.md.length);
      b = 0;
      for (c = this.md; b < c.length;) d = c[b],
        ++b,
        a.s(d.x),
        a.s(d.y)
    }
  },
  Kr: function (a) {
    function b() {
      for (var b = [
      ], c = a.B(), d = 0; d < c;) {
        ++d;
        var e = new H(0, 0);
        e.x = a.u();
        e.y = a.u();
        b.push(e)
      }
      return b
    }
    this.w = a.zb();
    this.ld = a.M();
    this.Td = a.u();
    this.Sd = a.u();
    this.kd = a.u();
    this.Uc = a.u();
    this.Fe = a.u();
    this.jd = a.M();
    this.$b = a.u();
    this.qc = a.u();
    this.kc = a.u();
    this.ge.ja(a);
    this.Ye = a.Ob();
    this.Ge = a.B();
    this.Lf = 0 != a.B();
    this.pf = 0 != a.B();
    this.J = [
    ];
    for (var c = a.B(), d = 0; d < c;) {
      var e = new B;
      e.ja(a);
      e.ud = d++;
      this.J.push(e)
    }
    this.U = [
    ];
    c = a.B();
    for (d = 0; d < c;) ++d,
      e = new E,
      e.ja(a, this.J),
      this.U.push(e);
    this.qa = [
    ];
    c = a.B();
    for (d = 0; d < c;) ++d,
      e = new L,
      e.ja(a),
      this.qa.push(e);
    this.tc = [
    ];
    c = a.B();
    for (d = 0; d < c;) ++d,
      e = new sb,
      e.ja(a),
      this.tc.push(e);
    this.F = [
    ];
    c = a.B();
    for (d = 0; d < c;) ++d,
      e = new ua,
      e.ja(a),
      this.F.push(e);
    this.pb = [
    ];
    c = a.B();
    for (d = 0; d < c;) ++d,
      e = new nb,
      e.ja(a),
      this.pb.push(e);
    this.Dd = b();
    this.md = b();
    this.he()
  },
  he: function () {
    for (var a = 0, b = this.U; a < b.length;) b[a++].he()
  },
  Pe: function () {
    return 255 != this.Bh
  },
  be: function (a, b, c) {
    a = a[b];
    return null != a ? r.G(a, z) : c
  },
  op: function (a, b, c) {
    a = a[b];
    return null != a ? r.G(a, oc) : c
  },
  se: function () {
    return JSON.stringify(this.Hr())
  },
  Hr: function () {
    if (!this.Lf) throw new q(0);
    for (var a = {
    }, b = 0, c = [
    ], d = 0, e = this.J; d < e.length;) {
      var f = e[d];
      ++d;
      f.ud = b++;
      c.push(h.Tr(f))
    }
    d = new E;
    b = [
    ];
    e = 0;
    for (f = this.U; e < f.length;) b.push(h.fr(f[e++], d));
    d = [
    ];
    e = 0;
    for (f = this.qa; e < f.length;) d.push(h.gq(f[e++]));
    for (var e = [
    ], f = 0, g = this.tc; f < g.length;) e.push(h.Jo(g[f++]));
    for (var f = h.jq(this.ge), k = new ua, g = [
    ], l = 0, t = this.F; l < t.length;) g.push(h.mo(t[l++], k));
    k = [
    ];
    l = 0;
    for (t = this.pb; l < t.length;) k.push(h.ap(t[l++]));
    for (var l = [
    ], t = 0, m = this.Dd; t < m.length;) {
      var n = m[t];
      ++t;
      l.push([n.x,
      n.y])
    }
    t = [
    ];
    m = 0;
    for (n = this.md; m < n.length;) {
      var p = n[m];
      ++m;
      t.push([p.x,
      p.y])
    }
    c = {
      name: this.w,
      width: this.$b,
      height: this.qc,
      bg: a,
      vertexes: c,
      segments: b,
      planes: d,
      goals: e,
      discs: g,
      playerPhysics: f,
      ballPhysics: 'disc0'
    };
    console.log("stadion", c);
    h.ka(c, 'maxViewWidth', this.Ye, 0);
    h.ka(c, 'cameraFollow', 1 == this.Ge ? 'player' : '', '');
    h.ka(c, 'spawnDistance', this.kc, 200);
    0 != k.length && (c.joints = k);
    0 != l.length && (c.redSpawnPoints = l);
    0 != t.length && (c.blueSpawnPoints = t);
    h.ka(c, 'kickOffReset', this.pf ? 'full' : 'partial', 'partial');
    switch (this.ld) {
      case 1:
        b = 'grass';
        break;
      case 2:
        b = 'hockey';
        break;
      default:
        b = 'none'
    }
    h.ka(a, 'type', b, 'none');
    h.ka(a, 'width', this.Td, 0);
    h.ka(a, 'height', this.Sd, 0);
    h.ka(a, 'kickOffRadius', this.kd, 0);
    h.ka(a, 'cornerRadius', this.Uc, 0);
    h.qg(a, this.jd, 7441498);
    h.ka(a, 'goalLine', this.Fe, 0);
    return c
  },
  Lk: function (a) {
    function b(a) {
      var b = r.G(a[0], z);
      a = r.G(a[1], z);
      return new H(b, a)
    }
    function c(a, b, c, d) {
      null == d && (d = !1);
      var f = e[b];
      if (!d || null != f) if (d = r.G(f, Array), null != d) for (f = 0; f < d.length;) {
        var k = d[f];
        ++f;
        try {
          h.wn(k, g),
            a.push(c(k))
        } catch (wc) {
          throw new q(new Bb('Error in "' + b + '" index: ' + a.length));
        }
      }
    }
    var d = this,
      e = JSON5.parse(a);
    this.J = [
    ];
    this.U = [
    ];
    this.qa = [
    ];
    this.tc = [
    ];
    this.F = [
    ];
    this.pb = [
    ];
    this.w = r.G(e.name, String);
    this.$b = r.G(e.width, z);
    this.qc = r.G(e.height, z);
    this.Ye = this.be(e, 'maxViewWidth', 0) | 0;
    'player' == e.cameraFollow && (this.Ge = 1);
    this.kc = 200;
    a = e.spawnDistance;
    null != a && (this.kc = r.G(a, z));
    a = e.bg;
    var f;
    switch (a.type) {
      case 'grass':
        f = 1;
        break;
      case 'hockey':
        f = 2;
        break;
      default:
        f = 0
    }
    this.ld = f;
    this.Td = this.be(a, 'width', 0);
    this.Sd = this.be(a, 'height', 0);
    this.kd = this.be(a, 'kickOffRadius', 0);
    this.Uc = this.be(a, 'cornerRadius', 0);
    this.jd = 7441498;
    null != a.color && (this.jd = h.$f(a.color));
    this.Fe = this.be(a, 'goalLine', 0);
    this.Lf = this.op(e, 'canBeStored', !0);
    this.pf = 'full' == e.kickOffReset;
    var g = e.traits;
    a = e.ballPhysics;
    'disc0' != a && (null != a ? (a = h.Mk(a, this.dg()), a.v |= 192, this.F.push(a)) : this.F.push(this.dg()));
    c(this.J, 'vertexes', h.np);
    c(this.U, 'segments', function (a) {
      return h.mp(a, d.J)
    });
    c(this.tc, 'goals', h.ip);
    c(this.F, 'discs', function (a) {
      return h.Mk(a, new ua)
    });
    c(this.qa, 'planes', h.kp);
    c(this.pb, 'joints', function (a) {
      return h.jp(a, d.F)
    }, !0);
    c(this.Dd, 'redSpawnPoints', b, !0);
    c(this.md, 'blueSpawnPoints', b, !0);
    a = e.playerPhysics;
    null != a && (this.ge = h.lp(a));
    if (255 < this.J.length || 255 < this.U.length || 255 < this.qa.length || 255 < this.tc.length || 255 < this.F.length) throw new q('Error');
    this.he()
  },
  Sj: function () {
    var a = h.Fr;
    a.a = 0;
    this.ga(a);
    var b = new dc;
    b.Yr(a.Sb());
    b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
    b.hash += b.hash << 15;
    return b.hash | 0
  },
  Kn: function (a, b) {
    for (var c = 0, d = this.tc; c < d.length;) {
      var e = d[c];
      ++c;
      var f = e.W,
        g = e.ca,
        k = b.x - a.x,
        l = b.y - a.y;
      0 < - (f.y - a.y) * k + (f.x - a.x) * l == 0 < - (g.y - a.y) * k + (g.x - a.x) * l ? f = !1 : (k = g.x - f.x, g = g.y - f.y, f = 0 < - (a.y - f.y) * k + (a.x - f.x) * g == 0 < - (b.y - f.y) * k + (b.x - f.x) * g ? !1 : !0);
      if (f) return e.qe
    }
    return p.Ia
  },
  ad: function (a, b, c, d, e, f, g, k) {
    null == k && (k = 0);
    this.w = a;
    this.F.push(this.dg());
    this.$b = b;
    this.qc = c;
    this.ld = 1;
    this.jd = 7441498;
    this.Td = d;
    this.Sd = e;
    this.kd = g;
    this.Uc = k;
    this.kc = 0.75 * d;
    400 < this.kc && (this.kc = 400);
    a = new L;
    var l = a.wa;
    l.x = 0;
    l.y = 1;
    a.Ua = - c;
    a.m = 0;
    this.qa.push(a);
    a = new L;
    l = a.wa;
    l.x = 0;
    l.y = - 1;
    a.Ua = - c;
    a.m = 0;
    this.qa.push(a);
    a = new L;
    l = a.wa;
    l.x = 1;
    l.y = 0;
    a.Ua = - b;
    a.m = 0;
    this.qa.push(a);
    a = new L;
    l = a.wa;
    l.x = - 1;
    l.y = 0;
    a.Ua = - b;
    a.m = 0;
    this.qa.push(a);
    this.eg(d, 1, f, 13421823, p.xa);
    this.eg(- d, - 1, f, 16764108, p.fa);
    this.Rk(g, c);
    b = new L;
    c = b.wa;
    c.x = 0;
    c.y = 1;
    b.Ua = - e;
    b.h = 1;
    this.qa.push(b);
    b = new L;
    c = b.wa;
    c.x = 0;
    c.y = - 1;
    b.Ua = - e;
    b.h = 1;
    this.qa.push(b);
    b = new B;
    c = b.a;
    c.x = - d;
    c.y = - e;
    b.h = 0;
    c = new B;
    g = c.a;
    g.x = d;
    g.y = - e;
    c.h = 0;
    g = new B;
    a = g.a;
    a.x = d;
    a.y = - f;
    g.h = 0;
    a = new B;
    l = a.a;
    l.x = d;
    l.y = f;
    a.h = 0;
    var l = new B,
      h = l.a;
    h.x = d;
    h.y = e;
    l.h = 0;
    var h = new B,
      m = h.a;
    m.x = - d;
    m.y = e;
    h.h = 0;
    var m = new B,
      n = m.a;
    n.x = - d;
    n.y = f;
    m.h = 0;
    var n = new B,
      q = n.a;
    q.x = - d;
    q.y = - f;
    n.h = 0;
    f = new E;
    f.W = c;
    f.ca = g;
    f.h = 1;
    f.Za = !1;
    q = new E;
    q.W = a;
    q.ca = l;
    q.h = 1;
    q.Za = !1;
    var r = new E;
    r.W = h;
    r.ca = m;
    r.h = 1;
    r.Za = !1;
    var u = new E;
    u.W = n;
    u.ca = b;
    u.h = 1;
    u.Za = !1;
    this.J.push(b);
    this.J.push(c);
    this.J.push(g);
    this.J.push(a);
    this.J.push(l);
    this.J.push(h);
    this.J.push(m);
    this.J.push(n);
    this.U.push(f);
    this.U.push(q);
    this.U.push(r);
    this.U.push(u);
    this.Pk(d, e, k);
    this.he()
  },
  Qk: function (a, b, c, d, e, f, g, k, l) {
    this.w = a;
    this.F.push(this.dg());
    this.$b = b;
    this.qc = c;
    this.ld = 2;
    this.Td = d;
    this.Sd = e;
    this.kd = k;
    this.Uc = l;
    this.Fe = g;
    this.kc = 0.75 * (d - g);
    400 < this.kc && (this.kc = 400);
    a = new L;
    var h = a.wa;
    h.x = 0;
    h.y = 1;
    a.Ua = - c;
    a.m = 0;
    this.qa.push(a);
    a = new L;
    h = a.wa;
    h.x = 0;
    h.y = - 1;
    a.Ua = - c;
    a.m = 0;
    this.qa.push(a);
    a = new L;
    h = a.wa;
    h.x = 1;
    h.y = 0;
    a.Ua = - b;
    a.m = 0;
    this.qa.push(a);
    a = new L;
    h = a.wa;
    h.x = - 1;
    h.y = 0;
    a.Ua = - b;
    a.m = 0;
    this.qa.push(a);
    this.eg(d - g, 1, f, 13421823, p.xa, 63);
    this.eg(- d + g, - 1, f, 16764108, p.fa, 63);
    this.Rk(k, c);
    b = new L;
    c = b.wa;
    c.x = 0;
    c.y = 1;
    b.Ua = - e;
    b.h = 1;
    this.qa.push(b);
    b = new L;
    c = b.wa;
    c.x = 0;
    c.y = - 1;
    b.Ua = - e;
    b.h = 1;
    this.qa.push(b);
    b = new L;
    c = b.wa;
    c.x = 1;
    c.y = 0;
    b.Ua = - d;
    b.h = 1;
    this.qa.push(b);
    b = new L;
    c = b.wa;
    c.x = - 1;
    c.y = 0;
    b.Ua = - d;
    b.h = 1;
    this.qa.push(b);
    this.Pk(d, e, l);
    this.he()
  },
  eg: function (a, b, c, d, e, f, g) {
    null == g && (g = 32);
    null == f && (f = 1);
    var k = new B,
      l = k.a;
    l.x = a + 8 * b;
    l.y = - c;
    var l = new B,
      h = l.a;
    h.x = a + 8 * b;
    h.y = c;
    var m = new B,
      h = m.a;
    h.x = k.a.x + 22 * b;
    h.y = k.a.y + 22;
    var n = new B,
      h = n.a;
    h.x = l.a.x + 22 * b;
    h.y = l.a.y - 22;
    h = new E;
    h.W = k;
    h.ca = m;
    h.Oc(90 * b);
    var p = new E;
    p.W = n;
    p.ca = m;
    var q = new E;
    q.W = n;
    q.ca = l;
    q.Oc(90 * b);
    b = this.J.length;
    this.J.push(k);
    this.J.push(l);
    this.J.push(m);
    this.J.push(n);
    k = b;
    for (b = this.J.length; k < b;) l = k++,
      this.J[l].h = f,
      this.J[l].v = g,
      this.J[l].m = 0.1;
    b = this.U.length;
    this.U.push(h);
    this.U.push(p);
    this.U.push(q);
    k = b;
    for (b = this.U.length; k < b;) l = k++,
      this.U[l].h = f,
      this.U[l].v = g,
      this.U[l].m = 0.1;
    f = new ua;
    g = f.a;
    g.x = a;
    g.y = - c;
    f.aa = 0;
    f.Z = 8;
    f.R = d;
    this.F.push(f);
    f = new ua;
    g = f.a;
    g.x = a;
    g.y = c;
    f.aa = 0;
    f.Z = 8;
    f.R = d;
    this.F.push(f);
    d = new sb;
    f = d.W;
    f.x = a;
    f.y = - c;
    f = d.ca;
    f.x = a;
    f.y = c;
    d.qe = e;
    this.tc.push(d)
  },
  Rk: function (a, b) {
    var c = new B,
      d = c.a;
    d.x = 0;
    d.y = - b;
    c.m = 0.1;
    c.v = 24;
    c.h = 6;
    var d = new B,
      e = d.a;
    e.x = 0;
    e.y = - a;
    d.m = 0.1;
    d.v = 24;
    d.h = 6;
    var e = new B,
      f = e.a;
    f.x = 0;
    f.y = a;
    e.m = 0.1;
    e.v = 24;
    e.h = 6;
    var f = new B,
      g = f.a;
    g.x = 0;
    g.y = b;
    f.m = 0.1;
    f.v = 24;
    f.h = 6;
    g = new E;
    g.W = c;
    g.ca = d;
    g.v = 24;
    g.h = 6;
    g.Za = !1;
    g.m = 0.1;
    var k = new E;
    k.W = e;
    k.ca = f;
    k.v = 24;
    k.h = 6;
    k.Za = !1;
    k.m = 0.1;
    var l = new E;
    l.W = d;
    l.ca = e;
    l.v = 8;
    l.h = 6;
    l.Za = !1;
    l.Oc(180);
    l.m = 0.1;
    var h = new E;
    h.W = e;
    h.ca = d;
    h.v = 16;
    h.h = 6;
    h.Za = !1;
    h.Oc(180);
    h.m = 0.1;
    this.J.push(c);
    this.J.push(d);
    this.J.push(e);
    this.J.push(f);
    this.U.push(g);
    this.U.push(k);
    this.U.push(l);
    this.U.push(h)
  },
  Pk: function (a, b, c) {
    if (!(0 >= c)) {
      var d = new B,
        e = d.a;
      e.x = - a + c;
      e.y = - b;
      d.h = 0;
      var e = new B,
        f = e.a;
      f.x = - a;
      f.y = - b + c;
      e.h = 0;
      var f = new B,
        g = f.a;
      g.x = - a + c;
      g.y = b;
      f.h = 0;
      var g = new B,
        k = g.a;
      k.x = - a;
      k.y = b - c;
      g.h = 0;
      var k = new B,
        l = k.a;
      l.x = a - c;
      l.y = b;
      k.h = 0;
      var l = new B,
        h = l.a;
      h.x = a;
      h.y = b - c;
      l.h = 0;
      var h = new B,
        m = h.a;
      m.x = a - c;
      m.y = - b;
      h.h = 0;
      var m = new B,
        n = m.a;
      n.x = a;
      n.y = - b + c;
      m.h = 0;
      a = new E;
      a.W = d;
      a.ca = e;
      a.h = 1;
      a.Za = !1;
      a.m = 1;
      a.Oc(- 90);
      b = new E;
      b.W = f;
      b.ca = g;
      b.h = 1;
      b.Za = !1;
      b.m = 1;
      b.Oc(90);
      c = new E;
      c.W = k;
      c.ca = l;
      c.h = 1;
      c.Za = !1;
      c.m = 1;
      c.Oc(- 90);
      n = new E;
      n.W = h;
      n.ca = m;
      n.h = 1;
      n.Za = !1;
      n.m = 1;
      n.Oc(90);
      this.J.push(d);
      this.J.push(e);
      this.J.push(f);
      this.J.push(g);
      this.J.push(k);
      this.J.push(l);
      this.J.push(h);
      this.J.push(m);
      this.U.push(a);
      this.U.push(b);
      this.U.push(c);
      this.U.push(n)
    }
  },
  f: h
};
ka.b = !0;
ka.prototype = {
  ga: function (a) {
    a.l(this.hd);
    a.O(this.ed);
    a.l(this.fb.length);
    for (var b = 0, c = this.fb; b < c.length;) a.O(c[b++])
  },
  ja: function (a) {
    this.hd = a.B();
    this.ed = a.M();
    var b = a.B();
    if (3 < b) throw new q('too many');
    this.fb = [
    ];
    for (var c = 0; c < b;) ++c,
      this.fb.push(a.M())
  },
  f: ka
};
p.b = !0;
p.prototype = {
  f: p
};
fa.b = !0;
fa.Rd = [
  Ta,
  cc
];
fa.qd = function (a, b) {
  a.jc = b.jc;
  if (null ==
    b.I) a.I = null;
  else {
    null == a.I && (a.I = [
    ]);
    for (var c = a.I, d = b.I, e = d.length; c.length > e;) c.pop();
    for (var e = 0, f = d.length; e < f;) {
      var g = e++;
      c[g] = d[g].hs()
    }
  }
  a.K = null == b.K ? null : b.K.sc();
  a.Pc = b.Pc;
  a.ib = b.ib;
  a.Da = b.Da;
  a.ce = b.ce;
  a.Zc = b.Zc;
  a.yd = b.yd;
  a.S = b.S;
  a.kb = b.kb
};
fa.prototype = {
  yr: function (a) {
    if (null == this.K) {
      this.K = new O;
      for (var b = 0, c = this.I; b < c.length;) {
        var d = c[b];
        ++b;
        d.H = null;
        d.Jb = 0
      }
      this.K.Wo(this);
      null != this.Ki && this.Ki(a)
    }
  },
  Mf: function (a, b, c) {
    if (b.ea != c) {
      b.ea = c;
      D.remove(this.I, b);
      this.I.push(b);
      if (null != this.K) {
        null !=
          b.H && (D.remove(this.K.ta.F, b.H), b.H = null);
        this.K.Ck(b);
        for (var d = 0, e = !1; !e;) {
          ++d;
          for (var e = !0, f = 0, g = this.I; f < g.length;) {
            var k = g[f];
            ++f;
            if (k != b && k.ea == b.ea && k.Jb == d) {
              e = !1;
              break
            }
          }
        }
        b.Jb = d
      }
      Cb.i(this.xl, a, b, c)
    }
  },
  na: function (a) {
    for (var b = 0, c = this.I; b < c.length;) {
      var d = c[b];
      ++b;
      if (d.V == a) return d
    }
    return null
  },
  C: function (a) {
    null != this.K && this.K.C(a)
  },
  ga: function (a) {
    a.Db(this.jc);
    a.l(this.Pc ? 1 : 0);
    a.O(this.ib);
    a.O(this.Da);
    a.Xi(this.ce);
    a.l(this.Zc);
    a.l(this.yd);
    this.S.ga(a);
    a.l(null != this.K ? 1 : 0);
    null != this.K && this.K.ga(a);
    a.l(this.I.length);
    for (var b = 0, c = this.I; b < c.length;) c[b++].ua(a);
    this.kb[1].ga(a);
    this.kb[2].ga(a)
  },
  ja: function (a) {
    this.jc = a.zb();
    this.Pc = 0 != a.B();
    this.ib = a.M();
    this.Da = a.M();
    this.ce = a.ni();
    this.Zc = a.B();
    this.yd = a.B();
    this.S = h.ja(a);
    var b = 0 != a.B();
    this.K = null;
    b && (this.K = new O, this.K.ja(a, this));
    for (var b = null == this.K ? null : this.K.ta.F, c = a.B(), d = this.I; d.length > c;) d.pop();
    for (d = 0; d < c;) {
      var e = new ea;
      e.va(a, b);
      this.I[d++] = e
    }
    this.kb[1].ja(a);
    this.kb[2].ja(a)
  },
  uk: function () {
    var a = 0,
      b = w.ha();
    this.ga(b);
    for (b = b.Gr(); 4 <= b.o.byteLength - b.a;) a ^= b.M();
    return a
  },
  Ao: function () {
    var a = w.ha(4);
    a.O(this.uk());
    return a.Kg()
  },
  Sn: function (a) {
    a = (new F(new DataView(a))).M();
    y.i(this.ko, this.uk() != a)
  },
  km: function (a) {
    this.Ol = a
  },
  Lb: function (a) {
    if (0 == a) return !0;
    a = this.na(a);
    return null != a && a.cb ? !0 : !1
  },
  mr: function (a, b, c, d) {
    this.yd = 0 > b ? 0 : 255 < b ? 255 : b;
    this.Zc = 0 > c ? 0 : 255 < c ? 255 : c;
    d = 0 > d ? 0 : 100 < d ? 100 : d;
    this.ce = this.Zc * d;
    vb.i(this.Hk, a, this.yd, this.Zc, d)
  },
  sc: function () {
    var a = ya.zc,
      b = this.gc;
    this.hc != a && (null == b && (this.gc = b = new fa), this.hc = a, fa.qd(b, this));
    return b
  },
  f: fa
};
ea.b = !0;
ea.Rd = [
  Ta
];
ea.$r = function (a, b) {
  a.cb = b.cb;
  a.Jb = b.Jb;
  a.Xb = b.Xb;
  a.Jd = b.Jd;
  a.Ld = b.Ld;
  a.Kd = b.Kd;
  a.Ug = b.Ug;
  a.yb = b.yb;
  a.w = b.w;
  a.ob = b.ob;
  a.V = b.V;
  a.Wb = b.Wb;
  a.yc = b.yc;
  a.Sc = b.Sc;
  a.H = null == b.H ? null : b.H.sc();
  a.ea = b.ea
};
ea.prototype = {
  ua: function (a) {
    a.l(this.cb ? 1 : 0);
    a.O(this.Jb);
    a.Db(this.Xb);
    a.Db(this.Jd);
    a.l(this.Ld ? 1 : 0);
    a.Db(this.Kd);
    a.O(this.Ug);
    a.Db(this.w);
    a.O(this.ob);
    a.lb(this.V);
    a.l(this.Wb ? 1 : 0);
    a.Xi(this.yc);
    a.l(this.Sc);
    a.l(this.ea.$);
    a.Xi(null ==
      this.H ? - 1 : this.H.jl)
  },
  va: function (a, b) {
    this.cb = 0 != a.B();
    this.Jb = a.M();
    this.Xb = a.zb();
    this.Jd = a.zb();
    this.Ld = 0 != a.B();
    this.Kd = a.zb();
    this.Ug = a.M();
    this.w = a.zb();
    this.ob = a.M();
    this.V = a.Ab();
    this.Wb = 0 != a.B();
    this.yc = a.ni();
    this.Sc = a.B();
    var c = a.lf();
    this.ea = 1 == c ? p.fa : 2 == c ? p.xa : p.Ia;
    c = a.ni();
    this.H = 0 > c ? null : b[c]
  },
  hs: function () {
    var a = ya.zc,
      b = this.an;
    this.zc != a && (null == b && (this.an = b = new ea), this.zc = a, ea.$r(b, this));
    return b
  },
  f: ea
};
ta.b = !0;
ta.la = function (a) {
  var b = new ta;
  b.Yg = a;
  return b
};
ta.ma = m;
ta.prototype = C(m.prototype, {
  apply: function (a) {
    var b = a.na(this.P);
    null != b && this.Yg != b.Ld && (b.Ld = this.Yg, y.i(a.sl, b))
  },
  ua: function (a) {
    a.l(this.Yg ? 1 : 0)
  },
  va: function (a) {
    this.Yg = 0 != a.B()
  },
  f: ta
});
rb.b = !0;
rb.ma = m;
rb.prototype = C(m.prototype, {
  apply: function (a) {
    0 == this.P && vb.i(a.Vl, this.Tc, this.color, this.style, this.fn)
  },
  ua: function (a) {
    a.mc(U.Qc(this.Tc, 1000));
    a.O(this.color);
    a.l(this.style);
    a.l(this.fn)
  },
  va: function (a) {
    this.Tc = a.ic();
    if (1000 < this.Tc.length) throw new q('message too long');
    this.color = a.M();
    this.style = a.B();
    this.fn = a.B()
  },
  f: rb
});
Qa.b = !0;
Qa.ma = m;
Qa.prototype = C(m.prototype, {
  apply: function (a) {
    if (a.Lb(this.P, 1)) {
      for (var b = a.na(this.P), c = a.I, d = [
      ], e = 0, f = 0, g = 0; g < c.length;) {
        var k = c[g];
        ++g;
        k.ea == p.Ia && d.push(k);
        k.ea == p.fa ? ++e : k.ea == p.xa && ++f
      }
      c = d.length;
      0 != c && (f == e ? 2 > c || (a.Mf(b, d[0], p.fa), a.Mf(b, d[1], p.xa)) : a.Mf(b, d[0], f > e ? p.fa : p.xa))
    }
  },
  ua: function () {
  },
  va: function () {
  },
  f: Qa
});
da.b = !0;
da.la = function (a, b) {
  var c = new da;
  c.rj = a;
  c.newValue = b;
  return c
};
da.ma = m;
da.prototype = C(m.prototype, {
  apply: function (a) {
    if (a.Lb(this.P, 2) && null == a.K) switch (this.rj) {
      case 0:
        var b = this.newValue;
        a.ib = 0 > b ? 0 : 99 < b ? 99 : b;
        break;
      case 1:
        b = this.newValue,
          a.Da = 0 > b ? 0 : 99 < b ? 99 : b
    }
  },
  ua: function (a) {
    a.O(this.rj);
    a.O(this.newValue)
  },
  va: function (a) {
    this.rj = a.M();
    this.newValue = a.M()
  },
  f: da
}); sa.b = !0; sa.la = function (a, b) {
  var c = new sa;
  c.Md = a;
  c.Xg = b;
  return c
}; sa.ma = m; sa.prototype = C(m.prototype, {
  apply: function (a) {
    if (a.Lb(this.P, 4)) {
      var b = a.na(this.P),
        c = a.na(this.Md);
      null != c && 0 != c.V && c.cb != this.Xg && (c.cb = this.Xg, null != a.ii && a.ii(b, c))
    }
  },
  ua: function (a) {
    a.O(this.Md);
    a.l(this.Xg ? 1 : 0)
  },
  va: function (a) {
    this.Md = a.M();
    this.Xg = 0 != a.B()
  },
  f: sa
}); ra.b = !0; ra.la = function (a) {
  var b = new ra;
  b.Zb = a;
  return b
}; ra.ma = m; ra.prototype = C(m.prototype, {
  apply: function (a) {
    a = a.na(this.P);
    null != a && (a.Xb = this.Zb)
  },
  ua: function (a) {
    a.Db(this.Zb)
  },
  va: function (a) {
    this.Zb = a.zb();
    null != this.Zb && (this.Zb = U.Qc(this.Zb, 2))
  },
  f: ra
}); S.b = !0; S.la = function (a, b) {
  var c = new S;
  c.Md = a;
  c.jj = b;
  return c
}; S.ma = m; S.prototype = C(m.prototype, {
  apply: function (a) {
    var b = a.na(this.Md);
    if (null != b) {
      var c = a.na(this.P),
        d = a.Lb(this.P, 1);
      (d = d || b == c && !a.Pc && null == a.K) && a.Mf(c, b, this.jj)
    }
  },
  ua: function (a) {
    a.O(this.Md);
    a.l(this.jj.$)
  },
  va: function (a) {
    this.Md = a.M();
    a = a.lf();
    this.jj = 1 == a ? p.fa : 2 == a ? p.xa : p.Ia
  },
  f: S
}); qa.b = !0; qa.la = function (a) {
  var b = new qa;
  b.Pd = a;
  return b
}; qa.ma = m; qa.prototype = C(m.prototype, {
  apply: function (a) {
    if (a.Lb(this.P, 8)) {
      var b = a.na(this.P);
      //console.log("chyba ladowanie stadionu",a,b);
      null == a.K && (a.S = this.Pd, null != a.Ii && a.Ii(b, this.Pd))
    }
  },
  ua: function (a) {
    var b = w.ha();
    this.Pd.ga(b);
    b = pako.deflateRaw(b.Sb());
    a.Ub(b.byteLength);
    a.Vb(b)
  },
  va: function (a) {
    a = pako.inflateRaw(a.sb(a.Ob()));
    this.Pd = h.ja(new F(new DataView(a.buffer, a.byteOffset, a.byteLength)))
  },
  f: qa
}); Pa.b = !0; Pa.ma = m; Pa.prototype = C(m.prototype, {
  apply: function (a) {
    a.Lb(this.P, 2) && this.ea != p.Ia && (a.kb[this.ea.$] = this.Sg)
  },
  ua: function (a) {
    a.l(this.ea.$);
    this.Sg.ga(a)
  },
  va: function (a) {
    var b = a.lf();
    this.ea = 1 == b ? p.fa : 2 == b ? p.xa : p.Ia;
    this.Sg = new ka;
    this.Sg.ja(a)
  },
  f: Pa
}); pa.b = !0; pa.la = function (a) {
  var b = new pa;
  b.newValue = a;
  return b
}; pa.ma = m; pa.prototype = C(m.prototype, {
  apply: function (a) {
    a.Lb(this.P, 2) && (a.Pc = this.newValue)
  },
  ua: function (a) {
    a.l(this.newValue ?
      1 : 0)
  },
  va: function (a) {
    this.newValue = 0 != a.B()
  },
  f: pa
}); oa.b = !0; oa.la = function (a, b, c, d) {
  var e = new oa;
  e.V = a;
  e.name = b;
  e.cj = c;
  e.Xb = d;
  return e
}; oa.ma = m; oa.prototype = C(m.prototype, {
  apply: function (a) {
    if (0 == this.P) {
      var b = new ea;
      b.V = this.V;
      b.w = this.name;
      b.Kd = this.cj;
      b.Xb = this.Xb;
      a.I.push(b);
      a = a.tl;
      null != a && a(b)
    }
  },
  ua: function (a) {
    a.O(this.V);
    a.Db(this.name);
    a.Db(this.cj);
    a.Db(this.Xb)
  },
  va: function (a) {
    this.V = a.M();
    this.name = a.zb();
    this.cj = a.zb();
    this.Xb = a.zb()
  },
  f: oa
}); qb.b = !0; qb.ma = m; qb.prototype = C(m.prototype, {
  apply: function (a) {
    a = a.na(this.ze);
    null != a && 0 == this.P && (a.Jd = this.Zb)
  },
  ua: function (a) {
    a.Db(this.Zb);
    a.O(this.ze)
  },
  va: function (a) {
    this.Zb = a.zb();
    this.ze = a.M();
    null != this.Zb && (this.Zb = U.Qc(this.Zb, 2))
  },
  f: qb
}); Oa.b = !0; Oa.ma = m; Oa.prototype = C(m.prototype, {
  apply: function (a) {
    var b = a.K;
    if (null != b && a.Lb(this.P, 16)) {
      var c = a.na(this.P),
        d = 120 == b.Oa,
        e = 0 < b.Oa;
      this.Bf ? b.Oa = 120 : 120 == b.Oa && (b.Oa = 119);
      d != this.Bf && Cb.i(a.ml, c, this.Bf, e)
    }
  },
  ua: function (a) {
    a.l(this.Bf ? 1 : 0)
  },
  va: function (a) {
    this.Bf = 0 != a.B()
  },
  f: Oa
}); Na.b = !0; Na.ma = m; Na.prototype = C(m.prototype, {
  $m: function (a) {
    if (null != a.hq) {
      var b = a.na(this.P);
      return null == b ? !1 : a.hq(b, this.Tc)
    }
    return !0
  },
  apply: function (a) {
    var b = a.na(this.P);
    null != b && ia.i(a.rl, b, this.Tc)
  },
  ua: function (a) {
    a.mc(U.Qc(this.Tc, 140))
  },
  va: function (a) {
    this.Tc = a.ic();
    if (140 < this.Tc.length) throw new q('message too long');
  },
  f: Na
}); Ga.b = !0; Ga.ma = m; Ga.prototype = C(m.prototype, {
  apply: function (a) {
    var b = a.na(this.P);
    if (null != b) {
      var c = this.input;
      0 == (b.ob & 16) && 0 != (c & 16) && (b.Wb = !0);
      b.ob = c;
      null != a.iq && a.iq(b)
    }
  },
  ua: function (a) {
    a.tb(this.input)
  },
  va: function (a) {
    this.input = a.hb()
  },
  f: Ga
}); na.b = !0; na.la = function (a) {
  var b = new na;
  b.sj = a;
  return b
}; na.ma = m; na.prototype = C(m.prototype, {
  apply: function (a) {
    var b = a.na(this.P);
    null != b && ia.i(a.wl, b, this.sj)
  },
  ua: function (a) {
    a.l(this.sj)
  },
  va: function (a) {
    this.sj = a.B()
  },
  f: na
}); kc.b = !0; kc.fj = function () {
  m.Ha(rb);
  m.Ha(na);
  m.Ha(Ua);
  m.Ha(Ga);
  m.Ha(Na);
  m.Ha(oa);
  m.Ha(Y);
  m.Ha(Ma);
  m.Ha(La);
  m.Ha(Oa);
  m.Ha(da);
  m.Ha(qa);
  m.Ha(S);
  m.Ha(pa);
  m.Ha(sa);
  m.Ha(Qa);
  m.Ha(ta);
  m.Ha(la);
  m.Ha(ra);
  m.Ha(Pa);
  m.Ha(pb);
  m.Ha(ma);
  m.Ha(qb);
  m.Ha(ob)
}; Y.b = !0; Y.la = function (a, b, c) {
  var d = new Y;
  d.V = a;
  d.fd = b;
  d.Qg = c;
  return d
}; Y.ma = m; Y.prototype = C(m.prototype, {
  apply: function (a) {
    if (0 != this.V && a.Lb(this.P, 128)) {
      var b = a.na(this.V);
      if (null != b) {
        var c = a.na(this.P);
        D.remove(a.I, b);
        null != a.K && D.remove(a.K.ta.F, b.H);
        vb.i(a.ul, b, this.fd, this.Qg, c)
      }
    }
  },
  ua: function (a) {
    null != this.fd && (this.fd = U.Qc(this.fd, 100));
    a.O(this.V);
    a.Db(this.fd);
    a.l(this.Qg ? 1 : 0)
  },
  va: function (a) {
    this.V = a.M();
    this.fd = a.zb();
    this.Qg = 0 != a.B();
    if (null != this.fd && 100 < this.fd.length) throw new q('string too long');
  },
  f: Y
}); pb.b = !0; pb.ma = m; pb.prototype = C(m.prototype, {
  apply: function (a) {
    if (0 == this.P) {
      for (var b = new Map, c = 0, d = a.I; c < d.length;) {
        var e = d[c];
        ++c;
        b.set(e.V, e)
      }
      c = [
      ];
      d = 0;
      for (e = this.Zg; d < e.length;) {
        var f = e[d];
        ++d;
        var g = b.get(f);
        null != g && (b['delete'](f), c.push(g))
      }
      d = [
      ];
      b = b.values();
      for (e = b.next(); !e.done;) f = e.value,
        e = b.next(),
        d.push(f);
      a.I = this.Zm ? c.concat(d) : d.concat(c)
    }
  },
  ua: function (a) {
    a.l(this.Zm ? 1 : 0);
    a.l(this.Zg.length);
    for (var b = 0, c = this.Zg; b < c.length;) a.O(c[b++])
  },
  va: function (a) {
    this.Zm = 0 != a.B();
    var b = a.B();
    this.Zg = [
    ];
    for (var c = 0; c < b;) ++c,
      this.Zg.push(a.M())
  },
  f: pb
}); ob.b = !0; ob.ma = m; ob.prototype = C(m.prototype, {
  apply: function (a) {
    if (0 == this.P) {
      var b = a.K;
      if (null != b) {
        if (this.Sm) {
          a = a.na(this.ze);
          if (null == a) return;
          a = a.H
        } else a = b.ta.F[this.ze];
        null != a && (null != this.Ka[0] && (a.a.x = this.Ka[0]), null != this.Ka[1] && (a.a.y = this.Ka[1]), null != this.Ka[2] && (a.D.x = this.Ka[2]), null != this.Ka[3] && (a.D.y = this.Ka[3]), null != this.Ka[4] && (a.oa.x = this.Ka[4]), null != this.Ka[5] && (a.oa.y = this.Ka[5]), null != this.Ka[6] && (a.Z = this.Ka[6]), null != this.Ka[7] && (a.m = this.Ka[7]), null != this.Ka[8] && (a.aa = this.Ka[8]), null != this.Ka[9] && (a.Ca = this.Ka[9]), null != this.Rc[0] && (a.R = this.Rc[0]), null != this.Rc[1] && (a.h = this.Rc[1]), null != this.Rc[2] && (a.v = this.Rc[2]))
      }
    }
  },
  ua: function (a) {
    a.O(this.ze);
    a.l(this.Sm ? 1 : 0);
    var b = a.a;
    a.Ub(0);
    for (var c = 0, d = 1, e = 0, f = this.Ka; e < f.length;) {
      var g = f[e];
      ++e;
      null != g && (c |= d, a.Wi(g));
      d <<= 1
    }
    e = 0;
    for (f = this.Rc; e < f.length;) g = f[e],
      ++e,
      null != g && (c |= d, a.O(g)),
      d <<= 1;
    d = a.a;
    a.a = b;
    a.Ub(c);
    a.a = d
  },
  va: function (a) {
    this.ze = a.M();
    this.Sm = 0 != a.B();
    var b = a.Ob();
    this.Ka = [
    ];
    for (var c = 0; 10 > c;) {
      var d = c++;
      this.Ka[d] = null;
      0 != (b & 1) && (this.Ka[d] = a.mi());
      b >>>= 1
    }
    this.Rc = [
    ];
    for (c = 0; 3 > c;) d = c++,
      this.Rc[d] = null,
      0 != (b & 1) && (this.Rc[d] = a.M()),
      b >>>= 1
  },
  f: ob
}); ma.b = !0; ma.la = function (a, b, c) {
  var d = new ma;
  d.min = a;
  d.nj = b;
  d.aj = c;
  return d
}; ma.ma = m; ma.prototype = C(m.prototype, {
  apply: function (a) {
    a.Lb(this.P, 2) && a.mr(a.na(this.P), this.min, this.nj, this.aj)
  },
  ua: function (a) {
    a.O(this.min);
    a.O(this.nj);
    a.O(this.aj)
  },
  va: function (a) {
    this.min = a.M();
    this.nj = a.M();
    this.aj = a.M()
  },
  f: ma
}); Ma.b = !0; Ma.ma = m; Ma.prototype = C(m.prototype, {
  apply: function (a) {
    a.Lb(this.P, 32) && a.yr(a.na(this.P), 0)
  },
  ua: function () {
  },
  va: function () {
  },
  f: Ma
}); La.b = !0; La.ma = m; La.prototype = C(m.prototype, {
  apply: function (a) {
    if (a.Lb(this.P, 32)) {
      var b = a.na(this.P);
      if (null != a.K) {
        a.K = null;
        for (var c = 0, d = a.I; c < d.length;) {
          var e = d[c];
          ++c;
          e.H = null;
          e.Jb = 0
        }
        null != a.vf && a.vf(b)
      }
    }
  },
  ua: function () {
  },
  va: function () {
  },
  f: La
}); la.b = !0; la.la = function (a) {
  for (var b = new la, c = a.T.I, d = [
  ], e = 0; e < c.length;) {
    var f = a.Ie.get(c[e++].V);
    d.push(null == f ? 0 : f.yb)
  }
  b.we = d;
  return b
}; la.ma = m; la.prototype = C(m.prototype, {
  apply: function (a) {
    if (0 == this.P) {
      a = a.I;
      for (var b = 0, c = a.length; b < c;) {
        var d = b++;
        if (d >= this.we.length) break;
        a[d].yb = this.we[d]
      }
    }
  },
  ua: function (a) {
    a.lb(this.we.length);
    for (var b = 0, c = this.we; b < c.length;) a.lb(c[b++])
  },
  va: function (a) {
    this.we = [
    ];
    for (var b = a.Ab(), c = 0; c < b;) ++c,
      this.we.push(a.Ab())
  },
  f: la
}); ca.b = !0; ca.Rd = [
  Ta
]; ca.qd = function (a, b) {
  a.Z = b.Z;
  a.m = b.m;
  a.aa = b.aa;
  a.Ca = b.Ca;
  a.R = b.R;
  a.Mj = b.Mj;
  a.h = b.h;
  a.v = b.v;
  var c = a.a,
    d = b.a;
  c.x = d.x;
  c.y = d.y;
  c = a.D;
  d = b.D;
  c.x = d.x;
  c.y = d.y;
  c = a.oa;
  d = b.oa;
  c.x = d.x;
  c.y = d.y
}; ca.prototype = {
  ga: function (a) {
    var b = this.a;
    a.s(b.x);
    a.s(b.y);
    b = this.D;
    a.s(b.x);
    a.s(b.y);
    b = this.oa;
    a.s(b.x);
    a.s(b.y);
    a.s(this.Z);
    a.s(this.m);
    a.s(this.aa);
    a.s(this.Ca);
    a.tb(this.R);
    a.O(this.h);
    a.O(this.v)
  },
  ja: function (a) {
    var b = this.a;
    b.x = a.u();
    b.y = a.u();
    b = this.D;
    b.x = a.u();
    b.y = a.u();
    b = this.oa;
    b.x = a.u();
    b.y = a.u();
    this.Z = a.u();
    this.m = a.u();
    this.aa = a.u();
    this.Ca = a.u();
    this.R = a.hb();
    this.h = a.M();
    this.v = a.M()
  },
  Pn: function (a) {
    var b = this.a,
      c = a.a,
      d = b.x - c.x,
      b = b.y - c.y,
      e = a.Z + this.Z,
      f = d * d + b * b;
    if (0 < f && f <= e * e) {
      var f = Math.sqrt(f),
        d = d / f,
        b = b / f,
        c = this.aa / (this.aa + a.aa),
        e = e - f,
        f = e * c,
        g = this.a,
        k = this.a;
      g.x = k.x + d * f;
      g.y = k.y + b * f;
      k = g = a.a;
      e -= f;
      g.x = k.x - d * e;
      g.y = k.y - b * e;
      e = this.D;
      f = a.D;
      e = d * (e.x - f.x) + b * (e.y - f.y);
      0 > e && (e *= this.m * a.m + 1, c *= e, g = f = this.D, f.x = g.x - d * c, f.y = g.y - b * c, a = f = a.D, c = e - c, f.x = a.x + d * c, f.y = a.y + b * c)
    }
  },
  Qn: function (a) {
    var b,
      c,
      d;
    if (0 != 0 * a.vb) {
      b = a.W.a;
      var e = a.ca.a;
      c = e.x - b.x;
      var f = e.y - b.y,
        g = this.a;
      d = g.x - e.x;
      e = g.y - e.y;
      g = this.a;
      if (0 >= (g.x - b.x) * c + (g.y - b.y) * f || 0 <= d * c + e * f) return;
      c = a.wa;
      b = c.x;
      c = c.y;
      d = b * d + c * e
    } else {
      c = a.Xd;
      d = this.a;
      b = d.x - c.x;
      c = d.y - c.y;
      d = a.Hg;
      e = a.Ig;
      if ((0 < d.x * b + d.y * c && 0 < e.x * b + e.y * c) == 0 >= a.vb) return;
      e = Math.sqrt(b * b + c * c);
      if (0 == e) return;
      d = e - a.Yj;
      b /= e;
      c /= e
    }
    e = a.Cc;
    if (0 == e) 0 > d && (d = - d, b = - b, c = - c);
    else if (0 > e && (e = - e, d = - d, b = - b, c = - c), d < - e) return;
    d >= this.Z || (d = this.Z - d, f = e = this.a, e.x = f.x + b * d, e.y = f.y + c * d, d = this.D, d = b * d.x + c * d.y, 0 > d && (d *= this.m * a.m + 1, e = a = this.D, a.x = e.x - b * d, a.y = e.y - c * d))
  },
  sc: function () {
    var a = ya.zc,
      b = this.gc;
    this.hc != a && (null == b && (this.gc = b = new ca), this.hc = a, ca.qd(b, this));
    return b
  },
  f: ca
}; nb.b = !0; nb.Rd = [
  Ta
]; nb.prototype = {
  ga: function (a) {
    a.l(this.Yd);
    a.l(this.Zd);
    a.s(this.Hb);
    a.s(this.ec);
    a.s(this.ne);
    a.O(this.R)
  },
  ja: function (a) {
    this.Yd = a.B();
    this.Zd = a.B();
    this.Hb = a.u();
    this.ec = a.u();
    this.ne = a.u();
    this.R = a.M()
  },
  C: function (a) {
    var b = a[this.Yd];
    a = a[this.Zd];
    if (null != b && null != a) {
      var c = b.a,
        d = a.a,
        e = c.x - d.x,
        c = c.y - d.y,
        f = Math.sqrt(e * e + c * c);
      if (!(0 >= f)) {
        e /= f;
        c /= f;
        d = b.aa / (b.aa + a.aa);
        d != d && (d = 0.5);
        var g,
          k;
        if (this.Hb >= this.ec) g = this.Hb,
          k = 0;
        else if (f <=
          this.Hb) g = this.Hb,
            k = 1;
        else if (f >= this.ec) g = this.ec,
          k = - 1;
        else return;
        f = g - f;
        if (0 == 0 * this.ne) d = this.ne * f * 0.5,
          e *= d,
          c *= d,
          k = d = b.D,
          b = b.aa,
          d.x = k.x + e * b,
          d.y = k.y + c * b,
          d = b = a.D,
          a = a.aa,
          b.x = d.x + - e * a,
          b.y = d.y + - c * a;
        else {
          g = f * d;
          var l = b.a,
            h = b.a;
          l.x = h.x + e * g * 0.5;
          l.y = h.y + c * g * 0.5;
          h = l = a.a;
          f -= g;
          l.x = h.x - e * f * 0.5;
          l.y = h.y - c * f * 0.5;
          f = b.D;
          g = a.D;
          f = e * (f.x - g.x) + c * (f.y - g.y);
          0 >= f * k && (d *= f, b = k = b.D, k.x = b.x - e * d, k.y = b.y - c * d, a = b = a.D, d = f - d, b.x = a.x + e * d, b.y = a.y + c * d)
        }
      }
    }
  },
  f: nb
}; Fa.b = !0; Fa.Rd = [
  Ta
]; Fa.qd = function (a, b) {
  if (null == b.F) a.F = null;
  else {
    null == a.F && (a.F = [
    ]);
    for (var c = a.F, d = b.F, e = d.length; c.length > e;) c.pop();
    for (var e = 0, f = d.length; e < f;) {
      var g = e++;
      c[g] = d[g].sc()
    }
  }
  a.J = b.J;
  a.U = b.U;
  a.qa = b.qa;
  a.pb = b.pb
}; Fa.prototype = {
  ga: function (a) {
    a.l(this.F.length);
    for (var b = 0, c = this.F.length; b < c;) {
      var d = b++,
        e = this.F[d];
      e.jl = d;
      e.ga(a)
    }
  },
  ja: function (a) {
    this.F = [
    ];
    for (var b = a.B(), c = 0; c < b;) {
      ++c;
      var d = new ca;
      d.ja(a);
      this.F.push(d)
    }
  },
  C: function (a) {
    for (var b = 0, c = this.F; b < c.length;) {
      var d = c[b];
      ++b;
      var e = d.a,
        f = d.a,
        g = d.D;
      e.x = f.x + g.x * a;
      e.y = f.y + g.y * a;
      f = e = d.D;
      g = d.oa;
      d = d.Ca;
      e.x = (f.x + g.x) * d;
      e.y = (f.y + g.y) * d
    }
    a = 0;
    for (b = this.F.length; a < b;) {
      d = a++;
      c = this.F[d];
      d += 1;
      for (e = this.F.length; d < e;) f = this.F[d++],
        0 != (f.h & c.v) && 0 != (f.v & c.h) && c.Pn(f);
      if (0 != c.aa) {
        d = 0;
        for (e = this.qa; d < e.length;) if (f = e[d], ++d, 0 != (f.h & c.v) && 0 != (f.v & c.h)) {
          var g = f.wa,
            k = c.a,
            g = f.Ua - (g.x * k.x + g.y * k.y) + c.Z;
          if (0 < g) {
            var l = k = c.a,
              h = f.wa;
            k.x = l.x + h.x * g;
            k.y = l.y + h.y * g;
            g = c.D;
            k = f.wa;
            g = g.x * k.x + g.y * k.y;
            0 > g && (g *= c.m * f.m + 1, l = k = c.D, f = f.wa, k.x = l.x - f.x * g, k.y = l.y - f.y * g)
          }
        }
        d = 0;
        for (e = this.U; d < e.length;) f = e[d],
          ++d,
          0 != (f.h & c.v) && 0 != (f.v & c.h) && c.Qn(f);
        d = 0;
        for (e = this.J; d < e.length;) if (f = e[d], ++d, 0 != (f.h & c.v) && 0 != (f.v & c.h) && (k = c.a, l = f.a, g = k.x - l.x, k = k.y - l.y, l = g * g + k * k, 0 < l && l <= c.Z * c.Z)) {
          var l = Math.sqrt(l),
            g = g / l,
            k = k / l,
            l = c.Z - l,
            m = h = c.a;
          h.x = m.x + g * l;
          h.y = m.y + k * l;
          l = c.D;
          l = g * l.x + k * l.y;
          0 > l && (l *= c.m * f.m + 1, h = f = c.D, f.x = h.x - g * l, f.y = h.y - k * l)
        }
      }
    }
    for (a = 0; 2 > a;) for (++a, b = 0, c = this.pb; b < c.length;) c[b++].C(this.F)
  },
  sc: function () {
    var a = ya.zc,
      b = this.gc;
    this.hc != a && (null == b && (this.gc = b = new Fa), this.hc = a, Fa.qd(b, this));
    return b
  },
  f: Fa
}; L.b = !0; L.prototype = {
  ga: function (a) {
    var b = this.wa;
    a.s(b.x);
    a.s(b.y);
    a.s(this.Ua);
    a.s(this.m);
    a.O(this.h);
    a.O(this.v)
  },
  ja: function (a) {
    var b = this.wa;
    b.x = a.u();
    b.y = a.u();
    this.Ua = a.u();
    this.m = a.u();
    this.h = a.M();
    this.v = a.M()
  },
  f: L
}; E.b = !0; E.prototype = {
  ga: function (a) {
    var b = 0,
      c = a.a;
    a.l(0);
    a.l(this.W.ud);
    a.l(this.ca.ud);
    0 != this.Cc && (b = 1, a.s(this.Cc));
    this.vb != 1 / 0 && (b |= 2, a.s(this.vb));
    0 != this.R && (b |= 4, a.O(this.R));
    this.Za && (b |= 8);
    a.o.setUint8(c, b);
    a.s(this.m);
    a.O(this.h);
    a.O(this.v)
  },
  ja: function (a, b) {
    var c = a.B();
    this.W = b[a.B()];
    this.ca = b[a.B()];
    this.Cc = 0 != (c & 1) ? a.u() : 0;
    this.vb = 0 != (c & 2) ? a.u() : 1 / 0;
    this.R = 0 != (c & 4) ? a.M() : 0;
    this.Za = 0 != (c & 8);
    this.m = a.u();
    this.h = a.M();
    this.v = a.M()
  },
  Oc: function (a) {
    a *= 0.017453292519943295;
    if (0 > a) {
      a = - a;
      var b = this.W;
      this.W = this.ca;
      this.ca = b;
      this.Cc = - this.Cc
    }
    a > E.mn && a < E.ln && (this.vb = 1 / Math.tan(a / 2))
  },
  Co: function () {
    return 0 != 0 * this.vb ? 0 : 114.59155902616465 * Math.atan(1 / this.vb)
  },
  he: function () {
    if (0 == 0 * this.vb) {
      var a = this.ca.a,
        b = this.W.a,
        c = 0.5 * (a.x - b.x),
        a = 0.5 * (a.y - b.y),
        b = this.W.a,
        d = this.vb;
      this.Xd = new H(b.x + c + - a * d, b.y + a + c * d);
      a = this.W.a;
      b = this.Xd;
      c = a.x - b.x;
      a = a.y - b.y;
      this.Yj = Math.sqrt(c * c + a * a);
      c = this.W.a;
      a = this.Xd;
      this.Hg = new H(- (c.y - a.y), c.x - a.x);
      c = this.Xd;
      a = this.ca.a;
      this.Ig = new H(- (c.y - a.y), c.x - a.x);
      0 >= this.vb && (a = c = this.Hg, c.x = - a.x, c.y = - a.y, a = c = this.Ig, c.x = - a.x, c.y = - a.y)
    } else a = this.W.a,
      b = this.ca.a,
      c = a.x - b.x,
      a = - (a.y - b.y),
      b = Math.sqrt(a * a + c * c),
      this.wa = new H(a / b, c / b)
  },
  f: E
}; B.b = !0; B.prototype = {
  ga: function (a) {
    var b = this.a;
    a.s(b.x);
    a.s(b.y);
    a.s(this.m);
    a.O(this.h);
    a.O(this.v)
  },
  ja: function (a) {
    var b = this.a;
    b.x = a.u();
    b.y = a.u();
    this.m = a.u();
    this.h = a.M();
    this.v = a.M()
  },
  f: B
}; N.b = !0; N.lc = function (a) {
  return 'rgba(' + [(a & 16711680) >>> 16,
  (a & 65280) >>> 8,
  a & 255].join() + ',255)'
}; N.Gi = function (a, b) {
  a.imageSmoothingEnabled = b;
  a.mozImageSmoothingEnabled = b
}; N.prototype = {
  Po: function (a, b) {
    var c = this.dd.get(a.V);
    if (null != c) switch (b) {
      case 0:
        c.Xf = !0;
        break;
      case 1:
        c.Xf = !1
    }
  },
  Pr: function () {
    if (null != this.sa.parentElement) {
      var a = window.devicePixelRatio * this.zg,
        b = this.sa.getBoundingClientRect(),
        c = Math.round(b.width * a),
        a = Math.round(b.height * a);
      if (this.sa.width !=
        c || this.sa.height != a) this.sa.width = c,
          this.sa.height = a
    }
  },
  Kc: function (a, b) {
    var c = window.performance.now(),
      d = (c - this.$c) / 1000;
    this.$c = c;
    this.Jg.clear();
    this.Pr();
    N.Gi(this.c, !0);
    this.c.resetTransform();
    if (null != a.K) {
      var c = a.K,
        e = c.ta,
        f = a.na(b),
        g = null != f ? f.H : null,
        k = 0 != this.jf ? this.sa.height / this.jf : this.kf * window.devicePixelRatio * this.zg,
        h = this.xf * this.zg,
        m = c.S.Ye,
        n = this.sa.width / k;
      0 < m && n > m && (n = m, k = this.sa.width / m);
      m = (this.sa.height - h) / k;
      this.Mr(c, g, n, m, d);
      for (var p = 0, q = a.I; p < q.length;) {
        var r = q[p];
        ++p;
        if (null != r.H) {
          var u = this.dd.get(r.V);
          null == u && (u = new Ea, this.dd.set(r.V, u));
          u.C(r, a);
          this.Jg.set(r.H, u)
        }
      }
      this.c.translate(this.sa.width / 2, (this.sa.height + h) / 2);
      this.c.scale(k, k);

      // console.log(a, b, c, d, e)
      // console.log(a.I[1].H.D, a.I[1].H.a)
      // a.I[i].V - id gracza
      // a.I[i].H nie może być null

      // this.c.translate(-a.I[1].H.a.x, -a.I[1].H.a.y)

      var translatetoDisc = {
        x: this.Ya.x,
        y: this.Ya.y
      }
      if (playerToFollow != 0) {
        var followedPlayer = players.find(element => element.V == playerToFollow)
        followedPlayer = players.indexOf(followedPlayer);
        if (a.I[followedPlayer] && a.I[followedPlayer].H != null) {
          translatetoDisc.x = a.I[followedPlayer].H.a.x;
          translatetoDisc.y = a.I[followedPlayer].H.a.y;
        }
      }
      this.c.translate(- translatetoDisc.x, - translatetoDisc.y);

      var mouseTranslated = {
        x: (mousepos.clientX + translatetoDisc.x) - (this.sa.width / 2) / k,
        y: (mousepos.clientY + translatetoDisc.y) - ((this.sa.height + h) / 2) / k
      }

      if (k == 1.5625) {
        mouseTranslated.x = ((mousepos.clientX + translatetoDisc.x) - (this.sa.width / 2) / k) // 1.25;
        mouseTranslated.x = ((mousepos.clientX + translatetoDisc.x) * k - (this.sa.width / 2)) / k;
        mouseTranslated.y = ((mousepos.clientY + translatetoDisc.y) - ((this.sa.height + h) / 2) / k) / 1.25
      } else if (k == 1.875) {
        mouseTranslated.x = ((mousepos.clientX + translatetoDisc.x) - (this.sa.width / 2) / k) // 1.5;
        mouseTranslated.y = ((mousepos.clientY + translatetoDisc.y) - ((this.sa.height + h) / 2) / k) // 1.5
      }

      // console.log(k, a.I[1].H.a, mouseTranslated)
      // var playerHovered = false
      // for (var i = 0; i < a.I.length; i++) {
      //   if (a.I[i].H != null) {
      //     if (distanceBetween(a.I[i].H.a, mouseTranslated) < a.I[i].H.Z) {
      //       playerHovered = a.I[i].V; // CHECKPOINT - na razie działa tylko na powiększeniu 1 (k) i promień gracza 15
      //       globalPlayerHovered = playerHovered;
      //     }
      //   }
      // }
      // if (playerHovered) mainCanvas.style.cursor = 'pointer'
      // else mainCanvas.style.cursor = 'default'

      // console.log(a.I[1].H.a.x, (mousepos.clientX + this.Ya.x) - (this.sa.width / 2) / k) - przełożenie myszki na mapę
      // CHECKPOINT moment, w którym widok centruje się na piłce
      this.c.lineWidth = 3;
      this.Sq(c.S);
      this.Rq(c.S);
      k = e.F;
      h = 0;
      for (p = e.pb; h < p.length;) this.Mq(p[h++], k);
      this.Lq(a, n, m);
      this.Nq(a, f);
      null != g && this.Pq(g.a);
      this.c.lineWidth = 2;
      ///// odtąd rysuje kulki każdego gracza (bez nicków)
      f = 0;
      for (g = a.I; f < g.length;) n = g[f],
        ++f,
        m = n.H,
        null != m && this.Ll(m, this.dd.get(n.V));
      /////////////////////////////////////////// dotąd
      f = 0;
      for (e = e.F; f < e.length;) g = e[f],
        ++f,
        null ==
        this.Jg.get(g) && this.Ll(g, null);
      this.c.lineWidth = 3;
      this.c.resetTransform();
      this.c.translate(this.sa.width / 2, this.sa.height / 2);
      this.Oq(c);
      0 >= c.Oa && (this.td.C(d), this.td.Kc(this.c));
      this.Jg.clear();
      this.Kq(a)
    }
  },
  Kq: function (a) {
    var b = new Set,
      c = 0;
    for (a = a.I; c < a.length;) b.add(a[c++].V);
    c = this.dd.keys();
    for (a = c.next(); !a.done;) {
      var d = a.value;
      a = c.next();
      if (!b.has(d)) this.dd['delete'](d)
    }
  },
  Mr: function (a, b, c, d, e) {
    var f,
      g;
    if (null != b && 1 == a.S.Ge) g = b.a,
      f = g.x,
      g = g.y;
    else if (g = a.ta.F[0].a, f = g.x, g = g.y, null != b) {
      var k = b.a;
      f = 0.5 * (f + k.x);
      g = 0.5 * (g + k.y);
      var h = 0.5 * c,
        m = 0.5 * d;
      b = k.x - h + 50;
      var n = k.y - m + 50,
        h = k.x + h - 50,
        k = k.y + m - 50;
      f = f > h ? h : f < b ? b : f;
      g = g > k ? k : g < n ? n : g
    }
    n = 60 * e;
    1 < n && (n = 1);
    b = e = this.Ya;
    n *= 0.04;
    h = b.x;
    b = b.y;
    e.x = h + (f - h) * n;
    e.y = b + (g - b) * n;
    this.Xn(c, d, a.S)
  },
  Xn: function (a, b, c) {
    a > 2 * c.$b ? this.Ya.x = 0 : this.Ya.x + 0.5 * a > c.$b ? this.Ya.x = c.$b - 0.5 * a : this.Ya.x - 0.5 * a < - c.$b && (this.Ya.x = - c.$b + 0.5 * a);
    b > 2 * c.qc ? this.Ya.y = 0 : this.Ya.y + 0.5 * b > c.qc ? this.Ya.y = c.qc - 0.5 * b : this.Ya.y - 0.5 * b < - c.qc && (this.Ya.y = - c.qc + 0.5 * b)
  },
  Pq: function (a) {
    this.c.beginPath();
    this.c.strokeStyle = 'white';
    this.c.globalAlpha = 0.3;
    this.c.arc(a.x, a.y, 25, 0, 2 * Math.PI, !1);
    this.c.stroke();
    this.c.globalAlpha = 1
  },
  Oq: function (a) {
    var b = 0 < a.Oa;
    this.lr(b);
    b && (120 != a.Oa && (a = a.Oa / 120 * 200, this.c.fillStyle = 'white', this.c.fillRect(0.5 * - a, 100, a, 20)), this.td.eq.Tq(this.c))
  },
  lr: function (a) {
    this.Dk != a && (this.sa.style.filter = a ? 'grayscale(70%)' : '', this.Dk = a)
  },
  Wl: function (a, b, c, d, e, f) {
    d = b + d;
    e = c + e;
    a.beginPath();
    a.moveTo(d - f, c);
    a.arcTo(d, c, d, c + f, f);
    a.lineTo(d, e - f);
    a.arcTo(d, e, d - f, e, f);
    a.lineTo(b + f, e);
    a.arcTo(b, e, b, e - f, f);
    a.lineTo(b, c + f);
    a.arcTo(b, c, b + f, c, f);
    a.closePath()
  },
  Sq: function (a) {
    var b = this;
    N.Gi(this.c, !1);
    var c = a.Td,
      d = a.Sd;
    if (1 == a.ld) this.c.save(),
      this.c.resetTransform(),
      this.c.fillStyle = N.lc(a.jd),
      this.c.fillRect(0, 0, this.sa.width, this.sa.height),
      this.c.restore(),
      this.c.strokeStyle = '#C7E6BD',
      this.c.fillStyle = this.Lo,
      this.Wl(this.c, - c, - d, 2 * c, 2 * d, a.Uc),
      this.c.save(),
      this.c.scale(2, 2),
      this.c.fill(),
      this.c.restore(),
      this.c.moveTo(0, - d),
      this.c.lineTo(0, d),
      this.c.stroke(),
      this.c.beginPath(),
      this.c.arc(0, 0, a.kd, 0, 2 * Math.PI),
      this.c.stroke();
    else if (2 == a.ld) {
      this.c.strokeStyle = '#E9CC6E';
      this.c.save();
      this.c.beginPath();
      this.c.rect(this.Ya.x - 10000, this.Ya.y - 10000, 20000, 20000);
      this.c.scale(2, 2);
      this.c.fillStyle = this.Un;
      this.c.fill();
      this.c.restore();
      this.c.save();
      this.Wl(this.c, - c, - d, 2 * c, 2 * d, a.Uc);
      this.c.scale(2, 2);
      this.c.fillStyle = this.Wn;
      this.c.fill();
      this.c.restore();
      this.c.stroke();
      this.c.beginPath();
      this.c.moveTo(0, - d);
      this.c.setLineDash([15,
        15]);
      this.c.lineTo(0, d);
      this.c.stroke();
      this.c.setLineDash([]);
      var e = a.Fe,
        c = c - e;
      e < a.Uc && (c = 0);
      e = function (c, e, h) {
        b.c.beginPath();
        b.c.strokeStyle = c;
        b.c.arc(0, 0, a.kd, - 1.5707963267948966, 1.5707963267948966, h);
        0 != e && (b.c.moveTo(e, - d), b.c.lineTo(e, d));
        b.c.stroke()
      };
      e('#85ACF3', c, !1);
      e('#E18977', - c, !0)
    } else this.c.save(),
      this.c.resetTransform(),
      this.c.fillStyle = N.lc(a.jd),
      this.c.fillRect(0, 0, this.sa.width, this.sa.height),
      this.c.restore();
    N.Gi(this.c, !0)
  },
  Nq: function (a, b) {
    for (var c = n.A.Ak.L(), d = 0, e = a.I; d < e.length;) {
      var f = e[d];
      ++d;
      var g = f.H;
      if (null != g) {
        var g = g.a,
          h = this.dd.get(f.V);
        c && h.Xf && this.c.drawImage(n.Dm, g.x - 0.5 * n.Dm.width, g.y - 35);
        f != b && h.so(this.c, g.x, g.y + 50)
      }
    }
  },
  Ll: function (a, b) {
    this.c.beginPath();
    null == b ? (this.c.fillStyle = N.lc(a.R), this.c.strokeStyle = 'black') : (this.c.fillStyle = b.Ij, this.c.strokeStyle = b.lo);
    this.c.beginPath();
    this.c.arc(a.a.x, a.a.y, a.Z, 0, 2 * Math.PI, !1);
    if (null != b) {
      this.c.save();
      var c = a.Z / 32;
      this.c.translate(a.a.x, a.a.y);
      this.c.scale(c, c);
      this.c.translate(- 32, - 32);
      this.c.fill();
      this.c.restore()
    } else - 1 != (a.R | 0) && this.c.fill();
    this.c.stroke()
  },
  Rq: function (a) {
    if (null !=
      a) {
      var b = 0;
      for (a = a.U; b < a.length;) this.Qq(a[b++])
    }
  },
  Mq: function (a, b) {
    if (!(0 > a.R)) {
      this.c.beginPath();
      this.c.strokeStyle = N.lc(a.R);
      var c = b[a.Yd],
        d = b[a.Zd];
      null != c && null != d && (c = c.a, d = d.a, this.c.moveTo(c.x, c.y), this.c.lineTo(d.x, d.y), this.c.stroke())
    }
  },
  Qq: function (a) {
    if (a.Za) {
      this.c.beginPath();
      this.c.strokeStyle = N.lc(a.R);
      var b = a.W.a,
        c = a.ca.a;
      if (0 != 0 * a.vb) this.c.moveTo(b.x, b.y),
        this.c.lineTo(c.x, c.y);
      else {
        a = a.Xd;
        var d = b.x - a.x,
          b = b.y - a.y;
        this.c.arc(a.x, a.y, Math.sqrt(d * d + b * b), Math.atan2(b, d), Math.atan2(c.y -
          a.y, c.x - a.x))
      }
      this.c.stroke()
    }
  },
  Lq: function (a, b, c) {
    var d = a.K;
    if (null != d) for (d = d.ta.F[0], this.nk(d.a, d.R, b, c), d = 0, a = a.I; d < a.length;) {
      var e = a[d];
      ++d;
      null != e.H && this.nk(e.H.a, e.ea.R, b, c)
    }
  },
  nk: function (a, b, c, d) {
    c = 0.5 * c - 25;
    d = 0.5 * d - 25;
    var e = this.Ya,
      f = a.x - e.x,
      e = a.y - e.y,
      g = - c,
      h = - d,
      l = this.Ya;
    c = l.x + (f > c ? c : f < g ? g : f);
    d = l.y + (e > d ? d : e < h ? h : e);
    f = a.x - c;
    a = a.y - d;
    900 < f * f + a * a && (this.c.fillStyle = 'rgba(0,0,0,0.5)', this.pk(c + 2, d + 2, Math.atan2(a, f)), this.c.fillStyle = N.lc(b), this.pk(c - 2, d - 2, Math.atan2(a, f)))
  },
  pk: function (a, b, c) {
    this.c.save();
    this.c.translate(a, b);
    this.c.rotate(c);
    this.c.beginPath();
    this.c.moveTo(15, 0);
    this.c.lineTo(0, 7);
    this.c.lineTo(0, - 7);
    this.c.closePath();
    this.c.fill();
    this.c.restore()
  },
  Xq: function () {
    for (var a = this.dd.values(), b = a.next(); !b.done;) {
      var c = b.value,
        b = a.next();
      c.Xf = !1
    }
  },
  f: N
};
R.b = !0;
R.prototype = {
  zo: function () {
    return 2.31 + 0.1155 * (this.We.length - 1)
  },
  Kc: function (a, b) {
    var c = b / 2.31,
      d = 0;
    a.imageSmoothingEnabled = !0;
    for (var e = 0, f = this.We; e < f.length;) {
      var g = f[e];
      ++e;
      var h = c - 0.05 * d,
        l = 180 * R.kn.eval(h) * (0 != (d & 1) ? - 1 : 1);
      a.globalAlpha = R.jn.eval(h);
      a.drawImage(g, l - 0.5 * g.width, 35 * - (this.We.length - 1) + 70 * d - 0.5 * g.height);
      a.globalAlpha = 1;
      ++d
    }
    a.imageSmoothingEnabled = !1
  },
  Tq: function (a) {
    var b = 0;
    a.imageSmoothingEnabled = !0;
    for (var c = 0, d = this.We; c < d.length;) {
      var e = d[c];
      ++c;
      a.drawImage(e, 0.5 * - e.width, 35 * - (this.We.length - 1) + 70 * b - 0.5 * e.height);
      ++b
    }
    a.imageSmoothingEnabled = !1
  },
  lc: function (a) {
    return 'rgba(' + [(a & 16711680) >>> 16,
    (a & 65280) >>> 8,
    a & 255].join() + ',255)'
  },
  sp: function (a, b) {
    var c = window.document.createElement('canvas'),
      d = c.getContext('2d', null);
    d.font = '900 70px Arial Black,Arial Bold,Gadget,sans-serif';
    c.width = Math.ceil(d.measureText(a).width) + 7;
    c.height = 90;
    d.font = '900 70px Arial Black,Arial Bold,Gadget,sans-serif';
    d.textAlign = 'left';
    d.textBaseline = 'middle';
    d.fillStyle = 'black';
    d.fillText(a, 7, 52);
    d.fillStyle = this.lc(b);
    d.fillText(a, 0, 45);
    return c
  },
  f: R
};
Sb.b = !0;
Sb.prototype = {
  Pa: function (a) {
    this.ab.push(a)
  },
  Nn: function () {
    this.ab = [
    ];
    this.xc = 0
  },
  C: function (a) {
    0 < this.ab.length && (this.xc += a, this.xc > this.ab[0].zo() && (this.xc = 0, this.ab.shift()))
  },
  Kc: function (a) {
    0 < this.ab.length && this.ab[0].Kc(a, this.xc)
  },
  f: Sb
};
Ea.b = !0;
Ea.Ln = function (a, b) {
  if (a.hd != b.hd || a.ed != b.ed) return !1;
  var c = a.fb,
    d = b.fb;
  if (c.length != d.length) return !1;
  for (var e = 0, f = c.length; e < f;) {
    var g = e++;
    if (c[g] != d[g]) return !1
  }
  return !0
};
Ea.ao = function (a, b) {
  a.hd = b.hd;
  a.ed = b.ed;
  a.fb = b.fb.slice(0)
};
Ea.prototype = {
  fo: function () {
    var a = window.document.createElement('canvas');
    a.width = 160;
    a.height = 34;
    this.vl = a.getContext('2d', null)
  },
  Or: function () {
    var a = this.vl;
    a.resetTransform();
    a.clearRect(0, 0, 160, 34);
    a.font = '26px sans-serif';
    a.fillStyle = 'white';
    160 < a.measureText(this.w).width ? (a.textAlign = 'left', a.translate(2, 29)) : (a.textAlign = 'center', a.translate(80, 29));
    a.fillText(this.w, 0, 0) //CHECKPOINT w tym miejscu podpisuje kulkę gracza
  },
  so: function (a, b, c) {
    a.drawImage(this.vl.canvas, 0, 0, 160, 34, b - 40, c - 34, 80, 17)
  },
  C: function (a, b) {
    if (null != a.H) {
      var c = n.A.xm.L() ? b.kb[a.ea.$] : a.ea.wm,
        d = null != a.Jd ? a.Jd : a.Xb,
        e = n.A.lm.L() && null != d;
      if (!Ea.Ln(this.kb, c) || !e && a.Jb != this.uh || e && this.Jf != d) Ea.ao(this.kb, c),
        e ? (this.Jf = d, this.uh = - 1) : (this.Jf = '' + a.Jb, this.uh = a.Jb),
        this.Hq(this.Jf)
    }
    this.lo = 0 < b.K.Oa || !a.Wb ? 'black' : a.Wb && 0 >= a.Sc && 0 <= a.yc ? 'white' : 'black';
    a.w != this.w && (this.w = a.w, this.Or())
  },
  Hq: function (a) {
    var b = this.kb.fb;
    if (!(1 > b.length)) {
      this.rb.save();
      this.rb.translate(32, 32);
      this.rb.rotate(3.141592653589793 * this.kb.hd / 128);
      for (var c = - 32, d = 64 / b.length, e = 0; e < b.length;) this.rb.fillStyle = N.lc(b[e++]),
        this.rb.fillRect(c, - 32, d + 4, 64),
        c += d;
      this.rb.restore();
      this.rb.fillStyle = N.lc(this.kb.ed);
      this.rb.textAlign = 'center';
      this.rb.textBaseline = 'alphabetic';
      this.rb.font = '900 34px \'Arial Black\',\'Arial Bold\',Gadget,sans-serif';
      this.rb.fillText(a, 32, 44);
      this.Ij = this.rb.createPattern(this.rb.canvas, 'no-repeat')
    }
  },
  f: Ea
};
mb.b = !0;
mb.prototype = {
  ki: function (a) {
    for (var b = this, c = 0, d = Ha.ab.length >> 2; c < d;) {
      var e = c++,
        f = [
          e
        ],
        g = Ha.ab[e << 2],
        e = Ha.ab[(e << 2) + 1].toLowerCase(),
        h = [
          window.document.createElement('div')
        ];
      h[0].className = 'elem';
      h[0].innerHTML = '<div class="flagico f-' + e + '"></div> ' + g;
      a.appendChild(h[0]);
      h[0].onclick = function (a, c) {
        return function () {
          null != b.rf && b.rf.Ja.classList.remove('selected');
          b.wh.disabled = !1;
          b.rf = {
            Ja: a[0],
            index: c[0]
          };
          a[0].classList.add('selected')
        }
      }(h, f);
      h[0].ondblclick = function (a) {
        return function () {
          b.Zl(a[0])
        }
      }(f)
    }
  },
  Zl: function (a) {
    var b = new T;
    b.ub = Ha.ab[(a << 2) + 1].toLowerCase();
    b.Ec = Ha.ab[(a << 2) + 2];
    b.Gc = Ha.ab[(a << 2) + 3];
    n.A.Ne.Xa(b);
    A.i(this.qb)
  },
  f: mb
};
Da.b = !0;
Da.Yo = function (a) {
  return a.parentElement.querySelector(':hover') == a
};
Da.prototype = {
  pp: function (a, b, c) {
    var d = window.document.createElement('p');
    d.className = 'announcement';
    d.textContent = a;
    0 <= b && (d.style.color = N.lc(b));
    switch (c) {
      case 1:
      case 4:
        d.style.fontWeight = 'bold';
        break;
      case 2:
      case 5:
        d.style.fontStyle = 'italic'
    }
    switch (c) {
      case 3:
      case 4:
      case 5:
        d.style.fontSize = '12px'
    }
    this.Ok(d)
  },
  Ok: function (a) {
    var b = this.dc.clientHeight,
      b = this.dc.scrollTop + b - this.dc.scrollHeight >= 0.5 * - b || !Da.Yo(this.dc);
    this.dc.appendChild(a);
    b && (this.dc.scrollTop = a.offsetTop);
    for (a = b ? 50 : 100; this.dc.childElementCount > a;) this.dc.firstElementChild.remove();
    // this.vg.update()
  },
  ba: function (a, b) {
    var c = window.document.createElement('p');
    null != b && (c.className = b);
    c.textContent = a;
    this.Ok(c)
  },
  Gb: function (a) {
    this.ba(a, 'notice');
  },
  f: Da
};
lb.b = !0;
lb.vo = function (a) {
  return - 1 != '.$^{[(|)*+?\\'.indexOf(a) ? '\\' + a : a
};
lb.prototype = {
  Qh: function () {
    this.Ui(null)
  },
  Hn: function (a, b) {
    var c = this.Iq.exec(D.substr(a, 0, b));
    if (null != c) {
      var d = c[0],
        e = new RegExp(D.substr(d, 1, null).split('').map(lb.vo).join('.*?'), 'i');
      this.Ek = '#' == d.charAt(0);
      this.si = c.index;
      this.Vq = d.length;
      this.Ml = a;
      for (var c = function (a) {
        a = e.exec(a.w);
        return null == a ? - 1 : a.index + a[0].length
      }, d = [
      ], f = 0, g = this.Hj; f < g.length;) {
        var h = g[f];
        ++f;
        var l = c(h);
        0 <= l && d.push({
          dn: l,
          item: h
        })
      }
      d.sort(function (a, b) {
        return a.dn - b.dn
      });
      this.Ui(d)
    } else this.Ui(null)
  },
  lk: function (a) {
    a = this.Ek ? '#' + a.$ : '@' + J.replace(a.w, ' ', '_');
    this.Rp(D.substr(this.Ml, 0, this.si) + a + ' ' + D.substr(this.Ml, this.si + this.Vq, null), this.si + a.length + 1)
  },
  Ui: function (a) {
    var b = this,
      c = null != a && 0 != a.length;
    this.Mb.hidden || v.Cf(this.Mb);
    this.Wc = null;
    this.Mb.hidden = !c;
    if (c) {
      for (var c = [
      ], d = 0; d < a.length;) {
        var e = a[d++],
          f = window.document.createElement('div'),
          e = [
            e.item
          ],
          g = e[0].w;
        this.Ek && (g = '(' + e[0].$ + ') ' + g);
        f.textContent = g;
        this.Mb.appendChild(f);
        f.onclick = function (a) {
          return function () {
            b.lk(a[0])
          }
        }(e);
        c.push({
          item: e[0],
          Ja: f
        })
      }
      this.Wc = c;
      this.Wc[0].Ja.classList.toggle('selected', !0);
      this.wc = 0
    }
  },
  Qj: function (a) {
    if (null != this.Wc) {
      var b = this.wc;
      this.wc += a;
      a = this.Wc.length - 1;
      0 > this.wc ? this.wc = a : this.wc > a && (this.wc = 0);
      a = this.Wc[this.wc];
      b != this.wc && (a.Ja.classList.toggle('selected', !0), this.Wc[b].Ja.classList.toggle('selected', !1));
      a = a.Ja;
      b = a.offsetTop;
      a = b + a.offsetHeight;
      var c = this.Mb.scrollTop +
        this.Mb.clientHeight;
      b < this.Mb.scrollTop ? this.Mb.scrollTop = b : a > c && (this.Mb.scrollTop = a - this.Mb.clientHeight)
    }
  },
  qo: function () {
    null != this.Wc && (this.lk(this.Wc[this.wc].item), this.Qh())
  },
  f: lb
};
kb.b = !0;
kb.prototype = {
  Dc: function () {
    var a = this.Cb.value;
    return 25 >= a.length ? 0 < a.length : !1
  },
  C: function () {
    //this.af.disabled = !this.Dc()
  },
  f: kb
};
jb.b = !0;
jb.prototype = {
  ba: function (a) {
    var b = window.document.createElement('p');
    b.textContent = a;
    this.dc.appendChild(b)
  },
  f: jb
};
ib.b = !0;
ib.prototype = {
  Fj: function (a) {
    this.Fm = a;
    this.Em.textContent = 'Show in room list: ' + (a ? 'No' : 'Yes')
  },
  Dc: function () {
    var a = this.$e.value;
    return 40 >= a.length ? 0 < a.length : !1
  },
  C: function () {
    this.Wj.disabled = !this.Dc()
  },
  f: ib
};
Ka.b = !0;
Ka.prototype = {
  f: Ka
};
hb.b = !0;
hb.prototype = {
  Gg: function (a) {
    this.g.classList.toggle('restricted', a)
  },
  C: function (a) {
    var b = a.K;
    //console.log(a.K.Hc, "eeee", (b.Hc | 0));//checkpoint czas w s.ms
    null != b && (this.xc.tr(60 * a.Da), this.xc.sr(b.Hc), this.Kb.set(b.Kb), this.Pb.set(b.Pb), this.Eb.Kc(a, this.Nb))
  },
  f: hb
};
Rb.b = !0;
Rb.prototype = {
  Wd: function (a, b) {
    var c = window.document.createElement('span');
    c.textContent = a;
    c.className = b;
    return c
  },
  sr: function (a) {
    if (a != this.Ke) {
      var b = Math.floor(a % 60),
        c = a / 60 | 0,
        d = a - Math.floor(a),
        e = d.toFixed(3);
      //console.log(a);
      if (e == 1) {
        b++;
        e = "0.0000";
      }
      //console.log(a,b,c,d,e);
      //console.log(a,b,c);checkpoint czas
      this.cr.textContent = '' + b % 10;
      this.dr.textContent = '' + (b / 10 | 0) % 10;
      this.yp.textContent = '' + c % 10;
      this.zp.textContent = '' + (c / 10 | 0) % 10;
      this.dziesiate.textContent = '' + Math.floor(e * 10);
      this.setne.textContent = '' + e.charAt(3);
      this.tysieczne.textContent = '' + e.charAt(4);
      //console.log(this.setne.textContent,this.tysieczne.textContent);
      //console.log(this.cr.textContent);
      this.Ke = a
    }
    this.Jl();
    this.Kl()
  },
  tr: function (a) {
    this.Da = a;
    this.Jl();
    this.Kl()
  },
  Jl: function () {
    this.pr(0 != this.Da && this.Ke > this.Da)
  },
  Kl: function () {
    this.ur(this.Ke < this.Da && this.Ke > this.Da - 30)
  },
  pr: function (a) {
    a != this.hk && (this.bq.className = a ? 'overtime on' : 'overtime', this.hk = a)
  },
  ur: function (a) {
    a != this.ik && (this.g.className = a ? 'game-timer-view time-warn' : 'game-timer-view', this.ik = a)
  },
  f: Rb
};
ja.b = !0;
ja.prototype = {
  C: function (a) {
    null == a.T.K && this.me(!0);
    A.i(this.yl);
    this.bi.disabled = null == a.T.K;
    this.Gd ? this.Wa.C(a.T, a.T.na(a.uc)) : (a = a.Sf(), this.Fb.C(a), n.Na.Xj.Ls(a))
  },
  me: function (a) {
    this.Gd != a && ((this.Gd = a) ? (this.Jh.appendChild(this.Wa.g), this.Fb.g.remove()) : (this.Jh.appendChild(this.Fb.g), this.Wa.g.remove()))
  },
  Zo: function () {
    return null != ja.kq
  },
  bb: function (a, b) {
    v.Cf(this.hf);
    ja.kq = a;
    null != a ? (this.hf.style.display = 'flex', this.hf.appendChild(a), this.yl = b) : (this.hf.style.display = 'none', this.yl = null)
  },
  f: ja
};
gb.b = !0;
gb.prototype = {
  Aj: function (a) {
    this.Jj = a;
    this.An.textContent = a ? 'Yes' : 'No'
  },
  f: gb
};
gxd.prototype = {
  Aj: function (a) {
    this.Jj = a;
    //this.An.textContent = a ? 'Yes' : 'No'
  },
  f: gb
};
fb.b = !0;
fb.prototype = {
  f: fb
};
eb.b = !0;
eb.prototype = {
  Lg: function () {
    this.hi.disabled = null == this.jb;
    this.bk.disabled = null == this.jb || null == this.jb.Lm;
    this.rk.disabled = null == this.jb
  },
  Sk: function (a, b, c) {
    var d = this,
      e = window.document.createElement('div');
    e.textContent = a;
    e.className = 'elem';
    null != c && e.classList.add('custom');
    var f = {
      Ja: e,
      Pd: b,
      Lm: c
    };
    e.onclick = function () {
      null != d.jb && d.jb.Ja.classList.remove('selected');
      d.jb = f;
      e.classList.add('selected');
      d.Lg()
    };
    e.ondblclick = function () {
      d.jb = f;
      d.Lg();
      return d.hi.onclick()
    };
    return e
  },
  ki: function (a) {
    for (var b = this, c = h.Kh(), d = 0; d < c.length;) {
      var e = [
        c[d]
      ];
      ++d;
      e = this.Sk(e[0].w, function (a) {
        return function () {
          return Promise.resolve(a[0])
        }
      }(e), null);
      a.appendChild(e)
    }
    Z.getAll().then(function (c) {
      for (var d = 0; d < c.length;) {
        var e = c[d];
        ++d;
        var f = [
          e.id
        ],
          e = b.Sk(e.name, function (a) {
            return function () {
              return Z.get(a[0])
            }
          }(f), function (a) {
            return function () {
              return Z['delete'](a[0])
            }
          }(f));
        a.appendChild(e)
      }
      b.vg.update()
    })
  },
  f: eb
};
Qb.b = !0;
Qb.prototype = {
  tn: function (a) {
    0 > a ? (a = 150, this.c.fillStyle = '#c13535') : this.c.fillStyle = 'green';
    var b = this.Vi,
      c = this.yk,
      d = this.Ah++;
    this.Ah >= b && (this.Ah = 0);
    this.fq[d] = a;
    this.c.clearRect(d, 0, 1, c);
    a = a * c / this.vp;
    this.c.fillRect(d, c - a, 1, a);
    this.Eh.clearRect(0, 0, b, c);
    this.Eh.drawImage(this.sa, b - d - 1, 0);
    this.Eh.drawImage(this.sa, - d - 1, 0)
  },
  f: Qb
};
db.b = !0;
db.prototype = {
  C: function (a, b) {
    var c = a.na(this.Nb);
    null == c ? A.i(this.qb) : (this.Nr(c), this.Hf.disabled = !b || 0 == this.Nb, this.Qe.disabled = !b || 0 == this.Nb)
  },
  Nr: function (a) {
    this.fe != a.w && this.Ej(a.w);
    this.ql != a.cb && this.Dj(a.cb)
  },
  Ej: function (a) {
    this.fe = a;
    this.Ze.textContent = a
  },
  Dj: function (a) {
    this.ql = a;
    this.Hf.textContent = a ? 'Remove Admin' : 'Give Admin'
  },
  f: db
};
cb.b = !0;
cb.prototype = {
  C: function (a, b) {
    this.g.draggable = b;
    this.yb != a.yb && (this.yb = a.yb, this.rg.textContent = '' + this.yb);
    this.un != a.cb && this.em(a.cb)
  },
  em: function (a) {
    this.un = a;
    this.g.className = 'player-list-item' + (a ? ' admin' : '')
  },
  f: cb
};
za.b = !0;
za.prototype = {
  C: function (a, b, c, d) {
    var e = this;
    this.Vh.disabled = b || c;
    this.vi.disabled = c;
    b = new Set;
    c = this.xd.keys();
    for (var f = c.next(); !f.done;) {
      var g = f.value,
        f = c.next();
      b.add(g)
    }
    for (c = 0; c < a.length;) f = a[c],
      ++c,
      g = this.xd.get(f.V),
      null == g && (g = new cb(f), g.ff = function (a) {
        y.i(e.ff, a)
      }, this.xd.set(f.V, g), this.ab.appendChild(g.g)),
      g.C(f, d),
      b['delete'](f.V);
    d = b.values();
    for (b = d.next(); !b.done;) c = b.value,
      b = d.next(),
      this.xd.get(c).g.remove(),
      this.xd['delete'](c);
    d = 0;
    for (b = a.length -
      1; d < b;) f = d++,
        c = this.xd.get(a[f].V).g,
        f = this.xd.get(a[f + 1].V).g,
        c.nextSibling != f && this.ab.insertBefore(c, f)
  },
  f: za
};
Q.b = !0;
Q.prototype = {
  f: Q
};
ha.b = !0;
ha.Wk = function (a) {
  a = a / 1000 | 0;
  return (a / 60 | 0) + ':' + J.Af(K.ye(a % 60))
};
ha.prototype = {
  C: function () {
    this.Er.textContent = ha.Wk(this.ti.Qb);
    this.Aq.style.width = 100 * this.ti.Go() + '%';
    !this.Wf || 0 < this.ti.Fd || (this.Wf = !1, this.Up())
  },
  f: ha
};
bb.b = !0;
bb.prototype = {
  nr: function (a) {
    this.gk != a && (this.gk = a, this.Zf.value = a)
  },
  f: bb
};
ab.b = !0;
ab.prototype = {
  f: ab
};
Aa.b = !0;
Aa.As = function (a) {
  return Promise.race([new Promise(function (a, c) {
    return window.setTimeout(function () {
      c(null)
    }, 5000)
  }),
    a])
};
Aa.prototype = {
  Om: function () {
    function a() {
      b.pj.disabled = !1;
      b.bn(c)
    }
    var b = this;
    this.en(null);
    this.pj.disabled = !0;
    v.Cf(this.gj);
    var c = [
    ];
    this.dj = [
    ];
    Aa.As(va.get().then(function (a) {
      return c = a
    }, function () {
      return {
      }
    })).then(a, a)
  },
  bn: function (a) {
    var b = this;
    this.dj = a;
    va.Hs(this.gs, a);
    a.sort(function (a, b) {
      return a.Le - b.Le
    });
    v.Cf(this.gj);
    for (var c = 0, d = 0, e = !this.fs.Ta, f = !this.zs.Ta, g = 0; g < a.length;) {
      var h = [
        a[g]
      ];
      ++g;
      var l = h[0].vd;
      if (!(e && l.I >= l.Xe || f && l.Ib)) {
        var m = [
          new ab(h[0])
        ];
        m[0].Ja.ondblclick = function (a) {
          return function () {
            y.i(b.Ym, a[0])
          }
        }(h);
        m[0].Ja.onclick = function (a) {
          return function () {
            b.en(a[0])
          }
        }(m);
        this.gj.appendChild(m[0].Ja);
        c += l.I;
        ++d
      }
    }
    // CHECKPOINT komentuję poniżej
    // this.Bs.update()
  },
  en: function (a) {
    null != this.Od && this.Od.Ja.classList.remove('selected');
    this.Od = a;
    null != this.Od && this.Od.Ja.classList.add('selected');
    this.Tm.disabled = null == this.Od
  },
  f: Aa
};
$a.b = !0;
$a.prototype = {
  Il: function () {
    var a = this;
    M.tk(/*n.Ee + 'api/notice'*/"https://kpias760.github.io/haxball-replay-analyzer.github.io/pliki/notice.json").then(function (b) {
      var c = b.content;
      null != c && '' != c && $a.On != c && (a.$n.innerHTML = c, a.Xk.hidden = !1, a.nd.onclick = function () {
        $a.On = c;
        return a.Xk.hidden = !0
      })
    })
  },
  f: $a
};
Za.b = !0;
Za.prototype = {
  Dc: function () {
    var a = this.Cb.value;
    return 30 >= a.length ? 0 < a.length : !1
  },
  C: function () {
    this.af.disabled = !this.Dc()
  },
  f: Za
};
Ya.b = !0;
Ya.prototype = {
  Th: function (a, b, c, d) {
    var e = this;
    v.xe(a, b.g);
    b.mg = function (a, b) {
      ia.i(e.mg, a, b)
    };
    b.ee = function (a) {
      y.i(e.ee, a)
    };
    b.Kp = function (a) {
      ia.i(e.mg, d, a)
    };
    b.ff = function (a) {
      y.i(e.ff, a)
    }
  },
  Tk: function (a) {
    for (var b = [
    ], c = 0; c <
      a;) {
      var d = c++;
      b.push(null == d ? 'null' : '' + d)
    }
    return b
  },
  Uk: function (a, b) {
    for (var c = 0; c < b.length;) {
      var d = b[c++],
        e = window.document.createElement('option');
      e.textContent = d;
      a.appendChild(e)
    }
  },
  rr: function (a) {
    this.Fl.classList.toggle('active', a)
  },
  C: function (a, b) {
    this.Uq != a.jc && (this.Uq = a.jc, this.jc.textContent = a.jc);
    var c = null == b ? !1 : b.cb;
    this.fk != c && (this.g.className = 'room-view' + (c ? ' admin' : ''), this.fk = c);
    var d = !c || null != a.K;
    this.wf.disabled = d;
    this.qf.disabled = d;
    this.sm.disabled = d;
    d = null != a.K;
    this.tm.hidden = d;
    this.vm.hidden = !d;
    this.gi.hidden = !d;
    this.wf.selectedIndex = a.Da;
    this.qf.selectedIndex = a.ib;
    this.rm.textContent = a.S.w;
    this.rm.classList.toggle('custom', !a.S.Pe());
    var e = a.Pc;
    this.Hl.C(a.I.filter(function (a) {
      return a.ea == p.fa
    }), e, d, c);
    this.Lj.C(a.I.filter(function (a) {
      return a.ea == p.xa
    }), e, d, c);
    this.qm.C(a.I.filter(function (a) {
      return a.ea == p.Ia
    }), e, d, c);
    this.Rl.disabled = d;
    this.Xh != a.Pc && this.Bj(a.Pc);
    d && (c = 120 == a.K.Oa, this.ll != c && this.Cj(c))
  },
  Bj: function (a) {
    this.Xh = a;
    this.Nk.innerHTML = this.Xh ? '<i class=\'icon-lock\'></i>Unlock' :
      '<i class=\'icon-lock-open\'></i>Lock'
  },
  Cj: function (a) {
    this.ll = a;
    this.gi.innerHTML = '<i class=\'icon-pause\'></i>' + (this.ll ? 'Resume (P)' : 'Pause (P)')
  },
  f: Ya
};
aa.b = !0;
aa.prototype = {
  f: aa
};
P.b = !0;
P.prototype = {
  f: P
};
Xa.b = !0;
Xa.prototype = {
  qr: function (a) {
    this.rg.textContent = null == a ? 'null' : '' + a
  },
  or: function (a) {
    this.wp.textContent = '' + a
  },
  hm: function (a) {
    if (this.wo !== undefined) {
      this.wo.textContent = null == a ? 'null' : '' + a
    }
  },
  f: Xa
};
Wa.b = !0;
Wa.prototype = {
  f: Wa
};
q.b = !0;
q.ma = Error;
q.prototype = C(Error.prototype, {
  f: q
});
r.b = !0;
r.Nm = function (a) {
  if (a instanceof Array && null == a.eb) return Array;
  var b = a.f;
  if (null != b) return b;
  a = r.wj(a);
  return null != a ? r.rn(a) : null
};
r.Be = function (a, b) {
  if (null == a) return 'null';
  if (5 <= b.length) return '<...>';
  var c = typeof a;
  'function' == c && (a.b || a.Gf) && (c = 'object');
  switch (c) {
    case 'function':
      return '<function>';
    case 'object':
      if (a.eb) {
        var d = Ab[a.eb],
          c = d.nh[a.nb],
          e = d[c];
        if (e.Ae) {
          b += '\t';
          for (var c = c + '(', d = [
          ], f = 0, e = e.Ae; f < e.length;) {
            var g = e[f];
            ++f;
            d.push(r.Be(a[g], b))
          }
          return c + d.join(',') + ')'
        }
        return c
      }
      if (a instanceof Array) {
        c = a.length;
        d = '[';
        b += '\t';
        for (f = 0; f < c;) e = f++,
          d += (0 < e ? ',' : '') + r.Be(a[e], b);
        return d + ']'
      }
      try {
        d = a.toString
      } catch (k) {
        return '???'
      }
      if (null != d && d != Object.toString && 'function' == typeof d && (c = a.toString(), '[object Object]' != c)) return c;
      c = null;
      d = '{\n';
      b += '\t';
      f = null != a.hasOwnProperty;
      for (c in a) f && !a.hasOwnProperty(c) || 'prototype' == c || '__class__' == c || '__super__' == c || '__interfaces__' == c || '__properties__' == c || (2 != d.length && (d += ', \n'), d += b + c + ' : ' + r.Be(a[c], b));
      b = b.substring(1);
      return d + ('\n' + b + '}');
    case 'string':
      return a;
    default:
      return String(a)
  }
};
r.ph = function (a, b) {
  if (null == a) return !1;
  if (a == b) return !0;
  var c = a.Rd;
  if (null != c) for (var d = 0, e = c.length; d < e;) {
    var f = c[d++];
    if (f == b || r.ph(f, b)) return !0
  }
  return r.ph(a.ma, b)
};
r.pn = function (a, b) {
  if (null == b) return !1;
  switch (b) {
    case Array:
      return a instanceof Array ? null == a.eb : !1;
    case oc:
      return 'boolean' == typeof a;
    case sc:
      return !0;
    case z:
      return 'number' == typeof a;
    case Pb:
      return 'number' == typeof a ? (a | 0) === a : !1;
    case String:
      return 'string' == typeof a;
    default:
      if (null != a) if ('function' == typeof b) {
        if (a instanceof b || r.ph(r.Nm(a), b)) return !0
      } else {
        if ('object' == typeof b && r.qn(b) && a instanceof b) return !0
      } else return !1;
      return b == tc && null != a.b || b == uc && null != a.Gf ? !0 : Ab[a.eb] == b
  }
};
r.G = function (a, b) {
  if (r.pn(a, b)) return a;
  throw new q('Cannot cast ' + K.ye(a) + ' to ' + K.ye(b));
};
r.wj = function (a) {
  a = r.sn.call(a).slice(8, - 1);
  return 'Object' == a || 'Function' == a || 'Math' == a || 'JSON' == a ? null : a
};
r.qn = function (a) {
  return null != r.wj(a)
};
r.rn = function (a) {
  return qc[a]
};
hc.b = !0;
hc.Is = function (a, b) {
  var c = new Uint8Array(this, a, null == b ? null : b - a),
    d = new Uint8Array(c.byteLength);
  d.set(c);
  return d.buffer
};
var rc = 0;
null == String.fromCodePoint && (String.fromCodePoint = function (a) {
  return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
});
String.prototype.f = String;
String.b = !0;
Array.b = !0;
Date.prototype.f = Date;
Date.b = 'Date';
var Pb = {
},
  sc = {
  },
  z = Number,
  oc = Boolean,
  tc = {
  },
  uc = {
  };
p.Ia = new p(0, 16777215, 0, - 1, 'Spectators', 't-spec', 0, 0);
p.fa = new p(1, 15035990, - 1, 8, 'Red', 't-red', 0, 2);
p.xa = new p(2, 5671397, 1, 16, 'Blue', 't-blue', 0, 4);
p.Ia.pg = p.Ia;
p.fa.pg = p.xa;
p.xa.pg = p.fa;
Object.defineProperty(q.prototype, 'message', {
  get: function () {
    return String(this.Ta)
  }
});
null == ArrayBuffer.prototype.slice && (ArrayBuffer.prototype.slice = hc.Is);
Va.Yn = {
  mandatory: {
    OfferToReceiveAudio: !1,
    OfferToReceiveVideo: !1
  }
};
I.qh = {
  name: 'ECDSA',
  namedCurve: 'P-256'
};
I.mm = {
  name: 'ECDSA',
  hash: {
    name: 'SHA-256'
  }
};
Ba.Uo = [
  'click-rail',
  'drag-thumb',
  'wheel',
  'touch'
];
m.Qm = new Map;
m.yf = 0;
Ua.za = m.Fa({
  Ba: !1,
  Aa: !1
});
ya.zc = 0;
Zb.Km = [
  {
    name: 'ro',
    reliable: !0,
    kj: !0
  },
  {
    name: 'ru',
    reliable: !0,
    kj: !1
  },
  {
    name: 'uu',
    reliable: !1,
    kj: !1
  }
];
M.vj = 'application/x-www-form-urlencoded';
Ha.ab = [
  'Afghanistan',
  'AF',
  33.3,
  65.1,
  'Albania',
  'AL',
  41.1,
  20.1,
  'Algeria',
  'DZ',
  28,
  1.6,
  'American Samoa',
  'AS',
  - 14.2,
  - 170.1,
  'Andorra',
  'AD',
  42.5,
  1.6,
  'Angola',
  'AO',
  - 11.2,
  17.8,
  'Anguilla',
  'AI',
  18.2,
  - 63,
  'Antigua and Barbuda',
  'AG',
  17,
  - 61.7,
  'Argentina',
  'AR',
  - 34.5,
  - 58.4,
  'Armenia',
  'AM',
  40,
  45,
  'Aruba',
  'AW',
  12.5,
  - 69.9,
  'Australia',
  'AU',
  - 25.2,
  133.7,
  'Austria',
  'AT',
  47.5,
  14.5,
  'Azerbaijan',
  'AZ',
  40.1,
  47.5,
  'Bahamas',
  'BS',
  25,
  - 77.3,
  'Bahrain',
  'BH',
  25.9,
  50.6,
  'Bangladesh',
  'BD',
  23.6,
  90.3,
  'Barbados',
  'BB',
  13.1,
  - 59.5,
  'Belarus',
  'BY',
  53.7,
  27.9,
  'Belgium',
  'BE',
  50.5,
  4.4,
  'Belize',
  'BZ',
  17.1,
  - 88.4,
  'Benin',
  'BJ',
  9.3,
  2.3,
  'Bermuda',
  'BM',
  32.3,
  - 64.7,
  'Bhutan',
  'BT',
  27.5,
  90.4,
  'Bolivia',
  'BO',
  - 16.2,
  - 63.5,
  'Bosnia and Herzegovina',
  'BA',
  43.9,
  17.6,
  'Botswana',
  'BW',
  - 22.3,
  24.6,
  'Bouvet Island',
  'BV',
  - 54.4,
  3.4,
  'Brazil',
  'BR',
  - 14.2,
  - 51.9,
  'British Indian Ocean Territory',
  'IO',
  - 6.3,
  71.8,
  'British Virgin Islands',
  'VG',
  18.4,
  - 64.6,
  'Brunei',
  'BN',
  4.5,
  114.7,
  'Bulgaria',
  'BG',
  42.7,
  25.4,
  'Burkina Faso',
  'BF',
  12.2,
  - 1.5,
  'Burundi',
  'BI',
  - 3.3,
  29.9,
  'Cambodia',
  'KH',
  12.5,
  104.9,
  'Cameroon',
  'CM',
  7.3,
  12.3,
  'Canada',
  'CA',
  56.1,
  - 106.3,
  'Cape Verde',
  'CV',
  16,
  - 24,
  'Cayman Islands',
  'KY',
  19.5,
  - 80.5,
  'Central African Republic',
  'CF',
  6.6,
  20.9,
  'Chad',
  'TD',
  15.4,
  18.7,
  'Chile',
  'CL',
  - 35.6,
  - 71.5,
  'China',
  'CN',
  35.8,
  104.1,
  'Christmas Island',
  'CX',
  - 10.4,
  105.6,
  'Colombia',
  'CO',
  4.5,
  - 74.2,
  'Comoros',
  'KM',
  - 11.8,
  43.8,
  'Congo [DRC]',
  'CD',
  - 4,
  21.7,
  'Congo [Republic]',
  'CG',
  - 0.2,
  15.8,
  'Cook Islands',
  'CK',
  - 21.2,
  - 159.7,
  'Costa Rica',
  'CR',
  9.7,
  - 83.7,
  'Croatia',
  'HR',
  45.1,
  15.2,
  'Cuba',
  'CU',
  21.5,
  - 77.7,
  'Cyprus',
  'CY',
  35.1,
  33.4,
  'Czech Republic',
  'CZ',
  49.8,
  15.4,
  'Côte d\'Ivoire',
  'CI',
  7.5,
  - 5.5,
  'Denmark',
  'DK',
  56.2,
  9.5,
  'Djibouti',
  'DJ',
  11.8,
  42.5,
  'Dominica',
  'DM',
  15.4,
  - 61.3,
  'Dominican Republic',
  'DO',
  18.7,
  - 70.1,
  'Ecuador',
  'EC',
  - 1.8,
  - 78.1,
  'Egypt',
  'EG',
  26.8,
  30.8,
  'El Salvador',
  'SV',
  13.7,
  - 88.8,
  'Equatorial Guinea',
  'GQ',
  1.6,
  10.2,
  'Eritrea',
  'ER',
  15.1,
  39.7,
  'Estonia',
  'EE',
  58.5,
  25,
  'Ethiopia',
  'ET',
  9.1,
  40.4,
  'Faroe Islands',
  'FO',
  61.8,
  - 6.9,
  'Fiji',
  'FJ',
  - 16.5,
  179.4,
  'Finland',
  'FI',
  61.9,
  25.7,
  'France',
  'FR',
  46.2,
  2.2,
  'French Guiana',
  'GF',
  3.9,
  - 53.1,
  'French Polynesia',
  'PF',
  - 17.6,
  - 149.4,
  'Gabon',
  'GA',
  - 0.8,
  11.6,
  'Gambia',
  'GM',
  13.4,
  - 15.3,
  'Georgia',
  'GE',
  42.3,
  43.3,
  'Germany',
  'DE',
  51.1,
  10.4,
  'Ghana',
  'GH',
  7.9,
  - 1,
  'Gibraltar',
  'GI',
  36.1,
  - 5.3,
  'Greece',
  'GR',
  39,
  21.8,
  'Greenland',
  'GL',
  71.7,
  - 42.6,
  'Grenada',
  'GD',
  12.2,
  - 61.6,
  'Guadeloupe',
  'GP',
  16.9,
  - 62,
  'Guam',
  'GU',
  13.4,
  144.7,
  'Guatemala',
  'GT',
  15.7,
  - 90.2,
  'Guinea',
  'GN',
  9.9,
  - 9.6,
  'Guinea-Bissau',
  'GW',
  11.8,
  - 15.1,
  'Guyana',
  'GY',
  4.8,
  - 58.9,
  'Haiti',
  'HT',
  18.9,
  - 72.2,
  'Honduras',
  'HN',
  15.1,
  - 86.2,
  'Hong Kong',
  'HK',
  22.3,
  114.1,
  'Hungary',
  'HU',
  47.1,
  19.5,
  'Iceland',
  'IS',
  64.9,
  - 19,
  'India',
  'IN',
  20.5,
  78.9,
  'Indonesia',
  'ID',
  - 0.7,
  113.9,
  'Iran',
  'IR',
  32.4,
  53.6,
  'Iraq',
  'IQ',
  33.2,
  43.6,
  'Ireland',
  'IE',
  53.4,
  - 8.2,
  'Israel',
  'IL',
  31,
  34.8,
  'Italy',
  'IT',
  41.8,
  12.5,
  'Jamaica',
  'JM',
  18.1,
  - 77.2,
  'Japan',
  'JP',
  36.2,
  138.2,
  'Jordan',
  'JO',
  30.5,
  36.2,
  'Kazakhstan',
  'KZ',
  48,
  66.9,
  'Kenya',
  'KE',
  - 0,
  37.9,
  'Kiribati',
  'KI',
  - 3.3,
  - 168.7,
  'Kosovo',
  'XK',
  42.6,
  20.9,
  'Kuwait',
  'KW',
  29.3,
  47.4,
  'Kyrgyzstan',
  'KG',
  41.2,
  74.7,
  'Laos',
  'LA',
  19.8,
  102.4,
  'Latvia',
  'LV',
  56.8,
  24.6,
  'Lebanon',
  'LB',
  33.8,
  35.8,
  'Lesotho',
  'LS',
  - 29.6,
  28.2,
  'Liberia',
  'LR',
  6.4,
  - 9.4,
  'Libya',
  'LY',
  26.3,
  17.2,
  'Liechtenstein',
  'LI',
  47.1,
  9.5,
  'Lithuania',
  'LT',
  55.1,
  23.8,
  'Luxembourg',
  'LU',
  49.8,
  6.1,
  'Macau',
  'MO',
  22.1,
  113.5,
  'Macedonia [FYROM]',
  'MK',
  41.6,
  21.7,
  'Madagascar',
  'MG',
  - 18.7,
  46.8,
  'Malawi',
  'MW',
  - 13.2,
  34.3,
  'Malaysia',
  'MY',
  4.2,
  101.9,
  'Maldives',
  'MV',
  3.2,
  73.2,
  'Mali',
  'ML',
  17.5,
  - 3.9,
  'Malta',
  'MT',
  35.9,
  14.3,
  'Marshall Islands',
  'MH',
  7.1,
  171.1,
  'Martinique',
  'MQ',
  14.6,
  - 61,
  'Mauritania',
  'MR',
  21,
  - 10.9,
  'Mauritius',
  'MU',
  - 20.3,
  57.5,
  'Mayotte',
  'YT',
  - 12.8,
  45.1,
  'Mexico',
  'MX',
  23.6,
  - 102.5,
  'Micronesia',
  'FM',
  7.4,
  150.5,
  'Moldova',
  'MD',
  47.4,
  28.3,
  'Monaco',
  'MC',
  43.7,
  7.4,
  'Mongolia',
  'MN',
  46.8,
  103.8,
  'Montenegro',
  'ME',
  42.7,
  19.3,
  'Montserrat',
  'MS',
  16.7,
  - 62.1,
  'Morocco',
  'MA',
  31.7,
  - 7,
  'Mozambique',
  'MZ',
  - 18.6,
  35.5,
  'Myanmar [Burma]',
  'MM',
  21.9,
  95.9,
  'Namibia',
  'NA',
  - 22.9,
  18.4,
  'Nauru',
  'NR',
  - 0.5,
  166.9,
  'Nepal',
  'NP',
  28.3,
  84.1,
  'Netherlands',
  'NL',
  52.1,
  5.2,
  'Netherlands Antilles',
  'AN',
  12.2,
  - 69,
  'New Caledonia',
  'NC',
  - 20.9,
  165.6,
  'New Zealand',
  'NZ',
  - 40.9,
  174.8,
  'Nicaragua',
  'NI',
  12.8,
  - 85.2,
  'Niger',
  'NE',
  17.6,
  8,
  'Nigeria',
  'NG',
  9,
  8.6,
  'Niue',
  'NU',
  - 19,
  - 169.8,
  'Norfolk Island',
  'NF',
  - 29,
  167.9,
  'North Korea',
  'KP',
  40.3,
  127.5,
  'Northern Mariana Islands',
  'MP',
  17.3,
  145.3,
  'Norway',
  'NO',
  60.4,
  8.4,
  'Oman',
  'OM',
  21.5,
  55.9,
  'Pakistan',
  'PK',
  30.3,
  69.3,
  'Palau',
  'PW',
  7.5,
  134.5,
  'Palestinian Territories',
  'PS',
  31.9,
  35.2,
  'Panama',
  'PA',
  8.5,
  - 80.7,
  'Papua New Guinea',
  'PG',
  - 6.3,
  143.9,
  'Paraguay',
  'PY',
  - 23.4,
  - 58.4,
  'Peru',
  'PE',
  - 9.1,
  - 75,
  'Philippines',
  'PH',
  12.8,
  121.7,
  'Pitcairn Islands',
  'PN',
  - 24.7,
  - 127.4,
  'Poland',
  'PL',
  51.9,
  19.1,
  'Portugal',
  'PT',
  39.3,
  - 8.2,
  'Puerto Rico',
  'PR',
  18.2,
  - 66.5,
  'Qatar',
  'QA',
  25.3,
  51.1,
  'Romania',
  'RO',
  45.9,
  24.9,
  'Russia',
  'RU',
  61.5,
  105.3,
  'Rwanda',
  'RW',
  - 1.9,
  29.8,
  'Réunion',
  'RE',
  - 21.1,
  55.5,
  'Saint Helena',
  'SH',
  - 24.1,
  - 10,
  'Saint Kitts',
  'KN',
  17.3,
  - 62.7,
  'Saint Lucia',
  'LC',
  13.9,
  - 60.9,
  'Saint Pierre',
  'PM',
  46.9,
  - 56.2,
  'Saint Vincent',
  'VC',
  12.9,
  - 61.2,
  'Samoa',
  'WS',
  - 13.7,
  - 172.1,
  'San Marino',
  'SM',
  43.9,
  12.4,
  'Saudi Arabia',
  'SA',
  23.8,
  45,
  'Scotland',
  'SCT',
  56.5,
  4.2,
  'Senegal',
  'SN',
  14.4,
  - 14.4,
  'Serbia',
  'RS',
  44,
  21,
  'Seychelles',
  'SC',
  - 4.6,
  55.4,
  'Sierra Leone',
  'SL',
  8.4,
  - 11.7,
  'Singapore',
  'SG',
  1.3,
  103.8,
  'Slovakia',
  'SK',
  48.6,
  19.6,
  'Slovenia',
  'SI',
  46.1,
  14.9,
  'Solomon Islands',
  'SB',
  - 9.6,
  160.1,
  'Somalia',
  'SO',
  5.1,
  46.1,
  'South Africa',
  'ZA',
  - 30.5,
  22.9,
  'South Georgia',
  'GS',
  - 54.4,
  - 36.5,
  'South Korea',
  'KR',
  35.9,
  127.7,
  'Spain',
  'ES',
  40.4,
  - 3.7,
  'Sri Lanka',
  'LK',
  7.8,
  80.7,
  'Sudan',
  'SD',
  12.8,
  30.2,
  'Suriname',
  'SR',
  3.9,
  - 56,
  'Svalbard and Jan Mayen',
  'SJ',
  77.5,
  23.6,
  'Swaziland',
  'SZ',
  - 26.5,
  31.4,
  'Sweden',
  'SE',
  60.1,
  18.6,
  'Switzerland',
  'CH',
  46.8,
  8.2,
  'Syria',
  'SY',
  34.8,
  38.9,
  'São Tomé and Príncipe',
  'ST',
  0.1,
  6.6,
  'Taiwan',
  'TW',
  23.6,
  120.9,
  'Tajikistan',
  'TJ',
  38.8,
  71.2,
  'Tanzania',
  'TZ',
  - 6.3,
  34.8,
  'Thailand',
  'TH',
  15.8,
  100.9,
  'Timor-Leste',
  'TL',
  - 8.8,
  125.7,
  'Togo',
  'TG',
  8.6,
  0.8,
  'Tokelau',
  'TK',
  - 8.9,
  - 171.8,
  'Tonga',
  'TO',
  - 21.1,
  - 175.1,
  'Trinidad and Tobago',
  'TT',
  10.6,
  - 61.2,
  'Tunisia',
  'TN',
  33.8,
  9.5,
  'Turkey',
  'TR',
  38.9,
  35.2,
  'Turkmenistan',
  'TM',
  38.9,
  59.5,
  'Turks and Caicos Islands',
  'TC',
  21.6,
  - 71.7,
  'Tuvalu',
  'TV',
  - 7.1,
  177.6,
  'U.S. Minor Outlying Islands',
  'UM',
  0,
  0,
  'U.S. Virgin Islands',
  'VI',
  18.3,
  - 64.8,
  'Uganda',
  'UG',
  1.3,
  32.2,
  'Ukraine',
  'UA',
  48.3,
  31.1,
  'United Arab Emirates',
  'AE',
  23.4,
  53.8,
  'United Kingdom',
  'GB',
  55.3,
  - 3.4,
  'United States',
  'US',
  37,
  - 95.7,
  'Uruguay',
  'UY',
  - 32.5,
  - 55.7,
  'Uzbekistan',
  'UZ',
  41.3,
  64.5,
  'Vanuatu',
  'VU',
  - 15.3,
  166.9,
  'Vatican City',
  'VA',
  41.9,
  12.4,
  'Venezuela',
  'VE',
  6.4,
  - 66.5,
  'Vietnam',
  'VN',
  14,
  108.2,
  'Wallis and Futuna',
  'WF',
  - 13.7,
  - 177.1,
  'Western Sahara',
  'EH',
  24.2,
  - 12.8,
  'Yemen',
  'YE',
  15.5,
  48.5,
  'Zambia',
  'ZM',
  - 13.1,
  27.8,
  'Zimbabwe',
  'ZW',
  - 19,
  29.1
];
n.Vr = 'wss://p2p.haxball.com/';
n.Ee = 'https://haxball-replay-analyzer.github.io/';
n.Vf = [
  {
    urls: 'stun:stun.l.google.com:19302'
  }
];
n.A = new Yb;
O.Yk = function () {
  for (var a = [
  ], b = 0; 256 > b;) ++b,
    a.push(new H(0, 0));
  return a
}(this);
O.dk = function () {
  for (var a = [
  ], b = 0; 256 > b;) ++b,
    a.push(0);
  return a
}(this);
h.Fr = w.ha(1024);
ta.za = m.Fa({
  Ba: !1,
  Aa: !1
});
rb.za = m.Fa({
  Ba: !1,
  Aa: !1,
  oj: {
    $i: 10,
    uj: 900
  }
});
Qa.za = m.Fa({
  Ba: !1,
  Aa: !1
});
da.za = m.Fa({
  Ba: !1,
  Aa: !1
});
sa.za = m.Fa({
  Ba: !1,
  Aa: !1
});
ra.za = m.Fa({
  Ba: !1,
  Aa: !1
});
S.za = m.Fa({
  Ba: !1,
  Aa: !1
});
qa.za = m.Fa({
  Ba: !1,
  Aa: !1,
  oj: {
    $i: 10,
    uj: 2000
  }
});
Pa.za = m.Fa({
  Ba: !1,
  Aa: !1
});
pa.za = m.Fa({
  Ba: !1,
  Aa: !1
});
oa.za = m.Fa({
  Ba: !1,
  Aa: !1
});
qb.za = m.Fa({
  Ba: !1,
  Aa: !1
});
Oa.za = m.Fa({
});
Na.za = m.Fa({
  Ba: !1,
  Aa: !1,
  oj: {
    $i: 10,
    uj: 900
  }
});
Ga.za = m.Fa({
});
na.za = m.Fa({
  Ba: !1,
  Aa: !1
});
Y.za = m.Fa({
  Ba: !1,
  Aa: !1
});
pb.za = m.Fa({
  Ba: !1,
  Aa: !1
});
ob.za = m.Fa({
  Ba: !1,
  Aa: !1
});
ma.za = m.Fa({
  Ba: !1,
  Aa: !1
});
Ma.za = m.Fa({
  Ba: !1,
  Aa: !1
});
La.za = m.Fa({
  Ba: !1,
  Aa: !1
});
la.za = m.Fa({
  Ba: !1,
  Aa: !1
});
E.mn = 0.17435839227423353;
E.ln = 5.934119456780721;
R.jn = new Ib([0,
  0,
  2,
  1,
  0,
  0.35,
  1,
  0,
  1,
  0,
  0.7,
  1,
  0,
  0,
  0,
  1]);
R.kn = new Ib([0,
  - 1,
  3,
  0,
  0,
  0.35,
  0,
  0,
  0,
  0,
  0.65,
  0,
  0,
  1,
  3,
  1]);
mb.N = '<div class=\'dialog change-location-view\'><h1>Change Location</h1><div class=\'splitter\'><div class=\'list\' data-hook=\'list\'></div><div class=\'buttons\'><button data-hook=\'change\'>Change</button><button data-hook=\'cancel\'>Cancel</button></div></div></div>';
Da.N = '<div class=\'chatbox-view\'><div data-hook=\'log\' class=\'log\'><p>Controls:<br/>Move: WASD or Arrows<br/>Kick: X, Space, Ctrl, Shift, Numpad 0<br/>View: Numbers 1 to 4</p></div><div class=\'autocompletebox\' data-hook=\'autocompletebox\'></div><div class=\'input\'><input data-hook=\'input\' type=\'text\' /><button data-hook=\'send\'>Send</button></div></div>';
kb.N = '<div class=\'choose-nickname-view\'><img src="https://kpias760.github.io/haxball-replay-analyzer.github.io/images/falafcio.png" /><div class=\'dialog\'><h1>Haxball Replay Analyzer</h1><div style=\'display: none\' class=\'label-input\'><label>Nick:</label><input data-hook=\'input\' type=\'text\' /></div><button id=\'button_ok\' data-hook=\'ok\'>Start</button></div></div>';
jb.N = '<div class=\'connecting-view\'><div class=\'dialog\'><h1>Connecting</h1><div class=\'connecting-view-log\' data-hook=\'log\'></div><button data-hook=\'cancel\'>Cancel</button></div></div>';
ib.N = '<div class=\'create-room-view\'><div class=\'dialog\'><h1>Create room</h1><div class=\'label-input\'><label>Room name:</label><input data-hook=\'name\' required /></div><div class=\'label-input\'><label>Password:</label><input data-hook=\'pass\' /></div><div class=\'label-input\'><label>Max players:</label><select data-hook=\'max-pl\'></select></div><button data-hook=\'unlisted\'></button><div class=\'row\'><button data-hook=\'cancel\'>Cancel</button><button data-hook=\'create\'>Create</button></div></div></div>';
Ka.N = '<div class=\'disconnected-view\'><div class=\'dialog basic-dialog\'><h1>Disconnected</h1><p data-hook=\'reason\'></p><div class=\'buttons\'><button data-hook=\'ok\'>Ok</button><button data-hook=\'replay\'>Save replay</button></div></div></div>';
hb.N = '<div id=\'game-state-view\' class=\'game-state-view\'><div class=\'bar-container\'><div class=\'bar\'><div class=\'scoreboard\'><div class=\'teamicon red\'></div><div class=\'score\' data-hook=\'red-score\'>0</div><div>-</div><div class=\'score\' data-hook=\'blue-score\'>0</div><div class=\'teamicon blue\'></div></div><div data-hook=\'timer\'></div></div></div><div class=\'canvas\' data-hook=\'canvas\'></div></div>';
ja.N = '<div class=\'game-view\' tabindex=\'-1\'><div class=\'top-section\' data-hook=\'gameplay-section\'></div><div class=\'bottom-section\'><div data-hook=\'stats\'></div><div data-hook=\'chatbox\'></div><div class=\'buttons\'><button data-hook=\'menu\'>☰ Menu<span class=\'tooltip\'>Toggle room menu [Escape]</span></button><button id="settings_button" data-hook=\'settings\'>⛭ Settings</button><button id=\'button_staty\' data-hook=\'staty\'>📈 Game stats</button><button id=\'button_gif\' data-hook=\'gif_creator\' style=\'display:none\'>📷 Create GIF</button></div></div><div id="popups" data-hook=\'popups\'></div></div>';
gb.N = '<div class=\'dialog kick-player-view\'><h1 id="tytul" data-hook=\'title\'></h1><div class=label-input><label>Reason: </label><input type=\'text\' data-hook=\'reason\' /></div><button data-hook=\'ban-btn\'><i class=\'icon-block\'></i>Ban from rejoining: <span data-hook=\'ban-text\'></span></button><div class="row"><button data-hook=\'close\'>Cancel</button><button data-hook=\'kick\'>Kick</button></div></div>';
gxd.N = '';
exd.N = '<div class=\'simple-dialog-view\'><div class=\'dialog basic-dialog\'><h1 data-hook=\'title\'></h1><p data-hook=\'content\'></p><div class=\'buttons\' data-hook=\'buttons\'></div></div></div>';
fb.N = '<div class=\'dialog basic-dialog leave-room-view\'><h1>Leave room?</h1><p>Are you sure you want to leave the room?</p><div class=\'buttons\'><button data-hook=\'cancel\'>Cancel</button><button data-hook=\'leave\'><i class=\'icon-logout\'></i>Leave</button></div></div>';
eb.N = '<div class=\'dialog pick-stadium-view\'><h1>Pick a stadium</h1><div class=\'splitter\'><div class=\'list\' data-hook=\'list\'></div><div class=\'buttons\'><button data-hook=\'pick\'>Pick</button><button data-hook=\'delete\'>Delete</button><div class=\'file-btn\'><label for=\'stadfile\'>Load</label><input id=\'stadfile\' type=\'file\' accept=\'.hbs\' data-hook=\'file\'/></div><button data-hook=\'export\'>Export</button><div class=\'spacer\'></div><button data-hook=\'cancel\'>Cancel</button></div></div></div>';
db.N = '<div class=\'dialog\' style=\'min-width:200px\'><h1 data-hook=\'name\'></h1><button data-hook=\'admin\'></button><button data-hook=\'kick\'>Kick</button><button data-hook=\'close\'>Close</button></div>';
cb.N = '<div class=\'player-list-item\'><div data-hook=\'flag\' class=\'flagico\'></div><div data-hook=\'name\'></div><div data-hook=\'ping\'></div></div>';
za.N = '<div class=\'player-list-view\'><div class=\'buttons\'><button data-hook=\'join-btn\'>Join</button><button data-hook=\'reset-btn\' class=\'admin-only\'></button></div><div class=\'list\' data-hook=\'list\'></div></div>';
ha.N = '<div class=\'replay-controls-view\'><button id=\'reset_button\' data-hook=\'reset\'>⏮<span class="tooltip">Reset</span></button><button id=\'play_button\' data-hook=\'play\'><i data-hook=\'playicon\'></i><span class="tooltip">Play/Pause</span></button><div data-hook=\'spd\'>1x</div><button id=\'spddown\' data-hook=\'spddn\'>-<span class="tooltip">Slower</span></button><button data-hook=\'spdup\'>+<span class="tooltip">Faster</span></button><div data-hook=\'time\'>00:00</div><div class=\'timebar\' data-hook=\'timebar\'><div class=\'barbg\'><div class=\'bar\' data-hook=\'progbar\'></div></div><div class=\'timetooltip\' data-hook=\'timetooltip\'></div></div><button id=\'button_leave\' data-hook=\'leave\'>Leave</button></div>';
bb.N = '<div class=\'dialog basic-dialog room-link-view\'><h1>Room link</h1><p>Use this url to link others directly into this room.</p><input data-hook=\'link\' readonly></input><div class=\'buttons\'><button data-hook=\'close\'>Close</button><button data-hook=\'copy\'>Copy to clipboard</button></div></div>';
ab.tj = '<tr><td><span data-hook=\'tag\'></span><span data-hook=\'name\'></span></td><td data-hook=\'players\'></td><td data-hook=\'pass\'></td><td><div data-hook=\'flag\' class=\'flagico\'></div><span data-hook=\'distance\'></span></td></tr>';
Aa.tj = '<div></div>';
Za.N = '<div class=\'room-password-view\'><div class=\'dialog\'><h1>Password required</h1><div class=\'label-input\'><label>Password:</label><input data-hook=\'input\' /></div><div class=\'buttons\'><button data-hook=\'cancel\'>Cancel</button><button data-hook=\'ok\'>Ok</button></div></div></div>';
Ya.N = '<div id=\'room-view\' class=\'room-view\'><div class=\'container\'><h1 data-hook=\'room-name\'></h1><div class=\'header-btns\'><button data-hook=\'rec-btn\'><i class=\'icon-circle\'></i>Rec</button><button data-hook=\'link-btn\'><i class=\'icon-link\'></i>Link</button><button data-hook=\'leave-btn\'><i class=\'icon-logout\'></i>Leave</button></div><div class=\'teams\'><div class=\'tools admin-only\'><button data-hook=\'auto-btn\'>Auto</button><button data-hook=\'rand-btn\'>Rand</button><button data-hook=\'lock-btn\'>Lock</button><button data-hook=\'reset-all-btn\'>Reset</button></div><div data-hook=\'red-list\'></div><div data-hook=\'spec-list\'></div><div data-hook=\'blue-list\'></div><div class=\'spacer admin-only\'></div></div><div class=\'settings\'><div><label class=\'lbl\'>Time limit</label><select data-hook=\'time-limit-sel\'></select></div><div><label class=\'lbl\'>Score limit</label><select data-hook=\'score-limit-sel\'></select></div><div><label class=\'lbl\'>Stadium</label><label class=\'val\' data-hook=\'stadium-name\'>testing the stadium name</label><button class=\'admin-only\' data-hook=\'stadium-pick\'>Pick</button></div></div><div class=\'controls admin-only\'><button data-hook=\'start-btn\'><i class=\'icon-play\'></i>Start game</button><button data-hook=\'stop-btn\'><i class=\'icon-stop\'></i>Stop game</button><button data-hook=\'pause-btn\'><i class=\'icon-pause\'></i>Pause</button></div></div></div>';
aa.N = '<div class=\'dialog settings-view\'><h1>Settings</h1><button data-hook=\'close\'>Close</button><div class=\'tabs\'><button data-hook=\'soundbtn\'>Sound</button><button data-hook=\'videobtn\'>Video</button><button data-hook=\'inputbtn\'>Input</button><button data-hook=\'miscbtn\'>Misc</button></div><div data-hook=\'presskey\' tabindex=\'-1\'><div>Press a key</div></div><div class=\'tabcontents\'><div class=\'section\' data-hook=\'miscsec\'><div class=\'loc\' data-hook=\'loc\'></div><div class=\'loc\' data-hook=\'loc-ovr\'></div><button data-hook=\'loc-ovr-btn\'></button></div><div class=\'section\' data-hook=\'soundsec\'><div data-hook="tsound-main">Sounds enabled</div><div data-hook="tsound-chat">Chat sound enabled</div><div data-hook="tsound-highlight">Nick highlight sound enabled</div><div data-hook="tsound-crowd">Crowd sound enabled</div></div><div class=\'section\' data-hook=\'inputsec\'></div><div class=\'section\' data-hook=\'videosec\'><div>Viewport Mode:<select data-hook=\'viewmode\'><option>Dynamic</option><option>Restricted 840x410</option><option>Full 1x Zoom</option><option>Full 1.25x Zoom</option><option>Full 1.5x Zoom</option><option>Full 1.75x Zoom</option><option>Full 2x Zoom</option><option>Full 2.25x Zoom</option><option>Full 2.5x Zoom</option></select></div><div>FPS Limit:<select data-hook=\'fps\'><option>None (Recommended)</option><option>30</option></select></div><div>Resolution Scaling:<select data-hook=\'resscale\'><option>100%</option><option>75%</option><option>50%</option><option>25%</option></select></div><div>Player To Follow:<select data-hook=\'follow\'>' + playersToFollowList() + '</select></div><div data-hook="tvideo-teamcol">Custom team colors enabled</div><div data-hook="tvideo-showindicators">Show chat indicators</div><div data-hook="tvideo-showavatars">Show player avatars</div></div></div></div>';
aa.$l = 0;
P.N = '<div class=\'simple-dialog-view\'><div class=\'dialog basic-dialog\'><h1 data-hook=\'title\'></h1><p data-hook=\'content\'></p><div class=\'buttons\' data-hook=\'buttons\'></div></div></div>';
Xa.N = '<div class=\'stats-view\'><div data-hook=\'graph\'></div></div>';
Wa.N = '<div class=\'unsupported-browser-view\'><div class=\'dialog\'><h1>Firefox issue</h1><p>Sorry! It seems that the newest version of Firefox has some major bug, that doesn\'t allow </p><p>The missing features are: <span data-hook=\'features\'></span></p><h2>Recommended browsers:</h2><div><a href="https://www.mozilla.org/firefox/new/"><img src="images/firefox-icon.png"/>Firefox</a></div><div><a href="https://www.google.com/chrome/"><img src="images/chrome-icon.png"/>Chrome</a></div><div><a href="http://www.opera.com/"><img src="images/opera-icon.png"/>Opera</a></div></div></div>';
r.sn = {
}.toString;
u.qp()

module.exports={replayFromSite};

}
/* ALIANÇAscore: leitor de replays .hbr2 (motor: haxball-replay-analyzer, MIT) */
const HBR=(()=>{
function analyze(buf,onProg){return new Promise((resolve,reject)=>{
const timers=new Set();let dead=false,fin=false;
const mkT=(set,clr)=>(cb,ms)=>{if(dead)return 0;const id=set(()=>{try{cb()}catch(e){}},ms);timers.add([clr,id]);return id};
const sT=mkT(setTimeout.bind(window),clearTimeout.bind(window)),sI=mkT(setInterval.bind(window),clearInterval.bind(window));
const rAF=cb=>sT(()=>cb(performance.now()),16);
function deep(){const f=function(){};return new Proxy(f,{get:(t,p)=>{if(p==='then')return undefined;if(p===Symbol.toPrimitive||p==='toString'||p==='valueOf')return ()=>'';if(p==='length')return 0;return deep()},apply:()=>deep(),construct:()=>deep(),set:()=>true})}
const store=new Map(),ctx={};ctx.self=ctx;ctx.window=ctx;
try{__HBPAKO.call(ctx,ctx,ctx)}catch(e){return reject(new Error('Falha ao iniciar o leitor de replays: '+e.message))}
const base={setTimeout:sT,clearTimeout:()=>{},setInterval:sI,clearInterval:()=>{},performance,crypto:globalThis.crypto,console,
localStorage:{getItem:k=>store.has(k)?store.get(k):null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)},
location:{href:'http://localhost/',hostname:'localhost',protocol:'http:',search:'',hash:'',pathname:'/'},
navigator:{userAgent:'node',language:'en',platform:'linux'},devicePixelRatio:1,requestAnimationFrame:rAF,cancelAnimationFrame:()=>{}};
const win=new Proxy(base,{get:(t,p)=>p in t?t[p]:(p==='then'?undefined:deep()),set:(t,p,v)=>{t[p]=v;return true}});
base.top=win;base.self=win;base.window=win;base.document=deep();
class Stub{constructor(){return new Proxy(this,{get:(t,p)=>p in t?t[p]:p==='then'?undefined:()=>new Stub(),set:(t,p,v)=>{t[p]=v;return true}})}}
const G={__STUB:{window:win,$:deep(),deep,pako:ctx.pako},__HX:{showStats(){},dispatchPlayerList(){},dispatchPlayerPos(){},dispatchClearStats(){},sendSocketMessage(){},
setGameStats(m){if(fin)return;fin=true;kill();resolve(m)}}};
function kill(){dead=true;timers.forEach(([c,id])=>{try{c(id)}catch(e){}});timers.clear()}
const mod={exports:{}};
try{__HBENGINE(G,mod,base.document,base.navigator,base.localStorage,base.location,win,win,new Proxy({},{get:()=>true}),Stub,Stub,Stub,Stub,Stub,Stub,Stub,rAF,()=>{},Stub,()=>Promise.reject(new Error('offline')));mod.exports.replayFromSite(buf)}catch(e){kill();return reject(new Error('Não foi possível ler o replay: '+(e&&e.message||e)))}
let tries=0;const poll=setInterval(()=>{const jb=G.__jb;if(!jb){if(++tries>200){clearInterval(poll);kill();reject(new Error('Replay não reconhecido (arquivo inválido ou de outra versão do Haxball).'))}return}
clearInterval(poll);
try{jb.er(jb.mf*jb.mh+1)}catch(e){}
const t0=Date.now();
(function step(){if(fin)return;const s=performance.now();let n=0;
try{while(jb.Y<jb.mf&&performance.now()-s<25){jb.C();n++}}catch(e){}
if(onProg)onProg(Math.min(99,Math.round(100*jb.Y/Math.max(jb.mf,1))));
if(jb.Y<jb.mf&&Date.now()-t0<240000){setTimeout(step,0)}
else{try{jb.ui()}catch(e){}setTimeout(()=>{if(!fin){kill();reject(new Error('O replay não gerou estatísticas (incompleto?).'))}},1500)}})()},30)})}
const nm=x=>String(x).trim();
let PRI=()=>0;
function gkGuess(b,team){try{const red=(b.redTeam||[]).map(nm),isR=team=='Red';
const goalsL=[],xs=[];for(const s of b.shots||[])if(s&&s.to&&typeof s.to.x=='number'&&Math.abs(s.to.x)>300)xs.push(Math.abs(s.to.x));for(const g of b.goals||[])if(g&&g.ballCoord&&typeof g.ballCoord.x=='number'&&Math.abs(g.ballCoord.x)>300)xs.push(Math.abs(g.ballCoord.x));
xs.sort((a,b)=>a-b);const L=xs.length>=2?xs[xs.length>>1]:1207;
let v=0;const vote=(isRed,x)=>{v+=(isRed?1:-1)*(x>0?1:-1)};
for(const g of b.goals||[])if(g&&g.ballCoord&&typeof g.ballCoord.x=='number'&&g.for&&Math.abs(g.ballCoord.x)>300)vote(g.for=='Red',g.ballCoord.x);
for(const s of b.shots||[])if(s&&s.player&&s.to&&typeof s.to.x=='number'&&Math.abs(s.to.x)>300)vote(red.includes(nm(s.player)),s.to.x);
const sign=v<0?-1:1,att=isR?sign:-sign;
const res={};let tot=0;
for(const k of b.kicks||[]){if(!k||typeof k.x!='number'||!k.player)continue;const p=nm(k.player);if(isR!=red.includes(p))continue;
const d=Math.max(0,Math.min(1,(att>0?k.x+L:L-k.x)/(2*L)));(res[p]||(res[p]=[])).push(d);tot++}
const q=a=>{const s=[...a].sort((x,y)=>x-y);return s[s.length>>1]};
const c=Object.entries(res).filter(([p,a])=>a.length>=3&&a.length>=0.05*tot).map(([p,a])=>{const mean=a.reduce((x,y)=>x+y,0)/a.length,own=a.filter(d=>d<0.33).length/a.length;return{p,n:a.length,sc:0.5*q(a)+0.3*mean+0.2*(1-own)-0.08*Math.max(0,Math.min(1,+PRI(p)||0)),own}}).sort((x,y)=>x.sc-y.sc);
if(!c.length)return{gk:'',conf:0};
const m=c.length>1?(c[1].sc-c[0].sc):0.2;
return{gk:c[0].p,conf:Math.round(100*(0.5*Math.min(1,m/0.12)+0.5*Math.min(1,c[0].own/0.6)))}}catch(e){return{gk:'',conf:0}}}
const uniCode=t=>{try{if(!t||!t.fb||!t.fb.length)return'';const hx=n=>(n>>>0&16777215).toString(16).padStart(6,'0'),f=t.fb.map(hx),a=(((+t.hd||0)%180)+180)%180,vert=a<22.5||a>=157.5,hor=a>=67.5&&a<112.5,dg=!vert&&!hor,pos=a<90;let p;
if(f.length==1||f.every(x=>x==f[0]))p='s';else if(f.length==2)p=vert?'v':hor?'hh':pos?'dh':'eh';else p=vert?'vs':hor?'h3':pos?'e3':'d3';
const c=p=='vs'?[f[0],f[1]]:f.slice(0,3);while(c.length<3)c.push('');if(p=='s'){c[1]='';c[2]=''}if(p=='v'||p=='hh'||p=='dh'||p=='eh')c[2]='';return[p,c[0],c[1],c[2],hx(t.ed)].join('|')}catch(e){return''}};
function build(blocks,titulo,data){const A=(blocks[0].redTeam||[]).map(nm),B=(blocks[0].blueTeam||[]).map(nm),tempos=[],info=[];
for(const b of blocks){const red=(b.redTeam||[]).map(nm),aRed=red.filter(x=>A.includes(x)).length>=red.filter(x=>B.includes(x)).length;
const ga=aRed?b.scoreRed:b.scoreBlue,gb=aRed?b.scoreBlue:b.scoreRed,ka=gkGuess(b,aRed?'Red':'Blue'),kb=gkGuess(b,aRed?'Blue':'Red');
tempos.push({gols_A:ga,gols_B:gb,gk_A:ka.gk,gk_B:kb.gk,dur:Math.round(b.gameTicks/60),gols:(b.goals||[]).filter(g=>g&&g.for&&typeof g.tick=='number').map(g=>({s:Math.max(0,Math.round(g.tick/60)),f:(g.for=='Red')==aRed?'A':'B'}))});info.push({conf_A:ka.conf,conf_B:kb.conf,segundos:Math.round(b.gameTicks/60)})}
const U0=blocks[0],aR0=(U0.redTeam||[]).map(nm).filter(x=>A.includes(x)).length>=(U0.redTeam||[]).map(nm).filter(x=>B.includes(x)).length,uc=uniCode(U0.uni&&U0.uni[aR0?0:1]),ub=uniCode(U0.uni&&U0.uni[aR0?1:0]);
return{titulo,data:data||'',times:{A,B},tempos,_gk_inferido_por_posicao_dos_chutes:info}}
function toMatches(blocks,{titulo,doisTempos,data}){const ok=(blocks||[]).filter(b=>b.gameTicks>=3000&&b.redTeam&&b.redTeam.length&&b.blueTeam&&b.blueTeam.length);
if(!ok.length)throw new Error('Nenhum jogo completo no replay (mínimo de 50 s).');
return doisTempos?[build(ok,titulo||'Partida',data)]:ok.map((b,i)=>build([b],(titulo||'Partida')+(ok.length>1?' '+(i+1):''),data))}
return{analyze,toMatches,setPrior(f){PRI=typeof f=='function'?f:()=>0}}})();

/*END HBR*/
