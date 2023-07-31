/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UrlModule, I18nModule } from '@spartacus/core';
import { ProductVariantColorSelectorComponent } from './product-variant-color-selector.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
export class ProductVariantColorSelectorModule {
}
ProductVariantColorSelectorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: ProductVariantColorSelectorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProductVariantColorSelectorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.4", ngImport: i0, type: ProductVariantColorSelectorModule, declarations: [ProductVariantColorSelectorComponent], imports: [CommonModule, RouterModule, UrlModule, I18nModule], exports: [ProductVariantColorSelectorComponent] });
ProductVariantColorSelectorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: ProductVariantColorSelectorModule, imports: [CommonModule, RouterModule, UrlModule, I18nModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: ProductVariantColorSelectorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, UrlModule, I18nModule],
                    declarations: [ProductVariantColorSelectorComponent],
                    exports: [ProductVariantColorSelectorComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LWNvbG9yLXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wcm9kdWN0L3ZhcmlhbnRzL2NvbXBvbmVudHMvdmFyaWFudC1jb2xvci1zZWxlY3Rvci9wcm9kdWN0LXZhcmlhbnQtY29sb3Itc2VsZWN0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLGlDQUFpQzs7OEhBQWpDLGlDQUFpQzsrSEFBakMsaUNBQWlDLGlCQUg3QixvQ0FBb0MsYUFEekMsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxhQUVqRCxvQ0FBb0M7K0hBRW5DLGlDQUFpQyxZQUpsQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVOzJGQUloRCxpQ0FBaUM7a0JBTDdDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO29CQUM1RCxZQUFZLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztvQkFDcEQsT0FBTyxFQUFFLENBQUMsb0NBQW9DLENBQUM7aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnRDb2xvclNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LXZhcmlhbnQtY29sb3Itc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgVXJsTW9kdWxlLCBJMThuTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdFZhcmlhbnRDb2xvclNlbGVjdG9yQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RWYXJpYW50Q29sb3JTZWxlY3RvckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50Q29sb3JTZWxlY3Rvck1vZHVsZSB7fVxuIl19