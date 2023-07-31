/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../cms-structure/page/model/cms-component-data";
import * as i2 from "../navigation/navigation.service";
import * as i3 from "@angular/common";
import * as i4 from "../navigation/navigation-ui.component";
import * as i5 from "@spartacus/core";
export class CategoryNavigationComponent {
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.data$ = this.componentData.data$;
    }
}
CategoryNavigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CategoryNavigationComponent, deps: [{ token: i1.CmsComponentData }, { token: i2.NavigationService }], target: i0.ɵɵFactoryTarget.Component });
CategoryNavigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: CategoryNavigationComponent, selector: "cx-category-navigation", ngImport: i0, template: "<cx-navigation-ui\n  *ngIf=\"data$ | async as data\"\n  [node]=\"node$ | async\"\n  [ngClass]=\"data.styleClass ?? ''\"\n  [wrapAfter]=\"+(data.wrapAfter ?? '')\"\n  [resetMenuOnClose]=\"data.resetMenuOnClose\"\n  [navAriaLabel]=\"'navigation.categoryNavLabel' | cxTranslate\"\n></cx-navigation-ui>\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.NavigationUIComponent, selector: "cx-navigation-ui", inputs: ["node", "wrapAfter", "resetMenuOnClose", "navAriaLabel", "flyout", "isOpen"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i5.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: CategoryNavigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-category-navigation', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cx-navigation-ui\n  *ngIf=\"data$ | async as data\"\n  [node]=\"node$ | async\"\n  [ngClass]=\"data.styleClass ?? ''\"\n  [wrapAfter]=\"+(data.wrapAfter ?? '')\"\n  [resetMenuOnClose]=\"data.resetMenuOnClose\"\n  [navAriaLabel]=\"'navigation.categoryNavLabel' | cxTranslate\"\n></cx-navigation-ui>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CmsComponentData }, { type: i2.NavigationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL2Ntcy1jb21wb25lbnRzL25hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi9jYXRlZ29yeS1uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9jYXRlZ29yeS1uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFZbkUsTUFBTSxPQUFPLDJCQUEyQjtJQU90QyxZQUNZLGFBQXVELEVBQ3ZELE9BQTBCO1FBRDFCLGtCQUFhLEdBQWIsYUFBYSxDQUEwQztRQUN2RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQVJ0QyxVQUFLLEdBQStCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUN6QixDQUFDO1FBRUYsVUFBSyxHQUF1QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUtsRSxDQUFDOzt3SEFWTywyQkFBMkI7NEdBQTNCLDJCQUEyQiw4RENsQnhDLDhTQVFBOzJGRFVhLDJCQUEyQjtrQkFMdkMsU0FBUzsrQkFDRSx3QkFBd0IsbUJBRWpCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhdGVnb3J5LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQge1xuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4gPSB0aGlzLnNlcnZpY2UuZ2V0TmF2aWdhdGlvbk5vZGUoXG4gICAgdGhpcy5jb21wb25lbnREYXRhLmRhdGEkXG4gICk7XG5cbiAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlXG4gICkge31cbn1cbiIsIjxjeC1uYXZpZ2F0aW9uLXVpXG4gICpuZ0lmPVwiZGF0YSQgfCBhc3luYyBhcyBkYXRhXCJcbiAgW25vZGVdPVwibm9kZSQgfCBhc3luY1wiXG4gIFtuZ0NsYXNzXT1cImRhdGEuc3R5bGVDbGFzcyA/PyAnJ1wiXG4gIFt3cmFwQWZ0ZXJdPVwiKyhkYXRhLndyYXBBZnRlciA/PyAnJylcIlxuICBbcmVzZXRNZW51T25DbG9zZV09XCJkYXRhLnJlc2V0TWVudU9uQ2xvc2VcIlxuICBbbmF2QXJpYUxhYmVsXT1cIiduYXZpZ2F0aW9uLmNhdGVnb3J5TmF2TGFiZWwnIHwgY3hUcmFuc2xhdGVcIlxuPjwvY3gtbmF2aWdhdGlvbi11aT5cbiJdfQ==