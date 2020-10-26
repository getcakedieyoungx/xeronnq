/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BankAccount } from '././bankAccount';

export class PaymentMethod {
    /**
    * The payment method code
    */
    'paymentMethod': PaymentMethod.PaymentMethodEnum;
    'bankAccounts'?: Array<BankAccount>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "PaymentMethod.PaymentMethodEnum"
        },
        {
            "name": "bankAccounts",
            "baseName": "bankAccounts",
            "type": "Array<BankAccount>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}

export namespace PaymentMethod {
    export enum PaymentMethodEnum {
        Cheque = <any> 'Cheque',
        Electronically = <any> 'Electronically',
        Manual = <any> 'Manual'
    }
}
