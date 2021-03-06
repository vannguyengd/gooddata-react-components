// (C) 2020 GoodData Corporation
const { getLocationAFMData, getTooltipTextAFMData } = require("../../data/geoChart/fixtures");

module.exports = projectId => {
    return {
        executionResult: {
            data: [
                [
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                    "1005",
                ],
                [
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                    "11107",
                ],
            ],
            paging: {
                count: [2, 50],
                offset: [0, 0],
                total: [2, 50],
            },
            headerItems: [
                [
                    [
                        {
                            measureHeaderItem: {
                                name: "Size",
                                order: 0,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "Color",
                                order: 1,
                            },
                        },
                    ],
                ],
                [getLocationAFMData(projectId), getTooltipTextAFMData(projectId)],
            ],
        },
    };
};
