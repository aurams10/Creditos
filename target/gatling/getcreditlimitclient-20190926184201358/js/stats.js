var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "115",
        "ok": "0",
        "ko": "115"
    },
    "minResponseTime": {
        "total": "1604",
        "ok": "-",
        "ko": "1604"
    },
    "maxResponseTime": {
        "total": "7578",
        "ok": "-",
        "ko": "7578"
    },
    "meanResponseTime": {
        "total": "4145",
        "ok": "-",
        "ko": "4145"
    },
    "standardDeviation": {
        "total": "1189",
        "ok": "-",
        "ko": "1189"
    },
    "percentiles1": {
        "total": "3900",
        "ok": "-",
        "ko": "3900"
    },
    "percentiles2": {
        "total": "4899",
        "ok": "-",
        "ko": "4899"
    },
    "percentiles3": {
        "total": "6220",
        "ok": "-",
        "ko": "6220"
    },
    "percentiles4": {
        "total": "7448",
        "ok": "-",
        "ko": "7448"
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
        "count": 115,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.797",
        "ok": "-",
        "ko": "1.797"
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
        "total": "115",
        "ok": "0",
        "ko": "115"
    },
    "minResponseTime": {
        "total": "1604",
        "ok": "-",
        "ko": "1604"
    },
    "maxResponseTime": {
        "total": "7578",
        "ok": "-",
        "ko": "7578"
    },
    "meanResponseTime": {
        "total": "4145",
        "ok": "-",
        "ko": "4145"
    },
    "standardDeviation": {
        "total": "1189",
        "ok": "-",
        "ko": "1189"
    },
    "percentiles1": {
        "total": "3900",
        "ok": "-",
        "ko": "3900"
    },
    "percentiles2": {
        "total": "4899",
        "ok": "-",
        "ko": "4899"
    },
    "percentiles3": {
        "total": "6220",
        "ok": "-",
        "ko": "6220"
    },
    "percentiles4": {
        "total": "7448",
        "ok": "-",
        "ko": "7448"
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
        "count": 115,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.797",
        "ok": "-",
        "ko": "1.797"
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
