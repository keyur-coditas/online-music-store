import { css } from 'lit-element';
export const mediaQueries = css`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    .auth-container {
      width: 80%;
    }
    .str-input {
      width: 80%;
    }
    .str-textarea {
      width: 80%;
    }
    .card-container {
      grid-template-columns: 100%;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 600px) {
    .card-container {
      grid-template-columns: 100%;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 720px) {
    .card-container {
      grid-template-columns: 40% 40%;
    }
  }

  @media screen and (min-width: 721px) and (max-width: 999px) {
    .card-container {
      grid-template-columns: 30% 30% 30%;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 720px) {
    .str-input {
      width: 80%;
    }
    .str-textarea {
      width: 80%;
    }
  }
`;
