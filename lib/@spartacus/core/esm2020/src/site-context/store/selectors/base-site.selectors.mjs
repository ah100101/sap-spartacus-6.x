/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
const sitesEntitiesSelector = (state) => state.entities;
export const getBaseSiteState = createSelector(getSiteContextState, (state) => state.baseSite);
export const getActiveBaseSite = createSelector(getSiteContextState, (state) => state && state.baseSite && state.baseSite.activeSite);
export const getBaseSiteData = createSelector(getSiteContextState, (state) => state && state.baseSite && state.baseSite.details);
export const getBaseSitesEntities = createSelector(getBaseSiteState, sitesEntitiesSelector);
export const getAllBaseSites = createSelector(getBaseSitesEntities, (entities) => {
    return entities ? Object.keys(entities).map((uid) => entities[uid]) : null;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3NpdGUtY29udGV4dC9zdG9yZS9zZWxlY3RvcnMvYmFzZS1zaXRlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFRL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFFdkUsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDNUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUM1QixjQUFjLENBQ1osbUJBQW1CLEVBQ25CLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQzFCLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUN2RCxDQUFDO0FBRUosTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUMxQixjQUFjLENBQ1osbUJBQW1CLEVBQ25CLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQzFCLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUNwRCxDQUFDO0FBRUosTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBRzdCLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBRTVELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FHeEIsY0FBYyxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDcEQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzdFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQmFzZVNpdGVFbnRpdGllcyxcbiAgQmFzZVNpdGVTdGF0ZSxcbiAgU2l0ZUNvbnRleHRTdGF0ZSxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG59IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGdldFNpdGVDb250ZXh0U3RhdGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5zZWxlY3Rvcic7XG5cbmNvbnN0IHNpdGVzRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogQmFzZVNpdGVTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXM7XG5cbmV4cG9ydCBjb25zdCBnZXRCYXNlU2l0ZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgQmFzZVNpdGVTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRTaXRlQ29udGV4dFN0YXRlLFxuICAoc3RhdGU6IFNpdGVDb250ZXh0U3RhdGUpID0+IHN0YXRlLmJhc2VTaXRlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlQmFzZVNpdGU6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoU2l0ZUNvbnRleHQsIHN0cmluZz4gPVxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTaXRlQ29udGV4dFN0YXRlLFxuICAgIChzdGF0ZTogU2l0ZUNvbnRleHRTdGF0ZSkgPT5cbiAgICAgIHN0YXRlICYmIHN0YXRlLmJhc2VTaXRlICYmIHN0YXRlLmJhc2VTaXRlLmFjdGl2ZVNpdGVcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEJhc2VTaXRlRGF0YTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhTaXRlQ29udGV4dCwgQmFzZVNpdGU+ID1cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2l0ZUNvbnRleHRTdGF0ZSxcbiAgICAoc3RhdGU6IFNpdGVDb250ZXh0U3RhdGUpID0+XG4gICAgICBzdGF0ZSAmJiBzdGF0ZS5iYXNlU2l0ZSAmJiBzdGF0ZS5iYXNlU2l0ZS5kZXRhaWxzXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRCYXNlU2l0ZXNFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIEJhc2VTaXRlRW50aXRpZXMgfCBudWxsXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0QmFzZVNpdGVTdGF0ZSwgc2l0ZXNFbnRpdGllc1NlbGVjdG9yKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEJhc2VTaXRlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIEJhc2VTaXRlW10gfCBudWxsXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0QmFzZVNpdGVzRW50aXRpZXMsIChlbnRpdGllcykgPT4ge1xuICByZXR1cm4gZW50aXRpZXMgPyBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKCh1aWQpID0+IGVudGl0aWVzW3VpZF0pIDogbnVsbDtcbn0pO1xuIl19