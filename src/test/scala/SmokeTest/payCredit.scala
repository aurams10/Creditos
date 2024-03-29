package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class payCredit extends Simulation{

  val data = csv("data/data7.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" -> "co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1","Content-Type" -> "application/json")

  val httpConf= http
    .baseUrl("https://api.credinet.co")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").post("/payment/payCredit").body(StringBody("""{"storeId":"${storeId}","userId":"${userId}",
 "calculationDate":"${calculationDate}", "creditId":"${creditId}", "totalValuePaid":"${totalValuePaid}",
  "bankAccount":"${bankAccount}", "userName":"${userName}"}""")).asJson
      .check(bodyString.saveAs("myresponse")))
    .exec {session =>
      val response1 = session("myresponse").as[String]
      println(response1)
      session}
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
  //setUp(scn.inject(constantConcurrentUsers(6) during  (600)).protocols(httpConf)).maxDuration(50)

}
