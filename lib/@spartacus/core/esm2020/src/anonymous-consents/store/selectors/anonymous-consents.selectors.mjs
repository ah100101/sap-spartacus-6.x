/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { getAnonymousConsentState } from './feature.selector';
export const getAnonymousConsents = createSelector(getAnonymousConsentState, (state) => state.consents);
export const getAnonymousConsentByTemplateCode = (templateCode) => createSelector(getAnonymousConsents, (consents) => consents.find((consent) => consent.templateCode === templateCode));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Fub255bW91cy1jb25zZW50cy9zdG9yZS9zZWxlY3RvcnMvYW5vbnltb3VzLWNvbnNlbnRzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFHL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBRzdCLGNBQWMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXhFLE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFHLENBQy9DLFlBQW9CLEVBQ3dELEVBQUUsQ0FDOUUsY0FBYyxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsQ0FDbEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0QW5vbnltb3VzQ29uc2VudFN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldEFub255bW91c0NvbnNlbnRzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyxcbiAgQW5vbnltb3VzQ29uc2VudFtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0QW5vbnltb3VzQ29uc2VudFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmNvbnNlbnRzKTtcblxuZXhwb3J0IGNvbnN0IGdldEFub255bW91c0NvbnNlbnRCeVRlbXBsYXRlQ29kZSA9IChcbiAgdGVtcGxhdGVDb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMsIEFub255bW91c0NvbnNlbnQgfCB1bmRlZmluZWQ+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKGdldEFub255bW91c0NvbnNlbnRzLCAoY29uc2VudHMpID0+XG4gICAgY29uc2VudHMuZmluZCgoY29uc2VudCkgPT4gY29uc2VudC50ZW1wbGF0ZUNvZGUgPT09IHRlbXBsYXRlQ29kZSlcbiAgKTtcbiJdfQ==