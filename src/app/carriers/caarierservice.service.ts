import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaarierserviceService {

  constructor() { }
  getCarriers() {
    return newCards;
  }
}


const carriers = [
  {
    "carrierId": '11211',
    "carrierTitle": "Test Carrier 1",
    "modifiedDate": "13102020",
    "modifiedBy": "Test User 1",
    "version": "1.2.2",
    "currentState": "Active",
    "lock": false
  },
  {
    "carrierId": '11212',
    "carrierTitle": "Test Carrier 2",
    "modifiedDate": "10102020",
    "modifiedBy": "Test User 2",
    "version": "1.2.3",
    "currentState": "Draft",
    "lock": true
  },
  {
    "carrierId": '11213',
    "carrierTitle": "Test Carrier 3",
    "modifiedDate": "13102019",
    "modifiedBy": "Test User 1",
    "version": "1.2.1",
    "currentState": "Draft",
    "lock": false
  },
  {
    "carrierId": '11214',
    "carrierTitle": "Test Carrier 4",
    "modifiedDate": "11102020",
    "modifiedBy": "Test User 3",
    "version": "1.3.1",
    "currentState": "Active",
    "lock": true
  },
];

const newCards = {
  "card_carriers": [
    {
      "carrierId": "carrierId1",
      catalogId: "catalogId1",
      "carrierTitle": "Gold Card Main Carrier First Page",
      "modifiedDate": "13/10/2020",
      "modifiedBy": "Jane Doe",
      "version": "1.1",
      "currentState": "Active",
      "lock": true
    },
    {
      "carrierId": "carrierId2",
      catalogId: "catalogId2",
      "carrierTitle": "Gold Card Main Carrier Second Page",
      "modifiedDate": "18/05/2020",
      "modifiedBy": "Jane Doe",
      "version": "1.2",
      "currentState": "Active",
      "lock": true
    },
    {
      "carrierId": "carrierId3",
      catalogId: "catalogId3",
      "carrierTitle": "Gold Card Main Carrier Third Page",
      "modifiedDate": "10/09/2020",
      "modifiedBy": "Jane Doe",
      "version": "2.5",
      "currentState": "Draft",
      "lock": false
    },
    {
      "carrierId": "carrierId4",
      catalogId: "catalogId4",
      "carrierTitle": "Pin Mailer First Page",
      "modifiedDate": "17/07/2020",
      "modifiedBy": "Jane Doe",
      "version": "1.4",
      "currentState": "Active",
      "lock": "false"
    },
    {
      "carrierId": "carrierId5",
      catalogId: "catalogId5",
      "carrierTitle": "Pin Mailer Second Page",
      "modifiedDate": "19/07/2020",
      "modifiedBy": "Jane Doe",
      "version": "1.1",
      "currentState": "Draft",
      "lock": false
    },
    {
      "carrierId": "carrierId6",
      catalogId: "catalogId6",
      "carrierTitle": "Metal Card Carrier",
      "modifiedDate": "13/08/2020",
      "modifiedBy": "Jane Doe",
      "version": "1.3",
      "currentState": "Draft",
      "lock": false
    },
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "total": 6
  }
}