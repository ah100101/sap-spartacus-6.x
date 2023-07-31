/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CartOutlets, CartType, DeleteCartSuccessEvent as DeleteSavedCartSuccessEvent, PromotionLocation, } from '@spartacus/cart/base/root';
import { GlobalMessageType, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { mapTo, switchMap, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../saved-cart-details.service";
import * as i2 from "@spartacus/cart/saved-cart/root";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/common";
import * as i5 from "@spartacus/storefront";
import * as i6 from "@spartacus/cart/base/components/add-to-cart";
export class SavedCartDetailsItemsComponent {
    constructor(savedCartDetailsService, savedCartService, eventSercvice, globalMessageService, routingService, translation) {
        this.savedCartDetailsService = savedCartDetailsService;
        this.savedCartService = savedCartService;
        this.eventSercvice = eventSercvice;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.translation = translation;
        this.subscription = new Subscription();
        this.CartOutlets = CartOutlets;
        this.CartType = CartType;
        this.CartLocation = PromotionLocation;
        this.cartLoaded$ = this.savedCartDetailsService
            .getSavedCartId()
            .pipe(switchMap((cartId) => this.savedCartService.isStable(cartId)));
        this.savedCart$ = this.savedCartDetailsService
            .getCartDetails()
            .pipe(tap((cart) => {
            if ((cart?.entries ?? []).length <= 0 && !!cart?.code) {
                this.savedCartService.deleteSavedCart(cart.code);
            }
        }));
    }
    ngOnInit() {
        this.subscription.add(this.eventSercvice
            .get(DeleteSavedCartSuccessEvent)
            .pipe(take(1), mapTo(true))
            .subscribe((success) => this.onDeleteComplete(success)));
        this.buyItAgainTranslation$ = this.translation.translate('addToCart.addToActiveCart');
    }
    onDeleteComplete(success) {
        if (success) {
            this.routingService.go({ cxRoute: 'savedCarts' });
            this.globalMessageService.add({
                key: 'savedCartDialog.deleteCartSuccess',
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
SavedCartDetailsItemsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: SavedCartDetailsItemsComponent, deps: [{ token: i1.SavedCartDetailsService }, { token: i2.SavedCartFacade }, { token: i3.EventService }, { token: i3.GlobalMessageService }, { token: i3.RoutingService }, { token: i3.TranslationService }], target: i0.ɵɵFactoryTarget.Component });
SavedCartDetailsItemsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: SavedCartDetailsItemsComponent, selector: "cx-saved-cart-details-items", ngImport: i0, template: "<ng-container *ngIf=\"savedCart$ | async as cart\">\n  <ng-container *ngIf=\"cart?.entries?.length > 0; else emptyCartItems\">\n    <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n    <div class=\"cart-details-wrapper\">\n      <ng-template\n        [cxOutlet]=\"CartOutlets.CART_ITEM_LIST\"\n        [cxOutletContext]=\"{\n          cartId: cart.code,\n          cartIsLoading: !(cartLoaded$ | async),\n          items: cart.entries,\n          promotionLocation: CartLocation.SavedCart,\n          options: {\n            displayAddToCart: true,\n            addToCartString: (buyItAgainTranslation$ | async),\n            optionalBtn: addToCartBtn,\n            cartType: CartType.SELECTIVE\n          }\n        }\"\n      >\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>\n<ng-template #emptyCartItems>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n\n<ng-template let-ctx #addToCartBtn>\n  <cx-add-to-cart\n    [productCode]=\"ctx.item.product?.code\"\n    [product]=\"ctx.item.product\"\n    [showQuantity]=\"false\"\n    [options]=\"ctx.options\"\n    [pickupStore]=\"ctx.item.deliveryPointOfService?.name\"\n  >\n  </cx-add-to-cart>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.SpinnerComponent, selector: "cx-spinner" }, { kind: "directive", type: i5.OutletDirective, selector: "[cxOutlet]", inputs: ["cxOutlet", "cxOutletContext", "cxOutletDefer", "cxComponentRef"], outputs: ["loaded", "cxComponentRefChange"] }, { kind: "component", type: i6.AddToCartComponent, selector: "cx-add-to-cart", inputs: ["productCode", "showQuantity", "options", "pickupStore", "product"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: SavedCartDetailsItemsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-saved-cart-details-items', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"savedCart$ | async as cart\">\n  <ng-container *ngIf=\"cart?.entries?.length > 0; else emptyCartItems\">\n    <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n    <div class=\"cart-details-wrapper\">\n      <ng-template\n        [cxOutlet]=\"CartOutlets.CART_ITEM_LIST\"\n        [cxOutletContext]=\"{\n          cartId: cart.code,\n          cartIsLoading: !(cartLoaded$ | async),\n          items: cart.entries,\n          promotionLocation: CartLocation.SavedCart,\n          options: {\n            displayAddToCart: true,\n            addToCartString: (buyItAgainTranslation$ | async),\n            optionalBtn: addToCartBtn,\n            cartType: CartType.SELECTIVE\n          }\n        }\"\n      >\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>\n<ng-template #emptyCartItems>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n\n<ng-template let-ctx #addToCartBtn>\n  <cx-add-to-cart\n    [productCode]=\"ctx.item.product?.code\"\n    [product]=\"ctx.item.product\"\n    [showQuantity]=\"false\"\n    [options]=\"ctx.options\"\n    [pickupStore]=\"ctx.item.deliveryPointOfService?.name\"\n  >\n  </cx-add-to-cart>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.SavedCartDetailsService }, { type: i2.SavedCartFacade }, { type: i3.EventService }, { type: i3.GlobalMessageService }, { type: i3.RoutingService }, { type: i3.TranslationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtY2FydC1kZXRhaWxzLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jYXJ0L3NhdmVkLWNhcnQvY29tcG9uZW50cy9kZXRhaWxzL3NhdmVkLWNhcnQtZGV0YWlscy1pdGVtcy9zYXZlZC1jYXJ0LWRldGFpbHMtaXRlbXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NhcnQvc2F2ZWQtY2FydC9jb21wb25lbnRzL2RldGFpbHMvc2F2ZWQtY2FydC1kZXRhaWxzLWl0ZW1zL3NhdmVkLWNhcnQtZGV0YWlscy1pdGVtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFdBQVcsRUFDWCxRQUFRLEVBQ1Isc0JBQXNCLElBQUksMkJBQTJCLEVBQ3JELGlCQUFpQixHQUNsQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFHTCxpQkFBaUIsR0FHbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFRN0QsTUFBTSxPQUFPLDhCQUE4QjtJQXVCekMsWUFDWSx1QkFBZ0QsRUFDaEQsZ0JBQWlDLEVBQ2pDLGFBQTJCLEVBQzNCLG9CQUEwQyxFQUMxQyxjQUE4QixFQUM5QixXQUErQjtRQUwvQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBNUJuQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakMsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBSWpDLGdCQUFXLEdBQXdCLElBQUksQ0FBQyx1QkFBdUI7YUFDNUQsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZFLGVBQVUsR0FBaUMsSUFBSSxDQUFDLHVCQUF1QjthQUNwRSxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtnQkFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBU0QsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGFBQWE7YUFDZixHQUFHLENBQUMsMkJBQTJCLENBQUM7YUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUIsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDMUQsQ0FBQztRQUVGLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDdEQsMkJBQTJCLENBQzVCLENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBZ0I7UUFDL0IsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO2dCQUNFLEdBQUcsRUFBRSxtQ0FBbUM7YUFDekMsRUFDRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OzJIQTNEVSw4QkFBOEI7K0dBQTlCLDhCQUE4QixtRUNwQzNDLHl1Q0F1Q0E7MkZESGEsOEJBQThCO2tCQUwxQyxTQUFTOytCQUNFLDZCQUE2QixtQkFFdEIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhcnQsXG4gIENhcnRPdXRsZXRzLFxuICBDYXJ0VHlwZSxcbiAgRGVsZXRlQ2FydFN1Y2Nlc3NFdmVudCBhcyBEZWxldGVTYXZlZENhcnRTdWNjZXNzRXZlbnQsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvYmFzZS9yb290JztcbmltcG9ydCB7IFNhdmVkQ2FydEZhY2FkZSB9IGZyb20gJ0BzcGFydGFjdXMvY2FydC9zYXZlZC1jYXJ0L3Jvb3QnO1xuaW1wb3J0IHtcbiAgRXZlbnRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNhdmVkQ2FydERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2F2ZWQtY2FydC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zYXZlZC1jYXJ0LWRldGFpbHMtaXRlbXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2F2ZWQtY2FydC1kZXRhaWxzLWl0ZW1zLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVkQ2FydERldGFpbHNJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcmVhZG9ubHkgQ2FydE91dGxldHMgPSBDYXJ0T3V0bGV0cztcbiAgcmVhZG9ubHkgQ2FydFR5cGUgPSBDYXJ0VHlwZTtcbiAgQ2FydExvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb247XG5cbiAgYnV5SXRBZ2FpblRyYW5zbGF0aW9uJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5zYXZlZENhcnREZXRhaWxzU2VydmljZVxuICAgIC5nZXRTYXZlZENhcnRJZCgpXG4gICAgLnBpcGUoc3dpdGNoTWFwKChjYXJ0SWQpID0+IHRoaXMuc2F2ZWRDYXJ0U2VydmljZS5pc1N0YWJsZShjYXJ0SWQpKSk7XG5cbiAgc2F2ZWRDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0IHwgdW5kZWZpbmVkPiA9IHRoaXMuc2F2ZWRDYXJ0RGV0YWlsc1NlcnZpY2VcbiAgICAuZ2V0Q2FydERldGFpbHMoKVxuICAgIC5waXBlKFxuICAgICAgdGFwKChjYXJ0KSA9PiB7XG4gICAgICAgIGlmICgoY2FydD8uZW50cmllcyA/PyBbXSkubGVuZ3RoIDw9IDAgJiYgISFjYXJ0Py5jb2RlKSB7XG4gICAgICAgICAgdGhpcy5zYXZlZENhcnRTZXJ2aWNlLmRlbGV0ZVNhdmVkQ2FydChjYXJ0LmNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNhdmVkQ2FydERldGFpbHNTZXJ2aWNlOiBTYXZlZENhcnREZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2F2ZWRDYXJ0U2VydmljZTogU2F2ZWRDYXJ0RmFjYWRlLFxuICAgIHByb3RlY3RlZCBldmVudFNlcmN2aWNlOiBFdmVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmV2ZW50U2VyY3ZpY2VcbiAgICAgICAgLmdldChEZWxldGVTYXZlZENhcnRTdWNjZXNzRXZlbnQpXG4gICAgICAgIC5waXBlKHRha2UoMSksIG1hcFRvKHRydWUpKVxuICAgICAgICAuc3Vic2NyaWJlKChzdWNjZXNzKSA9PiB0aGlzLm9uRGVsZXRlQ29tcGxldGUoc3VjY2VzcykpXG4gICAgKTtcblxuICAgIHRoaXMuYnV5SXRBZ2FpblRyYW5zbGF0aW9uJCA9IHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKFxuICAgICAgJ2FkZFRvQ2FydC5hZGRUb0FjdGl2ZUNhcnQnXG4gICAgKTtcbiAgfVxuXG4gIG9uRGVsZXRlQ29tcGxldGUoc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ3NhdmVkQ2FydHMnIH0pO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdzYXZlZENhcnREaWFsb2cuZGVsZXRlQ2FydFN1Y2Nlc3MnLFxuICAgICAgICB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJzYXZlZENhcnQkIHwgYXN5bmMgYXMgY2FydFwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2FydD8uZW50cmllcz8ubGVuZ3RoID4gMDsgZWxzZSBlbXB0eUNhcnRJdGVtc1wiPlxuICAgIDxkaXYgcm9sZT1cInN0YXR1c1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ2NvbW1vbi5sb2FkZWQnIHwgY3hUcmFuc2xhdGVcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydC1kZXRhaWxzLXdyYXBwZXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICBbY3hPdXRsZXRdPVwiQ2FydE91dGxldHMuQ0FSVF9JVEVNX0xJU1RcIlxuICAgICAgICBbY3hPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICBjYXJ0SXNMb2FkaW5nOiAhKGNhcnRMb2FkZWQkIHwgYXN5bmMpLFxuICAgICAgICAgIGl0ZW1zOiBjYXJ0LmVudHJpZXMsXG4gICAgICAgICAgcHJvbW90aW9uTG9jYXRpb246IENhcnRMb2NhdGlvbi5TYXZlZENhcnQsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZGlzcGxheUFkZFRvQ2FydDogdHJ1ZSxcbiAgICAgICAgICAgIGFkZFRvQ2FydFN0cmluZzogKGJ1eUl0QWdhaW5UcmFuc2xhdGlvbiQgfCBhc3luYyksXG4gICAgICAgICAgICBvcHRpb25hbEJ0bjogYWRkVG9DYXJ0QnRuLFxuICAgICAgICAgICAgY2FydFR5cGU6IENhcnRUeXBlLlNFTEVDVElWRVxuICAgICAgICAgIH1cbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuPG5nLXRlbXBsYXRlICNlbXB0eUNhcnRJdGVtcz5cbiAgPGRpdiBjbGFzcz1cImN4LXNwaW5uZXJcIj5cbiAgICA8Y3gtc3Bpbm5lcj48L2N4LXNwaW5uZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlIGxldC1jdHggI2FkZFRvQ2FydEJ0bj5cbiAgPGN4LWFkZC10by1jYXJ0XG4gICAgW3Byb2R1Y3RDb2RlXT1cImN0eC5pdGVtLnByb2R1Y3Q/LmNvZGVcIlxuICAgIFtwcm9kdWN0XT1cImN0eC5pdGVtLnByb2R1Y3RcIlxuICAgIFtzaG93UXVhbnRpdHldPVwiZmFsc2VcIlxuICAgIFtvcHRpb25zXT1cImN0eC5vcHRpb25zXCJcbiAgICBbcGlja3VwU3RvcmVdPVwiY3R4Lml0ZW0uZGVsaXZlcnlQb2ludE9mU2VydmljZT8ubmFtZVwiXG4gID5cbiAgPC9jeC1hZGQtdG8tY2FydD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=