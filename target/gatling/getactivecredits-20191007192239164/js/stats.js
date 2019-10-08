var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "130",
        "ok": "33",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "1510",
        "ok": "2293",
        "ko": "1510"
    },
    "maxResponseTime": {
        "total": "4485",
        "ok": "4485",
        "ko": "3859"
    },
    "meanResponseTime": {
        "total": "2729",
        "ok": "3131",
        "ko": "2592"
    },
    "standardDeviation": {
        "total": "509",
        "ok": "505",
        "ko": "433"
    },
    "percentiles1": {
        "total": "2697",
        "ok": "2975",
        "ko": "2590"
    },
    "percentiles2": {
        "total": "2998",
        "ok": "3397",
        "ko": "2969"
    },
    "percentiles3": {
        "total": "3646",
        "ok": "4109",
        "ko": "3198"
    },
    "percentiles4": {
        "total": "4114",
        "ok": "4368",
        "ko": "3298"
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
        "count": 33,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 97,
        "percentage": 75
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.083",
        "ok": "0.275",
        "ko": "0.808"
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
        "ok": "33",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "1510",
        "ok": "2293",
        "ko": "1510"
    },
    "maxResponseTime": {
        "total": "4485",
        "ok": "4485",
        "ko": "3859"
    },
    "meanResponseTime": {
        "total": "2729",
        "ok": "3131",
        "ko": "2592"
    },
    "standardDeviation": {
        "total": "509",
        "ok": "505",
        "ko": "433"
    },
    "percentiles1": {
        "total": "2697",
        "ok": "2975",
        "ko": "2590"
    },
    "percentiles2": {
        "total": "2998",
        "ok": "3397",
        "ko": "2969"
    },
    "percentiles3": {
        "total": "3646",
        "ok": "4109",
        "ko": "3198"
    },
    "percentiles4": {
        "total": "4114",
        "ok": "4368",
        "ko": "3298"
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
        "count": 33,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 97,
        "percentage": 75
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.083",
        "ok": "0.275",
        "ko": "0.808"
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
