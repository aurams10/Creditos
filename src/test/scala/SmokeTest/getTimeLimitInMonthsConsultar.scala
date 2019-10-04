package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class getTimeLimitInMonthsConsultar extends Simulation{

  val data = csv("data/data2.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" -> "co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1")

  val httpConf= http
    .baseUrl("https://api.credinet.co/credits")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").get("/getTimeLimitInMonths?creditValue=${creditValue}&storeId=${storeId}&typeDocument=${typeDocument}&idDocument=${idDocument}")
       .check(bodyString.saveAs("myresponse")))
 .exec {session =>
  val response1 = session("myresponse").as[String]
  println(response1)
  session}
  // setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
  setUp(scn.inject(constantConcurrentUsers(6) during  (600)).protocols(httpConf)).maxDuration(50)

  setUp(scn.
    inject(atOnceUsers(6),nothingFor(5  seconds),heavisideUsers(20) during(600 seconds),rampUsers(10) during(600 seconds)))
    .protocols(httpConf).maxDuration(120 seconds)

}
