/**
 * @jest-environment jsdom
 */
//import the file to test
import { pushToHistory } from '../scripts/router.js';
//test if the length of the history is correct
describe('length of the history stack', () =>{
    test('Test: length', () => {
        pushToHistory('entry', 5);
        pushToHistory('settings', 0);
        pushToHistory(' ',0);
        pushToHistory('entry', 7);
        expect(history.length).toBe(5);
    });
    test('Test: length', () => {
        pushToHistory('entry', 5);
        pushToHistory('settings', 0);
        expect(history.length).toBe(7);
    });
});
//test if the state is correct
describe('the current state object', () =>{
    test('Test: entry', () => {
        pushToHistory('entry', 7);
        expect(history.state.page).toBe('entry7');
    });
    test('Test: settings', () => {
        pushToHistory('settings', 0);
        expect(history.state.page).toBe('settings');
    });
    test('Test: home', () => {
        pushToHistory('home', 0);
        expect(history.state.page).toBe(undefined);
        expect(history.state.page).not.toBe('settings');
    });
});

