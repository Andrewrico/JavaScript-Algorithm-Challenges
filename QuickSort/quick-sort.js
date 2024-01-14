class Comparator {
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    static defaultCompareFunction(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}

class Sort {
    constructor(originalCallbacks) {
        this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
        this.comparator = new Comparator(this.callbacks.compareCallback);
    }

    static initSortingCallbacks(originalCallbacks) {
        const callbacks = originalCallbacks || {};
        const stubCallback = () => { };

        callbacks.compareCallback = callbacks.compareCallback || undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

        return callbacks;
    }

    sort() {
        throw new Error('sort method must be implemented');
    }
}

class QuickSort extends Sort {
    sort(originalArray) {
        const array = [...originalArray];

        if (array.length <= 1) {
            return array;
        }

        const leftArray = [];
        const rightArray = [];

        const pivotElement = array.shift();
        const centerArray = [pivotElement];

        while (array.length) {
            const currentElement = array.shift();
            this.callbacks.visitingCallback(currentElement);

            if (this.comparator.equal(currentElement, pivotElement)) {
                centerArray.push(currentElement);
            } else if (this.comparator.lessThan(currentElement, pivotElement)) {
                leftArray.push(currentElement);
            } else {
                rightArray.push(currentElement);
            }
        }

        const leftArraySorted = this.sort(leftArray);
        const rightArraySorted = this.sort(rightArray);

        return leftArraySorted.concat(centerArray, rightArraySorted);
    }
}
