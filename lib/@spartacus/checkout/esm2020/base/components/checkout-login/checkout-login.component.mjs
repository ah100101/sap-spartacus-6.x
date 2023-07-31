/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { Validators, } from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@spartacus/core";
import * as i3 from "@spartacus/cart/base/root";
import * as i4 from "@spartacus/storefront";
export class CheckoutLoginComponent {
    constructor(formBuilder, authRedirectService, activeCartFacade) {
        this.formBuilder = formBuilder;
        this.authRedirectService = authRedirectService;
        this.activeCartFacade = activeCartFacade;
        this.checkoutLoginForm = this.formBuilder.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            emailConfirmation: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.emailsMustMatch('email', 'emailConfirmation'),
        });
    }
    onSubmit() {
        if (this.checkoutLoginForm.valid) {
            const email = this.checkoutLoginForm.get('email')?.value;
            this.activeCartFacade.addEmail(email);
            if (!this.sub) {
                this.sub = this.activeCartFacade.isGuestCart().subscribe((isGuest) => {
                    if (isGuest) {
                        this.authRedirectService.redirect();
                    }
                });
            }
        }
        else {
            this.checkoutLoginForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
CheckoutLoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CheckoutLoginComponent, deps: [{ token: i1.UntypedFormBuilder }, { token: i2.AuthRedirectService }, { token: i3.ActiveCartFacade }], target: i0.ɵɵFactoryTarget.Component });
CheckoutLoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: CheckoutLoginComponent, selector: "cx-checkout-login", ngImport: i0, template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"checkoutLoginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        required=\"true\"\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('email')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        required=\"true\"\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('emailConfirmation')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n", dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i4.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CheckoutLoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-checkout-login', template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"checkoutLoginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        required=\"true\"\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('email')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        required=\"true\"\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('emailConfirmation')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.UntypedFormBuilder }, { type: i2.AuthRedirectService }, { type: i3.ActiveCartFacade }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NoZWNrb3V0L2Jhc2UvY29tcG9uZW50cy9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvY2hlY2tvdXQvYmFzZS9jb21wb25lbnRzL2NoZWNrb3V0LWxvZ2luL2NoZWNrb3V0LWxvZ2luLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFHTCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBTzdELE1BQU0sT0FBTyxzQkFBc0I7SUFlakMsWUFDWSxXQUErQixFQUMvQixtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRmxDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFqQjlDLHNCQUFpQixHQUFxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FDMUQ7WUFDRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9DLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsb0JBQW9CLENBQUMsZUFBZSxDQUM5QyxPQUFPLEVBQ1AsbUJBQW1CLENBQ3BCO1NBQ0YsQ0FDRixDQUFDO0lBT0MsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDbkUsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNyQztnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7bUhBMUNVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHlEQ3JCbkMsZzFDQStDQTsyRkQxQmEsc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gIFVudHlwZWRGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRGYWNhZGUgfSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvYmFzZS9yb290JztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICdAc3BhcnRhY3VzL3N0b3JlZnJvbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNoZWNrb3V0TG9naW5Gb3JtOiBVbnR5cGVkRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChcbiAgICB7XG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIGVtYWlsQ29uZmlybWF0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3JzOiBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbHNNdXN0TWF0Y2goXG4gICAgICAgICdlbWFpbCcsXG4gICAgICAgICdlbWFpbENvbmZpcm1hdGlvbidcbiAgICAgICksXG4gICAgfVxuICApO1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZm9ybUJ1aWxkZXI6IFVudHlwZWRGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydEZhY2FkZTogQWN0aXZlQ2FydEZhY2FkZVxuICApIHt9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tvdXRMb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5jaGVja291dExvZ2luRm9ybS5nZXQoJ2VtYWlsJyk/LnZhbHVlO1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0RmFjYWRlLmFkZEVtYWlsKGVtYWlsKTtcblxuICAgICAgaWYgKCF0aGlzLnN1Yikge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuYWN0aXZlQ2FydEZhY2FkZS5pc0d1ZXN0Q2FydCgpLnN1YnNjcmliZSgoaXNHdWVzdCkgPT4ge1xuICAgICAgICAgIGlmIChpc0d1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVkaXJlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrb3V0TG9naW5Gb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCI8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIFtmb3JtR3JvdXBdPVwiY2hlY2tvdXRMb2dpbkZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICA8bGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnRcIj57e1xuICAgICAgICAnY2hlY2tvdXRMb2dpbi5lbWFpbEFkZHJlc3MubGFiZWwnIHwgY3hUcmFuc2xhdGVcbiAgICAgIH19PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIHJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7XG4gICAgICAgICAgJ2NoZWNrb3V0TG9naW4uZW1haWxBZGRyZXNzLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgIH19XCJcbiAgICAgIC8+XG4gICAgICA8Y3gtZm9ybS1lcnJvcnNcbiAgICAgICAgW2NvbnRyb2xdPVwiY2hlY2tvdXRMb2dpbkZvcm0uZ2V0KCdlbWFpbCcpXCJcbiAgICAgID48L2N4LWZvcm0tZXJyb3JzPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgPGxhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbC1jb250ZW50XCI+e3tcbiAgICAgICAgJ2NoZWNrb3V0TG9naW4uY29uZmlybUVtYWlsLmxhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgICB9fTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxDb25maXJtYXRpb25cIlxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVtYWlsQ29uZmlybWF0aW9uXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e1xuICAgICAgICAgICdjaGVja291dExvZ2luLmNvbmZpcm1FbWFpbC5wbGFjZWhvbGRlcicgfCBjeFRyYW5zbGF0ZVxuICAgICAgICB9fVwiXG4gICAgICAvPlxuICAgICAgPGN4LWZvcm0tZXJyb3JzXG4gICAgICAgIFtjb250cm9sXT1cImNoZWNrb3V0TG9naW5Gb3JtLmdldCgnZW1haWxDb25maXJtYXRpb24nKVwiXG4gICAgICA+PC9jeC1mb3JtLWVycm9ycz5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cblxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcIj5cbiAgICB7eyAnY2hlY2tvdXRMb2dpbi5jb250aW51ZScgfCBjeFRyYW5zbGF0ZSB9fVxuICA8L2J1dHRvbj5cbjwvZm9ybT5cbiJdfQ==