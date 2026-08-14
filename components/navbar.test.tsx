import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./navbar";

describe("Navbar", () => {
  it("keeps the mobile menu out of the tab order until opened, and closes it again on link click", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: /toggle menu/i });
    const menu = screen.getByTestId("mobile-menu");

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(menu).toHaveAttribute("inert");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(menu).not.toHaveAttribute("inert");

    const [firstLink] = within(menu).getAllByRole("link");
    await user.click(firstLink);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(menu).toHaveAttribute("inert");
  });
});
