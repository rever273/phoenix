
/**
 * Original work Copyright (c) 2018 PoC-Consortium  
 * Modified work Copyright (c) 2019 Burst Apps Team
 */

 /**
 * Helper method to convert a String to number
 * @param amount The amount in NQT
 * @return A number expressed in Burst (not NQT)
 */
export const convertStringToNumber = (amount: string): number => {
    return parseFloat(amount) / 100000000;
}