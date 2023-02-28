export function getLocalTime() {
	var date = new Date();
	var today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().replace(/T/, ' ').slice(0, -5); // avoid dot in json key name
	return today;
}

export function makeRandom() {
	return (Math.random() + 1).toString(36).substring(2)
}

export function makeRandomString(length: number) {
	var result: string[] = [];
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
	}
	return result.join('');
}

export function insertAt(strText: string, index: number, insertText: string) {
	return strText.substring(0, index) + insertText + strText.substring(index)
}

export function replaceAt(strText: string, index: number, replacementText: string) {
	return strText.substring(0, index) + replacementText + strText.substring(index + replacementText.length);
}

export function N2F(number: string) {
	// formattted a string numeric
	if (globalThis.Ababil_NumericFormat === 1) {
		// format kind: dot separator and decimal comma
		return number.toString()
			.replace('.', ',')
			.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	} else {
		// format kind: comma separator and decimal point
		return number.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
}

export function yyyyMMtoDate(yyyymm: string) {
	return new Date(insertAt(yyyymm, 4, '-') + '-01');
}


export function dateToYYYYMM(dt: Date) {
	var m = dt.getMonth() + 1;
	var y = dt.getFullYear();
	return '' + y + (m <= 9 ? '0' + m : m);
}

export function dateToYYYYMMDD(date: Date) {
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
	return '' + y + (m <= 9 ? '0' + m : m) + (d <= 9 ? '0' + d : d);
}

export function dataToYYYY_MM_DD(date: Date) {
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
	return `${y}-${(m <= 9 ? '0' + m : m)}-${(d <= 9 ? '0' + d : d)}`;
}

export function dateToHHMISS(date: Date) {
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	return '' + (h <= 9 ? '0' + h : h) + (m <= 9 ? '0' + m : m) + (s <= 9 ? '0' + s : s);
}

export function dateToHH_MI_SS(date: Date) {
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	return `${(h <= 9 ? '0' + h : h)}:${(m <= 9 ? '0' + m : m)}:${(s <= 9 ? '0' + s : s)}`;
}

export function dateToYYYYMMDDHHMISSZZZ(date: Date) {
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
	var h = date.getHours();
	var n = date.getMinutes();
	var s = date.getSeconds();
	var z = date.getMilliseconds();
	return '' + y + (m <= 9 ? '0' + m : m) + (d <= 9 ? '0' + d : d) + (h <= 9 ? '0' + h : h) + (n <= 9 ? '0' + n : n) + (s <= 9 ? '0' + s : s) + (z <= 9 ? '00' + z : (z <= 99 ? '0' + z : z));
}
