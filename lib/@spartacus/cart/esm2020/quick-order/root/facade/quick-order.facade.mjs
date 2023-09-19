/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { CART_QUICK_ORDER_CORE_FEATURE } from '../feature-name';
import * as i0 from "@angular/core";
export function quickOrderFacadeFactory() {
    return facadeFactory({
        facade: QuickOrderFacade,
        feature: CART_QUICK_ORDER_CORE_FEATURE,
        methods: [
            'addProduct',
            'addToCart',
            'clearList',
            'canAdd',
            'setListLimit',
            'getEntries',
            'getProductAdded',
            'loadEntries',
            'softDeleteEntry',
            'searchProducts',
            'setProductAdded',
            'updateEntryQuantity',
            'getSoftDeletedEntries',
            'restoreSoftDeletedEntry',
            'hardDeleteEntry',
            'clearDeletedEntries',
            'getNonPurchasableProductError',
            'setNonPurchasableProductError',
            'clearNonPurchasableProductError',
        ],
    });
}
export class QuickOrderFacade {
}
QuickOrderFacade.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: QuickOrderFacade, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
QuickOrderFacade.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: QuickOrderFacade, providedIn: 'root', useFactory: quickOrderFacadeFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: QuickOrderFacade, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: quickOrderFacadeFactory,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stb3JkZXIuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NhcnQvcXVpY2stb3JkZXIvcm9vdC9mYWNhZGUvcXVpY2stb3JkZXIuZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHaEUsTUFBTSxVQUFVLHVCQUF1QjtJQUNyQyxPQUFPLGFBQWEsQ0FBQztRQUNuQixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE9BQU8sRUFBRSw2QkFBNkI7UUFDdEMsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsUUFBUTtZQUNSLGNBQWM7WUFDZCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLCtCQUErQjtZQUMvQiwrQkFBK0I7WUFDL0IsaUNBQWlDO1NBQ2xDO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQU1ELE1BQU0sT0FBZ0IsZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCO2lIQUFoQixnQkFBZ0IsY0FIeEIsTUFBTSxjQUNOLHVCQUF1QjsyRkFFZixnQkFBZ0I7a0JBSnJDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFVBQVUsRUFBRSx1QkFBdUI7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSwgUHJvZHVjdERhdGEgfSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvYmFzZS9yb290JztcbmltcG9ydCB7IGZhY2FkZUZhY3RvcnksIFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDQVJUX1FVSUNLX09SREVSX0NPUkVfRkVBVFVSRSB9IGZyb20gJy4uL2ZlYXR1cmUtbmFtZSc7XG5pbXBvcnQgeyBRdWlja09yZGVyQWRkRW50cnlFdmVudCB9IGZyb20gJy4uL21vZGVscy9xdWljay1vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja09yZGVyRmFjYWRlRmFjdG9yeSgpIHtcbiAgcmV0dXJuIGZhY2FkZUZhY3Rvcnkoe1xuICAgIGZhY2FkZTogUXVpY2tPcmRlckZhY2FkZSxcbiAgICBmZWF0dXJlOiBDQVJUX1FVSUNLX09SREVSX0NPUkVfRkVBVFVSRSxcbiAgICBtZXRob2RzOiBbXG4gICAgICAnYWRkUHJvZHVjdCcsXG4gICAgICAnYWRkVG9DYXJ0JyxcbiAgICAgICdjbGVhckxpc3QnLFxuICAgICAgJ2NhbkFkZCcsXG4gICAgICAnc2V0TGlzdExpbWl0JyxcbiAgICAgICdnZXRFbnRyaWVzJyxcbiAgICAgICdnZXRQcm9kdWN0QWRkZWQnLFxuICAgICAgJ2xvYWRFbnRyaWVzJyxcbiAgICAgICdzb2Z0RGVsZXRlRW50cnknLFxuICAgICAgJ3NlYXJjaFByb2R1Y3RzJyxcbiAgICAgICdzZXRQcm9kdWN0QWRkZWQnLFxuICAgICAgJ3VwZGF0ZUVudHJ5UXVhbnRpdHknLFxuICAgICAgJ2dldFNvZnREZWxldGVkRW50cmllcycsXG4gICAgICAncmVzdG9yZVNvZnREZWxldGVkRW50cnknLFxuICAgICAgJ2hhcmREZWxldGVFbnRyeScsXG4gICAgICAnY2xlYXJEZWxldGVkRW50cmllcycsXG4gICAgICAnZ2V0Tm9uUHVyY2hhc2FibGVQcm9kdWN0RXJyb3InLFxuICAgICAgJ3NldE5vblB1cmNoYXNhYmxlUHJvZHVjdEVycm9yJyxcbiAgICAgICdjbGVhck5vblB1cmNoYXNhYmxlUHJvZHVjdEVycm9yJyxcbiAgICBdLFxuICB9KTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUZhY3Rvcnk6IHF1aWNrT3JkZXJGYWNhZGVGYWN0b3J5LFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBRdWlja09yZGVyRmFjYWRlIHtcbiAgLyoqXG4gICAqIEdldCBlbnRyaWVzXG4gICAqL1xuICBhYnN0cmFjdCBnZXRFbnRyaWVzKCk6IEJlaGF2aW9yU3ViamVjdDxPcmRlckVudHJ5W10+O1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggcHJvZHVjdHMgdXNpbmcgcXVlcnlcbiAgICovXG4gIGFic3RyYWN0IHNlYXJjaFByb2R1Y3RzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgbWF4UHJvZHVjdHM/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0W10+O1xuXG4gIC8qKlxuICAgKiBDbGVhciBhIGxpc3Qgb2YgYWRkZWQgZW50cmllc1xuICAgKi9cbiAgYWJzdHJhY3QgY2xlYXJMaXN0KCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcG9zc2liaWxpdHkgdG8gYWRkIHRoZSBuZXh0IHByb2R1Y3RcbiAgICovXG4gIGFic3RyYWN0IGNhbkFkZChcbiAgICBjb2RlPzogc3RyaW5nLFxuICAgIHByb2R1Y3RzRGF0YT86IFByb2R1Y3REYXRhW11cbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKipcbiAgICogU2V0IHF1aWNrIG9yZGVyIGxpc3QgbGltaXQgcHJvcGVydHlcbiAgICovXG4gIGFic3RyYWN0IHNldExpc3RMaW1pdChsaW1pdDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogTG9hZCBhIGxpc3Qgb2YgZW50cmllc1xuICAgKi9cbiAgYWJzdHJhY3QgbG9hZEVudHJpZXMoZW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZDtcblxuICAvKipcbiAgICogTG9hZCBhIGxpc3Qgb2YgZW50cmllc1xuICAgKi9cbiAgYWJzdHJhY3QgdXBkYXRlRW50cnlRdWFudGl0eShlbnRyeUluZGV4OiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEZWxldGUgc2luZ2xlIGVudHJ5IGZyb20gdGhlIGxpc3RcbiAgICovXG4gIGFic3RyYWN0IHNvZnREZWxldGVFbnRyeShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogQWRkIHByb2R1Y3QgdG8gdGhlIHF1aWNrIG9yZGVyIGxpc3RcbiAgICovXG4gIGFic3RyYWN0IGFkZFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCwgcXVhbnRpdHk/OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gcHJvZHVjdCBhZGRlZCBzdWJqZWN0XG4gICAqL1xuICBhYnN0cmFjdCBnZXRQcm9kdWN0QWRkZWQoKTogU3ViamVjdDxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBTZXQgcHJvZHVjdCBhZGRlZCBzdWJqZWN0XG4gICAqL1xuICBhYnN0cmFjdCBzZXRQcm9kdWN0QWRkZWQocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFkZGluZyB0byBjYXJ0IGFsbCBwcm9kdWN0cyBmcm9tIHRoZSBsaXN0XG4gICAqL1xuICBhYnN0cmFjdCBhZGRUb0NhcnQoKTogT2JzZXJ2YWJsZTxbT3JkZXJFbnRyeVtdLCBRdWlja09yZGVyQWRkRW50cnlFdmVudFtdXT47XG5cbiAgLyoqXG4gICAqIFJldHVybiBzb2Z0IGRlbGV0ZWQgZW50cmllc1xuICAgKi9cbiAgYWJzdHJhY3QgZ2V0U29mdERlbGV0ZWRFbnRyaWVzKCk6IE9ic2VydmFibGU8UmVjb3JkPHN0cmluZywgT3JkZXJFbnRyeT4+O1xuXG4gIC8qKlxuICAgKiBSZXN0b3JlIHNvZnQgZGVsZXRlZCBlbnRyeVxuICAgKi9cbiAgYWJzdHJhY3QgcmVzdG9yZVNvZnREZWxldGVkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENsZWFyIGRlbGV0ZWQgZW50cnkgZnJvbSB0aGUgbGlzdFxuICAgKi9cbiAgYWJzdHJhY3QgaGFyZERlbGV0ZUVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgZGVsZXRlZCBlbnRyaWVzIGFuZCB0aW1lb3V0IHN1YnNjcmlwdGlvbnNcbiAgICovXG4gIGFic3RyYWN0IGNsZWFyRGVsZXRlZEVudHJpZXMoKTogdm9pZDtcblxuICAvKipcbiAgICogIFJldHVybiBub24gcHVyY2hhc2FibGUgcHJvZHVjdCBlcnJvclxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0Tm9uUHVyY2hhc2FibGVQcm9kdWN0RXJyb3IoKTogT2JzZXJ2YWJsZTxQcm9kdWN0IHwgbnVsbD47XG5cbiAgLyoqXG4gICAqIFNldCBlcnJvciB0aGF0IHNlbGVjdGVkIHByb2R1Y3QgaXMgbm90IHB1cmNoYXNhYmxlXG4gICAqL1xuICBhYnN0cmFjdCBzZXROb25QdXJjaGFzYWJsZVByb2R1Y3RFcnJvcihwcm9kdWN0OiBQcm9kdWN0KTogdm9pZDtcblxuICAvKipcbiAgICogQ2xlYXIgbm90IHB1cmNoYXNhYmxlIHByb2R1Y3QgZXJyb3JcbiAgICovXG4gIGFic3RyYWN0IGNsZWFyTm9uUHVyY2hhc2FibGVQcm9kdWN0RXJyb3IoKTogdm9pZDtcbn1cbiJdfQ==