/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OccPersonalizationIdInterceptor } from './occ-personalization-id.interceptor';
import { OccPersonalizationTimeInterceptor } from './occ-personalization-time.interceptor';
export const interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: OccPersonalizationIdInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: OccPersonalizationTimeInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvdHJhY2tpbmcvcGVyc29uYWxpemF0aW9uL3Jvb3QvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTNGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBZTtJQUN0QztRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9jY1BlcnNvbmFsaXphdGlvbklkSW50ZXJjZXB0b3IgfSBmcm9tICcuL29jYy1wZXJzb25hbGl6YXRpb24taWQuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgT2NjUGVyc29uYWxpemF0aW9uVGltZUludGVyY2VwdG9yIH0gZnJvbSAnLi9vY2MtcGVyc29uYWxpemF0aW9uLXRpbWUuaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgY29uc3QgaW50ZXJjZXB0b3JzOiBQcm92aWRlcltdID0gW1xuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IE9jY1BlcnNvbmFsaXphdGlvbklkSW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VFeGlzdGluZzogT2NjUGVyc29uYWxpemF0aW9uVGltZUludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==