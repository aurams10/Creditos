package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class getCreditLimitClient extends Simulation{

  val data = csv("data/data1.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" -> "co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1")

  val httpConf= http
    .baseUrl("https://api.credinet.co/credits")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").get("/getCreditLimitClient?typeDocument=${typeDocument}&idDocument=${idDocument}&vendorId=${vendorId}")
    //.exec(http(requestName="SmokeTest").get("/getCreditLimitClient?typeDocument=CC&idDocument=1037610101&vendorId=12525"))
    .check(bodyString.saveAs("myresponse")))
 .exec {session =>
  val response1 = session("myresponse").as[String]
  println(response1)
  session}

  //setUp(scn.inject(constantConcurrentUsers(6)during  (1200)).protocols(httpConf)).maxDuration(1200)
  //setUp(scn.inject(constantUsersPerSec(6) during  (1200)).protocols(httpConf)).maxDuration(1200)

  setUp(scn.inject(constantConcurrentUsers(16)during (600)).protocols(httpConf)).maxDuration(600)
}
