package SmokeTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class getCurrentAmortizationSchedule extends Simulation{

  val data = csv("data/data8.csv").circular

  val mapRequest = Map("SCOrigen" -> "Staging", "SCLocation" -> "1,1","country" -> "co","Ocp-Apim-Subscription-Key" -> "47feca78a0f14aa6a46e656cf1d072b1")

  val httpConf= http
    .baseUrl("https://api.credinet.co/credits")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest")
    .feed(data)
    .exec(http(requestName="SmokeTest").get("https://api.credinet.co/payment/getCurrentAmortizationSchedule?creditValue=${creditValue}&interestRate=${interestRate}&frequency=${frequency}&fees=${fees}&assuranceValue=${assuranceValue}&downPayment=${downPayment}&initialDate=${initialDate}&feeValue=${feeValue}&assuranceFeeValue=${assuranceFeeValue}&assuranceTotalFeeValue=${assuranceTotalFeeValue}&calculationDate=${calculationDate}&balance=${balance}&assuranceBalance=${assuranceBalance}&arrearsCharges=${arrearsCharges}")
       .check(bodyString.saveAs("myresponse")))
 .exec {session =>
  val response1 = session("myresponse").as[String]
  println(response1)
  session}
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
  //setUp(scn.inject(constantConcurrentUsers(6) during  (600)).protocols(httpConf)).maxDuration(50)

}
