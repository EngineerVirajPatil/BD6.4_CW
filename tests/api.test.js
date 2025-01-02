const request = require("supertest");
const { app } = require("../index.js");
const {
  getBooks,
  getBookById,
  getReviews,
  getReviewById,
} = require("../book.js");

const http = require("http");

jest.mock("../book.js", () => ({
  ...jest.requireActual("../book.js"),
  getBooks: jest.fn(),
  getBookById: jest.fn(),
  getReviews: jest.fn(),
  getReviewById: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3002, done);
});

afterAll((done) => {
  server.close(done);
});

jest.setTimeout(50000);

describe("Testing for Book and Review", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("API /getBooks should return 404 when no books are found", async () => {
    getBooks.mockResolvedValue([]); 

    const response = await request(server).get("/books");
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe("No Book Found"); 
  });

  it("API /books/details/:id should return 404 when no books are found", async () => {
    getBookById.mockResolvedValue(null); 

    const response = await request(server).get("/books/details/9999999");
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe("No Book Found"); 
  });

  it("API /reviews should return 404 when no Review are found", async () => {
    getReviews.mockResolvedValue([]); 

    const response = await request(server).get("/reviews");
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe("No Review Found"); 
  });

  it("API /reviews/details/:id should return 404 when no books are found", async () => {
    getReviewById.mockResolvedValue(null); 

    const response = await request(server).get("/reviews/details/9999999");
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe("No Review Found"); 
  });

});
