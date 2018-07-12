import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set text filter action object with text value', () => {
	const input = 'Anna';
	const result = setTextFilter(input);
	const expected = {
		type: 'SET_TEXT_FILTER',
		text: input
	};
	expect(result).toEqual(expected);
});

test('should generate set text filter action object with default value', () => {
	const result = setTextFilter();
	const expected = {
		type: 'SET_TEXT_FILTER',
		text: ''
	};
	expect(result).toEqual(expected);
});

test('should generate action object for sort by date', () => {
	expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate action object for sort by amount', () => {
	expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate set start date action object', () => {
	const input = moment(0);
	const result = setStartDate(input);
	const expected = {
		type: 'SET_START_DATE',
		startDate: input
	};
	expect(result).toEqual(expected);
});

test('should generate set end date action object', () => {
	const input = moment(0);
	const result = setEndDate(input);
	const expected = {
		type: 'SET_END_DATE',
		endDate: input
	};
	expect(result).toEqual(expected);
});
