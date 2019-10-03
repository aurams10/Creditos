package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class createCredits extends Simulation{

  val data4 = csv("data/data4.csv").circular

 //val data5 = csv("data/data5.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" ->"co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1","Content-Type" -> "application/json")

  val httpConf= http
    .baseUrl("https://api.credinet.co")
    .headers(mapRequest)


    val scn=scenario(scenarioName = "SmokeTest")
    .feed(data4)
    .exec(http(requestName="SmokeTest").get("/getCreditToken?creditValue=${creditValue}&months=${months}&frequency=${frequency}&storeId=${storeId}&typeDocument=${typeDocument}&idDocument=${idDocument}")
      .check(jsonPath("$.data.token.value").saveAs("data")))

/*
   .feed(data5)
   .exec(http(requestName="SmokeTest").post("/credits/create").body(StringBody("""{"typeDocument":"${typeDocument}","idDocument":"${idDocument}",
 "creditValue":"${creditValue}", "frequency":"${frequency}", "fees":"${fees}",
  "source":"${source}", "token":"${value}", "storeId":"${storeId}", "userId":"${userId}",
  "seller":"${seller}","products":"${products}","invoice":"${invoice}","authMethod":"${authMethod}","userName":"${userName}"}""")).asJson)

*/
      setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

  //setUp(scn.inject(constantConcurrentUsers(6) during  (600)).protocols(httpConf)).maxDuration(50)


}
