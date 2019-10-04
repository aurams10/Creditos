var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "55",
        "ok": "0",
        "ko": "55"
    },
    "minResponseTime": {
        "total": "3384",
        "ok": "-",
        "ko": "3384"
    },
    "maxResponseTime": {
        "total": "7760",
        "ok": "-",
        "ko": "7760"
    },
    "meanResponseTime": {
        "total": "5201",
        "ok": "-",
        "ko": "5201"
    },
    "standardDeviation": {
        "total": "941",
        "ok": "-",
        "ko": "941"
    },
    "percentiles1": {
        "total": "5290",
        "ok": "-",
        "ko": "5290"
    },
    "percentiles2": {
        "total": "5779",
        "ok": "-",
        "ko": "5779"
    },
    "percentiles3": {
        "total": "6552",
        "ok": "-",
        "ko": "6552"
    },
    "percentiles4": {
        "total": "7668",
        "ok": "-",
        "ko": "7668"
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
        "count": 55,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.1",
        "ok": "-",
        "ko": "1.1"
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
        "total": "55",
        "ok": "0",
        "ko": "55"
    },
    "minResponseTime": {
        "total": "3384",
        "ok": "-",
        "ko": "3384"
    },
    "maxResponseTime": {
        "total": "7760",
        "ok": "-",
        "ko": "7760"
    },
    "meanResponseTime": {
        "total": "5201",
        "ok": "-",
        "ko": "5201"
    },
    "standardDeviation": {
        "total": "941",
        "ok": "-",
        "ko": "941"
    },
    "percentiles1": {
        "total": "5290",
        "ok": "-",
        "ko": "5290"
    },
    "percentiles2": {
        "total": "5779",
        "ok": "-",
        "ko": "5779"
    },
    "percentiles3": {
        "total": "6552",
        "ok": "-",
        "ko": "6552"
    },
    "percentiles4": {
        "total": "7668",
        "ok": "-",
        "ko": "7668"
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
        "count": 55,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.1",
        "ok": "-",
        "ko": "1.1"
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
