import { newE2EPage } from "@stencil/core/testing";

describe("zui-number-input", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<zui-number-input></zui-number-input>");
    const element = await page.find("zui-number-input");
    expect(element).not.toBeNull();
  });

  // describe("only takes number values when setting value prop", () => {
  //   it("render the number 10", async () => {
  //     const page = await newE2EPage();

  //     await page.setContent("<zui-number-input value='10'></zui-number-input>");
  //     const input = await page.find("zui-number-input >>> input");
  //     let value = await input.getProperty("value");

  //     expect(value).toBe("10");
  //     expect(value).not.toBe("");
  //   });

  //   it("renders an empty string", async () => {
  //     const page = await newE2EPage();

  //     await page.setContent("<zui-number-input value='.'></zui-number-input>");
  //     const input = await page.find("zui-number-input >>> input");
  //     let value = await input.getProperty("value");

  //     expect(value).toBe("");
  //     expect(value).not.toBe(".");
  //   });
  // });

  // describe("only takes number values when typing number", () => {
  //   it("renders an empty string when . character is pressed", async () => {
  //     const page = await newE2EPage();

  //     await page.setContent("<zui-number-input value='.'></zui-number-input>");
  //     const input = await page.find("zui-number-input >>> input");
  //     await input.type(",");
  //     let value = await input.getProperty("value");

  //     expect(value).toBe("");
  //     expect(value).not.toBe(".");
  //   });
  //   it("renders an empty string when - character is pressed", async () => {
  //     const page = await newE2EPage();

  //     await page.setContent("<zui-number-input value='.'></zui-number-input>");
  //     const input = await page.find("zui-number-input >>> input");
  //     await input.type("-");
  //     let value = await input.getProperty("value");

  //     expect(value).toBe("");
  //     expect(value).not.toBe("-");
  //   });
  //   it("renders a number when number is pressed", async () => {
  //     const page = await newE2EPage();

  //     await page.setContent("<zui-number-input value='.'></zui-number-input>");
  //     const input = await page.find("zui-number-input >>> input");
  //     await input.type("9");
  //     let value = await input.getProperty("value");

  //     expect(value).toBe("9");
  //     expect(value).not.toBe("");
  //   });
  // });
});
