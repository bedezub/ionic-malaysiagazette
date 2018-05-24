// Written by Dr. Zub
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RssProvider {

  constructor(
    public http: HttpClient,
  ) {
    this.getUtama();
    this.getNasional();
    this.getPolitik();
    this.getDunia();
    this.getEkonomi();
    this.getSeni();
    this.getCina();
    this.getMgtv();
    this.getGaleri();
  }
  
  // Call Utama rss from WP API
  getUtama() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '32');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

  // Call Utama rss from WP API
  getNasional() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '2');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

  // Call Utama rss from WP API
  getPolitik() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '12');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

  // Call Utama rss from WP API
  getEkonomi() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '16');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

  // Call Utama rss from WP API
  getDunia() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '18');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

  // Call Utama rss from WP API
  getSeni() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '19');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

  // Call Utama rss from WP API
  getCina() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '22');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

  // Call Utama rss from WP API
  getMgtv() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '11');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }
  
  // Call Utama rss from WP API
  getGaleri() {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '23');
    params = params.append('_embed', '');
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    return response;
  }

}
