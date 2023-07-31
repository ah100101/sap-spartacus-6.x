import { Observable } from 'rxjs';
import { ProductFutureStock, ProductFutureStockList } from '../model/future-stock.model';
export declare abstract class FutureStockAdapter {
    /**
     * Abstract method used to get the future product availability for the specified product
     */
    abstract getFutureStock(userId: string, productCode: string): Observable<ProductFutureStock>;
    /**
     * Abstract method  used to get the future product availability for the list of specified products
     * example list of products: '3318057,72399000,3228058'
     */
    abstract getFutureStocks(userId: string, productCodes: string): Observable<ProductFutureStockList>;
}
