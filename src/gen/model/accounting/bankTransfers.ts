/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BankTransfer } from '././bankTransfer';

export class BankTransfers {
    'bankTransfers'?: Array<BankTransfer>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankTransfers",
            "baseName": "BankTransfers",
            "type": "Array<BankTransfer>"
        }    ];

    static getAttributeTypeMap() {
        return BankTransfers.attributeTypeMap;
    }
}

