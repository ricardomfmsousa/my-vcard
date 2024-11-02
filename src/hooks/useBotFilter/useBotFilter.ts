import { window } from "browser-monads-ts";
import { differenceInSeconds } from "date-fns";
import React from "react";

export type ChallengeCallback = (reply: string) => boolean;

/**
 * This hook is meant to be used along a form validation flow in order to filter
 * out most of the spam bots without affecting the user experience by performing
 * some simple verifications, like checking for the user agent string and the
 * time spent since loading to submitting the form.
 * If those verifications fail to verify human interaction, a final prompt will
 * be shown and evaluated by the `challenge` callback function.
 */
export const useBotFilter = (
  challengeMessage: string
): ((challenge: ChallengeCallback) => boolean) => {
  const [startDate] = React.useState(new Date());
  const { userAgent } = window.navigator;
  const TIME_SPENT_THRESHOLD_SEC = 15;

  const isBot = (challenge: ChallengeCallback) => {
    const timeSpent = differenceInSeconds(new Date(), startDate);
    let isBotDetected = false;

    if (userAgent.length === 0) {
      isBotDetected = true;
    }
    if (timeSpent < TIME_SPENT_THRESHOLD_SEC) {
      isBotDetected = true;
    }
    // As a last resort perform a challenge
    if (isBotDetected) {
      const reply = String(prompt(challengeMessage));
      isBotDetected = challenge(reply);
    }

    return isBotDetected;
  };

  return isBot;
};
