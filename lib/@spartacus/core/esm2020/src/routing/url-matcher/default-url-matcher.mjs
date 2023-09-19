/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { inject, InjectionToken } from '@angular/core';
import { RoutingConfigService } from '../configurable-routes';
import { UrlMatcherService } from '../services/url-matcher.service';
export function getDefaultUrlMatcherFactory(routingConfigService, urlMatcherService) {
    const factory = (route) => {
        const routeName = route.data && route.data['cxRoute'];
        const routeConfig = routingConfigService.getRouteConfig(routeName);
        const paths = (routeConfig && routeConfig.paths) || [];
        return urlMatcherService.getFromPaths(paths);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for spartacus routes containing property `data.cxRoute`.
 * The provided url matcher matches the configured `paths` from routing config.
 *
 * If this matcher doesn't fit the requirements, it can be replaced with custom matcher
 * or additional matchers can be added for a specific route. See for example PRODUCT_DETAILS_URL_MATCHER.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
export const DEFAULT_URL_MATCHER = new InjectionToken('DEFAULT_URL_MATCHER', {
    providedIn: 'root',
    factory: () => getDefaultUrlMatcherFactory(inject(RoutingConfigService), inject(UrlMatcherService)),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC11cmwtbWF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvdXJsLW1hdGNoZXIvZGVmYXVsdC11cmwtbWF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHcEUsTUFBTSxVQUFVLDJCQUEyQixDQUN6QyxvQkFBMEMsRUFDMUMsaUJBQW9DO0lBRXBDLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDL0IsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxNQUFNLEtBQUssR0FBRyxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZELE9BQU8saUJBQWlCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQztJQUNGLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUNuRCxxQkFBcUIsRUFDckI7SUFDRSxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQ1osMkJBQTJCLENBQ3pCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FDMUI7Q0FDSixDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBpbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMnO1xuaW1wb3J0IHsgVXJsTWF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5IH0gZnJvbSAnLi91cmwtbWF0Y2hlci1mYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRVcmxNYXRjaGVyRmFjdG9yeShcbiAgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICB1cmxNYXRjaGVyU2VydmljZTogVXJsTWF0Y2hlclNlcnZpY2Vcbik6IFVybE1hdGNoZXJGYWN0b3J5IHtcbiAgY29uc3QgZmFjdG9yeSA9IChyb3V0ZTogUm91dGUpID0+IHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGFbJ2N4Um91dGUnXTtcbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgY29uc3QgcGF0aHMgPSAocm91dGVDb25maWcgJiYgcm91dGVDb25maWcucGF0aHMpIHx8IFtdO1xuICAgIHJldHVybiB1cmxNYXRjaGVyU2VydmljZS5nZXRGcm9tUGF0aHMocGF0aHMpO1xuICB9O1xuICByZXR1cm4gZmFjdG9yeTtcbn1cblxuLyoqXG4gKiBJbmplY3Rpb24gdG9rZW4gd2l0aCB1cmwgbWF0Y2hlciBmYWN0b3J5IGZvciBzcGFydGFjdXMgcm91dGVzIGNvbnRhaW5pbmcgcHJvcGVydHkgYGRhdGEuY3hSb3V0ZWAuXG4gKiBUaGUgcHJvdmlkZWQgdXJsIG1hdGNoZXIgbWF0Y2hlcyB0aGUgY29uZmlndXJlZCBgcGF0aHNgIGZyb20gcm91dGluZyBjb25maWcuXG4gKlxuICogSWYgdGhpcyBtYXRjaGVyIGRvZXNuJ3QgZml0IHRoZSByZXF1aXJlbWVudHMsIGl0IGNhbiBiZSByZXBsYWNlZCB3aXRoIGN1c3RvbSBtYXRjaGVyXG4gKiBvciBhZGRpdGlvbmFsIG1hdGNoZXJzIGNhbiBiZSBhZGRlZCBmb3IgYSBzcGVjaWZpYyByb3V0ZS4gU2VlIGZvciBleGFtcGxlIFBST0RVQ1RfREVUQUlMU19VUkxfTUFUQ0hFUi5cbiAqXG4gKiBOb3RlOiBNYXRjaGVycyB3aWxsIFwibWF0Y2hcIiBhIHJvdXRlLCBidXQgZG8gbm90IGNvbnRyaWJ1dGUgdG8gdGhlIGNyZWF0aW9uIG9mIHRoZSByb3V0ZSwgbm9yIGRvIHRoZXkgZ3VhcmQgcm91dGVzLlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9VUkxfTUFUQ0hFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxVcmxNYXRjaGVyRmFjdG9yeT4oXG4gICdERUZBVUxUX1VSTF9NQVRDSEVSJyxcbiAge1xuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICBmYWN0b3J5OiAoKSA9PlxuICAgICAgZ2V0RGVmYXVsdFVybE1hdGNoZXJGYWN0b3J5KFxuICAgICAgICBpbmplY3QoUm91dGluZ0NvbmZpZ1NlcnZpY2UpLFxuICAgICAgICBpbmplY3QoVXJsTWF0Y2hlclNlcnZpY2UpXG4gICAgICApLFxuICB9XG4pO1xuIl19