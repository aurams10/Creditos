package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class createCredits extends Simulation{

  val data5= csv("data/data5.csv").circular


  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" ->"co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1","Content-Type" -> "application/json")
  val httpConf= http
    .baseUrl("https://api.credinet.co")
    .headers(mapRequest)


    val scn=scenario(scenarioName = "SmokeTest")

   .feed(data5)
   .exec(http(requestName="SmokeTest").post("/credits/create").body(StringBody("""{"typeDocument":"${typeDocument}","idDocument":"${idDocument}",
 "creditValue":"${creditValue}", "frequency":"${frequency}", "fees":"${fees}",
  "source":"${source}", "token":"921820", "storeId":"${storeId}", "userId":"${userId}",
  "seller":"${seller}","products":"${products}","invoice":"${invoice}","authMethod":"${authMethod}","userName":"${userName}"}""")).asJson)


  setUp(scn.inject(constantConcurrentUsers(6) during  (1200)).protocols(httpConf)).maxDuration(1200)
}
