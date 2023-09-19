/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { CheckoutCostCenterFacade, CheckoutPaymentTypeFacade, } from '@spartacus/checkout/b2b/root';
import { CheckoutCostCenterService } from './checkout-cost-center.service';
import { CheckoutPaymentTypeService } from './checkout-payment-type.service';
export const facadeProviders = [
    CheckoutCostCenterService,
    {
        provide: CheckoutCostCenterFacade,
        useExisting: CheckoutCostCenterService,
    },
    CheckoutPaymentTypeService,
    {
        provide: CheckoutPaymentTypeFacade,
        useExisting: CheckoutPaymentTypeService,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjYWRlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jaGVja291dC9iMmIvY29yZS9mYWNhZGUvZmFjYWRlLXByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix5QkFBeUIsR0FDMUIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWU7SUFDekMseUJBQXlCO0lBQ3pCO1FBQ0UsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxXQUFXLEVBQUUseUJBQXlCO0tBQ3ZDO0lBQ0QsMEJBQTBCO0lBQzFCO1FBQ0UsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxXQUFXLEVBQUUsMEJBQTBCO0tBQ3hDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDaGVja291dENvc3RDZW50ZXJGYWNhZGUsXG4gIENoZWNrb3V0UGF5bWVudFR5cGVGYWNhZGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY2hlY2tvdXQvYjJiL3Jvb3QnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSB9IGZyb20gJy4vY2hlY2tvdXQtY29zdC1jZW50ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRUeXBlU2VydmljZSB9IGZyb20gJy4vY2hlY2tvdXQtcGF5bWVudC10eXBlLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgZmFjYWRlUHJvdmlkZXJzOiBQcm92aWRlcltdID0gW1xuICBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICB7XG4gICAgcHJvdmlkZTogQ2hlY2tvdXRDb3N0Q2VudGVyRmFjYWRlLFxuICAgIHVzZUV4aXN0aW5nOiBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICB9LFxuICBDaGVja291dFBheW1lbnRUeXBlU2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IENoZWNrb3V0UGF5bWVudFR5cGVGYWNhZGUsXG4gICAgdXNlRXhpc3Rpbmc6IENoZWNrb3V0UGF5bWVudFR5cGVTZXJ2aWNlLFxuICB9LFxuXTtcbiJdfQ==