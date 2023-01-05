const {
    addressBookIdParam,
    paginationLimitQuery,
    paginationOffsetQuery,
    searchQuery,
} = require("../../../common/parameters");
const {
    generateEndpoint,
    generatePath,
    createPathParameter,
    createResponse,
    createRequestBody,
    createQueryParameter,
} = require("../../../utils/path-utils");

const paths = {
    ...generateEndpoint({
        endpoint: "/address_book_entries",
        methods: {
            // get address_book_entries
            ...generatePath({
                method: "get",
                tags: ["address_book_entries"],
                summary: "Get all address book entries in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/AddressBooks",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create address_book_entries
            ...generatePath({
                method: "post",
                tags: ["address_book_entries"],
                summary: "Creates a new address book entry in system",
                requestBody: createRequestBody({
                    description: "Request payload to create address book entry",
                    required: true,
                    contentRef: "#/components/schemas/AddressBookFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/AddressBookTableSchema",
                    }),
                },
            }),
            // delete address_book_entries
            ...generatePath({
                method: "delete",
                tags: ["address_book_entries"],
                summary: "Deletes a address book entries in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete address book entries",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteAddressBookPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/AddressBookTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single address_book_entries
    ...generateEndpoint({
        endpoint: "/address_book_entries/{addressBookId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["address_book_entries"],
                summary: "Update a address book entries in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/AddressBookTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update address book entries",
                    required: true,
                    contentRef: "#/components/schemas/AddressBookFormSchema",
                }),
                parameters: [
                    createPathParameter(addressBookIdParam),
                ],
            }),
        },
    }),

    // bulk update address_book_entries
    ...generateEndpoint({
        endpoint: "/address_book_entries/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["audio_store"],
                summary: "Bulk Update address book entries in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk address book entries",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditAddressBooksPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/AddressBookFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
