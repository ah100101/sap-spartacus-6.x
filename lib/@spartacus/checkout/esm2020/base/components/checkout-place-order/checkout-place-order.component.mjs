/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { Validators, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/order/root";
import * as i2 from "@spartacus/core";
import * as i3 from "@angular/forms";
import * as i4 from "@spartacus/storefront";
import * as i5 from "@angular/router";
export class CheckoutPlaceOrderComponent {
    get termsAndConditionInvalid() {
        return this.checkoutSubmitForm.invalid;
    }
    constructor(orderFacade, routingService, fb, launchDialogService, vcr) {
        this.orderFacade = orderFacade;
        this.routingService = routingService;
        this.fb = fb;
        this.launchDialogService = launchDialogService;
        this.vcr = vcr;
        this.checkoutSubmitForm = this.fb.group({
            termsAndConditions: [false, Validators.requiredTrue],
        });
    }
    submitForm() {
        if (this.checkoutSubmitForm.valid) {
            this.placedOrder = this.launchDialogService.launch("PLACE_ORDER_SPINNER" /* LAUNCH_CALLER.PLACE_ORDER_SPINNER */, this.vcr);
            this.orderFacade.placeOrder(this.checkoutSubmitForm.valid).subscribe({
                error: () => {
                    if (!this.placedOrder) {
                        return;
                    }
                    this.placedOrder
                        .subscribe((component) => {
                        this.launchDialogService.clear("PLACE_ORDER_SPINNER" /* LAUNCH_CALLER.PLACE_ORDER_SPINNER */);
                        if (component) {
                            component.destroy();
                        }
                    })
                        .unsubscribe();
                },
                next: () => this.onSuccess(),
            });
        }
        else {
            this.checkoutSubmitForm.markAllAsTouched();
        }
    }
    onSuccess() {
        this.routingService.go({ cxRoute: 'orderConfirmation' });
    }
    ngOnDestroy() {
        this.launchDialogService.clear("PLACE_ORDER_SPINNER" /* LAUNCH_CALLER.PLACE_ORDER_SPINNER */);
    }
}
CheckoutPlaceOrderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CheckoutPlaceOrderComponent, deps: [{ token: i1.OrderFacade }, { token: i2.RoutingService }, { token: i3.UntypedFormBuilder }, { token: i4.LaunchDialogService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
CheckoutPlaceOrderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: CheckoutPlaceOrderComponent, selector: "cx-place-order", ngImport: i0, template: "<form class=\"cx-place-order-form form-check\" [formGroup]=\"checkoutSubmitForm\">\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"scaled-input form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n    </label>\n  </div>\n\n  <button\n    (click)=\"submitForm()\"\n    class=\"btn btn-primary btn-block\"\n    [disabled]=\"termsAndConditionInvalid\"\n    [cxAtMessage]=\"'checkoutReview.orderInProcess' | cxTranslate\"\n  >\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n", dependencies: [{ kind: "directive", type: i4.AtMessageDirective, selector: "[cxAtMessage]", inputs: ["cxAtMessage"] }, { kind: "directive", type: i5.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i2.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CheckoutPlaceOrderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-place-order', changeDetection: ChangeDetectionStrategy.OnPush, template: "<form class=\"cx-place-order-form form-check\" [formGroup]=\"checkoutSubmitForm\">\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"scaled-input form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n    </label>\n  </div>\n\n  <button\n    (click)=\"submitForm()\"\n    class=\"btn btn-primary btn-block\"\n    [disabled]=\"termsAndConditionInvalid\"\n    [cxAtMessage]=\"'checkoutReview.orderInProcess' | cxTranslate\"\n  >\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.OrderFacade }, { type: i2.RoutingService }, { type: i3.UntypedFormBuilder }, { type: i4.LaunchDialogService }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NoZWNrb3V0L2Jhc2UvY29tcG9uZW50cy9jaGVja291dC1wbGFjZS1vcmRlci9jaGVja291dC1wbGFjZS1vcmRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvY2hlY2tvdXQvYmFzZS9jb21wb25lbnRzL2NoZWNrb3V0LXBsYWNlLW9yZGVyL2NoZWNrb3V0LXBsYWNlLW9yZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FJVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFXeEIsTUFBTSxPQUFPLDJCQUEyQjtJQU90QyxJQUFJLHdCQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQ1ksV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsRUFBc0IsRUFDdEIsbUJBQXdDLEVBQ3hDLEdBQXFCO1FBSnJCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixPQUFFLEdBQUYsRUFBRSxDQUFvQjtRQUN0Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBYmpDLHVCQUFrQixHQUFxQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNuRCxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQ3JELENBQUMsQ0FBQztJQVlBLENBQUM7SUFFSixVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sZ0VBRWhELElBQUksQ0FBQyxHQUFHLENBQ1QsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ25FLEtBQUssRUFBRSxHQUFHLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ3JCLE9BQU87cUJBQ1I7b0JBRUQsSUFBSSxDQUFDLFdBQVc7eUJBQ2IsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLCtEQUFtQyxDQUFDO3dCQUNsRSxJQUFJLFNBQVMsRUFBRTs0QkFDYixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7eUJBQ3JCO29CQUNILENBQUMsQ0FBQzt5QkFDRCxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTthQUM3QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLCtEQUFtQyxDQUFDO0lBQ3BFLENBQUM7O3dIQXJEVSwyQkFBMkI7NEdBQTNCLDJCQUEyQixzREM1QnhDLDI4QkErQkE7MkZESGEsMkJBQTJCO2tCQUx2QyxTQUFTOytCQUNFLGdCQUFnQixtQkFFVCx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVW50eXBlZEZvcm1CdWlsZGVyLFxuICBVbnR5cGVkRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPcmRlckZhY2FkZSB9IGZyb20gJ0BzcGFydGFjdXMvb3JkZXIvcm9vdCc7XG5pbXBvcnQgeyBMYXVuY2hEaWFsb2dTZXJ2aWNlLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnQHNwYXJ0YWN1cy9zdG9yZWZyb250JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGxhY2Utb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcGxhY2Utb3JkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQbGFjZU9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcGxhY2VkT3JkZXI6IHZvaWQgfCBPYnNlcnZhYmxlPENvbXBvbmVudFJlZjxhbnk+IHwgdW5kZWZpbmVkPjtcblxuICBjaGVja291dFN1Ym1pdEZvcm06IFVudHlwZWRGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICB0ZXJtc0FuZENvbmRpdGlvbnM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdLFxuICB9KTtcblxuICBnZXQgdGVybXNBbmRDb25kaXRpb25JbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3VibWl0Rm9ybS5pbnZhbGlkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyRmFjYWRlOiBPcmRlckZhY2FkZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogVW50eXBlZEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB2Y3I6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIHN1Ym1pdEZvcm0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tvdXRTdWJtaXRGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnBsYWNlZE9yZGVyID0gdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmxhdW5jaChcbiAgICAgICAgTEFVTkNIX0NBTExFUi5QTEFDRV9PUkRFUl9TUElOTkVSLFxuICAgICAgICB0aGlzLnZjclxuICAgICAgKTtcbiAgICAgIHRoaXMub3JkZXJGYWNhZGUucGxhY2VPcmRlcih0aGlzLmNoZWNrb3V0U3VibWl0Rm9ybS52YWxpZCkuc3Vic2NyaWJlKHtcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMucGxhY2VkT3JkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnBsYWNlZE9yZGVyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsZWFyKExBVU5DSF9DQUxMRVIuUExBQ0VfT1JERVJfU1BJTk5FUik7XG4gICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6ICgpID0+IHRoaXMub25TdWNjZXNzKCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja291dFN1Ym1pdEZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ29yZGVyQ29uZmlybWF0aW9uJyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5jbGVhcihMQVVOQ0hfQ0FMTEVSLlBMQUNFX09SREVSX1NQSU5ORVIpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImN4LXBsYWNlLW9yZGVyLWZvcm0gZm9ybS1jaGVja1wiIFtmb3JtR3JvdXBdPVwiY2hlY2tvdXRTdWJtaXRGb3JtXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgPGxhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRlcm1zQW5kQ29uZGl0aW9uc1wiXG4gICAgICAgIGNsYXNzPVwic2NhbGVkLWlucHV0IGZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICB7eyAnY2hlY2tvdXRSZXZpZXcuY29uZmlybVRoYXRSZWFkJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgIDxhXG4gICAgICAgICAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAndGVybXNBbmRDb25kaXRpb25zJyB9IHwgY3hVcmxcIlxuICAgICAgICAgIGNsYXNzPVwiY3gtdGMtbGlua1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICdjaGVja291dFJldmlldy50ZXJtc0FuZENvbmRpdGlvbnMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuXG4gIDxidXR0b25cbiAgICAoY2xpY2spPVwic3VibWl0Rm9ybSgpXCJcbiAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgIFtkaXNhYmxlZF09XCJ0ZXJtc0FuZENvbmRpdGlvbkludmFsaWRcIlxuICAgIFtjeEF0TWVzc2FnZV09XCInY2hlY2tvdXRSZXZpZXcub3JkZXJJblByb2Nlc3MnIHwgY3hUcmFuc2xhdGVcIlxuICA+XG4gICAge3sgJ2NoZWNrb3V0UmV2aWV3LnBsYWNlT3JkZXInIHwgY3hUcmFuc2xhdGUgfX1cbiAgPC9idXR0b24+XG48L2Zvcm0+XG4iXX0=