/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 */
export function entityReducer(entityType, reducer) {
    return (state = initialEntityState, action) => {
        let ids = [];
        let partitionPayload = false;
        if (action.meta &&
            action.meta.entityType === entityType &&
            action.meta.entityId !== undefined) {
            if (action.meta.entityId !== null) {
                ids = [].concat(action.meta.entityId);
            }
            // remove selected entities
            if (action.meta.entityRemove) {
                return removeSelectedEntities(action, state, ids);
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        const entityUpdates = {};
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            const subAction = partitionPayload
                ? { ...action, payload: action.payload[i] }
                : action;
            const newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return {
                ...state,
                entities: { ...state.entities, ...entityUpdates },
            };
        }
        return state;
    };
    function removeSelectedEntities(action, state, ids) {
        if (action?.meta?.entityId === null) {
            return initialEntityState;
        }
        else {
            let removed = false;
            const newEntities = Object.keys(state.entities).reduce((acc, cur) => {
                if (ids.includes(cur)) {
                    removed = true;
                }
                else {
                    acc[cur] = state.entities[cur];
                }
                return acc;
            }, {});
            return removed ? { entities: newEntities } : state;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQU1ILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFxQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUVyRTs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsVUFBa0IsRUFDbEIsT0FBNEM7SUFFNUMsT0FBTyxDQUNMLFFBQXdCLGtCQUFrQixFQUMxQyxNQUFvQixFQUNKLEVBQUU7UUFDbEIsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQ0UsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFDbEM7WUFDQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDakMsR0FBRyxHQUFJLEVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRDtZQUVELDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM1QixPQUFPLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDbkQ7WUFFRCxnQkFBZ0I7Z0JBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7UUFFRCxNQUFNLGFBQWEsR0FBd0IsRUFBRSxDQUFDO1FBRTlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLFNBQVMsR0FBRyxnQkFBZ0I7Z0JBQ2hDLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1gsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekMsT0FBTztnQkFDTCxHQUFHLEtBQUs7Z0JBQ1IsUUFBUSxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsYUFBYSxFQUFFO2FBQ2xELENBQUM7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsU0FBUyxzQkFBc0IsQ0FDN0IsTUFBb0IsRUFDcEIsS0FBcUIsRUFDckIsR0FBc0I7UUFFdEIsSUFBSSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDbkMsT0FBTyxrQkFBa0IsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FDcEQsQ0FBQyxHQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckIsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDaEI7cUJBQU07b0JBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUNELEVBQUUsQ0FDSCxDQUFDO1lBRUYsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVudGl0eVN0YXRlIH0gZnJvbSAnLi9lbnRpdHktc3RhdGUnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi9lbnRpdHkuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxFbnRpdHlTdGF0ZTogRW50aXR5U3RhdGU8YW55PiA9IHsgZW50aXRpZXM6IHt9IH07XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgZm9yIHJldXNpbmcgcmVkdWNlciBsb2dpYyBmb3IgbXVsdGlwbGUgZW50aXRpZXNcbiAqXG4gKiBVdGlsaXplcyBlbnRpdHlJZCBtZXRhIGZpZWxkIHRvIHRhcmdldCBlbnRpdHkgYnkgaWQgaW4gYWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UmVkdWNlcjxULCBWIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uPihcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICByZWR1Y2VyOiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uIHwgVikgPT4gVFxuKSB7XG4gIHJldHVybiAoXG4gICAgc3RhdGU6IEVudGl0eVN0YXRlPFQ+ID0gaW5pdGlhbEVudGl0eVN0YXRlLFxuICAgIGFjdGlvbjogRW50aXR5QWN0aW9uXG4gICk6IEVudGl0eVN0YXRlPFQ+ID0+IHtcbiAgICBsZXQgaWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBwYXJ0aXRpb25QYXlsb2FkID0gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eUlkICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGlmIChhY3Rpb24ubWV0YS5lbnRpdHlJZCAhPT0gbnVsbCkge1xuICAgICAgICBpZHMgPSAoW10gYXMgc3RyaW5nW10pLmNvbmNhdChhY3Rpb24ubWV0YS5lbnRpdHlJZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBlbnRpdGllc1xuICAgICAgaWYgKGFjdGlvbi5tZXRhLmVudGl0eVJlbW92ZSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlU2VsZWN0ZWRFbnRpdGllcyhhY3Rpb24sIHN0YXRlLCBpZHMpO1xuICAgICAgfVxuXG4gICAgICBwYXJ0aXRpb25QYXlsb2FkID1cbiAgICAgICAgQXJyYXkuaXNBcnJheShhY3Rpb24ubWV0YS5lbnRpdHlJZCkgJiYgQXJyYXkuaXNBcnJheShhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkcyA9IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRpdHlVcGRhdGVzOiB7IFtpZDogc3RyaW5nXTogVCB9ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaWQgPSBpZHNbaV07XG4gICAgICBjb25zdCBzdWJBY3Rpb24gPSBwYXJ0aXRpb25QYXlsb2FkXG4gICAgICAgID8geyAuLi5hY3Rpb24sIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkW2ldIH1cbiAgICAgICAgOiBhY3Rpb247XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUuZW50aXRpZXNbaWRdLCBzdWJBY3Rpb24pO1xuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIGVudGl0eVVwZGF0ZXNbaWRdID0gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKGVudGl0eVVwZGF0ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllczogeyAuLi5zdGF0ZS5lbnRpdGllcywgLi4uZW50aXR5VXBkYXRlcyB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2VsZWN0ZWRFbnRpdGllcyhcbiAgICBhY3Rpb246IEVudGl0eUFjdGlvbixcbiAgICBzdGF0ZTogRW50aXR5U3RhdGU8VD4sXG4gICAgaWRzOiBzdHJpbmcgfCBzdHJpbmdbXVxuICApIHtcbiAgICBpZiAoYWN0aW9uPy5tZXRhPy5lbnRpdHlJZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxFbnRpdHlTdGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG5ld0VudGl0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLnJlZHVjZShcbiAgICAgICAgKGFjYzogYW55LCBjdXIpID0+IHtcbiAgICAgICAgICBpZiAoaWRzLmluY2x1ZGVzKGN1cikpIHtcbiAgICAgICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2NbY3VyXSA9IHN0YXRlLmVudGl0aWVzW2N1cl07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcmVtb3ZlZCA/IHsgZW50aXRpZXM6IG5ld0VudGl0aWVzIH0gOiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==