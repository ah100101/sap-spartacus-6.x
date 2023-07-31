/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
export function deepMerge(target = {}, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift() || {};
    if (isObject(source)) {
        for (const key in source) {
            if (source[key] instanceof Date) {
                target[key] = source[key];
            }
            else if (isObject(source[key])) {
                if (!target[key] || !isObject(target[key])) {
                    target[key] = {};
                }
                deepMerge(target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        }
    }
    return deepMerge(target, ...sources);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1tZXJnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQVM7SUFDaEMsT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsU0FBa0MsRUFBRSxFQUNwQyxHQUFHLE9BQWM7SUFFakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDbkIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFFckMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFO2dCQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNsQjtnQkFDRCxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBNEIsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRTtpQkFBTTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7S0FDRjtJQUVELE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZShcbiAgdGFyZ2V0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9LFxuICAuLi5zb3VyY2VzOiBhbnlbXVxuKTogYW55IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpIHx8IHt9O1xuXG4gIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldIHx8ICFpc09iamVjdCh0YXJnZXRba2V5XSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVlcE1lcmdlKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iXX0=