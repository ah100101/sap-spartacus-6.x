/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { inject, InjectionToken } from '@angular/core';
import { DEFAULT_URL_MATCHER, UrlMatcherService, } from '@spartacus/core';
import { getSuffixUrlMatcher } from '../../cms-structure/routing/suffix-routes/suffix-url-matcher';
export function getProductDetailsUrlMatcherFactory(service, defaultMatcherFactory) {
    const factory = (route) => {
        const defaultMatcher = defaultMatcherFactory(route);
        const suffixPDPMatcher = getSuffixUrlMatcher({
            marker: 'p',
            paramName: 'productCode',
        });
        return service.getCombined([defaultMatcher, suffixPDPMatcher]);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for PDP.
 * The provided url matcher matches both:
 * - the configured `paths` from routing config and
 * - custom pattern  `** / p / :productCode`
 *
 * If the this matcher doesn't fit the requirements, it can be replaced with the DEFAULT_URL_MATCHER
 * or additional matchers can be added for a specific route.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
export const PRODUCT_DETAILS_URL_MATCHER = new InjectionToken('PRODUCT_DETAILS_URL_MATCHER', {
    providedIn: 'root',
    factory: () => getProductDetailsUrlMatcherFactory(inject(UrlMatcherService), inject(DEFAULT_URL_MATCHER)),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXVybC1tYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9jbXMtcGFnZXMvcHJvZHVjdC1kZXRhaWxzLXBhZ2UvcHJvZHVjdC1kZXRhaWxzLXVybC1tYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRW5HLE1BQU0sVUFBVSxrQ0FBa0MsQ0FDaEQsT0FBMEIsRUFDMUIscUJBQXdDO0lBRXhDLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDL0IsTUFBTSxjQUFjLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQztZQUMzQyxNQUFNLEVBQUUsR0FBRztZQUNYLFNBQVMsRUFBRSxhQUFhO1NBQ3pCLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FDdEMsSUFBSSxjQUFjLENBQW9CLDZCQUE2QixFQUFFO0lBQ25FLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixrQ0FBa0MsQ0FDaEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUM1QjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IGluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIERFRkFVTFRfVVJMX01BVENIRVIsXG4gIFVybE1hdGNoZXJGYWN0b3J5LFxuICBVcmxNYXRjaGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGdldFN1ZmZpeFVybE1hdGNoZXIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvc3VmZml4LXJvdXRlcy9zdWZmaXgtdXJsLW1hdGNoZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdERldGFpbHNVcmxNYXRjaGVyRmFjdG9yeShcbiAgc2VydmljZTogVXJsTWF0Y2hlclNlcnZpY2UsXG4gIGRlZmF1bHRNYXRjaGVyRmFjdG9yeTogVXJsTWF0Y2hlckZhY3Rvcnlcbik6IFVybE1hdGNoZXJGYWN0b3J5IHtcbiAgY29uc3QgZmFjdG9yeSA9IChyb3V0ZTogUm91dGUpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0TWF0Y2hlciA9IGRlZmF1bHRNYXRjaGVyRmFjdG9yeShyb3V0ZSk7XG4gICAgY29uc3Qgc3VmZml4UERQTWF0Y2hlciA9IGdldFN1ZmZpeFVybE1hdGNoZXIoe1xuICAgICAgbWFya2VyOiAncCcsXG4gICAgICBwYXJhbU5hbWU6ICdwcm9kdWN0Q29kZScsXG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0Q29tYmluZWQoW2RlZmF1bHRNYXRjaGVyLCBzdWZmaXhQRFBNYXRjaGVyXSk7XG4gIH07XG4gIHJldHVybiBmYWN0b3J5O1xufVxuXG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB3aXRoIHVybCBtYXRjaGVyIGZhY3RvcnkgZm9yIFBEUC5cbiAqIFRoZSBwcm92aWRlZCB1cmwgbWF0Y2hlciBtYXRjaGVzIGJvdGg6XG4gKiAtIHRoZSBjb25maWd1cmVkIGBwYXRoc2AgZnJvbSByb3V0aW5nIGNvbmZpZyBhbmRcbiAqIC0gY3VzdG9tIHBhdHRlcm4gIGAqKiAvIHAgLyA6cHJvZHVjdENvZGVgXG4gKlxuICogSWYgdGhlIHRoaXMgbWF0Y2hlciBkb2Vzbid0IGZpdCB0aGUgcmVxdWlyZW1lbnRzLCBpdCBjYW4gYmUgcmVwbGFjZWQgd2l0aCB0aGUgREVGQVVMVF9VUkxfTUFUQ0hFUlxuICogb3IgYWRkaXRpb25hbCBtYXRjaGVycyBjYW4gYmUgYWRkZWQgZm9yIGEgc3BlY2lmaWMgcm91dGUuXG4gKlxuICogTm90ZTogTWF0Y2hlcnMgd2lsbCBcIm1hdGNoXCIgYSByb3V0ZSwgYnV0IGRvIG5vdCBjb250cmlidXRlIHRvIHRoZSBjcmVhdGlvbiBvZiB0aGUgcm91dGUsIG5vciBkbyB0aGV5IGd1YXJkIHJvdXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFBST0RVQ1RfREVUQUlMU19VUkxfTUFUQ0hFUiA9XG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxVcmxNYXRjaGVyRmFjdG9yeT4oJ1BST0RVQ1RfREVUQUlMU19VUkxfTUFUQ0hFUicsIHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgZmFjdG9yeTogKCkgPT5cbiAgICAgIGdldFByb2R1Y3REZXRhaWxzVXJsTWF0Y2hlckZhY3RvcnkoXG4gICAgICAgIGluamVjdChVcmxNYXRjaGVyU2VydmljZSksXG4gICAgICAgIGluamVjdChERUZBVUxUX1VSTF9NQVRDSEVSKVxuICAgICAgKSxcbiAgfSk7XG4iXX0=