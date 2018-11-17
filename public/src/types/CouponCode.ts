export default interface CouponCode {
    active: boolean;
    code: string;
    percentDiscount?: number;
    fixedDiscount?: number;
    expirationDate: string;
}
