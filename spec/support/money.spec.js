function money(x) {
    return (x/100).toFixed(2);
}

describe("money", () => {
    it("should return a string", () => {
        expect(money(100)).toBe("1.00");
        expect(money(0)).toBe("0.00");
    });
})