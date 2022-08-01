var v = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rn(s) {
  var t = s.default;
  if (typeof t == "function") {
    var e = function() {
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(s).forEach(function(n) {
    var r = Object.getOwnPropertyDescriptor(s, n);
    Object.defineProperty(e, n, r.get ? r : {
      enumerable: !0,
      get: function() {
        return s[n];
      }
    });
  }), e;
}
var on = {}, Ut = {}, pe = {}, de = {};
const Tr = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var Er = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(de, "__esModule", { value: !0 });
var Ss = Er(Tr), Cr = String.fromCodePoint || function(s) {
  var t = "";
  return s > 65535 && (s -= 65536, t += String.fromCharCode(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), t += String.fromCharCode(s), t;
};
function Ar(s) {
  return s >= 55296 && s <= 57343 || s > 1114111 ? "�" : (s in Ss.default && (s = Ss.default[s]), Cr(s));
}
de.default = Ar;
const qr = "Á", Or = "á", Dr = "Ă", Lr = "ă", Nr = "∾", Pr = "∿", kr = "∾̳", Rr = "Â", $r = "â", Mr = "´", Ir = "А", jr = "а", Br = "Æ", Ur = "æ", Hr = "⁡", Vr = "𝔄", Fr = "𝔞", zr = "À", Gr = "à", Wr = "ℵ", Yr = "ℵ", Jr = "Α", Xr = "α", Zr = "Ā", Qr = "ā", Kr = "⨿", to = "&", eo = "&", so = "⩕", no = "⩓", ro = "∧", oo = "⩜", io = "⩘", co = "⩚", ao = "∠", lo = "⦤", uo = "∠", fo = "⦨", ho = "⦩", po = "⦪", go = "⦫", mo = "⦬", bo = "⦭", yo = "⦮", vo = "⦯", wo = "∡", xo = "∟", So = "⊾", _o = "⦝", To = "∢", Eo = "Å", Co = "⍼", Ao = "Ą", qo = "ą", Oo = "𝔸", Do = "𝕒", Lo = "⩯", No = "≈", Po = "⩰", ko = "≊", Ro = "≋", $o = "'", Mo = "⁡", Io = "≈", jo = "≊", Bo = "Å", Uo = "å", Ho = "𝒜", Vo = "𝒶", Fo = "≔", zo = "*", Go = "≈", Wo = "≍", Yo = "Ã", Jo = "ã", Xo = "Ä", Zo = "ä", Qo = "∳", Ko = "⨑", ti = "≌", ei = "϶", si = "‵", ni = "∽", ri = "⋍", oi = "∖", ii = "⫧", ci = "⊽", ai = "⌅", li = "⌆", ui = "⌅", fi = "⎵", hi = "⎶", pi = "≌", di = "Б", gi = "б", mi = "„", bi = "∵", yi = "∵", vi = "∵", wi = "⦰", xi = "϶", Si = "ℬ", _i = "ℬ", Ti = "Β", Ei = "β", Ci = "ℶ", Ai = "≬", qi = "𝔅", Oi = "𝔟", Di = "⋂", Li = "◯", Ni = "⋃", Pi = "⨀", ki = "⨁", Ri = "⨂", $i = "⨆", Mi = "★", Ii = "▽", ji = "△", Bi = "⨄", Ui = "⋁", Hi = "⋀", Vi = "⤍", Fi = "⧫", zi = "▪", Gi = "▴", Wi = "▾", Yi = "◂", Ji = "▸", Xi = "␣", Zi = "▒", Qi = "░", Ki = "▓", tc = "█", ec = "=⃥", sc = "≡⃥", nc = "⫭", rc = "⌐", oc = "𝔹", ic = "𝕓", cc = "⊥", ac = "⊥", lc = "⋈", uc = "⧉", fc = "┐", hc = "╕", pc = "╖", dc = "╗", gc = "┌", mc = "╒", bc = "╓", yc = "╔", vc = "─", wc = "═", xc = "┬", Sc = "╤", _c = "╥", Tc = "╦", Ec = "┴", Cc = "╧", Ac = "╨", qc = "╩", Oc = "⊟", Dc = "⊞", Lc = "⊠", Nc = "┘", Pc = "╛", kc = "╜", Rc = "╝", $c = "└", Mc = "╘", Ic = "╙", jc = "╚", Bc = "│", Uc = "║", Hc = "┼", Vc = "╪", Fc = "╫", zc = "╬", Gc = "┤", Wc = "╡", Yc = "╢", Jc = "╣", Xc = "├", Zc = "╞", Qc = "╟", Kc = "╠", ta = "‵", ea = "˘", sa = "˘", na = "¦", ra = "𝒷", oa = "ℬ", ia = "⁏", ca = "∽", aa = "⋍", la = "⧅", ua = "\\", fa = "⟈", ha = "•", pa = "•", da = "≎", ga = "⪮", ma = "≏", ba = "≎", ya = "≏", va = "Ć", wa = "ć", xa = "⩄", Sa = "⩉", _a = "⩋", Ta = "∩", Ea = "⋒", Ca = "⩇", Aa = "⩀", qa = "ⅅ", Oa = "∩︀", Da = "⁁", La = "ˇ", Na = "ℭ", Pa = "⩍", ka = "Č", Ra = "č", $a = "Ç", Ma = "ç", Ia = "Ĉ", ja = "ĉ", Ba = "∰", Ua = "⩌", Ha = "⩐", Va = "Ċ", Fa = "ċ", za = "¸", Ga = "¸", Wa = "⦲", Ya = "¢", Ja = "·", Xa = "·", Za = "𝔠", Qa = "ℭ", Ka = "Ч", tl = "ч", el = "✓", sl = "✓", nl = "Χ", rl = "χ", ol = "ˆ", il = "≗", cl = "↺", al = "↻", ll = "⊛", ul = "⊚", fl = "⊝", hl = "⊙", pl = "®", dl = "Ⓢ", gl = "⊖", ml = "⊕", bl = "⊗", yl = "○", vl = "⧃", wl = "≗", xl = "⨐", Sl = "⫯", _l = "⧂", Tl = "∲", El = "”", Cl = "’", Al = "♣", ql = "♣", Ol = ":", Dl = "∷", Ll = "⩴", Nl = "≔", Pl = "≔", kl = ",", Rl = "@", $l = "∁", Ml = "∘", Il = "∁", jl = "ℂ", Bl = "≅", Ul = "⩭", Hl = "≡", Vl = "∮", Fl = "∯", zl = "∮", Gl = "𝕔", Wl = "ℂ", Yl = "∐", Jl = "∐", Xl = "©", Zl = "©", Ql = "℗", Kl = "∳", tu = "↵", eu = "✗", su = "⨯", nu = "𝒞", ru = "𝒸", ou = "⫏", iu = "⫑", cu = "⫐", au = "⫒", lu = "⋯", uu = "⤸", fu = "⤵", hu = "⋞", pu = "⋟", du = "↶", gu = "⤽", mu = "⩈", bu = "⩆", yu = "≍", vu = "∪", wu = "⋓", xu = "⩊", Su = "⊍", _u = "⩅", Tu = "∪︀", Eu = "↷", Cu = "⤼", Au = "⋞", qu = "⋟", Ou = "⋎", Du = "⋏", Lu = "¤", Nu = "↶", Pu = "↷", ku = "⋎", Ru = "⋏", $u = "∲", Mu = "∱", Iu = "⌭", ju = "†", Bu = "‡", Uu = "ℸ", Hu = "↓", Vu = "↡", Fu = "⇓", zu = "‐", Gu = "⫤", Wu = "⊣", Yu = "⤏", Ju = "˝", Xu = "Ď", Zu = "ď", Qu = "Д", Ku = "д", tf = "‡", ef = "⇊", sf = "ⅅ", nf = "ⅆ", rf = "⤑", of = "⩷", cf = "°", af = "∇", lf = "Δ", uf = "δ", ff = "⦱", hf = "⥿", pf = "𝔇", df = "𝔡", gf = "⥥", mf = "⇃", bf = "⇂", yf = "´", vf = "˙", wf = "˝", xf = "`", Sf = "˜", _f = "⋄", Tf = "⋄", Ef = "⋄", Cf = "♦", Af = "♦", qf = "¨", Of = "ⅆ", Df = "ϝ", Lf = "⋲", Nf = "÷", Pf = "÷", kf = "⋇", Rf = "⋇", $f = "Ђ", Mf = "ђ", If = "⌞", jf = "⌍", Bf = "$", Uf = "𝔻", Hf = "𝕕", Vf = "¨", Ff = "˙", zf = "⃜", Gf = "≐", Wf = "≑", Yf = "≐", Jf = "∸", Xf = "∔", Zf = "⊡", Qf = "⌆", Kf = "∯", th = "¨", eh = "⇓", sh = "⇐", nh = "⇔", rh = "⫤", oh = "⟸", ih = "⟺", ch = "⟹", ah = "⇒", lh = "⊨", uh = "⇑", fh = "⇕", hh = "∥", ph = "⤓", dh = "↓", gh = "↓", mh = "⇓", bh = "⇵", yh = "̑", vh = "⇊", wh = "⇃", xh = "⇂", Sh = "⥐", _h = "⥞", Th = "⥖", Eh = "↽", Ch = "⥟", Ah = "⥗", qh = "⇁", Oh = "↧", Dh = "⊤", Lh = "⤐", Nh = "⌟", Ph = "⌌", kh = "𝒟", Rh = "𝒹", $h = "Ѕ", Mh = "ѕ", Ih = "⧶", jh = "Đ", Bh = "đ", Uh = "⋱", Hh = "▿", Vh = "▾", Fh = "⇵", zh = "⥯", Gh = "⦦", Wh = "Џ", Yh = "џ", Jh = "⟿", Xh = "É", Zh = "é", Qh = "⩮", Kh = "Ě", tp = "ě", ep = "Ê", sp = "ê", np = "≖", rp = "≕", op = "Э", ip = "э", cp = "⩷", ap = "Ė", lp = "ė", up = "≑", fp = "ⅇ", hp = "≒", pp = "𝔈", dp = "𝔢", gp = "⪚", mp = "È", bp = "è", yp = "⪖", vp = "⪘", wp = "⪙", xp = "∈", Sp = "⏧", _p = "ℓ", Tp = "⪕", Ep = "⪗", Cp = "Ē", Ap = "ē", qp = "∅", Op = "∅", Dp = "◻", Lp = "∅", Np = "▫", Pp = " ", kp = " ", Rp = " ", $p = "Ŋ", Mp = "ŋ", Ip = " ", jp = "Ę", Bp = "ę", Up = "𝔼", Hp = "𝕖", Vp = "⋕", Fp = "⧣", zp = "⩱", Gp = "ε", Wp = "Ε", Yp = "ε", Jp = "ϵ", Xp = "≖", Zp = "≕", Qp = "≂", Kp = "⪖", td = "⪕", ed = "⩵", sd = "=", nd = "≂", rd = "≟", od = "⇌", id = "≡", cd = "⩸", ad = "⧥", ld = "⥱", ud = "≓", fd = "ℯ", hd = "ℰ", pd = "≐", dd = "⩳", gd = "≂", md = "Η", bd = "η", yd = "Ð", vd = "ð", wd = "Ë", xd = "ë", Sd = "€", _d = "!", Td = "∃", Ed = "∃", Cd = "ℰ", Ad = "ⅇ", qd = "ⅇ", Od = "≒", Dd = "Ф", Ld = "ф", Nd = "♀", Pd = "ﬃ", kd = "ﬀ", Rd = "ﬄ", $d = "𝔉", Md = "𝔣", Id = "ﬁ", jd = "◼", Bd = "▪", Ud = "fj", Hd = "♭", Vd = "ﬂ", Fd = "▱", zd = "ƒ", Gd = "𝔽", Wd = "𝕗", Yd = "∀", Jd = "∀", Xd = "⋔", Zd = "⫙", Qd = "ℱ", Kd = "⨍", tg = "½", eg = "⅓", sg = "¼", ng = "⅕", rg = "⅙", og = "⅛", ig = "⅔", cg = "⅖", ag = "¾", lg = "⅗", ug = "⅜", fg = "⅘", hg = "⅚", pg = "⅝", dg = "⅞", gg = "⁄", mg = "⌢", bg = "𝒻", yg = "ℱ", vg = "ǵ", wg = "Γ", xg = "γ", Sg = "Ϝ", _g = "ϝ", Tg = "⪆", Eg = "Ğ", Cg = "ğ", Ag = "Ģ", qg = "Ĝ", Og = "ĝ", Dg = "Г", Lg = "г", Ng = "Ġ", Pg = "ġ", kg = "≥", Rg = "≧", $g = "⪌", Mg = "⋛", Ig = "≥", jg = "≧", Bg = "⩾", Ug = "⪩", Hg = "⩾", Vg = "⪀", Fg = "⪂", zg = "⪄", Gg = "⋛︀", Wg = "⪔", Yg = "𝔊", Jg = "𝔤", Xg = "≫", Zg = "⋙", Qg = "⋙", Kg = "ℷ", tm = "Ѓ", em = "ѓ", sm = "⪥", nm = "≷", rm = "⪒", om = "⪤", im = "⪊", cm = "⪊", am = "⪈", lm = "≩", um = "⪈", fm = "≩", hm = "⋧", pm = "𝔾", dm = "𝕘", gm = "`", mm = "≥", bm = "⋛", ym = "≧", vm = "⪢", wm = "≷", xm = "⩾", Sm = "≳", _m = "𝒢", Tm = "ℊ", Em = "≳", Cm = "⪎", Am = "⪐", qm = "⪧", Om = "⩺", Dm = ">", Lm = ">", Nm = "≫", Pm = "⋗", km = "⦕", Rm = "⩼", $m = "⪆", Mm = "⥸", Im = "⋗", jm = "⋛", Bm = "⪌", Um = "≷", Hm = "≳", Vm = "≩︀", Fm = "≩︀", zm = "ˇ", Gm = " ", Wm = "½", Ym = "ℋ", Jm = "Ъ", Xm = "ъ", Zm = "⥈", Qm = "↔", Km = "⇔", tb = "↭", eb = "^", sb = "ℏ", nb = "Ĥ", rb = "ĥ", ob = "♥", ib = "♥", cb = "…", ab = "⊹", lb = "𝔥", ub = "ℌ", fb = "ℋ", hb = "⤥", pb = "⤦", db = "⇿", gb = "∻", mb = "↩", bb = "↪", yb = "𝕙", vb = "ℍ", wb = "―", xb = "─", Sb = "𝒽", _b = "ℋ", Tb = "ℏ", Eb = "Ħ", Cb = "ħ", Ab = "≎", qb = "≏", Ob = "⁃", Db = "‐", Lb = "Í", Nb = "í", Pb = "⁣", kb = "Î", Rb = "î", $b = "И", Mb = "и", Ib = "İ", jb = "Е", Bb = "е", Ub = "¡", Hb = "⇔", Vb = "𝔦", Fb = "ℑ", zb = "Ì", Gb = "ì", Wb = "ⅈ", Yb = "⨌", Jb = "∭", Xb = "⧜", Zb = "℩", Qb = "Ĳ", Kb = "ĳ", ty = "Ī", ey = "ī", sy = "ℑ", ny = "ⅈ", ry = "ℐ", oy = "ℑ", iy = "ı", cy = "ℑ", ay = "⊷", ly = "Ƶ", uy = "⇒", fy = "℅", hy = "∞", py = "⧝", dy = "ı", gy = "⊺", my = "∫", by = "∬", yy = "ℤ", vy = "∫", wy = "⊺", xy = "⋂", Sy = "⨗", _y = "⨼", Ty = "⁣", Ey = "⁢", Cy = "Ё", Ay = "ё", qy = "Į", Oy = "į", Dy = "𝕀", Ly = "𝕚", Ny = "Ι", Py = "ι", ky = "⨼", Ry = "¿", $y = "𝒾", My = "ℐ", Iy = "∈", jy = "⋵", By = "⋹", Uy = "⋴", Hy = "⋳", Vy = "∈", Fy = "⁢", zy = "Ĩ", Gy = "ĩ", Wy = "І", Yy = "і", Jy = "Ï", Xy = "ï", Zy = "Ĵ", Qy = "ĵ", Ky = "Й", tv = "й", ev = "𝔍", sv = "𝔧", nv = "ȷ", rv = "𝕁", ov = "𝕛", iv = "𝒥", cv = "𝒿", av = "Ј", lv = "ј", uv = "Є", fv = "є", hv = "Κ", pv = "κ", dv = "ϰ", gv = "Ķ", mv = "ķ", bv = "К", yv = "к", vv = "𝔎", wv = "𝔨", xv = "ĸ", Sv = "Х", _v = "х", Tv = "Ќ", Ev = "ќ", Cv = "𝕂", Av = "𝕜", qv = "𝒦", Ov = "𝓀", Dv = "⇚", Lv = "Ĺ", Nv = "ĺ", Pv = "⦴", kv = "ℒ", Rv = "Λ", $v = "λ", Mv = "⟨", Iv = "⟪", jv = "⦑", Bv = "⟨", Uv = "⪅", Hv = "ℒ", Vv = "«", Fv = "⇤", zv = "⤟", Gv = "←", Wv = "↞", Yv = "⇐", Jv = "⤝", Xv = "↩", Zv = "↫", Qv = "⤹", Kv = "⥳", tw = "↢", ew = "⤙", sw = "⤛", nw = "⪫", rw = "⪭", ow = "⪭︀", iw = "⤌", cw = "⤎", aw = "❲", lw = "{", uw = "[", fw = "⦋", hw = "⦏", pw = "⦍", dw = "Ľ", gw = "ľ", mw = "Ļ", bw = "ļ", yw = "⌈", vw = "{", ww = "Л", xw = "л", Sw = "⤶", _w = "“", Tw = "„", Ew = "⥧", Cw = "⥋", Aw = "↲", qw = "≤", Ow = "≦", Dw = "⟨", Lw = "⇤", Nw = "←", Pw = "←", kw = "⇐", Rw = "⇆", $w = "↢", Mw = "⌈", Iw = "⟦", jw = "⥡", Bw = "⥙", Uw = "⇃", Hw = "⌊", Vw = "↽", Fw = "↼", zw = "⇇", Gw = "↔", Ww = "↔", Yw = "⇔", Jw = "⇆", Xw = "⇋", Zw = "↭", Qw = "⥎", Kw = "↤", tx = "⊣", ex = "⥚", sx = "⋋", nx = "⧏", rx = "⊲", ox = "⊴", ix = "⥑", cx = "⥠", ax = "⥘", lx = "↿", ux = "⥒", fx = "↼", hx = "⪋", px = "⋚", dx = "≤", gx = "≦", mx = "⩽", bx = "⪨", yx = "⩽", vx = "⩿", wx = "⪁", xx = "⪃", Sx = "⋚︀", _x = "⪓", Tx = "⪅", Ex = "⋖", Cx = "⋚", Ax = "⪋", qx = "⋚", Ox = "≦", Dx = "≶", Lx = "≶", Nx = "⪡", Px = "≲", kx = "⩽", Rx = "≲", $x = "⥼", Mx = "⌊", Ix = "𝔏", jx = "𝔩", Bx = "≶", Ux = "⪑", Hx = "⥢", Vx = "↽", Fx = "↼", zx = "⥪", Gx = "▄", Wx = "Љ", Yx = "љ", Jx = "⇇", Xx = "≪", Zx = "⋘", Qx = "⌞", Kx = "⇚", tS = "⥫", eS = "◺", sS = "Ŀ", nS = "ŀ", rS = "⎰", oS = "⎰", iS = "⪉", cS = "⪉", aS = "⪇", lS = "≨", uS = "⪇", fS = "≨", hS = "⋦", pS = "⟬", dS = "⇽", gS = "⟦", mS = "⟵", bS = "⟵", yS = "⟸", vS = "⟷", wS = "⟷", xS = "⟺", SS = "⟼", _S = "⟶", TS = "⟶", ES = "⟹", CS = "↫", AS = "↬", qS = "⦅", OS = "𝕃", DS = "𝕝", LS = "⨭", NS = "⨴", PS = "∗", kS = "_", RS = "↙", $S = "↘", MS = "◊", IS = "◊", jS = "⧫", BS = "(", US = "⦓", HS = "⇆", VS = "⌟", FS = "⇋", zS = "⥭", GS = "‎", WS = "⊿", YS = "‹", JS = "𝓁", XS = "ℒ", ZS = "↰", QS = "↰", KS = "≲", t1 = "⪍", e1 = "⪏", s1 = "[", n1 = "‘", r1 = "‚", o1 = "Ł", i1 = "ł", c1 = "⪦", a1 = "⩹", l1 = "<", u1 = "<", f1 = "≪", h1 = "⋖", p1 = "⋋", d1 = "⋉", g1 = "⥶", m1 = "⩻", b1 = "◃", y1 = "⊴", v1 = "◂", w1 = "⦖", x1 = "⥊", S1 = "⥦", _1 = "≨︀", T1 = "≨︀", E1 = "¯", C1 = "♂", A1 = "✠", q1 = "✠", O1 = "↦", D1 = "↦", L1 = "↧", N1 = "↤", P1 = "↥", k1 = "▮", R1 = "⨩", $1 = "М", M1 = "м", I1 = "—", j1 = "∺", B1 = "∡", U1 = " ", H1 = "ℳ", V1 = "𝔐", F1 = "𝔪", z1 = "℧", G1 = "µ", W1 = "*", Y1 = "⫰", J1 = "∣", X1 = "·", Z1 = "⊟", Q1 = "−", K1 = "∸", t_ = "⨪", e_ = "∓", s_ = "⫛", n_ = "…", r_ = "∓", o_ = "⊧", i_ = "𝕄", c_ = "𝕞", a_ = "∓", l_ = "𝓂", u_ = "ℳ", f_ = "∾", h_ = "Μ", p_ = "μ", d_ = "⊸", g_ = "⊸", m_ = "∇", b_ = "Ń", y_ = "ń", v_ = "∠⃒", w_ = "≉", x_ = "⩰̸", S_ = "≋̸", __ = "ŉ", T_ = "≉", E_ = "♮", C_ = "ℕ", A_ = "♮", q_ = " ", O_ = "≎̸", D_ = "≏̸", L_ = "⩃", N_ = "Ň", P_ = "ň", k_ = "Ņ", R_ = "ņ", $_ = "≇", M_ = "⩭̸", I_ = "⩂", j_ = "Н", B_ = "н", U_ = "–", H_ = "⤤", V_ = "↗", F_ = "⇗", z_ = "↗", G_ = "≠", W_ = "≐̸", Y_ = "​", J_ = "​", X_ = "​", Z_ = "​", Q_ = "≢", K_ = "⤨", tT = "≂̸", eT = "≫", sT = "≪", nT = `
`, rT = "∄", oT = "∄", iT = "𝔑", cT = "𝔫", aT = "≧̸", lT = "≱", uT = "≱", fT = "≧̸", hT = "⩾̸", pT = "⩾̸", dT = "⋙̸", gT = "≵", mT = "≫⃒", bT = "≯", yT = "≯", vT = "≫̸", wT = "↮", xT = "⇎", ST = "⫲", _T = "∋", TT = "⋼", ET = "⋺", CT = "∋", AT = "Њ", qT = "њ", OT = "↚", DT = "⇍", LT = "‥", NT = "≦̸", PT = "≰", kT = "↚", RT = "⇍", $T = "↮", MT = "⇎", IT = "≰", jT = "≦̸", BT = "⩽̸", UT = "⩽̸", HT = "≮", VT = "⋘̸", FT = "≴", zT = "≪⃒", GT = "≮", WT = "⋪", YT = "⋬", JT = "≪̸", XT = "∤", ZT = "⁠", QT = " ", KT = "𝕟", tE = "ℕ", eE = "⫬", sE = "¬", nE = "≢", rE = "≭", oE = "∦", iE = "∉", cE = "≠", aE = "≂̸", lE = "∄", uE = "≯", fE = "≱", hE = "≧̸", pE = "≫̸", dE = "≹", gE = "⩾̸", mE = "≵", bE = "≎̸", yE = "≏̸", vE = "∉", wE = "⋵̸", xE = "⋹̸", SE = "∉", _E = "⋷", TE = "⋶", EE = "⧏̸", CE = "⋪", AE = "⋬", qE = "≮", OE = "≰", DE = "≸", LE = "≪̸", NE = "⩽̸", PE = "≴", kE = "⪢̸", RE = "⪡̸", $E = "∌", ME = "∌", IE = "⋾", jE = "⋽", BE = "⊀", UE = "⪯̸", HE = "⋠", VE = "∌", FE = "⧐̸", zE = "⋫", GE = "⋭", WE = "⊏̸", YE = "⋢", JE = "⊐̸", XE = "⋣", ZE = "⊂⃒", QE = "⊈", KE = "⊁", tC = "⪰̸", eC = "⋡", sC = "≿̸", nC = "⊃⃒", rC = "⊉", oC = "≁", iC = "≄", cC = "≇", aC = "≉", lC = "∤", uC = "∦", fC = "∦", hC = "⫽⃥", pC = "∂̸", dC = "⨔", gC = "⊀", mC = "⋠", bC = "⊀", yC = "⪯̸", vC = "⪯̸", wC = "⤳̸", xC = "↛", SC = "⇏", _C = "↝̸", TC = "↛", EC = "⇏", CC = "⋫", AC = "⋭", qC = "⊁", OC = "⋡", DC = "⪰̸", LC = "𝒩", NC = "𝓃", PC = "∤", kC = "∦", RC = "≁", $C = "≄", MC = "≄", IC = "∤", jC = "∦", BC = "⋢", UC = "⋣", HC = "⊄", VC = "⫅̸", FC = "⊈", zC = "⊂⃒", GC = "⊈", WC = "⫅̸", YC = "⊁", JC = "⪰̸", XC = "⊅", ZC = "⫆̸", QC = "⊉", KC = "⊃⃒", tA = "⊉", eA = "⫆̸", sA = "≹", nA = "Ñ", rA = "ñ", oA = "≸", iA = "⋪", cA = "⋬", aA = "⋫", lA = "⋭", uA = "Ν", fA = "ν", hA = "#", pA = "№", dA = " ", gA = "≍⃒", mA = "⊬", bA = "⊭", yA = "⊮", vA = "⊯", wA = "≥⃒", xA = ">⃒", SA = "⤄", _A = "⧞", TA = "⤂", EA = "≤⃒", CA = "<⃒", AA = "⊴⃒", qA = "⤃", OA = "⊵⃒", DA = "∼⃒", LA = "⤣", NA = "↖", PA = "⇖", kA = "↖", RA = "⤧", $A = "Ó", MA = "ó", IA = "⊛", jA = "Ô", BA = "ô", UA = "⊚", HA = "О", VA = "о", FA = "⊝", zA = "Ő", GA = "ő", WA = "⨸", YA = "⊙", JA = "⦼", XA = "Œ", ZA = "œ", QA = "⦿", KA = "𝔒", t0 = "𝔬", e0 = "˛", s0 = "Ò", n0 = "ò", r0 = "⧁", o0 = "⦵", i0 = "Ω", c0 = "∮", a0 = "↺", l0 = "⦾", u0 = "⦻", f0 = "‾", h0 = "⧀", p0 = "Ō", d0 = "ō", g0 = "Ω", m0 = "ω", b0 = "Ο", y0 = "ο", v0 = "⦶", w0 = "⊖", x0 = "𝕆", S0 = "𝕠", _0 = "⦷", T0 = "“", E0 = "‘", C0 = "⦹", A0 = "⊕", q0 = "↻", O0 = "⩔", D0 = "∨", L0 = "⩝", N0 = "ℴ", P0 = "ℴ", k0 = "ª", R0 = "º", $0 = "⊶", M0 = "⩖", I0 = "⩗", j0 = "⩛", B0 = "Ⓢ", U0 = "𝒪", H0 = "ℴ", V0 = "Ø", F0 = "ø", z0 = "⊘", G0 = "Õ", W0 = "õ", Y0 = "⨶", J0 = "⨷", X0 = "⊗", Z0 = "Ö", Q0 = "ö", K0 = "⌽", tq = "‾", eq = "⏞", sq = "⎴", nq = "⏜", rq = "¶", oq = "∥", iq = "∥", cq = "⫳", aq = "⫽", lq = "∂", uq = "∂", fq = "П", hq = "п", pq = "%", dq = ".", gq = "‰", mq = "⊥", bq = "‱", yq = "𝔓", vq = "𝔭", wq = "Φ", xq = "φ", Sq = "ϕ", _q = "ℳ", Tq = "☎", Eq = "Π", Cq = "π", Aq = "⋔", qq = "ϖ", Oq = "ℏ", Dq = "ℎ", Lq = "ℏ", Nq = "⨣", Pq = "⊞", kq = "⨢", Rq = "+", $q = "∔", Mq = "⨥", Iq = "⩲", jq = "±", Bq = "±", Uq = "⨦", Hq = "⨧", Vq = "±", Fq = "ℌ", zq = "⨕", Gq = "𝕡", Wq = "ℙ", Yq = "£", Jq = "⪷", Xq = "⪻", Zq = "≺", Qq = "≼", Kq = "⪷", tO = "≺", eO = "≼", sO = "≺", nO = "⪯", rO = "≼", oO = "≾", iO = "⪯", cO = "⪹", aO = "⪵", lO = "⋨", uO = "⪯", fO = "⪳", hO = "≾", pO = "′", dO = "″", gO = "ℙ", mO = "⪹", bO = "⪵", yO = "⋨", vO = "∏", wO = "∏", xO = "⌮", SO = "⌒", _O = "⌓", TO = "∝", EO = "∝", CO = "∷", AO = "∝", qO = "≾", OO = "⊰", DO = "𝒫", LO = "𝓅", NO = "Ψ", PO = "ψ", kO = " ", RO = "𝔔", $O = "𝔮", MO = "⨌", IO = "𝕢", jO = "ℚ", BO = "⁗", UO = "𝒬", HO = "𝓆", VO = "ℍ", FO = "⨖", zO = "?", GO = "≟", WO = '"', YO = '"', JO = "⇛", XO = "∽̱", ZO = "Ŕ", QO = "ŕ", KO = "√", tD = "⦳", eD = "⟩", sD = "⟫", nD = "⦒", rD = "⦥", oD = "⟩", iD = "»", cD = "⥵", aD = "⇥", lD = "⤠", uD = "⤳", fD = "→", hD = "↠", pD = "⇒", dD = "⤞", gD = "↪", mD = "↬", bD = "⥅", yD = "⥴", vD = "⤖", wD = "↣", xD = "↝", SD = "⤚", _D = "⤜", TD = "∶", ED = "ℚ", CD = "⤍", AD = "⤏", qD = "⤐", OD = "❳", DD = "}", LD = "]", ND = "⦌", PD = "⦎", kD = "⦐", RD = "Ř", $D = "ř", MD = "Ŗ", ID = "ŗ", jD = "⌉", BD = "}", UD = "Р", HD = "р", VD = "⤷", FD = "⥩", zD = "”", GD = "”", WD = "↳", YD = "ℜ", JD = "ℛ", XD = "ℜ", ZD = "ℝ", QD = "ℜ", KD = "▭", tL = "®", eL = "®", sL = "∋", nL = "⇋", rL = "⥯", oL = "⥽", iL = "⌋", cL = "𝔯", aL = "ℜ", lL = "⥤", uL = "⇁", fL = "⇀", hL = "⥬", pL = "Ρ", dL = "ρ", gL = "ϱ", mL = "⟩", bL = "⇥", yL = "→", vL = "→", wL = "⇒", xL = "⇄", SL = "↣", _L = "⌉", TL = "⟧", EL = "⥝", CL = "⥕", AL = "⇂", qL = "⌋", OL = "⇁", DL = "⇀", LL = "⇄", NL = "⇌", PL = "⇉", kL = "↝", RL = "↦", $L = "⊢", ML = "⥛", IL = "⋌", jL = "⧐", BL = "⊳", UL = "⊵", HL = "⥏", VL = "⥜", FL = "⥔", zL = "↾", GL = "⥓", WL = "⇀", YL = "˚", JL = "≓", XL = "⇄", ZL = "⇌", QL = "‏", KL = "⎱", tN = "⎱", eN = "⫮", sN = "⟭", nN = "⇾", rN = "⟧", oN = "⦆", iN = "𝕣", cN = "ℝ", aN = "⨮", lN = "⨵", uN = "⥰", fN = ")", hN = "⦔", pN = "⨒", dN = "⇉", gN = "⇛", mN = "›", bN = "𝓇", yN = "ℛ", vN = "↱", wN = "↱", xN = "]", SN = "’", _N = "’", TN = "⋌", EN = "⋊", CN = "▹", AN = "⊵", qN = "▸", ON = "⧎", DN = "⧴", LN = "⥨", NN = "℞", PN = "Ś", kN = "ś", RN = "‚", $N = "⪸", MN = "Š", IN = "š", jN = "⪼", BN = "≻", UN = "≽", HN = "⪰", VN = "⪴", FN = "Ş", zN = "ş", GN = "Ŝ", WN = "ŝ", YN = "⪺", JN = "⪶", XN = "⋩", ZN = "⨓", QN = "≿", KN = "С", tP = "с", eP = "⊡", sP = "⋅", nP = "⩦", rP = "⤥", oP = "↘", iP = "⇘", cP = "↘", aP = "§", lP = ";", uP = "⤩", fP = "∖", hP = "∖", pP = "✶", dP = "𝔖", gP = "𝔰", mP = "⌢", bP = "♯", yP = "Щ", vP = "щ", wP = "Ш", xP = "ш", SP = "↓", _P = "←", TP = "∣", EP = "∥", CP = "→", AP = "↑", qP = "­", OP = "Σ", DP = "σ", LP = "ς", NP = "ς", PP = "∼", kP = "⩪", RP = "≃", $P = "≃", MP = "⪞", IP = "⪠", jP = "⪝", BP = "⪟", UP = "≆", HP = "⨤", VP = "⥲", FP = "←", zP = "∘", GP = "∖", WP = "⨳", YP = "⧤", JP = "∣", XP = "⌣", ZP = "⪪", QP = "⪬", KP = "⪬︀", tk = "Ь", ek = "ь", sk = "⌿", nk = "⧄", rk = "/", ok = "𝕊", ik = "𝕤", ck = "♠", ak = "♠", lk = "∥", uk = "⊓", fk = "⊓︀", hk = "⊔", pk = "⊔︀", dk = "√", gk = "⊏", mk = "⊑", bk = "⊏", yk = "⊑", vk = "⊐", wk = "⊒", xk = "⊐", Sk = "⊒", _k = "□", Tk = "□", Ek = "⊓", Ck = "⊏", Ak = "⊑", qk = "⊐", Ok = "⊒", Dk = "⊔", Lk = "▪", Nk = "□", Pk = "▪", kk = "→", Rk = "𝒮", $k = "𝓈", Mk = "∖", Ik = "⌣", jk = "⋆", Bk = "⋆", Uk = "☆", Hk = "★", Vk = "ϵ", Fk = "ϕ", zk = "¯", Gk = "⊂", Wk = "⋐", Yk = "⪽", Jk = "⫅", Xk = "⊆", Zk = "⫃", Qk = "⫁", Kk = "⫋", tR = "⊊", eR = "⪿", sR = "⥹", nR = "⊂", rR = "⋐", oR = "⊆", iR = "⫅", cR = "⊆", aR = "⊊", lR = "⫋", uR = "⫇", fR = "⫕", hR = "⫓", pR = "⪸", dR = "≻", gR = "≽", mR = "≻", bR = "⪰", yR = "≽", vR = "≿", wR = "⪰", xR = "⪺", SR = "⪶", _R = "⋩", TR = "≿", ER = "∋", CR = "∑", AR = "∑", qR = "♪", OR = "¹", DR = "²", LR = "³", NR = "⊃", PR = "⋑", kR = "⪾", RR = "⫘", $R = "⫆", MR = "⊇", IR = "⫄", jR = "⊃", BR = "⊇", UR = "⟉", HR = "⫗", VR = "⥻", FR = "⫂", zR = "⫌", GR = "⊋", WR = "⫀", YR = "⊃", JR = "⋑", XR = "⊇", ZR = "⫆", QR = "⊋", KR = "⫌", t$ = "⫈", e$ = "⫔", s$ = "⫖", n$ = "⤦", r$ = "↙", o$ = "⇙", i$ = "↙", c$ = "⤪", a$ = "ß", l$ = "	", u$ = "⌖", f$ = "Τ", h$ = "τ", p$ = "⎴", d$ = "Ť", g$ = "ť", m$ = "Ţ", b$ = "ţ", y$ = "Т", v$ = "т", w$ = "⃛", x$ = "⌕", S$ = "𝔗", _$ = "𝔱", T$ = "∴", E$ = "∴", C$ = "∴", A$ = "Θ", q$ = "θ", O$ = "ϑ", D$ = "ϑ", L$ = "≈", N$ = "∼", P$ = "  ", k$ = " ", R$ = " ", $$ = "≈", M$ = "∼", I$ = "Þ", j$ = "þ", B$ = "˜", U$ = "∼", H$ = "≃", V$ = "≅", F$ = "≈", z$ = "⨱", G$ = "⊠", W$ = "×", Y$ = "⨰", J$ = "∭", X$ = "⤨", Z$ = "⌶", Q$ = "⫱", K$ = "⊤", tM = "𝕋", eM = "𝕥", sM = "⫚", nM = "⤩", rM = "‴", oM = "™", iM = "™", cM = "▵", aM = "▿", lM = "◃", uM = "⊴", fM = "≜", hM = "▹", pM = "⊵", dM = "◬", gM = "≜", mM = "⨺", bM = "⃛", yM = "⨹", vM = "⧍", wM = "⨻", xM = "⏢", SM = "𝒯", _M = "𝓉", TM = "Ц", EM = "ц", CM = "Ћ", AM = "ћ", qM = "Ŧ", OM = "ŧ", DM = "≬", LM = "↞", NM = "↠", PM = "Ú", kM = "ú", RM = "↑", $M = "↟", MM = "⇑", IM = "⥉", jM = "Ў", BM = "ў", UM = "Ŭ", HM = "ŭ", VM = "Û", FM = "û", zM = "У", GM = "у", WM = "⇅", YM = "Ű", JM = "ű", XM = "⥮", ZM = "⥾", QM = "𝔘", KM = "𝔲", tI = "Ù", eI = "ù", sI = "⥣", nI = "↿", rI = "↾", oI = "▀", iI = "⌜", cI = "⌜", aI = "⌏", lI = "◸", uI = "Ū", fI = "ū", hI = "¨", pI = "_", dI = "⏟", gI = "⎵", mI = "⏝", bI = "⋃", yI = "⊎", vI = "Ų", wI = "ų", xI = "𝕌", SI = "𝕦", _I = "⤒", TI = "↑", EI = "↑", CI = "⇑", AI = "⇅", qI = "↕", OI = "↕", DI = "⇕", LI = "⥮", NI = "↿", PI = "↾", kI = "⊎", RI = "↖", $I = "↗", MI = "υ", II = "ϒ", jI = "ϒ", BI = "Υ", UI = "υ", HI = "↥", VI = "⊥", FI = "⇈", zI = "⌝", GI = "⌝", WI = "⌎", YI = "Ů", JI = "ů", XI = "◹", ZI = "𝒰", QI = "𝓊", KI = "⋰", tj = "Ũ", ej = "ũ", sj = "▵", nj = "▴", rj = "⇈", oj = "Ü", ij = "ü", cj = "⦧", aj = "⦜", lj = "ϵ", uj = "ϰ", fj = "∅", hj = "ϕ", pj = "ϖ", dj = "∝", gj = "↕", mj = "⇕", bj = "ϱ", yj = "ς", vj = "⊊︀", wj = "⫋︀", xj = "⊋︀", Sj = "⫌︀", _j = "ϑ", Tj = "⊲", Ej = "⊳", Cj = "⫨", Aj = "⫫", qj = "⫩", Oj = "В", Dj = "в", Lj = "⊢", Nj = "⊨", Pj = "⊩", kj = "⊫", Rj = "⫦", $j = "⊻", Mj = "∨", Ij = "⋁", jj = "≚", Bj = "⋮", Uj = "|", Hj = "‖", Vj = "|", Fj = "‖", zj = "∣", Gj = "|", Wj = "❘", Yj = "≀", Jj = " ", Xj = "𝔙", Zj = "𝔳", Qj = "⊲", Kj = "⊂⃒", tB = "⊃⃒", eB = "𝕍", sB = "𝕧", nB = "∝", rB = "⊳", oB = "𝒱", iB = "𝓋", cB = "⫋︀", aB = "⊊︀", lB = "⫌︀", uB = "⊋︀", fB = "⊪", hB = "⦚", pB = "Ŵ", dB = "ŵ", gB = "⩟", mB = "∧", bB = "⋀", yB = "≙", vB = "℘", wB = "𝔚", xB = "𝔴", SB = "𝕎", _B = "𝕨", TB = "℘", EB = "≀", CB = "≀", AB = "𝒲", qB = "𝓌", OB = "⋂", DB = "◯", LB = "⋃", NB = "▽", PB = "𝔛", kB = "𝔵", RB = "⟷", $B = "⟺", MB = "Ξ", IB = "ξ", jB = "⟵", BB = "⟸", UB = "⟼", HB = "⋻", VB = "⨀", FB = "𝕏", zB = "𝕩", GB = "⨁", WB = "⨂", YB = "⟶", JB = "⟹", XB = "𝒳", ZB = "𝓍", QB = "⨆", KB = "⨄", tU = "△", eU = "⋁", sU = "⋀", nU = "Ý", rU = "ý", oU = "Я", iU = "я", cU = "Ŷ", aU = "ŷ", lU = "Ы", uU = "ы", fU = "¥", hU = "𝔜", pU = "𝔶", dU = "Ї", gU = "ї", mU = "𝕐", bU = "𝕪", yU = "𝒴", vU = "𝓎", wU = "Ю", xU = "ю", SU = "ÿ", _U = "Ÿ", TU = "Ź", EU = "ź", CU = "Ž", AU = "ž", qU = "З", OU = "з", DU = "Ż", LU = "ż", NU = "ℨ", PU = "​", kU = "Ζ", RU = "ζ", $U = "𝔷", MU = "ℨ", IU = "Ж", jU = "ж", BU = "⇝", UU = "𝕫", HU = "ℤ", VU = "𝒵", FU = "𝓏", zU = "‍", GU = "‌", ts = {
  Aacute: qr,
  aacute: Or,
  Abreve: Dr,
  abreve: Lr,
  ac: Nr,
  acd: Pr,
  acE: kr,
  Acirc: Rr,
  acirc: $r,
  acute: Mr,
  Acy: Ir,
  acy: jr,
  AElig: Br,
  aelig: Ur,
  af: Hr,
  Afr: Vr,
  afr: Fr,
  Agrave: zr,
  agrave: Gr,
  alefsym: Wr,
  aleph: Yr,
  Alpha: Jr,
  alpha: Xr,
  Amacr: Zr,
  amacr: Qr,
  amalg: Kr,
  amp: to,
  AMP: eo,
  andand: so,
  And: no,
  and: ro,
  andd: oo,
  andslope: io,
  andv: co,
  ang: ao,
  ange: lo,
  angle: uo,
  angmsdaa: fo,
  angmsdab: ho,
  angmsdac: po,
  angmsdad: go,
  angmsdae: mo,
  angmsdaf: bo,
  angmsdag: yo,
  angmsdah: vo,
  angmsd: wo,
  angrt: xo,
  angrtvb: So,
  angrtvbd: _o,
  angsph: To,
  angst: Eo,
  angzarr: Co,
  Aogon: Ao,
  aogon: qo,
  Aopf: Oo,
  aopf: Do,
  apacir: Lo,
  ap: No,
  apE: Po,
  ape: ko,
  apid: Ro,
  apos: $o,
  ApplyFunction: Mo,
  approx: Io,
  approxeq: jo,
  Aring: Bo,
  aring: Uo,
  Ascr: Ho,
  ascr: Vo,
  Assign: Fo,
  ast: zo,
  asymp: Go,
  asympeq: Wo,
  Atilde: Yo,
  atilde: Jo,
  Auml: Xo,
  auml: Zo,
  awconint: Qo,
  awint: Ko,
  backcong: ti,
  backepsilon: ei,
  backprime: si,
  backsim: ni,
  backsimeq: ri,
  Backslash: oi,
  Barv: ii,
  barvee: ci,
  barwed: ai,
  Barwed: li,
  barwedge: ui,
  bbrk: fi,
  bbrktbrk: hi,
  bcong: pi,
  Bcy: di,
  bcy: gi,
  bdquo: mi,
  becaus: bi,
  because: yi,
  Because: vi,
  bemptyv: wi,
  bepsi: xi,
  bernou: Si,
  Bernoullis: _i,
  Beta: Ti,
  beta: Ei,
  beth: Ci,
  between: Ai,
  Bfr: qi,
  bfr: Oi,
  bigcap: Di,
  bigcirc: Li,
  bigcup: Ni,
  bigodot: Pi,
  bigoplus: ki,
  bigotimes: Ri,
  bigsqcup: $i,
  bigstar: Mi,
  bigtriangledown: Ii,
  bigtriangleup: ji,
  biguplus: Bi,
  bigvee: Ui,
  bigwedge: Hi,
  bkarow: Vi,
  blacklozenge: Fi,
  blacksquare: zi,
  blacktriangle: Gi,
  blacktriangledown: Wi,
  blacktriangleleft: Yi,
  blacktriangleright: Ji,
  blank: Xi,
  blk12: Zi,
  blk14: Qi,
  blk34: Ki,
  block: tc,
  bne: ec,
  bnequiv: sc,
  bNot: nc,
  bnot: rc,
  Bopf: oc,
  bopf: ic,
  bot: cc,
  bottom: ac,
  bowtie: lc,
  boxbox: uc,
  boxdl: fc,
  boxdL: hc,
  boxDl: pc,
  boxDL: dc,
  boxdr: gc,
  boxdR: mc,
  boxDr: bc,
  boxDR: yc,
  boxh: vc,
  boxH: wc,
  boxhd: xc,
  boxHd: Sc,
  boxhD: _c,
  boxHD: Tc,
  boxhu: Ec,
  boxHu: Cc,
  boxhU: Ac,
  boxHU: qc,
  boxminus: Oc,
  boxplus: Dc,
  boxtimes: Lc,
  boxul: Nc,
  boxuL: Pc,
  boxUl: kc,
  boxUL: Rc,
  boxur: $c,
  boxuR: Mc,
  boxUr: Ic,
  boxUR: jc,
  boxv: Bc,
  boxV: Uc,
  boxvh: Hc,
  boxvH: Vc,
  boxVh: Fc,
  boxVH: zc,
  boxvl: Gc,
  boxvL: Wc,
  boxVl: Yc,
  boxVL: Jc,
  boxvr: Xc,
  boxvR: Zc,
  boxVr: Qc,
  boxVR: Kc,
  bprime: ta,
  breve: ea,
  Breve: sa,
  brvbar: na,
  bscr: ra,
  Bscr: oa,
  bsemi: ia,
  bsim: ca,
  bsime: aa,
  bsolb: la,
  bsol: ua,
  bsolhsub: fa,
  bull: ha,
  bullet: pa,
  bump: da,
  bumpE: ga,
  bumpe: ma,
  Bumpeq: ba,
  bumpeq: ya,
  Cacute: va,
  cacute: wa,
  capand: xa,
  capbrcup: Sa,
  capcap: _a,
  cap: Ta,
  Cap: Ea,
  capcup: Ca,
  capdot: Aa,
  CapitalDifferentialD: qa,
  caps: Oa,
  caret: Da,
  caron: La,
  Cayleys: Na,
  ccaps: Pa,
  Ccaron: ka,
  ccaron: Ra,
  Ccedil: $a,
  ccedil: Ma,
  Ccirc: Ia,
  ccirc: ja,
  Cconint: Ba,
  ccups: Ua,
  ccupssm: Ha,
  Cdot: Va,
  cdot: Fa,
  cedil: za,
  Cedilla: Ga,
  cemptyv: Wa,
  cent: Ya,
  centerdot: Ja,
  CenterDot: Xa,
  cfr: Za,
  Cfr: Qa,
  CHcy: Ka,
  chcy: tl,
  check: el,
  checkmark: sl,
  Chi: nl,
  chi: rl,
  circ: ol,
  circeq: il,
  circlearrowleft: cl,
  circlearrowright: al,
  circledast: ll,
  circledcirc: ul,
  circleddash: fl,
  CircleDot: hl,
  circledR: pl,
  circledS: dl,
  CircleMinus: gl,
  CirclePlus: ml,
  CircleTimes: bl,
  cir: yl,
  cirE: vl,
  cire: wl,
  cirfnint: xl,
  cirmid: Sl,
  cirscir: _l,
  ClockwiseContourIntegral: Tl,
  CloseCurlyDoubleQuote: El,
  CloseCurlyQuote: Cl,
  clubs: Al,
  clubsuit: ql,
  colon: Ol,
  Colon: Dl,
  Colone: Ll,
  colone: Nl,
  coloneq: Pl,
  comma: kl,
  commat: Rl,
  comp: $l,
  compfn: Ml,
  complement: Il,
  complexes: jl,
  cong: Bl,
  congdot: Ul,
  Congruent: Hl,
  conint: Vl,
  Conint: Fl,
  ContourIntegral: zl,
  copf: Gl,
  Copf: Wl,
  coprod: Yl,
  Coproduct: Jl,
  copy: Xl,
  COPY: Zl,
  copysr: Ql,
  CounterClockwiseContourIntegral: Kl,
  crarr: tu,
  cross: eu,
  Cross: su,
  Cscr: nu,
  cscr: ru,
  csub: ou,
  csube: iu,
  csup: cu,
  csupe: au,
  ctdot: lu,
  cudarrl: uu,
  cudarrr: fu,
  cuepr: hu,
  cuesc: pu,
  cularr: du,
  cularrp: gu,
  cupbrcap: mu,
  cupcap: bu,
  CupCap: yu,
  cup: vu,
  Cup: wu,
  cupcup: xu,
  cupdot: Su,
  cupor: _u,
  cups: Tu,
  curarr: Eu,
  curarrm: Cu,
  curlyeqprec: Au,
  curlyeqsucc: qu,
  curlyvee: Ou,
  curlywedge: Du,
  curren: Lu,
  curvearrowleft: Nu,
  curvearrowright: Pu,
  cuvee: ku,
  cuwed: Ru,
  cwconint: $u,
  cwint: Mu,
  cylcty: Iu,
  dagger: ju,
  Dagger: Bu,
  daleth: Uu,
  darr: Hu,
  Darr: Vu,
  dArr: Fu,
  dash: zu,
  Dashv: Gu,
  dashv: Wu,
  dbkarow: Yu,
  dblac: Ju,
  Dcaron: Xu,
  dcaron: Zu,
  Dcy: Qu,
  dcy: Ku,
  ddagger: tf,
  ddarr: ef,
  DD: sf,
  dd: nf,
  DDotrahd: rf,
  ddotseq: of,
  deg: cf,
  Del: af,
  Delta: lf,
  delta: uf,
  demptyv: ff,
  dfisht: hf,
  Dfr: pf,
  dfr: df,
  dHar: gf,
  dharl: mf,
  dharr: bf,
  DiacriticalAcute: yf,
  DiacriticalDot: vf,
  DiacriticalDoubleAcute: wf,
  DiacriticalGrave: xf,
  DiacriticalTilde: Sf,
  diam: _f,
  diamond: Tf,
  Diamond: Ef,
  diamondsuit: Cf,
  diams: Af,
  die: qf,
  DifferentialD: Of,
  digamma: Df,
  disin: Lf,
  div: Nf,
  divide: Pf,
  divideontimes: kf,
  divonx: Rf,
  DJcy: $f,
  djcy: Mf,
  dlcorn: If,
  dlcrop: jf,
  dollar: Bf,
  Dopf: Uf,
  dopf: Hf,
  Dot: Vf,
  dot: Ff,
  DotDot: zf,
  doteq: Gf,
  doteqdot: Wf,
  DotEqual: Yf,
  dotminus: Jf,
  dotplus: Xf,
  dotsquare: Zf,
  doublebarwedge: Qf,
  DoubleContourIntegral: Kf,
  DoubleDot: th,
  DoubleDownArrow: eh,
  DoubleLeftArrow: sh,
  DoubleLeftRightArrow: nh,
  DoubleLeftTee: rh,
  DoubleLongLeftArrow: oh,
  DoubleLongLeftRightArrow: ih,
  DoubleLongRightArrow: ch,
  DoubleRightArrow: ah,
  DoubleRightTee: lh,
  DoubleUpArrow: uh,
  DoubleUpDownArrow: fh,
  DoubleVerticalBar: hh,
  DownArrowBar: ph,
  downarrow: dh,
  DownArrow: gh,
  Downarrow: mh,
  DownArrowUpArrow: bh,
  DownBreve: yh,
  downdownarrows: vh,
  downharpoonleft: wh,
  downharpoonright: xh,
  DownLeftRightVector: Sh,
  DownLeftTeeVector: _h,
  DownLeftVectorBar: Th,
  DownLeftVector: Eh,
  DownRightTeeVector: Ch,
  DownRightVectorBar: Ah,
  DownRightVector: qh,
  DownTeeArrow: Oh,
  DownTee: Dh,
  drbkarow: Lh,
  drcorn: Nh,
  drcrop: Ph,
  Dscr: kh,
  dscr: Rh,
  DScy: $h,
  dscy: Mh,
  dsol: Ih,
  Dstrok: jh,
  dstrok: Bh,
  dtdot: Uh,
  dtri: Hh,
  dtrif: Vh,
  duarr: Fh,
  duhar: zh,
  dwangle: Gh,
  DZcy: Wh,
  dzcy: Yh,
  dzigrarr: Jh,
  Eacute: Xh,
  eacute: Zh,
  easter: Qh,
  Ecaron: Kh,
  ecaron: tp,
  Ecirc: ep,
  ecirc: sp,
  ecir: np,
  ecolon: rp,
  Ecy: op,
  ecy: ip,
  eDDot: cp,
  Edot: ap,
  edot: lp,
  eDot: up,
  ee: fp,
  efDot: hp,
  Efr: pp,
  efr: dp,
  eg: gp,
  Egrave: mp,
  egrave: bp,
  egs: yp,
  egsdot: vp,
  el: wp,
  Element: xp,
  elinters: Sp,
  ell: _p,
  els: Tp,
  elsdot: Ep,
  Emacr: Cp,
  emacr: Ap,
  empty: qp,
  emptyset: Op,
  EmptySmallSquare: Dp,
  emptyv: Lp,
  EmptyVerySmallSquare: Np,
  emsp13: Pp,
  emsp14: kp,
  emsp: Rp,
  ENG: $p,
  eng: Mp,
  ensp: Ip,
  Eogon: jp,
  eogon: Bp,
  Eopf: Up,
  eopf: Hp,
  epar: Vp,
  eparsl: Fp,
  eplus: zp,
  epsi: Gp,
  Epsilon: Wp,
  epsilon: Yp,
  epsiv: Jp,
  eqcirc: Xp,
  eqcolon: Zp,
  eqsim: Qp,
  eqslantgtr: Kp,
  eqslantless: td,
  Equal: ed,
  equals: sd,
  EqualTilde: nd,
  equest: rd,
  Equilibrium: od,
  equiv: id,
  equivDD: cd,
  eqvparsl: ad,
  erarr: ld,
  erDot: ud,
  escr: fd,
  Escr: hd,
  esdot: pd,
  Esim: dd,
  esim: gd,
  Eta: md,
  eta: bd,
  ETH: yd,
  eth: vd,
  Euml: wd,
  euml: xd,
  euro: Sd,
  excl: _d,
  exist: Td,
  Exists: Ed,
  expectation: Cd,
  exponentiale: Ad,
  ExponentialE: qd,
  fallingdotseq: Od,
  Fcy: Dd,
  fcy: Ld,
  female: Nd,
  ffilig: Pd,
  fflig: kd,
  ffllig: Rd,
  Ffr: $d,
  ffr: Md,
  filig: Id,
  FilledSmallSquare: jd,
  FilledVerySmallSquare: Bd,
  fjlig: Ud,
  flat: Hd,
  fllig: Vd,
  fltns: Fd,
  fnof: zd,
  Fopf: Gd,
  fopf: Wd,
  forall: Yd,
  ForAll: Jd,
  fork: Xd,
  forkv: Zd,
  Fouriertrf: Qd,
  fpartint: Kd,
  frac12: tg,
  frac13: eg,
  frac14: sg,
  frac15: ng,
  frac16: rg,
  frac18: og,
  frac23: ig,
  frac25: cg,
  frac34: ag,
  frac35: lg,
  frac38: ug,
  frac45: fg,
  frac56: hg,
  frac58: pg,
  frac78: dg,
  frasl: gg,
  frown: mg,
  fscr: bg,
  Fscr: yg,
  gacute: vg,
  Gamma: wg,
  gamma: xg,
  Gammad: Sg,
  gammad: _g,
  gap: Tg,
  Gbreve: Eg,
  gbreve: Cg,
  Gcedil: Ag,
  Gcirc: qg,
  gcirc: Og,
  Gcy: Dg,
  gcy: Lg,
  Gdot: Ng,
  gdot: Pg,
  ge: kg,
  gE: Rg,
  gEl: $g,
  gel: Mg,
  geq: Ig,
  geqq: jg,
  geqslant: Bg,
  gescc: Ug,
  ges: Hg,
  gesdot: Vg,
  gesdoto: Fg,
  gesdotol: zg,
  gesl: Gg,
  gesles: Wg,
  Gfr: Yg,
  gfr: Jg,
  gg: Xg,
  Gg: Zg,
  ggg: Qg,
  gimel: Kg,
  GJcy: tm,
  gjcy: em,
  gla: sm,
  gl: nm,
  glE: rm,
  glj: om,
  gnap: im,
  gnapprox: cm,
  gne: am,
  gnE: lm,
  gneq: um,
  gneqq: fm,
  gnsim: hm,
  Gopf: pm,
  gopf: dm,
  grave: gm,
  GreaterEqual: mm,
  GreaterEqualLess: bm,
  GreaterFullEqual: ym,
  GreaterGreater: vm,
  GreaterLess: wm,
  GreaterSlantEqual: xm,
  GreaterTilde: Sm,
  Gscr: _m,
  gscr: Tm,
  gsim: Em,
  gsime: Cm,
  gsiml: Am,
  gtcc: qm,
  gtcir: Om,
  gt: Dm,
  GT: Lm,
  Gt: Nm,
  gtdot: Pm,
  gtlPar: km,
  gtquest: Rm,
  gtrapprox: $m,
  gtrarr: Mm,
  gtrdot: Im,
  gtreqless: jm,
  gtreqqless: Bm,
  gtrless: Um,
  gtrsim: Hm,
  gvertneqq: Vm,
  gvnE: Fm,
  Hacek: zm,
  hairsp: Gm,
  half: Wm,
  hamilt: Ym,
  HARDcy: Jm,
  hardcy: Xm,
  harrcir: Zm,
  harr: Qm,
  hArr: Km,
  harrw: tb,
  Hat: eb,
  hbar: sb,
  Hcirc: nb,
  hcirc: rb,
  hearts: ob,
  heartsuit: ib,
  hellip: cb,
  hercon: ab,
  hfr: lb,
  Hfr: ub,
  HilbertSpace: fb,
  hksearow: hb,
  hkswarow: pb,
  hoarr: db,
  homtht: gb,
  hookleftarrow: mb,
  hookrightarrow: bb,
  hopf: yb,
  Hopf: vb,
  horbar: wb,
  HorizontalLine: xb,
  hscr: Sb,
  Hscr: _b,
  hslash: Tb,
  Hstrok: Eb,
  hstrok: Cb,
  HumpDownHump: Ab,
  HumpEqual: qb,
  hybull: Ob,
  hyphen: Db,
  Iacute: Lb,
  iacute: Nb,
  ic: Pb,
  Icirc: kb,
  icirc: Rb,
  Icy: $b,
  icy: Mb,
  Idot: Ib,
  IEcy: jb,
  iecy: Bb,
  iexcl: Ub,
  iff: Hb,
  ifr: Vb,
  Ifr: Fb,
  Igrave: zb,
  igrave: Gb,
  ii: Wb,
  iiiint: Yb,
  iiint: Jb,
  iinfin: Xb,
  iiota: Zb,
  IJlig: Qb,
  ijlig: Kb,
  Imacr: ty,
  imacr: ey,
  image: sy,
  ImaginaryI: ny,
  imagline: ry,
  imagpart: oy,
  imath: iy,
  Im: cy,
  imof: ay,
  imped: ly,
  Implies: uy,
  incare: fy,
  in: "∈",
  infin: hy,
  infintie: py,
  inodot: dy,
  intcal: gy,
  int: my,
  Int: by,
  integers: yy,
  Integral: vy,
  intercal: wy,
  Intersection: xy,
  intlarhk: Sy,
  intprod: _y,
  InvisibleComma: Ty,
  InvisibleTimes: Ey,
  IOcy: Cy,
  iocy: Ay,
  Iogon: qy,
  iogon: Oy,
  Iopf: Dy,
  iopf: Ly,
  Iota: Ny,
  iota: Py,
  iprod: ky,
  iquest: Ry,
  iscr: $y,
  Iscr: My,
  isin: Iy,
  isindot: jy,
  isinE: By,
  isins: Uy,
  isinsv: Hy,
  isinv: Vy,
  it: Fy,
  Itilde: zy,
  itilde: Gy,
  Iukcy: Wy,
  iukcy: Yy,
  Iuml: Jy,
  iuml: Xy,
  Jcirc: Zy,
  jcirc: Qy,
  Jcy: Ky,
  jcy: tv,
  Jfr: ev,
  jfr: sv,
  jmath: nv,
  Jopf: rv,
  jopf: ov,
  Jscr: iv,
  jscr: cv,
  Jsercy: av,
  jsercy: lv,
  Jukcy: uv,
  jukcy: fv,
  Kappa: hv,
  kappa: pv,
  kappav: dv,
  Kcedil: gv,
  kcedil: mv,
  Kcy: bv,
  kcy: yv,
  Kfr: vv,
  kfr: wv,
  kgreen: xv,
  KHcy: Sv,
  khcy: _v,
  KJcy: Tv,
  kjcy: Ev,
  Kopf: Cv,
  kopf: Av,
  Kscr: qv,
  kscr: Ov,
  lAarr: Dv,
  Lacute: Lv,
  lacute: Nv,
  laemptyv: Pv,
  lagran: kv,
  Lambda: Rv,
  lambda: $v,
  lang: Mv,
  Lang: Iv,
  langd: jv,
  langle: Bv,
  lap: Uv,
  Laplacetrf: Hv,
  laquo: Vv,
  larrb: Fv,
  larrbfs: zv,
  larr: Gv,
  Larr: Wv,
  lArr: Yv,
  larrfs: Jv,
  larrhk: Xv,
  larrlp: Zv,
  larrpl: Qv,
  larrsim: Kv,
  larrtl: tw,
  latail: ew,
  lAtail: sw,
  lat: nw,
  late: rw,
  lates: ow,
  lbarr: iw,
  lBarr: cw,
  lbbrk: aw,
  lbrace: lw,
  lbrack: uw,
  lbrke: fw,
  lbrksld: hw,
  lbrkslu: pw,
  Lcaron: dw,
  lcaron: gw,
  Lcedil: mw,
  lcedil: bw,
  lceil: yw,
  lcub: vw,
  Lcy: ww,
  lcy: xw,
  ldca: Sw,
  ldquo: _w,
  ldquor: Tw,
  ldrdhar: Ew,
  ldrushar: Cw,
  ldsh: Aw,
  le: qw,
  lE: Ow,
  LeftAngleBracket: Dw,
  LeftArrowBar: Lw,
  leftarrow: Nw,
  LeftArrow: Pw,
  Leftarrow: kw,
  LeftArrowRightArrow: Rw,
  leftarrowtail: $w,
  LeftCeiling: Mw,
  LeftDoubleBracket: Iw,
  LeftDownTeeVector: jw,
  LeftDownVectorBar: Bw,
  LeftDownVector: Uw,
  LeftFloor: Hw,
  leftharpoondown: Vw,
  leftharpoonup: Fw,
  leftleftarrows: zw,
  leftrightarrow: Gw,
  LeftRightArrow: Ww,
  Leftrightarrow: Yw,
  leftrightarrows: Jw,
  leftrightharpoons: Xw,
  leftrightsquigarrow: Zw,
  LeftRightVector: Qw,
  LeftTeeArrow: Kw,
  LeftTee: tx,
  LeftTeeVector: ex,
  leftthreetimes: sx,
  LeftTriangleBar: nx,
  LeftTriangle: rx,
  LeftTriangleEqual: ox,
  LeftUpDownVector: ix,
  LeftUpTeeVector: cx,
  LeftUpVectorBar: ax,
  LeftUpVector: lx,
  LeftVectorBar: ux,
  LeftVector: fx,
  lEg: hx,
  leg: px,
  leq: dx,
  leqq: gx,
  leqslant: mx,
  lescc: bx,
  les: yx,
  lesdot: vx,
  lesdoto: wx,
  lesdotor: xx,
  lesg: Sx,
  lesges: _x,
  lessapprox: Tx,
  lessdot: Ex,
  lesseqgtr: Cx,
  lesseqqgtr: Ax,
  LessEqualGreater: qx,
  LessFullEqual: Ox,
  LessGreater: Dx,
  lessgtr: Lx,
  LessLess: Nx,
  lesssim: Px,
  LessSlantEqual: kx,
  LessTilde: Rx,
  lfisht: $x,
  lfloor: Mx,
  Lfr: Ix,
  lfr: jx,
  lg: Bx,
  lgE: Ux,
  lHar: Hx,
  lhard: Vx,
  lharu: Fx,
  lharul: zx,
  lhblk: Gx,
  LJcy: Wx,
  ljcy: Yx,
  llarr: Jx,
  ll: Xx,
  Ll: Zx,
  llcorner: Qx,
  Lleftarrow: Kx,
  llhard: tS,
  lltri: eS,
  Lmidot: sS,
  lmidot: nS,
  lmoustache: rS,
  lmoust: oS,
  lnap: iS,
  lnapprox: cS,
  lne: aS,
  lnE: lS,
  lneq: uS,
  lneqq: fS,
  lnsim: hS,
  loang: pS,
  loarr: dS,
  lobrk: gS,
  longleftarrow: mS,
  LongLeftArrow: bS,
  Longleftarrow: yS,
  longleftrightarrow: vS,
  LongLeftRightArrow: wS,
  Longleftrightarrow: xS,
  longmapsto: SS,
  longrightarrow: _S,
  LongRightArrow: TS,
  Longrightarrow: ES,
  looparrowleft: CS,
  looparrowright: AS,
  lopar: qS,
  Lopf: OS,
  lopf: DS,
  loplus: LS,
  lotimes: NS,
  lowast: PS,
  lowbar: kS,
  LowerLeftArrow: RS,
  LowerRightArrow: $S,
  loz: MS,
  lozenge: IS,
  lozf: jS,
  lpar: BS,
  lparlt: US,
  lrarr: HS,
  lrcorner: VS,
  lrhar: FS,
  lrhard: zS,
  lrm: GS,
  lrtri: WS,
  lsaquo: YS,
  lscr: JS,
  Lscr: XS,
  lsh: ZS,
  Lsh: QS,
  lsim: KS,
  lsime: t1,
  lsimg: e1,
  lsqb: s1,
  lsquo: n1,
  lsquor: r1,
  Lstrok: o1,
  lstrok: i1,
  ltcc: c1,
  ltcir: a1,
  lt: l1,
  LT: u1,
  Lt: f1,
  ltdot: h1,
  lthree: p1,
  ltimes: d1,
  ltlarr: g1,
  ltquest: m1,
  ltri: b1,
  ltrie: y1,
  ltrif: v1,
  ltrPar: w1,
  lurdshar: x1,
  luruhar: S1,
  lvertneqq: _1,
  lvnE: T1,
  macr: E1,
  male: C1,
  malt: A1,
  maltese: q1,
  Map: "⤅",
  map: O1,
  mapsto: D1,
  mapstodown: L1,
  mapstoleft: N1,
  mapstoup: P1,
  marker: k1,
  mcomma: R1,
  Mcy: $1,
  mcy: M1,
  mdash: I1,
  mDDot: j1,
  measuredangle: B1,
  MediumSpace: U1,
  Mellintrf: H1,
  Mfr: V1,
  mfr: F1,
  mho: z1,
  micro: G1,
  midast: W1,
  midcir: Y1,
  mid: J1,
  middot: X1,
  minusb: Z1,
  minus: Q1,
  minusd: K1,
  minusdu: t_,
  MinusPlus: e_,
  mlcp: s_,
  mldr: n_,
  mnplus: r_,
  models: o_,
  Mopf: i_,
  mopf: c_,
  mp: a_,
  mscr: l_,
  Mscr: u_,
  mstpos: f_,
  Mu: h_,
  mu: p_,
  multimap: d_,
  mumap: g_,
  nabla: m_,
  Nacute: b_,
  nacute: y_,
  nang: v_,
  nap: w_,
  napE: x_,
  napid: S_,
  napos: __,
  napprox: T_,
  natural: E_,
  naturals: C_,
  natur: A_,
  nbsp: q_,
  nbump: O_,
  nbumpe: D_,
  ncap: L_,
  Ncaron: N_,
  ncaron: P_,
  Ncedil: k_,
  ncedil: R_,
  ncong: $_,
  ncongdot: M_,
  ncup: I_,
  Ncy: j_,
  ncy: B_,
  ndash: U_,
  nearhk: H_,
  nearr: V_,
  neArr: F_,
  nearrow: z_,
  ne: G_,
  nedot: W_,
  NegativeMediumSpace: Y_,
  NegativeThickSpace: J_,
  NegativeThinSpace: X_,
  NegativeVeryThinSpace: Z_,
  nequiv: Q_,
  nesear: K_,
  nesim: tT,
  NestedGreaterGreater: eT,
  NestedLessLess: sT,
  NewLine: nT,
  nexist: rT,
  nexists: oT,
  Nfr: iT,
  nfr: cT,
  ngE: aT,
  nge: lT,
  ngeq: uT,
  ngeqq: fT,
  ngeqslant: hT,
  nges: pT,
  nGg: dT,
  ngsim: gT,
  nGt: mT,
  ngt: bT,
  ngtr: yT,
  nGtv: vT,
  nharr: wT,
  nhArr: xT,
  nhpar: ST,
  ni: _T,
  nis: TT,
  nisd: ET,
  niv: CT,
  NJcy: AT,
  njcy: qT,
  nlarr: OT,
  nlArr: DT,
  nldr: LT,
  nlE: NT,
  nle: PT,
  nleftarrow: kT,
  nLeftarrow: RT,
  nleftrightarrow: $T,
  nLeftrightarrow: MT,
  nleq: IT,
  nleqq: jT,
  nleqslant: BT,
  nles: UT,
  nless: HT,
  nLl: VT,
  nlsim: FT,
  nLt: zT,
  nlt: GT,
  nltri: WT,
  nltrie: YT,
  nLtv: JT,
  nmid: XT,
  NoBreak: ZT,
  NonBreakingSpace: QT,
  nopf: KT,
  Nopf: tE,
  Not: eE,
  not: sE,
  NotCongruent: nE,
  NotCupCap: rE,
  NotDoubleVerticalBar: oE,
  NotElement: iE,
  NotEqual: cE,
  NotEqualTilde: aE,
  NotExists: lE,
  NotGreater: uE,
  NotGreaterEqual: fE,
  NotGreaterFullEqual: hE,
  NotGreaterGreater: pE,
  NotGreaterLess: dE,
  NotGreaterSlantEqual: gE,
  NotGreaterTilde: mE,
  NotHumpDownHump: bE,
  NotHumpEqual: yE,
  notin: vE,
  notindot: wE,
  notinE: xE,
  notinva: SE,
  notinvb: _E,
  notinvc: TE,
  NotLeftTriangleBar: EE,
  NotLeftTriangle: CE,
  NotLeftTriangleEqual: AE,
  NotLess: qE,
  NotLessEqual: OE,
  NotLessGreater: DE,
  NotLessLess: LE,
  NotLessSlantEqual: NE,
  NotLessTilde: PE,
  NotNestedGreaterGreater: kE,
  NotNestedLessLess: RE,
  notni: $E,
  notniva: ME,
  notnivb: IE,
  notnivc: jE,
  NotPrecedes: BE,
  NotPrecedesEqual: UE,
  NotPrecedesSlantEqual: HE,
  NotReverseElement: VE,
  NotRightTriangleBar: FE,
  NotRightTriangle: zE,
  NotRightTriangleEqual: GE,
  NotSquareSubset: WE,
  NotSquareSubsetEqual: YE,
  NotSquareSuperset: JE,
  NotSquareSupersetEqual: XE,
  NotSubset: ZE,
  NotSubsetEqual: QE,
  NotSucceeds: KE,
  NotSucceedsEqual: tC,
  NotSucceedsSlantEqual: eC,
  NotSucceedsTilde: sC,
  NotSuperset: nC,
  NotSupersetEqual: rC,
  NotTilde: oC,
  NotTildeEqual: iC,
  NotTildeFullEqual: cC,
  NotTildeTilde: aC,
  NotVerticalBar: lC,
  nparallel: uC,
  npar: fC,
  nparsl: hC,
  npart: pC,
  npolint: dC,
  npr: gC,
  nprcue: mC,
  nprec: bC,
  npreceq: yC,
  npre: vC,
  nrarrc: wC,
  nrarr: xC,
  nrArr: SC,
  nrarrw: _C,
  nrightarrow: TC,
  nRightarrow: EC,
  nrtri: CC,
  nrtrie: AC,
  nsc: qC,
  nsccue: OC,
  nsce: DC,
  Nscr: LC,
  nscr: NC,
  nshortmid: PC,
  nshortparallel: kC,
  nsim: RC,
  nsime: $C,
  nsimeq: MC,
  nsmid: IC,
  nspar: jC,
  nsqsube: BC,
  nsqsupe: UC,
  nsub: HC,
  nsubE: VC,
  nsube: FC,
  nsubset: zC,
  nsubseteq: GC,
  nsubseteqq: WC,
  nsucc: YC,
  nsucceq: JC,
  nsup: XC,
  nsupE: ZC,
  nsupe: QC,
  nsupset: KC,
  nsupseteq: tA,
  nsupseteqq: eA,
  ntgl: sA,
  Ntilde: nA,
  ntilde: rA,
  ntlg: oA,
  ntriangleleft: iA,
  ntrianglelefteq: cA,
  ntriangleright: aA,
  ntrianglerighteq: lA,
  Nu: uA,
  nu: fA,
  num: hA,
  numero: pA,
  numsp: dA,
  nvap: gA,
  nvdash: mA,
  nvDash: bA,
  nVdash: yA,
  nVDash: vA,
  nvge: wA,
  nvgt: xA,
  nvHarr: SA,
  nvinfin: _A,
  nvlArr: TA,
  nvle: EA,
  nvlt: CA,
  nvltrie: AA,
  nvrArr: qA,
  nvrtrie: OA,
  nvsim: DA,
  nwarhk: LA,
  nwarr: NA,
  nwArr: PA,
  nwarrow: kA,
  nwnear: RA,
  Oacute: $A,
  oacute: MA,
  oast: IA,
  Ocirc: jA,
  ocirc: BA,
  ocir: UA,
  Ocy: HA,
  ocy: VA,
  odash: FA,
  Odblac: zA,
  odblac: GA,
  odiv: WA,
  odot: YA,
  odsold: JA,
  OElig: XA,
  oelig: ZA,
  ofcir: QA,
  Ofr: KA,
  ofr: t0,
  ogon: e0,
  Ograve: s0,
  ograve: n0,
  ogt: r0,
  ohbar: o0,
  ohm: i0,
  oint: c0,
  olarr: a0,
  olcir: l0,
  olcross: u0,
  oline: f0,
  olt: h0,
  Omacr: p0,
  omacr: d0,
  Omega: g0,
  omega: m0,
  Omicron: b0,
  omicron: y0,
  omid: v0,
  ominus: w0,
  Oopf: x0,
  oopf: S0,
  opar: _0,
  OpenCurlyDoubleQuote: T0,
  OpenCurlyQuote: E0,
  operp: C0,
  oplus: A0,
  orarr: q0,
  Or: O0,
  or: D0,
  ord: L0,
  order: N0,
  orderof: P0,
  ordf: k0,
  ordm: R0,
  origof: $0,
  oror: M0,
  orslope: I0,
  orv: j0,
  oS: B0,
  Oscr: U0,
  oscr: H0,
  Oslash: V0,
  oslash: F0,
  osol: z0,
  Otilde: G0,
  otilde: W0,
  otimesas: Y0,
  Otimes: J0,
  otimes: X0,
  Ouml: Z0,
  ouml: Q0,
  ovbar: K0,
  OverBar: tq,
  OverBrace: eq,
  OverBracket: sq,
  OverParenthesis: nq,
  para: rq,
  parallel: oq,
  par: iq,
  parsim: cq,
  parsl: aq,
  part: lq,
  PartialD: uq,
  Pcy: fq,
  pcy: hq,
  percnt: pq,
  period: dq,
  permil: gq,
  perp: mq,
  pertenk: bq,
  Pfr: yq,
  pfr: vq,
  Phi: wq,
  phi: xq,
  phiv: Sq,
  phmmat: _q,
  phone: Tq,
  Pi: Eq,
  pi: Cq,
  pitchfork: Aq,
  piv: qq,
  planck: Oq,
  planckh: Dq,
  plankv: Lq,
  plusacir: Nq,
  plusb: Pq,
  pluscir: kq,
  plus: Rq,
  plusdo: $q,
  plusdu: Mq,
  pluse: Iq,
  PlusMinus: jq,
  plusmn: Bq,
  plussim: Uq,
  plustwo: Hq,
  pm: Vq,
  Poincareplane: Fq,
  pointint: zq,
  popf: Gq,
  Popf: Wq,
  pound: Yq,
  prap: Jq,
  Pr: Xq,
  pr: Zq,
  prcue: Qq,
  precapprox: Kq,
  prec: tO,
  preccurlyeq: eO,
  Precedes: sO,
  PrecedesEqual: nO,
  PrecedesSlantEqual: rO,
  PrecedesTilde: oO,
  preceq: iO,
  precnapprox: cO,
  precneqq: aO,
  precnsim: lO,
  pre: uO,
  prE: fO,
  precsim: hO,
  prime: pO,
  Prime: dO,
  primes: gO,
  prnap: mO,
  prnE: bO,
  prnsim: yO,
  prod: vO,
  Product: wO,
  profalar: xO,
  profline: SO,
  profsurf: _O,
  prop: TO,
  Proportional: EO,
  Proportion: CO,
  propto: AO,
  prsim: qO,
  prurel: OO,
  Pscr: DO,
  pscr: LO,
  Psi: NO,
  psi: PO,
  puncsp: kO,
  Qfr: RO,
  qfr: $O,
  qint: MO,
  qopf: IO,
  Qopf: jO,
  qprime: BO,
  Qscr: UO,
  qscr: HO,
  quaternions: VO,
  quatint: FO,
  quest: zO,
  questeq: GO,
  quot: WO,
  QUOT: YO,
  rAarr: JO,
  race: XO,
  Racute: ZO,
  racute: QO,
  radic: KO,
  raemptyv: tD,
  rang: eD,
  Rang: sD,
  rangd: nD,
  range: rD,
  rangle: oD,
  raquo: iD,
  rarrap: cD,
  rarrb: aD,
  rarrbfs: lD,
  rarrc: uD,
  rarr: fD,
  Rarr: hD,
  rArr: pD,
  rarrfs: dD,
  rarrhk: gD,
  rarrlp: mD,
  rarrpl: bD,
  rarrsim: yD,
  Rarrtl: vD,
  rarrtl: wD,
  rarrw: xD,
  ratail: SD,
  rAtail: _D,
  ratio: TD,
  rationals: ED,
  rbarr: CD,
  rBarr: AD,
  RBarr: qD,
  rbbrk: OD,
  rbrace: DD,
  rbrack: LD,
  rbrke: ND,
  rbrksld: PD,
  rbrkslu: kD,
  Rcaron: RD,
  rcaron: $D,
  Rcedil: MD,
  rcedil: ID,
  rceil: jD,
  rcub: BD,
  Rcy: UD,
  rcy: HD,
  rdca: VD,
  rdldhar: FD,
  rdquo: zD,
  rdquor: GD,
  rdsh: WD,
  real: YD,
  realine: JD,
  realpart: XD,
  reals: ZD,
  Re: QD,
  rect: KD,
  reg: tL,
  REG: eL,
  ReverseElement: sL,
  ReverseEquilibrium: nL,
  ReverseUpEquilibrium: rL,
  rfisht: oL,
  rfloor: iL,
  rfr: cL,
  Rfr: aL,
  rHar: lL,
  rhard: uL,
  rharu: fL,
  rharul: hL,
  Rho: pL,
  rho: dL,
  rhov: gL,
  RightAngleBracket: mL,
  RightArrowBar: bL,
  rightarrow: yL,
  RightArrow: vL,
  Rightarrow: wL,
  RightArrowLeftArrow: xL,
  rightarrowtail: SL,
  RightCeiling: _L,
  RightDoubleBracket: TL,
  RightDownTeeVector: EL,
  RightDownVectorBar: CL,
  RightDownVector: AL,
  RightFloor: qL,
  rightharpoondown: OL,
  rightharpoonup: DL,
  rightleftarrows: LL,
  rightleftharpoons: NL,
  rightrightarrows: PL,
  rightsquigarrow: kL,
  RightTeeArrow: RL,
  RightTee: $L,
  RightTeeVector: ML,
  rightthreetimes: IL,
  RightTriangleBar: jL,
  RightTriangle: BL,
  RightTriangleEqual: UL,
  RightUpDownVector: HL,
  RightUpTeeVector: VL,
  RightUpVectorBar: FL,
  RightUpVector: zL,
  RightVectorBar: GL,
  RightVector: WL,
  ring: YL,
  risingdotseq: JL,
  rlarr: XL,
  rlhar: ZL,
  rlm: QL,
  rmoustache: KL,
  rmoust: tN,
  rnmid: eN,
  roang: sN,
  roarr: nN,
  robrk: rN,
  ropar: oN,
  ropf: iN,
  Ropf: cN,
  roplus: aN,
  rotimes: lN,
  RoundImplies: uN,
  rpar: fN,
  rpargt: hN,
  rppolint: pN,
  rrarr: dN,
  Rrightarrow: gN,
  rsaquo: mN,
  rscr: bN,
  Rscr: yN,
  rsh: vN,
  Rsh: wN,
  rsqb: xN,
  rsquo: SN,
  rsquor: _N,
  rthree: TN,
  rtimes: EN,
  rtri: CN,
  rtrie: AN,
  rtrif: qN,
  rtriltri: ON,
  RuleDelayed: DN,
  ruluhar: LN,
  rx: NN,
  Sacute: PN,
  sacute: kN,
  sbquo: RN,
  scap: $N,
  Scaron: MN,
  scaron: IN,
  Sc: jN,
  sc: BN,
  sccue: UN,
  sce: HN,
  scE: VN,
  Scedil: FN,
  scedil: zN,
  Scirc: GN,
  scirc: WN,
  scnap: YN,
  scnE: JN,
  scnsim: XN,
  scpolint: ZN,
  scsim: QN,
  Scy: KN,
  scy: tP,
  sdotb: eP,
  sdot: sP,
  sdote: nP,
  searhk: rP,
  searr: oP,
  seArr: iP,
  searrow: cP,
  sect: aP,
  semi: lP,
  seswar: uP,
  setminus: fP,
  setmn: hP,
  sext: pP,
  Sfr: dP,
  sfr: gP,
  sfrown: mP,
  sharp: bP,
  SHCHcy: yP,
  shchcy: vP,
  SHcy: wP,
  shcy: xP,
  ShortDownArrow: SP,
  ShortLeftArrow: _P,
  shortmid: TP,
  shortparallel: EP,
  ShortRightArrow: CP,
  ShortUpArrow: AP,
  shy: qP,
  Sigma: OP,
  sigma: DP,
  sigmaf: LP,
  sigmav: NP,
  sim: PP,
  simdot: kP,
  sime: RP,
  simeq: $P,
  simg: MP,
  simgE: IP,
  siml: jP,
  simlE: BP,
  simne: UP,
  simplus: HP,
  simrarr: VP,
  slarr: FP,
  SmallCircle: zP,
  smallsetminus: GP,
  smashp: WP,
  smeparsl: YP,
  smid: JP,
  smile: XP,
  smt: ZP,
  smte: QP,
  smtes: KP,
  SOFTcy: tk,
  softcy: ek,
  solbar: sk,
  solb: nk,
  sol: rk,
  Sopf: ok,
  sopf: ik,
  spades: ck,
  spadesuit: ak,
  spar: lk,
  sqcap: uk,
  sqcaps: fk,
  sqcup: hk,
  sqcups: pk,
  Sqrt: dk,
  sqsub: gk,
  sqsube: mk,
  sqsubset: bk,
  sqsubseteq: yk,
  sqsup: vk,
  sqsupe: wk,
  sqsupset: xk,
  sqsupseteq: Sk,
  square: _k,
  Square: Tk,
  SquareIntersection: Ek,
  SquareSubset: Ck,
  SquareSubsetEqual: Ak,
  SquareSuperset: qk,
  SquareSupersetEqual: Ok,
  SquareUnion: Dk,
  squarf: Lk,
  squ: Nk,
  squf: Pk,
  srarr: kk,
  Sscr: Rk,
  sscr: $k,
  ssetmn: Mk,
  ssmile: Ik,
  sstarf: jk,
  Star: Bk,
  star: Uk,
  starf: Hk,
  straightepsilon: Vk,
  straightphi: Fk,
  strns: zk,
  sub: Gk,
  Sub: Wk,
  subdot: Yk,
  subE: Jk,
  sube: Xk,
  subedot: Zk,
  submult: Qk,
  subnE: Kk,
  subne: tR,
  subplus: eR,
  subrarr: sR,
  subset: nR,
  Subset: rR,
  subseteq: oR,
  subseteqq: iR,
  SubsetEqual: cR,
  subsetneq: aR,
  subsetneqq: lR,
  subsim: uR,
  subsub: fR,
  subsup: hR,
  succapprox: pR,
  succ: dR,
  succcurlyeq: gR,
  Succeeds: mR,
  SucceedsEqual: bR,
  SucceedsSlantEqual: yR,
  SucceedsTilde: vR,
  succeq: wR,
  succnapprox: xR,
  succneqq: SR,
  succnsim: _R,
  succsim: TR,
  SuchThat: ER,
  sum: CR,
  Sum: AR,
  sung: qR,
  sup1: OR,
  sup2: DR,
  sup3: LR,
  sup: NR,
  Sup: PR,
  supdot: kR,
  supdsub: RR,
  supE: $R,
  supe: MR,
  supedot: IR,
  Superset: jR,
  SupersetEqual: BR,
  suphsol: UR,
  suphsub: HR,
  suplarr: VR,
  supmult: FR,
  supnE: zR,
  supne: GR,
  supplus: WR,
  supset: YR,
  Supset: JR,
  supseteq: XR,
  supseteqq: ZR,
  supsetneq: QR,
  supsetneqq: KR,
  supsim: t$,
  supsub: e$,
  supsup: s$,
  swarhk: n$,
  swarr: r$,
  swArr: o$,
  swarrow: i$,
  swnwar: c$,
  szlig: a$,
  Tab: l$,
  target: u$,
  Tau: f$,
  tau: h$,
  tbrk: p$,
  Tcaron: d$,
  tcaron: g$,
  Tcedil: m$,
  tcedil: b$,
  Tcy: y$,
  tcy: v$,
  tdot: w$,
  telrec: x$,
  Tfr: S$,
  tfr: _$,
  there4: T$,
  therefore: E$,
  Therefore: C$,
  Theta: A$,
  theta: q$,
  thetasym: O$,
  thetav: D$,
  thickapprox: L$,
  thicksim: N$,
  ThickSpace: P$,
  ThinSpace: k$,
  thinsp: R$,
  thkap: $$,
  thksim: M$,
  THORN: I$,
  thorn: j$,
  tilde: B$,
  Tilde: U$,
  TildeEqual: H$,
  TildeFullEqual: V$,
  TildeTilde: F$,
  timesbar: z$,
  timesb: G$,
  times: W$,
  timesd: Y$,
  tint: J$,
  toea: X$,
  topbot: Z$,
  topcir: Q$,
  top: K$,
  Topf: tM,
  topf: eM,
  topfork: sM,
  tosa: nM,
  tprime: rM,
  trade: oM,
  TRADE: iM,
  triangle: cM,
  triangledown: aM,
  triangleleft: lM,
  trianglelefteq: uM,
  triangleq: fM,
  triangleright: hM,
  trianglerighteq: pM,
  tridot: dM,
  trie: gM,
  triminus: mM,
  TripleDot: bM,
  triplus: yM,
  trisb: vM,
  tritime: wM,
  trpezium: xM,
  Tscr: SM,
  tscr: _M,
  TScy: TM,
  tscy: EM,
  TSHcy: CM,
  tshcy: AM,
  Tstrok: qM,
  tstrok: OM,
  twixt: DM,
  twoheadleftarrow: LM,
  twoheadrightarrow: NM,
  Uacute: PM,
  uacute: kM,
  uarr: RM,
  Uarr: $M,
  uArr: MM,
  Uarrocir: IM,
  Ubrcy: jM,
  ubrcy: BM,
  Ubreve: UM,
  ubreve: HM,
  Ucirc: VM,
  ucirc: FM,
  Ucy: zM,
  ucy: GM,
  udarr: WM,
  Udblac: YM,
  udblac: JM,
  udhar: XM,
  ufisht: ZM,
  Ufr: QM,
  ufr: KM,
  Ugrave: tI,
  ugrave: eI,
  uHar: sI,
  uharl: nI,
  uharr: rI,
  uhblk: oI,
  ulcorn: iI,
  ulcorner: cI,
  ulcrop: aI,
  ultri: lI,
  Umacr: uI,
  umacr: fI,
  uml: hI,
  UnderBar: pI,
  UnderBrace: dI,
  UnderBracket: gI,
  UnderParenthesis: mI,
  Union: bI,
  UnionPlus: yI,
  Uogon: vI,
  uogon: wI,
  Uopf: xI,
  uopf: SI,
  UpArrowBar: _I,
  uparrow: TI,
  UpArrow: EI,
  Uparrow: CI,
  UpArrowDownArrow: AI,
  updownarrow: qI,
  UpDownArrow: OI,
  Updownarrow: DI,
  UpEquilibrium: LI,
  upharpoonleft: NI,
  upharpoonright: PI,
  uplus: kI,
  UpperLeftArrow: RI,
  UpperRightArrow: $I,
  upsi: MI,
  Upsi: II,
  upsih: jI,
  Upsilon: BI,
  upsilon: UI,
  UpTeeArrow: HI,
  UpTee: VI,
  upuparrows: FI,
  urcorn: zI,
  urcorner: GI,
  urcrop: WI,
  Uring: YI,
  uring: JI,
  urtri: XI,
  Uscr: ZI,
  uscr: QI,
  utdot: KI,
  Utilde: tj,
  utilde: ej,
  utri: sj,
  utrif: nj,
  uuarr: rj,
  Uuml: oj,
  uuml: ij,
  uwangle: cj,
  vangrt: aj,
  varepsilon: lj,
  varkappa: uj,
  varnothing: fj,
  varphi: hj,
  varpi: pj,
  varpropto: dj,
  varr: gj,
  vArr: mj,
  varrho: bj,
  varsigma: yj,
  varsubsetneq: vj,
  varsubsetneqq: wj,
  varsupsetneq: xj,
  varsupsetneqq: Sj,
  vartheta: _j,
  vartriangleleft: Tj,
  vartriangleright: Ej,
  vBar: Cj,
  Vbar: Aj,
  vBarv: qj,
  Vcy: Oj,
  vcy: Dj,
  vdash: Lj,
  vDash: Nj,
  Vdash: Pj,
  VDash: kj,
  Vdashl: Rj,
  veebar: $j,
  vee: Mj,
  Vee: Ij,
  veeeq: jj,
  vellip: Bj,
  verbar: Uj,
  Verbar: Hj,
  vert: Vj,
  Vert: Fj,
  VerticalBar: zj,
  VerticalLine: Gj,
  VerticalSeparator: Wj,
  VerticalTilde: Yj,
  VeryThinSpace: Jj,
  Vfr: Xj,
  vfr: Zj,
  vltri: Qj,
  vnsub: Kj,
  vnsup: tB,
  Vopf: eB,
  vopf: sB,
  vprop: nB,
  vrtri: rB,
  Vscr: oB,
  vscr: iB,
  vsubnE: cB,
  vsubne: aB,
  vsupnE: lB,
  vsupne: uB,
  Vvdash: fB,
  vzigzag: hB,
  Wcirc: pB,
  wcirc: dB,
  wedbar: gB,
  wedge: mB,
  Wedge: bB,
  wedgeq: yB,
  weierp: vB,
  Wfr: wB,
  wfr: xB,
  Wopf: SB,
  wopf: _B,
  wp: TB,
  wr: EB,
  wreath: CB,
  Wscr: AB,
  wscr: qB,
  xcap: OB,
  xcirc: DB,
  xcup: LB,
  xdtri: NB,
  Xfr: PB,
  xfr: kB,
  xharr: RB,
  xhArr: $B,
  Xi: MB,
  xi: IB,
  xlarr: jB,
  xlArr: BB,
  xmap: UB,
  xnis: HB,
  xodot: VB,
  Xopf: FB,
  xopf: zB,
  xoplus: GB,
  xotime: WB,
  xrarr: YB,
  xrArr: JB,
  Xscr: XB,
  xscr: ZB,
  xsqcup: QB,
  xuplus: KB,
  xutri: tU,
  xvee: eU,
  xwedge: sU,
  Yacute: nU,
  yacute: rU,
  YAcy: oU,
  yacy: iU,
  Ycirc: cU,
  ycirc: aU,
  Ycy: lU,
  ycy: uU,
  yen: fU,
  Yfr: hU,
  yfr: pU,
  YIcy: dU,
  yicy: gU,
  Yopf: mU,
  yopf: bU,
  Yscr: yU,
  yscr: vU,
  YUcy: wU,
  yucy: xU,
  yuml: SU,
  Yuml: _U,
  Zacute: TU,
  zacute: EU,
  Zcaron: CU,
  zcaron: AU,
  Zcy: qU,
  zcy: OU,
  Zdot: DU,
  zdot: LU,
  zeetrf: NU,
  ZeroWidthSpace: PU,
  Zeta: kU,
  zeta: RU,
  zfr: $U,
  Zfr: MU,
  ZHcy: IU,
  zhcy: jU,
  zigrarr: BU,
  zopf: UU,
  Zopf: HU,
  Zscr: VU,
  zscr: FU,
  zwj: zU,
  zwnj: GU
}, WU = "Á", YU = "á", JU = "Â", XU = "â", ZU = "´", QU = "Æ", KU = "æ", tH = "À", eH = "à", sH = "&", nH = "&", rH = "Å", oH = "å", iH = "Ã", cH = "ã", aH = "Ä", lH = "ä", uH = "¦", fH = "Ç", hH = "ç", pH = "¸", dH = "¢", gH = "©", mH = "©", bH = "¤", yH = "°", vH = "÷", wH = "É", xH = "é", SH = "Ê", _H = "ê", TH = "È", EH = "è", CH = "Ð", AH = "ð", qH = "Ë", OH = "ë", DH = "½", LH = "¼", NH = "¾", PH = ">", kH = ">", RH = "Í", $H = "í", MH = "Î", IH = "î", jH = "¡", BH = "Ì", UH = "ì", HH = "¿", VH = "Ï", FH = "ï", zH = "«", GH = "<", WH = "<", YH = "¯", JH = "µ", XH = "·", ZH = " ", QH = "¬", KH = "Ñ", t2 = "ñ", e2 = "Ó", s2 = "ó", n2 = "Ô", r2 = "ô", o2 = "Ò", i2 = "ò", c2 = "ª", a2 = "º", l2 = "Ø", u2 = "ø", f2 = "Õ", h2 = "õ", p2 = "Ö", d2 = "ö", g2 = "¶", m2 = "±", b2 = "£", y2 = '"', v2 = '"', w2 = "»", x2 = "®", S2 = "®", _2 = "§", T2 = "­", E2 = "¹", C2 = "²", A2 = "³", q2 = "ß", O2 = "Þ", D2 = "þ", L2 = "×", N2 = "Ú", P2 = "ú", k2 = "Û", R2 = "û", $2 = "Ù", M2 = "ù", I2 = "¨", j2 = "Ü", B2 = "ü", U2 = "Ý", H2 = "ý", V2 = "¥", F2 = "ÿ", cn = {
  Aacute: WU,
  aacute: YU,
  Acirc: JU,
  acirc: XU,
  acute: ZU,
  AElig: QU,
  aelig: KU,
  Agrave: tH,
  agrave: eH,
  amp: sH,
  AMP: nH,
  Aring: rH,
  aring: oH,
  Atilde: iH,
  atilde: cH,
  Auml: aH,
  auml: lH,
  brvbar: uH,
  Ccedil: fH,
  ccedil: hH,
  cedil: pH,
  cent: dH,
  copy: gH,
  COPY: mH,
  curren: bH,
  deg: yH,
  divide: vH,
  Eacute: wH,
  eacute: xH,
  Ecirc: SH,
  ecirc: _H,
  Egrave: TH,
  egrave: EH,
  ETH: CH,
  eth: AH,
  Euml: qH,
  euml: OH,
  frac12: DH,
  frac14: LH,
  frac34: NH,
  gt: PH,
  GT: kH,
  Iacute: RH,
  iacute: $H,
  Icirc: MH,
  icirc: IH,
  iexcl: jH,
  Igrave: BH,
  igrave: UH,
  iquest: HH,
  Iuml: VH,
  iuml: FH,
  laquo: zH,
  lt: GH,
  LT: WH,
  macr: YH,
  micro: JH,
  middot: XH,
  nbsp: ZH,
  not: QH,
  Ntilde: KH,
  ntilde: t2,
  Oacute: e2,
  oacute: s2,
  Ocirc: n2,
  ocirc: r2,
  Ograve: o2,
  ograve: i2,
  ordf: c2,
  ordm: a2,
  Oslash: l2,
  oslash: u2,
  Otilde: f2,
  otilde: h2,
  Ouml: p2,
  ouml: d2,
  para: g2,
  plusmn: m2,
  pound: b2,
  quot: y2,
  QUOT: v2,
  raquo: w2,
  reg: x2,
  REG: S2,
  sect: _2,
  shy: T2,
  sup1: E2,
  sup2: C2,
  sup3: A2,
  szlig: q2,
  THORN: O2,
  thorn: D2,
  times: L2,
  Uacute: N2,
  uacute: P2,
  Ucirc: k2,
  ucirc: R2,
  Ugrave: $2,
  ugrave: M2,
  uml: I2,
  Uuml: j2,
  uuml: B2,
  Yacute: U2,
  yacute: H2,
  yen: V2,
  yuml: F2
}, z2 = "&", G2 = "'", W2 = ">", Y2 = "<", J2 = '"', es = {
  amp: z2,
  apos: G2,
  gt: W2,
  lt: Y2,
  quot: J2
};
var ge = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(pe, "__esModule", { value: !0 });
var X2 = ge(de), Z2 = ge(ts), Oe = ge(cn), Q2 = ge(es);
function W(s) {
  return s === " " || s === `
` || s === "	" || s === "\f" || s === "\r";
}
function _s(s) {
  return s >= "a" && s <= "z" || s >= "A" && s <= "Z";
}
function k(s, t, e) {
  var n = s.toLowerCase();
  return s === n ? function(r, o) {
    o === n ? r._state = t : (r._state = e, r._index--);
  } : function(r, o) {
    o === n || o === s ? r._state = t : (r._state = e, r._index--);
  };
}
function tt(s, t) {
  var e = s.toLowerCase();
  return function(n, r) {
    r === e || r === s ? n._state = t : (n._state = 3, n._index--);
  };
}
var K2 = k("C", 24, 16), tV = k("D", 25, 16), eV = k("A", 26, 16), sV = k("T", 27, 16), nV = k("A", 28, 16), rV = tt("R", 35), oV = tt("I", 36), iV = tt("P", 37), cV = tt("T", 38), aV = k("R", 40, 1), lV = k("I", 41, 1), uV = k("P", 42, 1), fV = k("T", 43, 1), hV = tt("Y", 45), pV = tt("L", 46), dV = tt("E", 47), gV = k("Y", 49, 1), mV = k("L", 50, 1), bV = k("E", 51, 1), yV = tt("I", 54), vV = tt("T", 55), wV = tt("L", 56), xV = tt("E", 57), SV = k("I", 58, 1), _V = k("T", 59, 1), TV = k("L", 60, 1), EV = k("E", 61, 1), CV = k("#", 63, 64), AV = k("X", 66, 65), qV = function() {
  function s(t, e) {
    var n;
    this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.special = 1, this.running = !0, this.ended = !1, this.cbs = e, this.xmlMode = !!t?.xmlMode, this.decodeEntities = (n = t?.decodeEntities) !== null && n !== void 0 ? n : !0;
  }
  return s.prototype.reset = function() {
    this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.special = 1, this.running = !0, this.ended = !1;
  }, s.prototype.write = function(t) {
    this.ended && this.cbs.onerror(Error(".write() after done!")), this.buffer += t, this.parse();
  }, s.prototype.end = function(t) {
    this.ended && this.cbs.onerror(Error(".end() after done!")), t && this.write(t), this.ended = !0, this.running && this.finish();
  }, s.prototype.pause = function() {
    this.running = !1;
  }, s.prototype.resume = function() {
    this.running = !0, this._index < this.buffer.length && this.parse(), this.ended && this.finish();
  }, s.prototype.getAbsoluteIndex = function() {
    return this.bufferOffset + this._index;
  }, s.prototype.stateText = function(t) {
    t === "<" ? (this._index > this.sectionStart && this.cbs.ontext(this.getSection()), this._state = 2, this.sectionStart = this._index) : this.decodeEntities && t === "&" && (this.special === 1 || this.special === 4) && (this._index > this.sectionStart && this.cbs.ontext(this.getSection()), this.baseState = 1, this._state = 62, this.sectionStart = this._index);
  }, s.prototype.isTagStartChar = function(t) {
    return _s(t) || this.xmlMode && !W(t) && t !== "/" && t !== ">";
  }, s.prototype.stateBeforeTagName = function(t) {
    t === "/" ? this._state = 5 : t === "<" ? (this.cbs.ontext(this.getSection()), this.sectionStart = this._index) : t === ">" || this.special !== 1 || W(t) ? this._state = 1 : t === "!" ? (this._state = 15, this.sectionStart = this._index + 1) : t === "?" ? (this._state = 17, this.sectionStart = this._index + 1) : this.isTagStartChar(t) ? (this._state = !this.xmlMode && (t === "s" || t === "S") ? 32 : !this.xmlMode && (t === "t" || t === "T") ? 52 : 3, this.sectionStart = this._index) : this._state = 1;
  }, s.prototype.stateInTagName = function(t) {
    (t === "/" || t === ">" || W(t)) && (this.emitToken("onopentagname"), this._state = 8, this._index--);
  }, s.prototype.stateBeforeClosingTagName = function(t) {
    W(t) || (t === ">" ? this._state = 1 : this.special !== 1 ? this.special !== 4 && (t === "s" || t === "S") ? this._state = 33 : this.special === 4 && (t === "t" || t === "T") ? this._state = 53 : (this._state = 1, this._index--) : this.isTagStartChar(t) ? (this._state = 6, this.sectionStart = this._index) : (this._state = 20, this.sectionStart = this._index));
  }, s.prototype.stateInClosingTagName = function(t) {
    (t === ">" || W(t)) && (this.emitToken("onclosetag"), this._state = 7, this._index--);
  }, s.prototype.stateAfterClosingTagName = function(t) {
    t === ">" && (this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateBeforeAttributeName = function(t) {
    t === ">" ? (this.cbs.onopentagend(), this._state = 1, this.sectionStart = this._index + 1) : t === "/" ? this._state = 4 : W(t) || (this._state = 9, this.sectionStart = this._index);
  }, s.prototype.stateInSelfClosingTag = function(t) {
    t === ">" ? (this.cbs.onselfclosingtag(), this._state = 1, this.sectionStart = this._index + 1, this.special = 1) : W(t) || (this._state = 8, this._index--);
  }, s.prototype.stateInAttributeName = function(t) {
    (t === "=" || t === "/" || t === ">" || W(t)) && (this.cbs.onattribname(this.getSection()), this.sectionStart = -1, this._state = 10, this._index--);
  }, s.prototype.stateAfterAttributeName = function(t) {
    t === "=" ? this._state = 11 : t === "/" || t === ">" ? (this.cbs.onattribend(void 0), this._state = 8, this._index--) : W(t) || (this.cbs.onattribend(void 0), this._state = 9, this.sectionStart = this._index);
  }, s.prototype.stateBeforeAttributeValue = function(t) {
    t === '"' ? (this._state = 12, this.sectionStart = this._index + 1) : t === "'" ? (this._state = 13, this.sectionStart = this._index + 1) : W(t) || (this._state = 14, this.sectionStart = this._index, this._index--);
  }, s.prototype.handleInAttributeValue = function(t, e) {
    t === e ? (this.emitToken("onattribdata"), this.cbs.onattribend(e), this._state = 8) : this.decodeEntities && t === "&" && (this.emitToken("onattribdata"), this.baseState = this._state, this._state = 62, this.sectionStart = this._index);
  }, s.prototype.stateInAttributeValueDoubleQuotes = function(t) {
    this.handleInAttributeValue(t, '"');
  }, s.prototype.stateInAttributeValueSingleQuotes = function(t) {
    this.handleInAttributeValue(t, "'");
  }, s.prototype.stateInAttributeValueNoQuotes = function(t) {
    W(t) || t === ">" ? (this.emitToken("onattribdata"), this.cbs.onattribend(null), this._state = 8, this._index--) : this.decodeEntities && t === "&" && (this.emitToken("onattribdata"), this.baseState = this._state, this._state = 62, this.sectionStart = this._index);
  }, s.prototype.stateBeforeDeclaration = function(t) {
    this._state = t === "[" ? 23 : t === "-" ? 18 : 16;
  }, s.prototype.stateInDeclaration = function(t) {
    t === ">" && (this.cbs.ondeclaration(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateInProcessingInstruction = function(t) {
    t === ">" && (this.cbs.onprocessinginstruction(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateBeforeComment = function(t) {
    t === "-" ? (this._state = 19, this.sectionStart = this._index + 1) : this._state = 16;
  }, s.prototype.stateInComment = function(t) {
    t === "-" && (this._state = 21);
  }, s.prototype.stateInSpecialComment = function(t) {
    t === ">" && (this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index)), this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateAfterComment1 = function(t) {
    t === "-" ? this._state = 22 : this._state = 19;
  }, s.prototype.stateAfterComment2 = function(t) {
    t === ">" ? (this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2)), this._state = 1, this.sectionStart = this._index + 1) : t !== "-" && (this._state = 19);
  }, s.prototype.stateBeforeCdata6 = function(t) {
    t === "[" ? (this._state = 29, this.sectionStart = this._index + 1) : (this._state = 16, this._index--);
  }, s.prototype.stateInCdata = function(t) {
    t === "]" && (this._state = 30);
  }, s.prototype.stateAfterCdata1 = function(t) {
    t === "]" ? this._state = 31 : this._state = 29;
  }, s.prototype.stateAfterCdata2 = function(t) {
    t === ">" ? (this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2)), this._state = 1, this.sectionStart = this._index + 1) : t !== "]" && (this._state = 29);
  }, s.prototype.stateBeforeSpecialS = function(t) {
    t === "c" || t === "C" ? this._state = 34 : t === "t" || t === "T" ? this._state = 44 : (this._state = 3, this._index--);
  }, s.prototype.stateBeforeSpecialSEnd = function(t) {
    this.special === 2 && (t === "c" || t === "C") ? this._state = 39 : this.special === 3 && (t === "t" || t === "T") ? this._state = 48 : this._state = 1;
  }, s.prototype.stateBeforeSpecialLast = function(t, e) {
    (t === "/" || t === ">" || W(t)) && (this.special = e), this._state = 3, this._index--;
  }, s.prototype.stateAfterSpecialLast = function(t, e) {
    t === ">" || W(t) ? (this.special = 1, this._state = 6, this.sectionStart = this._index - e, this._index--) : this._state = 1;
  }, s.prototype.parseFixedEntity = function(t) {
    if (t === void 0 && (t = this.xmlMode ? Q2.default : Z2.default), this.sectionStart + 1 < this._index) {
      var e = this.buffer.substring(this.sectionStart + 1, this._index);
      Object.prototype.hasOwnProperty.call(t, e) && (this.emitPartial(t[e]), this.sectionStart = this._index + 1);
    }
  }, s.prototype.parseLegacyEntity = function() {
    for (var t = this.sectionStart + 1, e = Math.min(this._index - t, 6); e >= 2; ) {
      var n = this.buffer.substr(t, e);
      if (Object.prototype.hasOwnProperty.call(Oe.default, n)) {
        this.emitPartial(Oe.default[n]), this.sectionStart += e + 1;
        return;
      }
      e--;
    }
  }, s.prototype.stateInNamedEntity = function(t) {
    t === ";" ? (this.parseFixedEntity(), this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode && this.parseLegacyEntity(), this._state = this.baseState) : (t < "0" || t > "9") && !_s(t) && (this.xmlMode || this.sectionStart + 1 === this._index || (this.baseState !== 1 ? t !== "=" && this.parseFixedEntity(Oe.default) : this.parseLegacyEntity()), this._state = this.baseState, this._index--);
  }, s.prototype.decodeNumericEntity = function(t, e, n) {
    var r = this.sectionStart + t;
    if (r !== this._index) {
      var o = this.buffer.substring(r, this._index), i = parseInt(o, e);
      this.emitPartial(X2.default(i)), this.sectionStart = n ? this._index + 1 : this._index;
    }
    this._state = this.baseState;
  }, s.prototype.stateInNumericEntity = function(t) {
    t === ";" ? this.decodeNumericEntity(2, 10, !0) : (t < "0" || t > "9") && (this.xmlMode ? this._state = this.baseState : this.decodeNumericEntity(2, 10, !1), this._index--);
  }, s.prototype.stateInHexEntity = function(t) {
    t === ";" ? this.decodeNumericEntity(3, 16, !0) : (t < "a" || t > "f") && (t < "A" || t > "F") && (t < "0" || t > "9") && (this.xmlMode ? this._state = this.baseState : this.decodeNumericEntity(3, 16, !1), this._index--);
  }, s.prototype.cleanup = function() {
    this.sectionStart < 0 ? (this.buffer = "", this.bufferOffset += this._index, this._index = 0) : this.running && (this._state === 1 ? (this.sectionStart !== this._index && this.cbs.ontext(this.buffer.substr(this.sectionStart)), this.buffer = "", this.bufferOffset += this._index, this._index = 0) : this.sectionStart === this._index ? (this.buffer = "", this.bufferOffset += this._index, this._index = 0) : (this.buffer = this.buffer.substr(this.sectionStart), this._index -= this.sectionStart, this.bufferOffset += this.sectionStart), this.sectionStart = 0);
  }, s.prototype.parse = function() {
    for (; this._index < this.buffer.length && this.running; ) {
      var t = this.buffer.charAt(this._index);
      this._state === 1 ? this.stateText(t) : this._state === 12 ? this.stateInAttributeValueDoubleQuotes(t) : this._state === 9 ? this.stateInAttributeName(t) : this._state === 19 ? this.stateInComment(t) : this._state === 20 ? this.stateInSpecialComment(t) : this._state === 8 ? this.stateBeforeAttributeName(t) : this._state === 3 ? this.stateInTagName(t) : this._state === 6 ? this.stateInClosingTagName(t) : this._state === 2 ? this.stateBeforeTagName(t) : this._state === 10 ? this.stateAfterAttributeName(t) : this._state === 13 ? this.stateInAttributeValueSingleQuotes(t) : this._state === 11 ? this.stateBeforeAttributeValue(t) : this._state === 5 ? this.stateBeforeClosingTagName(t) : this._state === 7 ? this.stateAfterClosingTagName(t) : this._state === 32 ? this.stateBeforeSpecialS(t) : this._state === 21 ? this.stateAfterComment1(t) : this._state === 14 ? this.stateInAttributeValueNoQuotes(t) : this._state === 4 ? this.stateInSelfClosingTag(t) : this._state === 16 ? this.stateInDeclaration(t) : this._state === 15 ? this.stateBeforeDeclaration(t) : this._state === 22 ? this.stateAfterComment2(t) : this._state === 18 ? this.stateBeforeComment(t) : this._state === 33 ? this.stateBeforeSpecialSEnd(t) : this._state === 53 ? SV(this, t) : this._state === 39 ? aV(this, t) : this._state === 40 ? lV(this, t) : this._state === 41 ? uV(this, t) : this._state === 34 ? rV(this, t) : this._state === 35 ? oV(this, t) : this._state === 36 ? iV(this, t) : this._state === 37 ? cV(this, t) : this._state === 38 ? this.stateBeforeSpecialLast(t, 2) : this._state === 42 ? fV(this, t) : this._state === 43 ? this.stateAfterSpecialLast(t, 6) : this._state === 44 ? hV(this, t) : this._state === 29 ? this.stateInCdata(t) : this._state === 45 ? pV(this, t) : this._state === 46 ? dV(this, t) : this._state === 47 ? this.stateBeforeSpecialLast(t, 3) : this._state === 48 ? gV(this, t) : this._state === 49 ? mV(this, t) : this._state === 50 ? bV(this, t) : this._state === 51 ? this.stateAfterSpecialLast(t, 5) : this._state === 52 ? yV(this, t) : this._state === 54 ? vV(this, t) : this._state === 55 ? wV(this, t) : this._state === 56 ? xV(this, t) : this._state === 57 ? this.stateBeforeSpecialLast(t, 4) : this._state === 58 ? _V(this, t) : this._state === 59 ? TV(this, t) : this._state === 60 ? EV(this, t) : this._state === 61 ? this.stateAfterSpecialLast(t, 5) : this._state === 17 ? this.stateInProcessingInstruction(t) : this._state === 64 ? this.stateInNamedEntity(t) : this._state === 23 ? K2(this, t) : this._state === 62 ? CV(this, t) : this._state === 24 ? tV(this, t) : this._state === 25 ? eV(this, t) : this._state === 30 ? this.stateAfterCdata1(t) : this._state === 31 ? this.stateAfterCdata2(t) : this._state === 26 ? sV(this, t) : this._state === 27 ? nV(this, t) : this._state === 28 ? this.stateBeforeCdata6(t) : this._state === 66 ? this.stateInHexEntity(t) : this._state === 65 ? this.stateInNumericEntity(t) : this._state === 63 ? AV(this, t) : this.cbs.onerror(Error("unknown _state"), this._state), this._index++;
    }
    this.cleanup();
  }, s.prototype.finish = function() {
    this.sectionStart < this._index && this.handleTrailingData(), this.cbs.onend();
  }, s.prototype.handleTrailingData = function() {
    var t = this.buffer.substr(this.sectionStart);
    this._state === 29 || this._state === 30 || this._state === 31 ? this.cbs.oncdata(t) : this._state === 19 || this._state === 21 || this._state === 22 ? this.cbs.oncomment(t) : this._state === 64 && !this.xmlMode ? (this.parseLegacyEntity(), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state === 65 && !this.xmlMode ? (this.decodeNumericEntity(2, 10, !1), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state === 66 && !this.xmlMode ? (this.decodeNumericEntity(3, 16, !1), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6 && this.cbs.ontext(t);
  }, s.prototype.getSection = function() {
    return this.buffer.substring(this.sectionStart, this._index);
  }, s.prototype.emitToken = function(t) {
    this.cbs[t](this.getSection()), this.sectionStart = -1;
  }, s.prototype.emitPartial = function(t) {
    this.baseState !== 1 ? this.cbs.onattribdata(t) : this.cbs.ontext(t);
  }, s;
}();
pe.default = qV;
var OV = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.Parser = void 0;
var DV = OV(pe), St = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), C = /* @__PURE__ */ new Set(["p"]), Ts = {
  tr: /* @__PURE__ */ new Set(["tr", "th", "td"]),
  th: /* @__PURE__ */ new Set(["th"]),
  td: /* @__PURE__ */ new Set(["thead", "th", "td"]),
  body: /* @__PURE__ */ new Set(["head", "link", "script"]),
  li: /* @__PURE__ */ new Set(["li"]),
  p: C,
  h1: C,
  h2: C,
  h3: C,
  h4: C,
  h5: C,
  h6: C,
  select: St,
  input: St,
  output: St,
  button: St,
  datalist: St,
  textarea: St,
  option: /* @__PURE__ */ new Set(["option"]),
  optgroup: /* @__PURE__ */ new Set(["optgroup", "option"]),
  dd: /* @__PURE__ */ new Set(["dt", "dd"]),
  dt: /* @__PURE__ */ new Set(["dt", "dd"]),
  address: C,
  article: C,
  aside: C,
  blockquote: C,
  details: C,
  div: C,
  dl: C,
  fieldset: C,
  figcaption: C,
  figure: C,
  footer: C,
  form: C,
  header: C,
  hr: C,
  main: C,
  nav: C,
  ol: C,
  pre: C,
  section: C,
  table: C,
  ul: C,
  rt: /* @__PURE__ */ new Set(["rt", "rp"]),
  rp: /* @__PURE__ */ new Set(["rt", "rp"]),
  tbody: /* @__PURE__ */ new Set(["thead", "tbody"]),
  tfoot: /* @__PURE__ */ new Set(["thead", "tbody"])
}, De = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), Es = /* @__PURE__ */ new Set(["math", "svg"]), Cs = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), LV = /\s|\//, NV = function() {
  function s(t, e) {
    e === void 0 && (e = {});
    var n, r, o, i, c;
    this.startIndex = 0, this.endIndex = null, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.options = e, this.cbs = t ?? {}, this.lowerCaseTagNames = (n = e.lowerCaseTags) !== null && n !== void 0 ? n : !e.xmlMode, this.lowerCaseAttributeNames = (r = e.lowerCaseAttributeNames) !== null && r !== void 0 ? r : !e.xmlMode, this.tokenizer = new ((o = e.Tokenizer) !== null && o !== void 0 ? o : DV.default)(this.options, this), (c = (i = this.cbs).onparserinit) === null || c === void 0 || c.call(i, this);
  }
  return s.prototype.updatePosition = function(t) {
    this.endIndex === null ? this.tokenizer.sectionStart <= t ? this.startIndex = 0 : this.startIndex = this.tokenizer.sectionStart - t : this.startIndex = this.endIndex + 1, this.endIndex = this.tokenizer.getAbsoluteIndex();
  }, s.prototype.ontext = function(t) {
    var e, n;
    this.updatePosition(1), this.endIndex--, (n = (e = this.cbs).ontext) === null || n === void 0 || n.call(e, t);
  }, s.prototype.onopentagname = function(t) {
    var e, n;
    if (this.lowerCaseTagNames && (t = t.toLowerCase()), this.tagname = t, !this.options.xmlMode && Object.prototype.hasOwnProperty.call(Ts, t))
      for (var r = void 0; this.stack.length > 0 && Ts[t].has(r = this.stack[this.stack.length - 1]); )
        this.onclosetag(r);
    (this.options.xmlMode || !De.has(t)) && (this.stack.push(t), Es.has(t) ? this.foreignContext.push(!0) : Cs.has(t) && this.foreignContext.push(!1)), (n = (e = this.cbs).onopentagname) === null || n === void 0 || n.call(e, t), this.cbs.onopentag && (this.attribs = {});
  }, s.prototype.onopentagend = function() {
    var t, e;
    this.updatePosition(1), this.attribs && ((e = (t = this.cbs).onopentag) === null || e === void 0 || e.call(t, this.tagname, this.attribs), this.attribs = null), !this.options.xmlMode && this.cbs.onclosetag && De.has(this.tagname) && this.cbs.onclosetag(this.tagname), this.tagname = "";
  }, s.prototype.onclosetag = function(t) {
    if (this.updatePosition(1), this.lowerCaseTagNames && (t = t.toLowerCase()), (Es.has(t) || Cs.has(t)) && this.foreignContext.pop(), this.stack.length && (this.options.xmlMode || !De.has(t))) {
      var e = this.stack.lastIndexOf(t);
      if (e !== -1)
        if (this.cbs.onclosetag)
          for (e = this.stack.length - e; e--; )
            this.cbs.onclosetag(this.stack.pop());
        else
          this.stack.length = e;
      else
        t === "p" && !this.options.xmlMode && (this.onopentagname(t), this.closeCurrentTag());
    } else
      !this.options.xmlMode && (t === "br" || t === "p") && (this.onopentagname(t), this.closeCurrentTag());
  }, s.prototype.onselfclosingtag = function() {
    this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? this.closeCurrentTag() : this.onopentagend();
  }, s.prototype.closeCurrentTag = function() {
    var t, e, n = this.tagname;
    this.onopentagend(), this.stack[this.stack.length - 1] === n && ((e = (t = this.cbs).onclosetag) === null || e === void 0 || e.call(t, n), this.stack.pop());
  }, s.prototype.onattribname = function(t) {
    this.lowerCaseAttributeNames && (t = t.toLowerCase()), this.attribname = t;
  }, s.prototype.onattribdata = function(t) {
    this.attribvalue += t;
  }, s.prototype.onattribend = function(t) {
    var e, n;
    (n = (e = this.cbs).onattribute) === null || n === void 0 || n.call(e, this.attribname, this.attribvalue, t), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribname = "", this.attribvalue = "";
  }, s.prototype.getInstructionName = function(t) {
    var e = t.search(LV), n = e < 0 ? t : t.substr(0, e);
    return this.lowerCaseTagNames && (n = n.toLowerCase()), n;
  }, s.prototype.ondeclaration = function(t) {
    if (this.cbs.onprocessinginstruction) {
      var e = this.getInstructionName(t);
      this.cbs.onprocessinginstruction("!" + e, "!" + t);
    }
  }, s.prototype.onprocessinginstruction = function(t) {
    if (this.cbs.onprocessinginstruction) {
      var e = this.getInstructionName(t);
      this.cbs.onprocessinginstruction("?" + e, "?" + t);
    }
  }, s.prototype.oncomment = function(t) {
    var e, n, r, o;
    this.updatePosition(4), (n = (e = this.cbs).oncomment) === null || n === void 0 || n.call(e, t), (o = (r = this.cbs).oncommentend) === null || o === void 0 || o.call(r);
  }, s.prototype.oncdata = function(t) {
    var e, n, r, o, i, c;
    this.updatePosition(1), this.options.xmlMode || this.options.recognizeCDATA ? ((n = (e = this.cbs).oncdatastart) === null || n === void 0 || n.call(e), (o = (r = this.cbs).ontext) === null || o === void 0 || o.call(r, t), (c = (i = this.cbs).oncdataend) === null || c === void 0 || c.call(i)) : this.oncomment("[CDATA[" + t + "]]");
  }, s.prototype.onerror = function(t) {
    var e, n;
    (n = (e = this.cbs).onerror) === null || n === void 0 || n.call(e, t);
  }, s.prototype.onend = function() {
    var t, e;
    if (this.cbs.onclosetag)
      for (var n = this.stack.length; n > 0; this.cbs.onclosetag(this.stack[--n]))
        ;
    (e = (t = this.cbs).onend) === null || e === void 0 || e.call(t);
  }, s.prototype.reset = function() {
    var t, e, n, r;
    (e = (t = this.cbs).onreset) === null || e === void 0 || e.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack = [], (r = (n = this.cbs).onparserinit) === null || r === void 0 || r.call(n, this);
  }, s.prototype.parseComplete = function(t) {
    this.reset(), this.end(t);
  }, s.prototype.write = function(t) {
    this.tokenizer.write(t);
  }, s.prototype.end = function(t) {
    this.tokenizer.end(t);
  }, s.prototype.pause = function() {
    this.tokenizer.pause();
  }, s.prototype.resume = function() {
    this.tokenizer.resume();
  }, s.prototype.parseChunk = function(t) {
    this.write(t);
  }, s.prototype.done = function(t) {
    this.end(t);
  }, s;
}();
Ut.Parser = NV;
var lt = {}, At = {};
(function(s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.Doctype = s.CDATA = s.Tag = s.Style = s.Script = s.Comment = s.Directive = s.Text = s.Root = s.isTag = s.ElementType = void 0;
  var t;
  (function(n) {
    n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
  })(t = s.ElementType || (s.ElementType = {}));
  function e(n) {
    return n.type === t.Tag || n.type === t.Script || n.type === t.Style;
  }
  s.isTag = e, s.Root = t.Root, s.Text = t.Text, s.Directive = t.Directive, s.Comment = t.Comment, s.Script = t.Script, s.Style = t.Style, s.Tag = t.Tag, s.CDATA = t.CDATA, s.Doctype = t.Doctype;
})(At);
var S = {}, vt = v && v.__extends || function() {
  var s = function(t, e) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
      n.__proto__ = r;
    } || function(n, r) {
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
    }, s(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    s(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), Lt = v && v.__assign || function() {
  return Lt = Object.assign || function(s) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r]);
    }
    return s;
  }, Lt.apply(this, arguments);
};
Object.defineProperty(S, "__esModule", { value: !0 });
S.cloneNode = S.hasChildren = S.isDocument = S.isDirective = S.isComment = S.isText = S.isCDATA = S.isTag = S.Element = S.Document = S.NodeWithChildren = S.ProcessingInstruction = S.Comment = S.Text = S.DataNode = S.Node = void 0;
var L = At, PV = /* @__PURE__ */ new Map([
  [L.ElementType.Tag, 1],
  [L.ElementType.Script, 1],
  [L.ElementType.Style, 1],
  [L.ElementType.Directive, 1],
  [L.ElementType.Text, 3],
  [L.ElementType.CDATA, 4],
  [L.ElementType.Comment, 8],
  [L.ElementType.Root, 9]
]), ss = function() {
  function s(t) {
    this.type = t, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  return Object.defineProperty(s.prototype, "nodeType", {
    get: function() {
      var t;
      return (t = PV.get(this.type)) !== null && t !== void 0 ? t : 1;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "parentNode", {
    get: function() {
      return this.parent;
    },
    set: function(t) {
      this.parent = t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "previousSibling", {
    get: function() {
      return this.prev;
    },
    set: function(t) {
      this.prev = t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "nextSibling", {
    get: function() {
      return this.next;
    },
    set: function(t) {
      this.next = t;
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype.cloneNode = function(t) {
    return t === void 0 && (t = !1), ns(this, t);
  }, s;
}();
S.Node = ss;
var me = function(s) {
  vt(t, s);
  function t(e, n) {
    var r = s.call(this, e) || this;
    return r.data = n, r;
  }
  return Object.defineProperty(t.prototype, "nodeValue", {
    get: function() {
      return this.data;
    },
    set: function(e) {
      this.data = e;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(ss);
S.DataNode = me;
var an = function(s) {
  vt(t, s);
  function t(e) {
    return s.call(this, L.ElementType.Text, e) || this;
  }
  return t;
}(me);
S.Text = an;
var ln = function(s) {
  vt(t, s);
  function t(e) {
    return s.call(this, L.ElementType.Comment, e) || this;
  }
  return t;
}(me);
S.Comment = ln;
var un = function(s) {
  vt(t, s);
  function t(e, n) {
    var r = s.call(this, L.ElementType.Directive, n) || this;
    return r.name = e, r;
  }
  return t;
}(me);
S.ProcessingInstruction = un;
var be = function(s) {
  vt(t, s);
  function t(e, n) {
    var r = s.call(this, e) || this;
    return r.children = n, r;
  }
  return Object.defineProperty(t.prototype, "firstChild", {
    get: function() {
      var e;
      return (e = this.children[0]) !== null && e !== void 0 ? e : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "lastChild", {
    get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "childNodes", {
    get: function() {
      return this.children;
    },
    set: function(e) {
      this.children = e;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(ss);
S.NodeWithChildren = be;
var fn = function(s) {
  vt(t, s);
  function t(e) {
    return s.call(this, L.ElementType.Root, e) || this;
  }
  return t;
}(be);
S.Document = fn;
var hn = function(s) {
  vt(t, s);
  function t(e, n, r, o) {
    r === void 0 && (r = []), o === void 0 && (o = e === "script" ? L.ElementType.Script : e === "style" ? L.ElementType.Style : L.ElementType.Tag);
    var i = s.call(this, o, r) || this;
    return i.name = e, i.attribs = n, i;
  }
  return Object.defineProperty(t.prototype, "tagName", {
    get: function() {
      return this.name;
    },
    set: function(e) {
      this.name = e;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "attributes", {
    get: function() {
      var e = this;
      return Object.keys(this.attribs).map(function(n) {
        var r, o;
        return {
          name: n,
          value: e.attribs[n],
          namespace: (r = e["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[n],
          prefix: (o = e["x-attribsPrefix"]) === null || o === void 0 ? void 0 : o[n]
        };
      });
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(be);
S.Element = hn;
function pn(s) {
  return (0, L.isTag)(s);
}
S.isTag = pn;
function dn(s) {
  return s.type === L.ElementType.CDATA;
}
S.isCDATA = dn;
function gn(s) {
  return s.type === L.ElementType.Text;
}
S.isText = gn;
function mn(s) {
  return s.type === L.ElementType.Comment;
}
S.isComment = mn;
function bn(s) {
  return s.type === L.ElementType.Directive;
}
S.isDirective = bn;
function yn(s) {
  return s.type === L.ElementType.Root;
}
S.isDocument = yn;
function kV(s) {
  return Object.prototype.hasOwnProperty.call(s, "children");
}
S.hasChildren = kV;
function ns(s, t) {
  t === void 0 && (t = !1);
  var e;
  if (gn(s))
    e = new an(s.data);
  else if (mn(s))
    e = new ln(s.data);
  else if (pn(s)) {
    var n = t ? Le(s.children) : [], r = new hn(s.name, Lt({}, s.attribs), n);
    n.forEach(function(a) {
      return a.parent = r;
    }), s.namespace != null && (r.namespace = s.namespace), s["x-attribsNamespace"] && (r["x-attribsNamespace"] = Lt({}, s["x-attribsNamespace"])), s["x-attribsPrefix"] && (r["x-attribsPrefix"] = Lt({}, s["x-attribsPrefix"])), e = r;
  } else if (dn(s)) {
    var n = t ? Le(s.children) : [], o = new be(L.ElementType.CDATA, n);
    n.forEach(function(l) {
      return l.parent = o;
    }), e = o;
  } else if (yn(s)) {
    var n = t ? Le(s.children) : [], i = new fn(n);
    n.forEach(function(l) {
      return l.parent = i;
    }), s["x-mode"] && (i["x-mode"] = s["x-mode"]), e = i;
  } else if (bn(s)) {
    var c = new un(s.name, s.data);
    s["x-name"] != null && (c["x-name"] = s["x-name"], c["x-publicId"] = s["x-publicId"], c["x-systemId"] = s["x-systemId"]), e = c;
  } else
    throw new Error("Not implemented yet: ".concat(s.type));
  return e.startIndex = s.startIndex, e.endIndex = s.endIndex, s.sourceCodeLocation != null && (e.sourceCodeLocation = s.sourceCodeLocation), e;
}
S.cloneNode = ns;
function Le(s) {
  for (var t = s.map(function(n) {
    return ns(n, !0);
  }), e = 1; e < t.length; e++)
    t[e].prev = t[e - 1], t[e - 1].next = t[e];
  return t;
}
(function(s) {
  var t = v && v.__createBinding || (Object.create ? function(a, l, f, h) {
    h === void 0 && (h = f), Object.defineProperty(a, h, { enumerable: !0, get: function() {
      return l[f];
    } });
  } : function(a, l, f, h) {
    h === void 0 && (h = f), a[h] = l[f];
  }), e = v && v.__exportStar || function(a, l) {
    for (var f in a)
      f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && t(l, a, f);
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.DomHandler = void 0;
  var n = At, r = S;
  e(S, s);
  var o = /\s+/g, i = {
    normalizeWhitespace: !1,
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, c = function() {
    function a(l, f, h) {
      this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof f == "function" && (h = f, f = i), typeof l == "object" && (f = l, l = void 0), this.callback = l ?? null, this.options = f ?? i, this.elementCB = h ?? null;
    }
    return a.prototype.onparserinit = function(l) {
      this.parser = l;
    }, a.prototype.onreset = function() {
      this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
    }, a.prototype.onend = function() {
      this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
    }, a.prototype.onerror = function(l) {
      this.handleCallback(l);
    }, a.prototype.onclosetag = function() {
      this.lastNode = null;
      var l = this.tagStack.pop();
      this.options.withEndIndices && (l.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(l);
    }, a.prototype.onopentag = function(l, f) {
      var h = this.options.xmlMode ? n.ElementType.Tag : void 0, b = new r.Element(l, f, void 0, h);
      this.addNode(b), this.tagStack.push(b);
    }, a.prototype.ontext = function(l) {
      var f = this.options.normalizeWhitespace, h = this.lastNode;
      if (h && h.type === n.ElementType.Text)
        f ? h.data = (h.data + l).replace(o, " ") : h.data += l, this.options.withEndIndices && (h.endIndex = this.parser.endIndex);
      else {
        f && (l = l.replace(o, " "));
        var b = new r.Text(l);
        this.addNode(b), this.lastNode = b;
      }
    }, a.prototype.oncomment = function(l) {
      if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
        this.lastNode.data += l;
        return;
      }
      var f = new r.Comment(l);
      this.addNode(f), this.lastNode = f;
    }, a.prototype.oncommentend = function() {
      this.lastNode = null;
    }, a.prototype.oncdatastart = function() {
      var l = new r.Text(""), f = new r.NodeWithChildren(n.ElementType.CDATA, [l]);
      this.addNode(f), l.parent = f, this.lastNode = l;
    }, a.prototype.oncdataend = function() {
      this.lastNode = null;
    }, a.prototype.onprocessinginstruction = function(l, f) {
      var h = new r.ProcessingInstruction(l, f);
      this.addNode(h);
    }, a.prototype.handleCallback = function(l) {
      if (typeof this.callback == "function")
        this.callback(l, this.dom);
      else if (l)
        throw l;
    }, a.prototype.addNode = function(l) {
      var f = this.tagStack[this.tagStack.length - 1], h = f.children[f.children.length - 1];
      this.options.withStartIndices && (l.startIndex = this.parser.startIndex), this.options.withEndIndices && (l.endIndex = this.parser.endIndex), f.children.push(l), h && (l.prev = h, h.next = l), l.parent = f, this.lastNode = null;
    }, a;
  }();
  s.DomHandler = c, s.default = c;
})(lt);
var yt = {}, rs = {}, Y = {}, os = {}, vn = {}, at = {}, ye = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(at, "__esModule", { value: !0 });
at.decodeHTML = at.decodeHTMLStrict = at.decodeXML = void 0;
var $e = ye(ts), RV = ye(cn), $V = ye(es), As = ye(de), MV = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
at.decodeXML = wn($V.default);
at.decodeHTMLStrict = wn($e.default);
function wn(s) {
  var t = xn(s);
  return function(e) {
    return String(e).replace(MV, t);
  };
}
var qs = function(s, t) {
  return s < t ? 1 : -1;
};
at.decodeHTML = function() {
  for (var s = Object.keys(RV.default).sort(qs), t = Object.keys($e.default).sort(qs), e = 0, n = 0; e < t.length; e++)
    s[n] === t[e] ? (t[e] += ";?", n++) : t[e] += ";";
  var r = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), o = xn($e.default);
  function i(c) {
    return c.substr(-1) !== ";" && (c += ";"), o(c);
  }
  return function(c) {
    return String(c).replace(r, i);
  };
}();
function xn(s) {
  return function(e) {
    if (e.charAt(1) === "#") {
      var n = e.charAt(2);
      return n === "X" || n === "x" ? As.default(parseInt(e.substr(3), 16)) : As.default(parseInt(e.substr(2), 10));
    }
    return s[e.slice(1, -1)] || e;
  };
}
var J = {}, Sn = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(J, "__esModule", { value: !0 });
J.escapeUTF8 = J.escape = J.encodeNonAsciiHTML = J.encodeHTML = J.encodeXML = void 0;
var IV = Sn(es), _n = En(IV.default), Tn = Cn(_n);
J.encodeXML = On(_n);
var jV = Sn(ts), is = En(jV.default), BV = Cn(is);
J.encodeHTML = HV(is, BV);
J.encodeNonAsciiHTML = On(is);
function En(s) {
  return Object.keys(s).sort().reduce(function(t, e) {
    return t[s[e]] = "&" + e + ";", t;
  }, {});
}
function Cn(s) {
  for (var t = [], e = [], n = 0, r = Object.keys(s); n < r.length; n++) {
    var o = r[n];
    o.length === 1 ? t.push("\\" + o) : e.push(o);
  }
  t.sort();
  for (var i = 0; i < t.length - 1; i++) {
    for (var c = i; c < t.length - 1 && t[c].charCodeAt(1) + 1 === t[c + 1].charCodeAt(1); )
      c += 1;
    var a = 1 + c - i;
    a < 3 || t.splice(i, a, t[i] + "-" + t[c]);
  }
  return e.unshift("[" + t.join("") + "]"), new RegExp(e.join("|"), "g");
}
var An = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, UV = String.prototype.codePointAt != null ? function(s) {
  return s.codePointAt(0);
} : function(s) {
  return (s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536;
};
function ve(s) {
  return "&#x" + (s.length > 1 ? UV(s) : s.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function HV(s, t) {
  return function(e) {
    return e.replace(t, function(n) {
      return s[n];
    }).replace(An, ve);
  };
}
var qn = new RegExp(Tn.source + "|" + An.source, "g");
function VV(s) {
  return s.replace(qn, ve);
}
J.escape = VV;
function FV(s) {
  return s.replace(Tn, ve);
}
J.escapeUTF8 = FV;
function On(s) {
  return function(t) {
    return t.replace(qn, function(e) {
      return s[e] || ve(e);
    });
  };
}
(function(s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.decodeXMLStrict = s.decodeHTML5Strict = s.decodeHTML4Strict = s.decodeHTML5 = s.decodeHTML4 = s.decodeHTMLStrict = s.decodeHTML = s.decodeXML = s.encodeHTML5 = s.encodeHTML4 = s.escapeUTF8 = s.escape = s.encodeNonAsciiHTML = s.encodeHTML = s.encodeXML = s.encode = s.decodeStrict = s.decode = void 0;
  var t = at, e = J;
  function n(a, l) {
    return (!l || l <= 0 ? t.decodeXML : t.decodeHTML)(a);
  }
  s.decode = n;
  function r(a, l) {
    return (!l || l <= 0 ? t.decodeXML : t.decodeHTMLStrict)(a);
  }
  s.decodeStrict = r;
  function o(a, l) {
    return (!l || l <= 0 ? e.encodeXML : e.encodeHTML)(a);
  }
  s.encode = o;
  var i = J;
  Object.defineProperty(s, "encodeXML", { enumerable: !0, get: function() {
    return i.encodeXML;
  } }), Object.defineProperty(s, "encodeHTML", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } }), Object.defineProperty(s, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return i.encodeNonAsciiHTML;
  } }), Object.defineProperty(s, "escape", { enumerable: !0, get: function() {
    return i.escape;
  } }), Object.defineProperty(s, "escapeUTF8", { enumerable: !0, get: function() {
    return i.escapeUTF8;
  } }), Object.defineProperty(s, "encodeHTML4", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } }), Object.defineProperty(s, "encodeHTML5", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } });
  var c = at;
  Object.defineProperty(s, "decodeXML", { enumerable: !0, get: function() {
    return c.decodeXML;
  } }), Object.defineProperty(s, "decodeHTML", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(s, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(s, "decodeHTML4", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(s, "decodeHTML5", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(s, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(s, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(s, "decodeXMLStrict", { enumerable: !0, get: function() {
    return c.decodeXML;
  } });
})(vn);
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.attributeNames = Tt.elementNames = void 0;
Tt.elementNames = /* @__PURE__ */ new Map([
  ["altglyph", "altGlyph"],
  ["altglyphdef", "altGlyphDef"],
  ["altglyphitem", "altGlyphItem"],
  ["animatecolor", "animateColor"],
  ["animatemotion", "animateMotion"],
  ["animatetransform", "animateTransform"],
  ["clippath", "clipPath"],
  ["feblend", "feBlend"],
  ["fecolormatrix", "feColorMatrix"],
  ["fecomponenttransfer", "feComponentTransfer"],
  ["fecomposite", "feComposite"],
  ["feconvolvematrix", "feConvolveMatrix"],
  ["fediffuselighting", "feDiffuseLighting"],
  ["fedisplacementmap", "feDisplacementMap"],
  ["fedistantlight", "feDistantLight"],
  ["fedropshadow", "feDropShadow"],
  ["feflood", "feFlood"],
  ["fefunca", "feFuncA"],
  ["fefuncb", "feFuncB"],
  ["fefuncg", "feFuncG"],
  ["fefuncr", "feFuncR"],
  ["fegaussianblur", "feGaussianBlur"],
  ["feimage", "feImage"],
  ["femerge", "feMerge"],
  ["femergenode", "feMergeNode"],
  ["femorphology", "feMorphology"],
  ["feoffset", "feOffset"],
  ["fepointlight", "fePointLight"],
  ["fespecularlighting", "feSpecularLighting"],
  ["fespotlight", "feSpotLight"],
  ["fetile", "feTile"],
  ["feturbulence", "feTurbulence"],
  ["foreignobject", "foreignObject"],
  ["glyphref", "glyphRef"],
  ["lineargradient", "linearGradient"],
  ["radialgradient", "radialGradient"],
  ["textpath", "textPath"]
]);
Tt.attributeNames = /* @__PURE__ */ new Map([
  ["definitionurl", "definitionURL"],
  ["attributename", "attributeName"],
  ["attributetype", "attributeType"],
  ["basefrequency", "baseFrequency"],
  ["baseprofile", "baseProfile"],
  ["calcmode", "calcMode"],
  ["clippathunits", "clipPathUnits"],
  ["diffuseconstant", "diffuseConstant"],
  ["edgemode", "edgeMode"],
  ["filterunits", "filterUnits"],
  ["glyphref", "glyphRef"],
  ["gradienttransform", "gradientTransform"],
  ["gradientunits", "gradientUnits"],
  ["kernelmatrix", "kernelMatrix"],
  ["kernelunitlength", "kernelUnitLength"],
  ["keypoints", "keyPoints"],
  ["keysplines", "keySplines"],
  ["keytimes", "keyTimes"],
  ["lengthadjust", "lengthAdjust"],
  ["limitingconeangle", "limitingConeAngle"],
  ["markerheight", "markerHeight"],
  ["markerunits", "markerUnits"],
  ["markerwidth", "markerWidth"],
  ["maskcontentunits", "maskContentUnits"],
  ["maskunits", "maskUnits"],
  ["numoctaves", "numOctaves"],
  ["pathlength", "pathLength"],
  ["patterncontentunits", "patternContentUnits"],
  ["patterntransform", "patternTransform"],
  ["patternunits", "patternUnits"],
  ["pointsatx", "pointsAtX"],
  ["pointsaty", "pointsAtY"],
  ["pointsatz", "pointsAtZ"],
  ["preservealpha", "preserveAlpha"],
  ["preserveaspectratio", "preserveAspectRatio"],
  ["primitiveunits", "primitiveUnits"],
  ["refx", "refX"],
  ["refy", "refY"],
  ["repeatcount", "repeatCount"],
  ["repeatdur", "repeatDur"],
  ["requiredextensions", "requiredExtensions"],
  ["requiredfeatures", "requiredFeatures"],
  ["specularconstant", "specularConstant"],
  ["specularexponent", "specularExponent"],
  ["spreadmethod", "spreadMethod"],
  ["startoffset", "startOffset"],
  ["stddeviation", "stdDeviation"],
  ["stitchtiles", "stitchTiles"],
  ["surfacescale", "surfaceScale"],
  ["systemlanguage", "systemLanguage"],
  ["tablevalues", "tableValues"],
  ["targetx", "targetX"],
  ["targety", "targetY"],
  ["textlength", "textLength"],
  ["viewbox", "viewBox"],
  ["viewtarget", "viewTarget"],
  ["xchannelselector", "xChannelSelector"],
  ["ychannelselector", "yChannelSelector"],
  ["zoomandpan", "zoomAndPan"]
]);
var _t = v && v.__assign || function() {
  return _t = Object.assign || function(s) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r]);
    }
    return s;
  }, _t.apply(this, arguments);
}, zV = v && v.__createBinding || (Object.create ? function(s, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(s, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(s, t, e, n) {
  n === void 0 && (n = e), s[n] = t[e];
}), GV = v && v.__setModuleDefault || (Object.create ? function(s, t) {
  Object.defineProperty(s, "default", { enumerable: !0, value: t });
} : function(s, t) {
  s.default = t;
}), WV = v && v.__importStar || function(s) {
  if (s && s.__esModule)
    return s;
  var t = {};
  if (s != null)
    for (var e in s)
      e !== "default" && Object.prototype.hasOwnProperty.call(s, e) && zV(t, s, e);
  return GV(t, s), t;
};
Object.defineProperty(os, "__esModule", { value: !0 });
var it = WV(At), Dn = vn, Ln = Tt, YV = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function JV(s, t) {
  if (!!s)
    return Object.keys(s).map(function(e) {
      var n, r, o = (n = s[e]) !== null && n !== void 0 ? n : "";
      return t.xmlMode === "foreign" && (e = (r = Ln.attributeNames.get(e)) !== null && r !== void 0 ? r : e), !t.emptyAttrs && !t.xmlMode && o === "" ? e : e + '="' + (t.decodeEntities !== !1 ? Dn.encodeXML(o) : o.replace(/"/g, "&quot;")) + '"';
    }).join(" ");
}
var Os = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function cs(s, t) {
  t === void 0 && (t = {});
  for (var e = ("length" in s) ? s : [s], n = "", r = 0; r < e.length; r++)
    n += XV(e[r], t);
  return n;
}
os.default = cs;
function XV(s, t) {
  switch (s.type) {
    case it.Root:
      return cs(s.children, t);
    case it.Directive:
    case it.Doctype:
      return tF(s);
    case it.Comment:
      return nF(s);
    case it.CDATA:
      return sF(s);
    case it.Script:
    case it.Style:
    case it.Tag:
      return KV(s, t);
    case it.Text:
      return eF(s, t);
  }
}
var ZV = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), QV = /* @__PURE__ */ new Set(["svg", "math"]);
function KV(s, t) {
  var e;
  t.xmlMode === "foreign" && (s.name = (e = Ln.elementNames.get(s.name)) !== null && e !== void 0 ? e : s.name, s.parent && ZV.has(s.parent.name) && (t = _t(_t({}, t), { xmlMode: !1 }))), !t.xmlMode && QV.has(s.name) && (t = _t(_t({}, t), { xmlMode: "foreign" }));
  var n = "<" + s.name, r = JV(s.attribs, t);
  return r && (n += " " + r), s.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Os.has(s.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", s.children.length > 0 && (n += cs(s.children, t)), (t.xmlMode || !Os.has(s.name)) && (n += "</" + s.name + ">")), n;
}
function tF(s) {
  return "<" + s.data + ">";
}
function eF(s, t) {
  var e = s.data || "";
  return t.decodeEntities !== !1 && !(!t.xmlMode && s.parent && YV.has(s.parent.name)) && (e = Dn.encodeXML(e)), e;
}
function sF(s) {
  return "<![CDATA[" + s.children[0].data + "]]>";
}
function nF(s) {
  return "<!--" + s.data + "-->";
}
var rF = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.innerText = Y.textContent = Y.getText = Y.getInnerHTML = Y.getOuterHTML = void 0;
var nt = lt, oF = rF(os), iF = At;
function Nn(s, t) {
  return (0, oF.default)(s, t);
}
Y.getOuterHTML = Nn;
function cF(s, t) {
  return (0, nt.hasChildren)(s) ? s.children.map(function(e) {
    return Nn(e, t);
  }).join("") : "";
}
Y.getInnerHTML = cF;
function ne(s) {
  return Array.isArray(s) ? s.map(ne).join("") : (0, nt.isTag)(s) ? s.name === "br" ? `
` : ne(s.children) : (0, nt.isCDATA)(s) ? ne(s.children) : (0, nt.isText)(s) ? s.data : "";
}
Y.getText = ne;
function Me(s) {
  return Array.isArray(s) ? s.map(Me).join("") : (0, nt.hasChildren)(s) && !(0, nt.isComment)(s) ? Me(s.children) : (0, nt.isText)(s) ? s.data : "";
}
Y.textContent = Me;
function Ie(s) {
  return Array.isArray(s) ? s.map(Ie).join("") : (0, nt.hasChildren)(s) && (s.type === iF.ElementType.Tag || (0, nt.isCDATA)(s)) ? Ie(s.children) : (0, nt.isText)(s) ? s.data : "";
}
Y.innerText = Ie;
var P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.prevElementSibling = P.nextElementSibling = P.getName = P.hasAttrib = P.getAttributeValue = P.getSiblings = P.getParent = P.getChildren = void 0;
var Pn = lt, aF = [];
function kn(s) {
  var t;
  return (t = s.children) !== null && t !== void 0 ? t : aF;
}
P.getChildren = kn;
function Rn(s) {
  return s.parent || null;
}
P.getParent = Rn;
function lF(s) {
  var t, e, n = Rn(s);
  if (n != null)
    return kn(n);
  for (var r = [s], o = s.prev, i = s.next; o != null; )
    r.unshift(o), t = o, o = t.prev;
  for (; i != null; )
    r.push(i), e = i, i = e.next;
  return r;
}
P.getSiblings = lF;
function uF(s, t) {
  var e;
  return (e = s.attribs) === null || e === void 0 ? void 0 : e[t];
}
P.getAttributeValue = uF;
function fF(s, t) {
  return s.attribs != null && Object.prototype.hasOwnProperty.call(s.attribs, t) && s.attribs[t] != null;
}
P.hasAttrib = fF;
function hF(s) {
  return s.name;
}
P.getName = hF;
function pF(s) {
  for (var t, e = s.next; e !== null && !(0, Pn.isTag)(e); )
    t = e, e = t.next;
  return e;
}
P.nextElementSibling = pF;
function dF(s) {
  for (var t, e = s.prev; e !== null && !(0, Pn.isTag)(e); )
    t = e, e = t.prev;
  return e;
}
P.prevElementSibling = dF;
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.prepend = V.prependChild = V.append = V.appendChild = V.replaceElement = V.removeElement = void 0;
function Ht(s) {
  if (s.prev && (s.prev.next = s.next), s.next && (s.next.prev = s.prev), s.parent) {
    var t = s.parent.children;
    t.splice(t.lastIndexOf(s), 1);
  }
}
V.removeElement = Ht;
function gF(s, t) {
  var e = t.prev = s.prev;
  e && (e.next = t);
  var n = t.next = s.next;
  n && (n.prev = t);
  var r = t.parent = s.parent;
  if (r) {
    var o = r.children;
    o[o.lastIndexOf(s)] = t;
  }
}
V.replaceElement = gF;
function mF(s, t) {
  if (Ht(t), t.next = null, t.parent = s, s.children.push(t) > 1) {
    var e = s.children[s.children.length - 2];
    e.next = t, t.prev = e;
  } else
    t.prev = null;
}
V.appendChild = mF;
function bF(s, t) {
  Ht(t);
  var e = s.parent, n = s.next;
  if (t.next = n, t.prev = s, s.next = t, t.parent = e, n) {
    if (n.prev = t, e) {
      var r = e.children;
      r.splice(r.lastIndexOf(n), 0, t);
    }
  } else
    e && e.children.push(t);
}
V.append = bF;
function yF(s, t) {
  if (Ht(t), t.parent = s, t.prev = null, s.children.unshift(t) !== 1) {
    var e = s.children[1];
    e.prev = t, t.next = e;
  } else
    t.next = null;
}
V.prependChild = yF;
function vF(s, t) {
  Ht(t);
  var e = s.parent;
  if (e) {
    var n = e.children;
    n.splice(n.indexOf(s), 0, t);
  }
  s.prev && (s.prev.next = t), t.parent = e, t.prev = s.prev, t.next = s, s.prev = t;
}
V.prepend = vF;
var $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.findAll = $.existsOne = $.findOne = $.findOneChild = $.find = $.filter = void 0;
var Nt = lt;
function wF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), Array.isArray(t) || (t = [t]), as(s, t, e, n);
}
$.filter = wF;
function as(s, t, e, n) {
  for (var r = [], o = 0, i = t; o < i.length; o++) {
    var c = i[o];
    if (s(c) && (r.push(c), --n <= 0))
      break;
    if (e && (0, Nt.hasChildren)(c) && c.children.length > 0) {
      var a = as(s, c.children, e, n);
      if (r.push.apply(r, a), n -= a.length, n <= 0)
        break;
    }
  }
  return r;
}
$.find = as;
function xF(s, t) {
  return t.find(s);
}
$.findOneChild = xF;
function $n(s, t, e) {
  e === void 0 && (e = !0);
  for (var n = null, r = 0; r < t.length && !n; r++) {
    var o = t[r];
    if ((0, Nt.isTag)(o))
      s(o) ? n = o : e && o.children.length > 0 && (n = $n(s, o.children));
    else
      continue;
  }
  return n;
}
$.findOne = $n;
function Mn(s, t) {
  return t.some(function(e) {
    return (0, Nt.isTag)(e) && (s(e) || e.children.length > 0 && Mn(s, e.children));
  });
}
$.existsOne = Mn;
function SF(s, t) {
  for (var e, n = [], r = t.filter(Nt.isTag), o; o = r.shift(); ) {
    var i = (e = o.children) === null || e === void 0 ? void 0 : e.filter(Nt.isTag);
    i && i.length > 0 && r.unshift.apply(r, i), s(o) && n.push(o);
  }
  return n;
}
$.findAll = SF;
var X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.getElementsByTagType = X.getElementsByTagName = X.getElementById = X.getElements = X.testElement = void 0;
var mt = lt, we = $, ie = {
  tag_name: function(s) {
    return typeof s == "function" ? function(t) {
      return (0, mt.isTag)(t) && s(t.name);
    } : s === "*" ? mt.isTag : function(t) {
      return (0, mt.isTag)(t) && t.name === s;
    };
  },
  tag_type: function(s) {
    return typeof s == "function" ? function(t) {
      return s(t.type);
    } : function(t) {
      return t.type === s;
    };
  },
  tag_contains: function(s) {
    return typeof s == "function" ? function(t) {
      return (0, mt.isText)(t) && s(t.data);
    } : function(t) {
      return (0, mt.isText)(t) && t.data === s;
    };
  }
};
function In(s, t) {
  return typeof t == "function" ? function(e) {
    return (0, mt.isTag)(e) && t(e.attribs[s]);
  } : function(e) {
    return (0, mt.isTag)(e) && e.attribs[s] === t;
  };
}
function _F(s, t) {
  return function(e) {
    return s(e) || t(e);
  };
}
function jn(s) {
  var t = Object.keys(s).map(function(e) {
    var n = s[e];
    return Object.prototype.hasOwnProperty.call(ie, e) ? ie[e](n) : In(e, n);
  });
  return t.length === 0 ? null : t.reduce(_F);
}
function TF(s, t) {
  var e = jn(s);
  return e ? e(t) : !0;
}
X.testElement = TF;
function EF(s, t, e, n) {
  n === void 0 && (n = 1 / 0);
  var r = jn(s);
  return r ? (0, we.filter)(r, t, e, n) : [];
}
X.getElements = EF;
function CF(s, t, e) {
  return e === void 0 && (e = !0), Array.isArray(t) || (t = [t]), (0, we.findOne)(In("id", s), t, e);
}
X.getElementById = CF;
function AF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), (0, we.filter)(ie.tag_name(s), t, e, n);
}
X.getElementsByTagName = AF;
function qF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), (0, we.filter)(ie.tag_type(s), t, e, n);
}
X.getElementsByTagType = qF;
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.uniqueSort = ht.compareDocumentPosition = ht.removeSubsets = void 0;
var Ds = lt;
function OF(s) {
  for (var t = s.length; --t >= 0; ) {
    var e = s[t];
    if (t > 0 && s.lastIndexOf(e, t - 1) >= 0) {
      s.splice(t, 1);
      continue;
    }
    for (var n = e.parent; n; n = n.parent)
      if (s.includes(n)) {
        s.splice(t, 1);
        break;
      }
  }
  return s;
}
ht.removeSubsets = OF;
function Bn(s, t) {
  var e = [], n = [];
  if (s === t)
    return 0;
  for (var r = (0, Ds.hasChildren)(s) ? s : s.parent; r; )
    e.unshift(r), r = r.parent;
  for (r = (0, Ds.hasChildren)(t) ? t : t.parent; r; )
    n.unshift(r), r = r.parent;
  for (var o = Math.min(e.length, n.length), i = 0; i < o && e[i] === n[i]; )
    i++;
  if (i === 0)
    return 1;
  var c = e[i - 1], a = c.children, l = e[i], f = n[i];
  return a.indexOf(l) > a.indexOf(f) ? c === t ? 20 : 4 : c === s ? 10 : 2;
}
ht.compareDocumentPosition = Bn;
function DF(s) {
  return s = s.filter(function(t, e, n) {
    return !n.includes(t, e + 1);
  }), s.sort(function(t, e) {
    var n = Bn(t, e);
    return n & 2 ? -1 : n & 4 ? 1 : 0;
  }), s;
}
ht.uniqueSort = DF;
var xe = {};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.getFeed = void 0;
var LF = Y, Vt = X;
function NF(s) {
  var t = ce(MF, s);
  return t ? t.name === "feed" ? PF(t) : kF(t) : null;
}
xe.getFeed = NF;
function PF(s) {
  var t, e = s.children, n = {
    type: "atom",
    items: (0, Vt.getElementsByTagName)("entry", e).map(function(i) {
      var c, a = i.children, l = { media: Un(a) };
      H(l, "id", "id", a), H(l, "title", "title", a);
      var f = (c = ce("link", a)) === null || c === void 0 ? void 0 : c.attribs.href;
      f && (l.link = f);
      var h = bt("summary", a) || bt("content", a);
      h && (l.description = h);
      var b = bt("updated", a);
      return b && (l.pubDate = new Date(b)), l;
    })
  };
  H(n, "id", "id", e), H(n, "title", "title", e);
  var r = (t = ce("link", e)) === null || t === void 0 ? void 0 : t.attribs.href;
  r && (n.link = r), H(n, "description", "subtitle", e);
  var o = bt("updated", e);
  return o && (n.updated = new Date(o)), H(n, "author", "email", e, !0), n;
}
function kF(s) {
  var t, e, n = (e = (t = ce("channel", s.children)) === null || t === void 0 ? void 0 : t.children) !== null && e !== void 0 ? e : [], r = {
    type: s.name.substr(0, 3),
    id: "",
    items: (0, Vt.getElementsByTagName)("item", s.children).map(function(i) {
      var c = i.children, a = { media: Un(c) };
      H(a, "id", "guid", c), H(a, "title", "title", c), H(a, "link", "link", c), H(a, "description", "description", c);
      var l = bt("pubDate", c);
      return l && (a.pubDate = new Date(l)), a;
    })
  };
  H(r, "title", "title", n), H(r, "link", "link", n), H(r, "description", "description", n);
  var o = bt("lastBuildDate", n);
  return o && (r.updated = new Date(o)), H(r, "author", "managingEditor", n, !0), r;
}
var RF = ["url", "type", "lang"], $F = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function Un(s) {
  return (0, Vt.getElementsByTagName)("media:content", s).map(function(t) {
    for (var e = t.attribs, n = {
      medium: e.medium,
      isDefault: !!e.isDefault
    }, r = 0, o = RF; r < o.length; r++) {
      var i = o[r];
      e[i] && (n[i] = e[i]);
    }
    for (var c = 0, a = $F; c < a.length; c++) {
      var i = a[c];
      e[i] && (n[i] = parseInt(e[i], 10));
    }
    return e.expression && (n.expression = e.expression), n;
  });
}
function ce(s, t) {
  return (0, Vt.getElementsByTagName)(s, t, !0, 1)[0];
}
function bt(s, t, e) {
  return e === void 0 && (e = !1), (0, LF.textContent)((0, Vt.getElementsByTagName)(s, t, e, 1)).trim();
}
function H(s, t, e, n, r) {
  r === void 0 && (r = !1);
  var o = bt(e, n, r);
  o && (s[t] = o);
}
function MF(s) {
  return s === "rss" || s === "feed" || s === "rdf:RDF";
}
(function(s) {
  var t = v && v.__createBinding || (Object.create ? function(r, o, i, c) {
    c === void 0 && (c = i), Object.defineProperty(r, c, { enumerable: !0, get: function() {
      return o[i];
    } });
  } : function(r, o, i, c) {
    c === void 0 && (c = i), r[c] = o[i];
  }), e = v && v.__exportStar || function(r, o) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && t(o, r, i);
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.hasChildren = s.isDocument = s.isComment = s.isText = s.isCDATA = s.isTag = void 0, e(Y, s), e(P, s), e(V, s), e($, s), e(X, s), e(ht, s), e(xe, s);
  var n = lt;
  Object.defineProperty(s, "isTag", { enumerable: !0, get: function() {
    return n.isTag;
  } }), Object.defineProperty(s, "isCDATA", { enumerable: !0, get: function() {
    return n.isCDATA;
  } }), Object.defineProperty(s, "isText", { enumerable: !0, get: function() {
    return n.isText;
  } }), Object.defineProperty(s, "isComment", { enumerable: !0, get: function() {
    return n.isComment;
  } }), Object.defineProperty(s, "isDocument", { enumerable: !0, get: function() {
    return n.isDocument;
  } }), Object.defineProperty(s, "hasChildren", { enumerable: !0, get: function() {
    return n.hasChildren;
  } });
})(rs);
var IF = v && v.__extends || function() {
  var s = function(t, e) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
      n.__proto__ = r;
    } || function(n, r) {
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
    }, s(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    s(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), jF = v && v.__createBinding || (Object.create ? function(s, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(s, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(s, t, e, n) {
  n === void 0 && (n = e), s[n] = t[e];
}), BF = v && v.__setModuleDefault || (Object.create ? function(s, t) {
  Object.defineProperty(s, "default", { enumerable: !0, value: t });
} : function(s, t) {
  s.default = t;
}), UF = v && v.__importStar || function(s) {
  if (s && s.__esModule)
    return s;
  var t = {};
  if (s != null)
    for (var e in s)
      e !== "default" && Object.prototype.hasOwnProperty.call(s, e) && jF(t, s, e);
  return BF(t, s), t;
}, HF = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.parseFeed = yt.FeedHandler = void 0;
var VF = HF(lt), ae = UF(rs), FF = Ut, Ls;
(function(s) {
  s[s.image = 0] = "image", s[s.audio = 1] = "audio", s[s.video = 2] = "video", s[s.document = 3] = "document", s[s.executable = 4] = "executable";
})(Ls || (Ls = {}));
var Ns;
(function(s) {
  s[s.sample = 0] = "sample", s[s.full = 1] = "full", s[s.nonstop = 2] = "nonstop";
})(Ns || (Ns = {}));
var Hn = function(s) {
  IF(t, s);
  function t(e, n) {
    var r = this;
    return typeof e == "object" && (e = void 0, n = e), r = s.call(this, e, n) || this, r;
  }
  return t.prototype.onend = function() {
    var e, n, r = Gt(zF, this.dom);
    if (!r) {
      this.handleCallback(new Error("couldn't find root of feed"));
      return;
    }
    var o = {};
    if (r.name === "feed") {
      var i = r.children;
      o.type = "atom", U(o, "id", "id", i), U(o, "title", "title", i);
      var c = ks("href", Gt("link", i));
      c && (o.link = c), U(o, "description", "subtitle", i);
      var a = gt("updated", i);
      a && (o.updated = new Date(a)), U(o, "author", "email", i, !0), o.items = je("entry", i).map(function(l) {
        var f = {}, h = l.children;
        U(f, "id", "id", h), U(f, "title", "title", h);
        var b = ks("href", Gt("link", h));
        b && (f.link = b);
        var w = gt("summary", h) || gt("content", h);
        w && (f.description = w);
        var d = gt("updated", h);
        return d && (f.pubDate = new Date(d)), f.media = Ps(h), f;
      });
    } else {
      var i = (n = (e = Gt("channel", r.children)) === null || e === void 0 ? void 0 : e.children) !== null && n !== void 0 ? n : [];
      o.type = r.name.substr(0, 3), o.id = "", U(o, "title", "title", i), U(o, "link", "link", i), U(o, "description", "description", i);
      var a = gt("lastBuildDate", i);
      a && (o.updated = new Date(a)), U(o, "author", "managingEditor", i, !0), o.items = je("item", r.children).map(function(h) {
        var b = {}, w = h.children;
        U(b, "id", "guid", w), U(b, "title", "title", w), U(b, "link", "link", w), U(b, "description", "description", w);
        var d = gt("pubDate", w);
        return d && (b.pubDate = new Date(d)), b.media = Ps(w), b;
      });
    }
    this.feed = o, this.handleCallback(null);
  }, t;
}(VF.default);
yt.FeedHandler = Hn;
function Ps(s) {
  return je("media:content", s).map(function(t) {
    var e = {
      medium: t.attribs.medium,
      isDefault: !!t.attribs.isDefault
    };
    return t.attribs.url && (e.url = t.attribs.url), t.attribs.fileSize && (e.fileSize = parseInt(t.attribs.fileSize, 10)), t.attribs.type && (e.type = t.attribs.type), t.attribs.expression && (e.expression = t.attribs.expression), t.attribs.bitrate && (e.bitrate = parseInt(t.attribs.bitrate, 10)), t.attribs.framerate && (e.framerate = parseInt(t.attribs.framerate, 10)), t.attribs.samplingrate && (e.samplingrate = parseInt(t.attribs.samplingrate, 10)), t.attribs.channels && (e.channels = parseInt(t.attribs.channels, 10)), t.attribs.duration && (e.duration = parseInt(t.attribs.duration, 10)), t.attribs.height && (e.height = parseInt(t.attribs.height, 10)), t.attribs.width && (e.width = parseInt(t.attribs.width, 10)), t.attribs.lang && (e.lang = t.attribs.lang), e;
  });
}
function je(s, t) {
  return ae.getElementsByTagName(s, t, !0);
}
function Gt(s, t) {
  return ae.getElementsByTagName(s, t, !0, 1)[0];
}
function gt(s, t, e) {
  return e === void 0 && (e = !1), ae.getText(ae.getElementsByTagName(s, t, e, 1)).trim();
}
function ks(s, t) {
  if (!t)
    return null;
  var e = t.attribs;
  return e[s];
}
function U(s, t, e, n, r) {
  r === void 0 && (r = !1);
  var o = gt(e, n, r);
  o && (s[t] = o);
}
function zF(s) {
  return s === "rss" || s === "feed" || s === "rdf:RDF";
}
function GF(s, t) {
  t === void 0 && (t = { xmlMode: !0 });
  var e = new Hn(t);
  return new FF.Parser(e, t).end(s), e.feed;
}
yt.parseFeed = GF;
(function(s) {
  var t = v && v.__createBinding || (Object.create ? function(d, y, p, D) {
    D === void 0 && (D = p), Object.defineProperty(d, D, { enumerable: !0, get: function() {
      return y[p];
    } });
  } : function(d, y, p, D) {
    D === void 0 && (D = p), d[D] = y[p];
  }), e = v && v.__setModuleDefault || (Object.create ? function(d, y) {
    Object.defineProperty(d, "default", { enumerable: !0, value: y });
  } : function(d, y) {
    d.default = y;
  }), n = v && v.__importStar || function(d) {
    if (d && d.__esModule)
      return d;
    var y = {};
    if (d != null)
      for (var p in d)
        p !== "default" && Object.prototype.hasOwnProperty.call(d, p) && t(y, d, p);
    return e(y, d), y;
  }, r = v && v.__exportStar || function(d, y) {
    for (var p in d)
      p !== "default" && !Object.prototype.hasOwnProperty.call(y, p) && t(y, d, p);
  }, o = v && v.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.RssHandler = s.DefaultHandler = s.DomUtils = s.ElementType = s.Tokenizer = s.createDomStream = s.parseDOM = s.parseDocument = s.DomHandler = s.Parser = void 0;
  var i = Ut;
  Object.defineProperty(s, "Parser", { enumerable: !0, get: function() {
    return i.Parser;
  } });
  var c = lt;
  Object.defineProperty(s, "DomHandler", { enumerable: !0, get: function() {
    return c.DomHandler;
  } }), Object.defineProperty(s, "DefaultHandler", { enumerable: !0, get: function() {
    return c.DomHandler;
  } });
  function a(d, y) {
    var p = new c.DomHandler(void 0, y);
    return new i.Parser(p, y).end(d), p.root;
  }
  s.parseDocument = a;
  function l(d, y) {
    return a(d, y).children;
  }
  s.parseDOM = l;
  function f(d, y, p) {
    var D = new c.DomHandler(d, y, p);
    return new i.Parser(D, y);
  }
  s.createDomStream = f;
  var h = pe;
  Object.defineProperty(s, "Tokenizer", { enumerable: !0, get: function() {
    return o(h).default;
  } });
  var b = n(At);
  s.ElementType = b, r(yt, s), s.DomUtils = n(rs);
  var w = yt;
  Object.defineProperty(s, "RssHandler", { enumerable: !0, get: function() {
    return w.FeedHandler;
  } });
})(on);
var WF = (s) => {
  if (typeof s != "string")
    throw new TypeError("Expected a string");
  return s.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}, ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Rs(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function YF(s) {
  var t, e;
  return Rs(s) === !1 ? !1 : (t = s.constructor, t === void 0 ? !0 : (e = t.prototype, !(Rs(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
ls.isPlainObject = YF;
var JF = function(t) {
  return XF(t) && !ZF(t);
};
function XF(s) {
  return !!s && typeof s == "object";
}
function ZF(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || tz(s);
}
var QF = typeof Symbol == "function" && Symbol.for, KF = QF ? Symbol.for("react.element") : 60103;
function tz(s) {
  return s.$$typeof === KF;
}
function ez(s) {
  return Array.isArray(s) ? [] : {};
}
function Pt(s, t) {
  return t.clone !== !1 && t.isMergeableObject(s) ? Et(ez(s), s, t) : s;
}
function sz(s, t, e) {
  return s.concat(t).map(function(n) {
    return Pt(n, e);
  });
}
function nz(s, t) {
  if (!t.customMerge)
    return Et;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : Et;
}
function rz(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return s.propertyIsEnumerable(t);
  }) : [];
}
function $s(s) {
  return Object.keys(s).concat(rz(s));
}
function Vn(s, t) {
  try {
    return t in s;
  } catch {
    return !1;
  }
}
function oz(s, t) {
  return Vn(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function iz(s, t, e) {
  var n = {};
  return e.isMergeableObject(s) && $s(s).forEach(function(r) {
    n[r] = Pt(s[r], e);
  }), $s(t).forEach(function(r) {
    oz(s, r) || (Vn(s, r) && e.isMergeableObject(t[r]) ? n[r] = nz(r, e)(s[r], t[r], e) : n[r] = Pt(t[r], e));
  }), n;
}
function Et(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || sz, e.isMergeableObject = e.isMergeableObject || JF, e.cloneUnlessOtherwiseSpecified = Pt;
  var n = Array.isArray(t), r = Array.isArray(s), o = n === r;
  return o ? n ? e.arrayMerge(s, t, e) : iz(s, t, e) : Pt(t, e);
}
Et.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, r) {
    return Et(n, r, e);
  }, {});
};
var cz = Et, az = cz, Fn = { exports: {} };
(function(s) {
  (function(t, e) {
    s.exports ? s.exports = e() : t.parseSrcset = e();
  })(v, function() {
    return function(t) {
      function e(A) {
        return A === " " || A === "	" || A === `
` || A === "\f" || A === "\r";
      }
      function n(A) {
        var I, j = A.exec(t.substring(p));
        if (j)
          return I = j[0], p += I.length, I;
      }
      for (var r = t.length, o = /^[ \t\n\r\u000c]+/, i = /^[, \t\n\r\u000c]+/, c = /^[^ \t\n\r\u000c]+/, a = /[,]+$/, l = /^\d+$/, f = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, h, b, w, d, y, p = 0, D = []; ; ) {
        if (n(i), p >= r)
          return D;
        h = n(c), b = [], h.slice(-1) === "," ? (h = h.replace(a, ""), F()) : M();
      }
      function M() {
        for (n(o), w = "", d = "in descriptor"; ; ) {
          if (y = t.charAt(p), d === "in descriptor")
            if (e(y))
              w && (b.push(w), w = "", d = "after descriptor");
            else if (y === ",") {
              p += 1, w && b.push(w), F();
              return;
            } else if (y === "(")
              w = w + y, d = "in parens";
            else if (y === "") {
              w && b.push(w), F();
              return;
            } else
              w = w + y;
          else if (d === "in parens")
            if (y === ")")
              w = w + y, d = "in descriptor";
            else if (y === "") {
              b.push(w), F();
              return;
            } else
              w = w + y;
          else if (d === "after descriptor" && !e(y))
            if (y === "") {
              F();
              return;
            } else
              d = "in descriptor", p -= 1;
          p += 1;
        }
      }
      function F() {
        var A = !1, I, j, z, B, Z = {}, Q, xt, ut, ft, u;
        for (B = 0; B < b.length; B++)
          Q = b[B], xt = Q[Q.length - 1], ut = Q.substring(0, Q.length - 1), ft = parseInt(ut, 10), u = parseFloat(ut), l.test(ut) && xt === "w" ? ((I || j) && (A = !0), ft === 0 ? A = !0 : I = ft) : f.test(ut) && xt === "x" ? ((I || j || z) && (A = !0), u < 0 ? A = !0 : j = u) : l.test(ut) && xt === "h" ? ((z || j) && (A = !0), ft === 0 ? A = !0 : z = ft) : A = !0;
        A ? console && console.log && console.log("Invalid srcset descriptor found in '" + t + "' at '" + Q + "'.") : (Z.url = h, I && (Z.w = I), j && (Z.d = j), z && (Z.h = z), D.push(Z));
      }
    };
  });
})(Fn);
var us = { exports: {} }, q = String, zn = function() {
  return { isColorSupported: !1, reset: q, bold: q, dim: q, italic: q, underline: q, inverse: q, hidden: q, strikethrough: q, black: q, red: q, green: q, yellow: q, blue: q, magenta: q, cyan: q, white: q, gray: q, bgBlack: q, bgRed: q, bgGreen: q, bgYellow: q, bgBlue: q, bgMagenta: q, bgCyan: q, bgWhite: q };
};
us.exports = zn();
us.exports.createColors = zn;
const lz = {}, uz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lz
}, Symbol.toStringTag, { value: "Module" })), et = /* @__PURE__ */ rn(uz);
let Ms = us.exports, Is = et;
class kt extends Error {
  constructor(t, e, n, r, o, i) {
    super(t), this.name = "CssSyntaxError", this.reason = t, o && (this.file = o), r && (this.source = r), i && (this.plugin = i), typeof e < "u" && typeof n < "u" && (typeof e == "number" ? (this.line = e, this.column = n) : (this.line = e.line, this.column = e.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, kt);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(t) {
    if (!this.source)
      return "";
    let e = this.source;
    t == null && (t = Ms.isColorSupported), Is && t && (e = Is(e));
    let n = e.split(/\r?\n/), r = Math.max(this.line - 3, 0), o = Math.min(this.line + 2, n.length), i = String(o).length, c, a;
    if (t) {
      let { bold: l, red: f, gray: h } = Ms.createColors(!0);
      c = (b) => l(f(b)), a = (b) => h(b);
    } else
      c = a = (l) => l;
    return n.slice(r, o).map((l, f) => {
      let h = r + 1 + f, b = " " + (" " + h).slice(-i) + " | ";
      if (h === this.line) {
        let w = a(b.replace(/\d/g, " ")) + l.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return c(">") + a(b) + l + `
 ` + w + c("^");
      }
      return " " + a(b) + l;
    }).join(`
`);
  }
  toString() {
    let t = this.showSourceCode();
    return t && (t = `

` + t + `
`), this.name + ": " + this.message + t;
  }
}
var fs = kt;
kt.default = kt;
var Ft = {};
Ft.isClean = Symbol("isClean");
Ft.my = Symbol("my");
const js = {
  colon: ": ",
  indent: "    ",
  beforeDecl: `
`,
  beforeRule: `
`,
  beforeOpen: " ",
  beforeClose: `
`,
  beforeComment: `
`,
  after: `
`,
  emptyBody: "",
  commentLeft: " ",
  commentRight: " ",
  semicolon: !1
};
function fz(s) {
  return s[0].toUpperCase() + s.slice(1);
}
class Be {
  constructor(t) {
    this.builder = t;
  }
  stringify(t, e) {
    if (!this[t.type])
      throw new Error(
        "Unknown AST node type " + t.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[t.type](t, e);
  }
  document(t) {
    this.body(t);
  }
  root(t) {
    this.body(t), t.raws.after && this.builder(t.raws.after);
  }
  comment(t) {
    let e = this.raw(t, "left", "commentLeft"), n = this.raw(t, "right", "commentRight");
    this.builder("/*" + e + t.text + n + "*/", t);
  }
  decl(t, e) {
    let n = this.raw(t, "between", "colon"), r = t.prop + n + this.rawValue(t, "value");
    t.important && (r += t.raws.important || " !important"), e && (r += ";"), this.builder(r, t);
  }
  rule(t) {
    this.block(t, this.rawValue(t, "selector")), t.raws.ownSemicolon && this.builder(t.raws.ownSemicolon, t, "end");
  }
  atrule(t, e) {
    let n = "@" + t.name, r = t.params ? this.rawValue(t, "params") : "";
    if (typeof t.raws.afterName < "u" ? n += t.raws.afterName : r && (n += " "), t.nodes)
      this.block(t, n + r);
    else {
      let o = (t.raws.between || "") + (e ? ";" : "");
      this.builder(n + r + o, t);
    }
  }
  body(t) {
    let e = t.nodes.length - 1;
    for (; e > 0 && t.nodes[e].type === "comment"; )
      e -= 1;
    let n = this.raw(t, "semicolon");
    for (let r = 0; r < t.nodes.length; r++) {
      let o = t.nodes[r], i = this.raw(o, "before");
      i && this.builder(i), this.stringify(o, e !== r || n);
    }
  }
  block(t, e) {
    let n = this.raw(t, "between", "beforeOpen");
    this.builder(e + n + "{", t, "start");
    let r;
    t.nodes && t.nodes.length ? (this.body(t), r = this.raw(t, "after")) : r = this.raw(t, "after", "emptyBody"), r && this.builder(r), this.builder("}", t, "end");
  }
  raw(t, e, n) {
    let r;
    if (n || (n = e), e && (r = t.raws[e], typeof r < "u"))
      return r;
    let o = t.parent;
    if (n === "before" && (!o || o.type === "root" && o.first === t || o && o.type === "document"))
      return "";
    if (!o)
      return js[n];
    let i = t.root();
    if (i.rawCache || (i.rawCache = {}), typeof i.rawCache[n] < "u")
      return i.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(t, n);
    {
      let c = "raw" + fz(n);
      this[c] ? r = this[c](i, t) : i.walk((a) => {
        if (r = a.raws[e], typeof r < "u")
          return !1;
      });
    }
    return typeof r > "u" && (r = js[n]), i.rawCache[n] = r, r;
  }
  rawSemicolon(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && n.nodes.length && n.last.type === "decl" && (e = n.raws.semicolon, typeof e < "u"))
        return !1;
    }), e;
  }
  rawEmptyBody(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && n.nodes.length === 0 && (e = n.raws.after, typeof e < "u"))
        return !1;
    }), e;
  }
  rawIndent(t) {
    if (t.raws.indent)
      return t.raws.indent;
    let e;
    return t.walk((n) => {
      let r = n.parent;
      if (r && r !== t && r.parent && r.parent === t && typeof n.raws.before < "u") {
        let o = n.raws.before.split(`
`);
        return e = o[o.length - 1], e = e.replace(/\S/g, ""), !1;
      }
    }), e;
  }
  rawBeforeComment(t, e) {
    let n;
    return t.walkComments((r) => {
      if (typeof r.raws.before < "u")
        return n = r.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(e, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeDecl(t, e) {
    let n;
    return t.walkDecls((r) => {
      if (typeof r.raws.before < "u")
        return n = r.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(e, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeRule(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && (n.parent !== t || t.first !== n) && typeof n.raws.before < "u")
        return e = n.raws.before, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1;
    }), e && (e = e.replace(/\S/g, "")), e;
  }
  rawBeforeClose(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u")
        return e = n.raws.after, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1;
    }), e && (e = e.replace(/\S/g, "")), e;
  }
  rawBeforeOpen(t) {
    let e;
    return t.walk((n) => {
      if (n.type !== "decl" && (e = n.raws.between, typeof e < "u"))
        return !1;
    }), e;
  }
  rawColon(t) {
    let e;
    return t.walkDecls((n) => {
      if (typeof n.raws.between < "u")
        return e = n.raws.between.replace(/[^\s:]/g, ""), !1;
    }), e;
  }
  beforeAfter(t, e) {
    let n;
    t.type === "decl" ? n = this.raw(t, null, "beforeDecl") : t.type === "comment" ? n = this.raw(t, null, "beforeComment") : e === "before" ? n = this.raw(t, null, "beforeRule") : n = this.raw(t, null, "beforeClose");
    let r = t.parent, o = 0;
    for (; r && r.type !== "root"; )
      o += 1, r = r.parent;
    if (n.includes(`
`)) {
      let i = this.raw(t, null, "indent");
      if (i.length)
        for (let c = 0; c < o; c++)
          n += i;
    }
    return n;
  }
  rawValue(t, e) {
    let n = t[e], r = t.raws[e];
    return r && r.value === n ? r.raw : n;
  }
}
var Gn = Be;
Be.default = Be;
let hz = Gn;
function Ue(s, t) {
  new hz(t).stringify(s);
}
var Se = Ue;
Ue.default = Ue;
let { isClean: Wt, my: pz } = Ft, dz = fs, gz = Gn, mz = Se;
function He(s, t) {
  let e = new s.constructor();
  for (let n in s) {
    if (!Object.prototype.hasOwnProperty.call(s, n) || n === "proxyCache")
      continue;
    let r = s[n], o = typeof r;
    n === "parent" && o === "object" ? t && (e[n] = t) : n === "source" ? e[n] = r : Array.isArray(r) ? e[n] = r.map((i) => He(i, e)) : (o === "object" && r !== null && (r = He(r)), e[n] = r);
  }
  return e;
}
class Ve {
  constructor(t = {}) {
    this.raws = {}, this[Wt] = !1, this[pz] = !0;
    for (let e in t)
      if (e === "nodes") {
        this.nodes = [];
        for (let n of t[e])
          typeof n.clone == "function" ? this.append(n.clone()) : this.append(n);
      } else
        this[e] = t[e];
  }
  error(t, e = {}) {
    if (this.source) {
      let { start: n, end: r } = this.rangeBy(e);
      return this.source.input.error(
        t,
        { line: n.line, column: n.column },
        { line: r.line, column: r.column },
        e
      );
    }
    return new dz(t);
  }
  warn(t, e, n) {
    let r = { node: this };
    for (let o in n)
      r[o] = n[o];
    return t.warn(e, r);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  toString(t = mz) {
    t.stringify && (t = t.stringify);
    let e = "";
    return t(this, (n) => {
      e += n;
    }), e;
  }
  assign(t = {}) {
    for (let e in t)
      this[e] = t[e];
    return this;
  }
  clone(t = {}) {
    let e = He(this);
    for (let n in t)
      e[n] = t[n];
    return e;
  }
  cloneBefore(t = {}) {
    let e = this.clone(t);
    return this.parent.insertBefore(this, e), e;
  }
  cloneAfter(t = {}) {
    let e = this.clone(t);
    return this.parent.insertAfter(this, e), e;
  }
  replaceWith(...t) {
    if (this.parent) {
      let e = this, n = !1;
      for (let r of t)
        r === this ? n = !0 : n ? (this.parent.insertAfter(e, r), e = r) : this.parent.insertBefore(e, r);
      n || this.remove();
    }
    return this;
  }
  next() {
    if (!this.parent)
      return;
    let t = this.parent.index(this);
    return this.parent.nodes[t + 1];
  }
  prev() {
    if (!this.parent)
      return;
    let t = this.parent.index(this);
    return this.parent.nodes[t - 1];
  }
  before(t) {
    return this.parent.insertBefore(this, t), this;
  }
  after(t) {
    return this.parent.insertAfter(this, t), this;
  }
  root() {
    let t = this;
    for (; t.parent && t.parent.type !== "document"; )
      t = t.parent;
    return t;
  }
  raw(t, e) {
    return new gz().raw(this, t, e);
  }
  cleanRaws(t) {
    delete this.raws.before, delete this.raws.after, t || delete this.raws.between;
  }
  toJSON(t, e) {
    let n = {}, r = e == null;
    e = e || /* @__PURE__ */ new Map();
    let o = 0;
    for (let i in this) {
      if (!Object.prototype.hasOwnProperty.call(this, i) || i === "parent" || i === "proxyCache")
        continue;
      let c = this[i];
      if (Array.isArray(c))
        n[i] = c.map((a) => typeof a == "object" && a.toJSON ? a.toJSON(null, e) : a);
      else if (typeof c == "object" && c.toJSON)
        n[i] = c.toJSON(null, e);
      else if (i === "source") {
        let a = e.get(c.input);
        a == null && (a = o, e.set(c.input, o), o++), n[i] = {
          inputId: a,
          start: c.start,
          end: c.end
        };
      } else
        n[i] = c;
    }
    return r && (n.inputs = [...e.keys()].map((i) => i.toJSON())), n;
  }
  positionInside(t) {
    let e = this.toString(), n = this.source.start.column, r = this.source.start.line;
    for (let o = 0; o < t; o++)
      e[o] === `
` ? (n = 1, r += 1) : n += 1;
    return { line: r, column: n };
  }
  positionBy(t) {
    let e = this.source.start;
    if (t.index)
      e = this.positionInside(t.index);
    else if (t.word) {
      let n = this.toString().indexOf(t.word);
      n !== -1 && (e = this.positionInside(n));
    }
    return e;
  }
  rangeBy(t) {
    let e = {
      line: this.source.start.line,
      column: this.source.start.column
    }, n = this.source.end ? {
      line: this.source.end.line,
      column: this.source.end.column + 1
    } : {
      line: e.line,
      column: e.column + 1
    };
    if (t.word) {
      let r = this.toString().indexOf(t.word);
      r !== -1 && (e = this.positionInside(r), n = this.positionInside(r + t.word.length));
    } else
      t.start ? e = {
        line: t.start.line,
        column: t.start.column
      } : t.index && (e = this.positionInside(t.index)), t.end ? n = {
        line: t.end.line,
        column: t.end.column
      } : t.endIndex ? n = this.positionInside(t.endIndex) : t.index && (n = this.positionInside(t.index + 1));
    return (n.line < e.line || n.line === e.line && n.column <= e.column) && (n = { line: e.line, column: e.column + 1 }), { start: e, end: n };
  }
  getProxyProcessor() {
    return {
      set(t, e, n) {
        return t[e] === n || (t[e] = n, (e === "prop" || e === "value" || e === "name" || e === "params" || e === "important" || e === "text") && t.markDirty()), !0;
      },
      get(t, e) {
        return e === "proxyOf" ? t : e === "root" ? () => t.root().toProxy() : t[e];
      }
    };
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  addToError(t) {
    if (t.postcssNode = this, t.stack && this.source && /\n\s{4}at /.test(t.stack)) {
      let e = this.source;
      t.stack = t.stack.replace(
        /\n\s{4}at /,
        `$&${e.input.from}:${e.start.line}:${e.start.column}$&`
      );
    }
    return t;
  }
  markDirty() {
    if (this[Wt]) {
      this[Wt] = !1;
      let t = this;
      for (; t = t.parent; )
        t[Wt] = !1;
    }
  }
  get proxyOf() {
    return this;
  }
}
var _e = Ve;
Ve.default = Ve;
let bz = _e;
class Fe extends bz {
  constructor(t) {
    t && typeof t.value < "u" && typeof t.value != "string" && (t = { ...t, value: String(t.value) }), super(t), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
}
var Te = Fe;
Fe.default = Fe;
let yz = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", vz = (s, t = 21) => (e = t) => {
  let n = "", r = e;
  for (; r--; )
    n += s[Math.random() * s.length | 0];
  return n;
}, wz = (s = 21) => {
  let t = "", e = s;
  for (; e--; )
    t += yz[Math.random() * 64 | 0];
  return t;
};
const xz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nanoid: wz,
  customAlphabet: vz
}, Symbol.toStringTag, { value: "Module" })), Sz = /* @__PURE__ */ rn(xz);
let { SourceMapConsumer: Bs, SourceMapGenerator: Us } = et, { existsSync: _z, readFileSync: Tz } = et, { dirname: Ne, join: Ez } = et;
function Cz(s) {
  return Buffer ? Buffer.from(s, "base64").toString() : window.atob(s);
}
class ze {
  constructor(t, e) {
    if (e.map === !1)
      return;
    this.loadAnnotation(t), this.inline = this.startWith(this.annotation, "data:");
    let n = e.map ? e.map.prev : void 0, r = this.loadMap(e.from, n);
    !this.mapFile && e.from && (this.mapFile = e.from), this.mapFile && (this.root = Ne(this.mapFile)), r && (this.text = r);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Bs(this.text)), this.consumerCache;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
  startWith(t, e) {
    return t ? t.substr(0, e.length) === e : !1;
  }
  getAnnotationURL(t) {
    return t.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  loadAnnotation(t) {
    let e = t.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!e)
      return;
    let n = t.lastIndexOf(e.pop()), r = t.indexOf("*/", n);
    n > -1 && r > -1 && (this.annotation = this.getAnnotationURL(t.substring(n, r)));
  }
  decodeInline(t) {
    let e = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, r = /^data:application\/json;charset=utf-?8,/, o = /^data:application\/json,/;
    if (r.test(t) || o.test(t))
      return decodeURIComponent(t.substr(RegExp.lastMatch.length));
    if (e.test(t) || n.test(t))
      return Cz(t.substr(RegExp.lastMatch.length));
    let i = t.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + i);
  }
  loadFile(t) {
    if (this.root = Ne(t), _z(t))
      return this.mapFile = t, Tz(t, "utf-8").toString().trim();
  }
  loadMap(t, e) {
    if (e === !1)
      return !1;
    if (e) {
      if (typeof e == "string")
        return e;
      if (typeof e == "function") {
        let n = e(t);
        if (n) {
          let r = this.loadFile(n);
          if (!r)
            throw new Error(
              "Unable to load previous source map: " + n.toString()
            );
          return r;
        }
      } else {
        if (e instanceof Bs)
          return Us.fromSourceMap(e).toString();
        if (e instanceof Us)
          return e.toString();
        if (this.isMap(e))
          return JSON.stringify(e);
        throw new Error(
          "Unsupported previous source map format: " + e.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let n = this.annotation;
        return t && (n = Ez(Ne(t), n)), this.loadFile(n);
      }
    }
  }
  isMap(t) {
    return typeof t != "object" ? !1 : typeof t.mappings == "string" || typeof t._mappings == "string" || Array.isArray(t.sections);
  }
}
var Wn = ze;
ze.default = ze;
let { SourceMapConsumer: Az, SourceMapGenerator: qz } = et, { fileURLToPath: Hs, pathToFileURL: Yt } = et, { resolve: Ge, isAbsolute: We } = et, { nanoid: Oz } = Sz, Pe = et, Vs = fs, Dz = Wn, ke = Symbol("fromOffsetCache"), Lz = Boolean(Az && qz), Fs = Boolean(Ge && We);
class le {
  constructor(t, e = {}) {
    if (t === null || typeof t > "u" || typeof t == "object" && !t.toString)
      throw new Error(`PostCSS received ${t} instead of CSS string`);
    if (this.css = t.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, e.from && (!Fs || /^\w+:\/\//.test(e.from) || We(e.from) ? this.file = e.from : this.file = Ge(e.from)), Fs && Lz) {
      let n = new Dz(this.css, e);
      if (n.text) {
        this.map = n;
        let r = n.consumer().file;
        !this.file && r && (this.file = this.mapResolve(r));
      }
    }
    this.file || (this.id = "<input css " + Oz(6) + ">"), this.map && (this.map.file = this.from);
  }
  fromOffset(t) {
    let e, n;
    if (this[ke])
      n = this[ke];
    else {
      let o = this.css.split(`
`);
      n = new Array(o.length);
      let i = 0;
      for (let c = 0, a = o.length; c < a; c++)
        n[c] = i, i += o[c].length + 1;
      this[ke] = n;
    }
    e = n[n.length - 1];
    let r = 0;
    if (t >= e)
      r = n.length - 1;
    else {
      let o = n.length - 2, i;
      for (; r < o; )
        if (i = r + (o - r >> 1), t < n[i])
          o = i - 1;
        else if (t >= n[i + 1])
          r = i + 1;
        else {
          r = i;
          break;
        }
    }
    return {
      line: r + 1,
      col: t - n[r] + 1
    };
  }
  error(t, e, n, r = {}) {
    let o, i, c;
    if (e && typeof e == "object") {
      let l = e, f = n;
      if (typeof e.offset == "number") {
        let h = this.fromOffset(l.offset);
        e = h.line, n = h.col;
      } else
        e = l.line, n = l.column;
      if (typeof f.offset == "number") {
        let h = this.fromOffset(f.offset);
        i = h.line, c = h.col;
      } else
        i = f.line, c = f.column;
    } else if (!n) {
      let l = this.fromOffset(e);
      e = l.line, n = l.col;
    }
    let a = this.origin(e, n, i, c);
    return a ? o = new Vs(
      t,
      a.endLine === void 0 ? a.line : { line: a.line, column: a.column },
      a.endLine === void 0 ? a.column : { line: a.endLine, column: a.endColumn },
      a.source,
      a.file,
      r.plugin
    ) : o = new Vs(
      t,
      i === void 0 ? e : { line: e, column: n },
      i === void 0 ? n : { line: i, column: c },
      this.css,
      this.file,
      r.plugin
    ), o.input = { line: e, column: n, endLine: i, endColumn: c, source: this.css }, this.file && (Yt && (o.input.url = Yt(this.file).toString()), o.input.file = this.file), o;
  }
  origin(t, e, n, r) {
    if (!this.map)
      return !1;
    let o = this.map.consumer(), i = o.originalPositionFor({ line: t, column: e });
    if (!i.source)
      return !1;
    let c;
    typeof n == "number" && (c = o.originalPositionFor({ line: n, column: r }));
    let a;
    We(i.source) ? a = Yt(i.source) : a = new URL(
      i.source,
      this.map.consumer().sourceRoot || Yt(this.map.mapFile)
    );
    let l = {
      url: a.toString(),
      line: i.line,
      column: i.column,
      endLine: c && c.line,
      endColumn: c && c.column
    };
    if (a.protocol === "file:")
      if (Hs)
        l.file = Hs(a);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let f = o.sourceContentFor(i.source);
    return f && (l.source = f), l;
  }
  mapResolve(t) {
    return /^\w+:\/\//.test(t) ? t : Ge(this.map.consumer().sourceRoot || this.map.root || ".", t);
  }
  get from() {
    return this.file || this.id;
  }
  toJSON() {
    let t = {};
    for (let e of ["hasBOM", "css", "file", "id"])
      this[e] != null && (t[e] = this[e]);
    return this.map && (t.map = { ...this.map }, t.map.consumerCache && (t.map.consumerCache = void 0)), t;
  }
}
var Ee = le;
le.default = le;
Pe && Pe.registerInput && Pe.registerInput(le);
let { SourceMapConsumer: Yn, SourceMapGenerator: re } = et, { dirname: oe, resolve: Jn, relative: Xn, sep: Zn } = et, { pathToFileURL: zs } = et, Nz = Ee, Pz = Boolean(Yn && re), kz = Boolean(oe && Jn && Xn && Zn);
class Rz {
  constructor(t, e, n, r) {
    this.stringify = t, this.mapOpts = n.map || {}, this.root = e, this.opts = n, this.css = r;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((t) => {
          if (t.source && t.source.input.map) {
            let e = t.source.input.map;
            this.previousMaps.includes(e) || this.previousMaps.push(e);
          }
        });
      else {
        let t = new Nz(this.css, this.opts);
        t.map && this.previousMaps.push(t.map);
      }
    return this.previousMaps;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let t = this.mapOpts.annotation;
    return typeof t < "u" && t !== !0 ? !1 : this.previous().length ? this.previous().some((e) => e.inline) : !0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((t) => t.withContent()) : !0;
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let t;
        for (let e = this.root.nodes.length - 1; e >= 0; e--)
          t = this.root.nodes[e], t.type === "comment" && t.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(e);
      } else
        this.css && (this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  setSourcesContent() {
    let t = {};
    if (this.root)
      this.root.walk((e) => {
        if (e.source) {
          let n = e.source.input.from;
          n && !t[n] && (t[n] = !0, this.map.setSourceContent(
            this.toUrl(this.path(n)),
            e.source.input.css
          ));
        }
      });
    else if (this.css) {
      let e = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(e, this.css);
    }
  }
  applyPrevMaps() {
    for (let t of this.previous()) {
      let e = this.toUrl(this.path(t.file)), n = t.root || oe(t.file), r;
      this.mapOpts.sourcesContent === !1 ? (r = new Yn(t.text), r.sourcesContent && (r.sourcesContent = r.sourcesContent.map(() => null))) : r = t.consumer(), this.map.applySourceMap(r, e, this.toUrl(this.path(n)));
    }
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((t) => t.annotation) : !0;
  }
  toBase64(t) {
    return Buffer ? Buffer.from(t).toString("base64") : window.btoa(unescape(encodeURIComponent(t)));
  }
  addAnnotation() {
    let t;
    this.isInline() ? t = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? t = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? t = this.mapOpts.annotation(this.opts.to, this.root) : t = this.outputFile() + ".map";
    let e = `
`;
    this.css.includes(`\r
`) && (e = `\r
`), this.css += e + "/*# sourceMappingURL=" + t + " */";
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let t = this.previous()[0].consumer();
      t.file = this.outputFile(), this.map = re.fromSourceMap(t);
    } else
      this.map = new re({ file: this.outputFile() }), this.map.addMapping({
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>",
        generated: { line: 1, column: 0 },
        original: { line: 1, column: 0 }
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  path(t) {
    if (t.indexOf("<") === 0 || /^\w+:\/\//.test(t) || this.mapOpts.absolute)
      return t;
    let e = this.opts.to ? oe(this.opts.to) : ".";
    return typeof this.mapOpts.annotation == "string" && (e = oe(Jn(e, this.mapOpts.annotation))), t = Xn(e, t), t;
  }
  toUrl(t) {
    return Zn === "\\" && (t = t.replace(/\\/g, "/")), encodeURI(t).replace(/[#?]/g, encodeURIComponent);
  }
  sourcePath(t) {
    if (this.mapOpts.from)
      return this.toUrl(this.mapOpts.from);
    if (this.mapOpts.absolute) {
      if (zs)
        return zs(t.source.input.from).toString();
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
    } else
      return this.toUrl(this.path(t.source.input.from));
  }
  generateString() {
    this.css = "", this.map = new re({ file: this.outputFile() });
    let t = 1, e = 1, n = "<no source>", r = {
      source: "",
      generated: { line: 0, column: 0 },
      original: { line: 0, column: 0 }
    }, o, i;
    this.stringify(this.root, (c, a, l) => {
      if (this.css += c, a && l !== "end" && (r.generated.line = t, r.generated.column = e - 1, a.source && a.source.start ? (r.source = this.sourcePath(a), r.original.line = a.source.start.line, r.original.column = a.source.start.column - 1, this.map.addMapping(r)) : (r.source = n, r.original.line = 1, r.original.column = 0, this.map.addMapping(r))), o = c.match(/\n/g), o ? (t += o.length, i = c.lastIndexOf(`
`), e = c.length - i) : e += c.length, a && l !== "start") {
        let f = a.parent || { raws: {} };
        (a.type !== "decl" || a !== f.last || f.raws.semicolon) && (a.source && a.source.end ? (r.source = this.sourcePath(a), r.original.line = a.source.end.line, r.original.column = a.source.end.column - 1, r.generated.line = t, r.generated.column = e - 2, this.map.addMapping(r)) : (r.source = n, r.original.line = 1, r.original.column = 0, r.generated.line = t, r.generated.column = e - 1, this.map.addMapping(r)));
      }
    });
  }
  generate() {
    if (this.clearAnnotation(), kz && Pz && this.isMap())
      return this.generateMap();
    {
      let t = "";
      return this.stringify(this.root, (e) => {
        t += e;
      }), [t];
    }
  }
}
var Qn = Rz;
let $z = _e;
class Ye extends $z {
  constructor(t) {
    super(t), this.type = "comment";
  }
}
var Ce = Ye;
Ye.default = Ye;
let { isClean: Kn, my: tr } = Ft, er = Te, sr = Ce, Mz = _e, nr, hs, ps;
function rr(s) {
  return s.map((t) => (t.nodes && (t.nodes = rr(t.nodes)), delete t.source, t));
}
function or(s) {
  if (s[Kn] = !1, s.proxyOf.nodes)
    for (let t of s.proxyOf.nodes)
      or(t);
}
class rt extends Mz {
  push(t) {
    return t.parent = this, this.proxyOf.nodes.push(t), this;
  }
  each(t) {
    if (!this.proxyOf.nodes)
      return;
    let e = this.getIterator(), n, r;
    for (; this.indexes[e] < this.proxyOf.nodes.length && (n = this.indexes[e], r = t(this.proxyOf.nodes[n], n), r !== !1); )
      this.indexes[e] += 1;
    return delete this.indexes[e], r;
  }
  walk(t) {
    return this.each((e, n) => {
      let r;
      try {
        r = t(e, n);
      } catch (o) {
        throw e.addToError(o);
      }
      return r !== !1 && e.walk && (r = e.walk(t)), r;
    });
  }
  walkDecls(t, e) {
    return e ? t instanceof RegExp ? this.walk((n, r) => {
      if (n.type === "decl" && t.test(n.prop))
        return e(n, r);
    }) : this.walk((n, r) => {
      if (n.type === "decl" && n.prop === t)
        return e(n, r);
    }) : (e = t, this.walk((n, r) => {
      if (n.type === "decl")
        return e(n, r);
    }));
  }
  walkRules(t, e) {
    return e ? t instanceof RegExp ? this.walk((n, r) => {
      if (n.type === "rule" && t.test(n.selector))
        return e(n, r);
    }) : this.walk((n, r) => {
      if (n.type === "rule" && n.selector === t)
        return e(n, r);
    }) : (e = t, this.walk((n, r) => {
      if (n.type === "rule")
        return e(n, r);
    }));
  }
  walkAtRules(t, e) {
    return e ? t instanceof RegExp ? this.walk((n, r) => {
      if (n.type === "atrule" && t.test(n.name))
        return e(n, r);
    }) : this.walk((n, r) => {
      if (n.type === "atrule" && n.name === t)
        return e(n, r);
    }) : (e = t, this.walk((n, r) => {
      if (n.type === "atrule")
        return e(n, r);
    }));
  }
  walkComments(t) {
    return this.walk((e, n) => {
      if (e.type === "comment")
        return t(e, n);
    });
  }
  append(...t) {
    for (let e of t) {
      let n = this.normalize(e, this.last);
      for (let r of n)
        this.proxyOf.nodes.push(r);
    }
    return this.markDirty(), this;
  }
  prepend(...t) {
    t = t.reverse();
    for (let e of t) {
      let n = this.normalize(e, this.first, "prepend").reverse();
      for (let r of n)
        this.proxyOf.nodes.unshift(r);
      for (let r in this.indexes)
        this.indexes[r] = this.indexes[r] + n.length;
    }
    return this.markDirty(), this;
  }
  cleanRaws(t) {
    if (super.cleanRaws(t), this.nodes)
      for (let e of this.nodes)
        e.cleanRaws(t);
  }
  insertBefore(t, e) {
    t = this.index(t);
    let n = t === 0 ? "prepend" : !1, r = this.normalize(e, this.proxyOf.nodes[t], n).reverse();
    for (let i of r)
      this.proxyOf.nodes.splice(t, 0, i);
    let o;
    for (let i in this.indexes)
      o = this.indexes[i], t <= o && (this.indexes[i] = o + r.length);
    return this.markDirty(), this;
  }
  insertAfter(t, e) {
    t = this.index(t);
    let n = this.normalize(e, this.proxyOf.nodes[t]).reverse();
    for (let o of n)
      this.proxyOf.nodes.splice(t + 1, 0, o);
    let r;
    for (let o in this.indexes)
      r = this.indexes[o], t < r && (this.indexes[o] = r + n.length);
    return this.markDirty(), this;
  }
  removeChild(t) {
    t = this.index(t), this.proxyOf.nodes[t].parent = void 0, this.proxyOf.nodes.splice(t, 1);
    let e;
    for (let n in this.indexes)
      e = this.indexes[n], e >= t && (this.indexes[n] = e - 1);
    return this.markDirty(), this;
  }
  removeAll() {
    for (let t of this.proxyOf.nodes)
      t.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  replaceValues(t, e, n) {
    return n || (n = e, e = {}), this.walkDecls((r) => {
      e.props && !e.props.includes(r.prop) || e.fast && !r.value.includes(e.fast) || (r.value = r.value.replace(t, n));
    }), this.markDirty(), this;
  }
  every(t) {
    return this.nodes.every(t);
  }
  some(t) {
    return this.nodes.some(t);
  }
  index(t) {
    return typeof t == "number" ? t : (t.proxyOf && (t = t.proxyOf), this.proxyOf.nodes.indexOf(t));
  }
  get first() {
    if (!!this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (!!this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
  normalize(t, e) {
    if (typeof t == "string")
      t = rr(nr(t).nodes);
    else if (Array.isArray(t)) {
      t = t.slice(0);
      for (let r of t)
        r.parent && r.parent.removeChild(r, "ignore");
    } else if (t.type === "root" && this.type !== "document") {
      t = t.nodes.slice(0);
      for (let r of t)
        r.parent && r.parent.removeChild(r, "ignore");
    } else if (t.type)
      t = [t];
    else if (t.prop) {
      if (typeof t.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof t.value != "string" && (t.value = String(t.value)), t = [new er(t)];
    } else if (t.selector)
      t = [new hs(t)];
    else if (t.name)
      t = [new ps(t)];
    else if (t.text)
      t = [new sr(t)];
    else
      throw new Error("Unknown node type in node creation");
    return t.map((r) => (r[tr] || rt.rebuild(r), r = r.proxyOf, r.parent && r.parent.removeChild(r), r[Kn] && or(r), typeof r.raws.before > "u" && e && typeof e.raws.before < "u" && (r.raws.before = e.raws.before.replace(/\S/g, "")), r.parent = this, r));
  }
  getProxyProcessor() {
    return {
      set(t, e, n) {
        return t[e] === n || (t[e] = n, (e === "name" || e === "params" || e === "selector") && t.markDirty()), !0;
      },
      get(t, e) {
        return e === "proxyOf" ? t : t[e] ? e === "each" || typeof e == "string" && e.startsWith("walk") ? (...n) => t[e](
          ...n.map((r) => typeof r == "function" ? (o, i) => r(o.toProxy(), i) : r)
        ) : e === "every" || e === "some" ? (n) => t[e](
          (r, ...o) => n(r.toProxy(), ...o)
        ) : e === "root" ? () => t.root().toProxy() : e === "nodes" ? t.nodes.map((n) => n.toProxy()) : e === "first" || e === "last" ? t[e].toProxy() : t[e] : t[e];
      }
    };
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let t = this.lastEach;
    return this.indexes[t] = 0, t;
  }
}
rt.registerParse = (s) => {
  nr = s;
};
rt.registerRule = (s) => {
  hs = s;
};
rt.registerAtRule = (s) => {
  ps = s;
};
var wt = rt;
rt.default = rt;
rt.rebuild = (s) => {
  s.type === "atrule" ? Object.setPrototypeOf(s, ps.prototype) : s.type === "rule" ? Object.setPrototypeOf(s, hs.prototype) : s.type === "decl" ? Object.setPrototypeOf(s, er.prototype) : s.type === "comment" && Object.setPrototypeOf(s, sr.prototype), s[tr] = !0, s.nodes && s.nodes.forEach((t) => {
    rt.rebuild(t);
  });
};
let Iz = wt, ir, cr;
class Rt extends Iz {
  constructor(t) {
    super({ type: "document", ...t }), this.nodes || (this.nodes = []);
  }
  toResult(t = {}) {
    return new ir(new cr(), this, t).stringify();
  }
}
Rt.registerLazyResult = (s) => {
  ir = s;
};
Rt.registerProcessor = (s) => {
  cr = s;
};
var ds = Rt;
Rt.default = Rt;
let Gs = {};
var ar = function(t) {
  Gs[t] || (Gs[t] = !0, typeof console < "u" && console.warn && console.warn(t));
};
class Je {
  constructor(t, e = {}) {
    if (this.type = "warning", this.text = t, e.node && e.node.source) {
      let n = e.node.rangeBy(e);
      this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
    }
    for (let n in e)
      this[n] = e[n];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      plugin: this.plugin,
      index: this.index,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
}
var lr = Je;
Je.default = Je;
let jz = lr;
class Xe {
  constructor(t, e, n) {
    this.processor = t, this.messages = [], this.root = e, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(t, e = {}) {
    e.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (e.plugin = this.lastPlugin.postcssPlugin);
    let n = new jz(t, e);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((t) => t.type === "warning");
  }
  get content() {
    return this.css;
  }
}
var gs = Xe;
Xe.default = Xe;
const Re = "'".charCodeAt(0), Ws = '"'.charCodeAt(0), Jt = "\\".charCodeAt(0), Ys = "/".charCodeAt(0), Xt = `
`.charCodeAt(0), qt = " ".charCodeAt(0), Zt = "\f".charCodeAt(0), Qt = "	".charCodeAt(0), Kt = "\r".charCodeAt(0), Bz = "[".charCodeAt(0), Uz = "]".charCodeAt(0), Hz = "(".charCodeAt(0), Vz = ")".charCodeAt(0), Fz = "{".charCodeAt(0), zz = "}".charCodeAt(0), Gz = ";".charCodeAt(0), Wz = "*".charCodeAt(0), Yz = ":".charCodeAt(0), Jz = "@".charCodeAt(0), te = /[\t\n\f\r "#'()/;[\\\]{}]/g, ee = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Xz = /.[\n"'(/\\]/, Js = /[\da-f]/i;
var Zz = function(t, e = {}) {
  let n = t.css.valueOf(), r = e.ignoreErrors, o, i, c, a, l, f, h, b, w, d, y = n.length, p = 0, D = [], M = [];
  function F() {
    return p;
  }
  function A(B) {
    throw t.error("Unclosed " + B, p);
  }
  function I() {
    return M.length === 0 && p >= y;
  }
  function j(B) {
    if (M.length)
      return M.pop();
    if (p >= y)
      return;
    let Z = B ? B.ignoreUnclosed : !1;
    switch (o = n.charCodeAt(p), o) {
      case Xt:
      case qt:
      case Qt:
      case Kt:
      case Zt: {
        i = p;
        do
          i += 1, o = n.charCodeAt(i);
        while (o === qt || o === Xt || o === Qt || o === Kt || o === Zt);
        d = ["space", n.slice(p, i)], p = i - 1;
        break;
      }
      case Bz:
      case Uz:
      case Fz:
      case zz:
      case Yz:
      case Gz:
      case Vz: {
        let Q = String.fromCharCode(o);
        d = [Q, Q, p];
        break;
      }
      case Hz: {
        if (b = D.length ? D.pop()[1] : "", w = n.charCodeAt(p + 1), b === "url" && w !== Re && w !== Ws && w !== qt && w !== Xt && w !== Qt && w !== Zt && w !== Kt) {
          i = p;
          do {
            if (f = !1, i = n.indexOf(")", i + 1), i === -1)
              if (r || Z) {
                i = p;
                break;
              } else
                A("bracket");
            for (h = i; n.charCodeAt(h - 1) === Jt; )
              h -= 1, f = !f;
          } while (f);
          d = ["brackets", n.slice(p, i + 1), p, i], p = i;
        } else
          i = n.indexOf(")", p + 1), a = n.slice(p, i + 1), i === -1 || Xz.test(a) ? d = ["(", "(", p] : (d = ["brackets", a, p, i], p = i);
        break;
      }
      case Re:
      case Ws: {
        c = o === Re ? "'" : '"', i = p;
        do {
          if (f = !1, i = n.indexOf(c, i + 1), i === -1)
            if (r || Z) {
              i = p + 1;
              break;
            } else
              A("string");
          for (h = i; n.charCodeAt(h - 1) === Jt; )
            h -= 1, f = !f;
        } while (f);
        d = ["string", n.slice(p, i + 1), p, i], p = i;
        break;
      }
      case Jz: {
        te.lastIndex = p + 1, te.test(n), te.lastIndex === 0 ? i = n.length - 1 : i = te.lastIndex - 2, d = ["at-word", n.slice(p, i + 1), p, i], p = i;
        break;
      }
      case Jt: {
        for (i = p, l = !0; n.charCodeAt(i + 1) === Jt; )
          i += 1, l = !l;
        if (o = n.charCodeAt(i + 1), l && o !== Ys && o !== qt && o !== Xt && o !== Qt && o !== Kt && o !== Zt && (i += 1, Js.test(n.charAt(i)))) {
          for (; Js.test(n.charAt(i + 1)); )
            i += 1;
          n.charCodeAt(i + 1) === qt && (i += 1);
        }
        d = ["word", n.slice(p, i + 1), p, i], p = i;
        break;
      }
      default: {
        o === Ys && n.charCodeAt(p + 1) === Wz ? (i = n.indexOf("*/", p + 2) + 1, i === 0 && (r || Z ? i = n.length : A("comment")), d = ["comment", n.slice(p, i + 1), p, i], p = i) : (ee.lastIndex = p + 1, ee.test(n), ee.lastIndex === 0 ? i = n.length - 1 : i = ee.lastIndex - 2, d = ["word", n.slice(p, i + 1), p, i], D.push(d), p = i);
        break;
      }
    }
    return p++, d;
  }
  function z(B) {
    M.push(B);
  }
  return {
    back: z,
    nextToken: j,
    endOfFile: I,
    position: F
  };
};
let ur = wt;
class ue extends ur {
  constructor(t) {
    super(t), this.type = "atrule";
  }
  append(...t) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...t);
  }
  prepend(...t) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...t);
  }
}
var ms = ue;
ue.default = ue;
ur.registerAtRule(ue);
let Qz = wt, fr, hr;
class $t extends Qz {
  constructor(t) {
    super(t), this.type = "root", this.nodes || (this.nodes = []);
  }
  removeChild(t, e) {
    let n = this.index(t);
    return !e && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(t);
  }
  normalize(t, e, n) {
    let r = super.normalize(t);
    if (e) {
      if (n === "prepend")
        this.nodes.length > 1 ? e.raws.before = this.nodes[1].raws.before : delete e.raws.before;
      else if (this.first !== e)
        for (let o of r)
          o.raws.before = e.raws.before;
    }
    return r;
  }
  toResult(t = {}) {
    return new fr(new hr(), this, t).stringify();
  }
}
$t.registerLazyResult = (s) => {
  fr = s;
};
$t.registerProcessor = (s) => {
  hr = s;
};
var zt = $t;
$t.default = $t;
let Mt = {
  split(s, t, e) {
    let n = [], r = "", o = !1, i = 0, c = !1, a = !1;
    for (let l of s)
      a ? a = !1 : l === "\\" ? a = !0 : c ? l === c && (c = !1) : l === '"' || l === "'" ? c = l : l === "(" ? i += 1 : l === ")" ? i > 0 && (i -= 1) : i === 0 && t.includes(l) && (o = !0), o ? (r !== "" && n.push(r.trim()), r = "", o = !1) : r += l;
    return (e || r !== "") && n.push(r.trim()), n;
  },
  space(s) {
    let t = [" ", `
`, "	"];
    return Mt.split(s, t);
  },
  comma(s) {
    return Mt.split(s, [","], !0);
  }
};
var pr = Mt;
Mt.default = Mt;
let dr = wt, Kz = pr;
class fe extends dr {
  constructor(t) {
    super(t), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return Kz.comma(this.selector);
  }
  set selectors(t) {
    let e = this.selector ? this.selector.match(/,\s*/) : null, n = e ? e[0] : "," + this.raw("between", "beforeOpen");
    this.selector = t.join(n);
  }
}
var bs = fe;
fe.default = fe;
dr.registerRule(fe);
let t3 = Te, e3 = Zz, s3 = Ce, n3 = ms, r3 = zt, Xs = bs;
const Zs = {
  empty: !0,
  space: !0
};
function o3(s) {
  for (let t = s.length - 1; t >= 0; t--) {
    let e = s[t], n = e[3] || e[2];
    if (n)
      return n;
  }
}
class i3 {
  constructor(t) {
    this.input = t, this.root = new r3(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.customProperty = !1, this.createTokenizer(), this.root.source = { input: t, start: { offset: 0, line: 1, column: 1 } };
  }
  createTokenizer() {
    this.tokenizer = e3(this.input);
  }
  parse() {
    let t;
    for (; !this.tokenizer.endOfFile(); )
      switch (t = this.tokenizer.nextToken(), t[0]) {
        case "space":
          this.spaces += t[1];
          break;
        case ";":
          this.freeSemicolon(t);
          break;
        case "}":
          this.end(t);
          break;
        case "comment":
          this.comment(t);
          break;
        case "at-word":
          this.atrule(t);
          break;
        case "{":
          this.emptyRule(t);
          break;
        default:
          this.other(t);
          break;
      }
    this.endFile();
  }
  comment(t) {
    let e = new s3();
    this.init(e, t[2]), e.source.end = this.getPosition(t[3] || t[2]);
    let n = t[1].slice(2, -2);
    if (/^\s*$/.test(n))
      e.text = "", e.raws.left = n, e.raws.right = "";
    else {
      let r = n.match(/^(\s*)([^]*\S)(\s*)$/);
      e.text = r[2], e.raws.left = r[1], e.raws.right = r[3];
    }
  }
  emptyRule(t) {
    let e = new Xs();
    this.init(e, t[2]), e.selector = "", e.raws.between = "", this.current = e;
  }
  other(t) {
    let e = !1, n = null, r = !1, o = null, i = [], c = t[1].startsWith("--"), a = [], l = t;
    for (; l; ) {
      if (n = l[0], a.push(l), n === "(" || n === "[")
        o || (o = l), i.push(n === "(" ? ")" : "]");
      else if (c && r && n === "{")
        o || (o = l), i.push("}");
      else if (i.length === 0)
        if (n === ";")
          if (r) {
            this.decl(a, c);
            return;
          } else
            break;
        else if (n === "{") {
          this.rule(a);
          return;
        } else if (n === "}") {
          this.tokenizer.back(a.pop()), e = !0;
          break;
        } else
          n === ":" && (r = !0);
      else
        n === i[i.length - 1] && (i.pop(), i.length === 0 && (o = null));
      l = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (e = !0), i.length > 0 && this.unclosedBracket(o), e && r) {
      if (!c)
        for (; a.length && (l = a[a.length - 1][0], !(l !== "space" && l !== "comment")); )
          this.tokenizer.back(a.pop());
      this.decl(a, c);
    } else
      this.unknownWord(a);
  }
  rule(t) {
    t.pop();
    let e = new Xs();
    this.init(e, t[0][2]), e.raws.between = this.spacesAndCommentsFromEnd(t), this.raw(e, "selector", t), this.current = e;
  }
  decl(t, e) {
    let n = new t3();
    this.init(n, t[0][2]);
    let r = t[t.length - 1];
    for (r[0] === ";" && (this.semicolon = !0, t.pop()), n.source.end = this.getPosition(
      r[3] || r[2] || o3(t)
    ); t[0][0] !== "word"; )
      t.length === 1 && this.unknownWord(t), n.raws.before += t.shift()[1];
    for (n.source.start = this.getPosition(t[0][2]), n.prop = ""; t.length; ) {
      let l = t[0][0];
      if (l === ":" || l === "space" || l === "comment")
        break;
      n.prop += t.shift()[1];
    }
    n.raws.between = "";
    let o;
    for (; t.length; )
      if (o = t.shift(), o[0] === ":") {
        n.raws.between += o[1];
        break;
      } else
        o[0] === "word" && /\w/.test(o[1]) && this.unknownWord([o]), n.raws.between += o[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let i = [], c;
    for (; t.length && (c = t[0][0], !(c !== "space" && c !== "comment")); )
      i.push(t.shift());
    this.precheckMissedSemicolon(t);
    for (let l = t.length - 1; l >= 0; l--) {
      if (o = t[l], o[1].toLowerCase() === "!important") {
        n.important = !0;
        let f = this.stringFrom(t, l);
        f = this.spacesFromEnd(t) + f, f !== " !important" && (n.raws.important = f);
        break;
      } else if (o[1].toLowerCase() === "important") {
        let f = t.slice(0), h = "";
        for (let b = l; b > 0; b--) {
          let w = f[b][0];
          if (h.trim().indexOf("!") === 0 && w !== "space")
            break;
          h = f.pop()[1] + h;
        }
        h.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = h, t = f);
      }
      if (o[0] !== "space" && o[0] !== "comment")
        break;
    }
    t.some((l) => l[0] !== "space" && l[0] !== "comment") && (n.raws.between += i.map((l) => l[1]).join(""), i = []), this.raw(n, "value", i.concat(t), e), n.value.includes(":") && !e && this.checkMissedSemicolon(t);
  }
  atrule(t) {
    let e = new n3();
    e.name = t[1].slice(1), e.name === "" && this.unnamedAtrule(e, t), this.init(e, t[2]);
    let n, r, o, i = !1, c = !1, a = [], l = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (t = this.tokenizer.nextToken(), n = t[0], n === "(" || n === "[" ? l.push(n === "(" ? ")" : "]") : n === "{" && l.length > 0 ? l.push("}") : n === l[l.length - 1] && l.pop(), l.length === 0)
        if (n === ";") {
          e.source.end = this.getPosition(t[2]), this.semicolon = !0;
          break;
        } else if (n === "{") {
          c = !0;
          break;
        } else if (n === "}") {
          if (a.length > 0) {
            for (o = a.length - 1, r = a[o]; r && r[0] === "space"; )
              r = a[--o];
            r && (e.source.end = this.getPosition(r[3] || r[2]));
          }
          this.end(t);
          break;
        } else
          a.push(t);
      else
        a.push(t);
      if (this.tokenizer.endOfFile()) {
        i = !0;
        break;
      }
    }
    e.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (e.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(e, "params", a), i && (t = a[a.length - 1], e.source.end = this.getPosition(t[3] || t[2]), this.spaces = e.raws.between, e.raws.between = "")) : (e.raws.afterName = "", e.params = ""), c && (e.nodes = [], this.current = e);
  }
  end(t) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(t[2]), this.current = this.current.parent) : this.unexpectedClose(t);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces;
  }
  freeSemicolon(t) {
    if (this.spaces += t[1], this.current.nodes) {
      let e = this.current.nodes[this.current.nodes.length - 1];
      e && e.type === "rule" && !e.raws.ownSemicolon && (e.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  getPosition(t) {
    let e = this.input.fromOffset(t);
    return {
      offset: t,
      line: e.line,
      column: e.col
    };
  }
  init(t, e) {
    this.current.push(t), t.source = {
      start: this.getPosition(e),
      input: this.input
    }, t.raws.before = this.spaces, this.spaces = "", t.type !== "comment" && (this.semicolon = !1);
  }
  raw(t, e, n, r) {
    let o, i, c = n.length, a = "", l = !0, f, h;
    for (let b = 0; b < c; b += 1)
      o = n[b], i = o[0], i === "space" && b === c - 1 && !r ? l = !1 : i === "comment" ? (h = n[b - 1] ? n[b - 1][0] : "empty", f = n[b + 1] ? n[b + 1][0] : "empty", !Zs[h] && !Zs[f] ? a.slice(-1) === "," ? l = !1 : a += o[1] : l = !1) : a += o[1];
    if (!l) {
      let b = n.reduce((w, d) => w + d[1], "");
      t.raws[e] = { value: a, raw: b };
    }
    t[e] = a;
  }
  spacesAndCommentsFromEnd(t) {
    let e, n = "";
    for (; t.length && (e = t[t.length - 1][0], !(e !== "space" && e !== "comment")); )
      n = t.pop()[1] + n;
    return n;
  }
  spacesAndCommentsFromStart(t) {
    let e, n = "";
    for (; t.length && (e = t[0][0], !(e !== "space" && e !== "comment")); )
      n += t.shift()[1];
    return n;
  }
  spacesFromEnd(t) {
    let e, n = "";
    for (; t.length && (e = t[t.length - 1][0], e === "space"); )
      n = t.pop()[1] + n;
    return n;
  }
  stringFrom(t, e) {
    let n = "";
    for (let r = e; r < t.length; r++)
      n += t[r][1];
    return t.splice(e, t.length - e), n;
  }
  colon(t) {
    let e = 0, n, r, o;
    for (let [i, c] of t.entries()) {
      if (n = c, r = n[0], r === "(" && (e += 1), r === ")" && (e -= 1), e === 0 && r === ":")
        if (!o)
          this.doubleColon(n);
        else {
          if (o[0] === "word" && o[1] === "progid")
            continue;
          return i;
        }
      o = n;
    }
    return !1;
  }
  unclosedBracket(t) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: t[2] },
      { offset: t[2] + 1 }
    );
  }
  unknownWord(t) {
    throw this.input.error(
      "Unknown word",
      { offset: t[0][2] },
      { offset: t[0][2] + t[0][1].length }
    );
  }
  unexpectedClose(t) {
    throw this.input.error(
      "Unexpected }",
      { offset: t[2] },
      { offset: t[2] + 1 }
    );
  }
  unclosedBlock() {
    let t = this.current.source.start;
    throw this.input.error("Unclosed block", t.line, t.column);
  }
  doubleColon(t) {
    throw this.input.error(
      "Double colon",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
  unnamedAtrule(t, e) {
    throw this.input.error(
      "At-rule without name",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  precheckMissedSemicolon() {
  }
  checkMissedSemicolon(t) {
    let e = this.colon(t);
    if (e === !1)
      return;
    let n = 0, r;
    for (let o = e - 1; o >= 0 && (r = t[o], !(r[0] !== "space" && (n += 1, n === 2))); o--)
      ;
    throw this.input.error(
      "Missed semicolon",
      r[0] === "word" ? r[3] + 1 : r[2]
    );
  }
}
var c3 = i3;
let a3 = wt, l3 = c3, u3 = Ee;
function he(s, t) {
  let e = new u3(s, t), n = new l3(e);
  try {
    n.parse();
  } catch (r) {
    throw process.env.NODE_ENV !== "production" && r.name === "CssSyntaxError" && t && t.from && (/\.scss$/i.test(t.from) ? r.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(t.from) ? r.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(t.from) && (r.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), r;
  }
  return n.root;
}
var ys = he;
he.default = he;
a3.registerParse(he);
let { isClean: st, my: f3 } = Ft, h3 = Qn, p3 = Se, d3 = wt, g3 = ds, m3 = ar, Qs = gs, b3 = ys, y3 = zt;
const v3 = {
  document: "Document",
  root: "Root",
  atrule: "AtRule",
  rule: "Rule",
  decl: "Declaration",
  comment: "Comment"
}, w3 = {
  postcssPlugin: !0,
  prepare: !0,
  Once: !0,
  Document: !0,
  Root: !0,
  Declaration: !0,
  Rule: !0,
  AtRule: !0,
  Comment: !0,
  DeclarationExit: !0,
  RuleExit: !0,
  AtRuleExit: !0,
  CommentExit: !0,
  RootExit: !0,
  DocumentExit: !0,
  OnceExit: !0
}, x3 = {
  postcssPlugin: !0,
  prepare: !0,
  Once: !0
}, Ct = 0;
function Ot(s) {
  return typeof s == "object" && typeof s.then == "function";
}
function gr(s) {
  let t = !1, e = v3[s.type];
  return s.type === "decl" ? t = s.prop.toLowerCase() : s.type === "atrule" && (t = s.name.toLowerCase()), t && s.append ? [
    e,
    e + "-" + t,
    Ct,
    e + "Exit",
    e + "Exit-" + t
  ] : t ? [e, e + "-" + t, e + "Exit", e + "Exit-" + t] : s.append ? [e, Ct, e + "Exit"] : [e, e + "Exit"];
}
function Ks(s) {
  let t;
  return s.type === "document" ? t = ["Document", Ct, "DocumentExit"] : s.type === "root" ? t = ["Root", Ct, "RootExit"] : t = gr(s), {
    node: s,
    events: t,
    eventIndex: 0,
    visitors: [],
    visitorIndex: 0,
    iterator: 0
  };
}
function Ze(s) {
  return s[st] = !1, s.nodes && s.nodes.forEach((t) => Ze(t)), s;
}
let Qe = {};
class pt {
  constructor(t, e, n) {
    this.stringified = !1, this.processed = !1;
    let r;
    if (typeof e == "object" && e !== null && (e.type === "root" || e.type === "document"))
      r = Ze(e);
    else if (e instanceof pt || e instanceof Qs)
      r = Ze(e.root), e.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = e.map);
    else {
      let o = b3;
      n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
      try {
        r = o(e, n);
      } catch (i) {
        this.processed = !0, this.error = i;
      }
      r && !r[f3] && d3.rebuild(r);
    }
    this.result = new Qs(t, r, n), this.helpers = { ...Qe, result: this.result, postcss: Qe }, this.plugins = this.processor.plugins.map((o) => typeof o == "object" && o.prepare ? { ...o, ...o.prepare(this.result) } : o);
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.stringify().css;
  }
  get content() {
    return this.stringify().content;
  }
  get map() {
    return this.stringify().map;
  }
  get root() {
    return this.sync().root;
  }
  get messages() {
    return this.sync().messages;
  }
  warnings() {
    return this.sync().warnings();
  }
  toString() {
    return this.css;
  }
  then(t, e) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || m3(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(t, e);
  }
  catch(t) {
    return this.async().catch(t);
  }
  finally(t) {
    return this.async().then(t, t);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let t of this.plugins) {
      let e = this.runOnRoot(t);
      if (Ot(e))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let t = this.result.root;
      for (; !t[st]; )
        t[st] = !0, this.walkSync(t);
      if (this.listeners.OnceExit)
        if (t.type === "document")
          for (let e of t.nodes)
            this.visitSync(this.listeners.OnceExit, e);
        else
          this.visitSync(this.listeners.OnceExit, t);
    }
    return this.result;
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = !0, this.sync();
    let t = this.result.opts, e = p3;
    t.syntax && (e = t.syntax.stringify), t.stringifier && (e = t.stringifier), e.stringify && (e = e.stringify);
    let r = new h3(e, this.result.root, this.result.opts).generate();
    return this.result.css = r[0], this.result.map = r[1], this.result;
  }
  walkSync(t) {
    t[st] = !0;
    let e = gr(t);
    for (let n of e)
      if (n === Ct)
        t.nodes && t.each((r) => {
          r[st] || this.walkSync(r);
        });
      else {
        let r = this.listeners[n];
        if (r && this.visitSync(r, t.toProxy()))
          return;
      }
  }
  visitSync(t, e) {
    for (let [n, r] of t) {
      this.result.lastPlugin = n;
      let o;
      try {
        o = r(e, this.helpers);
      } catch (i) {
        throw this.handleError(i, e.proxyOf);
      }
      if (e.type !== "root" && e.type !== "document" && !e.parent)
        return !0;
      if (Ot(o))
        throw this.getAsyncError();
    }
  }
  runOnRoot(t) {
    this.result.lastPlugin = t;
    try {
      if (typeof t == "object" && t.Once) {
        if (this.result.root.type === "document") {
          let e = this.result.root.nodes.map(
            (n) => t.Once(n, this.helpers)
          );
          return Ot(e[0]) ? Promise.all(e) : e;
        }
        return t.Once(this.result.root, this.helpers);
      } else if (typeof t == "function")
        return t(this.result.root, this.result);
    } catch (e) {
      throw this.handleError(e);
    }
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(t, e) {
    let n = this.result.lastPlugin;
    try {
      if (e && e.addToError(t), this.error = t, t.name === "CssSyntaxError" && !t.plugin)
        t.plugin = n.postcssPlugin, t.setMessage();
      else if (n.postcssVersion && process.env.NODE_ENV !== "production") {
        let r = n.postcssPlugin, o = n.postcssVersion, i = this.result.processor.version, c = o.split("."), a = i.split(".");
        (c[0] !== a[0] || parseInt(c[1]) > parseInt(a[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + i + ", but " + r + " uses " + o + ". Perhaps this is the source of the error below."
        );
      }
    } catch (r) {
      console && console.error && console.error(r);
    }
    return t;
  }
  async runAsync() {
    this.plugin = 0;
    for (let t = 0; t < this.plugins.length; t++) {
      let e = this.plugins[t], n = this.runOnRoot(e);
      if (Ot(n))
        try {
          await n;
        } catch (r) {
          throw this.handleError(r);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let t = this.result.root;
      for (; !t[st]; ) {
        t[st] = !0;
        let e = [Ks(t)];
        for (; e.length > 0; ) {
          let n = this.visitTick(e);
          if (Ot(n))
            try {
              await n;
            } catch (r) {
              let o = e[e.length - 1].node;
              throw this.handleError(r, o);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [e, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = e;
          try {
            if (t.type === "document") {
              let r = t.nodes.map(
                (o) => n(o, this.helpers)
              );
              await Promise.all(r);
            } else
              await n(t, this.helpers);
          } catch (r) {
            throw this.handleError(r);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  prepareVisitors() {
    this.listeners = {};
    let t = (e, n, r) => {
      this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([e, r]);
    };
    for (let e of this.plugins)
      if (typeof e == "object")
        for (let n in e) {
          if (!w3[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${e.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!x3[n])
            if (typeof e[n] == "object")
              for (let r in e[n])
                r === "*" ? t(e, n, e[n][r]) : t(
                  e,
                  n + "-" + r.toLowerCase(),
                  e[n][r]
                );
            else
              typeof e[n] == "function" && t(e, n, e[n]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  visitTick(t) {
    let e = t[t.length - 1], { node: n, visitors: r } = e;
    if (n.type !== "root" && n.type !== "document" && !n.parent) {
      t.pop();
      return;
    }
    if (r.length > 0 && e.visitorIndex < r.length) {
      let [i, c] = r[e.visitorIndex];
      e.visitorIndex += 1, e.visitorIndex === r.length && (e.visitors = [], e.visitorIndex = 0), this.result.lastPlugin = i;
      try {
        return c(n.toProxy(), this.helpers);
      } catch (a) {
        throw this.handleError(a, n);
      }
    }
    if (e.iterator !== 0) {
      let i = e.iterator, c;
      for (; c = n.nodes[n.indexes[i]]; )
        if (n.indexes[i] += 1, !c[st]) {
          c[st] = !0, t.push(Ks(c));
          return;
        }
      e.iterator = 0, delete n.indexes[i];
    }
    let o = e.events;
    for (; e.eventIndex < o.length; ) {
      let i = o[e.eventIndex];
      if (e.eventIndex += 1, i === Ct) {
        n.nodes && n.nodes.length && (n[st] = !0, e.iterator = n.getIterator());
        return;
      } else if (this.listeners[i]) {
        e.visitors = this.listeners[i];
        return;
      }
    }
    t.pop();
  }
}
pt.registerPostcss = (s) => {
  Qe = s;
};
var mr = pt;
pt.default = pt;
y3.registerLazyResult(pt);
g3.registerLazyResult(pt);
let S3 = Qn, _3 = Se, T3 = ar, E3 = ys;
const C3 = gs;
class Ke {
  constructor(t, e, n) {
    e = e.toString(), this.stringified = !1, this._processor = t, this._css = e, this._opts = n, this._map = void 0;
    let r, o = _3;
    this.result = new C3(this._processor, r, this._opts), this.result.css = e;
    let i = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return i.root;
      }
    });
    let c = new S3(o, r, this._opts, e);
    if (c.isMap()) {
      let [a, l] = c.generate();
      a && (this.result.css = a), l && (this.result.map = l);
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.result.css;
  }
  get content() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get root() {
    if (this._root)
      return this._root;
    let t, e = E3;
    try {
      t = e(this._css, this._opts);
    } catch (n) {
      this.error = n;
    }
    if (this.error)
      throw this.error;
    return this._root = t, t;
  }
  get messages() {
    return [];
  }
  warnings() {
    return [];
  }
  toString() {
    return this._css;
  }
  then(t, e) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || T3(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(t, e);
  }
  catch(t) {
    return this.async().catch(t);
  }
  finally(t) {
    return this.async().then(t, t);
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
}
var A3 = Ke;
Ke.default = Ke;
let q3 = A3, O3 = mr, D3 = ds, L3 = zt;
class It {
  constructor(t = []) {
    this.version = "8.4.12", this.plugins = this.normalize(t);
  }
  use(t) {
    return this.plugins = this.plugins.concat(this.normalize([t])), this;
  }
  process(t, e = {}) {
    return this.plugins.length === 0 && typeof e.parser > "u" && typeof e.stringifier > "u" && typeof e.syntax > "u" ? new q3(this, t, e) : new O3(this, t, e);
  }
  normalize(t) {
    let e = [];
    for (let n of t)
      if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins))
        e = e.concat(n.plugins);
      else if (typeof n == "object" && n.postcssPlugin)
        e.push(n);
      else if (typeof n == "function")
        e.push(n);
      else if (typeof n == "object" && (n.parse || n.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(n + " is not a PostCSS plugin");
    return e;
  }
}
var N3 = It;
It.default = It;
L3.registerProcessor(It);
D3.registerProcessor(It);
let P3 = Te, k3 = Wn, R3 = Ce, $3 = ms, M3 = Ee, I3 = zt, j3 = bs;
function jt(s, t) {
  if (Array.isArray(s))
    return s.map((r) => jt(r));
  let { inputs: e, ...n } = s;
  if (e) {
    t = [];
    for (let r of e) {
      let o = { ...r, __proto__: M3.prototype };
      o.map && (o.map = {
        ...o.map,
        __proto__: k3.prototype
      }), t.push(o);
    }
  }
  if (n.nodes && (n.nodes = s.nodes.map((r) => jt(r, t))), n.source) {
    let { inputId: r, ...o } = n.source;
    n.source = o, r != null && (n.source.input = t[r]);
  }
  if (n.type === "root")
    return new I3(n);
  if (n.type === "decl")
    return new P3(n);
  if (n.type === "rule")
    return new j3(n);
  if (n.type === "comment")
    return new R3(n);
  if (n.type === "atrule")
    return new $3(n);
  throw new Error("Unknown node type: " + s.type);
}
var B3 = jt;
jt.default = jt;
let U3 = fs, br = Te, H3 = mr, V3 = wt, vs = N3, F3 = Se, z3 = B3, yr = ds, G3 = lr, vr = Ce, wr = ms, W3 = gs, Y3 = Ee, J3 = ys, X3 = pr, xr = bs, Sr = zt, Z3 = _e;
function E(...s) {
  return s.length === 1 && Array.isArray(s[0]) && (s = s[0]), new vs(s);
}
E.plugin = function(t, e) {
  console && console.warn && (console.warn(
    t + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
  ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
    t + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
  ));
  function n(...o) {
    let i = e(...o);
    return i.postcssPlugin = t, i.postcssVersion = new vs().version, i;
  }
  let r;
  return Object.defineProperty(n, "postcss", {
    get() {
      return r || (r = n()), r;
    }
  }), n.process = function(o, i, c) {
    return E([n(c)]).process(o, i);
  }, n;
};
E.stringify = F3;
E.parse = J3;
E.fromJSON = z3;
E.list = X3;
E.comment = (s) => new vr(s);
E.atRule = (s) => new wr(s);
E.decl = (s) => new br(s);
E.rule = (s) => new xr(s);
E.root = (s) => new Sr(s);
E.document = (s) => new yr(s);
E.CssSyntaxError = U3;
E.Declaration = br;
E.Container = V3;
E.Processor = vs;
E.Document = yr;
E.Comment = vr;
E.Warning = G3;
E.AtRule = wr;
E.Result = W3;
E.Input = Y3;
E.Rule = xr;
E.Root = Sr;
E.Node = Z3;
H3.registerPostcss(E);
var Q3 = E;
E.default = E;
const K3 = on, tn = WF, { isPlainObject: tG } = ls, en = az, eG = Fn.exports, { parse: sG } = Q3, nG = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], rG = ["script", "style"];
function Dt(s, t) {
  s && Object.keys(s).forEach(function(e) {
    t(s[e], e);
  });
}
function ct(s, t) {
  return {}.hasOwnProperty.call(s, t);
}
function sn(s, t) {
  const e = [];
  return Dt(s, function(n) {
    t(n) && e.push(n);
  }), e;
}
function oG(s) {
  for (const t in s)
    if (ct(s, t))
      return !1;
  return !0;
}
function iG(s) {
  return s.map(function(t) {
    if (!t.url)
      throw new Error("URL missing");
    return t.url + (t.w ? ` ${t.w}w` : "") + (t.h ? ` ${t.h}h` : "") + (t.d ? ` ${t.d}x` : "");
  }).join(", ");
}
var cG = Bt;
const aG = /^[^\0\t\n\f\r /<=>]+$/;
function Bt(s, t, e) {
  if (s == null)
    return "";
  let n = "", r = "";
  function o(u, g) {
    const m = this;
    this.tag = u, this.attribs = g || {}, this.tagPosition = n.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
      if (y.length) {
        const x = y[y.length - 1];
        x.text += m.text;
      }
    }, this.updateParentNodeMediaChildren = function() {
      y.length && nG.includes(this.tag) && y[y.length - 1].mediaChildren.push(this.tag);
    };
  }
  t = Object.assign({}, Bt.defaults, t), t.parser = Object.assign({}, lG, t.parser), rG.forEach(function(u) {
    t.allowedTags && t.allowedTags.indexOf(u) > -1 && !t.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${u}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const i = t.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let c, a;
  t.allowedAttributes && (c = {}, a = {}, Dt(t.allowedAttributes, function(u, g) {
    c[g] = [];
    const m = [];
    u.forEach(function(x) {
      typeof x == "string" && x.indexOf("*") >= 0 ? m.push(tn(x).replace(/\\\*/g, ".*")) : c[g].push(x);
    }), m.length && (a[g] = new RegExp("^(" + m.join("|") + ")$"));
  }));
  const l = {}, f = {}, h = {};
  Dt(t.allowedClasses, function(u, g) {
    c && (ct(c, g) || (c[g] = []), c[g].push("class")), l[g] = [], h[g] = [];
    const m = [];
    u.forEach(function(x) {
      typeof x == "string" && x.indexOf("*") >= 0 ? m.push(tn(x).replace(/\\\*/g, ".*")) : x instanceof RegExp ? h[g].push(x) : l[g].push(x);
    }), m.length && (f[g] = new RegExp("^(" + m.join("|") + ")$"));
  });
  const b = {};
  let w;
  Dt(t.transformTags, function(u, g) {
    let m;
    typeof u == "function" ? m = u : typeof u == "string" && (m = Bt.simpleTransform(u)), g === "*" ? w = m : b[g] = m;
  });
  let d, y, p, D, M, F, A = !1;
  j();
  const I = new K3.Parser({
    onopentag: function(u, g) {
      if (t.enforceHtmlBoundary && u === "html" && j(), M) {
        F++;
        return;
      }
      const m = new o(u, g);
      y.push(m);
      let x = !1;
      const G = !!m.text;
      let R;
      if (ct(b, u) && (R = b[u](u, g), m.attribs = g = R.attribs, R.text !== void 0 && (m.innerText = R.text), u !== R.tagName && (m.name = u = R.tagName, D[d] = R.tagName)), w && (R = w(u, g), m.attribs = g = R.attribs, u !== R.tagName && (m.name = u = R.tagName, D[d] = R.tagName)), (t.allowedTags && t.allowedTags.indexOf(u) === -1 || t.disallowedTagsMode === "recursiveEscape" && !oG(p) || t.nestingLimit != null && d >= t.nestingLimit) && (x = !0, p[d] = !0, t.disallowedTagsMode === "discard" && i.indexOf(u) !== -1 && (M = !0, F = 1), p[d] = !0), d++, x) {
        if (t.disallowedTagsMode === "discard")
          return;
        r = n, n = "";
      }
      n += "<" + u, u === "script" && (t.allowedScriptHostnames || t.allowedScriptDomains) && (m.innerText = ""), (!c || ct(c, u) || c["*"]) && Dt(g, function(N, O) {
        if (!aG.test(O)) {
          delete m.attribs[O];
          return;
        }
        let qe = !1;
        if (!c || ct(c, u) && c[u].indexOf(O) !== -1 || c["*"] && c["*"].indexOf(O) !== -1 || ct(a, u) && a[u].test(O) || a["*"] && a["*"].test(O))
          qe = !0;
        else if (c && c[u]) {
          for (const _ of c[u])
            if (tG(_) && _.name && _.name === O) {
              qe = !0;
              let T = "";
              if (_.multiple === !0) {
                const dt = N.split(" ");
                for (const ot of dt)
                  _.values.indexOf(ot) !== -1 && (T === "" ? T = ot : T += " " + ot);
              } else
                _.values.indexOf(N) >= 0 && (T = N);
              N = T;
            }
        }
        if (qe) {
          if (t.allowedSchemesAppliedToAttributes.indexOf(O) !== -1 && B(u, N)) {
            delete m.attribs[O];
            return;
          }
          if (u === "script" && O === "src") {
            let _ = !0;
            try {
              const T = Z(N);
              if (t.allowedScriptHostnames || t.allowedScriptDomains) {
                const dt = (t.allowedScriptHostnames || []).find(function(K) {
                  return K === T.url.hostname;
                }), ot = (t.allowedScriptDomains || []).find(function(K) {
                  return T.url.hostname === K || T.url.hostname.endsWith(`.${K}`);
                });
                _ = dt || ot;
              }
            } catch {
              _ = !1;
            }
            if (!_) {
              delete m.attribs[O];
              return;
            }
          }
          if (u === "iframe" && O === "src") {
            let _ = !0;
            try {
              const T = Z(N);
              if (T.isRelativeUrl)
                _ = ct(t, "allowIframeRelativeUrls") ? t.allowIframeRelativeUrls : !t.allowedIframeHostnames && !t.allowedIframeDomains;
              else if (t.allowedIframeHostnames || t.allowedIframeDomains) {
                const dt = (t.allowedIframeHostnames || []).find(function(K) {
                  return K === T.url.hostname;
                }), ot = (t.allowedIframeDomains || []).find(function(K) {
                  return T.url.hostname === K || T.url.hostname.endsWith(`.${K}`);
                });
                _ = dt || ot;
              }
            } catch {
              _ = !1;
            }
            if (!_) {
              delete m.attribs[O];
              return;
            }
          }
          if (O === "srcset")
            try {
              let _ = eG(N);
              if (_.forEach(function(T) {
                B("srcset", T.url) && (T.evil = !0);
              }), _ = sn(_, function(T) {
                return !T.evil;
              }), _.length)
                N = iG(sn(_, function(T) {
                  return !T.evil;
                })), m.attribs[O] = N;
              else {
                delete m.attribs[O];
                return;
              }
            } catch {
              delete m.attribs[O];
              return;
            }
          if (O === "class") {
            const _ = l[u], T = l["*"], dt = f[u], ot = h[u], K = f["*"], xs = [
              dt,
              K
            ].concat(ot).filter(function(_r) {
              return _r;
            });
            if (_ && T ? N = ft(N, en(_, T), xs) : N = ft(N, _ || T, xs), !N.length) {
              delete m.attribs[O];
              return;
            }
          }
          if (O === "style")
            try {
              const _ = sG(u + " {" + N + "}"), T = Q(_, t.allowedStyles);
              if (N = xt(T), N.length === 0) {
                delete m.attribs[O];
                return;
              }
            } catch {
              delete m.attribs[O];
              return;
            }
          n += " " + O, N && N.length && (n += '="' + z(N, !0) + '"');
        } else
          delete m.attribs[O];
      }), t.selfClosing.indexOf(u) !== -1 ? n += " />" : (n += ">", m.innerText && !G && !t.textFilter && (n += z(m.innerText), A = !0)), x && (n = r + z(n), r = "");
    },
    ontext: function(u) {
      if (M)
        return;
      const g = y[y.length - 1];
      let m;
      if (g && (m = g.tag, u = g.innerText !== void 0 ? g.innerText : u), t.disallowedTagsMode === "discard" && (m === "script" || m === "style"))
        n += u;
      else {
        const x = z(u, !1);
        t.textFilter && !A ? n += t.textFilter(x, m) : A || (n += x);
      }
      if (y.length) {
        const x = y[y.length - 1];
        x.text += u;
      }
    },
    onclosetag: function(u) {
      if (M)
        if (F--, !F)
          M = !1;
        else
          return;
      const g = y.pop();
      if (!g)
        return;
      M = t.enforceHtmlBoundary ? u === "html" : !1, d--;
      const m = p[d];
      if (m) {
        if (delete p[d], t.disallowedTagsMode === "discard") {
          g.updateParentNodeText();
          return;
        }
        r = n, n = "";
      }
      if (D[d] && (u = D[d], delete D[d]), t.exclusiveFilter && t.exclusiveFilter(g)) {
        n = n.substr(0, g.tagPosition);
        return;
      }
      if (g.updateParentNodeMediaChildren(), g.updateParentNodeText(), t.selfClosing.indexOf(u) !== -1) {
        m && (n = r, r = "");
        return;
      }
      n += "</" + u + ">", m && (n = r + z(n), r = ""), A = !1;
    }
  }, t.parser);
  return I.write(s), I.end(), n;
  function j() {
    n = "", d = 0, y = [], p = {}, D = {}, M = !1, F = 0;
  }
  function z(u, g) {
    return typeof u != "string" && (u = u + ""), t.parser.decodeEntities && (u = u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), g && (u = u.replace(/"/g, "&quot;"))), u = u.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), g && (u = u.replace(/"/g, "&quot;")), u;
  }
  function B(u, g) {
    for (g = g.replace(/[\x00-\x20]+/g, ""); ; ) {
      const G = g.indexOf("<!--");
      if (G === -1)
        break;
      const R = g.indexOf("-->", G + 4);
      if (R === -1)
        break;
      g = g.substring(0, G) + g.substring(R + 3);
    }
    const m = g.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!m)
      return g.match(/^[/\\]{2}/) ? !t.allowProtocolRelative : !1;
    const x = m[1].toLowerCase();
    return ct(t.allowedSchemesByTag, u) ? t.allowedSchemesByTag[u].indexOf(x) === -1 : !t.allowedSchemes || t.allowedSchemes.indexOf(x) === -1;
  }
  function Z(u) {
    if (u = u.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), u.startsWith("relative:"))
      throw new Error("relative: exploit attempt");
    let g = "relative://relative-site";
    for (let G = 0; G < 100; G++)
      g += `/${G}`;
    const m = new URL(u, g);
    return {
      isRelativeUrl: m && m.hostname === "relative-site" && m.protocol === "relative:",
      url: m
    };
  }
  function Q(u, g) {
    if (!g)
      return u;
    const m = u.nodes[0];
    let x;
    return g[m.selector] && g["*"] ? x = en(
      g[m.selector],
      g["*"]
    ) : x = g[m.selector] || g["*"], x && (u.nodes[0].nodes = m.nodes.reduce(ut(x), [])), u;
  }
  function xt(u) {
    return u.nodes[0].nodes.reduce(function(g, m) {
      return g.push(
        `${m.prop}:${m.value}${m.important ? " !important" : ""}`
      ), g;
    }, []).join(";");
  }
  function ut(u) {
    return function(g, m) {
      return ct(u, m.prop) && u[m.prop].some(function(G) {
        return G.test(m.value);
      }) && g.push(m), g;
    };
  }
  function ft(u, g, m) {
    return g ? (u = u.split(/\s+/), u.filter(function(x) {
      return g.indexOf(x) !== -1 || m.some(function(G) {
        return G.test(x);
      });
    }).join(" ")) : u;
  }
}
const lG = {
  decodeEntities: !0
};
Bt.defaults = {
  allowedTags: [
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1
};
Bt.simpleTransform = function(s, t, e) {
  return e = e === void 0 ? !0 : e, t = t || {}, function(n, r) {
    let o;
    if (e)
      for (o in t)
        r[o] = t[o];
    else
      r = t;
    return {
      tagName: s,
      attribs: r
    };
  };
};
const Ae = cG, nn = Ae.defaults, uG = {
  allowedTags: [
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr"
  ],
  allowedAttributes: {
    a: ["href", "name", "target"],
    span: ["style"]
  },
  allowedSchemes: ["ftp", "http", "https", "mailto"],
  selfClosing: ["br"],
  parser: {
    decodeEntities: !0
  }
}, fG = {
  allowedTags: !1,
  allowedAttributes: !1
}, hG = {
  allowedTags: [],
  allowedAttributes: []
};
function ws(s, t) {
  return Array.isArray(t) ? { config: t[0], input: t[1] } : s.strip ? { config: hG, input: t } : s.basic ? { config: nn, input: t } : s.inline ? { config: uG, input: t } : s.nothing ? { config: fG, input: t } : { config: nn, input: t };
}
function se(s, { modifiers: t, oldValue: e, value: n }) {
  if (n !== e) {
    const { config: r, input: o } = ws(t, n);
    s.innerHTML = Ae(o, r);
  }
}
function pG({ modifiers: s, value: t }) {
  const { config: e, input: n } = ws(s, t);
  return {
    innerHTML: Ae(n, e)
  };
}
function gG(s, { modifiers: t, value: e }) {
  const { config: n, input: r } = ws(t, e);
  s.data.domProps = s.data.domProps || {}, s.data.domProps.innerHTML = Ae(r, n);
}
const dG = {
  getSSRProps: pG,
  inserted: se,
  mounted: se,
  update: se,
  updated: se
}, mG = {
  install(s, { name: t = "sanitize" } = {}) {
    s.directive(t, dG);
  }
};
export {
  nn as FILTER_BASIC,
  uG as FILTER_INLINE,
  fG as FILTER_NOTHING,
  hG as FILTER_STRIP,
  gG as VueSanitizeDirectiveSSR,
  mG as default,
  dG as directive
};
