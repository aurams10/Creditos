var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "78",
        "ok": "64",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "1978",
        "ok": "2018",
        "ko": "1978"
    },
    "maxResponseTime": {
        "total": "11462",
        "ok": "11462",
        "ko": "9080"
    },
    "meanResponseTime": {
        "total": "4249",
        "ok": "4341",
        "ko": "3832"
    },
    "standardDeviation": {
        "total": "1997",
        "ok": "1865",
        "ko": "2472"
    },
    "percentiles1": {
        "total": "3568",
        "ok": "3663",
        "ko": "2788"
    },
    "percentiles2": {
        "total": "4881",
        "ok": "4915",
        "ko": "3218"
    },
    "percentiles3": {
        "total": "8278",
        "ok": "8009",
        "ko": "9011"
    },
    "percentiles4": {
        "total": "11380",
        "ok": "11395",
        "ko": "9066"
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
        "count": 64,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 14,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.672",
        "ok": "0.552",
        "ko": "0.121"
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
        "total": "78",
        "ok": "64",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "1978",
        "ok": "2018",
        "ko": "1978"
    },
    "maxResponseTime": {
        "total": "11462",
        "ok": "11462",
        "ko": "9080"
    },
    "meanResponseTime": {
        "total": "4249",
        "ok": "4341",
        "ko": "3832"
    },
    "standardDeviation": {
        "total": "1997",
        "ok": "1865",
        "ko": "2472"
    },
    "percentiles1": {
        "total": "3568",
        "ok": "3663",
        "ko": "2788"
    },
    "percentiles2": {
        "total": "4881",
        "ok": "4915",
        "ko": "3218"
    },
    "percentiles3": {
        "total": "8278",
        "ok": "8009",
        "ko": "9011"
    },
    "percentiles4": {
        "total": "11380",
        "ok": "11395",
        "ko": "9066"
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
        "count": 64,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 14,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.672",
        "ok": "0.552",
        "ko": "0.121"
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
