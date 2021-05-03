import styled from "styled-components";

const SpinnerWrapper = styled.div`
  text-align: center;

  & > div {
    width: 8px;
    height: 8px;
    margin: auto 2.5px;
    background: rgb(152, 152, 152);

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  & .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

function LoadingAnimation() {
  return (
    <SpinnerWrapper data-testid="LoadingAnimation__wrapper">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </SpinnerWrapper>
  );
}

export default LoadingAnimation;
