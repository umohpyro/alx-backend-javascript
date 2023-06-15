/**
 * Test calculateNumber function
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber", function () {
    it("should return 0 with 0.1 and 0.4", function () {
        assert.equal(calculateNumber(0.1, 0.4), 0);
    });
    it("should return 1 with 0.1 and 0.5", function () {
        assert.equal(calculateNumber(0.1, 0.5), 1);
    });
    it("should return 4 with 1 and 3", function () {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it("should return 5 with 1 and 3.7", function () {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it("should return 5 with 1.4 and 3.7", function () {
        assert.equal(calculateNumber(1.4, 3.7), 5);
    });
    it("should return 6 with 1.5 and 3.7", function () {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it("should return 0 with -0.1 and 0.4", function () {
        assert.equal(calculateNumber(-0.1, 0.4), 0);
    });
    it("should return 0 with -0.1 and -0.4", function () {
        assert.equal(calculateNumber(-0.1, -0.4), 0);
    });
    it("should return 0 with -0.1 and -0.5", function () {
        assert.equal(calculateNumber(-0.1, -0.5), 0);
    });
    it("should return -1 with -1.5 and -0.5", function () {
        assert.equal(calculateNumber(-1.5, -0.5), -1);
    });
    it("should return -3 with -1.6 and -0.6", function () {
        assert.equal(calculateNumber(-1.6, -0.6), -3);
    });
    it("should return 0 with -1.1 and 1.1", function () {
        assert.equal(calculateNumber(-1.1, 1.1), 0);
    });
    it("should return -4 with -1 and -3", function () {
        assert.equal(calculateNumber(-1, -3), -4);
    });
    it("should return 3 with -1 and 3.7", function () {
        assert.equal(calculateNumber(-1, 3.7), 3);
    });
    it("should return -3 with 1 and -3.7", function () {
        assert.equal(calculateNumber(1, -3.7), -3);
    });
    it("should return -5 with -1 and -3.7", function () {
        assert.equal(calculateNumber(-1, -3.7), -5);
    });
    it("should return -5 with -1.4 and -3.7", function () {
        assert.equal(calculateNumber(-1.4, -3.7), -5);
    });
    it("should return 3 with -1.4 and 3.7", function () {
        assert.equal(calculateNumber(-1.4, 3.7), 3);
    });
    it("should return -3 with -1.4 and -3.7", function () {
        assert.equal(calculateNumber(1.4, -3.7), -3);
    });
    it("should return -5 with -1.5 and -3.7", function () {
        assert.equal(calculateNumber(-1.5, -3.7), -5);
    });
    it("should return -2 with 1.5 and -3.7", function () {
        assert.equal(calculateNumber(1.5, -3.7), -2);
    });
    it("should return 3 with -1.5 and 3.7", function () {
        assert.equal(calculateNumber(-1.5, 3.7), 3);
    });
    it("should return -6 with -1.6 and -3.7", function () {
        assert.equal(calculateNumber(-1.6, -3.7), -6);
    });
    it("should return 2 with -1.6 and 3.7", function () {
        assert.equal(calculateNumber(-1.6, 3.7), 2);
    });
    it("should return 2 with -1.6 and 3.7", function () {
        assert.equal(calculateNumber(-1.6, 3.7), 2);
    });
    it('should return 0 with 0 and 0', function () {
		assert.equal(calculateNumber(0, 0), 0);
	});
	it('should return 10 with 10 and 0', function () {
		assert.equal(calculateNumber(10, 0), 10);
	});
	it('should return -10 with 0 and -10', function () {
		assert.equal(calculateNumber(0, -10), -10);
	});
	it('should return 1000000 with 999999 and 1', function () {
		assert.equal(calculateNumber(999999, 1), 1000000);
	});
	it('should return -1000000 with -999999 and -1', function () {
		assert.equal(calculateNumber(-999999, -1), -1000000);
	});
	it('should return 1 with 0.3 and 0.7', function () {
		assert.equal(calculateNumber(0.3, 0.7), 1);
	});
	it('should return -1 with -0.3 and -0.7', function () {
		assert.equal(calculateNumber(-0.3, -0.7), -1);
	});
});
