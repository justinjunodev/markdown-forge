import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import { createOvermindMock } from "overmind"
import { Provider } from "overmind-react"
import { config } from "../../hooks/useOvermind"
import Nav from "./Nav"

const mockedOvermind = createOvermindMock(config)

describe("<Nav />", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider value={mockedOvermind}>
        <Nav />
      </Provider>
    )
  })

  it("matches snapshot with context passed correctly", () => {
    const wrapper = shallow(
      <Provider value={mockedOvermind}>
        <Nav />
      </Provider>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
