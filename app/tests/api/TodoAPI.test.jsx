var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'test files',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid array', () => {
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });
        it('should return todos with valid array', () => {
            var todos = [{
                id: 23,
                text: 'test files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
});