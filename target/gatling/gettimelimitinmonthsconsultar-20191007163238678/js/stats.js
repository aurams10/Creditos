var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "130",
        "ok": "124",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "1409",
        "ok": "1409",
        "ko": "1868"
    },
    "maxResponseTime": {
        "total": "22767",
        "ok": "22767",
        "ko": "15011"
    },
    "meanResponseTime": {
        "total": "2737",
        "ok": "2544",
        "ko": "6707"
    },
    "standardDeviation": {
        "total": "2606",
        "ok": "2297",
        "ko": "4650"
    },
    "percentiles1": {
        "total": "2195",
        "ok": "2192",
        "ko": "5418"
    },
    "percentiles2": {
        "total": "2420",
        "ok": "2400",
        "ko": "9253"
    },
    "percentiles3": {
        "total": "3872",
        "ok": "3455",
        "ko": "13733"
    },
    "percentiles4": {
        "total": "14763",
        "ok": "13472",
        "ko": "14755"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 124,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.083",
        "ok": "1.033",
        "ko": "0.05"
    }
},
contents: {
"req_smoketest-ebeac": {
        type: "REQUEST",
        name: "SmokeTest",
path: "SmokeTest",
pathFormatted: "req_smoketest-ebeac",
stats: {
    "name": "SmokeTest",
    "numberOfRequests": {
        "total": "130",
        "ok": "124",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "1409",
        "ok": "1409",
        "ko": "1868"
    },
    "maxResponseTime": {
        "total": "22767",
        "ok": "22767",
        "ko": "15011"
    },
    "meanResponseTime": {
        "total": "2737",
        "ok": "2544",
        "ko": "6707"
    },
    "standardDeviation": {
        "total": "2606",
        "ok": "2297",
        "ko": "4650"
    },
    "percentiles1": {
        "total": "2195",
        "ok": "2192",
        "ko": "5418"
    },
    "percentiles2": {
        "total": "2420",
        "ok": "2400",
        "ko": "9253"
    },
    "percentiles3": {
        "total": "3872",
        "ok": "3455",
        "ko": "13733"
    },
    "percentiles4": {
        "total": "14763",
        "ok": "13472",
        "ko": "14755"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 124,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.083",
        "ok": "1.033",
        "ko": "0.05"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
