// class <> {
// 	constructor() {
// 		// Empty Constructor
// 	}
//
// 	static pass() {
// 		return dic;
// 	}
// }
//
// module.exports = <>;
class PCBirthday {
	static ageFromBirthday(birthday, onDate) {
		const now = onDate;
		const birthDate = birthday;

		let age = now.getFullYear() - birthDate.getFullYear();
		const m = now.getMonth() - birthDate.getMonth();
		// const days = (now - birthday)/
		const day =  Math.floor((now - birthDate) / (24 * 60 * 60 * 1000));
		const test = (age * 12) + m;

		if (test <= 1 && age < 1 && (day <= 30 || day <= 31)) {
			age = day + ' Days';
		} else if (test <= 24) {
			age = (age * 12 + m) + ' Months';
		} else {
			age = (Number(age) * 1) + ' Years';
		}
		// if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
	  //      age = age--;
		// 	 }
		// const day =  Math.floor((birthDate.getDate()) - now.getDate() / (1000 * 60 * 60 * 24));


		return age;
	}
}

module.exports = PCBirthday;
