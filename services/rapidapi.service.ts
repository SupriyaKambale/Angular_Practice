import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url='https://yahoo-finance-india1.p.rapidapi.com/market_india/news/?symbol=HDFC';

  constructor(private httpclient:HttpClient) { }

  getFinance()
  {
      let headers=new HttpHeaders({
                                    'X-RapidAPI-Key': '07ad874742msh7f5bba0837a89ecp182fd5jsnaabff0c70094',
	                                  'X-RapidAPI-Host': 'yahoo-finance-india1.p.rapidapi.com'
                                  })
      return this.httpclient.get(this.url,{headers:headers});
  }
}
