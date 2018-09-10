import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  baseUrl: string = 'http://test.eed.eg/api';


  constructor(public http: HttpClient) {
  }

  /**
   * 
   * @param {Number} code 
   * @method -> GET
   * @return {Object}
   * @api private
   */
  searchVisitor(code) {
    return this.http.get(`${this.baseUrl}/visitors-search/?code=${code}`);
  }

  /**
   * 
   * @param {Number} code
   * @method -> GET
   * @return {Object} 
   * @api private
   */
  searchVisit(code) {
    return this.http.get(`${this.baseUrl}/visits-search/?code=${code}`);

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
    return this.http.post(`${this.baseUrl}/checkin`, body);
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
    return this.http.post(`${this.baseUrl}/checkin`, body);
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
    return this.http.post(`${this.baseUrl}/visit-check`, body);
  }


}
