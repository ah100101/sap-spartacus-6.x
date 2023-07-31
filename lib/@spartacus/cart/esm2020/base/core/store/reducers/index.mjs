/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { InjectionToken } from '@angular/core';
import { AuthActions, StateUtils } from '@spartacus/core';
import { MULTI_CART_DATA } from '../multi-cart-state';
import { cartEntitiesReducer, cartTypeIndexReducer, } from './multi-cart.reducer';
export function clearMultiCartState(reducer) {
    return function (state, action) {
        if (action.type === AuthActions.LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
export const multiCartMetaReducers = [clearMultiCartState];
export const multiCartReducerToken = new InjectionToken('MultiCartReducers');
export function getMultiCartReducers() {
    return {
        carts: StateUtils.entityProcessesLoaderReducer(MULTI_CART_DATA, cartEntitiesReducer),
        index: cartTypeIndexReducer,
    };
}
export const multiCartReducerProvider = {
    provide: multiCartReducerToken,
    useFactory: getMultiCartReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvY2FydC9iYXNlL2NvcmUvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQWtCLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsb0JBQW9CLEdBQ3JCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUEyQjtJQUUzQixPQUFPLFVBQVUsS0FBSyxFQUFFLE1BQU07UUFDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQXVCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUUvRSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FFOUIsSUFBSSxjQUFjLENBQW1DLG1CQUFtQixDQUFDLENBQUM7QUFFOUUsTUFBTSxVQUFVLG9CQUFvQjtJQUNsQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyw0QkFBNEIsQ0FDNUMsZUFBZSxFQUNmLG1CQUFtQixDQUNwQjtRQUNELEtBQUssRUFBRSxvQkFBb0I7S0FDNUIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBYTtJQUNoRCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLFVBQVUsRUFBRSxvQkFBb0I7Q0FDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgQWN0aW9uUmVkdWNlck1hcCwgTWV0YVJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jYXJ0L2Jhc2Uvcm9vdCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucywgU3RhdGVVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTdGF0ZSwgTVVMVElfQ0FSVF9EQVRBIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBjYXJ0RW50aXRpZXNSZWR1Y2VyLFxuICBjYXJ0VHlwZUluZGV4UmVkdWNlcixcbn0gZnJvbSAnLi9tdWx0aS1jYXJ0LnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNdWx0aUNhcnRTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+XG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0TWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJNdWx0aUNhcnRTdGF0ZV07XG5cbmV4cG9ydCBjb25zdCBtdWx0aUNhcnRSZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlPj4oJ011bHRpQ2FydFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNdWx0aUNhcnRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlLCBhbnk+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0czogU3RhdGVVdGlscy5lbnRpdHlQcm9jZXNzZXNMb2FkZXJSZWR1Y2VyPENhcnQgfCB1bmRlZmluZWQ+KFxuICAgICAgTVVMVElfQ0FSVF9EQVRBLFxuICAgICAgY2FydEVudGl0aWVzUmVkdWNlclxuICAgICksXG4gICAgaW5kZXg6IGNhcnRUeXBlSW5kZXhSZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0UmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogbXVsdGlDYXJ0UmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRNdWx0aUNhcnRSZWR1Y2Vycyxcbn07XG4iXX0=