/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
export const LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
export const LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
export const POST_PRODUCT_REVIEW = '[Product] Post Product Review';
export const POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
export const POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
export class LoadProductReviews {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS;
    }
}
export class LoadProductReviewsFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    }
}
export class LoadProductReviewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
    }
}
export class PostProductReview {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW;
    }
}
export class PostProductReviewFail {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_FAIL;
    }
}
export class PostProductReviewSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXJldmlld3MuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFNSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxxQ0FBcUMsQ0FBQztBQUMxRSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FDcEMsMENBQTBDLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQ3ZDLDZDQUE2QyxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLCtCQUErQixDQUFDO0FBQ25FLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLG9DQUFvQyxDQUFDO0FBQzdFLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUN0Qyx1Q0FBdUMsQ0FBQztBQUUxQyxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUNBLENBQUM7Q0FDdkM7QUFFRCxNQUFNLE9BQU8sc0JBQXNCO0lBRWpDLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ0QsQ0FBQztDQUMzQztBQUVELE1BQU0sT0FBTyx5QkFBeUI7SUFFcEMsWUFBbUIsT0FBZ0Q7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFEMUQsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBQ3lCLENBQUM7Q0FDeEU7QUFFRCxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQW1CLE9BQWdEO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQXlDO1FBRDFELFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNrQyxDQUFDO0NBQ3hFO0FBRUQsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFDSixDQUFDO0NBQ3ZDO0FBRUQsTUFBTSxPQUFPLHdCQUF3QjtJQUVuQyxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFDUCxDQUFDO0NBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfUkVWSUVXUyA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IFJldmlld3MgRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFVklFV1NfRkFJTCA9XG4gICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IFJldmlld3MgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfUkVWSUVXU19TVUNDRVNTID1cbiAgJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgUmV2aWV3cyBEYXRhIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFBPU1RfUFJPRFVDVF9SRVZJRVcgPSAnW1Byb2R1Y3RdIFBvc3QgUHJvZHVjdCBSZXZpZXcnO1xuZXhwb3J0IGNvbnN0IFBPU1RfUFJPRFVDVF9SRVZJRVdfRkFJTCA9ICdbUHJvZHVjdF0gUG9zdCBQcm9kdWN0IFJldmlldyBGYWlsJztcbmV4cG9ydCBjb25zdCBQT1NUX1BST0RVQ1RfUkVWSUVXX1NVQ0NFU1MgPVxuICAnW1Byb2R1Y3RdIFBvc3QgUHJvZHVjdCBSZXZpZXcgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFJldmlld3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFVklFV1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFJldmlld3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9SRVZJRVdTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFcnJvck1vZGVsKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RSZXZpZXdzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfUkVWSUVXU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBwcm9kdWN0Q29kZTogc3RyaW5nOyBsaXN0OiBSZXZpZXdbXSB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUG9zdFByb2R1Y3RSZXZpZXcgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUE9TVF9QUk9EVUNUX1JFVklFVztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgcHJvZHVjdENvZGU6IHN0cmluZzsgcmV2aWV3OiBSZXZpZXcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBvc3RQcm9kdWN0UmV2aWV3RmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQT1NUX1BST0RVQ1RfUkVWSUVXX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUE9TVF9QUk9EVUNUX1JFVklFV19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmV2aWV3KSB7fVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFByb2R1Y3RSZXZpZXdzQWN0aW9uID1cbiAgfCBMb2FkUHJvZHVjdFJldmlld3NcbiAgfCBMb2FkUHJvZHVjdFJldmlld3NGYWlsXG4gIHwgTG9hZFByb2R1Y3RSZXZpZXdzU3VjY2Vzc1xuICB8IFBvc3RQcm9kdWN0UmV2aWV3XG4gIHwgUG9zdFByb2R1Y3RSZXZpZXdGYWlsXG4gIHwgUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzO1xuIl19