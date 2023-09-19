/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
function isFeatureConfig(config) {
    return typeof config === 'object' && !!config.features;
}
function isInLevel(level, version) {
    if (level === '*') {
        return true;
    }
    const levelParts = level.split('.');
    const versionParts = version.split('.');
    for (let i = 0; i < versionParts.length; i++) {
        const versionNumberPart = Number(versionParts[i]);
        const levelNumberPart = Number(levelParts[i]) || 0;
        if (versionNumberPart !== levelNumberPart) {
            return levelNumberPart > versionNumberPart;
        }
    }
    return true;
}
export function isFeatureLevel(config, level) {
    if (isFeatureConfig(config) && config.features.level) {
        return level.startsWith('!')
            ? !isInLevel(config.features.level, level.substring(1))
            : isInLevel(config.features.level, level);
    }
    return false;
}
export function isFeatureEnabled(config, feature) {
    if (isFeatureConfig(config)) {
        const featureConfig = feature[0] === '!'
            ? config.features[feature.substring(1)]
            : config.features[feature];
        const result = typeof featureConfig === 'string'
            ? isFeatureLevel(config, featureConfig)
            : featureConfig;
        return feature.startsWith('!') ? !result : !!result;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jb25maWctdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9mZWF0dXJlcy1jb25maWcvdXRpbHMvZmVhdHVyZS1jb25maWctdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUtILFNBQVMsZUFBZSxDQUFDLE1BQWM7SUFDckMsT0FBTyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDekQsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQWEsRUFBRSxPQUFlO0lBQy9DLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBSSxpQkFBaUIsS0FBSyxlQUFlLEVBQUU7WUFDekMsT0FBTyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7U0FDNUM7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBYyxFQUFFLEtBQWE7SUFDMUQsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDcEQsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzdDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE1BQWMsRUFBRSxPQUFlO0lBQzlELElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNCLE1BQU0sYUFBYSxHQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztZQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLE1BQU0sTUFBTSxHQUNWLE9BQU8sYUFBYSxLQUFLLFFBQVE7WUFDL0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFFcEIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUNyRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctdG9rZW5zJztcbmltcG9ydCB7IEZlYXR1cmVzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2ZlYXR1cmVzLWNvbmZpZyc7XG5cbmZ1bmN0aW9uIGlzRmVhdHVyZUNvbmZpZyhjb25maWc6IENvbmZpZyk6IGNvbmZpZyBpcyBSZXF1aXJlZDxGZWF0dXJlc0NvbmZpZz4ge1xuICByZXR1cm4gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgISFjb25maWcuZmVhdHVyZXM7XG59XG5cbmZ1bmN0aW9uIGlzSW5MZXZlbChsZXZlbDogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGxldmVsID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBsZXZlbFBhcnRzID0gbGV2ZWwuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmVyc2lvblBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVyc2lvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdmVyc2lvbk51bWJlclBhcnQgPSBOdW1iZXIodmVyc2lvblBhcnRzW2ldKTtcbiAgICBjb25zdCBsZXZlbE51bWJlclBhcnQgPSBOdW1iZXIobGV2ZWxQYXJ0c1tpXSkgfHwgMDtcblxuICAgIGlmICh2ZXJzaW9uTnVtYmVyUGFydCAhPT0gbGV2ZWxOdW1iZXJQYXJ0KSB7XG4gICAgICByZXR1cm4gbGV2ZWxOdW1iZXJQYXJ0ID4gdmVyc2lvbk51bWJlclBhcnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGZWF0dXJlTGV2ZWwoY29uZmlnOiBDb25maWcsIGxldmVsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlzRmVhdHVyZUNvbmZpZyhjb25maWcpICYmIGNvbmZpZy5mZWF0dXJlcy5sZXZlbCkge1xuICAgIHJldHVybiBsZXZlbC5zdGFydHNXaXRoKCchJylcbiAgICAgID8gIWlzSW5MZXZlbChjb25maWcuZmVhdHVyZXMubGV2ZWwsIGxldmVsLnN1YnN0cmluZygxKSlcbiAgICAgIDogaXNJbkxldmVsKGNvbmZpZy5mZWF0dXJlcy5sZXZlbCwgbGV2ZWwpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmVhdHVyZUVuYWJsZWQoY29uZmlnOiBDb25maWcsIGZlYXR1cmU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoaXNGZWF0dXJlQ29uZmlnKGNvbmZpZykpIHtcbiAgICBjb25zdCBmZWF0dXJlQ29uZmlnID1cbiAgICAgIGZlYXR1cmVbMF0gPT09ICchJ1xuICAgICAgICA/IGNvbmZpZy5mZWF0dXJlc1tmZWF0dXJlLnN1YnN0cmluZygxKV1cbiAgICAgICAgOiBjb25maWcuZmVhdHVyZXNbZmVhdHVyZV07XG5cbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgdHlwZW9mIGZlYXR1cmVDb25maWcgPT09ICdzdHJpbmcnXG4gICAgICAgID8gaXNGZWF0dXJlTGV2ZWwoY29uZmlnLCBmZWF0dXJlQ29uZmlnKVxuICAgICAgICA6IGZlYXR1cmVDb25maWc7XG5cbiAgICByZXR1cm4gZmVhdHVyZS5zdGFydHNXaXRoKCchJykgPyAhcmVzdWx0IDogISFyZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19