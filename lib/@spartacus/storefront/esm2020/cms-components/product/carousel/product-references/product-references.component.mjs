/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { isNotNullable, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../../cms-structure/page/model/cms-component-data";
import * as i2 from "../../current-product.service";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/common";
import * as i5 from "../../../../shared/components/carousel/carousel.component";
import * as i6 from "../../../../shared/components/media/media.component";
import * as i7 from "@angular/router";
export class ProductReferencesComponent {
    constructor(cmsComponentData, currentProductService, productReferenceService) {
        this.cmsComponentData = cmsComponentData;
        this.currentProductService = currentProductService;
        this.productReferenceService = productReferenceService;
        /**
         * Observable with an Array of Observables. This is done so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.productCode$.pipe(withLatestFrom(this.componentData$), tap(([productCode, data]) => this.productReferenceService.loadProductReferences(productCode, data.productReferenceTypes)), switchMap(([productCode, data]) => this.getProductReferences(productCode, data.productReferenceTypes ?? '')));
    }
    get componentData$() {
        return this.cmsComponentData.data$.pipe(filter((data) => Boolean(data)));
    }
    /**
     * Returns an Observable String for the product code
     */
    get productCode$() {
        return this.currentProductService.getProduct().pipe(filter(isNotNullable), map((product) => product.code ?? ''), tap((_) => this.productReferenceService.cleanReferences()));
    }
    /**
     * Returns an Observable String for the title
     */
    get title$() {
        return this.componentData$.pipe(map((data) => data?.title));
    }
    /**
     * Returns an observable for product references
     */
    getProductReferences(code, referenceType) {
        return this.productReferenceService
            .getProductReferences(code, referenceType)
            .pipe(filter((references) => Boolean(references)), map((references) => references.map((reference) => of(reference.target))));
    }
}
ProductReferencesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: ProductReferencesComponent, deps: [{ token: i1.CmsComponentData }, { token: i2.CurrentProductService }, { token: i3.ProductReferenceService }], target: i0.ɵɵFactoryTarget.Component });
ProductReferencesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: ProductReferencesComponent, selector: "cx-product-references", ngImport: i0, template: "<cx-carousel\n  *ngIf=\"items$ | async as items\"\n  [title]=\"title$ | async\"\n  [items]=\"items\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media [container]=\"item.images?.PRIMARY\" format=\"product\"></cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.CarouselComponent, selector: "cx-carousel", inputs: ["title", "items", "template", "itemWidth", "hideIndicators", "indicatorIcon", "previousIcon", "nextIcon"] }, { kind: "component", type: i6.MediaComponent, selector: "cx-media", inputs: ["container", "format", "alt", "role", "loading"], outputs: ["loaded"] }, { kind: "directive", type: i7.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.UrlPipe, name: "cxUrl" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: ProductReferencesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-product-references', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cx-carousel\n  *ngIf=\"items$ | async as items\"\n  [title]=\"title$ | async\"\n  [items]=\"items\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media [container]=\"item.images?.PRIMARY\" format=\"product\"></cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CmsComponentData }, { type: i2.CurrentProductService }, { type: i3.ProductReferenceService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LXJlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LXJlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFFTCxhQUFhLEdBSWQsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQVM3RSxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQ1ksZ0JBQWlFLEVBQ2pFLHFCQUE0QyxFQUM1Qyx1QkFBZ0Q7UUFGaEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpRDtRQUNqRSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUF5QjVEOzs7O1dBSUc7UUFDSCxXQUFNLEdBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FDMUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUNoRCxXQUFXLEVBQ1gsSUFBSSxDQUFDLHFCQUFxQixDQUMzQixDQUNGLEVBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsQ0FDekUsQ0FDRixDQUFDO0lBekNELENBQUM7SUFFSixJQUFjLGNBQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxZQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDakQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQXFCRDs7T0FFRztJQUNLLG9CQUFvQixDQUMxQixJQUFZLEVBQ1osYUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsdUJBQXVCO2FBQ2hDLG9CQUFvQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7YUFDekMsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQzNDLEdBQUcsQ0FBQyxDQUFDLFVBQThCLEVBQUUsRUFBRSxDQUNyQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3BELENBQ0YsQ0FBQztJQUNOLENBQUM7O3VIQS9EVSwwQkFBMEI7MkdBQTFCLDBCQUEwQiw2REN4QnZDLHllQWVBOzJGRFNhLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx1QkFBdUIsbUJBRWhCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCxcbiAgaXNOb3ROdWxsYWJsZSxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZSxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZWZlcmVuY2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlOiBQcm9kdWN0UmVmZXJlbmNlU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldCBjb21wb25lbnREYXRhJCgpOiBPYnNlcnZhYmxlPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuY21zQ29tcG9uZW50RGF0YS5kYXRhJC5waXBlKGZpbHRlcigoZGF0YSkgPT4gQm9vbGVhbihkYXRhKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBTdHJpbmcgZm9yIHRoZSBwcm9kdWN0IGNvZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcHJvZHVjdENvZGUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgICAgZmlsdGVyKGlzTm90TnVsbGFibGUpLFxuICAgICAgbWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNvZGUgPz8gJycpLFxuICAgICAgdGFwKChfKSA9PiB0aGlzLnByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLmNsZWFuUmVmZXJlbmNlcygpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIFN0cmluZyBmb3IgdGhlIHRpdGxlXG4gICAqL1xuICBnZXQgdGl0bGUkKCk6IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YSQucGlwZShtYXAoKGRhdGEpID0+IGRhdGE/LnRpdGxlKSk7XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSB3aXRoIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3QgfCB1bmRlZmluZWQ+W10+ID1cbiAgICB0aGlzLnByb2R1Y3RDb2RlJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5jb21wb25lbnREYXRhJCksXG4gICAgICB0YXAoKFtwcm9kdWN0Q29kZSwgZGF0YV0pID0+XG4gICAgICAgIHRoaXMucHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UubG9hZFByb2R1Y3RSZWZlcmVuY2VzKFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIGRhdGEucHJvZHVjdFJlZmVyZW5jZVR5cGVzXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKFtwcm9kdWN0Q29kZSwgZGF0YV0pID0+XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlZmVyZW5jZXMocHJvZHVjdENvZGUsIGRhdGEucHJvZHVjdFJlZmVyZW5jZVR5cGVzID8/ICcnKVxuICAgICAgKVxuICAgICk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCByZWZlcmVuY2VzXG4gICAqL1xuICBwcml2YXRlIGdldFByb2R1Y3RSZWZlcmVuY2VzKFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3QgfCB1bmRlZmluZWQ+W10+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmVmZXJlbmNlU2VydmljZVxuICAgICAgLmdldFByb2R1Y3RSZWZlcmVuY2VzKGNvZGUsIHJlZmVyZW5jZVR5cGUpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChyZWZlcmVuY2VzKSA9PiBCb29sZWFuKHJlZmVyZW5jZXMpKSxcbiAgICAgICAgbWFwKChyZWZlcmVuY2VzOiBQcm9kdWN0UmVmZXJlbmNlW10pID0+XG4gICAgICAgICAgcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4gb2YocmVmZXJlbmNlLnRhcmdldCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cbn1cbiIsIjxjeC1jYXJvdXNlbFxuICAqbmdJZj1cIml0ZW1zJCB8IGFzeW5jIGFzIGl0ZW1zXCJcbiAgW3RpdGxlXT1cInRpdGxlJCB8IGFzeW5jXCJcbiAgW2l0ZW1zXT1cIml0ZW1zXCJcbiAgW3RlbXBsYXRlXT1cImNhcm91c2VsSXRlbVwiXG4+XG48L2N4LWNhcm91c2VsPlxuXG48bmctdGVtcGxhdGUgI2Nhcm91c2VsSXRlbSBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgPGEgdGFiaW5kZXg9XCIwXCIgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAncHJvZHVjdCcsIHBhcmFtczogaXRlbSB9IHwgY3hVcmxcIj5cbiAgICA8Y3gtbWVkaWEgW2NvbnRhaW5lcl09XCJpdGVtLmltYWdlcz8uUFJJTUFSWVwiIGZvcm1hdD1cInByb2R1Y3RcIj48L2N4LW1lZGlhPlxuICAgIDxoND57eyBpdGVtLm5hbWUgfX08L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJwcmljZVwiPnt7IGl0ZW0ucHJpY2U/LmZvcm1hdHRlZFZhbHVlIH19PC9kaXY+XG4gIDwvYT5cbjwvbmctdGVtcGxhdGU+XG4iXX0=