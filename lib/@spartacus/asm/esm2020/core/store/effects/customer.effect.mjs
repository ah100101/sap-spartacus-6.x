/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { normalizeHttpError } from '@spartacus/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AsmActions } from '../actions/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "../../connectors/asm.connector";
export class CustomerEffects {
    constructor(actions$, asmConnector) {
        this.actions$ = actions$;
        this.asmConnector = asmConnector;
        this.customerSearch$ = createEffect(() => this.actions$.pipe(ofType(AsmActions.CUSTOMER_SEARCH), map((action) => action.payload), switchMap((options) => this.asmConnector.customerSearch(options).pipe(map((customerSearchResults) => {
            return new AsmActions.CustomerSearchSuccess(customerSearchResults);
        }), catchError((error) => of(new AsmActions.CustomerSearchFail(normalizeHttpError(error))))))));
        this.customerListCustomersSearch$ = createEffect(() => this.actions$.pipe(ofType(AsmActions.CUSTOMER_LIST_CUSTOMERS_SEARCH), map((action) => action.payload), switchMap((options) => this.asmConnector.customerSearch(options).pipe(map((customerListCustomersSearchResults) => {
            return new AsmActions.CustomerListCustomersSearchSuccess(customerListCustomersSearchResults);
        }), catchError((error) => of(new AsmActions.CustomerListCustomersSearchFail(normalizeHttpError(error))))))));
    }
}
CustomerEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CustomerEffects, deps: [{ token: i1.Actions }, { token: i2.AsmConnector }], target: i0.ɵɵFactoryTarget.Injectable });
CustomerEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CustomerEffects });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CustomerEffects, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.AsmConnector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2FzbS9jb3JlL3N0b3JlL2VmZmVjdHMvY3VzdG9tZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRzlDLE1BQU0sT0FBTyxlQUFlO0lBMEMxQixZQUFvQixRQUFpQixFQUFVLFlBQTBCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXpDekUsb0JBQWUsR0FBMEMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsR0FBRyxDQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUMxRCxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzVDLEdBQUcsQ0FBQyxDQUFDLHFCQUF5QyxFQUFFLEVBQUU7WUFDaEQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ25CLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2pFLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUVGLGlDQUE0QixHQUMxQixZQUFZLENBQUMsR0FBRyxFQUFFLENBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxDQUFDLE1BQThDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDdkUsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsQ0FBQyxrQ0FBc0QsRUFBRSxFQUFFO1lBQzdELE9BQU8sSUFBSSxVQUFVLENBQUMsa0NBQWtDLENBQ3RELGtDQUFrQyxDQUNuQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbkIsRUFBRSxDQUNBLElBQUksVUFBVSxDQUFDLCtCQUErQixDQUM1QyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FDMUIsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FBQztJQUV3RSxDQUFDOzs0R0ExQ2xFLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvYXNtL3Jvb3QnO1xuaW1wb3J0IHsgbm9ybWFsaXplSHR0cEVycm9yIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFzbUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYXNtLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21lckVmZmVjdHMge1xuICBjdXN0b21lclNlYXJjaCQ6IE9ic2VydmFibGU8QXNtQWN0aW9ucy5DdXN0b21lckFjdGlvbj4gPSBjcmVhdGVFZmZlY3QoKCkgPT5cbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGUoQXNtQWN0aW9ucy5DVVNUT01FUl9TRUFSQ0gpLFxuICAgICAgbWFwKChhY3Rpb246IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2gpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgIHN3aXRjaE1hcCgob3B0aW9ucykgPT5cbiAgICAgICAgdGhpcy5hc21Db25uZWN0b3IuY3VzdG9tZXJTZWFyY2gob3B0aW9ucykucGlwZShcbiAgICAgICAgICBtYXAoKGN1c3RvbWVyU2VhcmNoUmVzdWx0czogQ3VzdG9tZXJTZWFyY2hQYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hTdWNjZXNzKGN1c3RvbWVyU2VhcmNoUmVzdWx0cyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaEZhaWwobm9ybWFsaXplSHR0cEVycm9yKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGN1c3RvbWVyTGlzdEN1c3RvbWVyc1NlYXJjaCQ6IE9ic2VydmFibGU8QXNtQWN0aW9ucy5DdXN0b21lckFjdGlvbj4gPVxuICAgIGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoQXNtQWN0aW9ucy5DVVNUT01FUl9MSVNUX0NVU1RPTUVSU19TRUFSQ0gpLFxuICAgICAgICBtYXAoKGFjdGlvbjogQXNtQWN0aW9ucy5DdXN0b21lckxpc3RDdXN0b21lcnNTZWFyY2gpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgc3dpdGNoTWFwKChvcHRpb25zKSA9PlxuICAgICAgICAgIHRoaXMuYXNtQ29ubmVjdG9yLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGN1c3RvbWVyTGlzdEN1c3RvbWVyc1NlYXJjaFJlc3VsdHM6IEN1c3RvbWVyU2VhcmNoUGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJMaXN0Q3VzdG9tZXJzU2VhcmNoU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBjdXN0b21lckxpc3RDdXN0b21lcnNTZWFyY2hSZXN1bHRzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgQXNtQWN0aW9ucy5DdXN0b21lckxpc3RDdXN0b21lcnNTZWFyY2hGYWlsKFxuICAgICAgICAgICAgICAgICAgbm9ybWFsaXplSHR0cEVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBhc21Db25uZWN0b3I6IEFzbUNvbm5lY3Rvcikge31cbn1cbiJdfQ==