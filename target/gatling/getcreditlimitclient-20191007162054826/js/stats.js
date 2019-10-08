var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "187",
        "ok": "187",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1273",
        "ok": "1273",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5204",
        "ok": "5204",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1899",
        "ok": "1899",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1703",
        "ok": "1703",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1999",
        "ok": "1999",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3088",
        "ok": "3088",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4928",
        "ok": "4928",
        "ko": "-"
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
        "count": 187,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.558",
        "ok": "1.558",
        "ko": "-"
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
        "total": "187",
        "ok": "187",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1273",
        "ok": "1273",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5204",
        "ok": "5204",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1899",
        "ok": "1899",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1703",
        "ok": "1703",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1999",
        "ok": "1999",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3088",
        "ok": "3088",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4928",
        "ok": "4928",
        "ko": "-"
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
        "count": 187,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.558",
        "ok": "1.558",
        "ko": "-"
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
