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

import { PayrollCalendar } from '././payrollCalendar';

export class PayrollCalendars {
    'payrollCalendars'?: Array<PayrollCalendar>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payrollCalendars",
            "baseName": "PayrollCalendars",
            "type": "Array<PayrollCalendar>"
        }    ];

    static getAttributeTypeMap() {
        return PayrollCalendars.attributeTypeMap;
    }
}

