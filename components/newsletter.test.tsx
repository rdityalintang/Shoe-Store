import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Newsletter } from "./newsletter";

describe("Newsletter", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("submits the email to /api/newsletter and shows a success message", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<Newsletter />);

    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(await screen.findByRole("status")).toHaveTextContent(/welcome to the circle/i);
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/newsletter",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ email: "test@example.com" }),
      })
    );
  });

  it("surfaces the API error instead of pretending to succeed", async () => {
    const user = userEvent.setup();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ ok: false, error: "Please enter a valid email address." }),
      })
    );

    render(<Newsletter />);

    await user.type(screen.getByLabelText(/email address/i), "someone@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/valid email address/i);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
