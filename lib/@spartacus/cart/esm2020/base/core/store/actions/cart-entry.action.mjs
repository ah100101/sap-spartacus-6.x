/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateUtils } from '@spartacus/core';
import { MULTI_CART_DATA } from '../multi-cart-state';
export const CART_ADD_ENTRY = '[Cart-entry] Add Entry';
export const CART_ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
export const CART_ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
export const CART_REMOVE_ENTRY = '[Cart-entry] Remove Entry';
export const CART_REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
export const CART_REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
export const CART_UPDATE_ENTRY = '[Cart-entry] Update Entry';
export const CART_UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
export const CART_UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
export class CartAddEntry extends StateUtils.EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_ADD_ENTRY;
    }
}
export class CartAddEntrySuccess extends StateUtils.EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_ADD_ENTRY_SUCCESS;
    }
}
export class CartAddEntryFail extends StateUtils.EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_ADD_ENTRY_FAIL;
    }
}
export class CartRemoveEntry extends StateUtils.EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY;
    }
}
export class CartRemoveEntrySuccess extends StateUtils.EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY_SUCCESS;
    }
}
export class CartRemoveEntryFail extends StateUtils.EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY_FAIL;
    }
}
export class CartUpdateEntry extends StateUtils.EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY;
    }
}
export class CartUpdateEntrySuccess extends StateUtils.EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY_SUCCESS;
    }
}
export class CartUpdateEntryFail extends StateUtils.EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY_FAIL;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvY2FydC9iYXNlL2NvcmUvc3RvcmUvYWN0aW9ucy9jYXJ0LWVudHJ5LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsd0JBQXdCLENBQUM7QUFDdkQsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsZ0NBQWdDLENBQUM7QUFDdkUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsNkJBQTZCLENBQUM7QUFDakUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsMkJBQTJCLENBQUM7QUFDN0QsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsbUNBQW1DLENBQUM7QUFDN0UsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsZ0NBQWdDLENBQUM7QUFFdkUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsMkJBQTJCLENBQUM7QUFDN0QsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsbUNBQW1DLENBQUM7QUFDN0UsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsZ0NBQWdDLENBQUM7QUFFdkUsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUFVLENBQUMsOEJBQThCO0lBRXpFLFlBQ1MsT0FNTjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBUmhDLFlBQU8sR0FBUCxPQUFPLENBTWI7UUFSTSxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBVy9CLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVLENBQUMsOEJBQThCO0lBRWhGLFlBQ1MsT0FXTjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBYmhDLFlBQU8sR0FBUCxPQUFPLENBV2I7UUFiTSxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFnQnZDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUFVLENBQUMsOEJBQThCO0lBRTdFLFlBQ1MsT0FPTjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVGhDLFlBQU8sR0FBUCxPQUFPLENBT2I7UUFUTSxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFZcEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVSxDQUFDLDhCQUE4QjtJQUU1RSxZQUNTLE9BQWdFO1FBRXZFLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRmhDLFlBQU8sR0FBUCxPQUFPLENBQXlEO1FBRmhFLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUtsQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsVUFBVSxDQUFDLDhCQUE4QjtJQUVuRixZQUNTLE9BQWdFO1FBRXZFLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRmhDLFlBQU8sR0FBUCxPQUFPLENBQXlEO1FBRmhFLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQUsxQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVSxDQUFDLDhCQUE4QjtJQUVoRixZQUNTLE9BS047UUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVBoQyxZQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBVXZDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVUsQ0FBQyw4QkFBOEI7SUFFNUUsWUFDUyxPQU9OO1FBRUQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFUaEMsWUFBTyxHQUFQLE9BQU8sQ0FPYjtRQVRNLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQVlsQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsVUFBVSxDQUFDLDhCQUE4QjtJQUVuRixZQUNTLE9BT047UUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVRoQyxZQUFPLEdBQVAsT0FBTyxDQU9iO1FBVE0sU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBWTFDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVLENBQUMsOEJBQThCO0lBRWhGLFlBQ1MsT0FRTjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVmhDLFlBQU8sR0FBUCxPQUFPLENBUWI7UUFWTSxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFhdkMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY2FydC9iYXNlL3Jvb3QnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0RBVEEgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJZID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnknO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJZX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9FTlRSWV9GQUlMID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnkgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfRU5UUlkgPSAnW0NhcnQtZW50cnldIFJlbW92ZSBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfUkVNT1ZFX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIFJlbW92ZSBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNvbnN0IENBUlRfVVBEQVRFX0VOVFJZID0gJ1tDYXJ0LWVudHJ5XSBVcGRhdGUgRW50cnknO1xuZXhwb3J0IGNvbnN0IENBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX1VQREFURV9FTlRSWV9GQUlMID0gJ1tDYXJ0LWVudHJ5XSBVcGRhdGUgRW50cnkgRmFpbCc7XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cnkgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICAgIHBpY2t1cFN0b3JlPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgICBxdWFudGl0eTogbnVtYmVyO1xuICAgICAgcGlja3VwU3RvcmU/OiBzdHJpbmc7XG4gICAgICBkZWxpdmVyeU1vZGVDaGFuZ2VkPzogYm9vbGVhbjtcbiAgICAgIGVudHJ5PzogT3JkZXJFbnRyeTtcbiAgICAgIHF1YW50aXR5QWRkZWQ/OiBudW1iZXI7XG4gICAgICBzdGF0dXNDb2RlPzogc3RyaW5nO1xuICAgICAgc3RhdHVzTWVzc2FnZT86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cnlGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfRU5UUllfRkFJTDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIGVycm9yOiBhbnk7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgICBwaWNrdXBTdG9yZT86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlRW50cnkgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nOyBlbnRyeU51bWJlcjogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVudHJ5TnVtYmVyOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5RmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBlcnJvcjogYW55O1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGVudHJ5TnVtYmVyOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFVwZGF0ZUVudHJ5IGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9VUERBVEVfRU5UUlk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgZW50cnlOdW1iZXI6IHN0cmluZztcbiAgICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgICAgcGlja3VwU3RvcmU/OiBzdHJpbmc7XG4gICAgICBwaWNrdXBUb0RlbGl2ZXJ5PzogYm9vbGVhbjtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnlTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBlbnRyeU51bWJlcjogc3RyaW5nO1xuICAgICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgICBwaWNrdXBTdG9yZT86IHN0cmluZztcbiAgICAgIHBpY2t1cFRvRGVsaXZlcnk/OiBib29sZWFuO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRVcGRhdGVFbnRyeUZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWV9GQUlMO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgZXJyb3I6IGFueTtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBlbnRyeU51bWJlcjogc3RyaW5nO1xuICAgICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgICBwaWNrdXBTdG9yZT86IHN0cmluZztcbiAgICAgIHBpY2t1cFRvRGVsaXZlcnk/OiBib29sZWFuO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FydEVudHJ5QWN0aW9uID1cbiAgfCBDYXJ0QWRkRW50cnlcbiAgfCBDYXJ0QWRkRW50cnlTdWNjZXNzXG4gIHwgQ2FydEFkZEVudHJ5RmFpbFxuICB8IENhcnRSZW1vdmVFbnRyeVxuICB8IENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgfCBDYXJ0UmVtb3ZlRW50cnlGYWlsXG4gIHwgQ2FydFVwZGF0ZUVudHJ5XG4gIHwgQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICB8IENhcnRVcGRhdGVFbnRyeUZhaWw7XG4iXX0=