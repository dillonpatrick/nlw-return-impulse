import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendmail: sendmailSpy }
);

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "Example comment",
        screenshot: "data:image/png;base64,isjdfnbgkdfb",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendmailSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit feedback without type or comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "",
        screenshot: "data:image/png;base64,isjdfnbgkdfb",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback without an invalid format image", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "Comment",
        screenshot: "invalidImage",
      })
    ).rejects.toThrow();
  });
});
