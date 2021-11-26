import { validateURL } from '../js/urlValidation';

describe('Testing validateURL() Function', () => {
    test('Function Should be Defined', () => {
        expect(validateURL).toBeDefined();
    });

    test('Testing the True Case', () => {
        const exampleURL = 'https://www.linkedin.com/in/mahmoud-mamdouh-88b72a195/';

        expect(validateURL(exampleURL)).toBeTruthy();
    });

    test('Testing the False Case', () => {
        const exampleURL = 'www.google.c';

        expect(validateURL(exampleURL)).toBeFalsy();
    })
})