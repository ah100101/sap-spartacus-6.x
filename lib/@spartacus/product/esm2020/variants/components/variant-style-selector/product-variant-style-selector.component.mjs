/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isNotUndefined, VariantQualifier, } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/common";
export class ProductVariantStyleSelectorComponent {
    constructor(config, productService, routingService) {
        this.config = config;
        this.productService = productService;
        this.routingService = routingService;
        this.variantQualifier = VariantQualifier;
    }
    getVariantOptionValue(qualifiers) {
        const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.STYLE);
        return obj ? obj.value : '';
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const qualifier = variantOptionQualifiers.find((item) => item.image);
        return qualifier
            ? `${this.config?.backend?.occ?.baseUrl}${qualifier.image?.url}`
            : '';
    }
    changeStyle(code) {
        if (code) {
            this.productService
                .get(code, "list" /* ProductScope.LIST */)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(isNotUndefined), take(1))
                .subscribe((product) => {
                this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            });
        }
        return null;
    }
}
ProductVariantStyleSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: ProductVariantStyleSelectorComponent, deps: [{ token: i1.OccConfig }, { token: i1.ProductService }, { token: i1.RoutingService }], target: i0.ɵɵFactoryTarget.Component });
ProductVariantStyleSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: ProductVariantStyleSelectorComponent, selector: "cx-product-variant-style-selector", inputs: { variants: "variants" }, ngImport: i0, template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'productVariants.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{ 'selected-variant': v.code === variants?.selected?.code }\"\n      >\n        <button class=\"variant-button\" (click)=\"changeStyle(v.code)\">\n          <img\n            src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n            title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n            alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          />\n        </button>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: ProductVariantStyleSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-product-variant-style-selector', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'productVariants.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{ 'selected-variant': v.code === variants?.selected?.code }\"\n      >\n        <button class=\"variant-button\" (click)=\"changeStyle(v.code)\">\n          <img\n            src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n            title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n            alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          />\n        </button>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.OccConfig }, { type: i1.ProductService }, { type: i1.RoutingService }]; }, propDecorators: { variants: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wcm9kdWN0L3ZhcmlhbnRzL2NvbXBvbmVudHMvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci9wcm9kdWN0LXZhcmlhbnQtc3R5bGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QvdmFyaWFudHMvY29tcG9uZW50cy92YXJpYW50LXN0eWxlLXNlbGVjdG9yL3Byb2R1Y3QtdmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUVMLGNBQWMsRUFPZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTzlDLE1BQU0sT0FBTyxvQ0FBb0M7SUFDL0MsWUFDVSxNQUFpQixFQUNqQixjQUE4QixFQUM5QixjQUE4QjtRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFHeEMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFGakMsQ0FBQztJQU9KLHFCQUFxQixDQUFDLFVBQW9DO1FBQ3hELE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQXNCLENBQ3BCLHVCQUFpRDtRQUVqRCxNQUFNLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSxPQUFPLFNBQVM7WUFDZCxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2hFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsY0FBYztpQkFDaEIsR0FBRyxDQUFDLElBQUksaUNBQW9CO2lCQUM1QixJQUFJO1lBQ0gsdUZBQXVGO1lBQ3ZGLDRDQUE0QztZQUM1QyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjtpQkFDQSxTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO29CQUNyQixPQUFPLEVBQUUsU0FBUztvQkFDbEIsTUFBTSxFQUFFLE9BQU87aUJBQ2hCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2lJQTdDVSxvQ0FBb0M7cUhBQXBDLG9DQUFvQywyR0N6QmpELGs0QkF3QkE7MkZEQ2Esb0NBQW9DO2tCQUxoRCxTQUFTOytCQUNFLG1DQUFtQyxtQkFFNUIsdUJBQXVCLENBQUMsTUFBTTswSkFZL0MsUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJhc2VPcHRpb24sXG4gIGlzTm90VW5kZWZpbmVkLFxuICBPY2NDb25maWcsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RTY29wZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLFxuICBWYXJpYW50UXVhbGlmaWVyLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXZhcmlhbnQtc3R5bGUtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC12YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50U3R5bGVTZWxlY3RvckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHZhcmlhbnRRdWFsaWZpZXIgPSBWYXJpYW50UXVhbGlmaWVyO1xuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBCYXNlT3B0aW9uO1xuXG4gIGdldFZhcmlhbnRPcHRpb25WYWx1ZShxdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pIHtcbiAgICBjb25zdCBvYmogPSBxdWFsaWZpZXJzLmZpbmQoKHEpID0+IHEucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlNUWUxFKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cblxuICBnZXRWYXJpYW50VGh1bWJuYWlsVXJsKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBxdWFsaWZpZXIgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmltYWdlKTtcblxuICAgIHJldHVybiBxdWFsaWZpZXJcbiAgICAgID8gYCR7dGhpcy5jb25maWc/LmJhY2tlbmQ/Lm9jYz8uYmFzZVVybH0ke3F1YWxpZmllci5pbWFnZT8udXJsfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBjaGFuZ2VTdHlsZShjb2RlOiBzdHJpbmcpOiBudWxsIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgdGhpcy5wcm9kdWN0U2VydmljZVxuICAgICAgICAuZ2V0KGNvZGUsIFByb2R1Y3RTY29wZS5MSVNUKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAvLyBiZWxvdyBjYWxsIG1pZ2h0IGxvb2tzIHJlZHVuZGFudCBidXQgaW4gZmFjdCB0aGlzIGRhdGEgaXMgZ29pbmcgdG8gYmUgbG9hZGVkIGFueXdheXNcbiAgICAgICAgICAvLyB3ZSdyZSBqdXN0IGNhbGxpbmcgaXQgZWFybGllciBhbmQgc3RvcmluZ1xuICAgICAgICAgIGZpbHRlcihpc05vdFVuZGVmaW5lZCksXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICAgIHBhcmFtczogcHJvZHVjdCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyPlxuICA8ZGl2IGNsYXNzPVwidmFyaWFudC1zZWxlY3RvclwiPlxuICAgIDxkaXYgKm5nSWY9XCJ2YXJpYW50cy5zZWxlY3RlZFwiIGNsYXNzPVwidmFyaWFudC1uYW1lXCI+XG4gICAgICB7eyAncHJvZHVjdFZhcmlhbnRzLnN0eWxlJyB8IGN4VHJhbnNsYXRlIH19OlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdHlsZS1uYW1lXCI+e3tcbiAgICAgICAgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHZhcmlhbnRzPy5zZWxlY3RlZC52YXJpYW50T3B0aW9uUXVhbGlmaWVycylcbiAgICAgIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cInZhcmlhbnQtbGlzdFwiPlxuICAgICAgPGxpXG4gICAgICAgICpuZ0Zvcj1cImxldCB2IG9mIHZhcmlhbnRzPy5vcHRpb25zXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnc2VsZWN0ZWQtdmFyaWFudCc6IHYuY29kZSA9PT0gdmFyaWFudHM/LnNlbGVjdGVkPy5jb2RlIH1cIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidmFyaWFudC1idXR0b25cIiAoY2xpY2spPVwiY2hhbmdlU3R5bGUodi5jb2RlKVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cInt7IGdldFZhcmlhbnRUaHVtYm5haWxVcmwodi52YXJpYW50T3B0aW9uUXVhbGlmaWVycykgfX1cIlxuICAgICAgICAgICAgdGl0bGU9XCJ7eyBnZXRWYXJpYW50T3B0aW9uVmFsdWUodi52YXJpYW50T3B0aW9uUXVhbGlmaWVycykgfX1cIlxuICAgICAgICAgICAgYWx0PVwie3sgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHYudmFyaWFudE9wdGlvblF1YWxpZmllcnMpIH19XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==