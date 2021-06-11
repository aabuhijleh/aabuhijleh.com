import { keyframes } from "styled-components/macro";

export const shakeAnimation = keyframes`
  0% {
    transform: rotate(20deg);
  }
  30% {
    transform: rotate(-20deg);
  }
  60% {
    transform: rotate(10deg);
  }
  90% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0);
  }
`;
