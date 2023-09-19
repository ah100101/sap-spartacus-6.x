/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// While it is not strictly required to define checkout endpoints in a separate `UserAccountOccEndpoints`
// variable, type augmentation does require that this file imports `UserAccountOccEndpoints`.
// A good way to make sure the `UserAccountOccEndpoints` import is not removed by mistake is to use
// `UserAccountOccEndpoints` in the code.
const defaultB2bUserAccountOccEndpoints = {
    user: 'orgUsers/${userId}',
};
const defaultB2bUserProfileOccEndpoints = {
    userUpdateProfile: 'users/${userId}',
    userCloseAccount: 'users/${userId}',
};
const defaultB2bCartOccEndpoints = {
    addEntries: 'orgUsers/${userId}/carts/${cartId}/entries?quantity=${quantity}',
};
const defaultB2bOrderOccEndpoints = {
    placeOrder: 'orgUsers/${userId}/orders?fields=FULL',
    scheduleReplenishmentOrder: 'orgUsers/${userId}/replenishmentOrders?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType',
    reorder: 'orgUsers/${userId}/cartFromOrder?orderCode=${orderCode}',
};
export const defaultB2bOccConfig = {
    backend: {
        occ: {
            endpoints: {
                ...defaultB2bUserAccountOccEndpoints,
                ...defaultB2bUserProfileOccEndpoints,
                ...defaultB2bCartOccEndpoints,
                ...defaultB2bOrderOccEndpoints,
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1iMmItb2NjLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUtbGlicy9zZXR1cC9yZWNpcGVzL2IyYi9jb25maWcvZGVmYXVsdC1iMmItb2NjLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBU0gseUdBQXlHO0FBQ3pHLDZGQUE2RjtBQUM3RixtR0FBbUc7QUFDbkcseUNBQXlDO0FBQ3pDLE1BQU0saUNBQWlDLEdBQTRCO0lBQ2pFLElBQUksRUFBRSxvQkFBb0I7Q0FDM0IsQ0FBQztBQUVGLE1BQU0saUNBQWlDLEdBQTRCO0lBQ2pFLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxnQkFBZ0IsRUFBRSxpQkFBaUI7Q0FDcEMsQ0FBQztBQUVGLE1BQU0sMEJBQTBCLEdBQXFCO0lBQ25ELFVBQVUsRUFBRSxpRUFBaUU7Q0FDOUUsQ0FBQztBQUVGLE1BQU0sMkJBQTJCLEdBQXNCO0lBQ3JELFVBQVUsRUFBRSx1Q0FBdUM7SUFDbkQsMEJBQTBCLEVBQ3hCLHFHQUFxRztJQUN2RyxPQUFPLEVBQUUseURBQXlEO0NBQ25FLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBYztJQUM1QyxPQUFPLEVBQUU7UUFDUCxHQUFHLEVBQUU7WUFDSCxTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxpQ0FBaUM7Z0JBQ3BDLEdBQUcsaUNBQWlDO2dCQUNwQyxHQUFHLDBCQUEwQjtnQkFDN0IsR0FBRywyQkFBMkI7YUFDL0I7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8vIFdlIG5lZWQgdGhpcyBpbXBvcnQgZm9yIGF1Z21lbnRhdGlvbiBvZiBPY2NFbmRwb2ludHMgdG8gcGljayB1cFxuaW1wb3J0IHsgQ2FydE9jY0VuZHBvaW50cyB9IGZyb20gJ0BzcGFydGFjdXMvY2FydC9iYXNlL29jYyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJPY2NFbmRwb2ludHMgfSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL29jYyc7XG5pbXBvcnQgeyBVc2VyQWNjb3VudE9jY0VuZHBvaW50cyB9IGZyb20gJ0BzcGFydGFjdXMvdXNlci9hY2NvdW50L29jYyc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZU9jY0VuZHBvaW50cyB9IGZyb20gJ0BzcGFydGFjdXMvdXNlci9wcm9maWxlL29jYyc7XG5cbi8vIFdoaWxlIGl0IGlzIG5vdCBzdHJpY3RseSByZXF1aXJlZCB0byBkZWZpbmUgY2hlY2tvdXQgZW5kcG9pbnRzIGluIGEgc2VwYXJhdGUgYFVzZXJBY2NvdW50T2NjRW5kcG9pbnRzYFxuLy8gdmFyaWFibGUsIHR5cGUgYXVnbWVudGF0aW9uIGRvZXMgcmVxdWlyZSB0aGF0IHRoaXMgZmlsZSBpbXBvcnRzIGBVc2VyQWNjb3VudE9jY0VuZHBvaW50c2AuXG4vLyBBIGdvb2Qgd2F5IHRvIG1ha2Ugc3VyZSB0aGUgYFVzZXJBY2NvdW50T2NjRW5kcG9pbnRzYCBpbXBvcnQgaXMgbm90IHJlbW92ZWQgYnkgbWlzdGFrZSBpcyB0byB1c2Vcbi8vIGBVc2VyQWNjb3VudE9jY0VuZHBvaW50c2AgaW4gdGhlIGNvZGUuXG5jb25zdCBkZWZhdWx0QjJiVXNlckFjY291bnRPY2NFbmRwb2ludHM6IFVzZXJBY2NvdW50T2NjRW5kcG9pbnRzID0ge1xuICB1c2VyOiAnb3JnVXNlcnMvJHt1c2VySWR9Jyxcbn07XG5cbmNvbnN0IGRlZmF1bHRCMmJVc2VyUHJvZmlsZU9jY0VuZHBvaW50czogVXNlclByb2ZpbGVPY2NFbmRwb2ludHMgPSB7XG4gIHVzZXJVcGRhdGVQcm9maWxlOiAndXNlcnMvJHt1c2VySWR9JyxcbiAgdXNlckNsb3NlQWNjb3VudDogJ3VzZXJzLyR7dXNlcklkfScsXG59O1xuXG5jb25zdCBkZWZhdWx0QjJiQ2FydE9jY0VuZHBvaW50czogQ2FydE9jY0VuZHBvaW50cyA9IHtcbiAgYWRkRW50cmllczogJ29yZ1VzZXJzLyR7dXNlcklkfS9jYXJ0cy8ke2NhcnRJZH0vZW50cmllcz9xdWFudGl0eT0ke3F1YW50aXR5fScsXG59O1xuXG5jb25zdCBkZWZhdWx0QjJiT3JkZXJPY2NFbmRwb2ludHM6IE9yZGVyT2NjRW5kcG9pbnRzID0ge1xuICBwbGFjZU9yZGVyOiAnb3JnVXNlcnMvJHt1c2VySWR9L29yZGVycz9maWVsZHM9RlVMTCcsXG4gIHNjaGVkdWxlUmVwbGVuaXNobWVudE9yZGVyOlxuICAgICdvcmdVc2Vycy8ke3VzZXJJZH0vcmVwbGVuaXNobWVudE9yZGVycz9maWVsZHM9RlVMTCxjb3N0Q2VudGVyKEZVTEwpLHB1cmNoYXNlT3JkZXJOdW1iZXIscGF5bWVudFR5cGUnLFxuICByZW9yZGVyOiAnb3JnVXNlcnMvJHt1c2VySWR9L2NhcnRGcm9tT3JkZXI/b3JkZXJDb2RlPSR7b3JkZXJDb2RlfScsXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEIyYk9jY0NvbmZpZzogT2NjQ29uZmlnID0ge1xuICBiYWNrZW5kOiB7XG4gICAgb2NjOiB7XG4gICAgICBlbmRwb2ludHM6IHtcbiAgICAgICAgLi4uZGVmYXVsdEIyYlVzZXJBY2NvdW50T2NjRW5kcG9pbnRzLFxuICAgICAgICAuLi5kZWZhdWx0QjJiVXNlclByb2ZpbGVPY2NFbmRwb2ludHMsXG4gICAgICAgIC4uLmRlZmF1bHRCMmJDYXJ0T2NjRW5kcG9pbnRzLFxuICAgICAgICAuLi5kZWZhdWx0QjJiT3JkZXJPY2NFbmRwb2ludHMsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19