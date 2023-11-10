
const app = require('../app');
const request = require('supertest');
const supertest = require('supertest');

describe("httpgetAllLaunches", () =>
{
  describe("get Lauches route", () =>
  {
    describe("There are no lauch", () =>
    {
      it("should return a 404", async () =>
      {
      //  expect(true).toBe(true);
        await supertest(app).get(`/httpgetAllLaunches`).expect(404);
      }
      )
    })
   
  })
}

);


describe("httpAddNewLaunch", () =>
{
  describe("create Lauch route", () =>
  {
    describe("Can not create Lauch", () =>
    {
      it("should return a 403", async () =>
      {
      //  expect(true).toBe(true);
        await supertest(app).post(`/httpAddNewLaunch`).expect(403);
      }
      )
    })
   
  })
}

);


describe("httpAbortLaunch", () =>
{
  describe("delete Lauch route", () =>
  {
    describe("Can not delete Lauch", () =>
    {
      it("should return a 404", async () =>
      {
      //  expect(true).toBe(true);
        await supertest(app).delete(`/httpAbortLaunch`).expect(404);
      }
      )
    })
   
  })
}

);