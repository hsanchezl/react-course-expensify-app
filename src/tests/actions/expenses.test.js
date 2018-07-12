import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const expected = {
		type: 'REMOVE_EXPENSE',
		id: 'anna'
	}
	const result = removeExpense({ id: 'anna' });
	expect(result).toEqual(expected);
});

test('should setup edit expense action object', () => {
	const expected = {
		type: 'EDIT_EXPENSE',
		id: 'anna',
		updates: {
			note: 'Anna es sexy'
		}
	}
	const result = editExpense('anna', { note: 'Anna es sexy' });
	expect(result).toEqual(expected);
});

test('should setup add expense action with provided values', () => {
	const input = {
		description: 'Rent',
		amount: '209500',
		createdAt: 1000,
		note: 'This was last month'
	};
	const result = addExpense(input);
	const expected = {
		type: 'ADD_EXPENSE',
		expense: {
			...input,
			id: expect.any(String)
		}
	};
	expect(result).toEqual(expected);
});

test('should setup add expense action with default values', () => {
	const input = {};
	const result = addExpense(input);
	const expected = {
		type: 'ADD_EXPENSE',
		expense: {
			description: '',
			note: '',
			amount: 0,
			createdAt: 0,
			id: expect.any(String)
		}
	};
	expect(result).toEqual(expected);
});
