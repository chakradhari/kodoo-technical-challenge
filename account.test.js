const expect = require('chai').expect;
const accountTypeChecker = require('./account');

const accountBalanceHistoryConstant = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 25 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 50 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 75 },
        },
    }
]

const accountBalanceHistoryVariable = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 20 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 160 },
        },
    }
]

describe(" Account type checker", () => {
    it(' should return B if balance is constant', () => {
        expect(accountTypeChecker(accountBalanceHistoryConstant)).to.eql("B")
    })

    it(' should return A if balance is variable', () => {
        expect(accountTypeChecker(accountBalanceHistoryVariable)).to.eql("A")
    })
})


