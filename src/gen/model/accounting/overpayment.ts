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

import { Allocation } from '././allocation';
import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Payment } from '././payment';

export class Overpayment {
    /**
    * See Overpayment Types
    */
    'type'?: Overpayment.TypeEnum;
    'contact'?: Contact;
    /**
    * The date the overpayment is created YYYY-MM-DD
    */
    'date'?: string;
    /**
    * See Overpayment Status Codes
    */
    'status'?: Overpayment.StatusEnum;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * See Overpayment Line Items
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The subtotal of the overpayment excluding taxes
    */
    'subTotal'?: number;
    /**
    * The total tax on the overpayment
    */
    'totalTax'?: number;
    /**
    * The total of the overpayment (subtotal + total tax)
    */
    'total'?: number;
    /**
    * UTC timestamp of last update to the overpayment
    */
    'updatedDateUTC'?: Date;
    'currencyCode'?: CurrencyCode;
    /**
    * Xero generated unique identifier
    */
    'overpaymentID'?: string;
    /**
    * The currency rate for a multicurrency overpayment. If no rate is specified, the XE.com day rate is used
    */
    'currencyRate'?: number;
    /**
    * The remaining credit balance on the overpayment
    */
    'remainingCredit'?: number;
    /**
    * See Allocations
    */
    'allocations'?: Array<Allocation>;
    /**
    * The amount of applied to an invoice
    */
    'appliedAmount'?: number;
    /**
    * See Payments
    */
    'payments'?: Array<Payment>;
    /**
    * boolean to indicate if a overpayment has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * See Attachments
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "Overpayment.TypeEnum"
        },
        {
            "name": "contact",
            "baseName": "Contact",
            "type": "Contact"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "Overpayment.StatusEnum"
        },
        {
            "name": "lineAmountTypes",
            "baseName": "LineAmountTypes",
            "type": "LineAmountTypes"
        },
        {
            "name": "lineItems",
            "baseName": "LineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "subTotal",
            "baseName": "SubTotal",
            "type": "number"
        },
        {
            "name": "totalTax",
            "baseName": "TotalTax",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "Total",
            "type": "number"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "currencyCode",
            "baseName": "CurrencyCode",
            "type": "CurrencyCode"
        },
        {
            "name": "overpaymentID",
            "baseName": "OverpaymentID",
            "type": "string"
        },
        {
            "name": "currencyRate",
            "baseName": "CurrencyRate",
            "type": "number"
        },
        {
            "name": "remainingCredit",
            "baseName": "RemainingCredit",
            "type": "number"
        },
        {
            "name": "allocations",
            "baseName": "Allocations",
            "type": "Array<Allocation>"
        },
        {
            "name": "appliedAmount",
            "baseName": "AppliedAmount",
            "type": "number"
        },
        {
            "name": "payments",
            "baseName": "Payments",
            "type": "Array<Payment>"
        },
        {
            "name": "hasAttachments",
            "baseName": "HasAttachments",
            "type": "boolean"
        },
        {
            "name": "attachments",
            "baseName": "Attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return Overpayment.attributeTypeMap;
    }
}

export namespace Overpayment {
    export enum TypeEnum {
        RECEIVEOVERPAYMENT = <any> 'RECEIVE-OVERPAYMENT',
        SPENDOVERPAYMENT = <any> 'SPEND-OVERPAYMENT',
        AROVERPAYMENT = <any> 'AROVERPAYMENT'
    }
    export enum StatusEnum {
        AUTHORISED = <any> 'AUTHORISED',
        PAID = <any> 'PAID',
        VOIDED = <any> 'VOIDED'
    }
}
