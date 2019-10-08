var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "162",
        "ok": "151",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "1413",
        "ok": "1413",
        "ko": "1557"
    },
    "maxResponseTime": {
        "total": "4036",
        "ok": "4036",
        "ko": "3501"
    },
    "meanResponseTime": {
        "total": "2186",
        "ok": "2180",
        "ko": "2268"
    },
    "standardDeviation": {
        "total": "409",
        "ok": "404",
        "ko": "457"
    },
    "percentiles1": {
        "total": "2099",
        "ok": "2098",
        "ko": "2281"
    },
    "percentiles2": {
        "total": "2308",
        "ok": "2303",
        "ko": "2359"
    },
    "percentiles3": {
        "total": "2984",
        "ok": "2944",
        "ko": "2955"
    },
    "percentiles4": {
        "total": "3595",
        "ok": "3550",
        "ko": "3392"
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
        "count": 151,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 11,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.35",
        "ok": "1.258",
        "ko": "0.092"
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
        "total": "162",
        "ok": "151",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "1413",
        "ok": "1413",
        "ko": "1557"
    },
    "maxResponseTime": {
        "total": "4036",
        "ok": "4036",
        "ko": "3501"
    },
    "meanResponseTime": {
        "total": "2186",
        "ok": "2180",
        "ko": "2268"
    },
    "standardDeviation": {
        "total": "409",
        "ok": "404",
        "ko": "457"
    },
    "percentiles1": {
        "total": "2099",
        "ok": "2098",
        "ko": "2281"
    },
    "percentiles2": {
        "total": "2308",
        "ok": "2303",
        "ko": "2359"
    },
    "percentiles3": {
        "total": "2984",
        "ok": "2944",
        "ko": "2955"
    },
    "percentiles4": {
        "total": "3595",
        "ok": "3550",
        "ko": "3392"
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
        "count": 151,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 11,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.35",
        "ok": "1.258",
        "ko": "0.092"
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
