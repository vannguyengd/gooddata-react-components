// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [],
                },
                {
                    headers: [
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "Lost",
                                            format: "#,##0.00",
                                            localIdentifier: "lostMetric",
                                            uri: "/gdc/md/" + projectId + "/obj/1283",
                                            identifier: "af2Ewj9Re2vK",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "Won",
                                            format: "#,##0.00",
                                            localIdentifier: "wonMetric",
                                            uri: "/gdc/md/" + projectId + "/obj/1284",
                                            identifier: "afSEwRwdbMeQ",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "Expected",
                                            format: "#,##0.00",
                                            localIdentifier: "expectedMetric",
                                            uri: "/gdc/md/" + projectId + "/obj/1285",
                                            identifier: "alUEwmBtbwSh",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/executionResults/6807766718351670272?q=eAGtUMtqwzAQ%2FBWhXE3tvKDkXkKhlB5acig5yNbaVpG0jrTGMcH%2F3nXikpJj05tGOzM7OycZoMFA%0Ar8qB3MgPT4YsaJnIAm3r%2FM5oqqPcfO4TWRpLECYQsJtekeVyc5oEN%2BOBZRicYoasgrkajzzpgIIp%0AtgHbRvKCCxwnp6tqlsxm2UOWcaTYOqdCz1bvNQhGAkuhrBXYjDe03pCBKKhWJFQAUViMoEXekvBI%0AokPPJucD2eIFIzG87HzW%2FJNWukidTvUigz5fdmXMjrC2mS1joX3wfX2Y02pxSDH%2FSueLx6Uckv8J%0AmiPVP2mV1zdJd%2BfcdwRd%2FSUo%2BJtaOzBVTdynqpTxkUQkVYF4C5ir3FhD%2Fa92n44NFEy%2Br%2BG1HPbD%0AN5vF4jg%3D%0A&c=b43824b27102daf8b1713110b7179f91&dimension=Amount&dimension=empty",
            },
        },
    };
};
