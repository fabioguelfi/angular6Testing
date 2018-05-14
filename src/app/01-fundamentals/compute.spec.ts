import { compute } from './compute';

describe('compute', () => {

    it('should return 0 if input in negative', () => {
        const result = compute(-1);
        expect(0).toBe(result);
    })

})