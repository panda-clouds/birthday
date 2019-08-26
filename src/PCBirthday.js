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
	static ageFromBirthday(inputBirthday, onDate) {
		let now;
		let birthday;

		if (onDate) {
			now = onDate;
		} else {
			now = new Date();
		}

		if (!inputBirthday) {
			return 'Missing birthday';
		}

		// If we didn't recieve a date object
		if (inputBirthday instanceof Date) {
			// use the provided date
			birthday = inputBirthday;
		} else {
			// attempt to construct a date object
			birthday = new Date(inputBirthday);
		}

		// if we don't have a valid birthday
		if (isNaN(birthday)) {
			return 'Invalid birthday';
		}

		let age = now.getFullYear() - birthday.getFullYear();
		const m = now.getMonth() - birthday.getMonth();
		// const days = (now - birthday)/
		const day =  Math.floor((now - birthday) / (24 * 60 * 60 * 1000));
		const test = (age * 12) + m;

		if (test <= 1 && age < 1 && (day <= 30 || day <= 31)) {
			return day + ' Days';
		} else if (test <= 24) {
			return (age * 12 + m) + ' Months';
		}

		if (now.getDate() < birthday.getDate()) {
		      age -= 1;
		    }

		return age + ' Years';
	}
}

module.exports = PCBirthday;
