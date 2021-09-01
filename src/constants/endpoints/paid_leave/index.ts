export const PAID_LEAVE = '/paid_leave/';
export const PAID_LEAVE_REFERENCE_PERIODS = '/paid_leave/reference_periods'
export const PAID_LEAVE_MANAGE = (userId: string) => `/paid_leave/${userId}/manage`;
export const PAID_LEAVE_REFERENCE_PERIODS_BY_ID = (userId: string) =>
`/paid_leave/reference_periods/${userId}`;
