/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export class ObjectComparisonUtils {
    static shallowEqualObjects(objA, objB) {
        if (objA === objB) {
            return true;
        }
        if (!objA || !objB) {
            return false;
        }
        const aKeys = Object.keys(objA);
        const bKeys = Object.keys(objB);
        const aKeysLen = aKeys.length;
        const bKeysLen = bKeys.length;
        if (aKeysLen !== bKeysLen) {
            return false;
        }
        for (let i = 0; i < aKeysLen; i++) {
            const key = aKeys[i];
            if (objA[key] !== objB[key]) {
                return false;
            }
        }
        return true;
    }
    static deepEqualObjects(objA, objB) {
        if (objA === objB) {
            return true; // if both objA and objB are null or undefined and exactly the same
        }
        else if (!(objA instanceof Object) || !(objB instanceof Object)) {
            return false; // if they are not strictly equal, they both need to be Objects
        }
        else if (objA.constructor !== objB.constructor) {
            // they must have the exact same prototype chain, the closest we can do is
            // test their constructor.
            return false;
        }
        else {
            return this.compareObjectProperties(objA, objB);
        }
    }
    static compareObjectProperties(objA, objB) {
        for (const key in objA) {
            if (!objA.hasOwnProperty(key)) {
                continue; // other properties were tested using objA.constructor === y.constructor
            }
            if (!objB.hasOwnProperty(key)) {
                return false; // allows to compare objA[ key ] and objB[ key ] when set to undefined
            }
            if (objA[key] === objB[key]) {
                continue; // if they have the same strict value or identity then they are equal
            }
            if (typeof objA[key] !== 'object') {
                return false; // Numbers, Strings, Functions, Booleans must be strictly equal
            }
            if (!this.deepEqualObjects(objA[key], objB[key])) {
                return false;
            }
        }
        for (const key in objB) {
            if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    static countOfDeepEqualObjects(obj, arr) {
        return arr.reduce((acc, curr) => {
            if (this.deepEqualObjects(obj, curr)) {
                acc++;
            }
            return acc;
        }, 0);
    }
    static indexOfFirstOccurrence(obj, arr) {
        for (let index = 0; index < arr.length; index++) {
            if (this.deepEqualObjects(arr[index], obj)) {
                return index;
            }
        }
    }
}
// CHECK SONAR
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWNvbXBhcmlzb24tdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL29iamVjdC1jb21wYXJpc29uLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUNuRCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzlCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFOUIsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxHQUFtQixDQUFDLEtBQUssSUFBSSxDQUFDLEdBQW1CLENBQUMsRUFBRTtnQkFDM0QsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQVksRUFBRSxJQUFZO1FBQ2hELElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxDQUFDLG1FQUFtRTtTQUNqRjthQUFNLElBQUksQ0FBQyxDQUFDLElBQUksWUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sS0FBSyxDQUFDLENBQUMsK0RBQStEO1NBQzlFO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEQsMEVBQTBFO1lBQzFFLDBCQUEwQjtZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRVMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLElBQVksRUFBRSxJQUFZO1FBQ2pFLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixTQUFTLENBQUMsd0VBQXdFO2FBQ25GO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDLENBQUMsc0VBQXNFO2FBQ3JGO1lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBbUIsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFtQixDQUFDLEVBQUU7Z0JBQzNELFNBQVMsQ0FBQyxxRUFBcUU7YUFDaEY7WUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQW1CLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2pELE9BQU8sS0FBSyxDQUFDLENBQUMsK0RBQStEO2FBQzlFO1lBQ0QsSUFDRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLEdBQW1CLENBQUMsRUFDekIsSUFBSSxDQUFDLEdBQW1CLENBQUMsQ0FDMUIsRUFDRDtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN6RCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUMsdUJBQXVCLENBQUMsR0FBUSxFQUFFLEdBQWU7UUFDdEQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDcEMsR0FBRyxFQUFFLENBQUM7YUFDUDtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFRLEVBQUUsR0FBZTtRQUNyRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7Q0FDRjtBQUVELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0Q29tcGFyaXNvblV0aWxzIHtcbiAgc3RhdGljIHNoYWxsb3dFcXVhbE9iamVjdHMob2JqQTogb2JqZWN0LCBvYmpCOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghb2JqQSB8fCAhb2JqQikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMob2JqQik7XG4gICAgY29uc3QgYUtleXNMZW4gPSBhS2V5cy5sZW5ndGg7XG4gICAgY29uc3QgYktleXNMZW4gPSBiS2V5cy5sZW5ndGg7XG5cbiAgICBpZiAoYUtleXNMZW4gIT09IGJLZXlzTGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYUtleXNMZW47IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG4gICAgICBpZiAob2JqQVtrZXkgYXMga2V5b2YgT2JqZWN0XSAhPT0gb2JqQltrZXkgYXMga2V5b2YgT2JqZWN0XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGRlZXBFcXVhbE9iamVjdHMob2JqQTogb2JqZWN0LCBvYmpCOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgICAgcmV0dXJuIHRydWU7IC8vIGlmIGJvdGggb2JqQSBhbmQgb2JqQiBhcmUgbnVsbCBvciB1bmRlZmluZWQgYW5kIGV4YWN0bHkgdGhlIHNhbWVcbiAgICB9IGVsc2UgaWYgKCEob2JqQSBpbnN0YW5jZW9mIE9iamVjdCkgfHwgIShvYmpCIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBpZiB0aGV5IGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwsIHRoZXkgYm90aCBuZWVkIHRvIGJlIE9iamVjdHNcbiAgICB9IGVsc2UgaWYgKG9iakEuY29uc3RydWN0b3IgIT09IG9iakIuY29uc3RydWN0b3IpIHtcbiAgICAgIC8vIHRoZXkgbXVzdCBoYXZlIHRoZSBleGFjdCBzYW1lIHByb3RvdHlwZSBjaGFpbiwgdGhlIGNsb3Nlc3Qgd2UgY2FuIGRvIGlzXG4gICAgICAvLyB0ZXN0IHRoZWlyIGNvbnN0cnVjdG9yLlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlT2JqZWN0UHJvcGVydGllcyhvYmpBLCBvYmpCKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIGNvbXBhcmVPYmplY3RQcm9wZXJ0aWVzKG9iakE6IG9iamVjdCwgb2JqQjogb2JqZWN0KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqQSkge1xuICAgICAgaWYgKCFvYmpBLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29udGludWU7IC8vIG90aGVyIHByb3BlcnRpZXMgd2VyZSB0ZXN0ZWQgdXNpbmcgb2JqQS5jb25zdHJ1Y3RvciA9PT0geS5jb25zdHJ1Y3RvclxuICAgICAgfVxuICAgICAgaWYgKCFvYmpCLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBhbGxvd3MgdG8gY29tcGFyZSBvYmpBWyBrZXkgXSBhbmQgb2JqQlsga2V5IF0gd2hlbiBzZXQgdG8gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBpZiAob2JqQVtrZXkgYXMga2V5b2YgT2JqZWN0XSA9PT0gb2JqQltrZXkgYXMga2V5b2YgT2JqZWN0XSkge1xuICAgICAgICBjb250aW51ZTsgLy8gaWYgdGhleSBoYXZlIHRoZSBzYW1lIHN0cmljdCB2YWx1ZSBvciBpZGVudGl0eSB0aGVuIHRoZXkgYXJlIGVxdWFsXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9iakFba2V5IGFzIGtleW9mIE9iamVjdF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gTnVtYmVycywgU3RyaW5ncywgRnVuY3Rpb25zLCBCb29sZWFucyBtdXN0IGJlIHN0cmljdGx5IGVxdWFsXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmRlZXBFcXVhbE9iamVjdHMoXG4gICAgICAgICAgb2JqQVtrZXkgYXMga2V5b2YgT2JqZWN0XSxcbiAgICAgICAgICBvYmpCW2tleSBhcyBrZXlvZiBPYmplY3RdXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iakIpIHtcbiAgICAgIGlmIChvYmpCLmhhc093blByb3BlcnR5KGtleSkgJiYgIW9iakEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGNvdW50T2ZEZWVwRXF1YWxPYmplY3RzKG9iajogYW55LCBhcnI6IEFycmF5PGFueT4pOiBudW1iZXIge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgIGlmICh0aGlzLmRlZXBFcXVhbE9iamVjdHMob2JqLCBjdXJyKSkge1xuICAgICAgICBhY2MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZkZpcnN0T2NjdXJyZW5jZShvYmo6IGFueSwgYXJyOiBBcnJheTxhbnk+KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHRoaXMuZGVlcEVxdWFsT2JqZWN0cyhhcnJbaW5kZXhdLCBvYmopKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ0hFQ0sgU09OQVJcbiJdfQ==