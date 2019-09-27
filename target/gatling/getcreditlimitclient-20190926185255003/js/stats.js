var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "116",
        "ok": "0",
        "ko": "116"
    },
    "minResponseTime": {
        "total": "1899",
        "ok": "-",
        "ko": "1899"
    },
    "maxResponseTime": {
        "total": "8190",
        "ok": "-",
        "ko": "8190"
    },
    "meanResponseTime": {
        "total": "4052",
        "ok": "-",
        "ko": "4052"
    },
    "standardDeviation": {
        "total": "1308",
        "ok": "-",
        "ko": "1308"
    },
    "percentiles1": {
        "total": "3856",
        "ok": "-",
        "ko": "3856"
    },
    "percentiles2": {
        "total": "4806",
        "ok": "-",
        "ko": "4806"
    },
    "percentiles3": {
        "total": "6392",
        "ok": "-",
        "ko": "6392"
    },
    "percentiles4": {
        "total": "7292",
        "ok": "-",
        "ko": "7292"
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
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 116,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.812",
        "ok": "-",
        "ko": "1.812"
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
        "total": "116",
        "ok": "0",
        "ko": "116"
    },
    "minResponseTime": {
        "total": "1899",
        "ok": "-",
        "ko": "1899"
    },
    "maxResponseTime": {
        "total": "8190",
        "ok": "-",
        "ko": "8190"
    },
    "meanResponseTime": {
        "total": "4052",
        "ok": "-",
        "ko": "4052"
    },
    "standardDeviation": {
        "total": "1308",
        "ok": "-",
        "ko": "1308"
    },
    "percentiles1": {
        "total": "3856",
        "ok": "-",
        "ko": "3856"
    },
    "percentiles2": {
        "total": "4806",
        "ok": "-",
        "ko": "4806"
    },
    "percentiles3": {
        "total": "6392",
        "ok": "-",
        "ko": "6392"
    },
    "percentiles4": {
        "total": "7292",
        "ok": "-",
        "ko": "7292"
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
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 116,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.812",
        "ok": "-",
        "ko": "1.812"
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