/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators, } from '@angular/forms';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { FileUploadComponent } from '../../form';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../services/file/files-form-validators";
import * as i3 from "@angular/common";
import * as i4 from "../../../../cms-components/misc/icon/icon.component";
import * as i5 from "@angular/forms";
import * as i6 from "../../form/file-upload/file-upload.component";
import * as i7 from "../../form/form-errors/form-errors.component";
import * as i8 from "../avatar/avatar.component";
export class MessagingComponent {
    get inputCharacterLeft() {
        return ((this.messagingConfigs?.charactersLimit || this.MAX_INPUT_CHARACTERS) -
            (this.form.get('message')?.value?.length || 0));
    }
    get maxSize() {
        return (this.messagingConfigs?.attachmentRestrictions?.maxSize || this.MAX_SIZE);
    }
    get maxEntries() {
        return (this.messagingConfigs?.attachmentRestrictions?.maxEntries ||
            this.MAX_ENTRIES);
    }
    get allowedTypes() {
        return this.messagingConfigs?.attachmentRestrictions?.allowedTypes || [];
    }
    constructor(windowRef, filesFormValidators) {
        this.windowRef = windowRef;
        this.filesFormValidators = filesFormValidators;
        this.scrollToInput = true;
        this.send = new EventEmitter();
        this.downloadAttachment = new EventEmitter();
        this.iconTypes = ICON_TYPE;
        this.MAX_INPUT_CHARACTERS = 2000;
        this.MAX_SIZE = 10;
        this.MAX_ENTRIES = 1;
        this.dateFormat = 'MMMM d, YYYY h:mm aa';
        this.scrollOnceOnLoad = true;
    }
    ngOnInit() {
        this.buildForm();
    }
    ngAfterViewChecked() {
        if (this.scrollToInput) {
            this.observeScroll();
            if (this.scrollOnceOnLoad) {
                this.scrollOnLoad();
            }
        }
    }
    onSend() {
        if (this.form.valid) {
            this.send.emit({
                files: this.form.get('file')?.value,
                message: this.form.get('message')?.value,
            });
        }
    }
    resetForm() {
        this.form.reset();
        this.fileUploadComponent.removeFile();
    }
    triggerDownload(messageCode, attachmentId, fileName) {
        this.downloadAttachment.emit({
            messageCode: messageCode,
            attachmentId: attachmentId,
            fileName: fileName,
        });
    }
    buildForm() {
        const form = new UntypedFormGroup({});
        form.setControl('message', new UntypedFormControl('', [
            Validators.required,
            Validators.maxLength(this.messagingConfigs?.charactersLimit || this.MAX_INPUT_CHARACTERS),
        ]));
        form.setControl('file', new UntypedFormControl('', [
            this.filesFormValidators.maxSize(this.maxSize),
            this.filesFormValidators.maxEntries(this.maxEntries),
            this.filesFormValidators.allowedTypes(this.allowedTypes),
        ]));
        this.form = form;
    }
    focusNextChild(event) {
        event.preventDefault();
        const [results, focusedIndex] = [
            this.getResultElements(),
            this.getFocusedIndex(),
        ];
        if (results.length) {
            if (focusedIndex >= results.length - 1) {
                results[0].focus();
            }
            else {
                results[focusedIndex + 1].focus();
            }
        }
    }
    focusPreviousChild(event) {
        if (!this.windowRef.isBrowser()) {
            return;
        }
        event.preventDefault();
        const [results, focusedIndex] = [
            this.getResultElements(),
            this.getFocusedIndex(),
        ];
        if (results.length) {
            if (focusedIndex < 1) {
                results[results.length - 1].focus();
            }
            else {
                results[focusedIndex - 1].focus();
            }
        }
    }
    observeScroll() {
        const element = this.windowRef.document.querySelector('.cx-messages');
        if (element) {
            const resizeObserver = new ResizeObserver((entries) => {
                this.scrollToBottom(element, entries[0].target.scrollHeight);
                this.updatedScrollHeight = entries[0].target.scrollHeight;
            });
            resizeObserver.observe(element);
        }
    }
    scrollToBottom(element, previousScrollHeight) {
        if (this.heightChanged(previousScrollHeight)) {
            element?.scroll({
                top: element?.scrollHeight,
                behavior: 'auto',
            });
        }
    }
    heightChanged(previousScrollHeight) {
        return this.updatedScrollHeight !== previousScrollHeight;
    }
    scrollOnLoad() {
        const element = this.windowRef.document.getElementById('cx-message-footer');
        const resizeObserver = new ResizeObserver(() => {
            element?.scrollIntoView({ behavior: 'auto', block: 'end' });
            this.scrollOnceOnLoad = false;
        });
        if (element) {
            resizeObserver.observe(element);
        }
    }
    getResultElements() {
        return Array.from(this.windowRef.document.querySelectorAll('[role="listitem"]'));
    }
    getFocusedIndex() {
        return this.getResultElements().indexOf(this.getFocusedElement());
    }
    getFocusedElement() {
        return this.windowRef.document.activeElement;
    }
}
MessagingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: MessagingComponent, deps: [{ token: i1.WindowRef }, { token: i2.FilesFormValidators }], target: i0.ɵɵFactoryTarget.Component });
MessagingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.4", type: MessagingComponent, selector: "cx-messaging", inputs: { messageEvents$: "messageEvents$", scrollToInput: "scrollToInput", messagingConfigs: "messagingConfigs" }, outputs: { send: "send", downloadAttachment: "downloadAttachment" }, viewQueries: [{ propertyName: "fileUploadComponent", first: true, predicate: FileUploadComponent, descendants: true }], ngImport: i0, template: "<ng-container *ngIf=\"messageEvents$ | async as messageEvents\">\n  <div class=\"container\">\n    <div class=\"cx-avatar-line\"></div>\n    <div\n      class=\"cx-messages\"\n      id=\"cx-messages\"\n      (keydown.arrowdown)=\"focusNextChild($any($event))\"\n      (keydown.arrowup)=\"focusPreviousChild($any($event))\"\n      [attr.aria-label]=\"'chatMessaging.messages' | cxTranslate\"\n    >\n      <ng-container *ngFor=\"let message of messageEvents; let i = index\">\n        <div\n          class=\"cx-message-card\"\n          [ngClass]=\"{ 'cx-message-display': message?.rightAlign ?? false }\"\n        >\n          <cx-avatar [message]=\"message!\"> </cx-avatar>\n\n          <div>\n            <label>{{\n              (message?.createdAt | cxDate: messagingConfigs?.dateFormat) ??\n                dateFormat\n            }}</label>\n            <div\n              [ngClass]=\"\n                message?.rightAlign ?? false\n                  ? 'cx-message-right-align-text'\n                  : 'cx-message-left-align-text'\n              \"\n              [tabindex]=\"i ? -1 : 0\"\n              role=\"listitem\"\n              [attr.aria-label]=\"\n                'chatMessaging.informationLabel'\n                  | cxTranslate\n                    : {\n                        author: message?.author!,\n                        text: message?.text!,\n                        date:\n                          (message?.createdAt\n                            | cxDate: messagingConfigs?.dateFormat) ??\n                          dateFormat\n                      }\n              \"\n            >\n              {{ message?.text! }}\n            </div>\n            <a\n              *ngFor=\"let attachment of message?.attachments ?? []\"\n              class=\"cx-attachment\"\n              (click)=\"\n                triggerDownload(\n                  message?.code,\n                  attachment?.id,\n                  attachment?.filename\n                )\n              \"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n            >\n              <cx-icon [type]=\"iconTypes.ATTACHMENT\"></cx-icon>\n              {{ attachment.filename }}\n            </a>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div\n    [formGroup]=\"form\"\n    class=\"cx-message-footer\"\n    *ngIf=\"messagingConfigs?.displayAddMessageSection | async\"\n  >\n    <div class=\"cx-message-box\">\n      <label class=\"cx-footer-label\">\n        <span>\n          {{ 'chatMessaging.addNewMessage' | cxTranslate }}\n        </span>\n        <div class=\"cx-message-input\">\n          <input\n            formControlName=\"message\"\n            type=\"text\"\n            class=\"form-control\"\n            (keydown.enter)=\"onSend()\"\n            [maxLength]=\"\n              messagingConfigs?.charactersLimit || MAX_INPUT_CHARACTERS\n            \"\n            placeholder=\"{{\n              messagingConfigs?.newMessagePlaceHolder ||\n                ('chatMessaging.addMessagePlaceHolder' | cxTranslate)\n            }}\"\n          />\n          <span\n            class=\"cx-visually-hidden\"\n            *ngIf=\"inputCharacterLeft === 0\"\n            role=\"alert\"\n          >\n            {{ 'chatMessaging.characterLimitAlert' | cxTranslate }}\n          </span>\n          <button class=\"btn btn-block btn-primary cx-send\" (click)=\"onSend()\">\n            {{ 'chatMessaging.send' | cxTranslate }}\n          </button>\n        </div>\n      </label>\n      <div class=\"cx-message-footer-info\" id=\"cx-message-footer\">\n        <cx-file-upload\n          [formControl]=\"$any(form.get('file'))\"\n          [accept]=\"allowedTypes\"\n          *ngIf=\"messagingConfigs?.enableFileUploadOption\"\n        >\n          <ng-template>\n            <cx-icon [type]=\"iconTypes.UPLOAD\"></cx-icon>\n            <span class=\"cx-message-footer-text\"\n              >{{ 'chatMessaging.uploadFile' | cxTranslate }}\n            </span>\n          </ng-template>\n        </cx-file-upload>\n\n        <p class=\"cx-message-footer-info-text\">\n          {{\n            'chatMessaging.charactersLeft'\n              | cxTranslate: { count: inputCharacterLeft }\n          }}\n        </p>\n      </div>\n      <cx-form-errors\n        [control]=\"form.get('file')\"\n        prefix=\"formErrors.file\"\n      ></cx-form-errors>\n    </div>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.FileUploadComponent, selector: "cx-file-upload", inputs: ["accept", "multiple"], outputs: ["update"] }, { kind: "component", type: i7.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "component", type: i8.AvatarComponent, selector: "cx-avatar", inputs: ["message"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i1.CxDatePipe, name: "cxDate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: MessagingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-messaging', template: "<ng-container *ngIf=\"messageEvents$ | async as messageEvents\">\n  <div class=\"container\">\n    <div class=\"cx-avatar-line\"></div>\n    <div\n      class=\"cx-messages\"\n      id=\"cx-messages\"\n      (keydown.arrowdown)=\"focusNextChild($any($event))\"\n      (keydown.arrowup)=\"focusPreviousChild($any($event))\"\n      [attr.aria-label]=\"'chatMessaging.messages' | cxTranslate\"\n    >\n      <ng-container *ngFor=\"let message of messageEvents; let i = index\">\n        <div\n          class=\"cx-message-card\"\n          [ngClass]=\"{ 'cx-message-display': message?.rightAlign ?? false }\"\n        >\n          <cx-avatar [message]=\"message!\"> </cx-avatar>\n\n          <div>\n            <label>{{\n              (message?.createdAt | cxDate: messagingConfigs?.dateFormat) ??\n                dateFormat\n            }}</label>\n            <div\n              [ngClass]=\"\n                message?.rightAlign ?? false\n                  ? 'cx-message-right-align-text'\n                  : 'cx-message-left-align-text'\n              \"\n              [tabindex]=\"i ? -1 : 0\"\n              role=\"listitem\"\n              [attr.aria-label]=\"\n                'chatMessaging.informationLabel'\n                  | cxTranslate\n                    : {\n                        author: message?.author!,\n                        text: message?.text!,\n                        date:\n                          (message?.createdAt\n                            | cxDate: messagingConfigs?.dateFormat) ??\n                          dateFormat\n                      }\n              \"\n            >\n              {{ message?.text! }}\n            </div>\n            <a\n              *ngFor=\"let attachment of message?.attachments ?? []\"\n              class=\"cx-attachment\"\n              (click)=\"\n                triggerDownload(\n                  message?.code,\n                  attachment?.id,\n                  attachment?.filename\n                )\n              \"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n            >\n              <cx-icon [type]=\"iconTypes.ATTACHMENT\"></cx-icon>\n              {{ attachment.filename }}\n            </a>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div\n    [formGroup]=\"form\"\n    class=\"cx-message-footer\"\n    *ngIf=\"messagingConfigs?.displayAddMessageSection | async\"\n  >\n    <div class=\"cx-message-box\">\n      <label class=\"cx-footer-label\">\n        <span>\n          {{ 'chatMessaging.addNewMessage' | cxTranslate }}\n        </span>\n        <div class=\"cx-message-input\">\n          <input\n            formControlName=\"message\"\n            type=\"text\"\n            class=\"form-control\"\n            (keydown.enter)=\"onSend()\"\n            [maxLength]=\"\n              messagingConfigs?.charactersLimit || MAX_INPUT_CHARACTERS\n            \"\n            placeholder=\"{{\n              messagingConfigs?.newMessagePlaceHolder ||\n                ('chatMessaging.addMessagePlaceHolder' | cxTranslate)\n            }}\"\n          />\n          <span\n            class=\"cx-visually-hidden\"\n            *ngIf=\"inputCharacterLeft === 0\"\n            role=\"alert\"\n          >\n            {{ 'chatMessaging.characterLimitAlert' | cxTranslate }}\n          </span>\n          <button class=\"btn btn-block btn-primary cx-send\" (click)=\"onSend()\">\n            {{ 'chatMessaging.send' | cxTranslate }}\n          </button>\n        </div>\n      </label>\n      <div class=\"cx-message-footer-info\" id=\"cx-message-footer\">\n        <cx-file-upload\n          [formControl]=\"$any(form.get('file'))\"\n          [accept]=\"allowedTypes\"\n          *ngIf=\"messagingConfigs?.enableFileUploadOption\"\n        >\n          <ng-template>\n            <cx-icon [type]=\"iconTypes.UPLOAD\"></cx-icon>\n            <span class=\"cx-message-footer-text\"\n              >{{ 'chatMessaging.uploadFile' | cxTranslate }}\n            </span>\n          </ng-template>\n        </cx-file-upload>\n\n        <p class=\"cx-message-footer-info-text\">\n          {{\n            'chatMessaging.charactersLeft'\n              | cxTranslate: { count: inputCharacterLeft }\n          }}\n        </p>\n      </div>\n      <cx-form-errors\n        [control]=\"form.get('file')\"\n        prefix=\"formErrors.file\"\n      ></cx-form-errors>\n    </div>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.WindowRef }, { type: i2.FilesFormValidators }]; }, propDecorators: { fileUploadComponent: [{
                type: ViewChild,
                args: [FileUploadComponent]
            }], messageEvents$: [{
                type: Input
            }], scrollToInput: [{
                type: Input
            }], messagingConfigs: [{
                type: Input
            }], send: [{
                type: Output
            }], downloadAttachment: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc2hhcmVkL2NvbXBvbmVudHMvY2hhdC1tZXNzYWdpbmcvbWVzc2FnaW5nL21lc3NhZ2luZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NoYXJlZC9jb21wb25lbnRzL2NoYXQtbWVzc2FnaW5nL21lc3NhZ2luZy9tZXNzYWdpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUU1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFPakQsTUFBTSxPQUFPLGtCQUFrQjtJQTRCN0IsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDckUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sQ0FDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQ3hFLENB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Q0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksT0FBTyxFQUFFO1lBQ1gsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRU8sZUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsT0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQzVELENBQUM7OytHQTNNVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixrU0FDbEIsbUJBQW1CLGdEQ2hDaEMsdTNJQW1JQTsyRkRwR2Esa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLGNBQWM7a0lBSVEsbUJBQW1CO3NCQUFsRCxTQUFTO3VCQUFDLG1CQUFtQjtnQkFFckIsY0FBYztzQkFBdEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFSSxJQUFJO3NCQUFiLE1BQU07Z0JBS0csa0JBQWtCO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFVudHlwZWRGb3JtQ29udHJvbCxcbiAgVW50eXBlZEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEZpbGVzRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9maWxlL2ZpbGVzLWZvcm0tdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZm9ybSc7XG5pbXBvcnQgeyBNZXNzYWdlRXZlbnQsIE1lc3NhZ2luZ0NvbmZpZ3MgfSBmcm9tICcuL21lc3NhZ2luZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1lc3NhZ2luZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBAVmlld0NoaWxkKEZpbGVVcGxvYWRDb21wb25lbnQpIGZpbGVVcGxvYWRDb21wb25lbnQ6IEZpbGVVcGxvYWRDb21wb25lbnQ7XG5cbiAgQElucHV0KCkgbWVzc2FnZUV2ZW50cyQ6IE9ic2VydmFibGU8QXJyYXk8TWVzc2FnZUV2ZW50Pj47XG4gIEBJbnB1dCgpIHNjcm9sbFRvSW5wdXQ/OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbWVzc2FnaW5nQ29uZmlncz86IE1lc3NhZ2luZ0NvbmZpZ3M7XG5cbiAgQE91dHB1dCgpIHNlbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBmaWxlczogRmlsZSB8IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpIGRvd25sb2FkQXR0YWNobWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG1lc3NhZ2VDb2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgYXR0YWNobWVudElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfT4oKTtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGZvcm06IFVudHlwZWRGb3JtR3JvdXA7XG5cbiAgTUFYX0lOUFVUX0NIQVJBQ1RFUlM6IG51bWJlciA9IDIwMDA7XG4gIE1BWF9TSVpFOiBudW1iZXIgPSAxMDtcbiAgTUFYX0VOVFJJRVM6IG51bWJlciA9IDE7XG4gIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdNTU1NIGQsIFlZWVkgaDptbSBhYSc7XG4gIHVwZGF0ZWRTY3JvbGxIZWlnaHQ6IG51bWJlcjtcbiAgc2Nyb2xsT25jZU9uTG9hZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2V0IGlucHV0Q2hhcmFjdGVyTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5tZXNzYWdpbmdDb25maWdzPy5jaGFyYWN0ZXJzTGltaXQgfHwgdGhpcy5NQVhfSU5QVVRfQ0hBUkFDVEVSUykgLVxuICAgICAgKHRoaXMuZm9ybS5nZXQoJ21lc3NhZ2UnKT8udmFsdWU/Lmxlbmd0aCB8fCAwKVxuICAgICk7XG4gIH1cblxuICBnZXQgbWF4U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lc3NhZ2luZ0NvbmZpZ3M/LmF0dGFjaG1lbnRSZXN0cmljdGlvbnM/Lm1heFNpemUgfHwgdGhpcy5NQVhfU0laRVxuICAgICk7XG4gIH1cblxuICBnZXQgbWF4RW50cmllcygpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lc3NhZ2luZ0NvbmZpZ3M/LmF0dGFjaG1lbnRSZXN0cmljdGlvbnM/Lm1heEVudHJpZXMgfHxcbiAgICAgIHRoaXMuTUFYX0VOVFJJRVNcbiAgICApO1xuICB9XG5cbiAgZ2V0IGFsbG93ZWRUeXBlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdpbmdDb25maWdzPy5hdHRhY2htZW50UmVzdHJpY3Rpb25zPy5hbGxvd2VkVHlwZXMgfHwgW107XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luZG93UmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGZpbGVzRm9ybVZhbGlkYXRvcnM6IEZpbGVzRm9ybVZhbGlkYXRvcnNcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsVG9JbnB1dCkge1xuICAgICAgdGhpcy5vYnNlcnZlU2Nyb2xsKCk7XG4gICAgICBpZiAodGhpcy5zY3JvbGxPbmNlT25Mb2FkKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsT25Mb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TZW5kKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuc2VuZC5lbWl0KHtcbiAgICAgICAgZmlsZXM6IHRoaXMuZm9ybS5nZXQoJ2ZpbGUnKT8udmFsdWUsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuZm9ybS5nZXQoJ21lc3NhZ2UnKT8udmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgdGhpcy5maWxlVXBsb2FkQ29tcG9uZW50LnJlbW92ZUZpbGUoKTtcbiAgfVxuXG4gIHRyaWdnZXJEb3dubG9hZChcbiAgICBtZXNzYWdlQ29kZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGF0dGFjaG1lbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5kb3dubG9hZEF0dGFjaG1lbnQuZW1pdCh7XG4gICAgICBtZXNzYWdlQ29kZTogbWVzc2FnZUNvZGUsXG4gICAgICBhdHRhY2htZW50SWQ6IGF0dGFjaG1lbnRJZCxcbiAgICAgIGZpbGVOYW1lOiBmaWxlTmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZEZvcm0oKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KTtcbiAgICBmb3JtLnNldENvbnRyb2woXG4gICAgICAnbWVzc2FnZScsXG4gICAgICBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnLCBbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKFxuICAgICAgICAgIHRoaXMubWVzc2FnaW5nQ29uZmlncz8uY2hhcmFjdGVyc0xpbWl0IHx8IHRoaXMuTUFYX0lOUFVUX0NIQVJBQ1RFUlNcbiAgICAgICAgKSxcbiAgICAgIF0pXG4gICAgKTtcbiAgICBmb3JtLnNldENvbnRyb2woXG4gICAgICAnZmlsZScsXG4gICAgICBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnLCBbXG4gICAgICAgIHRoaXMuZmlsZXNGb3JtVmFsaWRhdG9ycy5tYXhTaXplKHRoaXMubWF4U2l6ZSksXG4gICAgICAgIHRoaXMuZmlsZXNGb3JtVmFsaWRhdG9ycy5tYXhFbnRyaWVzKHRoaXMubWF4RW50cmllcyksXG4gICAgICAgIHRoaXMuZmlsZXNGb3JtVmFsaWRhdG9ycy5hbGxvd2VkVHlwZXModGhpcy5hbGxvd2VkVHlwZXMpLFxuICAgICAgXSlcbiAgICApO1xuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gIH1cblxuICBmb2N1c05leHRDaGlsZChldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBbcmVzdWx0cywgZm9jdXNlZEluZGV4XSA9IFtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0RWxlbWVudHMoKSxcbiAgICAgIHRoaXMuZ2V0Rm9jdXNlZEluZGV4KCksXG4gICAgXTtcblxuICAgIGlmIChyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgaWYgKGZvY3VzZWRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmVzdWx0c1swXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tmb2N1c2VkSW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldmlvdXNDaGlsZChldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy53aW5kb3dSZWYuaXNCcm93c2VyKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgW3Jlc3VsdHMsIGZvY3VzZWRJbmRleF0gPSBbXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCksXG4gICAgICB0aGlzLmdldEZvY3VzZWRJbmRleCgpLFxuICAgIF07XG5cbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChmb2N1c2VkSW5kZXggPCAxKSB7XG4gICAgICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tmb2N1c2VkSW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvYnNlcnZlU2Nyb2xsKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLndpbmRvd1JlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3gtbWVzc2FnZXMnKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbShlbGVtZW50LCBlbnRyaWVzWzBdLnRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZWRTY3JvbGxIZWlnaHQgPSBlbnRyaWVzWzBdLnRhcmdldC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9KTtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNjcm9sbFRvQm90dG9tKGVsZW1lbnQ6IEVsZW1lbnQsIHByZXZpb3VzU2Nyb2xsSGVpZ2h0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5oZWlnaHRDaGFuZ2VkKHByZXZpb3VzU2Nyb2xsSGVpZ2h0KSkge1xuICAgICAgZWxlbWVudD8uc2Nyb2xsKHtcbiAgICAgICAgdG9wOiBlbGVtZW50Py5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGJlaGF2aW9yOiAnYXV0bycsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaGVpZ2h0Q2hhbmdlZChwcmV2aW91c1Njcm9sbEhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlZFNjcm9sbEhlaWdodCAhPT0gcHJldmlvdXNTY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2Nyb2xsT25Mb2FkKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLndpbmRvd1JlZi5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3gtbWVzc2FnZS1mb290ZXInKTtcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICBlbGVtZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnYXV0bycsIGJsb2NrOiAnZW5kJyB9KTtcbiAgICAgIHRoaXMuc2Nyb2xsT25jZU9uTG9hZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVzdWx0RWxlbWVudHMoKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICB0aGlzLndpbmRvd1JlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cImxpc3RpdGVtXCJdJylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb2N1c2VkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLmluZGV4T2YodGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9jdXNlZEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiA8SFRNTEVsZW1lbnQ+dGhpcy53aW5kb3dSZWYuZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1lc3NhZ2VFdmVudHMkIHwgYXN5bmMgYXMgbWVzc2FnZUV2ZW50c1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImN4LWF2YXRhci1saW5lXCI+PC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjeC1tZXNzYWdlc1wiXG4gICAgICBpZD1cImN4LW1lc3NhZ2VzXCJcbiAgICAgIChrZXlkb3duLmFycm93ZG93bik9XCJmb2N1c05leHRDaGlsZCgkYW55KCRldmVudCkpXCJcbiAgICAgIChrZXlkb3duLmFycm93dXApPVwiZm9jdXNQcmV2aW91c0NoaWxkKCRhbnkoJGV2ZW50KSlcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInY2hhdE1lc3NhZ2luZy5tZXNzYWdlcycgfCBjeFRyYW5zbGF0ZVwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlRXZlbnRzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImN4LW1lc3NhZ2UtY2FyZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyAnY3gtbWVzc2FnZS1kaXNwbGF5JzogbWVzc2FnZT8ucmlnaHRBbGlnbiA/PyBmYWxzZSB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjeC1hdmF0YXIgW21lc3NhZ2VdPVwibWVzc2FnZSFcIj4gPC9jeC1hdmF0YXI+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPnt7XG4gICAgICAgICAgICAgIChtZXNzYWdlPy5jcmVhdGVkQXQgfCBjeERhdGU6IG1lc3NhZ2luZ0NvbmZpZ3M/LmRhdGVGb3JtYXQpID8/XG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdFxuICAgICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICAgICAgICBtZXNzYWdlPy5yaWdodEFsaWduID8/IGZhbHNlXG4gICAgICAgICAgICAgICAgICA/ICdjeC1tZXNzYWdlLXJpZ2h0LWFsaWduLXRleHQnXG4gICAgICAgICAgICAgICAgICA6ICdjeC1tZXNzYWdlLWxlZnQtYWxpZ24tdGV4dCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgW3RhYmluZGV4XT1cImkgPyAtMSA6IDBcIlxuICAgICAgICAgICAgICByb2xlPVwibGlzdGl0ZW1cIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAgICAgICAgICdjaGF0TWVzc2FnaW5nLmluZm9ybWF0aW9uTGFiZWwnXG4gICAgICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBtZXNzYWdlPy5hdXRob3IhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVzc2FnZT8udGV4dCEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAobWVzc2FnZT8uY3JlYXRlZEF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjeERhdGU6IG1lc3NhZ2luZ0NvbmZpZ3M/LmRhdGVGb3JtYXQpID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IG1lc3NhZ2U/LnRleHQhIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBhdHRhY2htZW50IG9mIG1lc3NhZ2U/LmF0dGFjaG1lbnRzID8/IFtdXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjeC1hdHRhY2htZW50XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIlxuICAgICAgICAgICAgICAgIHRyaWdnZXJEb3dubG9hZChcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U/LmNvZGUsXG4gICAgICAgICAgICAgICAgICBhdHRhY2htZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQ/LmZpbGVuYW1lXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGN4LWljb24gW3R5cGVdPVwiaWNvblR5cGVzLkFUVEFDSE1FTlRcIj48L2N4LWljb24+XG4gICAgICAgICAgICAgIHt7IGF0dGFjaG1lbnQuZmlsZW5hbWUgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgY2xhc3M9XCJjeC1tZXNzYWdlLWZvb3RlclwiXG4gICAgKm5nSWY9XCJtZXNzYWdpbmdDb25maWdzPy5kaXNwbGF5QWRkTWVzc2FnZVNlY3Rpb24gfCBhc3luY1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiY3gtbWVzc2FnZS1ib3hcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImN4LWZvb3Rlci1sYWJlbFwiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7eyAnY2hhdE1lc3NhZ2luZy5hZGROZXdNZXNzYWdlJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LW1lc3NhZ2UtaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwib25TZW5kKClcIlxuICAgICAgICAgICAgW21heExlbmd0aF09XCJcbiAgICAgICAgICAgICAgbWVzc2FnaW5nQ29uZmlncz8uY2hhcmFjdGVyc0xpbWl0IHx8IE1BWF9JTlBVVF9DSEFSQUNURVJTXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e1xuICAgICAgICAgICAgICBtZXNzYWdpbmdDb25maWdzPy5uZXdNZXNzYWdlUGxhY2VIb2xkZXIgfHxcbiAgICAgICAgICAgICAgICAoJ2NoYXRNZXNzYWdpbmcuYWRkTWVzc2FnZVBsYWNlSG9sZGVyJyB8IGN4VHJhbnNsYXRlKVxuICAgICAgICAgICAgfX1cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwiY3gtdmlzdWFsbHktaGlkZGVuXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5wdXRDaGFyYWN0ZXJMZWZ0ID09PSAwXCJcbiAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJ2NoYXRNZXNzYWdpbmcuY2hhcmFjdGVyTGltaXRBbGVydCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeSBjeC1zZW5kXCIgKGNsaWNrKT1cIm9uU2VuZCgpXCI+XG4gICAgICAgICAgICB7eyAnY2hhdE1lc3NhZ2luZy5zZW5kJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC1tZXNzYWdlLWZvb3Rlci1pbmZvXCIgaWQ9XCJjeC1tZXNzYWdlLWZvb3RlclwiPlxuICAgICAgICA8Y3gtZmlsZS11cGxvYWRcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtLmdldCgnZmlsZScpKVwiXG4gICAgICAgICAgW2FjY2VwdF09XCJhbGxvd2VkVHlwZXNcIlxuICAgICAgICAgICpuZ0lmPVwibWVzc2FnaW5nQ29uZmlncz8uZW5hYmxlRmlsZVVwbG9hZE9wdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8Y3gtaWNvbiBbdHlwZV09XCJpY29uVHlwZXMuVVBMT0FEXCI+PC9jeC1pY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjeC1tZXNzYWdlLWZvb3Rlci10ZXh0XCJcbiAgICAgICAgICAgICAgPnt7ICdjaGF0TWVzc2FnaW5nLnVwbG9hZEZpbGUnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2N4LWZpbGUtdXBsb2FkPlxuXG4gICAgICAgIDxwIGNsYXNzPVwiY3gtbWVzc2FnZS1mb290ZXItaW5mby10ZXh0XCI+XG4gICAgICAgICAge3tcbiAgICAgICAgICAgICdjaGF0TWVzc2FnaW5nLmNoYXJhY3RlcnNMZWZ0J1xuICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlOiB7IGNvdW50OiBpbnB1dENoYXJhY3RlckxlZnQgfVxuICAgICAgICAgIH19XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGN4LWZvcm0tZXJyb3JzXG4gICAgICAgIFtjb250cm9sXT1cImZvcm0uZ2V0KCdmaWxlJylcIlxuICAgICAgICBwcmVmaXg9XCJmb3JtRXJyb3JzLmZpbGVcIlxuICAgICAgPjwvY3gtZm9ybS1lcnJvcnM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=