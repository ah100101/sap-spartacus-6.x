import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { QuickOrderFacade } from '@spartacus/cart/quick-order/root';
import { Config, Product, WindowRef } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';
import { Observable, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class QuickOrderFormComponent implements OnInit, OnDestroy {
    config: Config;
    protected cd: ChangeDetectorRef;
    protected quickOrderService: QuickOrderFacade;
    protected winRef: WindowRef;
    form: UntypedFormGroup;
    iconTypes: typeof ICON_TYPE;
    isSearching: boolean;
    noResults: boolean;
    results: Product[];
    limit: number;
    protected subscription: Subscription;
    protected searchSubscription: Subscription;
    constructor(config: Config, cd: ChangeDetectorRef, quickOrderService: QuickOrderFacade, winRef: WindowRef);
    ngOnInit(): void;
    onBlur(event: UIEvent): void;
    clear(event?: Event): void;
    add(product: Product, event: Event): void;
    addProduct(event: Event): void;
    focusNextChild(event: UIEvent): void;
    focusPreviousChild(event: UIEvent): void;
    isResultsBoxOpen(): boolean;
    canAddProduct(): Observable<boolean>;
    open(): void;
    protected getResultElements(): HTMLElement[];
    protected blurSuggestionBox(event: UIEvent): void;
    protected getFocusedElement(): HTMLElement | any;
    protected getFocusedIndex(): number;
    protected isSuggestionFocused(): boolean;
    protected toggleBodyClass(className: string, add?: boolean): void;
    protected buildForm(): void;
    protected isEmpty(string?: string): boolean;
    protected watchQueryChange(): Subscription;
    protected searchProducts(query: string): void;
    protected clearResults(): void;
    protected close(): void;
    protected resetSearchSubscription(): void;
    protected watchProductAdd(): Subscription;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickOrderFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickOrderFormComponent, "cx-quick-order-form", never, { "limit": "limit"; }, {}, never, never, false, never>;
}