import { mount } from "@vue/test-utils";
import Box from "./Box.vue";

test("renders a basic box", () => {
  const wrapper = mount(Box);

  const box = wrapper.get('[data-test="box"]');

  expect(box.text()).toBe("Hello");
});

test("on box click, the box should change color to green", async () => {
  const wrapper = mount(Box);

  const box = wrapper.get('[data-test="box"]');
  await box.trigger("click");

  expect(box.classes()).toContain("green");
});

test("on green box click, the box should return back to clear", async () => {
  const wrapper = mount(Box);

  const box = wrapper.get('[data-test="box"]');
  await box.trigger("click");
  await box.trigger("click");

  expect(box.classes()).not.toContain("green");
});
