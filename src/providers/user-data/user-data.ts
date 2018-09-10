import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  baseUrl: string = 'test.eed.eg';


  constructor(public http: HttpClient) {
  }


  /**
   * 
   * @param {String} url
   * @api private
   * 
   */
  setBaseUrl(url) {
    this.baseUrl = url;
  }

  /**
   * 
   * @return {String} baseUrl
   * 
   */

  get getBaseUrl() {
    return this.baseUrl;
  }
  /**
   * 
   * @param {Number} code 
   * @method -> GET
   * @return {Object}
   * @api private
   */
  searchVisitor(code) {
    console.log(this.baseUrl);
    return this.http.get(`http://${this.baseUrl}/api/visitors-search?code=${code}`);
  }

  /**
   * 
   * @param {Number} code
   * @method -> GET
   * @return {Object} 
   * @api private
   */
  searchVisit(code) {
    return this.http.get(`http://${this.baseUrl}/api/visits-search?code=${code}`);

  }

  /**
   * 
   * @param {Number} id
   * @method -> POST
   * @return {Object}
   * @api private
   *  
   */

  checkInVisitor(id) {
    let body = { id };
    return this.http.post(`http://${this.baseUrl}/api/checkin`, body);
  }

  /**
   * 
   * @param {Number} id
   * @method -> POST
   * @return {Object}
   * @api private
   *  
   */
  checkOutVisitor(id) {
    let body = { id };
    return this.http.post(`http://${this.baseUrl}/api/checkout`, body);
  }

  /**
   * 
   * @param {Number} id
   * @method -> POST
   * @return {Object}
   * @api private
   *  
   */

  checkInVisits(id) {
    let body = { id };
    return this.http.post(`http://${this.baseUrl}/api/visit-check`, body);
  }

}
