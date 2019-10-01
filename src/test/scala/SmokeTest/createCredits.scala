package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class createCredits extends Simulation{

  val data = csv("data/data5.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" ->"co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1","Content-Type" -> "application/json")

  val httpConf= http
    .baseUrl("https://api.credinet.co")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").post("/credits/create").body(StringBody("""{"typeDocument":"${typeDocument}","idDocument":"${idDocument}",
 "creditValue":"${creditValue}", "frequency":"${frequency}", "fees":"${fees}",
  "source":"${source}", "token":"${token}", "storeId":"${storeId}", "userId":"${userId}",
  "seller":"${seller}","products":"${products}","invoice":"${invoice}","authMethod":"${authMethod}","userName":"${userName}"}""")).asJson
    .check(bodyString.saveAs("myresponse")))
  .exec {session =>
    val response1 = session("myresponse").as[String]
    println(response1)
    session}

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
  //setUp(scn.inject(rampConcurrentUsers(5) to  (10) during(60)).protocols(httpConf)).maxDuration(120)

}
