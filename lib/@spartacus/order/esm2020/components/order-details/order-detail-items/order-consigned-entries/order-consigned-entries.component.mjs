/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, Input } from '@angular/core';
import { CartOutlets, PromotionLocation } from '@spartacus/cart/base/root';
import { OrderOutlets } from '@spartacus/order/root';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/core";
import * as i3 from "@spartacus/storefront";
import * as i4 from "@spartacus/cart/base/components/add-to-cart";
import * as i5 from "../consignment-tracking/consignment-tracking.component";
export class OrderConsignedEntriesComponent {
    constructor() {
        this.promotionLocation = PromotionLocation.Order;
        this.OrderOutlets = OrderOutlets;
        this.CartOutlets = CartOutlets;
    }
}
OrderConsignedEntriesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: OrderConsignedEntriesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
OrderConsignedEntriesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: OrderConsignedEntriesComponent, selector: "cx-order-consigned-entries", inputs: { consignments: "consignments", order: "order", enableAddToCart: "enableAddToCart", buyItAgainTranslation: "buyItAgainTranslation" }, ngImport: i0, template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <ng-template\n    [cxOutlet]=\"OrderOutlets.ORDER_CONSIGNMENT\"\n    [cxOutletContext]=\"{ item: consignment }\"\n  >\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        <span *ngIf=\"consignment\">\n          {{\n            'orderDetails.deliveryStatus_' + consignment?.status | cxTranslate\n          }}\n        </span>\n      </div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ consignment?.statusDate | cxDate }}</div>\n      </div>\n\n      <cx-consignment-tracking\n        [orderCode]=\"order.code\"\n        [consignment]=\"consignment\"\n        *cxFeature=\"'consignmentTracking'\"\n      >\n      </cx-consignment-tracking>\n    </div>\n  </ng-template>\n  <div class=\"cx-list-item col-12\">\n    <ng-template\n      [cxOutlet]=\"CartOutlets.CART_ITEM_LIST\"\n      [cxOutletContext]=\"{\n        items: consignment.entries,\n        readonly: true,\n        promotionLocation: promotionLocation,\n        options: {\n          displayAddToCart: enableAddToCart,\n          addToCartString: buyItAgainTranslation,\n          optionalBtn: addToCartBtn\n        }\n      }\"\n    >\n    </ng-template>\n  </div>\n</div>\n\n<ng-template let-ctx #addToCartBtn>\n  <cx-add-to-cart\n    [productCode]=\"ctx.item.product?.code\"\n    [product]=\"ctx.item.product\"\n    [showQuantity]=\"false\"\n    [options]=\"ctx.options\"\n    [pickupStore]=\"ctx.item.deliveryPointOfService?.name\"\n    class=\"add-to-cart\"\n  >\n  </cx-add-to-cart>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.FeatureDirective, selector: "[cxFeature]", inputs: ["cxFeature"] }, { kind: "directive", type: i3.OutletDirective, selector: "[cxOutlet]", inputs: ["cxOutlet", "cxOutletContext", "cxOutletDefer", "cxComponentRef"], outputs: ["loaded", "cxComponentRefChange"] }, { kind: "component", type: i4.AddToCartComponent, selector: "cx-add-to-cart", inputs: ["productCode", "showQuantity", "options", "pickupStore", "product"] }, { kind: "component", type: i5.ConsignmentTrackingComponent, selector: "cx-consignment-tracking", inputs: ["consignment", "orderCode"] }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i2.CxDatePipe, name: "cxDate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: OrderConsignedEntriesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-order-consigned-entries', template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <ng-template\n    [cxOutlet]=\"OrderOutlets.ORDER_CONSIGNMENT\"\n    [cxOutletContext]=\"{ item: consignment }\"\n  >\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        <span *ngIf=\"consignment\">\n          {{\n            'orderDetails.deliveryStatus_' + consignment?.status | cxTranslate\n          }}\n        </span>\n      </div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ consignment?.statusDate | cxDate }}</div>\n      </div>\n\n      <cx-consignment-tracking\n        [orderCode]=\"order.code\"\n        [consignment]=\"consignment\"\n        *cxFeature=\"'consignmentTracking'\"\n      >\n      </cx-consignment-tracking>\n    </div>\n  </ng-template>\n  <div class=\"cx-list-item col-12\">\n    <ng-template\n      [cxOutlet]=\"CartOutlets.CART_ITEM_LIST\"\n      [cxOutletContext]=\"{\n        items: consignment.entries,\n        readonly: true,\n        promotionLocation: promotionLocation,\n        options: {\n          displayAddToCart: enableAddToCart,\n          addToCartString: buyItAgainTranslation,\n          optionalBtn: addToCartBtn\n        }\n      }\"\n    >\n    </ng-template>\n  </div>\n</div>\n\n<ng-template let-ctx #addToCartBtn>\n  <cx-add-to-cart\n    [productCode]=\"ctx.item.product?.code\"\n    [product]=\"ctx.item.product\"\n    [showQuantity]=\"false\"\n    [options]=\"ctx.options\"\n    [pickupStore]=\"ctx.item.deliveryPointOfService?.name\"\n    class=\"add-to-cart\"\n  >\n  </cx-add-to-cart>\n</ng-template>\n" }]
        }], propDecorators: { consignments: [{
                type: Input
            }], order: [{
                type: Input
            }], enableAddToCart: [{
                type: Input
            }], buyItAgainTranslation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQXNCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBTXpFLE1BQU0sT0FBTyw4QkFBOEI7SUFKM0M7UUFVRSxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBRXRELGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ3BDOzsySEFWWSw4QkFBOEI7K0dBQTlCLDhCQUE4QixnTkNkM0Msb2xEQXNEQTsyRkR4Q2EsOEJBQThCO2tCQUoxQyxTQUFTOytCQUNFLDRCQUE0Qjs4QkFJN0IsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0T3V0bGV0cywgUHJvbW90aW9uTG9jYXRpb24gfSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvYmFzZS9yb290JztcbmltcG9ydCB7IENvbnNpZ25tZW50LCBPcmRlciwgT3JkZXJPdXRsZXRzIH0gZnJvbSAnQHNwYXJ0YWN1cy9vcmRlci9yb290JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uc2lnbmVkLWVudHJpZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbnNpZ25lZEVudHJpZXNDb21wb25lbnQge1xuICBASW5wdXQoKSBjb25zaWdubWVudHM6IENvbnNpZ25tZW50W107XG4gIEBJbnB1dCgpIG9yZGVyOiBPcmRlcjtcbiAgQElucHV0KCkgZW5hYmxlQWRkVG9DYXJ0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBidXlJdEFnYWluVHJhbnNsYXRpb246IHN0cmluZztcblxuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5PcmRlcjtcblxuICByZWFkb25seSBPcmRlck91dGxldHMgPSBPcmRlck91dGxldHM7XG4gIHJlYWRvbmx5IENhcnRPdXRsZXRzID0gQ2FydE91dGxldHM7XG59XG4iLCI8ZGl2ICpuZ0Zvcj1cImxldCBjb25zaWdubWVudCBvZiBjb25zaWdubWVudHNcIiBjbGFzcz1cImN4LWxpc3Qgcm93XCI+XG4gIDxuZy10ZW1wbGF0ZVxuICAgIFtjeE91dGxldF09XCJPcmRlck91dGxldHMuT1JERVJfQ09OU0lHTk1FTlRcIlxuICAgIFtjeE91dGxldENvbnRleHRdPVwieyBpdGVtOiBjb25zaWdubWVudCB9XCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJjeC1saXN0LWhlYWRlciBjb2wtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC1saXN0LXN0YXR1c1wiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImNvbnNpZ25tZW50XCI+XG4gICAgICAgICAge3tcbiAgICAgICAgICAgICdvcmRlckRldGFpbHMuZGVsaXZlcnlTdGF0dXNfJyArIGNvbnNpZ25tZW50Py5zdGF0dXMgfCBjeFRyYW5zbGF0ZVxuICAgICAgICAgIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbnNpZ25tZW50Py5zdGF0dXNEYXRlXCIgY2xhc3M9XCJjeC1saXN0LWRhdGVcIj5cbiAgICAgICAgPGRpdj57eyBjb25zaWdubWVudD8uc3RhdHVzRGF0ZSB8IGN4RGF0ZSB9fTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxjeC1jb25zaWdubWVudC10cmFja2luZ1xuICAgICAgICBbb3JkZXJDb2RlXT1cIm9yZGVyLmNvZGVcIlxuICAgICAgICBbY29uc2lnbm1lbnRdPVwiY29uc2lnbm1lbnRcIlxuICAgICAgICAqY3hGZWF0dXJlPVwiJ2NvbnNpZ25tZW50VHJhY2tpbmcnXCJcbiAgICAgID5cbiAgICAgIDwvY3gtY29uc2lnbm1lbnQtdHJhY2tpbmc+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjeC1saXN0LWl0ZW0gY29sLTEyXCI+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbY3hPdXRsZXRdPVwiQ2FydE91dGxldHMuQ0FSVF9JVEVNX0xJU1RcIlxuICAgICAgW2N4T3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGl0ZW1zOiBjb25zaWdubWVudC5lbnRyaWVzLFxuICAgICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgICAgcHJvbW90aW9uTG9jYXRpb246IHByb21vdGlvbkxvY2F0aW9uLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgZGlzcGxheUFkZFRvQ2FydDogZW5hYmxlQWRkVG9DYXJ0LFxuICAgICAgICAgIGFkZFRvQ2FydFN0cmluZzogYnV5SXRBZ2FpblRyYW5zbGF0aW9uLFxuICAgICAgICAgIG9wdGlvbmFsQnRuOiBhZGRUb0NhcnRCdG5cbiAgICAgICAgfVxuICAgICAgfVwiXG4gICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSBsZXQtY3R4ICNhZGRUb0NhcnRCdG4+XG4gIDxjeC1hZGQtdG8tY2FydFxuICAgIFtwcm9kdWN0Q29kZV09XCJjdHguaXRlbS5wcm9kdWN0Py5jb2RlXCJcbiAgICBbcHJvZHVjdF09XCJjdHguaXRlbS5wcm9kdWN0XCJcbiAgICBbc2hvd1F1YW50aXR5XT1cImZhbHNlXCJcbiAgICBbb3B0aW9uc109XCJjdHgub3B0aW9uc1wiXG4gICAgW3BpY2t1cFN0b3JlXT1cImN0eC5pdGVtLmRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/Lm5hbWVcIlxuICAgIGNsYXNzPVwiYWRkLXRvLWNhcnRcIlxuICA+XG4gIDwvY3gtYWRkLXRvLWNhcnQ+XG48L25nLXRlbXBsYXRlPlxuIl19