/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { getRequestOrigin } from './express-request-origin';
export function getRequestUrl(req) {
    return getRequestOrigin(req) + req.originalUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1yZXF1ZXN0LXVybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUtbGlicy9zZXR1cC9zc3IvZXhwcmVzcy11dGlscy9leHByZXNzLXJlcXVlc3QtdXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RCxNQUFNLFVBQVUsYUFBYSxDQUFDLEdBQVk7SUFDeEMsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXRSZXF1ZXN0T3JpZ2luIH0gZnJvbSAnLi9leHByZXNzLXJlcXVlc3Qtb3JpZ2luJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlcXVlc3RVcmwocmVxOiBSZXF1ZXN0KTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldFJlcXVlc3RPcmlnaW4ocmVxKSArIHJlcS5vcmlnaW5hbFVybDtcbn1cbiJdfQ==