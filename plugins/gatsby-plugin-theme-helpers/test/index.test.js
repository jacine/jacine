const babel = require("@babel/core")
const plugin = require("../src/babel-plugin-gatsby-shadow")

function transform(code) {
  return babel.transform(code, {
    plugins: [plugin],
  }).code
}

describe("babel-plugin-gatsby-shadow", () => {
  it("adds shadow data attributes", () => {
    //
  })
})
