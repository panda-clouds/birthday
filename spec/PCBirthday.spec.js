
// const PCBirthday = require('../src/PCBirthday.js');
const PCParseRunner = require('@panda-clouds/parse-runner');

describe('test PCBirthday.js', () => {
	const parseRunner = new PCParseRunner();

	parseRunner.helperClass('./PCBirthday.js');
	parseRunner.projectDir(__dirname + '/..');

	beforeAll(async () => {
		await parseRunner.startParseServer();
	}, 1000 * 60 * 2);

	afterAll(async () => {
		await parseRunner.cleanUp();
	});


	describe('ageFromBirthday', () => {
		const nowEpoch = 1564766861593;

		it('should handle 1 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-08-01');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('1 Days');
		});

		it('should handle 2 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-31');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('2 Days');
		});

		it('should handle 3 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-30');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('3 Days');
		});
		it('should handle 4 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-29');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('4 Days');
		});
		it('should handle 5 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-28');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('5 Days');
		});
		it('should handle 6 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-27');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('6 Days');
		});
		it('should handle 7 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-26');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('7 Days');
		});
		it('should handle 8 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-25');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('8 Days');
		});
		it('should handle 9 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-24');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('9 Days');
		});
		it('should handle 10 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-23');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('10 Days');
		});

		it('should handle 11 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-22');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('11 Days');
		});

		it('should handle 12 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-21');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('12 Days');
		});

		it('should handle 13 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-20');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('13 Days');
		});

		it('should handle 14 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-19');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('14 Days');
		});

		it('should handle 15 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-18');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('15 Days');
		});

		it('should handle 16 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-17');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('16 Days');
		});

		it('should handle 17 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-16');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('17 Days');
		});

		it('should handle 18 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-15');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('18 Days');
		});

		it('should handle 19 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-14');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('19 Days');
		});

		it('should handle 20 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-13');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('20 Days');
		});

		it('should handle 21 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-12');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('21 Days');
		});

		it('should handle 22 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-11');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('22 Days');
		});

		it('should handle 23 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-10');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('23 Days');
		});

		it('should handle 24 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-09');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('24 Days');
		});

		it('should handle 25 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-08');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('25 Days');
		});

		it('should handle 26 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-07');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('26 Days');
		});

		it('should handle 27 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-06');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('27 Days');
		});

		it('should handle 28 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-05');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('28 Days');
		});

		it('should handle 29 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('29 Days');
		});

		it('should handle 30 day', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-03');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('30 Days');
		});

		it('should handle 1 month', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-07-01');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('1 Months');
		});

		it('should handle 2 Months b', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-06-25');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('2 Months');
		});

		it('should handle 2 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-06-01');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('2 Months');
		});

		it('should handle 3 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-05-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('3 Months');
		});

		it('should handle 4 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-04-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('4 Months');
		});

		it('should handle 5 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-03-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('5 Months');
		});

		it('should handle 6 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-02-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('6 Months');
		});

		it('should handle 7 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2019-01-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('7 Months');
		});

		it('should handle 8 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-12-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('8 Months');
		});

		it('should handle 9 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-11-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('9 Months');
		});

		it('should handle 10 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-10-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('10 Months');
		});

		it('should handle 11 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-09-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('11 Months');
		});

		it('should handle 12 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-08-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('12 Months');
		});

		it('should handle 13 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-07-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('13 Months');
		});

		it('should handle 14 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('14 Months');
		});

		it('should handle 15 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-05-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('15 Months');
		});

		it('should handle 16 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-04-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('16 Months');
		});

		it('should handle 17 Months begining', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-03-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('17 Months');
		});

		it('should handle 18 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-02-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('18 Months');
		});

		it('should handle 19 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2018-01-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('19 Months');
		});

		it('should handle 20 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-12-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('20 Months');
		});

		it('should handle 21 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-11-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('21 Months');
		});

		it('should handle 22 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-10-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('22 Months');
		});

		it('should handle 23 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-09-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('23 Months');
		});

		it('should handle 24 Months', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-08-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('24 Months');
		});

		it('should handle 2 Years A', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-07-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('2 Years');
		});

		it('should handle 2 Years B', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('2 Years');
		});

		it('should handle 2 Year C', async () => {
			expect.assertions(1);
			const birthday = new Date('2017-01-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('2 Years');
		});

		it('should handle 2 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2016-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('3 Years');
		});

		it('should handle 4 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2015-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('4 Years');
		});

		it('should handle 5 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2014-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('5 Years');
		});

		it('should handle 6 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2013-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('6 Years');
		});

		it('should handle 7 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2012-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('7 Years');
		});

		it('should handle 8 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2011-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('8 Years');
		});

		it('should handle 9 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2010-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('9 Years');
		});

		it('should handle 10 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2009-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('10 Years');
		});

		it('should handle 11 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2008-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('11 Years');
		});

		it('should handle 12 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2007-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('12 Years');
		});

		it('should handle 13 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2006-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('13 Years');
		});

		it('should handle 14 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2005-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('14 Years');
		});

		it('should handle 15 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2004-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('15 Years');
		});

		it('should handle 16 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2003-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('16 Years');
		});

		it('should handle 17 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2002-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('17 Years');
		});

		it('should handle 18 Year', async () => {
			expect.assertions(1);
			const birthday = new Date('2001-06-04');
			const now = new Date(nowEpoch);

			const results = await parseRunner.callHelper('ageFromBirthday', [birthday, now]);

			expect(results).toBe('18 Years');
		});
	});
});
