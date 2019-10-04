package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class getCreditToken extends Simulation{

  val data = csv("data/data4.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" -> "co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1","Content-Type" -> "application/json")
  val httpConf= http
    .baseUrl("https://api.credinet.co")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").get("/credits/getCreditToken?creditValue=${creditValue}&months=${months}&frequency=${frequency}&storeId=${storeId}&typeDocument=${typeDocument}&idDocument=${idDocument}")

    .check(jsonPath("$.data.token.value").saveAs("data")))


  setUp(scn.inject(constantUsersPerSec(6) during  (1200)).protocols(httpConf)).maxDuration(1200)
}
