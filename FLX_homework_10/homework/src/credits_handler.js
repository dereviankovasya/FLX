function userCard(myIndex) {
    let transactionLimit = 100,
        balance = 100,
        historyLogs = [],
        key = myIndex,
        date = new Date().toLocaleString('en-GB');
    let tax = 0.005;

    function getCardOptions() {
        return {
            key: key,
            balance: balance,
            transactionLimit: transactionLimit,
            historyLogs: historyLogs
        };
    }

    function historyLog(operation, amount) {
        historyLogs.push({
            operation: operation,
            amount: amount,
            operationTime: date
        });
    }

    function putCredits(amountOfCredits) {
        balance += amountOfCredits;
        historyLog('Received credits:', amountOfCredits);
    }

    function takeCredits(amountOfCredits) {
        if (transactionLimit < amountOfCredits || balance < amountOfCredits) {
            console.log('error :Please, check your transaction and balance.');
            return false;
        } else {
            balance -= amountOfCredits;
            historyLog('error: no credits', amountOfCredits);
            return true;
        }
    }

    function setTransactionLimit(amountOfCredits) {
        transactionLimit = amountOfCredits;
        historyLog('Transaction limit change', amountOfCredits);
    }

    function transferCredits(amountOfCredits, card) {
        if (card === this) {
            console.log('error: Please, check your card details and try again');
            return;
        }
        if (takeCredits(amountOfCredits + tax * amountOfCredits)) {
            card.putCredits(amountOfCredits);
        }
    }

    return {
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    };
}

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardsNum = 3;
    }

    addCard() {
        if (this.cards.length < this.cardsNum) {
            let card = userCard(this.cards.length + 1);
            this.cards.push(card);
        } else {
            console.log('error:number of cards is exceeded.');
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
