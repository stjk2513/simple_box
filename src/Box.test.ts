import { mount } from "@vue/test-utils";
import Box from "./Box.vue";

test("renders a basic box", () => {
  const wrapper = mount(Box);

  const box = wrapper.get('[data-test="box"]');

  expect(box.text()).toBe("Hello");
});
