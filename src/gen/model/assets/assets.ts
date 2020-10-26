/**
 * Xero Assets API
 * This is the Xero Assets API
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Asset } from '././asset';
import { Pagination } from '././pagination';

export class Assets {
    'pagination'?: Pagination;
    'items'?: Array<Asset>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Asset>"
        }    ];

    static getAttributeTypeMap() {
        return Assets.attributeTypeMap;
    }
}

