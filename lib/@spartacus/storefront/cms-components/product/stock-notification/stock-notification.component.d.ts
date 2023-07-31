import { ElementRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { GlobalMessageService, TranslationService, UserIdService, UserInterestsService, UserNotificationPreferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import { LaunchDialogService } from '../../../layout/index';
import * as i0 from "@angular/core";
export declare class StockNotificationComponent implements OnInit, OnDestroy {
    private currentProductService;
    private globalMessageService;
    private translationService;
    private interestsService;
    private notificationPrefService;
    private userIdService;
    protected launchDialogService: LaunchDialogService;
    protected vcr: ViewContainerRef;
    hasProductInterests$: Observable<boolean>;
    prefsEnabled$: Observable<boolean>;
    outOfStock$: Observable<boolean>;
    isRemoveInterestLoading$: Observable<boolean>;
    anonymous: boolean;
    private enabledPrefs;
    private productCode;
    private subscribeSuccess$;
    private subscriptions;
    element: ElementRef;
    constructor(currentProductService: CurrentProductService, globalMessageService: GlobalMessageService, translationService: TranslationService, interestsService: UserInterestsService, notificationPrefService: UserNotificationPreferenceService, userIdService: UserIdService, launchDialogService: LaunchDialogService, vcr: ViewContainerRef);
    ngOnInit(): void;
    subscribe(): void;
    unsubscribe(): void;
    private onInterestRemovingSuccess;
    private onInterestAddingError;
    private openDialog;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StockNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StockNotificationComponent, "cx-stock-notification", never, {}, {}, never, never, false, never>;
}
