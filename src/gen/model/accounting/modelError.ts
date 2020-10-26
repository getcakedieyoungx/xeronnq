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

import { Element } from '././element';

export class ModelError {
    /**
    * Exception number
    */
    'errorNumber'?: number;
    /**
    * Exception type
    */
    'type'?: string;
    /**
    * Exception message
    */
    'message'?: string;
    /**
    * Array of Elements of validation Errors
    */
    'elements'?: Array<Element>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorNumber",
            "baseName": "ErrorNumber",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        },
        {
            "name": "elements",
            "baseName": "Elements",
            "type": "Array<Element>"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

