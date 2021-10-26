import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        results: [
          {
            name: {
              first: "John",
              last: "Doe",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/39.jpg",
            },
            login: {
              username: "johndoe",
            },
          },
        ],
      },
    }),
  },
}));

describe("FollowersList", () => {
  // Runs before each test
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST");
  });

  beforeAll(() => {
    console.log("RAN ONCE BEFORE TESTS");
  });

  afterEach(() => {
    console.log("RUNNING AFTER EACH TEST");
  });

  afterAll(() => {
    console.log("RAN ONCE AFTER ALL TESTS");
  });

  it("should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("should render multiple follower items", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElement = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElement.length).toBe(5);
  //   });
});
