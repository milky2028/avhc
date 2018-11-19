export default interface CouponCode {
    active: boolean;
    code: string;
    amount: number;
    type: 'percent' | 'fixed';
    expirationDate: string;
}
