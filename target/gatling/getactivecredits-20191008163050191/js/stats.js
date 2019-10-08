var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47",
        "ok": "38",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "1375",
        "ok": "1792",
        "ko": "1375"
    },
    "maxResponseTime": {
        "total": "4186",
        "ok": "4186",
        "ko": "2472"
    },
    "meanResponseTime": {
        "total": "2441",
        "ok": "2562",
        "ko": "1930"
    },
    "standardDeviation": {
        "total": "545",
        "ok": "502",
        "ko": "403"
    },
    "percentiles1": {
        "total": "2425",
        "ok": "2497",
        "ko": "1985"
    },
    "percentiles2": {
        "total": "2661",
        "ok": "2823",
        "ko": "2281"
    },
    "percentiles3": {
        "total": "3204",
        "ok": "3337",
        "ko": "2453"
    },
    "percentiles4": {
        "total": "4036",
        "ok": "4065",
        "ko": "2468"
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
        "count": 38,
        "percentage": 81
    },
    "group4": {
        "name": "failed",
        "count": 9,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.797",
        "ok": "0.644",
        "ko": "0.153"
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
        "total": "47",
        "ok": "38",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "1375",
        "ok": "1792",
        "ko": "1375"
    },
    "maxResponseTime": {
        "total": "4186",
        "ok": "4186",
        "ko": "2472"
    },
    "meanResponseTime": {
        "total": "2441",
        "ok": "2562",
        "ko": "1930"
    },
    "standardDeviation": {
        "total": "545",
        "ok": "502",
        "ko": "403"
    },
    "percentiles1": {
        "total": "2425",
        "ok": "2497",
        "ko": "1985"
    },
    "percentiles2": {
        "total": "2661",
        "ok": "2823",
        "ko": "2281"
    },
    "percentiles3": {
        "total": "3204",
        "ok": "3337",
        "ko": "2453"
    },
    "percentiles4": {
        "total": "4036",
        "ok": "4065",
        "ko": "2468"
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
        "count": 38,
        "percentage": 81
    },
    "group4": {
        "name": "failed",
        "count": 9,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.797",
        "ok": "0.644",
        "ko": "0.153"
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
