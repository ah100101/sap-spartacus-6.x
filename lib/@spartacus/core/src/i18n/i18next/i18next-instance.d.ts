import { InjectionToken } from '@angular/core';
import { i18n } from 'i18next';
/**
 * The instance of i18next.
 *
 * Each SSR request gets its own instance of i18next.
 *
 * The reference to the static global instance of `i18next` (`import i18next from 'i18next`)
 * should not be used anywhere else, because otherwise it would be shared in between all SSR requests
 * and can cause concurrency issues.
 */
export declare const I18NEXT_INSTANCE: InjectionToken<i18n>;
