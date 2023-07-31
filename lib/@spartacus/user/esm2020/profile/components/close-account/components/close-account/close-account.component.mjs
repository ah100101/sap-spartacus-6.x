/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, ViewChild, } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/storefront";
import * as i2 from "@angular/router";
import * as i3 from "@spartacus/core";
export class CloseAccountComponent {
    constructor(launchDialogService, vcr) {
        this.launchDialogService = launchDialogService;
        this.vcr = vcr;
    }
    openModal() {
        const dialog = this.launchDialogService.openDialog("CLOSE_ACCOUNT" /* LAUNCH_CALLER.CLOSE_ACCOUNT */, this.element, this.vcr);
        dialog?.pipe(take(1)).subscribe();
    }
}
CloseAccountComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CloseAccountComponent, deps: [{ token: i1.LaunchDialogService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
CloseAccountComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: CloseAccountComponent, selector: "cx-close-account", viewQueries: [{ propertyName: "element", first: true, predicate: ["element"], descendants: true }], ngImport: i0, template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-6\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button #element class=\"btn btn-block btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i3.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i3.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CloseAccountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-close-account', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-6\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button #element class=\"btn btn-block btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.LaunchDialogService }, { type: i0.ViewContainerRef }]; }, propDecorators: { element: [{
                type: ViewChild,
                args: ['element']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvdXNlci9wcm9maWxlL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQvY2xvc2UtYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvdXNlci9wcm9maWxlL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQvY2xvc2UtYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFRdEMsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQyxZQUNZLG1CQUF3QyxFQUN4QyxHQUFxQjtRQURyQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFFBQUcsR0FBSCxHQUFHLENBQWtCO0lBQzlCLENBQUM7SUFFSixTQUFTO1FBQ1AsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsb0RBRWhELElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO1FBRUYsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztrSEFoQlUscUJBQXFCO3NHQUFyQixxQkFBcUIsNEpDckJsQyx5ZkFnQkE7MkZES2EscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLGtCQUFrQixtQkFFWCx1QkFBdUIsQ0FBQyxNQUFNO3lJQUd6QixPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExhdW5jaERpYWxvZ1NlcnZpY2UsIExBVU5DSF9DQUxMRVIgfSBmcm9tICdAc3BhcnRhY3VzL3N0b3JlZnJvbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jbG9zZS1hY2NvdW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb3NlLWFjY291bnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvc2VBY2NvdW50Q29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGxhdW5jaERpYWxvZ1NlcnZpY2U6IExhdW5jaERpYWxvZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgb3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5vcGVuRGlhbG9nKFxuICAgICAgTEFVTkNIX0NBTExFUi5DTE9TRV9BQ0NPVU5ULFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy52Y3JcbiAgICApO1xuXG4gICAgZGlhbG9nPy5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLW1kLTlcIj5cbiAgPGRpdiBjbGFzcz1cInJvdyBjeC1idG4tZ3JvdXBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxhXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ2hvbWUnIH0gfCBjeFVybFwiXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgPnt7ICdjb21tb24uY2FuY2VsJyB8IGN4VHJhbnNsYXRlIH19PC9hXG4gICAgICA+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8YnV0dG9uICNlbGVtZW50IGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvcGVuTW9kYWwoKVwiPlxuICAgICAgICB7eyAnY2xvc2VBY2NvdW50LmNsb3NlTXlBY2NvdW50JyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==