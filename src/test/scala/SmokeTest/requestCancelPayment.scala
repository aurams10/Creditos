package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class requestCancelPayment extends Simulation{

  val data = csv("data/data9.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" -> "co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1","Content-Type" -> "application/json")

  val httpConf= http
    .baseUrl("https://api.credinet.co")
    .headers(mapRequest)
  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").post("/cancels/requestCancelPayment").body(StringBody("""{"storeId":"${storeId}","reason":"${reason}",
 "paymentId":"${paymentId}", "userId":"${userId}", "userName":"${userName}"}""")).asJson
      .check(bodyString.saveAs("myresponse")))
    .exec {session =>
      val response1 = session("myresponse").as[String]
      println(response1)
      session}

  setUp(scn.inject(constantConcurrentUsers(6)during  (1200)).protocols(httpConf)).maxDuration(1200)
 // setUp(scn.inject(constantUsersPerSec(6) during  (1200)).protocols(httpConf)).maxDuration(1200)

}
