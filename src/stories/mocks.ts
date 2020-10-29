export class StorybookMocks {
  public static getstoreMock = () => {
    return {
      dispatch: () => {},
      pipe: () => {},
    };
  };

  public static getrouterMock = () => {
    return {
      navigate: () => {},
    };
  };
}
