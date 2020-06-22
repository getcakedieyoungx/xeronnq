/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class LeaveType {
    /**
    * Xero unique identifier for the leave
    */
    'leaveID'?: string;
    /**
    * Xero unique identifier for the leave type
    */
    'leaveTypeID'?: string;
    /**
    * Name of the leave type
    */
    'name': string;
    /**
    * Indicate that an employee will be paid when taking this type of leave
    */
    'isPaidLeave': boolean;
    /**
    * Indicate that a balance for this leave type to be shown on the employee’s payslips
    */
    'showOnPayslip': boolean;
    /**
    * UTC timestamp of last update to the leave type note
    */
    'updatedDateUTC'?: Date;
    /**
    * Shows whether the leave type is active or not
    */
    'isActive'?: boolean;
    /**
    * Shows whether the leave type is a statutory leave type or not
    */
    'isStatutoryLeave'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaveID",
            "baseName": "leaveID",
            "type": "string"
        },
        {
            "name": "leaveTypeID",
            "baseName": "leaveTypeID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "isPaidLeave",
            "baseName": "isPaidLeave",
            "type": "boolean"
        },
        {
            "name": "showOnPayslip",
            "baseName": "showOnPayslip",
            "type": "boolean"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "updatedDateUTC",
            "type": "Date"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "isStatutoryLeave",
            "baseName": "isStatutoryLeave",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LeaveType.attributeTypeMap;
    }
}

