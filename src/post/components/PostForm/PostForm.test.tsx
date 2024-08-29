import { render, screen } from "@testing-library/react";
import PostForm from "./PostForm";

describe("Given the PostForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Author:' as a label for a text box", () => {
      const authorLabelText = "Author:";

      render(<PostForm />);

      const authorLabel = screen.getByRole("textbox", {
        name: authorLabelText,
      });

      expect(authorLabel).toBeInTheDocument();
    });

    test("Then it should show a button with a 'Send' text in it", () => {
      const sendButtonText = "Send";

      render(<PostForm />);

      const sendButton = screen.getByRole("button", {
        name: sendButtonText,
      });

      expect(sendButton).toBeInTheDocument();
    });
  });
});
