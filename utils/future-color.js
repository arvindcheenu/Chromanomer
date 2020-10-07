function multiplyMatrices(A, B) {
    /**
     * Simple matrix (and vector) multiplication
     * @author Lea Verou 2020 MIT License
     */
	let m = A.length;
	if (!Array.isArray(A[0])) { A = [A]; }
	if (!Array.isArray(B[0])) { B = B.map(x => [x]); }
	let p = B[0].length;
	let B_cols = B[0].map((_, i) => B.map(x => x[i]));
	let product = A.map(row => B_cols.map(col => {
		if (!Array.isArray(row)) { return col.reduce((a, c) => a + c * row, 0); }
		return row.reduce((a, c, i) => a + c * (col[i] || 0), 0);
	}));
	if (m === 1) { product = product[0]; }
	if (p === 1) { return product.map(x => x[0]); }
	return product;
}
function gam_sRGB(RGB) {
	/**
     * Convert an array of linear-light sRGB values in the range 0.0-1.0
     * https://en.wikipedia.org/wiki/SRGB
     */ 
	return RGB.map(function (val) {
		if (val > 0.0031308) {
			return 1.055 * Math.pow(val, 1/2.4) - 0.055;
		}
		return 12.92 * val;
	});
}

function XYZ_to_lin_sRGB(XYZ) {
	// convert XYZ to linear-light sRGB
	var M = [
		[ 3.2404542, -1.5371385, -0.4985314],
		[-0.9692660,  1.8760108,  0.0415560],
		[ 0.0556434, -0.2040259,  1.0572252]
	];
	return multiplyMatrices(M, XYZ);
}
function XYZ_to_lin_P3(XYZ) {
	// convert XYZ to linear-light P3
	var M = [
		[ 2.493496911941425,   -0.9313836179191239, -0.40271078445071684],
		[-0.8294889695615747,   1.7626640603183463,  0.023624685841943577],
		[ 0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
	];
	return multiplyMatrices(M, XYZ);
}
function D50_to_D65(XYZ) {
	// Bradford chromatic adaptation from D50 to D65
	var M = [
		[ 0.9555766, -0.0230393,  0.0631636],
		[-0.0282895,  1.0099416,  0.0210077],
		[ 0.0122982, -0.0204830,  1.3299098]
	 ];
	return multiplyMatrices(M, XYZ);
}
function Lab_to_XYZ(Lab) {
	/** 
     * Convert Lab to D50-adapted XYZ
	 * http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
    */ 
	var kappa = 24389/27;   // 29^3/3^3
	var epsilon = 216/24389;  // 6^3/29^3
	var white = [0.96422, 1.00000, 0.82521]; // D50 reference white
	var f = [];
	f[1] = (Lab[0] + 16)/116;
	f[0] = Lab[1]/500 + f[1];
	f[2] = f[1] - Lab[2]/200;
	var xyz = [
		Math.pow(f[0],3) > epsilon  ?  Math.pow(f[0],3)            : (116*f[0]-16)/kappa,
		Lab[0] > kappa * epsilon    ?  Math.pow((Lab[0]+16)/116,3) : Lab[0]/kappa,
		Math.pow(f[2],3)  > epsilon ?  Math.pow(f[2],3)            : (116*f[2]-16)/kappa
	];
	return xyz.map((value, i) => value * white[i]);
}
function LCH_to_Lab(LCH) {
	return [
		LCH[0],
		LCH[1] * Math.cos(LCH[2] * Math.PI / 180),
		LCH[1] * Math.sin(LCH[2] * Math.PI / 180)
	];
}
function LCH_to_sRGB(LCH) {
    return gam_sRGB(XYZ_to_lin_sRGB(D50_to_D65(Lab_to_XYZ(LCH_to_Lab(LCH)))));
}
function LCH_to_P3(LCH) {
    return gam_sRGB(XYZ_to_lin_P3(D50_to_D65(Lab_to_XYZ(LCH_to_Lab(LCH)))));
}
function force_into_gamut(l, c, h, isLCH_within) {
	if (isLCH_within(l, c, h)) { return [l, c, h]; }
	let hiC = c;
	let loC = 0;
	const ε = .0001;
	c /= 2;
	while (hiC - loC > ε) {
		if (isLCH_within(l, c, h)) { loC = c; }
		else { hiC = c; }
		c = (hiC + loC)/2;
	}
	return [l, c, h];
}
function isLCH_within_sRGB(l, c, h) {
	var rgb = LCH_to_sRGB([+l, +c, +h]);
	const ε = .000005;
	return rgb.reduce((a, b) => a && b >= (0 - ε) && b <= (1 + ε), true);
}
function isLCH_within_P3(l, c, h) {
	var rgb = LCH_to_P3([+l, +c, +h]);
	const ε = .000005;
	return rgb.reduce((a, b) => a && b >= (0 - ε) && b <= (1 + ε), true);
}
function alpha_to_string(a = 100) {
	return (a < 100? ` / ${a}%` : "");
}
function LCH_to_P3_string(l, c, h, a = 100) {
	const [L, C, H]  = force_into_gamut(l, c, h, isLCH_within_P3);
	return "color(display-p3 " + LCH_to_P3([+l, +c, +h]).map(x => {
		x = Math.round(x * 10000)/10000;
		return x;
	}).join(" ") + alpha_to_string(a) + ")";
}

function LCH_to_sRGB_string(l, c, h, a = 100) {
	const [L, C, H] = force_into_gamut(l, c, h, isLCH_within_sRGB);
	return "rgba(" + LCH_to_sRGB([+L, +C, +H]).map(x => {
		return Math.round(x * 10000)/100 + "%";
	}).join(", ") + ", " + a/100 + ")";
}
module.exports = { srgb : LCH_to_sRGB_string, p3: LCH_to_P3_string, asAlpha: alpha_to_string };