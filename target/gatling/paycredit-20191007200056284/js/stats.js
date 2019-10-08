var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "265",
        "ok": "83",
        "ko": "182"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "1299",
        "ko": "943"
    },
    "maxResponseTime": {
        "total": "4829",
        "ok": "4829",
        "ko": "1582"
    },
    "meanResponseTime": {
        "total": "1343",
        "ok": "1835",
        "ko": "1119"
    },
    "standardDeviation": {
        "total": "547",
        "ok": "756",
        "ko": "121"
    },
    "percentiles1": {
        "total": "1149",
        "ok": "1571",
        "ko": "1100"
    },
    "percentiles2": {
        "total": "1460",
        "ok": "1773",
        "ko": "1162"
    },
    "percentiles3": {
        "total": "1870",
        "ok": "3709",
        "ko": "1400"
    },
    "percentiles4": {
        "total": "3983",
        "ok": "4754",
        "ko": "1485"
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
        "count": 83,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 182,
        "percentage": 69
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.208",
        "ok": "0.692",
        "ko": "1.517"
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
        "total": "265",
        "ok": "83",
        "ko": "182"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "1299",
        "ko": "943"
    },
    "maxResponseTime": {
        "total": "4829",
        "ok": "4829",
        "ko": "1582"
    },
    "meanResponseTime": {
        "total": "1343",
        "ok": "1835",
        "ko": "1119"
    },
    "standardDeviation": {
        "total": "547",
        "ok": "756",
        "ko": "121"
    },
    "percentiles1": {
        "total": "1149",
        "ok": "1571",
        "ko": "1100"
    },
    "percentiles2": {
        "total": "1460",
        "ok": "1773",
        "ko": "1162"
    },
    "percentiles3": {
        "total": "1870",
        "ok": "3709",
        "ko": "1400"
    },
    "percentiles4": {
        "total": "3983",
        "ok": "4754",
        "ko": "1485"
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
        "count": 83,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 182,
        "percentage": 69
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.208",
        "ok": "0.692",
        "ko": "1.517"
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
