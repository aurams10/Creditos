package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class getActiveCredits extends Simulation{

  val data = csv("data/data6.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" -> "co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1")

  val httpConf= http
    .baseUrl("https://api.credinet.co/credits")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").get("/getactivecredits?typeDocument=${typeDocument}&idDocument=${idDocument}&storeId=${storeId}")
       .check(bodyString.saveAs("myresponse")))
 .exec {session =>
  val response1 = session("myresponse").as[String]
  println(response1)
  session}

  setUp(scn.inject(constantConcurrentUsers(6) during  (10)).protocols(httpConf)).maxDuration(50)


 // setUp(scn.inject(constantUsersPerSec(3) during  (10)).protocols(httpConf)).maxDuration(50)

  //setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

  //constantUsersPerSec
  //setUp(scn.inject(rampConcurrentUsers(5) to  (10) during(60)).protocols(httpConf)).maxDuration(120)
  //setUp(scn.inject(rampUsersPerSec(5) to  (60) during(120)).protocols(httpConf)).maxDuration(240)

}
