/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountType } from '././accountType';

export class Account {
    /**
    * Xero identifier for accounts
    */
    'accountID'?: string;
    'type'?: AccountType;
    /**
    * Customer defined account code
    */
    'code'?: string;
    /**
    * Name of account
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountID",
            "baseName": "AccountID",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "AccountType"
        },
        {
            "name": "code",
            "baseName": "Code",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }
}

